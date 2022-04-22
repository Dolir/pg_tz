import mock from "../mock"
const data = [
  {
    title: "В Chernobylite стартовал новый сезон и появилось Enhanced Edition",
    text: "The Farm 51 и All iN! Games объявили о выходе хоррор-выживалки Chernobylite на PlayStation 5 и Xbox Series. Владельцы игры на PlayStation 4 и Xbox One могут перейти на версию для следующего поколения с помощью бесплатного обновления. Увы, в случае PS4 и PS5 в России это невозможно.",
    created_at: Date.now() - 1000000000
  },
  {
    title: "Авторы «Ведьмака» Netflix уже распланировали 4 сезон сериала",
    text: `В сети обратили внимание на проблемы с серверами, которые возникли у игр Ubisoft на старых консолях и даже PC — как оказалось, компания, не особо распространяясь, прекратила их поддержку. 
    Пользователи отметили, что у них не получается зарабатывать достижения на Xbox 360, причём по большей части вопрос коснулся серии Assassin’s Creed, затронув: 
    Assassin’s Creed II;
    Assassin’s Creed III;
    Assassin's Creed: Brotherhood;
    Assassin's Creed: Revelations. 
    При этом проблемы возникли и у Assassin’s Creed IV: Black Flag на той же Xbox 360, хотя её не было в тематическом списке Ubisoft, который та обновила несколько дней назад. 
    Кроме того, сервера больше не работают у следующих проектов студии на Xbox 360, а также PS3 и PC:
    Beyond Good and Evil;
    Blazing Angels 2;
    Far Cry 3;
    Rabbids: Alive and Kicking;
    Smurfs 2. `,
    created_at: Date.now() - 200000000
  },
  {
    title:
      "Корабль тонет — Ubisoft отключила сервера отдельных игр на старых консолях",
    text: `В сети обратили внимание на проблемы с серверами, которые возникли у игр Ubisoft на старых консолях и даже PC — как оказалось, компания, не особо распространяясь, прекратила их поддержку. 
    Пользователи отметили, что у них не получается зарабатывать достижения на Xbox 360, причём по большей части вопрос коснулся серии Assassin’s Creed, затронув: 
    Assassin’s Creed II;
    Assassin’s Creed III;
    Assassin's Creed: Brotherhood;
    Assassin's Creed: Revelations. 
    При этом проблемы возникли и у Assassin’s Creed IV: Black Flag на той же Xbox 360, хотя её не было в тематическом списке Ubisoft, который та обновила несколько дней назад. 
    Кроме того, сервера больше не работают у следующих проектов студии на Xbox 360, а также PS3 и PC:
    Beyond Good and Evil;
    Blazing Angels 2;
    Far Cry 3;
    Rabbids: Alive and Kicking;
    Smurfs 2. `,
    created_at: Date.now() - 100000000 * 3
  },
  {
    title: "Герой шутера Destructure: Among Debris — Круглая Хрень Разрушения",
    text: `Студия Team Instant Defeat и издательство RockGame представили новый проект, постапокалиптический арканоид Destructure: Among Debris с элементами bullet hell шутера и аэрохоккея.
    После некоего разрушительного события весь мир лежит в руинах. И, чтобы была возможность воздвигнуть что-то новое, мы должны избавиться от всего хлама. А поможет нам в этом особое устройство под названием Круглая Хрень Разрушения.`,
    created_at: Date.now() - 100000000 * 4
  },
  {
    title:
      "Продажи Dying Light 2 превысили 5 миллионов копий за три недели после релиза",
    text: "Продажи постапокалиптического экшена Dying Light 2 достигли отметки в пять миллионов копий 28 февраля, то есть спустя три недели после релиза. Серия же преодолела отметку в 25 миллионов копий. По словам разработчиков, это стало важной вехой в истории серии.",
    created_at: Date.now() - 100000000 * 5
  },
  {
    title: "В рогалик Rogue Spirit добавили ещё двух играбельных персонажей",
    text: "Польская студия Kids With Sticks и издательство 505 Games продолжают развитие «духовного» рогалика Rogue Spirit. И теперь в рамках раннего доступа к нему выпустили обновление v0.9 — одно из крупнейших и последнее масштабное перед выходом релизной версии.",
    created_at: Date.now() - 100000000 * 10
  },
  {
    title:
      "Годзилла, Конг и другие детали третьего сезона Call of Duty: Warzone и Vanguard",
    text: `Вчера стало известно, что 11 мая в Call of Duty: Warzone заглянут Годзилла и Кинг-Конг, а позже разработчики поделились дополнительными подробностями третьего сезона.
    Причём речь идёт и о Vanguard, которую тоже ждут различные нововведения — они будут появляться с 27 апреля, когда и стартует сезон. `,
    created_at: Date.now() - 100000000 * 11
  }
]

mock.onGet("/news").reply((request) => {
  const searchValue = request.searchValue

  const regexEscape = (str) => {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
  }

  const searchRegex = new RegExp(regexEscape(searchValue.toLowerCase() || ""))

  const result = data?.filter((option) =>
    searchRegex.test(option.title.toLowerCase())
  )
  return [200, result]
})
