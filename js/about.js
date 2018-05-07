window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    addHoverProject();
    addHoverEvent();
};

function navDrawer() {
    const m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
}

function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func); 
}

function addHoverProject() {
    const desc = document.getElementById("project-desc");
    const funcEnter = function () {
        desc.style.opacity = 0.9;
    };

    const funcLeave = function () {
        desc.style.opacity = 0;
    };

    addHoverListener("project", funcEnter, funcLeave);
}

function addHoverEvent() {
    const desc = document.getElementById("event-desc");
    const funcEnter = function () {
        desc.style.opacity = 0.9;
    };

    const funcLeave = function () {
        desc.style.opacity = 0;
    };

    addHoverListener("event", funcEnter, funcLeave);
}

function addHoverListener(id, funcEnter, funcLeave) {
    document.getElementById(id).addEventListener("mouseenter", funcEnter);
    document.getElementById(id).addEventListener("mouseleave", funcLeave);
}