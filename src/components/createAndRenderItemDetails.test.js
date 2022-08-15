import createAndRenderItemDetails from "./createAndRenderItemDetails";
import {
  screen,
} from '@testing-library/dom'
import '@testing-library/jest-dom'

describe('createAndRenderItemDetails', () => {
  function generateTestDom() {
    document.body.innerHTML = `
        <div id="detailsWrapper" data-testid="detailsWrapper" class="container text-center mt-3">
            <button id="backToTableButton" class="btn btn-primary">Back to Table</button>
        </div>
  `
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
    url: 'https://en.wikipedia.org/wiki/The_World_of_David_the_Gnome'
  }

  beforeEach(() => {
    generateTestDom()
  })

  it('should create material in the DOM for all data when all is present', () => {
    createAndRenderItemDetails(defaultData)
    expect(screen.getByText(defaultData.title)).toBeInTheDocument()
    expect(screen.getByText(defaultData.author)).toBeInTheDocument()
    expect(screen.getByText(`Publication Year: ${defaultData.publicationYear}`)).toBeInTheDocument()
    expect(screen.getByText(`Date Written: ${defaultData.date}`)).toBeInTheDocument()
    expect(screen.getByText(defaultData.key, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(defaultData.abstractNote, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(defaultData.manualTags, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(defaultData.itemType, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(`Date Created: ${defaultData.dateCreated}`)).toBeInTheDocument()
    expect(screen.getByText(defaultData.dateModified, { exact: false })).toBeInTheDocument()
  })

  it('should render a link to the url', () => {
    createAndRenderItemDetails(defaultData)
    expect(screen.getByText('Click here to view media')).toHaveProperty('href', defaultData.url)
  })

  it('should render title unknown with no title', () => {
    createAndRenderItemDetails({...defaultData, title: ''})
    expect(screen.getByText('(Title Unknown)')).toBeInTheDocument()
  })

  it('should render author unknown with no title', () => {
    createAndRenderItemDetails({...defaultData, author: ''})
    expect(screen.getByText('(Author Unknown)')).toBeInTheDocument()
  })

  it.each(['date', 'dateCreated', 'dateModified'])('should render unknown for absent date in %s', (key) => {
    createAndRenderItemDetails({...defaultData, [key]: ''})
    expect(screen.getByText('(Unknown)', { exact: false })).toBeInTheDocument()
  })

  // TODO test that remaining absent items are not rendered at all
})