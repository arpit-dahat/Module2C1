/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Write your code here , just console.log
  arr.map((developer) =>{
    console.log(developer)
  })
  // arr.map((developer) => console.log(developer.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) =>{
    if(element.profession === "developer"){
      console.log(element)

    }
  })
}

function addData() {
  //Write your code here, just console.log
  
  let newStudent = arr.push({id: 4, name: "susan", age: 20, profession: "intern"})
  console.log(newStudent);
}

function removeAdmin() {
  //Write your code here, just console.log
  let noAdmin = arr.filter((element) =>{
    if(element.profession === "admin"){
      return element
    }
  })
  console.log(noAdmin);
}

console.log(arr);

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Raj", age: "19", profession: "developer" },
    { id: 6, name: "Ram", age: "21", profession: "developer" },
    { id: 7, name: "Pavan", age: "18", profession: "admin" },
  ];
  let newArray = arr.concat(arr2)
  console.log(newArray);
}
