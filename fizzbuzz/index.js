let count = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0,
}

let newPrint = []

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        newPrint.push('fizzbuzz')
        count.fizzbuzz++;
    } else if(i % 3 === 0) {
        newPrint.push('buzz')
        count.fizz++;
    } else if(i % 5 === 0) {
        newPrint.push('fizz')
        count.buzz++;
    } else {
        newPrint.push(i)
    }
}
console.log(count)
console.log(newPrint)