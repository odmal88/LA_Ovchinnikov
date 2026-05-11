import type { MetadataRoute } from "next";
import { getPublicWorks } from "@/lib/data/works";
import { siteUrl } from "@/lib/data/site-config";

const staticRoutes = ["", "/works", "/about", "/biography", "/exhibitions", "/contacts"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const workPages = getPublicWorks().map((work) => ({
    url: `${siteUrl}/works/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticPages, ...workPages];
}
