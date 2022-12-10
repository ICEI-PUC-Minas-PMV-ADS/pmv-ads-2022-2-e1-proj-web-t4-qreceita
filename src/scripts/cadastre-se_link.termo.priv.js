

const open1 = document.getElementById('leia')
const modal_container = document.getElementById('modal_container')
const close1 = document.getElementById('close')


open1.addEventListener('click', (e) => {
    e.preventDefault()
    modal_container.classList.add('show');
})

close1.addEventListener('click', () => {
    modal_container.classList.remove('show');
})
