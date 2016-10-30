$(function() {

  var html = $('#test').html();
  var data = {
    name: 'ЩЕРБАК МАРИНА АЛЕКСАНДРОВНА',
    photoAddr: 'my_photo.jpg',
    description: 'Работаю QA инженером в G5 Entertainment AB. Обожаю читать',
    goalTitle: 'Хочу учить фронтенд, потому что:',
    goal1: 'Хочу творить, а не проверять то, что натворили другие',
    goal2: 'Приходится выполнять много скучной и рутинной работы',
    goal3: 'Не люблю засиживаться на одном месте',
    phoneTitle: 'Мой контактный телефон:',
    phoneNumber: '+380963352132',
    fbTitle: 'Мой профиль на Facebook:',
    fbLink: 'https://www.facebook.com/marxxfa',
    feedbackTitle: 'Мой фидбек:',
    feedback: 'Если нужно, могу подсказать человека, который построит вам забор'
  };

  var content = tmpl(html, data);

  $('body').append(content);

});
