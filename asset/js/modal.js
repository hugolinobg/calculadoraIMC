export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open")
  },
  close: function () {
    Modal.wrapper.classList.remove("open")
  },
}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  // console.log(event.key)

  if (event.key === "Escape") {
    Modal.close()
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}
