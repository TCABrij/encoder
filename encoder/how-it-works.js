const modalOpenBtn = document.querySelector('.how-it-works')
const closeBtn = document.querySelector('.modal-close-btn')
const modal = document.querySelector('.modal-container')

modalOpenBtn.addEventListener('click', ()=>{
    modal.classList.remove('modal-closed')
})

closeBtn.addEventListener('click', ()=>{
    modal.classList.add('modal-closed')
})