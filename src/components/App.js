import data from '../dataset.json';
import createAndRenderTableRow from './createAndRenderTableRow';
import createAndRenderItemDetails from './createAndRenderItemDetails';

// Allowing nested ternary to allow for effective 1-liner
// eslint-disable-next-line no-nested-ternary
const sortedData = [...data].sort((a, b) => (a.title ? b.title
  ? a.title.localeCompare(b.title) : -1 : 1));
const dataForSearch = sortedData.map((datum) => `${datum.title.toLowerCase()}, ${datum.author.toLowerCase()}, ${datum.abstractNote.toLowerCase()}, ${datum.manualTags.toLowerCase()}`);

export default class App {
  constructor() {
    this.showItemDetailsForItemAtIndex = this.showItemDetailsForItemAtIndex.bind(this);
    this.renderItemDetails = this.renderItemDetails.bind(this);
    this.showTableAndHideItemDetails = this.showTableAndHideItemDetails.bind(this);
    this.updateResultsBaseOnSearchInput = this.updateResultsBaseOnSearchInput.bind(this);
    this.render = this.render.bind(this);

    document.getElementById('backToTableButton').onclick = () => {
      this.showTableAndHideItemDetails();
    };

    document.getElementById('searchInput').onkeyup = (e) => {
      this.updateResultsBaseOnSearchInput(e.target.value);
    };

    this.data = sortedData;
    this.selectedTitle = null;
  }

  updateResultsBaseOnSearchInput(input) {
    const indexes = dataForSearch.reduce(((acc, curr, i) => {
      if (curr.includes(input.toLowerCase())) acc.push(i);
      return acc;
    }), []);
    const filteredData = [];
    indexes.forEach((i) => {
      filteredData.push(sortedData[i]);
    });
    for (let i = 0; i < this.data.length; i += 1) {
      document.getElementById(`row${i}`).remove();
    }
    this.data = filteredData;
    this.renderTable();
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
