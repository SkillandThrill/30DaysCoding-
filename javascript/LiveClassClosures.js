// // var a = 1;

// // function outside() {
// //     // var a = 1;
// //     console.log("This is a function 1:" + a)

// //     function inside() {
// //         // var a = 2;
// //         console.log("This is a function 2:" + a)
// //     }
// //     inside()

// // }

// // outside()


// // // Error Handling
// // function d(a, b) {
// //     try {
// //         if (b == 0) {
// //             throw new Error("Can't Divide by 0")
// //         } else {
// //             return a / b;
// //         }

// //     } catch (err) {
// //         console.log(err.message)
// //     }
// // }

// // console.log(d(10, 0))


// // HOF higher Order functions

let num = [10, 20, 30, 12, 30, 40, 60]


// // let a = num.map((val) => {
// //     console.log(val + 50)
// // })
// // console.log(num)


// let a = num.filter((val) => {
//     if (val >= 10 && val <= 25) {
//         return val;
//     }
// })

// console.log(a)

// console.log(num)

var sum = num.reduce(function(acc, number) {
    return acc + number;
}, 0)

console.log(sum)