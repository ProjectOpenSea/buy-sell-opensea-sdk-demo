import { describe, it, expect } from "vitest";
import { execSync } from "child_process";
import { resolve } from "path";

describe("TypeScript compilation", () => {
  it("compiles src/ without errors", () => {
    const rootDir = resolve(__dirname, "..");
    const result = execSync("npx tsc --noEmit", {
      cwd: rootDir,
      encoding: "utf-8",
      timeout: 30_000,
    });
    // tsc exits 0 on success; execSync throws on non-zero exit
    expect(result).toBeDefined();
  });
});
