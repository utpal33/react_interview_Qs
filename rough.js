

function getHexColor(){
    const  hexColor= ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0]
    let hexCode = "#"
    // for(let i=0; i<5; i++){
    //     console.log(hexColor[Math.floor(Math.random()*10)])
    // }
    console.log(Array.from({length:6}, (item)=> item));
}

// getHexColor()

// console.log(true === '');



let arr = [
    {age:25, city:"banglore"},
    {age:23, city:"chennai"},
    {age:24, city:"mumbai"},
    {age:29, city:"bangolre"}
    ]

arr.reduce((acc,curr, currindex, arr)=>{
    
})


// function inputvalue(initialValue){
//     // const [value, setValue] = useState(initialValue)
//     // const [color, setColor] = useState(initialValue)
//     let value = initialValue
//     let color = initialValue
//     return {
//         initialValue,
//         value
//     }
// }
// console.log(inputvalue(3).value);

let array = [400,5,6,7,23,4,56]

console.log(array.sort((a,b)=> a-b))
console.log(array[array.length-1])