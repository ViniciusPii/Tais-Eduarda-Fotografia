function menuClick(id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 120;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}


window.onload = function(){
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if (document.querySelector(".menu ul").style.display == 'flex') {
            document.querySelector(".menu ul").style.display = 'none';
        } else {
            document.querySelector(".menu ul").style.display = 'flex';
        }
    })
}

window.onload = function(){
    document.querySelector(".menu").addEventListener("click", function(){
        if (document.querySelector(".menu ul").style.display == 'flex') {
            document.querySelector(".menu ul").style.display = 'none';
        } else {
            document.querySelector(".menu ul").style.display = 'flex';
        }
    })
}








