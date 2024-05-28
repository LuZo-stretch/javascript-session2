function banner (message) {
    console.log("-----------------")
    console.log(message)
    console.log("-----------------")
    message = "I am done with the message"
}

const bannerLambda = (message) => {
    console.log("---------------")
    console.log(message)
    console.log("---------------")
}

const bannerFunction = function(message) {
    console.log("---------------")
    console.log(message)
    console.log("---------------")
}

const message = "Hi"
banner(message)
console.log(message)