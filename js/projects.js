window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    showProjects();
};

function navDrawer() {
    const m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
}

function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func); 
}

function showProjects() {
    const proj_div = document.getElementById("js-show-projects");
    const str = reduceArray(projects);

    proj_div.insertAdjacentHTML("beforeend", str);
}

function reduceArray(arr) {
    return arr.reduce((acc, proj, i) => {
        let membersList = proj.members.reduce((acc, mem) => acc + `<li>${mem}</li>\n`, "");
        const s = 
            `<div class="project-container">
                <div class="project-desc">
                    <div class="project-desc-title">
                        ${proj.title}
                    </div>
                    <div class="project-desc-img">
                        <img src="images/projects${proj.img}">
                    </div>
                    <div class="project-desc-text">
                        ${proj.desc}
                    </div>
                </div>
                <div class="project-members">
                    <h3 class="project-members-title">contributers:</h3>
                    <ul class="project-members-list">
                       ${membersList}
                    </ul>
                </div>
            </div>`

        return acc + s;
    }, "");
}

const projects = [
    {
        title: "Project1",
        desc: "description",
        img: "", /* name of file in img/projects folder */
        members: [
            "member1",
            "member2",
            "member3"
        ]
    },
    {
        title: "Project1",
        desc: "description",
        img: "src",
        members: [
            "member1",
            "member2",
            "member3"
        ]
    }
]