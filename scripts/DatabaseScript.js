/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

const advantagesDisadvantagesOptions = [
    { "value": "Empty", "text": "Пусто", "disabled": false, "selected": true },
    { "text": "Достоинства", "disabled": true, "selected": false },
    { "text": "\u00A0Физические", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Обострённые чувства (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Амибекстер (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Внушительный тип (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Кошачье равновесие (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Жаворонок (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Поглощение пищи (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Знакомое лицо (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Пышущий здоровьем (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Чарующий голос (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Сорвиголова (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Эффективное усвоение (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Огромный размер (-4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0Умственные", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Холодная логика (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Здравый смысл (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Концентрация (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Самоанализ (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Язык (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Чувство времени (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Полезные знания (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Кодекс чести (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Компьютерная одарённость (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Холодная логика (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Эйдетическая память (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Полиглот (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Холодное сердце (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Железная воля (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Развитый не по годам (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0Социальные", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Завсегдатай Элизиума (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Бывший гуль (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Безвредный (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Прирожденный лидер (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Прославленный сир (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Протеже (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Знаменитость (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Столкнувшийся с Шабашем (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Долг (-(1/6) pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Громила (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Старый друг (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Друг \"хранителя закона\" (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Свободная дорога (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Святость (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Знаток врагов (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Знаток других (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Друг подземелий (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Крот (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Восходящая звезда (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Порванные Узы (-4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Дружба клана (-4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Дружба с Примогенами\\Епископами (-4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0Сверхъестественные", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Дезориентирующая аура (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Исцеляющее касание (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Безобидность для животных (-1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Медиум (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Магическая сопротивляемость (-2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Сокрытое диаблери (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Удачливость (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Способности предсказателя (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Дух-наставник (-3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Истинная любовь (-4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Дополнительная дисциплина (-5 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Иммунитет к узам (-5 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Девять жизней (-6 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Истинная вера (-7 pt)", "disabled": false, "selected": false },
    { "text": "Недостатки", "disabled": true, "selected": false },
    { "text": "\u00A0Физические", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Тугоухость (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Коротышка (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Запах могилы (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Тик/Судороги (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Плохое зрение (+1 или +3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Четырнадцатое поколение (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Уродство (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Слабый укус (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Заразный укус (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Одноглазый (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Уязвимость к серебру (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Открытая рана (+2 или +4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Пристрастие (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Ребенок (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Дефект (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Светящиеся глаза (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Хромота (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Лентяй (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Чудовищная внешность (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Торчащие клыки (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Постоянная рана (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Медленное лечение (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Пятнадцатое поколение (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Разносчик болезней (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Глухота (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Немота (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Слабая кровь (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Мертвая плоть (+5 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Бесплодное витэ (+5 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Слепота (+6 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0Умственные", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Глубокий сон (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Нетерпеливый (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Кошмары (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Разборчивость в добыче (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Робость (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Мягкосердечие (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Нарушение речи (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Неуверенность (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Амнезия (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Лунатизм (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Фобия (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Вспыльчивость (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Стереотипность (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Территориальность (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Жажда невинности (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Мстительность (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Жертва Маскарада (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Слабовольный (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Полное потребление (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Комплекс вины (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Воспоминания (+6 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0Социальные", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Проваленное представление (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Тёмная тайна (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Бесполезный (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Недопонимание (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Бесславный сир (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Ошибочное опознание (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Вновь прибывший (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Новое дитя (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Цель вербовки (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Негодование сира (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Особая ответственность (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Симпатии (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Враг (+(1/5) pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Узы (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Орудие в чужих руках (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Улизнувшая цель (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Неудача (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Нарушитель Маскарада (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Старые времена (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Конкурирующий сир (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Нахальство (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Бесчестье крови (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Бывший князь (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Жертва преследования (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Стукач (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0В постели с врагом (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Преследование (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Враждебность клана (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Мерзкий регнант (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Перенапряжение (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0На испытательном сроке (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Кровавая охота (+4 или +6 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Посмешище (+5 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Красный список (+7 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0Сверхъестественные", "disabled": true, "selected": false },
    { "text": "\u00A0\u00A0Отсутствие отражения (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Холодный ветер (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Восприимчивость к чесноку (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Прикосновение холода (+1 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Проклятый (+(1/5) pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Маяк нечестивости (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Взгляд мертвеца (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Зловещее присутствие (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Повелитель мух (+2 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Невозмож. пере-кать тек. воду (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Преследование духом (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Восприимчивость к крестам (+3 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Хватка проклятого (+4 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Злой рок (+5 pt)", "disabled": false, "selected": false },
    { "text": "\u00A0\u00A0Чувствительность к свету (+5 pt)", "disabled": false, "selected": false }
];

const characterClansOptions = [
    { "text": " -- Выберите клан -- ", "disabled": true, "selected": true },
    { "text": "Камарилья", "disabled": true, "selected": false },
    { "value": "Brujah", "text": "\u00A0Бруха", "disabled": false, "selected": false },
    { "value": "Ventrue", "text": "\u00A0Вентру", "disabled": false, "selected": false },
    { "value": "Gangrel", "text": "\u00A0Гангрел", "disabled": false, "selected": false },
    { "value": "Gargoyles", "text": "\u00A0Горгульи", "disabled": false, "selected": false },
    { "value": "Caitiff", "text": "\u00A0Каитиффы", "disabled": false, "selected": false },
    { "value": "Malkavian", "text": "\u00A0Малкавианы", "disabled": false, "selected": false },
    { "value": "Nosferatu", "text": "\u00A0Носферату", "disabled": false, "selected": false },
    { "value": "Lasombra Antitribu", "text": "\u00A0Отступники Ласомбра", "disabled": false, "selected": false },
    { "value": "Tremere", "text": "\u00A0Тремер", "disabled": false, "selected": false },
    { "value": "Toreador", "text": "\u00A0Тореадор", "disabled": false, "selected": false },
    { "text": "Шабаш", "disabled": true, "selected": false },
    { "value": "Ahrimanes", "text": "\u00A0Аримейн", "disabled": false, "selected": false },
    { "value": "Serpents of the Light", "text": "\u00A0Змеи Света", "disabled": false, "selected": false },
    { "value": "Kiasyd", "text": "\u00A0Каэсиды", "disabled": false, "selected": false },
    { "value": "BloodBrothers", "text": "\u00A0Кровавые Братья", "disabled": false, "selected": false },
    { "value": "Lasombra", "text": "\u00A0Ласомбра", "disabled": false, "selected": false },
    { "value": "AssamiteAntitribu", "text": "\u00A0Отступники Ассамитов", "disabled": false, "selected": false },
    { "value": "BrujahAntitribu", "text": "\u00A0Отступники Бруха", "disabled": false, "selected": false },
    { "value": "VentrueAntitribu", "text": "\u00A0Отступники Вентру", "disabled": false, "selected": false },
    { "value": "GangrelAntitribu", "text": "\u00A0Отступники Гангрел", "disabled": false, "selected": false },
    { "value": "MalkavianAntitribu", "text": "\u00A0Отступники Малкавианы", "disabled": false, "selected": false },
    { "value": "NosferatuAntitribu", "text": "\u00A0Отступники Носферату", "disabled": false, "selected": false },
    { "value": "RavnosAntitribu", "text": "\u00A0Отступники Равнос", "disabled": false, "selected": false },
    { "value": "SalubriAntitribu", "text": "\u00A0Отступники Салюбри", "disabled": false, "selected": false },
    { "value": "ToreadorAntitribu", "text": "\u00A0Отступники Тореадор", "disabled": false, "selected": false },
    { "value": "TremereAntitribu", "text": "\u00A0Отступники Тремер", "disabled": false, "selected": false },
    { "value": "Panders", "text": "\u00A0Пандеры", "disabled": false, "selected": false },
    { "value": "HarbingersOfSkulls", "text": "\u00A0Предвестники Черепов", "disabled": false, "selected": false },
    { "value": "Tzimisce", "text": "\u00A0Цимисхи", "disabled": false, "selected": false },
    { "text": "Независимые", "disabled": true, "selected": false },
    { "value": "Assamite", "text": "\u00A0Ассамиты", "disabled": false, "selected": false },
    { "text": "\u00A0Касты Ассамитов", "disabled": true, "selected": false },
    { "value": "Viziers", "text": "\u00A0\u00A0Визири", "disabled": false, "selected": false },
    { "value": "Warriors", "text": "\u00A0\u00A0Воины", "disabled": false, "selected": false },
    { "value": "Sorcerers", "text": "\u00A0\u00A0Чародеи", "disabled": false, "selected": false },
    { "value": "Baali", "text": "\u00A0Баали", "disabled": false, "selected": false },
    { "value": "ChildrenOfOsiris", "text": "\u00A0Дети Осириса", "disabled": false, "selected": false },
    { "value": "Giovanni", "text": "\u00A0Джованни", "disabled": false, "selected": false },
    { "value": "DaughtersOfCacophony", "text": "\u00A0Дочери Какофонии", "disabled": false, "selected": false },
    { "value": "TrueBrujah", "text": "\u00A0Истинные Бруха", "disabled": false, "selected": false },
    { "value": "Cappadocian", "text": "\u00A0Каппадокийцы", "disabled": false, "selected": false },
    { "value": "Nagaraja", "text": "\u00A0Нагараджа", "disabled": false, "selected": false },
    { "value": "FollowersOfSet", "text": "\u00A0Последователи Сета", "disabled": false, "selected": false },
    { "value": "Ravnos", "text": "\u00A0Равнос", "disabled": false, "selected": false },
    { "value": "Salubri", "text": "\u00A0Салюбри", "disabled": false, "selected": false },
    { "value": "Samedi", "text": "\u00A0Самеди", "disabled": false, "selected": false },
    { "value": "OldClanTzimisce", "text": "\u00A0Старый клан Цимисхи", "disabled": false, "selected": false }
];

const additionsOptions = [
    { "value": "Empty", "text": "Пусто", "disabled": false, "selected": true },
    { "value": "Allies", "text": "Союзники", "disabled": false, "selected": false },
    { "value": "Communication", "text": "Связи", "disabled": false, "selected": false },
    { "value": "Glory", "text": "Слава", "disabled": false, "selected": false },
    { "value": "Generation", "text": "Поколение", "disabled": false, "selected": false },
    { "value": "Cattle", "text": "Стадо", "disabled": false, "selected": false },
    { "value": "Influence", "text": "Влияние", "disabled": false, "selected": false },
    { "value": "Mentor", "text": "Ментор", "disabled": false, "selected": false },
    { "value": "Resources", "text": "Ресурсы", "disabled": false, "selected": false },
    { "value": "Servants", "text": "Слуги", "disabled": false, "selected": false },
    { "value": "Standing", "text": "Статус", "disabled": false, "selected": false }
];

const disciplinesOptions = [
    { "value": "Empty", "text": "Пусто", "disabled": false, "selected": true },
    { "value": "Animalism", "text": "Анимализм", "disabled": false, "selected": false },
    { "value": "Bardo", "text": "Бардо", "disabled": false, "selected": false },
    { "value": "Valeren", "text": "Валерен", "disabled": false, "selected": false },
    { "value": "Visceratika", "text": "Висцератика", "disabled": false, "selected": false },
    { "value": "Obtenebration", "text": "Власть над Тенью", "disabled": false, "selected": false },
    { "value": "Daimoinon", "text": "Демонизм", "disabled": false, "selected": false },
    { "value": "Dominate", "text": "Доминирование", "disabled": false, "selected": false },
    { "value": "Obfuscate", "text": "Затемнение", "disabled": false, "selected": false },
    { "value": "Vicissitude", "text": "Изменчивость", "disabled": false, "selected": false },
    { "value": "Kineticism", "text": "Кинетицизм", "disabled": false, "selected": false },
    { "value": "Koldunic Sorcery", "text": "Колдовство", "disabled": true, "selected": false },
    { "value": "Way of Wind", "text": "\u00A0Путь Ветра", "disabled": false, "selected": false },
    { "value": "Way of Water", "text": "\u00A0Путь Воды", "disabled": false, "selected": false },
    { "value": "Way of the Spirit", "text": "\u00A0Путь Духа", "disabled": false, "selected": false },
    { "value": "Way of the Earth", "text": "\u00A0Путь Земли", "disabled": false, "selected": false },
    { "value": "Way of Fire", "text": "\u00A0Путь Огня", "disabled": false, "selected": false },
    { "value": "Way of Sorrow", "text": "\u00A0Путь Скорби", "disabled": false, "selected": false },
    { "value": "Melpominee", "text": "Мельпомения", "disabled": false, "selected": false },
    { "value": "Mytherceria", "text": "Мистерия", "disabled": false, "selected": false },
    { "value": "Potence", "text": "Могущество", "disabled": false, "selected": false },
    { "value": "Necromancy", "text": "Некромантия", "disabled": true, "selected": false },
    { "value": "The Cenotaph Path", "text": "\u00A0Путь Кенотафа", "disabled": false, "selected": false },
    { "value": "The Bone Path", "text": "\u00A0Путь Кости", "disabled": false, "selected": false },
    { "value": "The Mortuus Path", "text": "\u00A0Путь Мортууса", "disabled": false, "selected": false },
    { "value": "The Ash Path", "text": "\u00A0Путь Праха", "disabled": false, "selected": false },
    { "value": "The Sepulchre Path", "text": "\u00A0Путь Склепа", "disabled": false, "selected": false },
    { "value": "Vitreous Path", "text": "\u00A0Стекловидный Путь", "disabled": false, "selected": false },
    { "value": "Nihilistics", "text": "Нигилизм", "disabled": false, "selected": false },
    { "value": "Obeah", "text": "Обеах", "disabled": false, "selected": false },
    { "value": "Gargoyle Flight", "text": "Полёт Горгулий", "disabled": false, "selected": false },
    { "value": "Dementation", "text": "Помешательство", "disabled": false, "selected": false },
    { "value": "Protean", "text": "Превращение", "disabled": false, "selected": false },
    { "value": "Presence", "text": "Присутствие", "disabled": false, "selected": false },
    { "value": "Auspex", "text": "Прорицание", "disabled": false, "selected": false },
    { "value": "Sanguinus", "text": "Сангвинус", "disabled": false, "selected": false },
    { "value": "Serpentis", "text": "Серпентис", "disabled": false, "selected": false },
    { "value": "Quietus", "text": "Смертоносность", "disabled": false, "selected": false },
    { "value": "Mortis", "text": "Смерть", "disabled": false, "selected": false },
    { "value": "Fortitude", "text": "Стойкость", "disabled": false, "selected": false },
    { "value": "Celerity", "text": "Стремительность", "disabled": false, "selected": false },
    { "value": "Thanatosis", "text": "Танатозис", "disabled": false, "selected": false },
    { "value": "Thaumaturgical Countermagic", "text": "Тауматургическая Контрмагия", "disabled": false, "selected": false },
    { "value": "Thaumaturgy", "text": "Тауматургия", "disabled": true, "selected": false },
    { "value": "Alchemy", "text": "\u00A0Алхимия", "disabled": false, "selected": false },
    { "value": "Biothaumaturgy", "text": "\u00A0Биотауматургия", "disabled": false, "selected": false },
    { "value": "The Movement of the Mind", "text": "\u00A0Движение Разума", "disabled": false, "selected": false },
    { "value": "The Green Path", "text": "\u00A0Зеленый Путь", "disabled": false, "selected": false },
    { "value": "Oneiromancy", "text": "\u00A0Онейромантия", "disabled": false, "selected": false },
    { "value": "The Lure of Flames", "text": "\u00A0Привлечение Огней", "disabled": false, "selected": false },
    { "value": "The Path of the Father's Vengeance", "text": "\u00A0Путь Возмездия Отца", "disabled": false, "selected": false },
    { "value": "Path of the Levinbolt", "text": "\u00A0Путь Громовержца", "disabled": false, "selected": false },
    { "value": "The Hearth Path", "text": "\u00A0Путь Домашнего Очага", "disabled": false, "selected": false },
    { "value": "The Path of Corruption", "text": "\u00A0Путь Искажения", "disabled": false, "selected": false },
    { "value": "The Path of Blood", "text": "\u00A0Путь Крови", "disabled": false, "selected": false },
    { "value": "The Path of Mars", "text": "\u00A0Путь Марса", "disabled": false, "selected": false },
    { "value": "Path of Neptune's Might", "text": "\u00A0Путь Мощи Нептуна", "disabled": false, "selected": false },
    { "value": "The Path of Shadowcrafting", "text": "\u00A0Путь Создания Теней", "disabled": false, "selected": false },
    { "value": "The Path of Conjuring", "text": "\u00A0Путь Сотворения", "disabled": false, "selected": false },
    { "value": "The Path of Technomancy", "text": "\u00A0Путь Техномантии", "disabled": false, "selected": false },
    { "value": "Path of Spirit Manipulation", "text": "\u00A0Путь Управления Духом", "disabled": false, "selected": false },
    { "value": "Path of Weather Control", "text": "\u00A0Путь Управления Погодой", "disabled": false, "selected": false },
    { "value": "Path of Elemental Mastery", "text": "\u00A0Путь Управления Стихиями", "disabled": false, "selected": false },
    { "value": "Hands of Destruction", "text": "\u00A0Руки Разрушения", "disabled": false, "selected": false },
    { "value": "The Focused Mind", "text": "\u00A0Сосредоточенный Разум", "disabled": false, "selected": false },
    { "value": "Mastery of the Mortal Shell", "text": "\u00A0Управление Смертной Оболочкой", "disabled": false, "selected": false },
    { "value": "Medieval Thaumaturgy", "text": "\u00A0Средневековая Тауматургия", "disabled": false, "selected": false },
    { "value": "Dark Thaumaturgy", "text": "Темная Тауматургия", "disabled": true, "selected": false },
    { "value": "(Dark) Hands of Destruction", "text": "\u00A0Длани Разрушения", "disabled": false, "selected": false },
    { "value": "The Taking of the Spirit", "text": "\u00A0Лишение Духа", "disabled": false, "selected": false },
    { "value": "The Fires of the Inferno", "text": "\u00A0Огни Преисподней", "disabled": false, "selected": false },
    { "value": "Chains of Pleasure", "text": "\u00A0Оковы Наслаждения", "disabled": false, "selected": false },
    { "value": "Path of Pain", "text": "\u00A0Путь Боли", "disabled": false, "selected": false },
    { "value": "Path of Pleasure", "text": "\u00A0Путь Наслаждений", "disabled": false, "selected": false },
    { "value": "Path of the Unspoken", "text": "\u00A0Путь Несказанного", "disabled": false, "selected": false },
    { "value": "Path of Torture", "text": "\u00A0Путь Мучений", "disabled": false, "selected": false },
    { "value": "Path of the Defiler", "text": "\u00A0Путь Осквернителя", "disabled": false, "selected": false },
    { "value": "Path of Secret Knowledge", "text": "\u00A0Путь Тайного Знания", "disabled": false, "selected": false },
    { "value": "The Path of Phobos", "text": "\u00A0Путь Фобоса", "disabled": false, "selected": false },
    { "value": "Path of Pestilence", "text": "\u00A0Путь Эпидемий", "disabled": false, "selected": false },
    { "value": "Temporis", "text": "Темпорис", "disabled": false, "selected": false },
    { "value": "Chimerstry", "text": "Химерия", "disabled": false, "selected": false },
    { "value": "Assamite Sorcery", "text": "Чародейство Ассамитов", "disabled": true, "selected": false },
    { "value": "The Hunter's Winds", "text": "\u00A0Охотничьи Ветра", "disabled": false, "selected": false },
    { "value": "Awakening of the Steel", "text": "\u00A0Пробуждение Стали", "disabled": false, "selected": false },
    { "value": "Whispers of the Heavens", "text": "\u00A0Шепоты Небес", "disabled": false, "selected": false },
    { "value": "Setite Sorcery", "text": "Чародейство Сеттитов", "disabled": true, "selected": false },
    { "value": "Divine Hand", "text": "\u00A0Длань Божья", "disabled": false, "selected": false },
    { "value": "The Immanence of Set", "text": "\u00A0Единство с Сетом", "disabled": false, "selected": false },
    { "value": "Snake Inside", "text": "\u00A0Змей-искуситель", "disabled": false, "selected": false },
    { "value": "Path of the Dry Nile", "text": "\u00A0Путь Высохшего Нила", "disabled": false, "selected": false },
    { "value": "Path of Duat", "text": "\u00A0Путь Дуата", "disabled": false, "selected": false },
    { "value": "Ushabti", "text": "\u00A0Ушебти", "disabled": false, "selected": false },
    { "value": "Spiritus", "text": "Шаманство", "disabled": false, "selected": false }
];

const tooltipsDescriptionDictionary = {
    ru: {
        nature: "«Истинная» личность вашего персонажа – кем он является глубоко внутри"
    }
}