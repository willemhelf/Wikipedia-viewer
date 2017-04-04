$(document).ready(function() {

  var bloop = true;
  $('form').on('keydown', '.submit', function(e) {
    
    // action when return key pressed
    
    if (e.keyCode === 13) {
      e.preventDefault();
      var searchQuery = $(this).val();
      $('.results').empty();
      
       //animate bubble
      
      if (bloop) {
       $('.bubble').animate({width:'54%'}, 1500);
       bloop = false;
      }
      
      // json time   
      
      $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchQuery + '&origin=*&format=json', function(data) {
        
        // loop thru data and push to results div 
        
        for (var i = 0; i <= data.length; i++) {
          var sentence = data[2][i];
        $('<p> <a href=' + data[3][i] +'>' + data[1][i] + '</a>' + '<br>•<br>' + sentence + '<br></p>').appendTo('.results').hide().fadeIn(1500);
        }
      })
      return false;
    }
 });
  
})