const buttonOpen = document.querySelector(".botao-l")
const modalContainer= document.querySelector(".modal-container")
const buttonClose = document.querySelector(".fechar")

buttonOpen.addEventListener("click", () => {

    modalContainer.classList.add(".show")
    
})

buttonClose.addEventListener("click", () => {

    modalContainer.classList.remove(".show")

})