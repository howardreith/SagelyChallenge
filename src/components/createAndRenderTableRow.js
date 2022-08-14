export default function createAndRenderTableRow({data, i, onHandleItemClick}) {
  const row = document.createElement('tr')
  row.id = `row${i}`
  document.getElementById('table').appendChild(row);
  const titleText = document.createElement('td')
  titleText.innerHTML = data.title || '(Title Unknown)'
  titleText.id = `title${i}`
  document.getElementById(`row${i}`).appendChild(titleText)

  const authorText = document.createElement('td')
  authorText.innerHTML = data.author || '(Author Unknown)'
  authorText.id = `author${i}`
  document.getElementById(`row${i}`).appendChild(authorText)

  const linkBox = document.createElement('td')
  linkBox.id = `linkBox${i}`
  document.getElementById(`row${i}`).appendChild(linkBox)
  const link = document.createElement('a')
  link.href = `${data.url}`
  link.id = `link${i}`
  link.innerHTML = 'Source';
  link.target = '_blank';
  document.getElementById(`linkBox${i}`).appendChild(link)

  const moreDetailsBox = document.createElement('td')
  moreDetailsBox.id = `moreDetailsBox${i}`
  document.getElementById(`row${i}`).appendChild(moreDetailsBox)
  const moreDetailsButton = document.createElement('button')
  moreDetailsButton.onclick = () => {
    onHandleItemClick(i)
  }
  moreDetailsButton.className = 'btn btn-secondary btn-sm'
  moreDetailsButton.innerHTML = 'Details'
  document.getElementById(`moreDetailsBox${i}`).appendChild(moreDetailsButton)
}