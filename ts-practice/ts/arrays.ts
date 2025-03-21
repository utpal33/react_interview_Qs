let user:string[] = []
let marks : number[] = []

user.push('utpal')
marks.push(23)


type user = {
    name:string
    isActive:boolean
}


let allUser : user[] = []
allUser.push({name:'utpal', isActive:true}, {name:"varun", isActive:false})


console.log(allUser);

let MlModels:user[][] = [
    [
        {name:'utpal', isActive:true}, {name:"varun", isActive:false}
    ],
    [
        {name:'utpal', isActive:true}, {name:"varun", isActive:false}
    ],
    [
        {name:'utpal', isActive:true}, {name:"varun", isActive:false}
    ]
]


export {}