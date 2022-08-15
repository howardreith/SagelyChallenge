import { screen, fireEvent } from '@testing-library/dom';
import createAndRenderTableRow from './createAndRenderTableRow';
import '@testing-library/jest-dom';

describe('createAndRenderTableRow', () => {
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
  `;
  }

  const defaultData = {
    title: 'David the Gnome',
    author: 'Wil Huygen',
    publicationYear: '1985',
    date: '10/26/1985',
    key: '1337C0D3Z',
    abstractNote: 'It is about da gnomez',
    manualTags: 'gnomes r good',
    itemType: 'novel',
    dateCreated: '10/26/1985',
    dateModified: '1/4/1988',
    url: 'https://en.wikipedia.org/wiki/The_World_of_David_the_Gnome',
  };
  const defaultIndex = 0;
  const defaultProps = {
    data: defaultData,
    i: defaultIndex,
    onHandleItemClick: jest.fn(),
  };

  beforeEach(() => {
    generateTestDom();
  });

  it('should render a table row with the proper material', () => {
    createAndRenderTableRow(defaultProps);
    expect(screen.getByText(defaultData.title)).toBeInTheDocument();
    expect(screen.getByText(defaultData.author)).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  it('should render a link to the url', () => {
    createAndRenderTableRow(defaultProps);
    expect(screen.getByText('Source')).toHaveProperty('href', defaultData.url);
  });

  it('should call onHandleItemClick when details button is clicked', () => {
    const onHandleItemClick = jest.fn();
    createAndRenderTableRow({ ...defaultProps, onHandleItemClick });
    expect(onHandleItemClick).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('Details'));
    expect(onHandleItemClick).toHaveBeenCalledWith(defaultIndex);
  });
});
