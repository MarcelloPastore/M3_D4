function countAlbums() {
    const albumN = document.getElementsByClassName("card").length 

    const span = document.createElement("span")

    span.classList.add("text-center", "d-inline-block", "w-100", "my-4")

    span.innerHTML = "Hey! Questa pagina contiene " + (albumN + 1) + " Viaggi!"

    document.querySelector("footer").appendChild(span)
}

countAlbums();
window.onload = function () {
    addToggleButtons()

    countAlbums()
}


function addToggleButtons() {

    for (let section of document.querySelectorAll("section")) {

        section.children[0].classList.add("collapse")
        section.children[0].classList.add("show")

        section.innerHTML = `
                <button class='btn btn-outline-dark toggle-btn mb-5' data-toggle="collapse" data-target="#${section.id} > div">
                    Show/hide section
                </button>
            ` + section.innerHTML

    }
}