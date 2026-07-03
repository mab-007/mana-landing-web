import { useEffect, useState } from "react";
import { submitWaitlist } from "./waitlist";

// Exact replica pages (raw HTML from the reference site).
import home from "./site/home.html?raw";
import freelancers from "./site/freelancers.html?raw";
import ofw from "./site/ofw.html?raw";
import privacy from "./site/privacy.html?raw";
import terms from "./site/terms.html?raw";
import blog from "./site/blog.html?raw";
import blogPostNurses from "./site/blog-post-nurses.html?raw";
import blogPostBankAccount from "./site/blog-open-us-bank-account.html?raw";
import blogPostBestApp from "./site/blog-best-app-send-money-philippines.html?raw";
import blogPostBestBank from "./site/blog-best-us-bank-for-ofw.html?raw";
import blogPostFreelancers from "./site/blog-us-bank-account-for-filipino-freelancers.html?raw";
import blogPostSendMoneyGCash from "./site/blog-send-money-from-us-to-gcash.html?raw";
import about from "./site/about.html?raw";
import card from "./site/card.html?raw";

type Route = { html: string; title: string };

const ROUTES: Record<string, Route> = {
  "/": { html: home, title: "Mana — Financial services built for Filipinos everywhere" },
  "/freelancers": { html: freelancers, title: "Mana for Freelancers — Get paid in real dollars" },
  "/freelances": { html: freelancers, title: "Mana for Freelancers — Get paid in real dollars" },
  "/ofw": { html: ofw, title: "Mana for OFWs — The financial home for Filipinos abroad" },
  "/privacy": { html: privacy, title: "Privacy Notice — Mana" },
  "/terms": { html: terms, title: "Terms of Service — Mana" },
  "/about": { html: about, title: "About Mana — Built by immigrants, banking without borders" },
  "/card": { html: card, title: "The Mana Card — Spend wherever Visa is accepted" },
  "/blog": { html: blog, title: "The Mana blog — Tips to grow your wealth" },
  "/blog/money-in-america-nurses": { html: blogPostNurses, title: "Money in America: A Starter Guide for New Filipino Nurses — Mana" },
  "/blog/open-us-bank-account": { html: blogPostBankAccount, title: "How to Open Your First US Bank Account (Even With No Credit History) — Mana" },
  "/blog/best-app-send-money-philippines": { html: blogPostBestApp, title: "The Best App to Send Money to PH for Free (No Hidden Fees) — Mana" },
  "/blog/best-us-bank-for-ofw": { html: blogPostBestBank, title: "Your Guide to the 6 Best US Banks for OFWs — Mana" },
  "/blog/us-bank-account-for-filipino-freelancers": { html: blogPostFreelancers, title: "US Bank Account for Filipino Freelancers: A Complete Guide — Mana" },
  "/blog/send-money-from-us-to-gcash": { html: blogPostSendMoneyGCash, title: "How to Send Money from US to GCash Instantly with Zero Fees — Mana" },
  // Back-compat aliases for the old paths.
  "/privacy-policy": { html: privacy, title: "Privacy Notice — Mana" },
  "/terms-of-service": { html: terms, title: "Terms of Service — Mana" },
};

function normalize(pathname: string): string {
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

function source(path: string): string {
  if (path.startsWith("/freelan")) return "freelancers";
  if (path === "/ofw") return "ofw";
  return "home";
}

function scrollToHash(hash: string, smooth = true) {
  const el = document.getElementById(hash);
  if (el) el.scrollIntoView(smooth ? { behavior: "smooth" } : undefined);
}

export function App() {
  const [path, setPath] = useState(() => normalize(location.pathname));
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  // Keep state in sync with browser navigation (back/forward).
  useEffect(() => {
    const onPop = () => setPath(normalize(location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // After a cross-page navigation that carried a hash, scroll once rendered.
  useEffect(() => {
    if (pendingHash) {
      scrollToHash(pendingHash, false);
      setPendingHash(null);
    }
  }, [path, pendingHash]);

  // On first load with a hash in the URL (e.g. /#faq), scroll to it.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => scrollToHash(id, false), 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intercept internal link clicks for SPA navigation + smooth hash scroll.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || a.target === "_blank") return;

      // Pure anchor links: smooth-scroll within the current page.
      if (href.startsWith("#")) {
        if (href === "#") {
          e.preventDefault();
          return;
        }
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      // Internal route links.
      if (href.startsWith("/")) {
        const [pathname, hash] = href.split("#");
        const next = normalize(pathname);
        if (ROUTES[next]) {
          e.preventDefault();
          if (next !== path) {
            history.pushState(null, "", href);
            setPath(next);
            window.scrollTo(0, 0);
            // Defer scroll until the new page has rendered.
            setPendingHash(hash || null);
          } else if (hash) {
            scrollToHash(hash);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [path]);

  // Mobile nav: toggle the hamburger menu; close it when a menu link is tapped.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const toggle = target?.closest(".nav-toggle");
      if (toggle) {
        const nav = toggle.closest("nav");
        const open = nav?.classList.toggle("menu-open") ?? false;
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        return;
      }
      const link = target?.closest(".mobile-menu a");
      if (link) {
        const nav = link.closest("nav");
        nav?.classList.remove("menu-open");
        nav?.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Wire up waitlist forms (submits to Google Sheets).
  useEffect(() => {
    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLElement;
      if (!form.classList?.contains("wl-form")) return;
      e.preventDefault();
      const wrap = form.closest(".wl-wrap");
      const input = form.querySelector<HTMLInputElement>('input[type="email"]');
      const email = input?.value?.trim();
      if (!email) return;
      void submitWaitlist(email, source(path));
      wrap?.classList.add("sent");
      if (input) input.value = "";
    };
    document.addEventListener("submit", onSubmit);
    return () => document.removeEventListener("submit", onSubmit);
  }, [path]);

  const route = ROUTES[path];

  useEffect(() => {
    if (route) document.title = route.title;
  }, [route]);

  if (!route) {
    return (
      <div className="wrap" style={{ padding: "120px 24px", textAlign: "center" }}>
        <h1 className="fr" style={{ fontSize: 54 }}>Page not found</h1>
        <p className="lede">
          <a href="/" style={{ color: "var(--tanglaw-600)", fontWeight: 600 }}>Back to home</a>
        </p>
      </div>
    );
  }

  return <div key={path} dangerouslySetInnerHTML={{ __html: route.html }} />;
}
