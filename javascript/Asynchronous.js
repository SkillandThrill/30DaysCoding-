// console.log("This")

// setTimeout(() => {
//     console.log("Asynchronous")

// }, 1000);
// console.log("is")


// setTimeout(() => {

// }, 2000)



// function fun(val) {


//     console.log(val)
// }

// function add(a, b, callback) {
//     let sum = a + b;
//     callback(sum)
// }

// add(5, 10, fun)


// Call Back Hell 

function loadingData() {
    return new Promise((resolve, reject) => {
        console.log("Processing ... ")

        setTimeout(() => {
            console.log("1. Loading Data...")
            resolve();
        }, 2000);
    })
}

function CollectingData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("2. Collecting Data...")
            resolve();
        }, 2000);
    })
}

function approvingData() {
    return new Promise((resolve, reject) => {
        -
        setTimeout(() => {
            console.log("3. Approving  Data...")
            resolve();
        }, 2000);
    })
}

function approved() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("4. Approved Data...")
            resolve();
        }, 2000);
    })
}

// loadingData(function() {

//     CollectingData(function() {

//         approvingData(function() {
//             approved()
//         })

//     })

// })

// Promise Data..
// loadingData().then(CollectingData).then(approvingData).then(approved).catch((err) => {
//     console.log(err)
// })


//Async Await

async function Ex() {
    await loadingData();
    await CollectingData()
    await approvingData();
    await approved();
}

Ex().catch((err) => {
    console.log(err);
});