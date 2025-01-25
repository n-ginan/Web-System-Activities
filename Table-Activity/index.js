document.addEventListener("DOMContentLoaded", () => {
    const inputForm = document.getElementById("inputForm")
    const calculateBtn = document.getElementById("calculateBtn")
    var currentTD = 0

    calculateBtn.addEventListener("click", () => {
        const formData = Object.fromEntries(new FormData(inputForm).entries())
        var firstNumber = Number(formData["first_number"])
        var secondNumber = Number(formData["second_number"])
        const inputCondition = (firstNumber < 1 || firstNumber > 5) 
                             || (secondNumber < 1 || secondNumber > 5) 
                             || (isNaN(firstNumber) || isNaN(secondNumber))

        if (!inputCondition) {
            const tableData = document.getElementsByTagName("td")
            if (currentTD % 6 != 0) {
                tableData[currentTD].style.background = "bisque"
                tableData[currentTD].style.color = "#8B4513"
            }
            Array.from(tableData).forEach((td, tdIndex) => {
                if (tdIndex % 6 == 0 && secondNumber == parseInt(td.textContent)) {
                    currentTD = tdIndex + firstNumber
                    tableData[currentTD].style.background = "#975220"
                    tableData[currentTD].style.color = "rgb(254, 234, 208)"
                }
            })
        } else {
            const inputErrorLabel = document.getElementsByTagName("p")
            inputErrorLabel[0].style.animation = "none"
            void inputErrorLabel[0].offsetWidth
            inputErrorLabel[0].style.animation = "tilt-shake 0.4s"
        }
        
    })
})