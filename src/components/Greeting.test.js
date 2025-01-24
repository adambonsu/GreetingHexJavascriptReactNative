import renderer from "react-test-renderer";
import Greeting from "./Greeting";

describe("App", () => {
  it("renders with the correct content", () => {
    const component = renderer.create(<Greeting />).toJSON();
    expect(component.children[0].children[0]).toBe("Yagga yo!");
  });
});
