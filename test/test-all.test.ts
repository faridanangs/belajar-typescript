import { Seller, SellerInteface } from "../src/interface"

describe("TestAll", ()=> {
    it("Test Interface", ()=> {
        const seller: Seller = {
            id: 1,
            name: 'nangs',
            address: "sesela",
            nik: "0898278",
        }

        console.log(seller);
    })

    it("Function Interface", ()=> {
        const seller: SellerInteface = (id: number, name:string,address?:string) : string =>{
            const seller = {
                id: id,
                name: name,
                address: address,
            }
            return JSON.stringify(seller)
        }

        console.log(seller(1,"usman","sesele"))
    })
})