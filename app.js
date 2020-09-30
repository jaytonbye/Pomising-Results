slowMath.add(1,1)
.then((value)=>{
    console.log(value)
    return slowMath.multiply(value,2)
})
.then((value)=>{
    console.log(value)
    return slowMath.divide(value,4)
})
.then((value)=>{
    console.log(value)
    return slowMath.subtract(value,3)
})
.then((value)=>{
    console.log(value)
    return slowMath.add(value,98)
})
.then((value)=>{
    console.log(value)
    return slowMath.remainder(value,2)
})
.then((value)=>{
    console.log(value)
    return slowMath.multiply(value,50)
})
.then((value)=>{
    console.log(value)
    return slowMath.remainder(value,40)
})
.then((value)=>{
    console.log(value)
    return slowMath.add(value,32)
})
.then((value)=>{
    console.log(`The final result is: ${value}`)
})
.catch((e)=>{
    console.log(`there was an error: ${e}`)
    // I wanted to use 'new Error' (below) so that it would be an actual error, is that something worth doing?
    // throw new Error(e)
})


/*
async function doMath(x,y){
    try{
        let result = await slowMath.add(x,y)
        console.log(result)
        result = await slowMath.multiply(result, 2)
        console.log(result)
        result = await slowMath.divide(result, 4)
        console.log(result)
        result = await slowMath.subtract(result, 3)
        console.log(result)
        result = await slowMath.add(result, 98)
        console.log(result)
        result = await slowMath.remainder(result, 2)
        console.log(result)
        result = await slowMath.multiply(result, 50)
        console.log(result)
        result = await slowMath.remainder(result, 40)
        console.log(result)
        result = await slowMath.add(result, 32)
        console.log(`The final result is: ${result}`)
    } catch (err){
        console.log (err)
    }
}

doMath(1,1)
*/