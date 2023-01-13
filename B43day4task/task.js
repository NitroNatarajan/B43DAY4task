// How to compare two json have the same properties without order;
let obj1 = {
  name: "person1",
  age: 5
}
let obj2 = {
  age: 5,
  name: "person1",
}
for (let key1 in obj1) {
  let flag = 0;
  for (let key2 in obj2) {
    if (obj1[key1] == obj2[key2]) {
      flag++;
    }
  }
  if (flag > 0) {
    console.log("Both are same");
  }
  else {
    console.log("Both are Different");
  }
}


// [Running] node "d:\Guvi class\Day4\B43Day4\B43day4task\task.js"
// Both are same
// Both are same
// [Done] exited with code=0 in 0.102 seconds


//exercise 2:
// print all the countries,region,subregion and population:
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  let result = JSON.parse(request.response);
  for (let i = 0; i < result.length; i++) {
    console.log(`${result[i].name.common}==== ${result[i].region}====${result[i].subregion}====${result[i].population}`);
  };
};

// EXERCISE3
// use the rest countries API and display all the countries flags in the console:
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  let data = request.response;
  let result = JSON.parse(data);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].flags.png);
  };
};