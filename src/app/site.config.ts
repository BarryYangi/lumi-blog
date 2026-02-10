/**
 * Version & commit are filled at build time (Vercel: VERCEL_GIT_COMMIT_SHA, version from package.json).
 * Local dev falls back to package.json version and "dev" for commit.
 */
const commitSha =
  typeof process.env.NEXT_PUBLIC_GIT_COMMIT_SHA === "string" &&
  process.env.NEXT_PUBLIC_GIT_COMMIT_SHA.length > 0
    ? process.env.NEXT_PUBLIC_GIT_COMMIT_SHA.slice(0, 7)
    : "dev";

export const siteConfig = {
  githubRepoUrl: "https://github.com/BarryYangi/lumi-blog",
  version: process.env.NEXT_PUBLIC_APP_VERSION ?? "0.1.0",
  commitSha,
} as const;
