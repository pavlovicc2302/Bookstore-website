var burgerMenuVisible = false

function burgerClick() {
    document.getElementById("linksWrap").style.visibility = !burgerMenuVisible ? "visible" : "hidden"
    burgerMenuVisible = !burgerMenuVisible
}  

$("#facebook").on("click", function f1(){
    window.open("https://www.facebook.com/");
})

$("#instagram").on("click", function f2(){
    window.open("https://www.instagram.com/");
})

$("#twitter").on("click", function f3(){
    window.open("https://www.twitter.com/");
})