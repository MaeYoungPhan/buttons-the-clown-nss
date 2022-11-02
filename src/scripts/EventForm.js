import { sendRequest } from "./dataAccess.js"


export const EventForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="guestCount">Number of Guests Expected</label>
            <input type="text" name="guestCount" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventAddress">Event Address</label>
            <input type="text" name="eventAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventDate">Date needed</label>
            <input type="date" name="eventDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventDuration">Event Duration</label>
            <input type="number" name="eventDuration" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='parentName']").value
        const userCName = document.querySelector("input[name='childName']").value
        const userGuests = document.querySelector("input[name='guestCount']").value
        const userAddress = document.querySelector("input[name='eventAddress']").value
        const userDate = document.querySelector("input[name='eventDate']").value
        const userDuration = document.querySelector("input[name='eventDuration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userName,
            childName: userCName,
            guestCount: userGuests,
            address: userAddress,
            eventDate: userDate,
            eventDuration: userDuration,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})