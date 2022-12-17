const header = document.querySelector("header");

window.addEventListener("scroll",headertransparente);

function headertransparente() {
    if(window.pageYOffset > 0 && header.classList.contains("cor-topo")){
        header.classList.remove("cor-topo")
        header.classList.add("cor-topo-transparente")
    } else if(window.pageYOffset == 0 && header.classList.contains("cor-topo-transparente")){
        header.classList.remove("cor-topo-transparente")
        header.classList.add("cor-topo")
    }
}