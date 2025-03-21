// union type

let score: string | number = 33

score ="54";

type user ={
    name:string
    _id : number | string
}

type admin = {
    userName : string
    _id : string | number
}

let utpal : user | admin = {name:'utpal', _id:334};    // remove admin or user to see the difference
utpal = {userName : "utpal33", _id:334};


//  union operator becoms problematic when applying methods of some specific type it checks for both 
//  let see through an example 

let num : number | string ;   
// num.toUpperCase()


function userId (_id : string | number) {
    if (typeof _id == 'string'){
        _id.toLowerCase()
    }
    else if (typeof _id == "number"){
        return _id*2
    }
}

userId(23)


const userArr: string[] | number[] = []   // this is only an array of number type or string type not mixed
// userArr.push(2)

//  since the userArr is empty typescript dosent infer that array is of which type so it puts the array of never type 
// never[] and it wont push any data into that array

const data : string[] | number[] = [1,2,3,4]  // since the arraye has only one type of data init either string or number
const data1 : (string | number)[] = [1,2,3,4,'4'] 



const userArr1 : (string | number) [] = []


let seatAllotment : "asile" | "middle" | "window";   // thi variable wont accept any value beside this
seatAllotment = "asile"

let pi : 3.14 ;
pi = 3.143  // throw error bcz the value is noth matching the value assigned to pi earlier.











export {}