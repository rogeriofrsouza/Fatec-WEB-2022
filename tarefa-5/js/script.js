/* ========== SWIPER ========== */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,

  // Swiper 7
  watchOverflow: false,
  resizeObserver: false,
  watchSlidesProgress: true,

  breakpoints: {
    576: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
});

/* ========== CALCLAR ========== */
function calcular() {
  let nome = document.getElementById('output');
  let phone = document.getElementById('phone');
  let email = ducment.getElementById('email');
  let output = document.getElementById('output');


  let prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 }
  ];

  let quantities = document.getElementsByName("quantity");
    
  for (let input of quantities) {
    output.innerHTML += ` Produto: ${prods[input.id-1].name} - Preço: ${prods[input.id-1].price} - Quantidade: ${input.value} </br>`
  }

  
}

/* ========== MASK ========== */
document.getElementById('phone').addEventListener('input', event => {
  let x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
