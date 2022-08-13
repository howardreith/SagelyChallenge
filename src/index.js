import data from './dataset.json'

function component() {
    data.forEach((datum) => {
        const element = document.createElement('div');
        element.innerHTML = datum.title;
        document.body.appendChild(element)
    })
}

component()