import { fetchRequests } from "./dataAccess.js"
import { fetchClowns } from "./dataAccess.js"
import { ClowningAround } from "./ClowningAround.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = ClowningAround()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)