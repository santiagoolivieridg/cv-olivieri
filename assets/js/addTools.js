import { workTools, workIconTools, studyingTools, studyingIconTools } from './tools.js'

const lenguajesActuales = document.querySelector('#lenguajes_actuales');
const lenguajesAprendiendo = document.querySelector("#lenguajes_aprendiendo");
const template = 
    `<div>
    <img
    src="~icon~"
    alt="~id~"
    data-tippy-content="~id~"
    width="40"
    aria-describedby="tooltip" />
    </div>`

workTools.forEach((tools, index) => {
    const img = workIconTools[index];
    lenguajesActuales.insertAdjacentHTML("beforeend", template.replace(/~id~/g, tools).replace(/~icon~/g, img));
})

studyingTools.forEach((tools, index) => {
    const img = studyingIconTools[index];
    lenguajesAprendiendo.insertAdjacentHTML("beforeend", template.replace(/~id~/g, tools).replace(/~icon~/g, img));
})