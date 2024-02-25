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

function loadingData(callback) {
    setTimeout(() => {
        console.log("1. Loading Data...")
        callback();
    }, 2000);
}

function CollectingData(callback) {
    setTimeout(() => {
        console.log("2. Collecting Data...")
        callback();

    }, 2000);
}

function approvingData(callback) {
    setTimeout(() => {
        console.log("3. Approving  Data...")
        callback();
    }, 2000);
}

function approved() {
    setTimeout(() => {
        console.log("4. Approved Data...")
    }, 2000);
}

loadingData(function() {

    CollectingData(function() {

        approvingData(function() {
            approved()
        })

    })

})