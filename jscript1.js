var lable=document.createElement("label");
lable.innerHTML="Enter the image product detail";
lable.setAttribute("for","text");
var br =document.createElement("br");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("Requird",true);
var br1=document.createElement("br");
var button=document.createElement("button");
button.innerHTML="Search";
button.addEventListener("click",action);
document.body.append(lable,br,input,br1,button);
async function action(){
  
let res=document.getElementById("text").value;
let res1=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json/${res}`);
let result=await res1.json();
console.log(result);
for(var i=0;i<result.length;i++){
    //console.log(`brand:${result[i].brand}.name:${result[i].name}.price:${result[i].price}.image_link:${result[i].image_link}`);
var l=document.createElement("div");
l.style.color="blue";
l.style.fontSize="20px";
//l.style.background="green";
l.innerHTML=`brand:${result[i].brand}<br>
name:${result[i].name}<br>
price:${result[i].price}<br>
image_link:${result[i].image_link}<br>
description:${result[i].description}`;
document.body.append(l);
}
}






