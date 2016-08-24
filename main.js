$(document).ready(function($) {
	
var description = $('.description');
var employees = [];

function addInformation(employed) {
description.append(
	'<div class="zaposleni"> <img src="'+employed.picture+'"> <h2> '
	+ employed.name +' </h2> <p> <span> Prof. headline: </span> '
	+ employed.description +' <br> <span> Contact: </span> '
	+employed.emailAddress+' </p> </div> ');
}

$.ajax({
	url: 'https://jsonblob.com/api/jsonBlob/57bdeaf0e4b0dc55a4f01cd4',
	dataType: 'json',
	type: 'get',
	success: function(result) {
      
        employees = result;
        renderEmployees(employees);

	}
});
  
  function renderEmployees(employeees){
    /* clear previous state */
    description.html("");
    // --- //
    $.each(employeees, function(i, employed) {
			addInformation(employed);
	})
  }

/* --- Change view --- */
  
  var searchBox = $('#search-text');
  
$('#search').click(function(){
     var searchVal = searchBox.val();
      var filtered = employees.filter(function(item){
          return item.name.indexOf(searchVal) > -1 || item.description.indexOf(searchVal) > -1;
      });
     renderEmployees(filtered);
});

$(".button").click(function(){
	$("article").toggleClass('viewTwo');
 	$("section").toggleClass('changeView');
 });


/* --- On click scroll... ---*/
$('.goToList').click(function(e) {
	var linkHref = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(linkHref).offset().top 
	}, 1000);

	e.preventDefault();
})



});
