
body = document.querySelectorAll("body")[0];
body.addEventListener('click', showActors);

function showActors(event) {
    console.log("click auf", event.target);
    previouslySelected = document.querySelectorAll(".selected");


    previouslySelected.forEach(element => {
        element.classList.remove("selected");
    });
    event.target.classList.add("selected");

}

body.addEventListener('click', showActors);