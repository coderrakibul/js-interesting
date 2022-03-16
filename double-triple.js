const first = 2;
const second = "2";


// akhane true dakhabe karon double equal shudhu value ta check kore... duitar value jehetu same tai true return korbe....
// if(first == second){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false")
// }


// akhane false dekhabe karon triple equal vlaue check korar sathe sathe data type tao check kore.... jehetu akta number type ar akta string type tai akhane false return korbe....
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false")
}


//more comparison
// double equal and triple equal shudhu premitive type data check korte pare but non-premitive ba array or object ke check korte pare na....
const a = [];
const b = [];

if(a == b){
    console.log("both are same");
}
else{
    console.log("they are not same")
}

