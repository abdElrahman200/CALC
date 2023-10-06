let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
let num6 = document.querySelector('.num6');
let num7 = document.querySelector('.num7');
let num8 = document.querySelector('.num8');
let num9 = document.querySelector('.num9');
let num0 = document.querySelector('.num0');
let dot = document.querySelector('.dot');
let equl = document.querySelector('.equal');
let modul = document.querySelector('.modul');
let over = document.querySelector('.over');
let tim = document.querySelector('.tim');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let AC = document.querySelector('.AC');
let DE = document.querySelector('.DE');
let lb1 = document.querySelector('.lb1');

lb1.value=0

var i1
var i2
var i3

AC.addEventListener('click',function(){
    lb1.value = 0
})


num0.addEventListener('click',function(){
    
    lb1.value = lb1.value+ 0
})

num1.addEventListener('click',function(){
   if(lb1.value==0){
    lb1.value = ''
   }
    lb1.value = lb1.value+1
})

num2.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+2
    
})

num3.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+3
})

num4.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+4
})

num5.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+5
})

num6.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+6
})

num7.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+7
})

num8.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+8
})

num9.addEventListener('click',function(){
    if(lb1.value==0){
        lb1.value = ''
       }
    lb1.value = lb1.value+9
})

minus.addEventListener('click',function(){
   i1 = lb1.value
    lb1.value = ""
    i2 = '-'
    return i1 ,i2




})


plus.addEventListener('click',function(){
    i1 = parseFloat(lb1.value)
    lb1.value = ""
    i2 = '+'
    return i1 , i2

})

modul.addEventListener('click',function(){
    i1 = lb1.value
    lb1.value = ""
    i2 = '%'
    return i1 ,i2

})

over.addEventListener('click',function(){
    i1 = lb1.value
    lb1.value = ""
    i2 = '/'
    return i1 ,i2

})

tim.addEventListener('click',function(){
    i1 = lb1.value
    lb1.value = ""
    i2 = 'x'
    return i1 ,i2

})

dot.addEventListener('click',function(){
    lb1.value = lb1.value+"."
})

DE.addEventListener('click',function(){
    var  vl = lb1.value 
    if(vl.length > 0){
    lb1.value =vl.slice(0,vl.length-1)

    }
})
equl.addEventListener('click',function(){
    i3 = parseInt(lb1.value)
    
 if(i2 =='-'){
    lb1.value = i1 - i3
 }
 else if(i2 == '+'){

    lb1.value = i1 + i3
 }
 else if(i2=='%'){
lb1.value = i1 % i3

 }
 else if(i2=='x'){
    lb1.value =       i1 * i3
    
     }
    else if(i2=='/'){
        lb1.value =   i1 / i3
        
         }
          if (i2 == "/" && i3 == 0) {
            lb1.value = "error";}
          if (i2 == undefined || isNaN(i3)) {
            lb1.value = "error";}

          


})