// Define os valores de faturamento mensal por estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Calcula o total do faturamento mensal
const faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calcula o percentual de representação de cada estado
const percentualSP = (faturamentoSP / faturamentoTotal) * 100;
const percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
const percentualMG = (faturamentoMG / faturamentoTotal) * 100;
const percentualES = (faturamentoES / faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

// Exibe os resultados em um alerta
alert(`Percentual de representação do faturamento mensal por estado:
- SP: ${percentualSP.toFixed(2)}%
- RJ: ${percentualRJ.toFixed(2)}%
- MG: ${percentualMG.toFixed(2)}%
- ES: ${percentualES.toFixed(2)}%
- Outros: ${percentualOutros.toFixed(2)}%`);
