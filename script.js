const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number)=>{
    calculatorScreen.value = number
}

const numbers= document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        updateScreen(event.target.value)
    })
})

const calculatorView = document.querySelector('.calculator-view')
const viewScreen = (number)=>{
    calculatorView.value = number
}


let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number)=>{
    if (currentNumber==='0'){
        currentNumber= number
    }else{
        currentNumber+=number
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators= document.querySelectorAll(".operator");

operators.forEach((operator=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
        viewScreen(event.target.value)
    })
}))
const inputOperator = (operator)=>{
    if(calculationOperator===''){
        prevNumber=currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}




const calculate = ()=>{
    let result =''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber)+parseFloat(currentNumber);
            break;
        case "-":
            result= parseFloat(prevNumber)-parseFloat(currentNumber);
            break;
        case "*":
            result= prevNumber*currentNumber;
            break;
        case "/":
            result= prevNumber/currentNumber;
            break;
        case "Mod":
            result= prevNumber % currentNumber;
        default:
            break;
    }
    currentNumber=result;
    calculationOperator=''
}

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click',()=>{
    calculate();
    updateScreen(currentNumber);
    viewScreen('operator')
})

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
    viewScreen('operator')

})

const clearAll= ()=>{
    prevNumber= ''
    calculationOperator=''
    currentNumber= '0'
}

const decimal = document.querySelector(".decimal")
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot)=>{
    if (currentNumber.includes('.')){
        return
    }
    currentNumber+=dot
}

const percentage = document.querySelector(".percentage")
percentage.addEventListener('click',(event)=>{
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
    viewScreen("%")

})

inputPercentage= ()=>{
    if(currentNumber==='0'){
        return
    }
    currentNumber/=100
}

