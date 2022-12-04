
var buttons = document.getElementsByClassName("button")
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (c) {
        this.parentElement.remove()
    }
    )
}


var minuses= document.getElementsByClassName('minus')
var pluses =document.getElementsByClassName('plus')
for
document.getElementById('minus').addEventListener('click', function (c) {
    var quantity = this.nextElementSibling.innerHTML - 1
   if (quantity == -1) {
    this.nextElementSibling.innerHTML = 0
} else {
    this.nextElementSibling.innerHTML = quantity
}
}
)
document.getElementById('plus').addEventListener('click', function (c) {
    var quantity = this.previousElementSibling.innerHTML*1 +1
    this.previousElementSibling.innerHTML = quantity
}
)
