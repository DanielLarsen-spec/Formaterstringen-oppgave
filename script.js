
let value ="";
let main = document.getElementById("app");
let inPut = document.getElementById("app1");
//function knapp(text){
    //main.innerHTML = text;
//}

function knapp(){
 value = inPut.value 
let bigFirstLetter = value[0].toUpperCase()
 let restOfString = value.slice(1)

main.innerHTML = bigFirstLetter += restOfString;

}
 

    
    




















