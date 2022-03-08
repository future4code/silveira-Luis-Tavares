```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salario = 2000;
  const cincoPorCento = 0.05 * 100;
  let comissao = (100 * qtdeCarrosVendidos) + (valorTotalVendas * 0.05);
  
  return salario + comissao;
} 
```