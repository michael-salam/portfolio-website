const header = document.querySelector('.header')

window.onload = function () {
  let i = 1
  header.style.backgroundImage = `url(./images/bg${i}.jpg)`
  setInterval(() => {
    i++
    header.style.backgroundImage = `url(./images/bg${i}.jpg)`
    if (i >= 7) {
      i = 0
    }
  }, 5000);
}