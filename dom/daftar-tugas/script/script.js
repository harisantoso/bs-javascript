const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

loadEventListeners()

function loadEventListeners() {

  document.addEventListener('DOMContentLoaded', ambilTugas)

  // Menambahkan data 
  form.addEventListener('submit', addTask)
  // hapus 1 data 
  taskList.addEventListener('click', removeTask)
  // hapus semua data
  clearBtn.addEventListener('click', clearTasks)
  // untuk filter data
  filter.addEventListener('keyup', filterTasks)
}

function ambilTugas() {
  var tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function (task) {
    const li = document.createElement('li')

    li.className = 'collection-item'
    li.appendChild(document.createTextNode(task))

    const link = document.createElement('a')

    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-window-close-o"></i>'

    li.appendChild(link)
    taskList.appendChild(li)
  })
}

// function Menambahkan data 
function addTask(e) {
  if (taskInput.value === '') {
    alert('data berhasil disimpan')
  }

  const li = document.createElement('li')

  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value))

  const link = document.createElement('a')

  link.className = 'delete-item secondary-content'
  link.innerHTML = '<i class="fa fa-window-close-o"></i>'

  li.appendChild(link)
  taskList.appendChild(li)

  simpanData(taskInput.value)

  taskInput.value = ''

  e.preventDefault()
}

function simpanData(task) {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// function hapus 1 data 
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('apakah anda yakin ingin hapus data!')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  hapusDataLocal(e.target.parentElement.parentElement)
}

function hapusDataLocal(taskItem) {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// function hapus semua data
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  hapusDataSemua()
}

function hapusDataSemua() {
  localStorage.clear()
}

// function untuk filter data
function filterTasks(e) {
  const text = e.target.value.toLowerCase()
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}