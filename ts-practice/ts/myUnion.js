// union type
let score = 33;
score = "54";
let utpal = { name: 'utpal', _id: 334 }; // remove admin or user to see the difference
utpal = { userName: "utpal33", _id: 334 };
//  union operator becoms problematic when applying methods of some specific type it checks for both 
//  let see through an example 
let num;
// num.toUpperCase()
function userId(_id) {
    if (typeof _id == 'string') {
        _id.toLowerCase();
    }
    else if (typeof _id == "number") {
        return _id * 2;
    }
}
userId(23);
const userArr = []; // this is only an array of number type or string type not mixed
// userArr.push(2)
//  since the userArr is empty typescript dosent infer that array is of which type so it puts the array of never type 
// never[] and it wont push any data into that array
const data = [1, 2, 3, 4]; // since the arraye has only one type of data init either string or number
const data1 = [1, 2, 3, 4, '4'];
const userArr1 = [];
export {};
