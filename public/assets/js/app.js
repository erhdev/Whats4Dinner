$('#southern').on('click' , function() {
  $.get(`/categories/${$(this).val().trim}`)
});
$('#italian').on('click' , function() {
  $.get(`/categories/${$(this).val().trim}`)
});
$('#chinese').on('click' , function() {
  $.get(`/categories/${$(this).val().trim}`)
});
$('#seafood').on('click' , function() {
  $.get(`/categories/${$(this).val().trim}`)
});
