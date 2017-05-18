//HEADER CONTENT

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

insertHTML = function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML += text;
}; //pop with HTML


createHeader(headerContent);

//PAGE BODY

var $allEntries = $('<div class="all-entries" id="all-entries"></div>');

$("body").append($allEntries);

//FOOTER CONTENT

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