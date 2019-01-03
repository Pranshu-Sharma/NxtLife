$('#1stbar').LineProgressbar({
    
      percentage: 87 ,
      fillBackgroundColor: '#FFFF00',
        backgroundColor: '#FFFF8D',
        radius: '50px',
        height: '10px',
        width: '100%'
});

$('#2ndbar').LineProgressbar({
    
    percentage: 50 ,// 90%
    fillBackgroundColor: '#FFFF00',
      backgroundColor: '#FFFF8D',
      radius: '50px',
      height: '10px',
      width: '100%'
});

$('#3rdbar').LineProgressbar({
    
    percentage: 90 ,// 90%
    fillBackgroundColor: '#FFFF00',
      backgroundColor: '#FFFF8D',
      radius: '50px',
      height: '10px',
      width: '100%'
});

$('#gaugeDemo .gauge-arrow').cmGauge();
 
  $(document).ready(function(){
   
        $('#gaugeDemo .gauge-arrow').trigger('updateGauge', 80);
        $('#rating').text('80');
        $( "a:contains('Amazing Slider Free Version')" ).text("");

  });

  $(document).click(function() {
    $( "a:contains('Amazing Slider Free Version')" ).text("");
  });

  
  