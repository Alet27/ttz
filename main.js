var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function draw(data) {
    if (!Array.isArray(data)) {
      console.error('Data:', data);
      return;
    } 
  data.sort(function(a, b) {
    return parseFloat(b.priceChangePercent) - parseFloat(a.priceChangePercent);
  });

  var top10 = data.slice(0, 10);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillText('Symbol', 10, 10);
  ctx.fillText('Last Price', 100, 10);
  ctx.fillText('Price Change Percent', 200, 10);

  for (var i = 0; i < top10.length; i++) {
    var coin = top10[i];
    ctx.fillText(coin.symbol, 10, 30 + i * 20);
    ctx.fillText(coin.lastPrice, 100, 30 + i * 20);
    ctx.fillText(coin.priceChangePercent + '%', 200, 30 + i * 20);
  }
}

setInterval(function() {
    fetch('https://fapi.binance.com/fapi/v1/ticker/24hr')
      .then(response => response.json())
      .then(data => draw(data))
      .catch(error => console.error('ошибка фетч:', error));
  }, 250);
