'use strict';

const upperCaseLetters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers ='0123456789'
const symbols = '@,.(){}[]!#$^&*<>%/-=';


const options=[...document.getElementsByTagName('input')];
const result=document.getElementById('result');
const length=document.getElementById('length');
const generate=document.getElementById('generate')
 let included='';

options.forEach(opt=>{
  
    opt.addEventListener('click',function(e){
       const inp=e.target;
       let pos=inp.checked===true;
       if(inp.id==='numbers'){
        if(pos)included+=numbers;
        else included= included.replace(/\d/g,'')
       }
       else if(inp.id==='symbols'){
        if(pos)included+=symbols;
        else included=included.replace(/\W/g,'')
       }
       else if(inp.id==='lowerCase'){
        if(pos)included+=lowerCaseLetters;
        else included=included.replace(/[a-z]/g,'')
       }
       else if(inp.id==='upperCase'){
        if(pos)included+=upperCaseLetters;
        else included=included.replace(/[A-Z]/g,'')
       }
    })
})

generate.addEventListener('click',function(){
const size=length.value;
result.textContent='';

for (let i = 0; i <size; i++) {
    result.textContent+=included[Math.floor(Math.random()*included.length)]
    
}
})