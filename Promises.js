// when we use multiple promises then compiled time one by one promises call so, it take too much time     
let Response = fetch("https://jsonplaceholder.typicode.com/todos/1").then(Data =>{
    console.log("Data ---->" , Data)
}) .catch(error => {
    console.log("Error --->" , error)
})
