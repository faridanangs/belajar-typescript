describe("Type Data Array", function(){
    it("Array", function():void{
        let arr:number[] = [1,2,3,4,5,6,7,8,9,10];
        console.log(arr)

        let arr2:Array<number> = [1,2,3,4,5,6,7,8,9,10];
        console.log(arr2)

        let hobbies: ReadonlyArray<string> = ['makan', 'minum'];
        // hobbies[0] = 'minum' 
        console.log(hobbies)

        // tuple
        const person:readonly[string, number]= ['usman',10]
        // person[0] = 'usman';
        console.log(person)
    })
})