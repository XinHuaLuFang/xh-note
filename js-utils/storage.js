function set(key, val) {
  if (val === null || val === undefined) {
    val = ''
  }
  localStorage.setItem(btoa(key), btoa(val))
}

function get(key) {
  const val = localStorage.getItem(btoa(key))
  if (val === null) {
    return ''
  } else {
    return atob(val)
  }
}

function remove(key) {
  localStorage.removeItem(btoa(key))
}

function clear() {
  localStorage.clear()
}

export default {
  get,
  set,
  remove,
  clear
}
