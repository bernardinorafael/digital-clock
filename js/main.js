let hour = document.querySelector('#hour-box')
let minute = document.querySelector('#min-box')
let second = document.querySelector('#sec-box')

let clock = setInterval(function time() {
  let dateToday = new Date()
  let hourNow = dateToday.getHours()
  let minNow = dateToday.getMinutes()
  let secNow = dateToday.getSeconds()

  if (hourNow < 10) {
    hourNow = '0' + hourNow
  }
  
  if (minNow < 10) {
    minNow = '0' + minNow
  }
  
  if (secNow < 10) {
    secNow = '0' + secNow
  }
  
  hour.textContent = hourNow
  minute.textContent = minNow
  second.textContent = secNow
})

/* 
  Apenas uma condição no if não exige blocos de colchete, porém sempre usar para facilitar a leitura do seu código por uma outra pessoa.

  if (hourNow < 10) hourNow = '0' + hourNow
  if (minNow < 10) minNow = '0' + minNow
  if (secNow < 10) secNow = '0' + secNow 
*/
