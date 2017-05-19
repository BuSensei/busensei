//HTML入力
insertHTML = function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML += text;
}; //pop with HTML


//*************
//HEADER CONTENT
//*************

var headerContent = `
  <nav>
    <ul>
      <li><a href="index.html" id="logo">BuSensei.com</a></li>
      <li>・</li>
      <li><a href="about.html">Contact</a></li>
    </ul>
  </nav>
`

createHeader = function(headerContent) {
  insertHTML("header", headerContent);  
};

createHeader(headerContent);

//*************
//告知
//*************

var announceContent = `
  <a href="https://www3.nhk.or.jp/nhkworld/en/tv/japaneasy/busensei/"><img src="./img/kanjidojo.jpg"></a>
  <center>
    <p style="font-weight:800;">
      <span style="text-decoration:underline;">
        BuSensei's Kanji Dojo
      </span>
      <br>
      ★Now on NHK Japan Easy 2!★
    </p> 
    Simple lessons on the history and construction of kanji using fun, easy-to-understand illustrations!<br>
  </center>
`

createAnnounce = function(announceContent) {
  insertHTML("announce", announceContent);
};

createAnnounce(announceContent);

//*************
//PAGE BODY
//*************

var $allEntries = $('<div class="all-entries" id="all-entries"></div>');

$("body").append($allEntries);

//*************
//FOOTER CONTENT
//*************

var footerContent = `
  <a href="http://twitter.com/busensei">
  <img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon">
  </a>
  <a href="http://facebook.com/bretmayer">
  <img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon">
  </a>
  <p>&copy; 2017 Bret Mayer.</p>
  `
  
createFooter = function(footerContent) {
  insertHTML("footer", footerContent);
};

createFooter(footerContent);