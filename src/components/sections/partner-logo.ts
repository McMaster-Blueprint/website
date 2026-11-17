import fs from "node:fs";
import path from "node:path";

const extensions = ["svg", "png", "webp", "jpg", "jpeg"];

/**
 * Looks for /public/partners/<slug>.<ext> at build time and returns its public
 * path, or null if no logo has been added yet. Server-only (uses the
 * filesystem), so only call it from server components.
 */
export function findPartnerLogo(slug: string): string | null {
  for (const ext of extensions) {
    const file = path.join(process.cwd(), "public", "partners", `${slug}.${ext}`);
    if (fs.existsSync(file)) return `/partners/${slug}.${ext}`;
  }
  return null;
}

export function partnerInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word))
    .map((word) => word[0])
    .slice(0, 3)
    .join("");
}
