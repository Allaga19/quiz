document.addEventListener('DOMContentLoaded', function() {
   'use strict';
   const btnOpenModal = document.getElementById('btnOpenModal');
   const modalBlock = document.getElementById('modalBlock');
   const closeModal = document.getElementById('closeModal');
   const questionTitle = document.getElementById('question');
   const formAnswers = document.getElementById('formAnswers');
  
   

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
         // переносим код из html
         formAnswers.innerHTML = `
            <div class="answers-item d-flex flex-column">
               <input type="radio" id="answerItem1" name="answer" class="d-none">
               <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/burger.png" alt="burger">
                  <span>Стандарт</span>
               </label>
            </div>
            <div class="answers-item d-flex justify-content-center">
               <input type="radio" id="answerItem2" name="answer" class="d-none">
               <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/burgerBlack.png" alt="burger">
                  <span>Черный</span>
               </label>
            </div>
         `;
         
      };

      renderQustions();
   };
   
});