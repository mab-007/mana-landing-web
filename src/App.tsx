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
import blogPostBestPHPRate from "./site/blog-best-php-exchange-rate.html?raw";
import blogPostCheapestWay from "./site/cheapest-way-to-send-money-to-philippines.html?raw";
import blogPostCheapestWaysBespoke from "./site/cheapest-way-to-send-money-to-philippines.html?raw";
import blogPostBestWay2026 from "./site/best-way-to-send-money-to-philippines-2026.html?raw";
import blogPostItinVsSsn from "./site/blog-itin-vs-ssn.html?raw";
import blogPostItinBankAccount from "./site/blog-itin-bank-account-opening-guide.html?raw";
import about from "./site/about.html?raw";
import card from "./site/card.html?raw";
import blogPostUSBankAccountForFilipinos from "./site/us-bank-account-for-filipinos-complete-guide.html?raw";

type Route = { html: string; title: string; description?: string };

const ROUTES: Record<string, Route> = {
  "/": { html: home, title: "Mana for OFWs: Free Remittances and USD Banking Abroad" },
  "/freelancers": { html: freelancers, title: "Mana for Filipino Freelancers — USD Banking & Free Remittance", description: "A US bank account for Filipino freelancers. Get paid in USD, convert at mid-market rates, earn 3.5% APY. No SSN needed. Join the Mana waitlist." },
  "/freelances": { html: freelancers, title: "Mana for Filipino Freelancers — USD Banking & Free Remittance", description: "A US bank account for Filipino freelancers. Get paid in USD, convert at mid-market rates, earn 3.5% APY. No SSN needed. Join the Mana waitlist." },
  "/ofw": {
    html: ofw,
    title: "OFW Banking & Free Remittances | Send Money Home with Mana",
    description: "Send money home free, save USD at 3.5% APY, and spend globally with a Visa card — all in one app built for OFWs and Filipinos abroad. Join the Mana waitlist today."
  },
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
  "/blog/best-php-exchange-rate": { html: blogPostBestPHPRate, title: "How to Find the Best PHP Exchange Rate Today — Mana" },
  "/blog/cheapest-way-to-send-money-to-philippines": { html: blogPostCheapestWay, title: "Cheapest Way to Send Money to Philippines: Complete Guide — Mana" },
  "/blog/cheapest-way-send-money-philippines": { html: blogPostCheapestWaysBespoke, title: "5 Cheapest Ways to Send Money to Philippines from USA — Mana" },
  "/blog/best-way-to-send-money-to-philippines-2026": { html: blogPostBestWay2026, title: "Best Way to Send Money to Philippines 2026: Top 6 Services Ranked — Mana" },
  "/blog/itin-vs-ssn-filipino-immigrants-guide": { html: blogPostItinVsSsn, title: "ITIN vs SSN: A Complete Guide for Filipino Immigrants — Mana" },
  "/blog/itin-bank-account-opening-guide": { html: blogPostItinBankAccount, title: "ITIN Bank Account Opening: A Complete US Banking Guide — Mana" },
  "/blog/us-bank-account-for-filipinos-complete-guide": { html: blogPostUSBankAccountForFilipinos, title: "US Bank Account for Filipinos: A Complete Guide for OFWs — Mana", description: "Get a US bank account for Filipinos without an SSN or US address. Compare fees, FDIC insurance, and fintech options for OFWs. Join the Mana waitlist today." },
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
    if (route) {
      document.title = route.title;

      // Update meta description
      let md = document.querySelector('meta[name="description"]');
      if (!md) {
        md = document.createElement('meta');
        md.setAttribute('name', 'description');
        document.head.appendChild(md);
      }
      md.setAttribute('content', route.description || "Mana is a financial app built for OFWs and global Filipinos. Free remittances, 3.5% APY USD savings, and a global Visa card. Join the waitlist.");

      // Update OG title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', route.title);

      // Update OG description
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', route.description || "");

      // Update Twitter title
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', route.title);

      // Update Twitter description
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', route.description || "");
    }
  }, [route]);

  // Inject JSON-LD schema programmatically (script tags are stripped by
  // dangerouslySetInnerHTML). Each route change cleans up previous schema.
  useEffect(() => {
    const existing = document.getElementById("seo-schema");
    if (existing) existing.remove();
    if (path === "/card") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Mana Visa Card",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "iOS, Android",
        "description": "A virtual Visa card for Filipinos abroad that works wherever Visa is accepted. Add to Apple Pay or Google Pay for instant spending. Features include cashback on eligible purchases, no foreign transaction fees, ATM withdrawals, and family cards with spending limits. No monthly membership fee.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "No monthly membership fee. Cashback on eligible purchases. Other fees may apply. Card issued by our card partner pursuant to a license from Visa U.S.A. Inc.",
          "availability": "https://schema.org/PreOrder",
          "url": "https://mymana.xyz/card/"
        },
        "featureList": [
          "Accepted wherever Visa is accepted globally",
          "Add to Apple Pay or Google Pay",
          "Cashback on eligible purchases",
          "No foreign transaction fees",
          "ATM withdrawals at Visa-accepting ATMs",
          "Family cards with customizable spending limits",
          "Real-time transaction visibility",
          "No monthly membership fee"
        ],
        "browserRequirements": "Requires iOS or Android device",
        "softwareVersion": "1.0",
        "provider": {
          "@type": "Organization",
          "name": "Mana",
          "url": "https://mymana.xyz/"
        }
      };
      const script = document.createElement("script");
      script.id = "seo-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Inject Article/BlogPosting schema for blog posts
    const blogRoutes = [
      "/blog/us-bank-account-for-filipinos-complete-guide",
    ];
    if (blogRoutes.includes(path)) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "US Bank Account for Filipinos: A Complete Guide for OFWs",
        "description": "Get a US bank account for Filipinos without an SSN or US address. Compare fees, FDIC insurance, and fintech options for OFWs. Join the Mana waitlist today.",
        "author": {
          "@type": "Person",
          "name": "Paco Litonjua"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mana",
          "url": "https://mymana.xyz/"
        },
        "datePublished": "2026-07-13",
        "dateModified": "2026-07-13",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://mymana.xyz/blog/us-bank-account-for-filipinos-complete-guide"
        },
        "image": "https://zleague-public-prod.s3.us-east-2.amazonaws.com/article_images/fb65cf22-4753-4f91-965c-73d1107d7d30/us-bank-account-for-filipinos-a-complete-guide-for-ofws-345456.webp"
      };
      const script = document.createElement("script");
      script.id = "seo-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [path]);

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
