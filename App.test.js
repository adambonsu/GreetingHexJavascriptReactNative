import renderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  it("renders with one child", () => {
    const component = renderer.create(<App />).toJSON();
    expect(component.children).toHaveLength(1);
  });
  it("renders with the correct content", () => {
    const component = renderer.create(<App />).toJSON();
    expect(component.children[0].children[0]).toBe("Yagga!");
  });
});
