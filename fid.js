for (var key in data) {
  for (var i = 0; i < data[key].length; i++) {
    var title = data[key][i].ProductName;
      var desc = data[key][i].Description;
      var price = data[key][i].Price;
      var badge = document.createElement('div');
      badge.className = 'badge';
      badge.innerHTML =
        '<h1>' + title + '</h1>' +
        '<h2>' + desc + '</h1>' +
        '<div class="options-only-phone">' +
        '<a class="service-provider-call" href="#" target="_blank"> Buy for $' + price + '</a>';
      document.getElementById(key).appendChild(badge);
  }
}
