/* ========== CALCLAR ========== */
function calcular() {
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let output = document.getElementById('output');
  let precoFinal = 0;

  let prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 }
  ];

  let quantities = document.getElementsByName("quantity");

  output.innerHTML = `<p>Caro(a) <b>${name}, </p>`
  output.innerHTML += `<p>Seguem os dados do seu pedido:</p></br>`
  output.innerHTML += `<ul>`

  for (let input of quantities) {
    if (input.value > 0) {
      precoFinal += (input.value * prods[input.id - 1].price);

      output.innerHTML += `<li>
            Prato: ${prods[input.id - 1].name} 
            - Preço unitário: ${prods[input.id - 1].price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} 
            - Quantidade: ${input.value} 
            - Total: ${(input.value * prods[input.id - 1].price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </li></br>`;
    }
  }

  output.innerHTML += `</ul></br>`;
  output.innerHTML += `<p>Preço final: <b>${precoFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></p></br>`;
  output.innerHTML += `
        📞 ${phone}</br> 
        📧 ${email}
      `

  if (precoFinal == 0) {
    output.innerHTML = '<h4 style="color: red;" class="text-center"> Selecione pelo menos um prato</h4>'
  }
}

window.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    event.preventDefault();
    document.querySelector('.btn-primary').click();
  }
});


/* ========== MASK ========== */
document.getElementById('phone').addEventListener('input', event => {
  let x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});


/* ========== TOAST ========== */
let toastTrigger = document.querySelectorAll('.liveToastBtn');
let toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  for (let item of toastTrigger) {
    item.addEventListener('click', () => {
      let toast = new bootstrap.Toast(toastLiveExample);
      toast.show()
    });
  }
}
