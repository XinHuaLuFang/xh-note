function set(key, val) {
  if (val === null || val === undefined) {
    val = ''
  }
  localStorage.setItem(btoa(key), btoa(val))
}

function get(key) {
  return atob(localStorage.getItem(btoa(key)))
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
