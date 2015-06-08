$(document).ready(function(){

  var testFileFormat = new Audio();
  var player = new Audio();
  var source;
  var fileFormat;

  if(testFileFormat.canPlayType("audio/ogg")) {
    fileFormat = "ogg";
  }
  else{
    fileFormat = "mp3";
  }


  $('button').on('click', function(){
    var file = $(this).attr('data-file');
    source = 'sounds/'+file +'.'+fileFormat;
    player.setAttribute("src", source);
    player.play();
  });

});