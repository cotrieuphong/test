
// $('#name-modal').on('shown.bs.modal', function () {
//   $(this).find('.modal-name').html('loading...')
// })

$(function(){
  $('.tree__item').click(function(){
    $('#name-modal').modal('show');
    $('#name-modal').find('.modal-name').html($(this).find('.tree__name').html());
  })
})
