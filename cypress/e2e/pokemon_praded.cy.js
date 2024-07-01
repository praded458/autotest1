describe('Покупка нового аватара для своего тренера', function () {

    it('у2у тест покупки аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Входим на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // воод пароля
         cy.get('#password').type('USER_PASSWORD'); // ввод пароля
         cy.get('.auth__button').click(); // Нажать на кнопку ввода
         cy.get('.header__btns > :nth-child(4)').click(); // кнопка потвердить
         cy.get(':nth-child(1) > .shop__button').click(); // кнопка купить первого аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // воод токена
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // ввод срока
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вод кода CRV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Sergey'); // ввод имени
         cy.get('.pay-btn').click(); // кнопка оплатит
         cy.get('#cardnumber').type('56456'); // смс
         cy.get('.payment__submit-button').click(); // отправить
         cy.get('.payment__font-for-success').should('be.visible'); // проверка видемости текста
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверка что текст есть
     })
 }) 