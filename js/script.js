var menu_btn = document.getElementById("menu_icon");
var close_btn = document.getElementById("close_icon");
var sidebar = document.getElementById("nav-slide");


menu_btn.addEventListener('click', () => {
    sidebar.style.transform = "translateX(0)";
});

close_btn.addEventListener('click', () => {
    sidebar.style.transform = "translateX(100%)";
});

window.addEventListener("click", function(e) {
    if (e.target != sidebar && e.target != menu_btn) {
        sidebar.style = "transform: translateX(100%);";
    }
});