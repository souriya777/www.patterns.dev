import { setupCounter } from './patterns/counter.js'

document.querySelector('#app').innerHTML = `
  <button id="counter"></button>
  <div id="singleton"></div>
`

setupCounter(document.querySelector('#counter'))
