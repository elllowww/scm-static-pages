const { generateGreeting } = require("./script");

describe("generateGreeting", () => {
  test("greets the provided name", () => {
    expect(generateGreeting("Ada")).toBe("Hello, Ada!");
  });

  test("includes the full provided name", () => {
    expect(generateGreeting("SCM & CI/CD Lab visitor")).toBe(
      "Hello, SCM & CI/CD Lab visitor!"
    );
  });
});
