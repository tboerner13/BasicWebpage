//simulate an API call

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let success = true; //Can change to true or false
            if (success){
                resolve("Data has been fetched successfully!");
            }else{
                reject("Error: Failed to fetch data.")
            }
        }, 2000);
    });
}

//Using .then() to handle the resolved value

fetchData()
.then(response => {console.log(response);
})
.catch(error => {
    console.error(error);
})

//using async/await
async function getData(){
    try{
        let response = await fetchData();
        console.log(response);
    }catch(error){
        console.log(error);
    }
}