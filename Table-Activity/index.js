document.addEventListener("DOMContentLoaded", () => {
    const inputForm = document.getElementById("inputForm")
    const calculateBtn = document.getElementById("calculateBtn")
    
    calculateBtn.addEventListener("click", () => {
        const formData = Object.fromEntries(new FormData(inputForm).entries())
        var firstNumber = Number(formData["first_number"])
        var secondNumber = Number(formData["second_number"])
        var inputCondition = (firstNumber < 1 || firstNumber > 5) 
                             || (secondNumber < 1 || secondNumber > 5) 
                             || (isNaN(firstNumber) || isNaN(secondNumber))

        if (!inputCondition) {
            
        } else {
            const inputErrorLabel = document.getElementsByTagName("p")
            inputErrorLabel[0].style.animation = "none"
            void inputErrorLabel[0].offsetWidth
            inputErrorLabel[0].style.animation = "tilt-shake 0.4s"
        }
        
    })
})