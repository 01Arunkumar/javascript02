var data= document.getElementById("user_input");
var button = document.getElementsByTagName("button")[0];
var ul = document.querySelector("ul");

function datalength(){
   return data.value.length;
}

function createListElement(){
    var li= document.createElement("li");
        li.appendChild(document.createTextNode(data.value));
        ul.appendChild(li);
        user_input.value="";
}

function addListAfterClick(){
    if(datalength()>0){
        createListElement();
}}

function addListAfterKeypess(event){
        if( datalength()> 0  && event.keyCode === 13){
            createListElement();
}}


button.addEventListener("click", addListAfterClick);

data.addEventListener("keypress", addListAfterKeypess);
