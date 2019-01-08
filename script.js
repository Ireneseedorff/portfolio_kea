var accordions = document.getElementsByClassName('accordion');

function getAccordionPanel(accordion) {
    if (!(accordion instanceof HTMLElement)) {
        return null;
    }
    if (!accordion.classList.contains('accordion')) {
        return null;
    }
    var panel = accordion.nextElementSibling;
    if (!panel) {
        return null;
    }
    if (!panel.classList.contains('panel')) {
        return null;
    }
    return panel;
}

function closeAccordions() {
    for (var i = 0; i < accordions.length; ++i) {
        var accordion = accordions[i];
        accordion.classList.remove('active');
        var panel = getAccordionPanel(accordion);
        if (!panel) {
            return;
        }
        panel.classList.remove('open');
    }
}

function initializeAccordions() {
    closeAccordions();
    for (var i = 0; i < accordions.length; ++i) {
        var accordion = accordions[i];
        accordion.addEventListener('click', function () {
            var wasActive = this.classList.contains('active');
            closeAccordions();
            if (wasActive) {
                return;
            }
            this.classList.add('active');
            var panel = getAccordionPanel(this);
            if (!panel) {
                return;
            }
            panel.classList.add('open');
        });
    }
}

window.addEventListener('load', function (event) {
    initializeAccordions();
});



// Kode til accordion fra https://www.w3schools.com/howto/howto_js_accordion.asp
