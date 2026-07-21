const promiseOne =new Promise(function(resolve,reject){
    // Do an asyn task
    // DB calls ,cryptography ,network...

    setTimeout(function(){
        console.log("Async task is compelete");
        resolve();   // to connect then function
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})




new Promise(function(reolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    },1000 )


}).then(function(){
    console.log("Asyn 2 resolved");
})





const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"bidhanshu@.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})




const promisFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"Bidhanshu",pass:"123"})
        }
        else{
            reject("Error")
        }

    },1000);
})
promisFour.then((user)=>{
     console.log(user);
     return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);

})
.finally(() => console.log("Finally the promise is ethier resolved or rejected"))



const promiseFive =new Promise(function(reolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"javaScript",pass:"123"})
        }
        else{
            reject("Error Js ")
        }

    },1000);

})

// we can use both  methods 
// or we can do with async await without use then and catch
async function consumePromiseFive(){
    try{
        const response =await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()



// //fetch
// // await method

// async function getAllUser(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typeicode.com/user')    //Here, await pauses the function until the fetch() request completes.
//         const data= await response.json()  //waits for the response body to be parsed into a JavaScript object. 
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);  
//     }
    
// }

// getAllUser();



//By catch and then method
fetch('https://jsonplaceholder.typeicode.com/user')
.thrn((response)=>{
    return response.json()
})
.then((data)=>{
    console.log.(data);
})
.catch((error)=> console.log(error))