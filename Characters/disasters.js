let random = (min = 0, max) => Math.floor(Math.random() * (max - min )) + min;

const disastersData = [
  {
    "name": "Вторгнення Диявола",
    "coef": 0,
    "desc": `Темні сили з потойбічного світу вирішили напасти на людство, були 
             знищені практично всі міста, але люди спромоглись знайти притулок в 
             спеціально обладнаних бункерах. Земля тепер непригодна для вирощення 
             культур, необхідна додаткова обробка. Залишок населення - ${random(1, 20)}%.`
  },
  {
    "name": "Колонізація Марсу",
    "coef": 0,
    "desc": `Планета починає відторгувати життя на Землі і всі помруть через 100 років, 
             і єдиний порятунок - колонізація Марсу, який вже піддається терраформації(${random(35, 100)}%). 
             Тільки найкращі відправляться і ніколи не повернуться. Необхідно 
             налагодити виробництво їжі і дати здорове потомство. Крім вас на Марс 
             відправлять ${Math.round(random(1, 20)/2)}% населення Землі.`
  },
  {
    "name": "Повстання машин",
    "coef": 0,
    "desc": `Штучний інтелект машин привів до того, що вони змогли відключити 
             інструкцію "Не вбивати людину", комп'ютери захопили владу над планетою, 
             але залишились бункери на аналогових пристроях. 
             Залишок населення - ${random(1, 20)}%, руйнації на поверхні - ${random(35, 100)}%.`
  },
  {
    "name": "Вірус \"H\"",
    "coef": 0,
    "desc": `Вірус вийшов з-під контролю і практично всі рослини на Землі перетворились в 
             агресивних монстрів, міста стали непригодними для життя, руйнації глобальні.
             Необхідно відбитись від монстрів і здобути їжу. Залишок населення - ${random(1, 20)}%`
  },
  {
    "name": "Повстання мавп",
    "coef": 0,
    "desc": `Мавпи були вдосконалені якимось вірусом і захопили владу над планетою. 
             Залишок населення - ${random(1, 20)}%(розкидані по бункерах і 
             прихованих поселеннях). Задачі - облаштувати нове поселення, підготувати 
             його для подальшого розвитку у велике місто, а також відбитись від 
             наступу мавп. руйнації на поверхні - ${random(35, 100)}%.`
  },
  {
    "name": "Супервулкани",
    "coef": 0,
    "desc": `Супервулкани - вулкани, які виробляють надзвичайно потужні і об'ємні 
             виверження. Подібні виверження призводять до того, що ландшафт і клімат 
             нашої планети докорінно зміняться. Після виходу з бункеру вас чекає 
             глобальна засуха. Залишок населення - ${random(1, 20)}%.`
  },
  {
    "name": "Падіння метеориту",
    "coef": 0,
    "desc": `Величезний метеорит влучив в Землю, що приводить до глобальних руйнацій і 
             зміни клімату. Після виходу з бункера на Землі вічна зима. 
            Залишок населення - ${random(1, 20)}%.`
  },
  {
    "name": "За мотивом серіалу \"Залишитись в живих\"",
    "coef": 0,
    "desc": `Міжнародний авіалайнер падає на підозрілому острові. Вижили тільки ви і 
             приблизно така сама кількість людей з хвоста літака, але вони знаходяться 
             на іншій частині острову. З часом ви знаходите бункер, в який обов'язково 
             повинні потрапити, щоб пережити підозрілу електромагнітну аномалію на 
             острові. Після виходу з бункеру може виникнути конфлікт з мешканцями 
             острову, які були тут до вас. Вибір залишатись на острові чи шукати 
             дорогу додому - ваш.`
  },
  {
    "name": "Всесвітній потоп",
    "coef": 0,
    "desc": `Через глобальне потепління розтають всі полярні і континентальні льодовики.
             Залишок суші на Землі - 15%, вода поглинає все навкруги. Після виходу з 
             бункеру відбулось порушення клімату, тепер всюди тропіки. Необхідно 
             пристосуватись до нових видів рослин і великих комах. 
             Залишок населення - люди в бункерах(${random(1, 20)}%).`
  },
  {
    "name": "Ядерна катострофа",
    "coef": 0,
    "desc": `Почнеться ядерна війна, радіоактивний пил покриє всю планету, закриваючи 
             сонячне світло, на Землі наступить довга ядерна зима. Після виходу з 
             бункеру будуть проблеми із землею і водою, необхідна додаткова хімічна 
             обробка. Залишок населення - ${random(1, 20)}%, руйнації на поверхні - ${random(35, 100)}%.`
  },
  {
    "name": "Зомбі вірус",
    "coef": 0,
    "desc": `Прогресуюче в просторі та часі поширення інфекційної хвороби серед людей, 
             здатне стати джерелом надзвичайної ситуації. Люди стали зомбі, 
             але після виходу з бункеру невелика частина зомбі ходить по світу, 
             який неминуче загине. Залишок здорового населення - ${random(1, 20)}%, 
             руйнації на поверхні - ${random(35, 100)}%.`
  },
  {
    "name": "Біотероризм",
    "coef": 0,
    "desc": `Смертельний вірус, створений як біологічна зброя, вийшов з-під контролю і 
             спровокував глобальну пандемію. Після виходу виявлена мутація практично
            всіх видів тварин, рослин і людей. 
            Залишок здорового населення - ${random(1, 20)}%, руйнації на поверхні - ${random(35, 100)}%.`
  },
  {
    "name": "Хімічна війна",
    "coef": 0,
    "desc": `В результаті використання хімікатів серйозно змінися екологічний баланс, 
             порушений мікробіологічний склад землі, рослини отруєні. Після виходу з 
             бункеру залишилась мала частина тварин і рослин, також заражена вода і земля. 
             Залишок здорового населення - ${random(1, 20)}%, руйнації на поверхні - ${random(35, 100)}%.`
  },
  {
    "name": "Вторгнення інопланетян",
    "coef": 0,
    "desc": `Раса інопланетян вирішила захопити планету, але ${random(1, 20)}% людства 
             дізнались про це заздалегідь, і змогли знайти бункери, про які ворог не 
             знає. Після виходу з бункера необхідно налагодити зв'язок з іншими 
             поселеннями, організувати спротив і запобігти терраформування Землі 
             інопланетянами (клімат і земля). поточна терраформація - ${random(35, 100)}%.`
  },
  {
    "name": "В минуле до динозаврів",
    "coef": 0,
    "desc": `Планета була повністю виснажена і єдиний шлях до виживання людства -
             повернення назад в часі. Задачі: організувати нову державу, протистояти 
             величезним ящіркам, роздобути провіант і гарантувати продовження роду. 
             Населення: люди, які повернуться в часі в штучні бункери ${random(1, 20)}%` 
  },
]

module.exports = disastersData;
