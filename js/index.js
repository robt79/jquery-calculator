$(document).ready(function() {
  console.log('loaded');
  let $calScreen = $('#screen');
  console.log($calScreen);

  let $buttons = $('span')
  console.log($buttons);

  let $arr = [];

  let $string = '';

  $buttons.click(function() {
    let $text = $(this).text();


    if ($text === 'C') {
      console.log('test');
      $calScreen.html('');
      $arr = [];

    } else if ($text === 'x') {
      $calScreen.append($text);
      $arr.push('*');
      $string = $arr.join('');
      console.log($string);


    } else if ($text === '÷') {
      $calScreen.append($text);
      $arr.push('/');
      $string = $arr.join('');
      console.log($string);

    } else if ($text === '=') {
      let $result = eval($string);
      $calScreen.html($result);

      console.log($result);
    } else {
      $calScreen.append($text);
      $arr.push($text);
      $string = $arr.join('');
      console.log($string);

    }



  });


});
