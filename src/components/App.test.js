import { screen, fireEvent, within } from '@testing-library/dom';
import App from './App';
import data from '../dataset.json';
import '@testing-library/jest-dom';

describe('App', () => {
  function generateTestDom() {
    document.body.innerHTML = `
        <div id="tableWrapper">
            <div class="container text-center mt-3 mb-3">
                <h1>Sagely Challenge</h1>
            </div>
            <table id="table" class="table table-bordered">
                <thead class="thead">
                    <tr id="tableHeaders">
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Link</th>
                        <th scope="col">More Details</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div id="detailsWrapper" data-testid="detailsWrapper" class="container text-center mt-3">
            <button id="backToTableButton" data-testid="backToTableButton" class="btn btn-primary">Back to Table</button>
        </div>
  `;
  }

  beforeEach(() => {
    generateTestDom();
  });

  function subject() {
    const app = new App();
    app.render();
  }

  it('should start by rendering the table with the data', () => {
    subject();
    data.filter((datum) => datum.title).forEach((datum) => {
      expect(screen.getAllByText(datum.title, { exact: false }).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('should sort the data into alphabetical order by title', () => {
    subject();
    const { getByText: firstGetByText } = within(screen.getByTestId('title0'));
    expect(firstGetByText('(20) The Vulnerability Exploitability eXchange (VEX) standard | LinkedIn')).toBeInTheDocument();
    const { getByText: secondToLastGetByText } = within(screen.getByTestId('title93'));
    expect(secondToLastGetByText('YOW! 2019 - Gene Kim - The Unicorn Project And The Five Ideals')).toBeInTheDocument();
    const { getByText: lastGetByText } = within(screen.getByTestId('title94'));
    expect(lastGetByText('(Title Unknown)')).toBeInTheDocument();
  });

  it('should go to the details of an entry when details is clicked', () => {
    subject();
    const relevantData = data.find((datum) => datum.title === 'Babe Ruth and Feature Lists | Ken Norton');
    fireEvent.click(screen.getByTestId('moreDetailsButton10'));
    expect(screen.getByText('Thinking vs. Feeling: The Psychology of Advertising')).not.toBeVisible();
    expect(screen.getByText(relevantData.key, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(relevantData.abstractNote, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(relevantData.itemType, { exact: false })).toBeInTheDocument();
  });

  it('should navigate back to table when go back to table button clicked', () => {
    subject();
    const relevantData = data.find((datum) => datum.title === 'Babe Ruth and Feature Lists | Ken Norton');
    fireEvent.click(screen.getByTestId('moreDetailsButton10'));
    expect(screen.getByText('Sagely Challenge')).not.toBeVisible();
    expect(screen.getByText(relevantData.key, { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('backToTableButton'));
    expect(screen.getByText('Sagely Challenge')).toBeVisible();
    expect(screen.queryByText(relevantData.key, { exact: false })).not.toBeInTheDocument();
  });
});
