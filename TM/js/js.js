function call(){""!==$("#main-email").val()?(msg=$("#main-form").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(e){},error:function(e,t){alert("Возникла ошибка: "+e.responseCode)}}),$("#main-form")[0].reset()):""!==$("#attention-email").val()?(msg=$("#attention-form").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(e){},error:function(e,t){alert("Возникла ошибка: "+e.responseCode)}}),$("#attention-form")[0].reset()):""!==$("#consultation-email").val()?(msg=$("#consultation-form").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(e){},error:function(e,t){alert("Возникла ошибка: "+e.responseCode)}}),$("#consultation-form")[0].reset()):""!==$("#popup-email").val()&&(msg=$("#popup-form").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(e){$(".popup").fadeOut()},error:function(e,t){alert("Возникла ошибка: "+e.responseCode)}}),$("#popup-form")[0].reset())}function initMap(){var e=new google.maps.StyledMapType([{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],{name:"Styled Map"}),t=new google.maps.Map(document.getElementById("map"),{center:{lat:55.86546872276006,lng:37.38023086837472},zoom:15,mapTypeControlOptions:{mapTypeIds:["roadmap","satellite","hybrid","terrain","styled_map"]}});new google.maps.Marker({position:{lat:55.86546872276006,lng:37.3912508683745},map:t});t.mapTypes.set("styled_map",e),t.setMapTypeId("styled_map")}(new WOW).init(),$(".main-header-contact-order, .catalog-slide-button").on("click",function(e){e.preventDefault(),$(".popup-form").fadeIn()}),$(".privacy-href").on("click",function(e){e.preventDefault(),$(".popup-privacy").fadeIn()}),$(".popup-form-close").on("click",function(e){e.preventDefault(),$(".popup-form").fadeOut()}),$(".privacy-popup-close").on("click",function(e){e.preventDefault(),$(".popup-privacy").fadeOut()}),$(function(){var e=[" Абакан (Республика Хакасия) "," Абаза (Республика Хакасия)  "," Абалак (Тюменская область)  "," Агидель (Республика Башкаркостан) "," Адлер (Краснодарский край)  "," Азов (Ростовская область) "," Акулова Гора (Ленинградская область)  "," Алакаевка (Самарская область) "," Алнаши (Республика Удмуртия)  "," Александров (Владимирская область)  "," Алексин (Тульская область)  "," Альметьевск (Республика Татарстан)  "," Ангарск (Иркутская область) "," Андрианово (Ленинградская область)  "," Анишино (Тульская область)  "," Антропово (Костромская область) "," Анжеро-Судженск (Кемеровская область) "," Анапа (Краснодарский край)  "," Арзамас (Нижегородская область) "," Арское (Ульяновская область)  "," Архипо-Осиповка (Краснодарский край)  "," Аршан (Республика Бурятия)  "," Армавир (Краснодарский край)  "," Аргун (Чеченская республика)  "," Архангельск (Архангельская область) "," Аскиз (Республика Хакасия)  "," Асбест (Свердловская область) "," Аткарск (Саратовская область) "," Астрахань (Астраханская область)  "," Ачинск (Красноярский край)  "," Ахтубинск (Астраханская область)  "," Ахуны (Пензенская область)  "," Аша (Челябинская область) "," Баксан (Кабардино-Балкария) "," Балабаново (Калужская область)  "," Балтийск (Калининградская область)  "," Батырево (Республика Чувашия) "," Багратионовск (Калининградская область) "," Балахна (Нижегородская область) "," Балезино (Республика Удмуртия)  "," Балаково (Саратовская область)  "," Барнаул (Алтайский край)  "," Батайск (Ростовская область)  "," Беслан (Республика Северная Осетия) "," Бежецк (Тверская область) "," Белый Бом (Республика Алтай)  "," Белев (Тульская область)  "," Белогорка (Ленинградская область) "," Белогорье (Воронежская область) "," Белозерск (Вологодская область) "," Беломорск (Республика Карелия)  "," Белорецк (Республика Башкортостан)  "," Белореченск (Краснодарский край)  "," Белые Берега (Брянская область) "," Березники (Пермский край) "," Берёзовский (Свердловская область)  "," Белгород (Белгородская область) "," Благовещенск (Амурская область) "," Биробиджан (Еврейская автономная область) "," Билимбай (Свердловская область) "," Билярск (Республика Татарстан)  "," Бобрик (Брянская область) "," Боголюбово (Владимирская область) "," Богородицк (Тульская область) "," Богородск (Нижегородская область) "," Богородское (Московская область)  "," Болгар (Республика Татарстан) "," Богданово-Витово (Костромская область)  "," Болдино (Владимирская область)  "," Бологое (Тверская область)  "," Болхов (Орловская область)  "," Большая Сундырь (Республика Чувашия)  "," Большое Болдино (Нижегородская область) "," Большое Заречье (Ленинградская область) "," Большое Козино (Нижегородская область)  "," Бор (Нижегородская область) "," Борисовское (Владимирская область)  "," Борисоглебск (Воронежская область)  "," Борисоглебский (Ярославская область)  "," Борнуково (Нижегородская область) "," Боровиково (Костромская область)  "," Боровичи (Новгородская область) "," Братково (Вологодская область)  "," Боровно (Новгородская область)  "," Боровск (Калужская область) "," Бородино (Московская область) "," Борок (Ярославская область) "," Бийск (Алтайский край)  "," Батурино (Томская область)  "," Братск (Иркутская область)  "," Бросно (Тверская область) "," Брыкин Бор (Рязанская область)  "," Брянск (Брянская область) "," Бугульма (Республика Татарстан) "," Буй (Костромская область) "," Буденновск (Ставропольский край)  "," Буинск (Республика Татарстан) "," Бузулук (Оренбургская область)  "," Вад (Нижегородская область) "," Василево (Переславский р-н)   "," Вахонино (Костромская область)  "," Валдай (Новгородская область) "," Валуйки (Белгородская область)  "," Варзуга (Мурманская область)  "," Варна (Челябинская область) "," Василево (Тверская область) "," Введеньё (Ивановская область) "," Великие Луки (Псковская область)  "," Великая Губа (Республика Карелия) "," Великий Устюг (Вологодская область) "," Великорецкое (Кировская область)  "," Вельск (Архангельская область)  "," Венёв (Тульская область)  "," Верх-Нейвинский (Свердловская область)  "," Верхнетуломский (Мурманская область)  "," Верхние Ачаки (Республика Чувашия)  "," Верхне-Никульское (Ярославская область) "," Верхняя Пышма (Свердловская область)  "," Верхняя Троица (Тверская область) "," Верхотурье (Свердловская область) "," Весьегонск (Тверская область) "," Великий Новгород (Новгородская область) "," Вёшенская (Ростовская область)  "," Видлица (Республика Карелия)  "," Виноградный (Краснодарский край)  "," Вилегодск (Архангельская область) "," Висим (Свердловская область)  "," Вичуга (Ивановская область) "," Владивосток (Приморский край) "," Владимир (Владимирская область) "," Владимировка (Вологодская область)  "," Владикавказ (Республика Северная Осетия)  "," Владимирское (Нижегородская область)  "," Волгоград (Волгоградская область) "," Вознесенье (Ленинградская область)  "," Володарск (Нижегородская область) "," Волженец (Псковская область)  "," Волжский (Самарская область)  "," Волконка (Краснодарский край) "," Волочаевка (Ленинградская область)  "," Волхов (Ленинградская область)  "," Воробьево (Калужская область) "," Воробьи (Калужская область) "," Ворсма (Нижегородская область)  "," Ворша (Владимирская область)  "," Волгодонск (Ростовская область) "," Волжск (Республика Марий Эл)  "," Волжский (Волгоградская область)  "," Вологда (Вологодская область) "," Воронеж (Воронежская область) "," Воткинск (Удмуртская Республика)  "," Врази-Ятчи (Республика Удмуртия)  "," Всеволожск (Ленинградская область)  "," Выгоничи (Брянская область) "," Выдропужск (Тверская область) "," Выкса (Нижегородская область) "," Выползово (Тверская область)  "," Вышестеблиевская (Краснодарский край) "," Выра (Ленинградская область)  "," Вытегра (Вологодская область) "," Выша (Рязанская область)  "," Вышний Волочек (Тверская Область) "," Выборг (Ленинградская область)  "," Вяз (Кировская область) "," Вязники (Владимирская область)  "," Вяртсиля (Республика Карелия) "," Вятские Поляны (Кировская область)  "," Вятское (Ярославская область) "," Вязьма (Смоленская область) "," Гаврилов Посад (Ивановская область) "," Гаврилов-Ям (Ярославская область) "," Гагино (Нижегородская область)  "," Галибиха (Нижегородская область)  "," Галич (Костромская область) "," Галкино (Воронежская область) "," Гагарин (Смоленская область)  "," Гагарино 1-е (Тамбовская область) "," Гатчина (Ленинградская область) "," Гвардейск (Калининградская область) "," Гдов (Псковская область)  "," Геленджик (Краснодарский край)  "," Георгиевск (Ставропольский край)  "," Гирвас (Республика Карелия) "," Глазов (Удмуртская Республика)  "," Глебово Городище (Рязанская область)  "," Голубино (Архангельская область)  "," Голубицкая (Краснодарский край) "," Горелое (Тамбовская область)  "," Городня (Тверская область)  "," Гороховец (Владимирская область)  "," Горнозаводск (Пермский край)  "," Городец (Нижегородская область) "," Городище (Волгоградская область)  "," Гороховец (Владимирская область)  "," Горный (Новосибирская область)  "," Городище (Пензенская область) "," Горналь (Курская область) "," Горно-Алтайск (Республика Алтай)  "," Горячий Ключ (Краснодарский край) "," Грибное (Ленинградская область) "," Грузино (Новгородская область)  "," Грумант (Тульская область)  "," Грязовец (Вологодская область)  "," Грозный (Чеченская республика)  "," Гуамка (Краснодарский край) "," Губкин (Белгородская область) "," Гуево (Курская область) "," Гузерипль (Республика Адыгея) "," Гурьевск (Кемеровская область)  "," Гусев (Калининградская область) "," Гусь-Железный (Рязанская область) "," Гусь Хрустальный (Владимирская область) "," Губкин (Белгородская область) "," Дагомыс (Краснодарский край)  "," Данилов (Ярославская область) "," Данков (Липецкая область) "," Дворики (Камешковский р-н)  "," Дебёсы (Республика Удмуртия)  "," Демидов (Смоленская область)  "," Детчино (Калужская область) "," Джанхот (Краснодарский край)  "," Дзержинск (Нижегородская область) "," Джубга (Краснодарский край) "," Дивеево (Нижегородская область) "," Дивногорье (Воронежская область)  "," Димитровград (Ульяновская область)  "," Дивово (Рязанская область)  "," Долинск (Сахалинская область) "," Дмитровск-Орловский (Орловская область) "," Добрянка (Пермский край)  "," Домбай (Республика Карачаево-Черкесия)  "," Домнино (Костромская область) "," Донской (Тульская область)  "," Дорогобуж (Смоленская область)  "," Дубна (Тульская область)  "," Дубовка (Волгоградская область) "," Дубровка (Псковская область)  "," Дунилово (Ивановская область) "," Дятьково (Брянская область) "," Евпатория (Республика Крым) "," Ейск (Краснодарский край) "," Екатеринбург (Свердловская область) "," Еланцы (Иркутская область)  "," Еланская (Ростовская область) "," Елохово (Ярославская область) "," Елшанка (Саратовская область) "," Елабуга (Республика татарстан)  "," Елань (Кемеровская область) "," Елец (Липецкая область) "," Енисейск (Красноярский край)  "," Епифань (Тульская область)  "," Ерахтур (Рязанская область) "," Емва (Республика Коми)  "," Емецк (Архангельская область) "," Ессентуки (Ставропольский край) "," Ефремов (Тульская область)  "," Железногорск (Красноярский край)  "," Железногорск (Курская область)  "," Железноводск (Ставропольский край)  "," Железногорск-Илимский (Иркутская область) "," Жешарт (Республика Коми)  "," Жигулевск (Самарская область) "," Жирновск (Волгоградская область)  "," Жуков (Калужская область) "," Заволжье (Нижегородская область)  "," Заинск (Республика Татарстан) "," Заринск (Алтайский край)  "," Заречный (Пензенская область) "," Зеленодольск (Республика Татарстан) "," Зеленогорск(Красноярский край)  "," Златоуст (Челябинская область)  "," Знаменка (Тамбовская область) "," Знаменка (Орловская область)  "," Иваново (Ивановская область)  "," Ижевск (Удмуртская Республика)  "," Илек (Оренбургская область) "," Ирбит (Свердловская область)  "," Иркутск (Иркутская область) "," Избербаш (Республика Дагестан)  "," Излучинск (Ханты-Мансийский округ)  "," Ишим (Тюменская область)  "," Йошкар-Орла(Республика Марий Эл)  "," Кабардинка(Краснодарский край)  "," Казань (Республика Татарстан) "," Калуга (Калужская область)  "," Калининград(Калининградская область)  "," Каменск-Шахтинский (Ростовская область) "," Камышин (Волгоградская область) "," Кемерово (Кемеровская область)  "," Керчь (Крымская республика) "," Кинешма (Ивановская область)  "," Кингисепп (Ленинградская область) "," Кириши (Ленинградская область)  "," Киров (Кировская область) "," Киселевск(Кемеровская область)  "," Кисловодск(Ставропольский край) "," Ковров (Владимирская область) "," Когалым (ХМАО)  "," Копейск (Челябинская область) "," Коряжма (Архангельская область) "," Кострома (Костромская область)  "," Котлас (Архангельская область)  "," Краснодар (Краснодарский край)  "," Краснокаменск (Забайкальский край)  "," Красноярск (Красноярский край)  "," Кропоткин (Краснодарский край)  "," Кстово (Нижегородская область)  "," Курган (Курганская область) "," Курск (Курская область) "," Курчатов (Курская область)  "," Кызыл (Республика Тыва) "," Лабинск (Краснодарский край)  "," Лазаревское(Краснодарский край) "," Лебедянь (Липецкая область) "," Лениногорск (Республика Татарстан)  "," Ленинск-Кузнецкий(Кемеровская область)  "," Ливны (Орловская область) "," Липецк (Липецкая область) "," Лиски (Воронежская область) "," Луга(Ленинградская область) "," Люберцы(Московская область) "," Лысьва (Пермская область) "," Магнитогорск (Челябинская область)  "," Малоярославец(Калужская область)  "," Майкоп (Республика Адыгея)  "," Махачкала (Республтка Дагестан) "," Мариинск(Кемеровская область) "," Малый Арал (Астраханская область) "," Миасс (Челябинская область) "," Минеральные Воды (Ставропольский край)  "," Михайловка (Волгоградская область)  "," Можга (Удмуртская республика) "," Мураши (Кировская область)  "," Мурманск (Мурманская область) "," Муром (Владимирская область)  "," Междуреченск(Кемеровская облисть) "," Мончегорск (Мурманская область) "," Набережные Челны (Республика Татарстан) "," Надым (ЯНАО)  "," Нальчик (Кабардино-Балкарская республика) "," Нефтекамск (Республика Башкортостан)  "," Нефтеюганск (Ханты-Мансийский авт. округ) "," Невинномысск (Ставропольский край)  "," Неёлово (Псковская область) "," Нея (Костромская область) "," Нижний Новгород (Нижегородская область) "," Нижневартовск (Ханты-Мансийский авт. округ) "," Нижний Архыз (Республика Карачаево-Черкесия)  "," Нижнекамск (республтка Татарстан) "," Нижний Тагил (Свердловская область) "," Новомосковск (Тульская область) "," Новороссийск (Краснодарский край) "," Новосибирск (Новосибирская область) "," Новый Уренгой (Ямало-Ненецкий авт. Округ) "," Новый Оскол (Белгородская область)  "," Новая Ладога (Ленинградская область)  "," Новокузнецк (Кемеровская область) "," Новокуйбышевск (Самарская область)  "," Новочеркасск (Ростовская область) "," Новочебоксарск (Чувашская республика) "," Новотроицк (Оренбургская область) "," Новошахтинск (Ростовская область )  "," Новинки (Нижегородская область) "," Ноябрьск (Ямало-Ненецкий авт. округ)  "," Нягань (Ханты-Мансийский авт. округ)  "," Омск (Омская область) "," Опеченский посад (Новгородская область) "," Орел (Орловская область)  "," Овсянка (Красноярский край) "," Оренбург (Оренбургская область) "," Орск (Оренбургская область) "," Обнинск (Калужская область) "," Оса (Пермский край) "," Осино-Гай (Тамбовская область)  "," Октябрьский (Республика Башкортостан) "," Озерск (Закрытый) "," Палех (Ивановская область)  "," Пенза (Пензенская область)  "," Первоуральск (Свердловская область) "," Пермь (Пермская область)  "," Петрозаводск (Республика Карелия) "," Переделкино (Московская область)  "," Переславль-Залесский (Ярославская область)  "," Петушки (Владимирская область)  "," Печора (Республика Коми)  "," Покров (Владимирская область) "," Приморск (Ленинградская область)  "," Прокопьевск (Кемеровская область) "," Прохладный (Респ. Кабардино-Балкарская) "," Псков (Псковская область) "," Пурпе (Ямало Ненецкий авт. округ) "," Пятигорск (Ставропольский край) "," Реж (Свердловская область)  "," Рождествено (Ленинградская область) "," Ржев (Тверская область) "," Рославль (Смоленская область) "," Россошь (Воронежская область) "," Ростов-на-Дону (Ростовская область) "," Ростов Великий (Ярославская область)  "," Рубцовск (Алтайский край) "," Руза (Московская область) "," Рыбинск (Ярославская область) "," Рязань (Рязанская область)  "," Савино (Республика татарстан) "," Сальск (Ростовская область) "," Салават (республика Башкортостан) "," Самара (Самарская область)  "," Санкт-Петербург "," Саранск (Республика Мордовия) "," Сарапул (Удмуртская Республика) "," Самосделка (Астраханская область) "," Саратов (Саратовская область) "," Севастополь (Республика Крым) "," Северодвинск (Архангельская область)  "," Серов (Свердловская область)  "," Сиферополь (Республика Крым)  "," Славянск-на-Кубани (Краснодарский край) "," Сланцы (Ленинградская область)  "," Смоленск (Смоленская область) "," Снежинск (Челябинская область)  "," Сосновый Бор (Ленинградская область)  "," Сокол (Вологодская область) "," Сочи (Краснодарский край) "," Ставрополь (Ставропольский край)  "," Старый Оскол (Белгородская область) "," Стерлитамак (Республика Башкортостан) "," Сургут (Ханты-Мансийский авт.округ) "," Суздаль (Владимирская область)  "," Сызрань (Самарская область) "," Сыктывкар (Республика Коми) "," Таганрог (Ростовская область) "," Тавда (Свердловская область)  "," Тамбов (Тамбовская область) "," Талдом (Московская область) "," Тверь (Тверская область)  "," Тимашевск (Краснодарский край)  "," Тихарецк (Краснодарский край) "," Тихвин (Ленинградская область)  "," Тобольск (Тюменская область)  "," Тольятти (Самарская область)  "," Томск (Томская область) "," Торжок (Тверская область) "," Троицк (Челябинская область)  "," Тула (Тульская область) "," Туапсе (Краснодарский край) "," Тюмень (Тюменская область)  "," Углич (Ярославская область) "," Улан-Удэ (Республика Бурятия) "," Урюпинск (Волгоградская область)  "," Ульяновск (Ульяновская область) "," Уренгой (Ямало-Ненецкий авт. округ) "," Усть-Кут (Иркутская область)  "," Уфа (Республика Башкортостан) "," Ухта (Республика Коми)  "," Феодосия (Республика Крым)  "," Ферапонтово (Вологодская область) "," Фоки (Пермский край)  "," Фролово (Волгоградская область) "," Фурманов (Ивановская область) "," Хабаровск (Хабаровский край)  "," Ханты-Мансийск (Ханты-Мансийский авт. округ)  "," Хворостьево (Тверская область)  "," Хмелита (Смоленская область)  "," Чагода (Вологодская область)  "," Чапаевск (Самарская область)  "," Чебоксары (Чувашская Республика)  "," Челябинск (Челябинская область) "," Череповец (Вологодская область) "," Черкесск (Карачаево-Черкесская Республика)  "," Чистополь (Республика Татарстан)  "," Чита (Читинская область)  "," Цаган Аман (Республика Калмыкия)  "," Цивильск (Республика Чувашия) "," Цимлянск (Ростовская область) "," Шахты (Ростовская область)  "," Шатки (Нижегородская область) "," Шлиссельбург (Ленинградская область)  "," Шаблово (Костромская область) "," Щелыково(Костромская область) "," Энгельс (Саратовская область) "," Эммаус (Тверская область) "," Эльтон (Волгоградская область)  "," Эльбрус (Кабардино-Балкарская республика) "," Элиста (Республика Калмыкия)  "," Юрга (Кемеровская область)  "," Юрьевец (Ивановская область)  "," Южноуральск (Челябинская область) "," Ядрин (Республика Чувашия)  "," Ялта (Республика Крым)  "," Ярославль (Ярославская область) "," Ярцево (Смоленская область) "," Ясная Поляна (Тульская область) "," Якутск (Республика Саха(Якутия))  "],t=[" 4250  "," 4100  "," 2400  "," 1300  "," 1640  "," 1139  "," 820 "," 1100  "," 1100  "," 162 "," 196 "," 1100  "," 5100  "," 650 "," 180 "," 500 "," 3700  "," 1488  "," 530 "," 850 "," 1500  "," 5400  "," 1396  "," 1900  "," 1243  "," 4300  "," 1980  "," 770 "," 1371  "," 3913  "," 1100  "," 660 "," 1500  "," 1600  "," 102 "," 1300  "," 800 "," 1300  "," 430 "," 1300  "," 966 "," 3581  "," 1107  "," 1800  "," 325 "," 5400  "," 310 "," 720 "," 670 "," 630 "," 1400  "," 1600  "," 1400  "," 380 "," 1700  "," 1900  "," 669 "," 1714  "," 8200  "," 1700  "," 1000  "," 440 "," 200 "," 250 "," 440 "," 110 "," 1000  "," 640 "," 150 "," 370 "," 360 "," 600 "," 620 "," 730 "," 420 "," 430 "," 200 "," 620 "," 230 "," 570 "," 350 "," 460 "," 550 "," 440 "," 110 "," 30  "," 340 "," 3715  "," 3800  "," 5043  "," 470 "," 320 "," 382 "," 1200  "," 440 "," 1483  "," 900 "," 1227  "," 500 "," 120 "," 520 "," 410 "," 760 "," 2100  "," 1900  "," 180 "," 320 "," 475 "," 1300  "," 930 "," 1100  "," 720 "," 170 "," 1800  "," 2000  "," 610 "," 350 "," 1850  "," 250 "," 1900  "," 450 "," 534 "," 900 "," 930 "," 440 "," 1100  "," 1900  "," 370 "," 9180  "," 179 "," 560 "," 1800  "," 540 "," 970 "," 900 "," 370 "," 730 "," 1010  "," 1600  "," 810 "," 720 "," 140 "," 110 "," 420 "," 160 "," 1140  "," 782 "," 989 "," 461 "," 527 "," 1279  "," 1100  "," 750 "," 430 "," 270 "," 360 "," 380 "," 1520  "," 710 "," 815 "," 390 "," 312 "," 870 "," 1100  "," 300 "," 1100  "," 1010  "," 310 "," 235 "," 230 "," 250 "," 560 "," 590 "," 450 "," 480 "," 180 "," 550 "," 700 "," 1210  "," 860 "," 1540  "," 1590  "," 1110  "," 1195  "," 200 "," 1300  "," 1500  "," 500 "," 270 "," 340 "," 1800  "," 490 "," 980 "," 341 "," 3400  "," 680 "," 630 "," 3814  "," 1400  "," 700 "," 600 "," 200 "," 415 "," 1735  "," 1470  "," 650 "," 630 "," 1501  "," 3620  "," 1130  "," 260 "," 247 "," 632 "," 1630  "," 335 "," 350 "," 100 "," 1400  "," 470 "," 150 "," 1500  "," 399 "," 1500  "," 460 "," 660 "," 946 "," 170 "," 9300  "," 470 "," 1505  "," 1680  "," 345 "," 235 "," 330 "," 220 "," 1030  "," 590 "," 330 "," 365 "," 1790  "," 1233  "," 1810  "," 5400  "," 930 "," 370 "," 890 "," 1029  "," 3700  "," 389 "," 4400  "," 250 "," 350 "," 1418  "," 1100  "," 1583  "," 323 "," 4206  "," 457 "," 1574  "," 5200  "," 1427  "," 960 "," 845 "," 123 "," 448 "," 1066  "," 3645  "," 650 "," 790 "," 4300  "," 1642  "," 530 "," 370 "," 294 "," 1199  "," 1426  "," 2010  "," 5206  "," 2100  "," 3500  "," 2353  "," 750 "," 1500  "," 822 "," 175 "," 1200  "," 949 "," 994 "," 3628  "," 1514  "," 400 "," 817 "," 648 "," 989 "," 3700  "," 1600  "," 265 "," 3119  "," 1793  "," 991 "," 345 "," 980 "," 1360  "," 6700  "," 4200  "," 1300  "," 442 "," 1971  "," 540 "," 590 "," 4612  "," 1436  "," 1600  "," 365 "," 1100  "," 3600  "," 441 "," 417 "," 625 "," 640 "," 10  "," 1644  "," 1841  "," 120 "," 1411  "," 1770  "," 3800  "," 1400  "," 1645  "," 1756  "," 790 "," 1112  "," 1032  "," 1904  "," 310 "," 3800  "," 1800  "," 1050  "," 4033  "," 1642  "," 1291  "," 2864  "," 1291  "," 730 "," 590 "," 450 "," 3127  "," 1600  "," 1095  "," 1809  "," 220 "," 1482  "," 3580  "," 3599  "," 690 "," 720 "," 3771  "," 1282  "," 1053  "," 678 "," 1702  "," 1033  "," 510 "," 3233  "," 2545  "," 2701  "," 570 "," 361 "," 4200  "," 1441  "," 1714  "," 101 "," 1500  "," 570 "," 1193  "," 1786  "," 420 "," 635 "," 1768  "," 1510  "," 997 "," 15  "," 130 "," 117 "," 1900  "," 105 "," 900 "," 3731  "," 1718  "," 731 "," 3388  "," 1567  "," 1800  "," 730 "," 234 "," 385 "," 738 "," 1090  "," 330 "," 3538  "," 94  "," 343 "," 187 "," 830 "," 1300  "," 1457  "," 1054  "," 711 "," 633 "," 1269  "," 1500  "," 832 "," 1810  "," 1311  "," 1980  "," 1720  "," 1400  "," 788 "," 390 "," 1836  "," 793 "," 520 "," 1697  "," 1421  "," 614 "," 1503  "," 2903  "," 216 "," 879 "," 1422  "," 1157  "," 2400  "," 467 "," 140 "," 176 "," 1304  "," 1810  "," 720 "," 2364  "," 983 "," 3638  "," 230 "," 1851  "," 181 "," 1521  "," 2132  "," 260 "," 5654  "," 700 "," 950 "," 3595  "," 5396  "," 1363  "," 1617  "," 1610  "," 600 "," 1400  "," 845 "," 340 "," 8357  "," 2695  "," 400 "," 250 "," 581 "," 1100  "," 664 "," 1763  "," 565 "," 1527  "," 990 "," 6319  "," 1200  "," 720 "," 1200  "," 1019  "," 570 "," 720 "," 710 "," 520 "," 847 "," 160 "," 1200  "," 1700  "," 1230  "," 3545  "," 490 "," 1798  "," 610 "," 1780  "," 266 "," 320 "," 200 "," 7938  "],l=$("#delivery-price"),r=$(".delivery-product");$("#city").autocomplete({source:e});$("#city").val();$(".delivery-form").submit(function(){event.preventDefault(),$.inArray($("#city").val(),e),finalPrice=+t[$.inArray($("#city").val(),e)]*r.val(),l.text(finalPrice+" р.")}),l.text(" ")}),$(".catalog ").on("click ",".catalog-nav-item ",function(){var e=$(".catalog-nav-item "),t=$(".catalog-content-item ");return e.removeClass("catalog-nav-item-active "),t.removeClass("catalog-content-item-active "),$(this).addClass("catalog-nav-item-active "),t.eq($(this).index()).addClass("catalog-content-item-active ").children().slick({infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,arrows:!0,prevArrow:'<div class="slider-prevArrow "></div>',nextArrow:'<div class="slider-nextArrow "></div>',responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1}}]}),!1}),$(".catalog-slider-active").slick({infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,arrows:!0,prevArrow:'<div class="slider-prevArrow "></div>',nextArrow:'<div class="slider-nextArrow "></div>',responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1}}]});var map;