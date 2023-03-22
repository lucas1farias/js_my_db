

// Saber as dimensões da tela do navegador em tempo real

// ONDE AS COORDENADAS SERÃO INSERIDAS NO TEMPLATE
<span class="window-properties"></span>

// ELEMENTO
let windowEl = document.querySelector('.window-properties')

// OPCIONAL
windowEl.style.position = 'fixed'
windowEl.style.bottom = '70px'
windowEl.style.left = '5px'
windowEl.style.fontSize = '1rem'
windowEl.style.textShadow = '0 0 10px white'
windowEl.style.color = 'white'

// MANDATÓRIO
let root = document.compatMode == 'BackCompat' ? document.body : document.documentElement
let hasVerticalScrollbar = root.scrollHeight>root.clientHeight
let hasHorizontalScrollbar = root.scrollWidth>root.clientWidth

// ---------- EXEMPLO: Desconsiderando barras de rolagem ----------
let widthEl  = windowEl.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

let heightEl = windowEl.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

windowEl.innerHTML = `${width}, ${height}`

// ---------- EXEMPLO: Considerando barras de rolagem (+ precisão) ----------
let width  = windowEl.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;
let height = windowEl.innerHeight|| document.documentElement.clientHeight||
document.body.clientHeight;

if (hasVerticalScrollbar) {
  windowEl.textContent = `${width + 17}, ${height}`
} else {
  windowEl.textContent = `${width}, ${height}` 
}
