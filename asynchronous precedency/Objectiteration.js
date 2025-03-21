//! values of array
    // a = { b: "c", d: "e", f: { g: "h" }, i: "j" };
    // output = ["c", "e", "h", "j"
    // let arr = [];
    // for (let key of Object.keys(a)) {
    //   // console.log(typeof i)
    //   if (typeof a[key] !== "string") {
    //     for (let keyValue of Object.keys(a[key])) {
    //       arr.push(a[key][keyValue]);
    //     }
    //   } else arr.push(a[key]);
    // }
    // console.log(arr);

//! count the number of item in an array
    // let arr = [
    //   { age: 25, city: "banglore" },
    //   { age: 23, city: "chennai" },
    //   { age: 24, city: "mumbai" },
    //   { age: 29, city: "banglore" },
    // ];
    // // var output = {"EachcityName":"avgAge"}
    // // console.log()
    // let flag = {};

    // arr.forEach((item) => {
    //   const city = item.city;
    //   const age = Number(item.age);

    //   if (!Object.keys(flag).includes(city)) {
    //     flag[city] = { totalage: age, count: 1 };
    //   } else {
    //     flag[city].totalage += age;
    //     flag[city].count += 1;
    //   }
    // });

    // Object.keys(flag).forEach((item) => {
    //   flag[item] = flag[item]["totalage"] / flag[item]["count"];
    // });
    // console.log(flag);

//! duplicate amount
    // let transactions = [
    //   { id: 1, amount: 100 },
    //   { id: 2, amount: 200 },
    //   { id: 3, amount: 100 },
    //   { id: 4, amount: 300 },
    //   { id: 5, amount: 200 },
    // ];
    // // Output: List of amounts with duplicates: [100, 200]

    // let single = []
    // let duplicate = []
    // transactions.forEach((item)=>{
    //   if (!single.includes(item.amount)){
    //       single.push(item.amount)
    //   }else{
    //       duplicate.push(item.amount)
    //   }
    // })

    // console.log(duplicate)

//! flatten arrays
    // let departments = [
    //     { name: "HR", employees: [{ name: "Alice" }, { name: "David" }] },
    //     { name: "Engineering", employees: [{ name: "Bob" }, { name: "Charlie" }] },
    // ];
    // // Output: [{ name: "Alice" }, { name: "David" }, { name: "Bob" }, { name: "Charlie" }]

    // let nameOutput = []

    // departments.forEach((item)=>{
    //     item['employees'].map((emp)=> nameOutput.push(emp) )
    // })

    // console.log(nameOutput)

//! 