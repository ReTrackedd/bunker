let random = (min = 0, max) => Math.floor(Math.random() * (max - min )) + min;

const stayData = [3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48];

const areaData = [60, 80, 90, 100, 115, 125, 140, 150, 160, 175, 200, 220, 245, 270, 315, 335, 360, 380, 400];

const facilitiesData = [
  "Кузня", 
  "Медпункт", 
  "Арсенал",
  "Додаткова електростанція",
  "Кімната зв\'язку",
  "Святилище",
  "Кухня",
  "Їдальня",
  "Столярня",
  "Комп\'ютерний клуб",
  "Хімічний кабінет", 
  "Погреб з вином", 
  "Хлів",
  "Теплиця", 
  "Тренажерний зал", 
  "Бібліотека",
  "Склад деревини"
];

const addItemsData = [
  "Метальні ножі 6шт",
  "В бункері проживають павуки",
  "В бункері проживають пацюки",
  "В бункері проживають змії (неотруйні)",
  "Презервативи 12шт",
  "Антирадіаційний костюм",
  "Музичний програвач",
  "Древні манускрипти",
  "Біблія",
  "Монополія",
  "Шахмати",
  "Колекція коміксів \"Marvel\"",
  "Фортепіано",
  "Мультиварка",
  "Радіо",
  "Колекція наручних годинників",
  "Телевізор",
  "Пістолет і 2 пачки патронів",
  "Аптечка першої допомоги",
  "Комп'ютер",
  "Аптечка",
  "Швейна машина",
  "Книга по технології будівництва",
  "Книга з виживання",
  "Книга кулінарії",
  "Вогнегасник",
  "Насіння зернових культур",
  "Книги по урології/гінекології",
  "Токарний станок",
  "Більярдний стіл",
  "Карта місцевості"
];

const bunkerData = [
  {
    "name": "Сучасний бункер",
    "coef": 0,
    "desc": ` Побудований минулого року. Ідеальний стан, 
      проблеми з електрикою чи водопостачанням відсутні.
      Вхід до бункера вибухотривкий, відкрити ззовні неможливо, 
      так що бункер абсолютно безпечний на весь час перебування.
      Площа бункера - ${areaData[random(0, areaData.length)]}м2, 
      час перебування в бункері - ${stayData[random(0, stayData.length)]} місяців, 
      їжа і знезаражена вода присутні на весь час перебування.
      Бункер оснащений додатковими кімнатами: `
  },
  {
    "name": "Бункер, збудований в часи другої світової війни",
    "coef": 0,
    "desc": `Незважаючи на вік добре зберігся, але в процесі проживання 
      можуть виникнути проблеми з електро- чи водопостачанням.
      Всі необхідні для ремонту креслення присутні. Вхід до бункера 
      охороняється паролем, але з достатньою силою двері можна виламати, 
      краще подумати про захист від зовнішнього світу.
      Площа бункера - ${areaData[random(0, areaData.length)]}м2, 
      час перебування в бункері - ${stayData[random(0, stayData.length)]} місяців, 
      їжа і знезаражена вода присутні на весь час перебування.
      Бункер оснащений додатковими кімнатами: `
  },
  {
    "name": "Бункер, збудований в часи другої світової війни",
    "coef": 0,
    "desc": `Незважаючи на вік добре зберігся, але в процесі проживання 
      можуть виникнути проблеми з електро- чи водопостачанням.
      Всі необхідні для ремонту креслення присутні. Вхід до бункера 
      охороняється паролем, але з достатньою силою двері можна виламати, 
      краще подумати про захист від зовнішнього світу.
      Площа бункера - ${areaData[random(0, areaData.length)]}м2, 
      час перебування в бункері - ${stayData[random(0, stayData.length)]} місяців, 
      їжа і знезаражена вода присутні на весь час перебування.
      Бункер оснащений додатковими кімнатами: `
  },
  {
    "name": "Бункер, збудований в часи другої світової війни",
    "coef": 0,
    "desc": `Незважаючи на вік добре зберігся, але в процесі проживання 
      можуть виникнути проблеми з електро- чи водопостачанням.
      Всі необхідні для ремонту креслення присутні. Вхід до бункера 
      охороняється паролем, але з достатньою силою двері можна виламати, 
      краще подумати про захист від зовнішнього світу.
      Площа бункера - ${areaData[random(0, areaData.length)]}м2, 
      час перебування в бункері - ${stayData[random(0, stayData.length)]} місяців, 
      їжа і знезаражена вода присутні на весь час перебування.
      Бункер оснащений додатковими кімнатами: `
  },
  {
    "name": "Старий закинутий бункер",
    "coef": 0,
    "desc": `Стан бункера важко назвати аварійним, але ще складніше 
      його назвати повністю робочим, швидше за все система електро-чи 
      водопостачання функціонує з перебоями, якщо взагалі функціонує.
      Вхід в бункер охороняється лише кількома замками, двері виламати дуже легко. 
      Обов'язково потурбуйтесь про захист.
      Площа бункера - ${areaData[random(0, areaData.length)]}м2, 
      час перебування в бункері - ${stayData[random(0, stayData.length)]} місяців, 
      їжа і знезаражена вода присутні на весь час перебування.
      Бункер оснащений додатковими кімнатами: ` 
  }
];

module.exports = [bunkerData, stayData, areaData, facilitiesData, addItemsData];