import { Modal } from "./modal.js"

function notANumber(value) {
  return isNaN(value) || value == ""
}

function calculateIMC({ weight, height }) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function displayResultMessage(result) {
  const weightRating = document.querySelector("p")
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message

  let underWeight = result < 18.5
  let normalWeight = result >= 18.5 && result <= 24.99
  let preObesity = result >= 25.0 && result <= 29.99
  let gradeOneObesity = result >= 30.0 && result <= 34.99
  let gradeTwoObesity = result >= 35.0 && result <= 39.99

  if (underWeight) {
    weightRating.innerText = "Abaixo do Peso"
  } else if (normalWeight) {
    weightRating.innerText = "Peso Normal"
  } else if (preObesity) {
    weightRating.innerText = "Pré-obesidade"
  } else if (gradeOneObesity) {
    weightRating.innerText = "Obesidade Grau 1"
  } else if (gradeTwoObesity) {
    weightRating.innerText = "Obesidade Grau 2"
  } else {
    weightRating.innerText = "Obesidade Extrema"
  }

  Modal.open()
}

export { notANumber, calculateIMC, displayResultMessage }
