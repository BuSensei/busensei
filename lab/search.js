var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': './cotowaza.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

function findIt(q) {
    var found = false;

    if (q === "") {
        alert('Please enter a query.');
    }
    else {
        $.each(json, function(i, v) {
            if (v.term.includes(q)) {
                document.write(v.term);
                found = true;
            }
        }
    );
    }
    if (!found) {
        document.write('No matches found.');
    }

};

function getTerm(e) {
    e.preventDefault();
  
    var q = document.getElementById('term').value; 
    
    findIt(q); 
};

function catButton(e) {
    e.preventDefault();

    var q = "猫";

    findIt(q);  
};