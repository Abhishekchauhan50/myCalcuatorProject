let input = document.querySelector('#input');

let btns = document.querySelectorAll('button');

let cal ="";

let buttons = Array.from(btns)



buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            cal = "Answer =  "+eval(cal)
            input.value = cal
        }
        else if(e.target.innerHTML === 'C'){
            cal = cal + e.target.innerHTML
            cal = ""
            input.value= cal
            
        }
        else{
            cal = cal + e.target.innerHTML
            input.value = cal
        }
     
    })
})


    


































