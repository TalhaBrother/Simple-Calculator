var spanElm=document.querySelector("#show");
var inputElm=document.querySelector("#userInput")
console.log(inputElm);

function showText(){
    console.log(inputElm.value);
    spanElm.innerText="hello world!";
    console.log("clicked")
}
function valueToSet(btnValue){
    var inputValue=inputElm.value
    if(btnValue==="="){
        var result=eval(inputValue)
        inputElm.value=result
        return;
    }
    if(btnValue==="del"){
        inputElm.value=inputValue.slice(0,inputValue.length-1)
        return
    }
    if(btnValue==="c"){
        inputElm.value=""
        return
    }
    if(btnValue==="x2"){
        inputElm.value=Math.pow(inputValue,2)
        return
    }
    if(btnValue==="x3"){
        inputElm.value=Math.pow(inputValue,3)
        return
    }
    inputElm.value+=btnValue;
}


