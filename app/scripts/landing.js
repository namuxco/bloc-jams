 $(document).ready(function() { 
    $('.hero-content h3').click(function(){
      subText = $(this).text();
      $(this).text(subText + "!");
     });

  $('h3').hover(function(){
    console.log('change font color on');
    $(this).css({'color': 'pink'});
    },function(){
    console.log('change font color off');
    $(this).css({'color': 'white'});
});

   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
   $('.selling-points .point').hover(onHoverAction, offHoverAction);

   $('.selling-points h5').click(function(){
    console.log('font size increase upon click');
    $(this).css({'font-size': '150%'})
   })

   $('.player-header-nav').click(function(){
    console.log('fade out');
    $(this).fadeOut(1000);
   })
 });
