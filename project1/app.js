const FACECLOSE = document.querySelector('.closed')
const FACEOPEN = document.querySelector('.open')

FACECLOSE.addEventListener('click', () => {
    if(FACEOPEN.classList.contains('open')){
        FACEOPEN.classList.add('active')
        FACECLOSE.classList.remove('active')
    }
})

FACEOPEN.addEventListener('click', () => {
    if(FACECLOSE.classList.contains('closed')) {
        FACECLOSE.classList.add('active')
        FACEOPEN.classList.remove('active')
    }
} )