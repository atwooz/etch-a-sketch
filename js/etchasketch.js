var totalSize = 960
var down = false
$(document).mousedown(function() {
  down = true;
}).mouseup(function() {
  down = false;
});

$(document).ready(function() {
  var gridSize = 16
  $('.container').width(totalSize + "px")

  createGrid(gridSize)
});

function setSize() {
  $('.box').removeClass('activated')
  newSize = $('#size').val();
  createGrid(newSize)
};

function reset() {
  //$('.box').removeClass('activated')
  $('.box').removeClass('visited')
  $('.box').css("background-color", "white")
};

function getRandomColor(type) {
  if(type === 'hex') {
    var letters = '0123456789ABCDEF';
    var color = "#";
    for(var i = 0; i < 6; i++) {
      nextletter = letters[Math.floor(Math.random() * letters.length)];
      color += nextletter;
    }
    return color;
  }
  else if(type === 'rgb') {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")"
  }
  else{
    return "rgb(255, 255, 255)"
  }
};

function createGrid(boxes) {
  //remove any existing boxes
  $('.box').remove()

  var sideLength = Math.floor(totalSize/boxes)-2

  for(var i = 0; i < boxes; i++) {
    for(var j = 0; j < boxes; j++) {
      $('.container').append("<div class=\"box " + (boxes * i + (j+1)) + "\"><div>")
    }
  }
  $('.box').width(sideLength + "px")
  $('.box').height(sideLength + "px")

  $('.box').mouseenter(function() {
    if(down){
      //$(this).addClass('activated')
        if($(this).hasClass('visited')) {
        //nothing here yet
      } else {
        $(this).css("background-color", getRandomColor('rgb'))
        $(this).addClass('visited');
      }
    }
  });
};
