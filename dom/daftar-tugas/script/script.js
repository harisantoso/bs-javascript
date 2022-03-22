const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

loadEventListeners()

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
}

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
  taskInput.value = ''

  e.preventDefault()
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('apakah anda yakin ingin hapus data!')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}