function menuClick(id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 120;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}

function menuMobile() {
  if (document.getElementById("ulmobile").style.display == 'flex') {
            document.getElementById("ulmobile").style.display = 'none';
        } else {
            document.getElementById("ulmobile").style.display = 'flex';
        }
}

function mobileMenuClick(){
    if (document.querySelector("#ulmobile").style.display == 'flex') {
      document.querySelector("#ulmobile").style.display = 'none';
    } else {
      document.querySelector("#ulmobile").style.display = 'flex';
    }
}








