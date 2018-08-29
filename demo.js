function waitForMe(input, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input)
        }, delay)
    })
}

console.log('1')
waitForMe('2', 3000).then(result => { 
    console.log(result )
    console.log('3')
    waitForMe('4', 1000)
    .then(result => { console.log(result )})
})
