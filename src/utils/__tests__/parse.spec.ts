import { parseLanguage } from "../parse";

describe("test utils > parse > parseLanguage", () => {
  it("zh => zh", () => {
    expect(parseLanguage("zh")).toBe("zh");
  });
  it("zh-cn => zh_CN", () => {
    expect(parseLanguage("zh-cn")).toBe("zh_CN");
  });
  it("zh_cn => zh_CN", () => {
    expect(parseLanguage("zh_cn")).toBe("zh_CN");
  });
  it("zh_CN => zh_CN", () => {
    expect(parseLanguage("zh_CN")).toBe("zh_CN");
  });
  it("'' => ''", () => {
    expect(parseLanguage("")).toBe("");
  });
  it("zh-cny => zh_CN", () => {
    expect(parseLanguage("zh-cny")).toBe("zh_CN");
  });
  it("zhn--cny => zh", () => {
    expect(parseLanguage("zhn--cny")).toBe("zh");
  });
  it("zhn__cny => zh", () => {
    expect(parseLanguage("zhn__cny")).toBe("zh");
  });
  it("zhn-cny => zh_CN", () => {
    expect(parseLanguage("zhn-cny")).toBe("zh_CN");
  });
  it("null => 'nu'", () => {
    expect(parseLanguage("null")).toBe("nu");
  });
});
