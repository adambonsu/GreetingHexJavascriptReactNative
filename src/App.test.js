import renderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  it("renders with one child", () => {
    const component = renderer.create(<App />).toJSON();
    expect(component.children).toHaveLength(1);
  });
});
