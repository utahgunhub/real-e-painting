import { useEffect } from "react";

export const SITE_URL = "https://www.realepainting.com";
const SITE_NAME = "Real E Painting";
const DEFAULT_IMAGE = "/exterior-painting.png";

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const useSeo = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}: SeoOptions) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const scripts = (jsonLd ?? []).map((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "page";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => script.remove());
    };
  }, [title, description, path, image, type, noindex, jsonLd]);
};

const PROVIDER = {
  "@type": "LocalBusiness",
  name: SITE_NAME,
  telephone: "+1-435-777-3508",
  email: "real.e.painting@gmail.com",
  url: SITE_URL,
  areaServed: { "@type": "State", name: "Utah" },
};

export const buildBreadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${SITE_URL}${crumb.path === "/" ? "" : crumb.path}`,
  })),
});

export const buildServiceSchema = ({
  name,
  description,
  path,
  serviceType,
  faqs,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  faqs: { question: string; answer: string }[];
}): Record<string, unknown>[] => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    provider: PROVIDER,
    areaServed: { "@type": "State", name: "Utah" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  buildBreadcrumbSchema([
    { name: "Services", path: "/services" },
    { name, path },
  ]),
];
