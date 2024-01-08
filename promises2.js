const makePromise = (x) => {
    return new Promise ((resolve,reject) => {
        console.log("Inside promise")
        setTimeout(()=> {
            if ((x % 2) === 0) {
                resolve(" yep ")
            } else {
                reject(" nope ")
            }
        }, 5000)
        
    })
}

//const z = makePromise(2)
//z.then((msg) => console.log(msg))
// .catch((err) => console.log("err:" + err))

async function myFunction() {
    const z = makePromise(2)
    try {
        const result = await z
        console.log("result:" + result)
    }
    catch(err) {
        console.log("errorrrr " + err)
    }
    
}

myFunction()
console.log("after myFunction call")