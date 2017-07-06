var apiURL = "https://en.wikipedia.org/w/api.php?callback=?";
var search = '';
var num = 0;
$(document).ready(function(){
    $('#search_button').click(function() {
        $('#display-result').empty(); // clears the existing results
        search = $('#input').val(); //Assigns the search query to the 'search' variable
        $.ajax({
                url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch='  + search + '&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max',
                type: 'GET',
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function(data) {
                    $.each(data.query.pages,function(index, value) {
                         $('<div/>', {
                                    class: 'items',
                                    id: search.replace(/ /g,"-").replace(/\(/g,"-").replace(/\)/g,"-") + num, //removes RegExp
                                   }).appendTo('#display-result');
                          
                          console.log(search.replace(" ","-") + num);
                        
                        $('#' + search.replace(/ /g,"-").replace(/\(/g,"-").replace(/\)/g,"-") + num).html('<a href="http://en.wikipedia.org/?curid=' + value.pageid + '" target="_blank"><h3>' + value.title + '</h3>'  + '<p>' + value.extract + '</p></a>');
                          console.log(search.replace(" ","-") + num);
                        num++;                 
                    });
                }
                });
    });
    
});