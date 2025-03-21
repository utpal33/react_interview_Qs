//  using type alias to define the type of the variable 
// commonly used for objects or chunks of variable or array 

// example:
type user = {
    name:string,
    age:number,
    isPaid?:boolean    // this is optional
}

function createUser (user:user) : user{
    return {age:24, name:"utpal",  isPaid:false}
}

createUser({age:24, name:'kant'})

type userArray = [
    string,number, boolean
]

let users:number[] = [1,24,2]
let usersInfo:userArray = ['utpal', 10, false] 

export {}