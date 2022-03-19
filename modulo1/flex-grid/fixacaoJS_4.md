```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const numeroRepetido = arrayDeNumeros.filter((item) => {
    return item == numeroEscolhido;
  })
  
  if(numeroRepetido.length > 0)
    return `O número ${numeroEscolhido} aparece ${numeroRepetido.length}x`
  else
    return `Número não encontrado`
}
```