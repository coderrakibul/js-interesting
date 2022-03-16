// akhaen function er vetor theke ar akta function ke return kora hoice and second function er vetore function er result return kora hoice...
function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
let clock2 = stopWatch();
let clock3 = stopWatch();


console.log(clock1());
console.log(clock1());

console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());

console.log(clock3());
console.log(clock3());

console.log(clock1());
console.log(clock2());
console.log(clock3());

// closure: akta function theke jodi ar akta function ke return kori tahole tar akta nijosso closure toiri kore...
