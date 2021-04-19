    // Document ready shorthand statement
    $(function() {
      $('.smooth').click(function() {
        var id = $(this).attr('href');
        $('html,body').animate({ scrollTop: $(id).offset().top }, 'slow');
        // Prevent default behavior of link
        return false;
      });
    });