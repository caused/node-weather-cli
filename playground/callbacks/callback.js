var getUser = (id, callback) =>{
    console.log("Entering the function");
    var user = {
        id:id,
        name: "Gustavo"
    };

    setTimeout(()=>{
        callback(user);
    }, 3000);

    console.log("Finishing up");
}

getUser(21, (userObject)=>{
    console.log(userObject);
})