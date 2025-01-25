document.addEventListener("DOMContentLoaded", () => {
    const inputForm = document.getElementById("inputForm")
    const calculateBtn = document.getElementById("calculateBtn")
    
    calculateBtn.addEventListener("click", () => {
        const formData = Object.fromEntries(new FormData(inputForm).entries())
        var firstNumber = Number(formData["first_number"])
        var secondNumber = Number(formData["second_number"])
        
    })
})