import { Customer, CustomerType } from "../src/enum-type"

describe("Enum", ()=>{
    it("Enum", ()=> {
        const customer: Customer = {
            id: 1,
            name: 'nangs',
            type: CustomerType.Gold,
        }

        console.log(customer)
    })
})