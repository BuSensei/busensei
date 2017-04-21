var $pageBox = $('<div class="page-box"></div>');

var $content = '';

var $footer = $('<footer id="footer"></footer>');

$(".entry a").click(function(event) {
  event.preventDefault();

  //clear page and footer
  $allEntries.empty();
  $footer.hide();

  var keyword = $(this).attr("id");


  createPage(keyword);

  $pageBox.show();

});

$pageBox.click(function(){
  
  $pageBox.hide();
  $content = '';
  $pageBox.empty();

  //restore page and footer
  $allEntries.show();
  $footer.show();

}); // HIDE PAGE BOX





createPage = function(key) {

  $content = '<div class="kanji-info-box">';
  $content += '<div class="kanji">';
  $content += kanjiList[key].kanji;
  
  $content += '</div>';
  //KANJI DIV END

  $content += '<div class="info">';
  $content += '<div class="readings">';
  $content += '<h2 id="radical">'
  $content += kanjiList[key].radical;
  $content += '、' + kanjiList[key].strokes + '画…</h2>';
  //RADICAL AND STROKES

  $content += '<h2 class="jp-type">';
  $content += kanjiList[key].readings;
  $content += '</h2>';
  $content += '</div>';
  //READINGS DIV END

  $content += '<div class="english">';
  $content += '<h2 class="en-type">';
  $content += kanjiList[key].english;
  $content += '</div>';
  //ENGLISH DIV END

  $content += '<div class="vocab">';
  $content += '<table id="vocab-table">';
  
  $content += '<tr>';
  $content += '<td class="vocab-type">';
  $content += kanjiList[key].word1;
  $content += '</td>';
  $content += '<td class="jp-type">';
  $content += kanjiList[key].word1read;
  $content += '</td>';
  $content += '<td class="en-type">';
  $content += kanjiList[key].word1english;
  $content += '</td></tr>';
  // WORD 1

  $content += '<tr>';
  $content += '<td class="vocab-type">';
  $content += kanjiList[key].word2;
  $content += '</td>';
  $content += '<td class="jp-type">';
  $content += kanjiList[key].word2read;
  $content += '</td>';
  $content += '<td class="en-type">';
  $content += kanjiList[key].word2english;
  $content += '</td></tr>';
  //WORD 2

  $content += '<tr>';
  $content += '<td class="vocab-type">';
  $content += kanjiList[key].word3;
  $content += '</td>';
  $content += '<td class="jp-type">';
  $content += kanjiList[key].word3read;
  $content += '</td>';
  $content += '<td class="en-type">';
  $content += kanjiList[key].word3english;
  $content += '</td></tr>';
  //WORD 3

  $content += '</table></div>';
  //VOCAB TABLE END

  $content += '</div>';
  //INFO SECTION END

  $content += '</div>';
  //KANJI/INFO BOX END

  $content += '<div class ="illust-old-box">';
  $content += '<div class="illust">';
  $content += '<div class="illust-pic">';

  $content += '<img src="./img/e/';
  $content += key + '01.png" alt="reg">';
  //ILLUSTRATION IMAGE

  $content += '</div>';
  //ILLUST-PIC DIV END

  $content += '<div class="illust-text">';
  $content += '<center>';
  $content += kanjiList[key].illustText;
  $content += '</center>';

  $content += '</div>';
  //ILLUSTRATION TEXT DIV END

  $content += '</div>';
  //ILLUSTRATION BOX END

  $content += '<div class="oldforms">';
  $content += '<div class="old-front">';
 
  $content += '<img src="./img/e/';
  $content += key + '02.png" alt="reg">';
  //OLD FORM IMAGE

  $content += '</div>';
  //OLD FORM IMAGE DIV END

  $content += '<center>';
  $content += kanjiList[key].oldFormText;
  $content += '</center>';
  //OLD FORM EXPLANATION

  $content += '</div>';
  //OLD FORM BOX DIV END

  $content += '</div>';
  //ILLUSTRATION & OLD FORM BOX DIV END



  $("body").append($pageBox);

  $pageBox.append($content);
}; //CREATE PAGE FUNCTION END


