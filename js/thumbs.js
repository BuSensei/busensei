var thumbs = [
  ["turtle", "亀"],
  ["lightning", "雷"],
  ["old", "老"],
  ["travel", "旅"],
  ["prefecture", "県"],
  ["heavy", "重"],
  ["hatch", "孵"]
  ]; 


createThumbs = function(thumbs) {    
  
  for (var i=0; i<thumbs.length; i++) {

      var thumbContent = '<div class="entry">';
      thumbContent += '<img src="img/thumb/';
      thumbContent += thumbs[i][0] + 'thumb.png">';
      
      thumbContent += '<div class="kanji-fp">';
      thumbContent += '<h1>' + thumbs[i][1] + '</h1>'
      
      thumbContent += '<p><a ';
      thumbContent += 'id="' + thumbs[i][0] + '"';
      thumbContent += 'href="kanji/' + thumbs[i][0] + '.html">';
      thumbContent += thumbs[i][0];
      thumbContent += '</a></p></div></div>';    

      insertHTML("all-entries", thumbContent);

  } //ITERATE OVER THUMBS

  

}; //CREATE THUMBS FUNCTION

createThumbs(thumbs);


// DATA OF THE THUMBNAILS


