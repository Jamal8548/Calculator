
class Calculator
{
   constructor(previousoperand , currentoperand)
   {
   	this.previousoperand = previousoperand
   	this.currentoperand = currentoperand
   	this.clearbutton()
    
   }

   clearbutton()
   {
     this.currentoperandd=''
     this.previousoperandd=''
     this.operationn=undefined

   }

   deletebuttonn()
   {
     this.currentoperandd= this.currentoperandd.toString().slice(0,-1)
   }

   appendNumber(number)
   {

     if(number==='.' && this.currentoperandd.includes ('.')) return
     this.currentoperandd = this.currentoperandd.toString()+ number.toString()
   }

   chooseoperation(operation)
   {
         if(this.currentoperandd==='') return
         if(this.previousoperandd!==''){
         this.compute()}       	
         this.operation=operation
         this.previousoperandd=this.currentoperandd
         this.currentoperandd=''
   }
   compute()
   {
     let computation
     const pre = parseFloat(this.previousoperandd)
     const current = parseFloat(this.currentoperandd)
     if(isNaN(pre) || isNaN(current)) return

     	switch(this.operation)
     {
     	case '+':
     	computation=pre+current;
     	break

     	case '-':
     	computation=pre-current
     	break

     	case '*':
     	computation=pre*current
     	break

     	case '÷':
     	computation=pre / current
     	break

     	default:
     	return
     }
     this.currentoperandd=computation
     this.operation=undefined
     this.previousoperandd=''
     }

     
   

   updateDisplay()
   {
     this.currentoperand.innerText =this.currentoperandd
     this.previousoperand.innerText =this.previousoperandd
   }
}



const numberButton    = document.querySelectorAll('[data-number]')
const operationbutton = document.querySelectorAll('[data-operation]')

const equalsbutton =document.querySelector('[data-equals]')
const deletebutton =document.querySelector('[data-delete]')
const clearbutton  =document.querySelector('[data-all-clear]')


const previousoperand =document.querySelector('[data-previous-operand]')
const currentoperand  =document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousoperand , currentoperand)

        numberButton.forEach(button=>{
	    button.addEventListener('click', ()=> {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})

        operationbutton.forEach(button=>{
	    button.addEventListener('click', ()=> {
		calculator.chooseoperation(button.innerText)
		calculator.updateDisplay()
	})
})


        equalsbutton.addEventListener('click',button=>{
        	calculator.compute()
        	calculator.updateDisplay()
        })

        clearbutton.addEventListener('click',button=>{
        	calculator.clearbutton()
        	calculator.updateDisplay()
        
        	})

        deletebutton.addEventListener('click',button=>{
        	calculator.deletebuttonn()
        	calculator.updateDisplay()
        })