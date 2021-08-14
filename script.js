const colors = ["red","blue","green","yellow","purple","black"]
const btn = document.getElementById('btn-colorChanger')
const bgColor = document.querySelector('.main')

btn.addEventListener('click', function () {
    const randomColors = getRandom()
    document.body.style.backgroundColor = colors[randomColors]
    
})

function getRandom () {
    return Math.floor(Math.random() * colors.length);
}