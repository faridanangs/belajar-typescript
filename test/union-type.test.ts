describe('Union Type', ()=> {
    it('Union Type', ()=>{
        let sample: number | string | boolean = 'hello nang'
        console.log(sample)

        sample = 12121
        console.log(sample)

        sample = true
        console.log(sample)
    });

    it("Should support typeof operator", function(){
        function unionType(value : string | number | boolean){
            if(typeof value === 'string'){
                return value.toLowerCase();
            }else if (typeof value === 'boolean'){
                return !value;
            }else {
                return value * 2;
            }

        }
        expect(unionType(100)).toBe(200);
        expect(unionType("Anangs")).toBe("anangs");
        expect(unionType(true)).toBe(false);
    })
})