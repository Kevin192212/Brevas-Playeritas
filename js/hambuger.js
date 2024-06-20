document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    } else {
        console.error("Elementos del menú no encontrados");
    }
});