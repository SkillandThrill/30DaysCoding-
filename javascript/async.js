// console.log("I")
// setTimeout(() => {
//     console.log("Async Js")

// const { reject } = require("async");

// const { reject } = require("async");

// }, 2000);
// console.log("am")


function loadingData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("1) Loading Data")
            resolve();
        }, 1000)
    })
}

function collectingData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("2) collecting Data");
            reject("didn't collected data");
        }, 2000);
    })
}

function approvingData() {
    setTimeout(() => {
        console.log("3) approving Data")

    }, 3000);
}

function approved() {
    setTimeout(() => {
        console.log("4) approved Data")

    }, 5000);
}


// loadingData().then(collectingData).then(approvingData).then(approved)


async function Ex() {
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}

Ex().then().catch(err => console.error(err));