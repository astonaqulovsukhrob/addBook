const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
const form = document.getElementById('form')
const kitobRoyxati = document.querySelector('.kitob-royxati')
const mainConatainer = document.querySelector('.mainConatainer')

function Kitob(title, author, isbn) {
  this.title = title,
    this.author = author,
    this.isbn = isbn
}

function UI() { }

UI.prototype.kitobQosh = function (kitob) {
  const row = document.createElement('tr')
  row.innerHTML = `
  <td>${kitob.title}</td>
  <td>${kitob.author}</td>
  <td>${kitob.isbn}</td>
  <td>
  <i class="delit fas fa-times"></i>
  </td>
  `
  kitobRoyxati.appendChild(row)
}

UI.prototype.inputTozalash = function () {
  title.value = ''
  author.value = ''
  isbn.value = ''
}

UI.prototype.xabarKorsat = function (xabar, classList) {
  const div = document.createElement('div')
  div.classList.add('alert_info')
  div.innerHTML = `
  <div class="alert alert-${classList}" role="alert">
  ${xabar}
  </div>
  `

  mainConatainer.insertBefore(div, form)

  setTimeout(function () {
    document.querySelector('.alert_info').remove()
  }, 3000)
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const kitob = new Kitob(title.value, author.value, isbn.value)

  const ui = new UI()

  if (title.value == '' || author.value == '' || isbn.value == '') {
    ui.xabarKorsat('Hech narsa kiritilmadi !', 'danger')
  }
  ui.xabarKorsat('Kitob qo`shildi !', 'success')

  ui.kitobQosh(kitob)

  ui.inputTozalash()

})

kitobRoyxati.addEventListener('click', function (e) {
  const item = e.target
  if (item.classList[0] == 'delit') {
    const parentItme = item.parentElement.parentElement
    parentItme.remove()
    new UI().xabarKorsat('Kitob o`chirildi !', 'info')
  }
})