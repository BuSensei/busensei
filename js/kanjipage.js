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

  $content = '<div id="kanji-info-box">';
  //KANJI-INFO OPEN

  $content += '<div id="illust-old-box">';
  //ILLUSTRATION & OLD FORM OPEN

  $content += '<div id="illust">';
  //ILLUSTRATION OPEN

  $content += '<img src="./img/e/';
  $content += key + '01.png">';
  $content += '</div>';
  //ILLUSTRATION CLOSE

  $content += '<div id="oldforms">';
  //OLD FORMS OPEN

  $content += '<img src="./img/e/';
  $content += key + '02.png">';
  $content += '</div>';
  //OLD FORMS CLOSE

  $content += '</div>';
  //ILLUSTRATION & OLD FORM CLOSE

  $content += '<div id="info">';
  //INFO OPEN

  $content += '<center>';
  $content += '<font size="+2">【'; 
  $content += kanjiList[key].kanji;
  $content += '】</font> ';

  $content += kanjiList[key].oldFormText;
  $content += '</center>';

  $content += '<center>';
  $content += kanjiList[key].illustText;
  $content += '</center>';

  $content += '</div>';
  //INFO BOX CLOSE

  $content += '</div>';
  //KANJI-INFO CLOSE

  $("body").append($pageBox);

  $pageBox.append($content);
}; //CREATE PAGE FUNCTION END


