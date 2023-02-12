// when we use multiple async await then in the compiled time multiple async called and the result gives
//  response in very less time

try {
  (async () => {
    let Data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("data ---->", Data);
  })();
} catch (error) {
  console.log("errors ---->",error);
}

// Without Arrow Function
// async function ApiResponse() {
// let Data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log("data ---->", Data);
// }
// ApiResponse()

//Arrow Function
// let ApiData = async () =>{
//     let Data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log("data ---->", Data);
// }
// ApiData()