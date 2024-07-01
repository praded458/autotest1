describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () { // задание 1
         cy.visit('https://login.qa.studio/'); // Зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверил цвет кнопки
         cy.get('#mail').type('german@dolnikov.ru'); //Найти поле логин и ввести верный логин Ввести правельный логин
         cy.get('#pass').type('iLoveqastudio1'); // Найти поле логин и ввести верный пароль Ввести правильный пароль
         cy.get('#loginButton').click(); //нажал кнопку
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для юзира
          
     })
     it('НЕ Верный пароль и верный логин', function () { // задание 3
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверил цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); //Найти поле логин и ввести верный логин Ввести правельный логин

        cy.get('#pass').type('iLoveqastudio7'); // Найти поле логин и ввести НЕ верный пароль Ввести правильный пароль
        cy.get('#loginButton').click(); //нажал кнопку
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для юзира
    })
    it('Верный пароль и НЕ верный логин', function () { // задание 4
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверил цвет кнопки

        cy.get('#mail').type('germandolnikov.ru'); //Найти поле логин и ввести без собаки логин Ввести правельный логин

        cy.get('#pass').type('iLoveqastudio1'); // Найти поле логин и ввести НЕ верный пароль Ввести правильный пароль
        cy.get('#loginButton').click(); //нажал кнопку
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для юзира
    }) 
    it('Верный пароль и логин без @', function () { // задание 5
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверил цвет кнопки

        cy.get('#mail').type('germandolnikov.ru'); //Найти поле логин и ввести без собаки логин Ввести правельный логин

        cy.get('#pass').type('iLoveqastudio1'); // Найти поле логин и ввести НЕ верный пароль Ввести правильный пароль
        cy.get('#loginButton').click(); //нажал кнопку
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для юзира
    }) 
    it('Верный пароль и логин со строчными буквами', function () { // задание 6
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверил цвет кнопки

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Найти поле логин и ввести без собаки логин Ввести правельный логин

        cy.get('#pass').type('iLoveqastudio1'); // Найти поле логин и ввести НЕ верный пароль Ввести правильный пароль
        cy.get('#loginButton').click(); //нажал кнопку
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для юзира
    }) 

    it('Проверка восстановления пароля ', function () { // Задание 2
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверил цвет кнопки

        cy.get('#forgotEmailButton').click(); //нашал кнопку забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //воод верной почты
        cy.get('#restoreEmailButton').click();; // нажимаем отправить код
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден для юзира
    }) 
 })
 
// План
 // +   Найти поле логин и ввести верный логин Ввести правельный логин
 // Найти поле логин и ввести верный пароль Ввести правильный пароль
 // Найти кнопку войти и нажать Нажать войти
 // Провети, что авторизация прошла удачно
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 