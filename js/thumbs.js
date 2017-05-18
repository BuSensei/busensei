var thumbs = [
  ["turtle", "亀"],
  ["lightning", "雷"],
  ["old", "老"],
  ["travel", "旅"],
  ["prefecture", "県"],
  ["spicy", "辛"],
  ["on hand", "携"],
  ["heavy", "重"],
  ["hatch", "孵"],
  ["together", "共"],
  ]; 


createThumbs = function(thumbs) {    
  
  for (var i=0; i<thumbs.length; i++) {

      var thumbContent = '<div onclick="" class="entry">';
      //ENTRY OPEN

      thumbContent += '<div id="imgkanjioverlay">';
      //IMAGE&OVERLAY DIV OPEN

      thumbContent += '<img src="img/thumb/';
      thumbContent += thumbs[i][0] + 'thumb.png">';
      //THUMB IMAGE

      thumbContent += '<div id="kanjioverlay">';
      //OVERLAY OPEN

      thumbContent += thumbs[i][1]
      //KANJI

      thumbContent += '</div>';
      //OVERLAY CLOSE

      thumbContent += '</div>';
      //IMAGE&OVERLAY DIV CLOSE

      thumbContent += '<div id="thumbtext">';
      //THUMB TEXT OPEN

      thumbContent += '<p><center><a ';
      thumbContent += 'id="' + thumbs[i][0] + '"';
      thumbContent += 'href="kanji/' + thumbs[i][0] + '.html">';
      thumbContent += ' ';
      thumbContent += thumbs[i][0].toUpperCase();
      thumbContent += ' ';
      thumbContent += '</a></center></p></div>';
      //THUMB TEXT CLOSE

      thumbContent += '</div>';
      //ENTRY CLOSE    

      insertHTML("all-entries", thumbContent);

  } //ITERATE OVER THUMBS

  

}; //CREATE THUMBS FUNCTION

createThumbs(thumbs);


// DATA OF THE THUMBNAILS


