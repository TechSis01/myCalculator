const output = document.querySelector('#output')
let btns = Array.from(document.querySelectorAll('.numBtns'))
bbtt = [0,1,2,3,4,5,6,7,8,9,'.']
const add = document.querySelector('#add')
const result = document.querySelector('#result')
const divide = document.querySelector('#divide')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const clear = document.querySelector('#clear')
const deleteBtn =  document.querySelector('#delete')
const mood = document.querySelector('.mode')
const div = document.querySelector('.calculator')
const container = document.querySelector('.calculator-container')
for(let btn of btns){
btn.addEventListener('click',function(){
    output.value += btns.indexOf(btn)
})
}
add.addEventListener('click',function(){
    output.value += '+'
}) 
subtract.addEventListener('click',function(){
    output.value += '-'
}) 
multiply.addEventListener('click',function(){
    output.value += '*'
}) 

divide.addEventListener('click',function(){
    output.value += '/'
}) 
result.addEventListener('click',function(){
    output.value = eval(output.value)
})
clear.addEventListener('click',function(){
    output.value = ''
})
deleteBtn.addEventListener('click',function(){
    output.value =  output.value.slice(0,-1)
})
mood.addEventListener('click',function(){
   container.classList.toggle('back')
})