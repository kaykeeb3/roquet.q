// importando a function modal para o arquivo corrente
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

/* abrindo a modal quando o botão marcado como lida for clicado */
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach( button => {
    button.addEventListener('click', handleClick)
})

/* abrindo a modal quando o botão excluir for clicado */
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach( button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {

    event.preventDefault()
    
    const text = check ? 'Marcar como lida' : 'Excluir'
    const question = 'Tem certeza que deseja'

    const roomId = document.querySelector("#room-id").dataset.id;
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id;
    
    const form = document.querySelector('.modal-wrapper .modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);
    
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? `${question} marcar como lida esta pergunta?` : `${question} excluir esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    
    // adicionando ou removendo classe .red
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    // abrir modal
    modal.open()
}