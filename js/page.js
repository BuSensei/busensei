//HEADER CONTENT

var headerContent = '<a href="index.html" id="logo">';
headerContent += '<h1>ぶ先生漢字thing</h1>';
headerContent += '</a>';
headerContent += '<nav><ul>';
headerContent += '<li>';
headerContent += '<a href="index.html" class="selected">Home</a>';
headerContent += '</li>';
headerContent += '<li>';
headerContent += '<a href="about.html">About</a>';
headerContent += '</li></ul></nav>';

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

var footerContent = '<a href="http://twitter.com/busensei">';
footerContent += '<img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon">';
footerContent += '</a>';
footerContent += '<a href="http://facebook.com/bretmayer">';
footerContent += '<img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon">';
footerContent += '</a>';
footerContent += '<p>&copy; 2017 Bret Mayer.</p>';

createFooter = function(footerContent) {
  insertHTML("footer", footerContent);
};

// createFooter(footerContent);