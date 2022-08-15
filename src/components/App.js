import data from '../dataset.json';
import createAndRenderTableRow from './createAndRenderTableRow';
import createAndRenderItemDetails from './createAndRenderItemDetails';

export default class App {
  constructor() {
    this.showItemDetailsForItemAtIndex = this.showItemDetailsForItemAtIndex.bind(this);
    this.renderItemDetails = this.renderItemDetails.bind(this);
    this.showTableAndHideItemDetails = this.showTableAndHideItemDetails.bind(this);
    this.render = this.render.bind(this);

    document.getElementById('backToTableButton').onclick = () => {
      this.showTableAndHideItemDetails();
    };

    // Allowing nested ternary to allow for effective 1-liner
    // eslint-disable-next-line no-nested-ternary
    this.data = [...data].sort((a, b) => (a.title ? b.title
      ? a.title.localeCompare(b.title) : -1 : 1));
    this.selectedTitle = null;
  }

  showItemDetailsForItemAtIndex(selectedTitle) {
    this.selectedTitle = selectedTitle;
    document.getElementById('tableWrapper').style.display = 'none';
    document.getElementById('detailsWrapper').style.display = 'block';
    this.renderItemDetails();
  }

  showTableAndHideItemDetails() {
    document.getElementById('detailsWrapper').style.display = 'none';
    document.getElementById('dataContainer').remove();
    this.selectedTitle = null;
    document.getElementById('tableWrapper').style.display = 'block';
  }

  renderItemDetails() {
    createAndRenderItemDetails(this.data[this.selectedTitle]);
  }

  renderTable() {
    this.data.forEach((datum, i) => {
      createAndRenderTableRow({
        data: datum,
        i,
        onHandleItemClick: this.showItemDetailsForItemAtIndex,
      });
    });
  }

  render() {
    this.renderTable();
  }
}
