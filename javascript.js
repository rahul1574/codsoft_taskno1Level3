let output=document.getElementById("screen");

const wipe=()=>{
    output.value =' ';
}

const display=(n)=>{
    output.value+=n;
}
const cal=()=>{
    output.value= eval(output.value);
}
function deleteLastdigit(){
    output.value=output.value.slice(0,-1);
}