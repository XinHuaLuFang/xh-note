### 处理blob

```js
responseType: 'blob'

const blob = res.data
const disposition = res.headers['content-disposition']
const fileparam = disposition.split(';')[1]
const filename = decodeURIComponent(fileparam.split('=')[1])
blobDownload(blob, filename)

function blobDownload(blob, filename) {
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = filename
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  window.URL.revokeObjectURL(link.href)
  document.body.removeChild(link)
}
```
