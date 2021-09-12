document.addEventListener('DOMContentLoaded', function() {
   'use strict';
   const btnOpenModal = document.getElementById('btnOpenModal');
   const modalBlock = document.getElementById('modalBlock');
   const closeModal = document.getElementById('closeModal');
   const questionTitle = document.getElementById('question');


// открываем окно по клику
   btnOpenModal.addEventListener('click', () => {
      // console.log(modalBlock);
      // так как ввёрстке исользуется bootstrap. то мы должны дать id с 
      // class modall класc d-block этот клас в bootstrap анологичен классу display: block;
      // т.е. при клике на modalBlock появится модальное окно
      modalBlock.classList.add('d-block');
      playTest();

   });
   // навешиваем на кнопку обработчик события
   closeModal.addEventListener('click', () => {
      // по клику из closeModal с помощью classList будет удаляться класс d-block у modalBlock
      modalBlock.classList.remove('d-block');
   });
   // функция теста
   const playTest = () => {
      // console.log('тест начался');
      // функция вопросов и ответов, будет выводить информацию в модаьное окно
      const renderQustions = () => {
         // console.log('render');
         // первый вопрос
         questionTitle.textContent = 'Какого цвета бургер вы хотите?';
         questionTitle.textContent = 'Какого цвета бургер вы хотите?';
      };

      renderQustions();
   };
   
});