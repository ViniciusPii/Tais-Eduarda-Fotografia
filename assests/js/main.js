function menuClick(id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 120;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}