$(document).ready(function() {
  console.log('loaded');
  let $calScreen = $('#screen');

  let $buttons = $('span')

  let $arr = [];

  let $string = '';

  $buttons.click(function() {
    let $text = $(this).text();

    if ($text === 'C') {
      $calScreen.html('');
      $arr = [];

    } else if ($text === 'x') {
      $calScreen.append($text);
      $arr.push('*');
      $string = $arr.join('');

    } else if ($text === '÷') {
      $calScreen.append($text);
      $arr.push('/');
      $string = $arr.join('');

    } else if ($text === '=') {
      let $result = eval($string);
      $calScreen.html($result);

    } else {
      $calScreen.append($text);
      $arr.push($text);
      $string = $arr.join('');

    }

  });

});
