import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"
import { saveCompletion } from "./dataAccess.js"


const convertRequestToHTML = (request) => {
    const clowns =getClowns()
        let requestHTML = `<li>
            ${request.eventDate} | ${request.parentName} | ${request.childName} | ${request.guestCount} <select class="clowns" id="clowns">
            <option value="">Choose</option>
        ${clowns.map(
            clown => {
                return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
            }).join("")}
            </select>
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>
    `

        return requestHTML

}

export const Requests = () => {
    const requests = getRequests()

    let html = `<ul>
    ${requests.sort(function(a,b){ return new Date(a.eventDate) - new Date(b.eventDate)}).map(convertRequestToHTML).join("")}
    </ul>`

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. clownId
                   3. date_created
            */
            const completion = {requestId: requestId, clownId: clownId, date_created: Date.now()}

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)

        }
    }
)