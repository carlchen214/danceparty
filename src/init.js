$(document).ready(function() {
  window.dancers = [];
  window.backgrounds = ['images/backgroundSB.png', 'images/backgroundSB2.jpg', 'images/background.png'];

  $('.addDancerButton').on('click', function(event) {
    $('.celebration').remove();

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName]; 

    // if (top > window.height) {
    //   get a new top
    // }

    var dancer = new dancerMakerFunction(
      // '600px',
      // '400px',
      1000 * Math.random() / 2,
      1000 * Math.random() / 2,
      Math.random() * 800
    );

    $('body').append(dancer.$node);
    $(this).remove();
    // this will remove the button for adding dancer, so you can only add one dancer of each type

    window.dancers.push(dancer); 
  });

  $('.meetUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) { 
      var dancer = window.dancers[i];
      dancer.meetUp();
    }

    var celebration = $('<span class="celebration"></span>');
    setTimeout(function() {
      $('body').append(celebration);    
    }, 3100);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.middleButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i += 2) {
      var first = window.dancers[i];
      var second = window.dancers[i + 1];
      var middleDistance = {
        top: (first.top + second.top) / 2, 
        left: (first.left + second.left) / 2
      };
      first.middle(middleDistance);
      second.middle(middleDistance);
    }
  });

  
  var index = 0;
  
  $('.changeBackgroundButton').on('click', function(event) {
    if (window.backgrounds.length === index) {
      index = 0;
    }
    $('html').css('background-image', 'url(' + window.backgrounds[index] + ')');
    index++;
  });

  $('body').on('mouseover', '.dancer', function() { // jquery event delegation
    $(this).removeClass('flip');
    $(this).addClass('flip');
  });

  // $('body').on('mouseover', '.patrick', function() {
  //   $(this).css({'background-image': 'url(images/krabs.gif)',
  //               'width': '200px',
  //               'length': '200px'});
  // });

  // $('body').on('click', '.spongebob', 
  // $('body').on('click', '.patrick', function() { 
  //   $(this).removeClass('lightSpeedIn');
  //   $(this).addClass('lightSpeedOut');
  // });

 




});

