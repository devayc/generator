$(function () {
   $(':submit').click(function (e) {
      $(':text').attr('disabled', 'disabled')
      e.preventDefault();
   })
   $(':reset').click(function (e) {
      $(':text').removeAttr('disabled', 'disabled')
      e.preventDefault();
      })
     
  
     
})
   