const formopenbtn = document.querySelector("#Abrir_boton"),
home = document.querySelector(".home"),
container = document.querySelector(".Container"),
close = document.querySelector(".form_close"),
Entrarboton = document.querySelector("#Entrar_boton");

formopenbtn.addEventListener("click",() => home.classList.add("Show"));  
close.addEventListener("click",() => home.classList.remove("Show"));
