$(document).ready(function() {
    $('.open-modal').click(function() {
      const modalTarget = $(this).data('modal-target');
      $(modalTarget).fadeIn();
    });
  
    $('.close').click(function() {
      $(this).closest('.modal').fadeOut();
    });
  
    $(window).click(function(event) {
      if ($(event.target).is('.modal')) {
        $(event.target).fadeOut();
      }
    });
  });
  