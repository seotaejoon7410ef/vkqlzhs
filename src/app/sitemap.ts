import type { MetadataRoute } from "next";
import { SHOW_MIDDLE } from "@/config";

const BASE_URL = "https://siseonitda.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/elementary",
    ...(SHOW_MIDDLE ? ["/middle"] : []),
    "/faq",
    "/contact",
    "/about",
  ];
  return pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
