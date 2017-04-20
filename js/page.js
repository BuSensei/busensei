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