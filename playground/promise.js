var asyncAdd = (a, b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject("Arguments must be numbers");
            }
        }, 1500)
    });
}

asyncAdd(5, 7).then((result)=>{
    console.log("Result: ",result);
    return asyncAdd(result, 33);
}).then((result) =>{
    console.log("Result: ",result);
}).catch((errorMessage)=>{
    console.log(errorMessage);
})

/* async function add(a, b){
    try{
        var sum = await asyncAdd(a, 'b');
        console.log(sum);
    }catch(e){
        console.log(e);
    }
}
add(4, 5); */
/* var somePromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Hey, it worked");
        reject("Unable to fulfill promise");
    }, 2500)
});

somePromise
.then((result)=>{
    console.log(result);
},(error)=>{
    console.log(error);
}) */
