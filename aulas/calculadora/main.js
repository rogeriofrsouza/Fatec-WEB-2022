/* ===== CALCULADORA ===== */
function calcular(operacao) {
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  let output = document.getElementById('output');

  switch(operacao) {
    case '+': output.value = num1 + num2; break;
    case '-': output.value = num1 - num2; break;
    case '*': output.value = num1 * num2; break;
    default: output.value = Math.round(num1 / num2);
  }

  salvarHistorico(operacao, num1, num2, output.value);
}

/* ===== HISTÓRICO ===== */
function salvarHistorico(op, n1, n2, res) {
  let history = document.getElementById('history');

  history.innerHTML += `<p>${n1} ${op} ${n2} = <b>${res}</b></p>`;
  let list = history.children;

  if (list.length > 10) {
    history.removeChild(list[0]);
  }
}
