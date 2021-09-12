// вытаскиваем id кнопки из вёрстки
// const btnOpenModal = document.getElementById('btnOpenModal');
// console.log(btnOpenModal);
/*
// навешиваем на этот id событие, которое будет отлавливать 
// клик и выводить сообщение
// btnOpenModal.onclick  = function() {
//    console.log('click');
// };
// если написать два разных обработчика событиея на одну функцию
btnOpenModal.onclick  = function() {
   console.log('first');
};
btnOpenModal.onclick  = function() {
   console.log('second');
};
// выведется только second, потому что свойство onclick
// данного элемента перезаписалось
// console.dir('btnOpenModal');
// длянавешивания несколько разных событий есть 
// есть современный обработчик события addEventListener "слушатель"
// в скобочках показываем какое событие должен слушать,
// но без приставки onclick, н/пр и через запятую пишем функцию
// которая будет отрабатывать
btnOpenModal.addEventListener('click', function() {
   console.log('third');
});
btnOpenModal.addEventListener('click', function() {
   console.log('for');
});
console.dir('btnOpenModal');
*/


// есть ещё один обработчик события для документа
// он отрабатывает только тогда, когда загружен весь документ и готов к работе
document.addEventListener('DOMContentLoaded', function() {
   'use strict';
   const btnOpenModal = document.getElementById('btnOpenModal');

   console.dir(btnOpenModal);
});

