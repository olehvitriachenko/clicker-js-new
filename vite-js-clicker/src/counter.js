const rootSelector = '[data-js-clicker]'

class ClickEvent {
    selectors = {
        root: rootSelector,
        clickerButton: '[data-js-clicker-button]',
        clickerCounter: '[data-js-clicker-counter]',
        clickerResetButton: '[data-js-clicker-reset-button]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.clickerCounterElement = this.rootElement.querySelector(this.selectors.clickerCounter)
        this.clickerButtonElement = this.rootElement.querySelector(this.selectors.clickerButton)
        this.clickerResetButtonElement = this.rootElement.querySelector(this.selectors.clickerResetButton)
        this.counter = this.loadCounter() // Завантажуємо значення лічильника
        this.updateCounterDisplay() // Оновлюємо відображення лічильника
        this.bindEvents()
    }

    // Метод для оновлення відображення лічильника
    updateCounterDisplay() {
        this.clickerCounterElement.innerText = this.counter
    }

    // Метод для збереження лічильника в локальне сховище
    saveCounter() {
        localStorage.setItem('clicker-counter', this.counter) // Виправлено ключ
    }

    // Метод для завантаження лічильника з локального сховища
    loadCounter() {
        return parseInt(localStorage.getItem('clicker-counter')) || 0
    }

    // Метод для обновления счетчика
    updateCounter() {
        this.counter += 1;
        this.updateCounterDisplay()
        this.saveCounter()
    }

    // Обработчик события нажатия на кнопку
    onButtonClick = () => {
        this.updateCounter()
    }

    onResetButtonClick = () => {
        this.counter = 0 // Сбрасываем счетчик
        this.updateCounterDisplay() // Обновляем отображение счетчика
        this.saveCounter() // Сохраняем значение в локальное хранилище
    }

    // Привязка событий
    bindEvents() {
        this.clickerButtonElement.addEventListener('click', this.onButtonClick) // Привязываем обработчик к кнопке
        this.clickerResetButtonElement.addEventListener('click', this.onResetButtonClick) // Привязываем обработчик к кнопке сброса
    }
}

class ClickEventCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ClickEvent(element) // Создаем экземпляр ClickEvent для каждого элемента
        })
    }
}

// Инициализация коллекции событий
new ClickEventCollection()


