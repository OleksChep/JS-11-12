$(function() {

  /******Shablonizator*************/
  var html=$('#about').html();
  var header={
    hh:'Чепурной Алексей Александрович',
    img:'img/img_10.png',
    student:'Инженер средств телевидения и радио',
    listH:'Хочу учить Frontend, потому что:',
    listItem:[
      'Эфирное ТВ - это прошлый век.',
      'Хочу получить новую профессию.',
      'Фронтенд - это перспективно.'
    ],
    contactTel:'Мой контактный телефон',
    tel:'+380667641723',
    profileVk:'Мой профиль в ВК',
    hrefVk:'https://vk.com',
    feedback:'Мой фидбэк:',
    feedText:'Могу настроить передатчик.'


  };
  var content=tmpl(html,header);
  /*var content1=tmpl(html,{:listItem});*/
  $('.wrap').append(content);
  /*$('.content').append(content1);*/

  });