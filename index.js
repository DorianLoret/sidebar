// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
const sidebar = document.querySelector(".side-bar");
const content = document.querySelector(".content")

btn.addEventListener("click", () => {



  sidebar.classList.toggle("inject")
    
    
})

content.addEventListener("click", () => {

    sidebar.classList.remove("inject")
})