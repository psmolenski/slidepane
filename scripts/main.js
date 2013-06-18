(function($){
  $(function(){
    $('.slidepane').slidepane();

    $('.next-pane').click(function(){
      $('.slidepane').trigger('nextPane');
    });
    $('.prev-pane').click(function(){
      $('.slidepane').trigger('prevPane');
    });
  });
})(jQuery);