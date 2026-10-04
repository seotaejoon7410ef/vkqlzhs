import type { MetadataRoute } from "next";

const BASE_URL = "https://www.happyguide.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/elementary", "/middle", "/faq", "/contact", "/about"];
  return pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
