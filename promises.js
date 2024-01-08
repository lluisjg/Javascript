const prom = new Promise((resolve, reject) => {
    const a = 1

    //----
    
    if (a === 2) {
        resolve("As expected.")
    } else {
        reject("not expected.")
    }
})

// prom.then(
//     (msgResolved) => console.log("Result:" + msgResolved))
//     .catch((error) => {
//         console.log("error:" + error)
//     })

prom.then(
    (msgResolved) => console.log("Resolved : " + msgResolved),
    (msgRejected) => console.log("Rejected:" + msgRejected)
)
    