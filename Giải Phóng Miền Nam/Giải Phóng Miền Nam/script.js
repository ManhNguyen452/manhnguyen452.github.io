var h = $('.flag').width();
for (var i = 0; i < h; i++) {
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('animation-delay', i * 10 + 'ms');
    flagElement.css('background-position', -i + "px 0");
    $('.flag').append(flagElement);
}