const arr=['Gandalf', 'Frodo', 'Golum']

const log = ((item) => console.log(item))
arr.forEach(log)

arr.forEach((element) => log(element))

const mapped = arr.map((item) => item + " got mapped")
console.log(mapped)

//const z = [ 0, 2 ,3 , 5, 9 , 13]

const z = [ 2, 4, 8 , 12, 1]


const getPromise = (element,log) => {
    return new Promise((resolve,reject) => {
        if ((element % 2) === 0) {
            if (log) console.log("action resolve")
            resolve(element + " ok")
        } else {
            if (log) console.log("action reject")
            reject(element + " nope")
        }
    })
}

const promises = z.map((element) => getPromise(element))

Promise.all(promises).then(responses => {
    console.log("(all) responses:", responses)
    responses.forEach((resp) => console.log(resp))
}).catch((err) => console.log("(all) err:",err))

const z2 = [ 1, 2 , 3 , 4]

const promises2 = z2.map(element => getPromise(element))
Promise.any(promises2).then((response) => {
    console.log("(any) :",response)
}).catch((err) => console.log("(any), error: ",err))

const z3 = [ 1, 2, 3 ,4]
const promises3 = z3.map(element => getPromise(element,true))

Promise.allSettled(promises3).then(
    (resolved) => {
        console.log("allSettled", resolved)
    },
    (rejected) => {
        console.log("allSettled", rejected)
    }
)