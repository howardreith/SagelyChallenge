import data from './dataset.json'

class App {
    constructor() {
        this.selectedTitle = null
        this.handleItemClick = this.handleItemClick.bind(this);
        this.renderItemDetails = this.renderItemDetails.bind(this);
        this.handleShowTableClick = this.handleShowTableClick.bind(this);

        document.getElementById('backToTableButton').onclick = () => {
            this.handleShowTableClick()
        }
    }

    handleItemClick(selectedTitle) {
        this.selectedTitle = selectedTitle
        this.renderItemDetails()
    }

    handleShowTableClick() {
        document.getElementById('detailsWrapper').style.display = 'none';
        document.getElementById(`dataContainer${this.selectedTitle}`).remove();
        this.selectedTitle = null;
        document.getElementById('tableWrapper').style.display = 'block';
    }

    renderTable() {
        data.forEach((datum, i) => {
            const element = document.createElement('div');
            element.id = `${i}Wrapper`
            document.getElementById('tableWrapper').appendChild(element)
            const textLink = document.createElement('a')
            textLink.href = '#'
            textLink.id = i
            textLink.innerHTML = datum.title;
            textLink.onclick = () => {
                this.handleItemClick(i)
            }
            document.getElementById(`${i}Wrapper`).appendChild(textLink);
        })
    }

    renderItemDetails() {
        document.getElementById('tableWrapper').style.display = 'none';
        document.getElementById('detailsWrapper').style.display = 'block';
        const itemData = data[this.selectedTitle]
        const dataContainer = document.createElement('div');
        dataContainer.innerHTML = itemData.title
        dataContainer.id = `dataContainer${this.selectedTitle}`
        document.getElementById('detailsWrapper').appendChild(dataContainer)
    }
}

const app = new App()
app.renderTable()