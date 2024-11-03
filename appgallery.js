const applets = [
    {
        title: "APPLET 1 - BASIC EVENTS",
        description: "This app teaches essential concepts of handling user events in programming through interactive examples and user-friendly interface.",
        link: "applet1.html",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIGobgEQksHr82Ck-M0B0rcfYZXKJQi3zRQ&s"
    },
    {
        title: "APPLET 2 - LEAFLET MAP",
        description: "This app enables users to create and navigate interactive maps while adding markers and visualizing geographical data effectively.",
        link: "applet2.html",
        image: "https://t3.ftcdn.net/jpg/01/94/88/36/240_F_194883635_xLVn4iMEpLECFwNbAiSE668LugjD5EGt.jpg"
    },
    {
        title: "APPLET 3 - EVENT BUTTON LOGGER",
        description: "This app showcases various events by logging user actions, allowing the exploration of event handling in a user-friendly way.",
        link: "applet3.html",
        image: "https://t3.ftcdn.net/jpg/05/21/51/20/240_F_521512000_aaeI0zO318lLGCtPdJ33hnKMVn1xN46s.jpg"
    },
    {
        title: "APPLET 4 - SEARCHING PROGRAM",
        description: "This app features a dynamic search tool that allows users to find information quickly and efficiently through user input.",
        link: "applet4.html",
        image: "https://t3.ftcdn.net/jpg/01/07/37/52/240_F_107375245_SvNt4JNjGZ9OKRH7FkUWtPeQA1sQFMjX.jpg"
    },
    {
        title: "APPLET 5 - OPEN WEATHER",
        description: "This app displays the current weather status based on user-provided coordinates, giving real-time weather information easily.",
        link: "applet5.html",
        image: "https://img.freepik.com/free-vector/simple-cloud-logo-vector-technology-icon-design_53876-169288.jpg?semt=ais_siglip"
    },
    {
        title: "APPLET 6 - TODO LIST",
        description: "This app enables users to create, manage, and organize tasks digitally, providing a simple and efficient task management solution.",
        link: "applet6.html",
        image: "https://t4.ftcdn.net/jpg/09/97/75/77/240_F_997757770_HMcRLxDG8qtOicvozxbJbvz5SXqU5wEf.jpg"
    }
];

function displayApplets(appletsToDisplay) {
    const gallery = document.querySelector(".applet-flex-container");
    gallery.innerHTML = ""; 

    appletsToDisplay.forEach(applet => {
        const appletCard = document.createElement("div");
        appletCard.classList.add("card");
        appletCard.style.width = "15rem"; 
        appletCard.style.border = "2px solid #19bfe9"; 
        appletCard.style.borderRadius = "5px"; 

        appletCard.innerHTML = `
            <img src="${applet.image}" class="card-img-top" alt="${applet.title} Image">
            <div class="card-body">
                <h5 class="card-title">${applet.title}</h5>
                <p class="card-text">${applet.description}</p>
                <a href="${applet.link}" class="btn btn-primary text-center" style="display: block; width: 100%;">Go to Applet</a>
            </div>
        `;
        gallery.appendChild(appletCard);
    });
}

function filterApplets() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    const filteredApplets = applets.filter(applet => 
        applet.title.toLowerCase().includes(searchQuery) ||
        applet.description.toLowerCase().includes(searchQuery)
    );

    displayApplets(filteredApplets); 
}

document.getElementById("search-input").addEventListener("input", filterApplets);

displayApplets(applets);
