import { sayHello } from "../src/say-hello";
describe("say hello", function () {
    it("Sould return hello nangs", function () {
        expect(sayHello("nangs")).toBe("hello nangs");
    });
});
