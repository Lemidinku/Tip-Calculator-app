let tipPercents = document.getElementsByClassName("tip-percent")

// input elements
let billInput = document.getElementById("bill-input")
let tipInput = document.querySelector("#tip-input")
let peopleInput = document.querySelector("#people-input")
let errorMessage = document.querySelector(".error-message")

// display elements
let tipDisplay = document.getElementById("tip-amount")
let totalDisplay = document.getElementById("total")

let resetButton = document.getElementById("reset")


// global variables
let TIP_PERCENT = 5;

for (let tipPercent of tipPercents){
    tipPercent.addEventListener("click", function(){
        TIP_PERCENT = this.textContent.slice(0,-1)
        UpdateTip(this.textContent.slice(0,-1))
        tipInput.value = ""

    })
}

const UpdateTip = (choice) => {

   
    for (let tipPercent of tipPercents){
        if (tipPercent.textContent.slice(0,-1) == choice){
            tipPercent.classList.add("selected")
        }
        else {
            tipPercent.classList.remove("selected")
        }} 
}


tipInput.addEventListener("keyup", ()=>{
    let tipInputValue = Number(tipInput.value)
    TIP_PERCENT = tipInputValue;
    UpdateTip(Number(tipInput.value))

})

 peopleInput.addEventListener("keyup", () => {
    if (Number(peopleInput.value)== 0){
        errorMessage.style.display = "block"
        peopleInput.classList.add("error")
    }
    else {
        errorMessage.style.display = "none"
        peopleInput.classList.remove("error")
        
    }
 })


 const calculateTip = () => {
    if (Number(peopleInput.value)>0){
    let tipPerPerson = (billInput.value *(TIP_PERCENT/100))/peopleInput.value
        tipDisplay.textContent = Number(tipPerPerson).toFixed(2)
 }
 else {
    tipDisplay.textContent = "0.00"
 } 
 

 }

 const calculateTotal = () => {
    if (Number(peopleInput.value)>0){
    let totalAmount = (Number(billInput.value) + (billInput.value *(TIP_PERCENT/100)))/peopleInput.value
        totalDisplay.textContent = Number(totalAmount).toFixed(2)
 }
 else {
    totalDisplay.textContent = "0.00"
 } }
 setInterval(calculateTip, 100)
 setInterval(calculateTotal, 100)

 resetButton.addEventListener("click", ()=>{
    TIP_PERCENT = 5;
    UpdateTip(5)
    peopleInput.classList.remove(".error")

    //reset display elements
    tipDisplay.textContent = "0.00"
    totalDisplay.textContent = "0.00"

    //reset input values
    tipInput.value = ""
    billInput.value = ""
    peopleInput.value = ""
 })
