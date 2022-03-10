```
function calculaNota(ex, p1, p2) {
  const mediaProva1 = p1 * 2;
  const mediaProva2 = p2 * 3;
  const mediaTotal = (ex + mediaProva1 + mediaProva2) / 6;
  
  if(mediaTotal >= 9)
    return "A";
  else if(mediaTotal < 9 && mediaTotal >= 7.5)
    return "B";
  else if(mediaTotal < 7.5 && mediaTotal >= 6)
    return "C";
  else
    return "D";
}
```