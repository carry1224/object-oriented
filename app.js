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

class counter{
  constructor(element,value){
    this.element=element
    this.value=value
    this.resetbtn=element.querrySelector('.reset')
    this.increasebtn=element.querrySelector('.increase')
    this.decreasebtn=element.querrySelector('.decrease')
    this.valueDom=element.querrySelector('.value')
    this.valueDom.textContent=this.value
    

  }

}