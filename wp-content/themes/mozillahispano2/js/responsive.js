(function() {
    var toggle = document.getElementById('toggle');
    var menu = document.getElementById('menu-nav');
    var windowWidth = window.innerWidth;

    // Shows the menu only on mobile devices
    if (windowWidth < 768) {
        menu.classList.add('close');
    }

    function showMenu(el) {
        if (el.classList.contains('open')) {
            el.classList.remove('open');
            toggle.classList.remove('open');
        } else {
            el.classList.add('open');
            toggle.classList.add('open');
        }
    }

    // Handles open/close menu click event
    toggle.addEventListener('click', function() {
        showMenu(menu);
    }, false);

    if ('ontouchstart' in window) {
        toggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            showMenu(menu);
        }, false);
    }

})();