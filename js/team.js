window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    showMembers();
};

function navDrawer() {
    const m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
}

function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func); 
}

function showMembers() {
    const mems_div = document.getElementById("js-show-members"); 
    let str = "";
    str += reduceArray(exec);
    str += reduceArray(members);

    mems_div.insertAdjacentHTML("beforeend", str);
}

function reduceArray(arr) {
    return arr.reduce((acc, mem, i) => {
        let bio = mem.b.reduce((acc, p) => {
            return acc + '<p>' + p + '</p>';
        },"");

        bio = (bio === "<p></p>") ? "*still working on a bio*" : bio;

        const s = 
            '<div class="mem">' +
                '<div class="mem-photo mem-photo-' + align[i % 2].pd + '">' +
                    '<img class="mem-photo-img" src="' + mem.i + '">' +
                '</div>' +
                '<div class="mem-desc mem-desc-' + align[i % 2].pd + '">' +
                    '<h4 class="mem-desc-name">' + mem.n + '</h4>' +
                    '<h5 class="mem-desc-pos">' + mem.p + '</h5>' +
                '</div>' +
                '<div class="mem-bio mem-bio-' + align[i % 2].b + '">' + 
                    bio +
                '</div>' + 
            '</div>';

        return acc + s;
    }, "");
}

const align = [
    {
        pd: "left",
        b: "right"
    },
    {
        pd: "right",
        b: "left" 
    }
];

const exec = [
    {
        n: "Andrew Santos",
        p: "President",
        i: "images/about/mind.png",
        b: [
            "I am a sophomore majoring in physics with minor areas of business French, math, and astronomy. Being in physics, my main goal has become communicating all the nuanced but amazing parts of this discipline to my friends and peers.",
            "The first project I plan to tackle is creating a YouTube video series that can be incorporated into middle school or high school science curriculum that hints to awesome physics concepts. Also, if you love frogs almost as much as you love puns, we have a lot in common!"
        ]
    },
    {
        n: "Eryn Sale",
        p: "Treasurer",
        i: "images/about/mind.png",
        b: [
            "I am a sophomore studying Neurobiology and Genetics with minors in physics and math.  As a biology major, I have always wanted everyone to know the incredible parts of modern biology and how it has changed so much in the past century.",
            "As my first project, I want to challenge high school biology curriculum.  In addition to being a member of the PIT, I am also full of aggressively subpar fun facts."
        ]
    },
    {
        n: "Daniel Krolopp",
        p: "Secretary",
        i: "images/about/mind.png",
        b: [
            "I'm a sophomore studying computer science with a minor in Spanish! A project I'm looking into is how to reduce the learning curve required to learn various programming languages or related techniques. Hopefully this will promote greater interest in learning how to code among younger students.",
            "I'm also a die-hard Carly Rae Jepsen fan, so expect to hear a lot of her music around me!"
        ]
    },
    {
        n: "Jamie Arabshahi",
        p: "Director of Outreach",
        i: "images/about/mind.png",
        b: [
            "I am a sophomore majoring in Biological Engineering with a Cellular and Molecular Concentration along with a minor in Biotechnology and Computer Science. I've always had a passion for making a meaningful impact on my community. Before coming to Purdue, I volunteered at the Smithsonian National Museum of Natural History. Now I'm taking my teaching experience from the East Coast to the Midwest!",
            "My project idea is to help students who struggle with mental health diseases get the help they need to be successful in the classroom."
        ]
    },
    {
        n: "Vritant Bhardwaj",
        p: "Liason",
        i: "images/about/mind.png",
        b: [
            "I am a junior majoring in Computer Science and also pursuing the Entrepreneurship Certificate. I can talk all day about how amazing the things are that one can do with computers.",
            "The problems that can be solved, the people that can be helped, the possibilities are endless. With this organisation, I aim to show those possibilities to the students."
        ]
    },
    {
        n: "Laura Galles",
        p: "Social Media Chair",
        i: "images/about/mind.png",
        b: [
            "I am a freshman at Purdue University in the Exploratory Studies program. I have no idea what I plan to do the rest of my life, but I know I wish to find a profession where I can work with people on a regular basis and help them in any way that I can.",
            "In addition to being a part of Purdue Impact Theory, I am a Community Service Coordinator and Programming Director for Purdue Student Government (PSG), a member of the Purdue Honors College, Beering Scholars Student Association (BSSA), the Honors Leadership Council Social Programming Committee, and Purdue Biomakers."
        ]
    }
];

const members = [
    {
        n: "August Deatherage",
        p: "Founding Member",
        i: "images/about/mind.png",
        b: [
            "I am a sophomore majoring in Actuarial Science and Applied Statistics with a minor in Management. I hope to inform people, specifically students with in interest in mathematics and statistics, what an actuary is and what a major in Actuarial Science is like.",
            "I feel the major and career as a whole is often misunderstood and not well known; I would like to change that. Random fact about me: I think vanilla ice cream is underrated."
        ]
    },
    {
        n: "Kolten Peterson",
        p: "Founding Member",
        i: "images/about/mind.png",
        b: [
            "I am a Genetics major with a duel minor in chemistry and management. Genetics is a relatively new field, therefore I am hoping I can make some great new contributions to the field and change the perception of Genetics as well.",
            "My first project will be to tackle the issue of GMO’s by making a booth to set up to help educate people on what GMO’s truly are. Hopefully changing the perception of Genetics one step at a time."
        ]
    },
    {
        n: "Garrett Mulcahy",
        p: "Founding Member",
        i: "images/about/mind.png",
        b: [
            "",
        ]
    }
];