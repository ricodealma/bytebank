async function conectaAPI() {
    const conecta = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.USDBRL)
  }

  addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(),15000);
  })