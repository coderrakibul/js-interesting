function welcomeMessage(name){
    console.log(name);
}
const Personname = "Tom Hanks";
welcomeMessage(Personname);



// function er vetore onno akta function ke parameter hisebe pathano holo callback function
function message(msg){
    msg();
}

function morningMsg(){
    console.log("good morning")
}

message(morningMsg)