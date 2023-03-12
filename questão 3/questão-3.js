fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const faturamentoDiario = data.map(item => item.valor).filter(valor => valor > 0);
    const numDias = faturamentoDiario.length;
    const menorFaturamento = Math.min(...faturamentoDiario);
    const maiorFaturamento = Math.max(...faturamentoDiario);
    const mediaMensal = faturamentoDiario.reduce((total, faturamento) => {
      if (faturamento > 0) {
        return total + faturamento;
      } else {
        return total;
      }
    }, 0) / numDias;
    const diasAcimaMedia = faturamentoDiario.filter(faturamento => faturamento > mediaMensal).length;
    
    console.log(`O menor valor de faturamento foi R$ ${menorFaturamento.toFixed(2)}.`);
    console.log(`O maior valor de faturamento foi R$ ${maiorFaturamento.toFixed(2)}.`);
    console.log(`A média mensal de faturamento é de R$ ${mediaMensal.toFixed(2)}.`);
    console.log(`Houve ${diasAcimaMedia} dias em que o faturamento diário foi superior à média mensal.`);
  });