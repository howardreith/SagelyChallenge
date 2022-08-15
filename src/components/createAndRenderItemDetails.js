export default function createAndRenderItemDetails(itemData) {
  const dataContainer = document.createElement('div');
  dataContainer.id = 'dataContainer';
  document.getElementById('detailsWrapper').appendChild(dataContainer);

  const title = document.createElement('h2');
  title.innerHTML = itemData.title || '(Title Unknown)';
  document.getElementById('dataContainer').appendChild(title);

  const author = document.createElement('h3');
  author.innerHTML = itemData.author || '(Author Unknown)';
  document.getElementById('dataContainer').appendChild(author);

  const publicationYear = document.createElement('p');
  publicationYear.innerHTML = `Publication Year: ${itemData.publicationYear || '(Unknown)'}`;
  document.getElementById('dataContainer').appendChild(publicationYear);

  const date = document.createElement('p');
  date.innerHTML = `Date Written: ${itemData.date || '(Unknown)'}`;
  document.getElementById('dataContainer').appendChild(date);

  if (itemData.key) {
    const key = document.createElement('p');
    key.innerHTML = `Key: ${itemData.key}`;
    key.setAttribute('data-testid', 'key');
    document.getElementById('dataContainer').appendChild(key);
  }

  if (itemData.abstractNote) {
    const abstractNote = document.createElement('p');
    abstractNote.innerHTML = `Abstract Note: ${itemData.abstractNote}`;
    abstractNote.setAttribute('data-testid', 'abstractNote');
    document.getElementById('dataContainer').appendChild(abstractNote);
  }

  if (itemData.manualTags) {
    const manualTags = document.createElement('p');
    manualTags.innerHTML = `Tags: ${itemData.manualTags}`;
    manualTags.setAttribute('data-testid', 'manualTags');
    document.getElementById('dataContainer').appendChild(manualTags);
  }

  if (itemData.itemType) {
    const itemType = document.createElement('p');
    itemType.innerHTML = `Media Type: ${itemData.itemType}`;
    itemType.setAttribute('data-testid', 'itemType');
    document.getElementById('dataContainer').appendChild(itemType);
  }

  const dateCreated = document.createElement('p');
  dateCreated.innerHTML = `Date Created: ${itemData.dateCreated || '(Unknown)'}`;
  document.getElementById('dataContainer').appendChild(dateCreated);

  const dateModified = document.createElement('p');
  dateModified.innerHTML = `Last Modified: ${itemData.dateModified || '(Unknown)'}`;
  document.getElementById('dataContainer').appendChild(dateModified);

  const link = document.createElement('a');
  link.href = `${itemData.url}`;
  link.innerHTML = 'Click here to view media';
  link.target = '_blank';
  document.getElementById('dataContainer').appendChild(link);
}
