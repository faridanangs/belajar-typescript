import { Product } from "../src/alias-type"

describe("Alias Type", ()=> {
    it("Alias", ()=>{
        const product: Product = {
            id: 1,
            name: 'nangs',
            pice: 12121,
            category: {
                id: 1,
                name: 'nangs'
            }
        }
        console.log(product)

        const data: {id:number, name:string} = {
            id:1,name:"usman"
        }
        console.log(data)
    })
})