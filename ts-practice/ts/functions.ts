function getUpper (num : string){     /* igf dont provide type in para meters typscript give the tyoe any  to the paramter */

    return num+2;
}

console.log(getUpper(''));


const func = (name:string, email:string, isPaid:boolean = false)=>{}


func("utpal", "u@uhamil.com" )

// const heros = ["thor", "spiderman", "hulk"];
const heros = [1,2,3]

heros.map((hero):string =>{
    
    return `${hero}`
    // return 23
})


export {}