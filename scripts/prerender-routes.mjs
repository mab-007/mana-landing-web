/**
 * Prerender script for mymana.xyz
 *
 * After Vite builds the SPA, this script generates a static HTML file for
 * every blog route with per-route SEO metadata (title, meta description,
 * canonical URL, JSON-LD Article schema) baked into the server-rendered HTML.
 *
 * Usage: node scripts/prerender-routes.mjs
 * Called automatically by the build script.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const DIST = "dist";
const INDEX_HTML = join(DIST, "index.html");

// ---- Route metadata ----
// Every route that needs server-visible per-article SEO metadata.
// Add new blog posts here when they're published.
const ROUTES = [
  {
    path: "/",
    title: "Mana for OFWs: Cheapest Remittances and USD Banking Abroad",
    description:
      "Send money home free, save USD at 3.5% APY, and spend globally with a Visa card. Built for OFWs and Filipinos abroad — join the waitlist today.",
    canonical: "https://mymana.xyz/",
    schema: null,
  },
  {
    path: "/freelancers",
    title: "Mana for Filipino Freelancers — USD Banking & Remittance",
    description:
      "A US bank account for Filipino freelancers. Get paid in USD, convert at mid-market rates, earn 3.5% APY. No SSN needed. Join the Mana waitlist.",
    canonical: "https://mymana.xyz/freelancers",
    schema: null,
  },
  {
    path: "/ofw",
    title: "OFW Banking & Cheapest Remittances | Send Money Home with Mana",
    description:
      "Send money home free, save USD at 3.5% APY, and spend globally with a Visa card — all in one app built for OFWs and Filipinos abroad. Join the Mana waitlist today.",
    canonical: "https://mymana.xyz/ofw",
    schema: null,
  },
  {
    path: "/about",
    title: "About Mana — Built by immigrants, banking without borders",
    description:
      "Mana is a financial technology company built for global Filipinos.",
    canonical: "https://mymana.xyz/about",
    schema: null,
  },
  {
    path: "/card",
    title: "Mana Visa Card for OFWs | Spend Globally",
    description:
      "The Mana Visa Card for OFWs — accepted globally with no hidden fees and full account integration. Manage your money and spend in one app. Join the waitlist.",
    canonical: "https://mymana.xyz/card",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Mana Visa Card",
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      description:
        "A virtual Visa card for Filipinos abroad that works wherever Visa is accepted. Add to Apple Pay or Google Pay for instant spending.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: "https://mymana.xyz/card/",
      },
    },
  },
  {
    path: "/blog",
    title: "The Mana blog — Tips to grow your wealth",
    description:
      "Tips, guides, and resources for OFWs and global Filipinos managing cross-border money, saving in USD, and building financial security.",
    canonical: "https://mymana.xyz/blog",
    schema: null,
  },
  {
    path: "/blog/money-in-america-nurses",
    title: "Money in America: A Starter Guide for New Filipino Nurses — Mana",
    description:
      "A financial starter guide for newly arrived Filipino nurses in the USA. Learn about US banking, remittance, and saving.",
    canonical: "https://mymana.xyz/blog/money-in-america-nurses",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Money in America: A Starter Guide for New Filipino Nurses",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/money-in-america-nurses" },
    },
  },
  {
    path: "/blog/open-us-bank-account",
    title: "How to Open Your First US Bank Account (Even With No Credit History) — Mana",
    description:
      "Learn how to open a US bank account with no credit history. Step-by-step guide for OFWs and new immigrants.",
    canonical: "https://mymana.xyz/blog/open-us-bank-account",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Open Your First US Bank Account (Even With No Credit History)",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/open-us-bank-account" },
    },
  },
  {
    path: "/blog/best-app-send-money-philippines",
    title: "The Best App to Send Money to PH for Free (No Hidden Fees) — Mana",
    description:
      "Find the best app to send money to the Philippines. Compare fees, FX rates, and transfer speeds across top services.",
    canonical: "https://mymana.xyz/blog/best-app-send-money-philippines",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "The Best App to Send Money to PH for Free (No Hidden Fees)",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/best-app-send-money-philippines" },
    },
  },
  {
    path: "/blog/best-us-bank-for-ofw",
    title: "Your Guide to the 6 Best US Banks for OFWs — Mana",
    description:
      "Compare the best US banks for OFWs. Find accounts with no SSN requirement, low remittance fees, and high savings yields.",
    canonical: "https://mymana.xyz/blog/best-us-bank-for-ofw",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Your Guide to the 6 Best US Banks for OFWs",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/best-us-bank-for-ofw" },
    },
  },
  {
    path: "/blog/us-bank-account-for-filipino-freelancers",
    title: "US Bank Account for Filipino Freelancers: A Complete Guide — Mana",
    description:
      "Get a US bank account for Filipino freelancers. Receive USD payments, convert at mid-market rates, earn 3.5% APY. No SSN required.",
    canonical: "https://mymana.xyz/blog/us-bank-account-for-filipino-freelancers",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "US Bank Account for Filipino Freelancers: A Complete Guide",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-02",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/us-bank-account-for-filipino-freelancers" },
    },
  },
  {
    path: "/blog/send-money-from-us-to-gcash",
    title: "How to Send Money from US to GCash Instantly with Zero Fees — Mana",
    description:
      "Get your family more pesos when you send money from US to GCash. Mana delivers more PHP with zero fees and real mid-market rates.",
    canonical: "https://mymana.xyz/blog/send-money-from-us-to-gcash",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Send Money from US to GCash Instantly with Zero Fees",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-03",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/send-money-from-us-to-gcash" },
    },
  },
  {
    path: "/blog/best-php-exchange-rate",
    title: "How to Find the Best PHP Exchange Rate Today — Mana",
    description:
      "Learn how to find the best PHP exchange rate. Compare rates across services and avoid hidden FX markups that cost OFWs billions.",
    canonical: "https://mymana.xyz/blog/best-php-exchange-rate",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Find the Best PHP Exchange Rate Today",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/best-php-exchange-rate" },
    },
  },
  {
    path: "/blog/cheapest-way-to-send-money-to-philippines",
    title: "Cheapest Way to Send Money to Philippines: Complete Guide — Mana",
    description:
      "Get the complete guide to the cheapest way to send money to the Philippines. Compare fees, hidden FX markups, and transfer speeds.",
    canonical: "https://mymana.xyz/blog/cheapest-way-to-send-money-to-philippines",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Cheapest Way to Send Money to Philippines: Complete Guide",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-03",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/cheapest-way-to-send-money-to-philippines" },
    },
  },
  {
    path: "/blog/cheapest-way-send-money-philippines",
    title: "5 Cheapest Ways to Send Money to Philippines from USA — Mana",
    description:
      "Compare the 5 cheapest ways to send money to the Philippines from the USA. Save on fees and get the best exchange rates.",
    canonical: "https://mymana.xyz/blog/cheapest-way-send-money-philippines",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "5 Cheapest Ways to Send Money to Philippines from USA",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/cheapest-way-send-money-philippines" },
    },
  },
  {
    path: "/blog/best-way-to-send-money-to-philippines-2026",
    title: "Best Way to Send Money to Philippines 2026: Top 6 Services Ranked — Mana",
    description:
      "Get the best way to send money to Philippines in 2026. Compare fees, exchange rates, and speed for Wise, Remitly, Western Union, and Mana.",
    canonical: "https://mymana.xyz/blog/best-way-to-send-money-to-philippines-2026",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Best Way to Send Money to Philippines 2026: Top 6 Services Ranked",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-06",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/best-way-to-send-money-to-philippines-2026" },
    },
  },
  {
    path: "/blog/itin-vs-ssn-filipino-immigrants-guide",
    title: "ITIN vs SSN: A Complete Guide for Filipino Immigrants — Mana",
    description:
      "Learn the difference between ITIN vs SSN. Complete guide for Filipino immigrants navigating US banking and tax requirements.",
    canonical: "https://mymana.xyz/blog/itin-vs-ssn-filipino-immigrants-guide",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ITIN vs SSN: A Complete Guide for Filipino Immigrants",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/itin-vs-ssn-filipino-immigrants-guide" },
    },
  },
  {
    path: "/blog/itin-bank-account-opening-guide",
    title: "ITIN Bank Account Opening: A Complete US Banking Guide — Mana",
    description:
      "Step-by-step guide to ITIN bank account opening. Learn which US banks accept ITIN and how Filipino immigrants can access US banking.",
    canonical: "https://mymana.xyz/blog/itin-bank-account-opening-guide",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ITIN Bank Account Opening: A Complete US Banking Guide",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-13",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/itin-bank-account-opening-guide" },
    },
  },
  {
    path: "/blog/us-bank-account-for-filipinos-complete-guide",
    title: "US Bank Account for Filipinos: Complete How-To Guide — Mana",
    description:
      "Get a US bank account for Filipinos without an SSN or US address. Compare the best options for OFWs including ChexSystems-free accounts. Sign up for Mana today.",
    canonical: "https://mymana.xyz/blog/us-bank-account-for-filipinos-complete-guide",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "US Bank Account for Filipinos: Complete Eligibility Guide for OFWs",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-20",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/us-bank-account-for-filipinos-complete-guide" },
      image:
        "https://zleague-public-prod.s3.us-east-2.amazonaws.com/article_images/fb65cf22-4753-4f91-965c-73d1107d7d30/us-bank-account-for-filipinos-complete-eligibility-guide-for-ofws-606206.webp",
    },
  },
  {
    path: "/blog/mid-market-exchange-rate-explained",
    title: "Mid-Market Exchange Rate Explained: A Guide for OFWs — Mana",
    description:
      "Get the mid-market exchange rate explained in simple terms. Learn how hidden FX markups cost OFW families $500M+ annually and how to send every dollar home.",
    canonical: "https://mymana.xyz/blog/mid-market-exchange-rate-explained",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Mid-Market Exchange Rate Explained: A Guide for OFWs",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-17",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/mid-market-exchange-rate-explained" },
    },
  },
  {
    path: "/blog/send-money-to-the-philippines-complete-ofw-guide",
    title: "Send Money to the Philippines: The Complete OFW Guide for 2026 — Mana",
    description:
      "Learn how to send money to the Philippines without overpaying. Compare remittance services, hidden FX costs, and find the cheapest way to send money home.",
    canonical: "https://mymana.xyz/blog/send-money-to-the-philippines-complete-ofw-guide",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Send Money to the Philippines: The Complete OFW Guide for 2026",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-17",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/send-money-to-the-philippines-complete-ofw-guide" },
    },
  },
  {
    path: "/blog/high-yield-usd-savings-for-ofw",
    title: "High Yield USD Savings for OFW: Earn 3.5% APY — Mana",
    description:
      "Start earning 3.5% APY on your high yield USD savings for OFW accounts. Keep your dollars safe from inflation with near-zero fee transfers and FDIC insurance.",
    canonical: "https://mymana.xyz/blog/high-yield-usd-savings-for-ofw",
    schema: null,
  },
  {
    path: "/blog/filipino-freelancer-banking-usd",
    title: "Filipino Freelancer Banking USD: Complete Money Guide — Mana",
    description:
      "Learn how Filipino freelancers can receive, hold, spend, and convert USD with clearer fees, faster transfers, and a global card.",
    canonical: "https://mymana.xyz/blog/filipino-freelancer-banking-usd",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Filipino Freelancer Banking USD: Complete Money Guide",
      author: { "@type": "Person", name: "Paco Litonjua" },
      publisher: { "@type": "Organization", name: "Mana", url: "https://mymana.xyz/" },
      datePublished: "2026-07-23",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://mymana.xyz/blog/filipino-freelancer-banking-usd" },
    },
    extraSchemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can Filipino freelancers open a US dollar account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Eligible Filipino freelancers can use providers that offer USD account details or USD wallets without requiring a US residential address. With Mana, account eligibility requires a Philippine address and valid ID. Review each provider's current verification requirements before applying."
            }
          },
          {
            "@type": "Question",
            "name": "How can I receive USD payments as a Filipino freelancer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose a provider that gives you a compatible USD receiving method, then add those details to your invoices or supported payment platforms. Compare the exchange rate, account fees, delivery timing, card access, and the ability to transfer to a Philippine bank or e-wallet."
            }
          },
          {
            "@type": "Question",
            "name": "Are USD balances for Filipinos FDIC insured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the provider's structure. Mana is a financial technology company, not a bank. Banking services are provided by partner bank SSB Bank, Member FDIC. Eligible funds are FDIC insured up to $250,000 through the partner bank, subject to applicable requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best way to manage USD income in the Philippines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use a setup that lets you receive USD, keep it in USD until you decide to convert, spend globally when needed, and move PHP for local expenses. Compare the full cost, including the exchange-rate spread, transfer fees, card fees, and minimum-balance rules."
            }
          }
        ]
      }
    ],
  },
  {
    path: "/privacy",
    title: "Privacy Notice — Mana",
    description: "Mana's privacy notice and data handling practices.",
    canonical: "https://mymana.xyz/privacy",
    schema: null,
  },
  {
    path: "/terms",
    title: "Terms of Service — Mana",
    description: "Mana's terms of service and conditions of use.",
    canonical: "https://mymana.xyz/terms",
    schema: null,
  },
];

function indent(text) {
  return text.replace(/^/gm, "    ");
}

/**
 * Generate a canonical <link> tag.
 */
