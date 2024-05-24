import { CustomerType } from "../src/enum-type";
describe("Enum", () => {
    it("Enum", () => {
        const customer = {
            id: 1,
            name: 'nangs',
            type: CustomerType.Gold,
        };
        console.log(customer);
    });
});
