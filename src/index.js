import data from './dataset.json';
import createAndRenderTableRow from './components/createAndRenderTableRow';
import createAndRenderItemDetails from './components/createAndRenderItemDetails';

class App {
  constructor() {
    this.showItemDetailsForItemAtIndex = this.showItemDetailsForItemAtIndex.bind(this);
    this.renderItemDetails = this.renderItemDetails.bind(this);
    this.showTableAndHideItemDetails = this.showTableAndHideItemDetails.bind(this);
    this.render = this.render.bind(this);

    document.getElementById('backToTableButton').onclick = () => {
      this.showTableAndHideItemDetails();
    };

    this.selectedTitle = null;
  }

  showItemDetailsForItemAtIndex(selectedTitle) {
    this.selectedTitle = selectedTitle;
    this.renderItemDetails();
  }

  showTableAndHideItemDetails() {
    document.getElementById('detailsWrapper').style.display = 'none';
    document.getElementById('dataContainer').remove();
    this.selectedTitle = null;
    document.getElementById('tableWrapper').style.display = 'block';
  }

  renderItemDetails() {
    document.getElementById('tableWrapper').style.display = 'none';
    document.getElementById('detailsWrapper').style.display = 'block';
    createAndRenderItemDetails(data[this.selectedTitle]);
  }

  renderTable() {
    data.forEach((datum, i) => {
      createAndRenderTableRow({
        data: datum,
        i,
        onHandleItemClick: this.showItemDetailsForItemAtIndex,
      });
    });
  }

  render() {
    if (!this.selectedTitle) {
      this.renderTable();
    } else {
      this.renderItemDetails();
    }
  }
}

const app = new App();
app.render();
