//promise

function fun(task) {
    return new Promise((resolve, reject) => {
        if (task == true) {
            resolve("Completed");
        } else {
            reject("Not Completed");
        }
    })
}


let onResolve = (res) => {
    console.log(res)
}

let onReject = (rej) => {
    console.log(rej)
}

fun(false).then(onResolve).catch(onReject);