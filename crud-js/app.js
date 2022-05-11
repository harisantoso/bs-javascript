const ItemCtrl = (function () {

  const Item = function (id, nama, harga) {
    this.id = id
    this.nama = nama
    this.harga = harga
  }

  const data = {
    items: [{
        id: 0,
        nama: 'Javascript',
        harga: 100000
      },
      {
        id: 1,
        nama: 'Node.JS',
        harga: 120000
      },
      {
        id: 2,
        nama: 'VB.Net',
        harga: 80000
      }
    ],
    currentItem: null,
    totalHarga: 0
  }

  return {
    getItems: function () {
      return data.items
    },
    logData: function () {
      return data
    }
  }
})

const UICtrl = (function () {
  const UISelector = {
    itemList: '#item-list'
  }

  return {
    populateItemList: function (items) {
      let html = ``

      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.nama}</strong><em>Rp. ${item.harga}</em>
        <a href="#" class="secondary-content">
          <i class="tiny material-icons">edit</i>
        </a>
        </li>
        `
      })
      document.querySelector(UISelector.itemList).innerHTML = html
    }
  }
})

const app = (function (ItemCtrl, UICtrl) {

  return {
    init: function () {

      const items = ItemCtrl.getItems()
      UICtrl.populateItemList(items)

    }
  }
})

(ItemCtrl, UICtrl)
app.init()