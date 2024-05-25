import { Empploye, Manager, Seller, SellerInteface } from "../src/interface"

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

    it("Extend interface", ()=> {
        const empploye:Empploye = {
            id: 1,
            name: "usman",
            division: "IT",
        }
        console.log(empploye)

        const manager:Manager = {
            id: 1,
            name: "usman",
            division: "IT",
            numberOfEmpployed: 10,
        }

        console.log(manager)
    })
    it("Function In Interface Atribute", ()=> {
        interface Person{
            name:string,
            sapaDia(name:string):string;
        }

        const person:Person = {
            name: "usman",
            sapaDia(name:string):string{
                return `halo ${name} my name is ${this.name}`
            }
        }

        console.log(person.sapaDia("joko"));
        console.log(person.name)

    })
})