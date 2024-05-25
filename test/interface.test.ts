import { Empploye, Manager, Person, Seller, SellerInteface } from "../src/interface"

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

        const person:Person = {
            name: "usman",
            sapaDia(name:string):string{
                return `halo ${name} my name is ${this.name}`
            }
        }

        console.log(person.sapaDia("joko"));
        console.log(person.name)

    })

    it("Intersection Type", ()=> {
        interface value1 {
            id: number
        }

        interface value2 {
            name: string
        }

        // cara 1
        // interface domain extends value1, value2{}

        // cara 2
        type domain = value1 & value2;

        const test: domain = {
            id: 1,
            name: "usman",
        }

        console.log(test)
    })

    it("Type assertion", ()=> {
        const person1:any ={
            id: 1,
            name: 17,
        }

        const person2: Person = person1 as Person

        console.log(person2.name)
    })
})