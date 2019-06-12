

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

axios.get('/').then(function(data) {
  console.log(data)
})