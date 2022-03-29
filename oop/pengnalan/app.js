// penulisan oop javascript
const course = {
  paket: 'NodeJS',
  harga: 150000
}

console.log(course)

// menggunakan function
function kursus() {
  this.paket = 'Javascript'
  this.harga = 100000
}

const laravel = new kursus()
const javascript = new kursus()

console.log(javascript)