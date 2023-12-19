// project arrray
const projects = [
    {
        imgSrc: "./img/project1.png",
        heading: "Current Site(Portfolio)",
        githubLink: "",
        liveLink: "",
        desc: "Here I am going to show all my work/projects"
    },
    {
        imgSrc: "./img/project2.png",
        heading: "Landing Page",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/landing-page/",
        desc: "It is just a normal landing page"
    },
    {
        imgSrc: "./img/project 3.png",
        heading: "Recipes",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/odin-recipes/",
        desc: "Just a Dummy recipe project"
    },
    {
        imgSrc: "./img/project4.png",
        heading: "Etch-a-Sketch",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/odin-etch-a-skech/",
        desc: "Painting board project"
    },
    {
        imgSrc: "./img/project5.png",
        heading: "Expense tracker",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Expense-tracker-an-hacthon-of-microsoft-/",
        desc: "This is a expense tracker to track expense"
    },
    {
        imgSrc: "./img/project6.png",
        heading: "Rock paper Scissors",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Rock-Paper-Scissors/",
        desc: "Best time game playing with computer"
    },
    {
        imgSrc: "./img/project7.png",
        heading: "Calculator project",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Basic-Calculator-Project/",
        desc: "Calculator project"
    },
    {
        imgSrc: "./img/project8.png",
        heading: "Bus- ticket",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Bus-Ticket/",
        desc: "Project Desc"
    },
    {
        imgSrc: "./img/project9.png",
        heading: "Image search engine by unsplash",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Image-Search-from-unsplash-api/",
        desc: "PImage search engine by unsplash"
    },
    {
        imgSrc: "./img/project10.png",
        heading: "Image Editor:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Image-editor-/",
        desc: "Image Editor"
    },
    {
        imgSrc: "./img/project11.png",
        heading: "Job Portal:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/job-portal/",
        desc: "Job Portal"
    },
    {
        imgSrc: "./img/project12.png",
        heading: "Meme Generator:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/MemesKiDuniya/",
        desc: "Meme Generator"
    },
    {
        imgSrc: "./img/project13.png",
        heading: "Keep notes:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/NotesPidia/",
        desc: "keep notes"
    },
    {
        imgSrc: "./img/project14.png",
        heading: "Parallax Website:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Parallax-Website/",
        desc: "Parallax Website"
    },
    {
        imgSrc: "./img/project15.png",
        heading: "Portfolio 1:",
        githubLink: "",
        liveLink: "https://pavan-kamthane-portfolio.web.app/",
        desc: "Portfolio 1"
    },
    {
        imgSrc: "./img/project16.png",
        heading: "Portfolio 2:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/portfolio2/",
        desc: "Portfolio 2"
    },
    {
        imgSrc: "./img/project17.png",
        heading: "Portfolio 3:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/portfolio/",
        desc: "Portfolio 3"
    },
    {
        imgSrc: "./img/project18.png",
        heading: "URL to QR:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/QR-generator/",
        desc: "URL to QR"
    },
    {
        imgSrc: "./img/project19.png",
        heading: "Signup form:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/sign-up-form-by-odin-project/",
        desc: "Signup form"
    },
    {
        imgSrc: "./img/project20.png",
        heading: " Admin Dashboard:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/admin-dashboard-by-odin-project/",
        desc: " Admin Dashboard"
    },
    {
        imgSrc: "./img/project21.png",
        heading: " Library:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/Library-By-Odin-Project//",
        desc: "Library"
    },
    {
        imgSrc: "./img/project22.png",
        heading: " Restaurant:",
        githubLink: "",
        liveLink: "https://pavan-kamthane.github.io/restaurant-using-webpack/dist/",
        desc: "Restaurant"
    },
]

const box = document.querySelector(".box");
projects.forEach((proj, i) => {
    const project = document.createElement("div");
    project.classList.add("project");
    project.innerHTML = `
        <img src="${proj.imgSrc}" alt="">
        <div class="info">
            <h2>${proj.heading}
               <!-- <a href="${proj.githubLink}"><i class="bi bi-github"></i></a>  -->
               <a href="${proj.liveLink}" target="blank"><i class="bi bi-box-arrow-up-right"></i></a>
                
            </h2>
            <p>
                ${proj.desc}
            </p>
        </div>
    `;
    box.appendChild(project);
})


