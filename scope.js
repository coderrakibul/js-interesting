//global scope
const favNum = 27; // ata holo global scope sob jayga theke call kora jabe

// local scope
function add(first, second){
    const result = first + second;
    if(result > 9){
        // akhane mood ta block scope shudhu ai block thekei run hobe baire run korle error debe...
        const mood = "happy";
        console.log(mood);
    }
    console.log(result); // akhane ata local scope
    return result;
}
const sum = add(11, 35);

//akhane first ba second ba result ke jodi console log kori tahole error debe karon first ba second ba result er scope shudhu function er vetorei.... tai console log korte hole function er vetor thekei console log kore dekhte hobe...

// console.log(first)

console.log(favNum); 


/*block scope second bracket er vetore hoy jemon loop hote pare ba if else condition hote pare ba function diyeo hote pare...

let ba const diye korle seta block scope hobe but var diye declare korle seta sob jayga theke run hobe error debe na but undefined dakhabe.... atake bole hoisting....

abr function er vetor let ba const cara sorasory likhle seta global leak hoye jay sob jayga thekei pay

let and const block scope er moddhe thakbe ader ke hoist kora hobe na

var use korle take hoist kore global scope kora hoy
*/