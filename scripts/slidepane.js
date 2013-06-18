(function($){
  $.fn.slidepane = function() {
    var slidepane = this,
        width = parseInt(slidepane.width(), 10);

    var wrapper = buildWrapper();

    slidepane.on('nextPane', function(){
      if(hasNextPane()) showNextPane();
    });

    slidepane.on('prevPane', function(){
      if(hasPrevPane()) showPrevPane();
    });

    return this;

    function buildWrapper() {
      var wrapper, totalPaneWidth;

      wrapper = slidepane.find('.pane').wrapAll('<div class="slidepane-wrapper clearfix" />').parent();

      totalPaneWidth = slidepane.find('.pane').length * width;
      
      wrapper.width(totalPaneWidth);
    
      return wrapper;
    }
    
    function hasNextPane(){
      return !getCurrentPane().is(slidepane.find('.pane:last'));
    }
    
    function showNextPane(){
      var wrapper = slidepane.find('.slidepane-wrapper');
      var leftMargin = parseInt(wrapper.css('margin-left'), 10) || 0;

      slidepane.data('current-pane', getCurrentPane().next('.pane'));
      
      wrapper.animate({ 'margin-left' : leftMargin-width}, 200);
    }
    
    function hasPrevPane(){
      return !getCurrentPane().is(slidepane.find('.pane:first'));
    }
    
    function showPrevPane(){
      var wrapper = slidepane.find('.slidepane-wrapper');
      var leftMargin = parseInt(wrapper.css('margin-left'), 10) || 0;

      slidepane.data('current-pane', getCurrentPane().prev('.pane'));
      
      wrapper.animate({ 'margin-left' : leftMargin+width}, 200);
    }
    
    function getCurrentPane(){
      var currentPane = slidepane.data('current-pane');
      if(!currentPane) {
        currentPane = slidepane.find('.pane:first');
        slidepane.data('current-pane', currentPane);
      }
      
      return currentPane;
    }
  };
})(jQuery);