const sendButton = document.querySelector("[data-send]")

const createEvent = () => {
    const nameElement = document.querySelector("[data-name]")
    const attractionsElement = document.querySelector("[data-attractions]")
    const descriptionElement = document.querySelector("[data-description]")
    const dateElement = document.querySelector("[data-date]")
    const capacityElement = document.querySelector("[data-capacity]")

    let listAttrations = (attractionsElement.value).split(",")

    if (nameElement.value != "" && 
        attractionsElement.value != "" && 
        descriptionElement.value != "" &&
        dateElement.value != "" && 
        capacityElement.value != "") {

        let _data = {
            "name": nameElement.value,
            "poster": "link da imagem",
            "attractions": listAttrations,
            "description": descriptionElement.value,
            "scheduled": dateElement.value,
            "number_tickets": capacityElement.value
        }

        fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
        )
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    } else {
        alert("Preencha todos os campos!")
    }

}

sendButton.onclick = () => {
    //e.preventDefault()
    createEvent()
}