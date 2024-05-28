function banner (message) {
    console.log("-----------------")
    console.log(message)
    console.log("-----------------")
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

banner("Hello world")
bannerFunction("Goodbye Mars")