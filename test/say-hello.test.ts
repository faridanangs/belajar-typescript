import { sayHello } from "../src/say-hello"

describe("say hello", function():void{
    it("Sould return hello nangs", function():void{
        expect(sayHello("nangs")).toBe("hello nangs");
    })
})