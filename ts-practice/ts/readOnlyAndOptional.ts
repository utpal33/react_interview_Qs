type user ={
    readonly _id : string
    name:string
    email: string
    isActive ?: boolean
}

let myUser : user = {
    _id : "123345",
    name:"utpal",
    email:"qwe@sd.com",
    isActive:false
}

myUser.email = "utpa@Uint16Array.com"
// myUser._id = '12'  /* show error : Cannot assign to '_id' because it is a read-only property */