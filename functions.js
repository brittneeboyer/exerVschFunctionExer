// 1 
function sum(num1, num2){
    return num1 + num2
}

var result = sum(3, 5)
console.log(result)

// 2 
function largest(num1, num2, num3){
    console.log (Math.max(num1, num2, num3))
}

var max = largest(4, 9, 2)
console.log(max)

// 3
function evenOdd(num1){
    if(num1 % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenOdd(22)