function canonicalTag(url) {
  return `  <link rel="canonical" href="${url}" />`;
}

/**
 * Generate a JSON-LD <script> tag from a schema object.
 */
function jsonLdTag(schema) {
  if (!schema) return "";
  const json = JSON.stringify(schema, null, 2);
  return `\n  <script type="application/ld+json">\n${indent(json)}\n  </script>`;
}

/**
 * Build an SEO-enhanced HTML file for a single route.
 */
function buildHtml(route) {
  const base = readFileSync(INDEX_HTML, "utf-8");

  // Replace <title>
  const withTitle = base.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace or insert meta description
  const descRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/;
  const metaDesc = `  <meta name="description" content="${route.description}" />`;
  const withDesc = descRegex.test(withTitle)
    ? withTitle.replace(descRegex, metaDesc)
    : withTitle.replace("</head>", `${metaDesc}\n</head>`);

  // Replace OG title
  const ogTitleRegex = /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/;
  const ogTitle = `  <meta property="og:title" content="${route.title}" />`;
  const withOg = ogTitleRegex.test(withDesc)
    ? withDesc.replace(ogTitleRegex, ogTitle)
    : withDesc.replace("</head>", `${ogTitle}\n</head>`);

  // Replace OG description
  const ogDescRegex = /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/;
  const withOgDesc = ogDescRegex.test(withOg)
    ? withOg.replace(ogDescRegex, `  <meta property="og:description" content="${route.description}" />`)
    : withOg;

  // Replace OG URL
  const ogUrlRegex = /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/;
  const withOgUrl = ogUrlRegex.test(withOgDesc)
    ? withOgDesc.replace(ogUrlRegex, `  <meta property="og:url" content="${route.canonical}" />`)
    : withOgDesc;

  // Replace Twitter title
  const twTitleRegex = /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/;
  const withTw = twTitleRegex.test(withOgUrl)
    ? withOgUrl.replace(twTitleRegex, `  <meta name="twitter:title" content="${route.title}" />`)
    : withOgUrl;

  // Replace Twitter description
  const twDescRegex = /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/;
  const withTwDesc = twDescRegex.test(withTw)
    ? withTw.replace(twDescRegex, `  <meta name="twitter:description" content="${route.description}" />`)
    : withTw;

  // Remove any existing canonical tag first (build-injected homepage canonical)
  const withoutOldCanon = withTwDesc.replace(/  <link rel="canonical"[^>]*>\n?/g, "");
  // Generate all schema tags (main + extra)
  let allSchemaTags = jsonLdTag(route.schema);
  if (route.extraSchemas) {
    for (const extra of route.extraSchemas) {
      allSchemaTags += jsonLdTag(extra);
    }
  }
  // Insert the correct per-route canonical link before </head>
  const withCanon = withoutOldCanon.replace(
    "</head>",
    `  ${canonicalTag(route.canonical)}\n${allSchemaTags}\n</head>`
  );

  return withCanon;
}

// ---- Main ----
console.log("Prerendering routes for mymana.xyz...");

for (const route of ROUTES) {
  const html = buildHtml(route);

  // Determine output path: /blog/some-article -> dist/blog/some-article/index.html
  // and / -> dist/index.html (preserve the original)
  if (route.path === "/") {
    // Keep the original index.html with homepage SEO
    writeFileSync(INDEX_HTML, html);
    console.log(`  ✅  /  -> dist/index.html`);
    continue;
  }

  const outDir = join(DIST, route.path.slice(1)); // remove leading "/"
  const outFile = join(outDir, "index.html");

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, html);
  console.log(`  ✅  ${route.path}  -> dist${route.path}/index.html`);
}

console.log("Prerender complete.");
