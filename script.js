function getNumbers() {
  $.get('/numbers', function(data) {
    var numbers = data;
    for (var i = 0; i < numbers.length; i++) {
      $('#number' + (i+1)).text(numbers[i]);
    }
  });
}

$(function() {
  setInterval(getNumbers, 1000);
});
