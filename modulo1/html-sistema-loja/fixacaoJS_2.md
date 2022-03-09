``` 
function calculaPrecoTotal(quantidade) {
  let valor;
  
  if(quantidade < 12)
    valor = 1.30;
  else
    valor = 1;
    
  return valor * quantidade;
} 
```