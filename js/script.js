// counter0 dom part -----------------------------------------------
let result        = document.querySelector('.result')
let input0        = document.querySelector('.input0')
let error         = document.querySelector('.error')
let info0          = document.querySelector('.info0')
let b20           = document.querySelector('.b20')
// counter1 dom part -----------------------------------------------
let input1        = document.querySelector('.input1')
let error1        = document.querySelector('.error1')
let info1         = document.querySelector('.info1')
let b21           = document.querySelector('.b21')
let result1       = document.querySelector('.result1')
// counter2 dom part -----------------------------------------------
let input2        = document.querySelector('.input2')
let error2        = document.querySelector('.error2')
let info2         = document.querySelector('.info2')
let b22           = document.querySelector('.b22')
let result2       = document.querySelector('.result2')
// others dom part -------------------------------------------------
let number  = 0
let number1 = 0
let number2 = 0
// counter0 function part ------------------------------------------
let inputclick0 = ()=>{
    if(input0.value ==''){
        error.innerHTML = 'enter a value'
        error.style = 'color:#B8001F'
    }else{
        error.innerHTML =''
        info0.innerHTML = 'Click on Go button to count from 0 to 100'
        b20.style = 'display:block'
        b20.addEventListener('click' , ()=>{
           let countnumber = ()=>{
               number++
               result.innerHTML = number
               if(number == result.dataset.count){
                   clearInterval(counter)
               }
           }
           info0.innerHTML = 'Counting 0 to 100'
           let counter = setInterval(()=>{
               countnumber()
           }, 100)
        })
    }

}
// counter0 Enter key function -------------------------------------
let inputkey0 = (item0)=>{
    if(item0.key =='Enter'){
      inputclick0()
    }
  }
// counter1 function part ------------------------------------------
let inputclick1 = ()=>{
    if(input1.value ==''){
        error1.innerHTML = 'enter a value'
        error1.style = 'color:#B8001F'
    }else{
        error1.innerHTML =''
        info1.innerHTML = 'Click on Go button to count from 0 to 500'
        b21.style = 'display:block'
        b21.addEventListener('click' , ()=>{
           let countnumber1 = ()=>{
               number1++
               result1.innerHTML = number1
               if(number1 == result1.dataset.count1){
                   clearInterval(counter1)
               }
           }
           info1.innerHTML = 'Counting 0 to 500'
           let counter1 = setInterval(()=>{
               countnumber1()
           }, 10)
        })
    }

}
// counter1 Enter key function -------------------------------------
let inputkey1 = (item1)=>{
    if(item1.key =='Enter'){
      inputclick1()
    }
  }
// counter2 function part ------------------------------------------
let inputclick2 = ()=>{
    console.log('hocce')
    if(input2.value ==''){
        error2.innerHTML = 'enter a value'
        error2.style = 'color:#B8001F'
    }else{
        error2.innerHTML =''
        info2.innerHTML = 'Click on Go button to count from 0 to 800'
        b22.style = 'display:block'
        b22.addEventListener('click' , ()=>{
           let countnumber2 = ()=>{
               number2++
               result2.innerHTML = number2
               if(number2 == result2.dataset.count2){
                   clearInterval(counter2)
               }
           }
           info2.innerHTML = 'Counting 0 to 800'
           let counter2 = setInterval(()=>{
               countnumber2()
           }, 10)
        })
    }

}
// counter2 Enter key function -------------------------------------
let inputkey2 = (item2)=>{
    if(item2.key =='Enter'){
      inputclick2()
    }
  }  
  