let display=document.getElementById('display');
let btn=document.querySelectorAll('button');
// console.log(btn);
let scval="";

for(let item of btn){
item.addEventListener('click',(e)=>{
  let  btntext=e.target.innerText;
//  console.log(btntext);
if(btntext=='X')
{
    btntext='*';
    scval+=btntext;
    display.value=scval;
}
else if(btntext=='C')
{
    scval="";
    display.value=scval;
}
else if(btntext=='=')
{
    display.value=eval(scval);
}
else if(item.value=='sqrt'){
    display.value=Math.sqrt(scval);
}
else if(item.value=='backspace'){
    display.value=display.value.substr(0,display.value.length-1);
}
else if(item.value=='sin'){
    let a=Math.sin(display.value);
    display.value=a;
}
else if(item.value=='sin'){
    let a=Math.sin(display.value);
    display.value=a;
}
else if(item.value=='cos'){
    let a=Math.cos(display.value);
    display.value=a;
}
else if(item.value=='tan'){
    let a=Math.tan(display.value);
    display.value=a;
}
else if(item.value=='log'){
    let a=Math.log(display.value);
    display.value=a;
}


else{
    scval+=btntext;
    display.value=scval;
}
})
}






