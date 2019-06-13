$('.dropdown-toggle').dropdown()

var dropdownItem = $('.dropdown-item')
dropdownItem.click(function(){
  var route = $(this).text().trim();
  if ($(this).parent().text === 'Category') {
    $.get('/categories/' + route)
  }
  if ($(this).parent().text === 'Resturant') {
    $.get('/restaurant/' + route)
  } 
})