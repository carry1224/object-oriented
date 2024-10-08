/*let containers=document.getElementById('one')
let btn=document.querySelectorAll('.two')

let initialValue=100
btn.forEach(function(btns){
  btns.addEventListener('click',function(e){
    let styles=e.currentTarget.classList
    if(styles.contains('increase')){
      initialValue++
    }else if(styles.contains('decrease')){
      initialValue--
    }else if(styles.contains('reset')){
      initialValue=100
    }
    if(initialValue>100){
      containers.style.color='orange'
    }
    if(initialValue<100){
      containers.style.color='red'
    }
    if(initialValue===100){
      containers.style.color='yellow'
    }
  
    containers.textContent=initialValue
  })
})

let counter=document.getElementById('two')
let buttons=document.querySelectorAll('.three')

Value=200
buttons.forEach(function(btns){
  btns.addEventListener('click',function(e){
    let styles=e.currentTarget.classList
    if(styles.contains('increase')){
      Value++
    }else if(styles.contains('decrease')){
      Value--
    }else if(styles.contains('reset')){
      Value=200
    }
    if(Value>200){
      counter.style.color='pink'
    }
    if(Value<200){
      counter.style.color='aqua'
    }
    if(Value===200){
      counter.style.color='green'
    }
  
    counter.textContent=Value
  })
})*/

function getElement(selection){
  let element=document.querySelector(selection)
  if(element){
    return element
  }
  
}

class Counter{
  constructor(element,value){
    this.element=element
    this.value=value
    this.resetbtn=element.querySelector('.reset')
    this.increasebtn=element.querySelector('.increase')
    this.decreasebtn=element.querySelector('.decrease')
    this.valueDom=element.querySelector('.value')
    this.valueDom.textContent=this.value
    //binding all functions together
    this.increase=this.increase.bind(this)
    this.decrease=this.decrease.bind(this)
    this.reset=this.reset.bind(this)
    //addingeventlisternes
    this.resetbtn.addEventListener('click',this.reset)
    this.increasebtn.addEventListener('click',this.increase)
    this.decreasebtn.addEventListener('click',this.decrease)
  }
  increase(){
    this.value++
    this.valueDom.textContent=this.value
  }
  decrease(){
    this.value--
    this.valueDom.textContent=this.value
  }
  reset(){
    this.value=0
    this.valueDom.textContent=this.value
  }
}
let firstCounter=new Counter(getElement('.first-counter'),100)
let secondCounter=new Counter(getElement('.second-counter'),200)