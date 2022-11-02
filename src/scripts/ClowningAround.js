import { EventForm } from "./EventForm.js"
import { Requests } from "./Requests.js"

export const ClowningAround = () => {
    return `
    <h1>Buttons & Lollipop : Clowns that Aren't Scary, not even a little bit. We promise.</h1>
    <section class="eventForm">
        ${EventForm()}
    </section>
    <h2 class="event_header">Event Requests</h2>
    <section class="eventRequests">
        ${Requests()}
    </section>
    `
}