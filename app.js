/* 祖影 Echo marketing site — i18n (6 languages, matching the app) +
   interactive mini family-tree simulator, ported faithfully from the
   app's tree canvas (chip-card nodes, 连理结 hearts, bloodline dashes,
   trading-card dialog, add-relative sheet, kinship engine). */
'use strict';

/* ============================== i18n ============================== */

const I18N = {
  zh: {
    docTitle: '祖影 Echo — 把家族的故事留下来',
    brand: '祖影 Echo', brandShort: '祖影',
    navFeatures: '功能', navDemo: '试一试', navDownload: '下载', navContact: '联系',
    heroTitle: '把家族的故事，留给下一代',
    heroSub: '祖影 Echo 是一款家族树 App：为每一位亲人建一张卡片，留下照片、声音与故事；血脉在指尖流动，称谓自动算好，回声代代相传。',
    badgeSoon: '即将上架',
    heroNote: '第一版将率先登陆 iPhone。想第一时间收到上架通知，欢迎来信。',
    heroCta: '先在线试一试',
    shotsTitle: '真实界面抢先看',
    shotsSub: '以下截图来自正在开发中的 iPhone 版本。',
    shotCapTree: '家族树画布', shotCapCard: '人物卡',
    shotCapGallery: '个人主页：故事与回声',
    shotCapWide: '全家总览：五代同堂',
    shotCapMap: '地图上的家族 —— 每个人的出生地，一眼看见家族的版图',
    shotCapRoute: '家族版图 —— 沿着直系一脉，看这个家走了多远',
    shotCapStyles: '初次见面，先选风格',
    legendCouple: '连理结 = 夫妻', legendBlood: '流动虚线 = 血脉',
    legendDeceased: '变淡 = 已故亲人',
    privacyLink: '隐私政策',
    featTitle: '一棵树，装下一个家族',
    featSub: '从你自己开始，一人一卡，几分钟就能种下一棵家族树。',
    feat1T: '会呼吸的家族树',
    feat1B: '缩放漫游整棵树：血脉沿着线路流动，夫妻之间系着连理红心，逝去的亲人温柔地淡去。',
    feat2T: '称谓自动算',
    feat2B: '姑妈、表哥、外甥女……点开任何人，App 立刻告诉你该怎么称呼，支持中西方六种语言的称谓体系。',
    feat3T: '留住声音与影像',
    feat3B: '每张卡片背后是一座小小的纪念馆：照片、录音、视频、文字故事，把亲人的音容留给后代。',
    feat4T: '回声',
    feat4B: '和爷爷同属虎、和外婆同一个星座——App 自动发现跨越世代的巧合，这就是家族的「回声」。',
    feat5T: '数据在你手中',
    feat5B: '本地优先：不需要注册账号，家族数据保存在你自己的手机里，不上传、不追踪。',
    feat6T: '四种风格，六种语言',
    feat6B: '晨白、夜潮、暖橘、雅纸四套主题随心换；界面支持简体、繁體、English、Español、Français、हिन्दी。',
    feat7T: '家族版图',
    feat7B: '把亲人的出生地标在地图上，沿着直系一脉看过去——从祖辈的村庄到你现在的城市，几代人的脚步，连成这一条路。',
    feat8T: '史册里的家族',
    feat8B: '内置七棵真实的家族树：孔子七十九代、朱元璋二十六个儿子、伊丽莎白二世、肯尼迪、达尔文、梁启超，还有炎黄二帝。打开就知道一棵长成的树是什么样子。',
    feat9T: '搬得进来，也带得走',
    feat9B: 'GEDCOM 双向互通，和你已经在用的家谱软件对得上；一份 .zuying 文件就是整棵树，隔空投送给家人，他打开就是完整的一棵。',
    demoTitle: '在这里先试一试',
    demoSub: '这是真实界面的迷你版：拖动、缩放画布，点人看卡片和称谓；点「展开」逛逛 TA 的个人主页；右上角换风格。',
    demoHint: '👆 点一点树上的人 · 可拖动、缩放',
    demoNote: '这里只是浅浅一瞥——想亲手添加家人、写故事、录声音？都在 App 里。',
    addRelative: '添加亲人', expandChip: '展开', refocusChip: '以TA为中心', deleteChip: '删除',
    tryInApp: '想亲手添加？这些要在 App 里完成——即将上架，敬请期待。',
    gStories: '故事', gTellOne: '讲一个', gAlbum: '相册', gPhotos: '照片',
    gAudio: '录音', gVideo: '视频', gEchoes: '回声', gAddMedia: '添加',
    gStoryTitle: '天井里的夏夜',
    gStoryBody: '外婆摇着蒲扇讲古，说曾祖父当年挑着担子下南洋。',
    gCapFam: '1998 年全家福', gCapYard: '祖屋的天井',
    echoZodiac: '和你一样属{z}', meBadge: '我',
    zodiac: ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'],
    dlTitle: '即将与你见面',
    dlSub: '祖影 Echo 正在为 App Store 上架做最后准备，Android 版随后跟上。',
    ctTitle: '联系我们',
    ctSub: '想法、建议、想第一时间试用？写封邮件给我们。',
    ctNote: '我们会认真读每一封来信。',
    footer: '© 2026 祖影 Echo · 把家族的故事留下来',
    styles: { soft: '晨白', glass: '夜潮', candy: '暖橘', paper: '雅纸' },
  },

  zh_Hant: {
    docTitle: '祖影 Echo — 把家族的故事留下來',
    brand: '祖影 Echo', brandShort: '祖影',
    navFeatures: '功能', navDemo: '試一試', navDownload: '下載', navContact: '聯絡',
    heroTitle: '把家族的故事，留給下一代',
    heroSub: '祖影 Echo 是一款家族樹 App：為每一位親人建一張卡片，留下照片、聲音與故事；血脈在指尖流動，稱謂自動算好，回聲代代相傳。',
    badgeSoon: '即將上架',
    heroNote: '第一版將率先登陸 iPhone。想第一時間收到上架通知，歡迎來信。',
    heroCta: '先線上試一試',
    shotsTitle: '真實介面搶先看',
    shotsSub: '以下截圖來自正在開發中的 iPhone 版本。',
    shotCapTree: '家族樹畫布', shotCapCard: '人物卡',
    shotCapGallery: '個人主頁：故事與回聲',
    shotCapWide: '全家總覽：五代同堂',
    shotCapMap: '地圖上的家族 —— 每個人的出生地，一眼看見家族的版圖',
    shotCapRoute: '家族版圖 —— 沿著直系一脈，看這個家走了多遠',
    shotCapStyles: '初次見面，先選風格',
    legendCouple: '連理結 = 夫妻', legendBlood: '流動虛線 = 血脈',
    legendDeceased: '變淡 = 已故親人',
    privacyLink: '隱私政策',
    featTitle: '一棵樹，裝下一個家族',
    featSub: '從你自己開始，一人一卡，幾分鐘就能種下一棵家族樹。',
    feat1T: '會呼吸的家族樹',
    feat1B: '縮放漫遊整棵樹：血脈沿著線路流動，夫妻之間繫著連理紅心，逝去的親人溫柔地淡去。',
    feat2T: '稱謂自動算',
    feat2B: '姑媽、表哥、外甥女……點開任何人，App 立刻告訴你該怎麼稱呼，支援中西方六種語言的稱謂體系。',
    feat3T: '留住聲音與影像',
    feat3B: '每張卡片背後是一座小小的紀念館：照片、錄音、影片、文字故事，把親人的音容留給後代。',
    feat4T: '回聲',
    feat4B: '和爺爺同屬虎、和外婆同一個星座——App 自動發現跨越世代的巧合，這就是家族的「回聲」。',
    feat5T: '資料在你手中',
    feat5B: '本地優先：不需要註冊帳號，家族資料保存在你自己的手機裡，不上傳、不追蹤。',
    feat6T: '四種風格，六種語言',
    feat6B: '晨白、夜潮、暖橘、雅紙四套主題隨心換；介面支援簡體、繁體、English、Español、Français、हिन्दी。',
    feat7T: '家族版圖',
    feat7B: '把親人的出生地標在地圖上，沿著直系一脈看過去——從祖輩的村莊到你現在的城市，幾代人的腳步，連成這一條路。',
    feat8T: '史冊裡的家族',
    feat8B: '內建七棵真實的家族樹：孔子七十九代、朱元璋二十六個兒子、伊莉莎白二世、甘迺迪、達爾文、梁啟超，還有炎黃二帝。打開就知道一棵長成的樹是什麼樣子。',
    feat9T: '搬得進來，也帶得走',
    feat9B: 'GEDCOM 雙向互通，和你已經在用的家譜軟體對得上；一份 .zuying 檔案就是整棵樹，用 AirDrop 傳給家人，他打開就是完整的一棵。',
    demoTitle: '在這裡先試一試',
    demoSub: '這是真實介面的迷你版：拖動、縮放畫布，點人看卡片和稱謂；點「展開」逛逛 TA 的個人主頁；右上角換風格。',
    demoHint: '👆 點一點樹上的人 · 可拖動、縮放',
    demoNote: '這裡只是淺淺一瞥——想親手添加家人、寫故事、錄聲音？都在 App 裡。',
    addRelative: '添加親人', expandChip: '展開', refocusChip: '以TA為中心', deleteChip: '刪除',
    tryInApp: '想親手添加？這些要在 App 裡完成——即將上架，敬請期待。',
    gStories: '故事', gTellOne: '講一個', gAlbum: '相簿', gPhotos: '照片',
    gAudio: '錄音', gVideo: '影片', gEchoes: '回聲', gAddMedia: '新增',
    gStoryTitle: '天井裡的夏夜',
    gStoryBody: '外婆搖著蒲扇講古，說曾祖父當年挑著擔子下南洋。',
    gCapFam: '1998 年全家福', gCapYard: '祖屋的天井',
    echoZodiac: '和你一樣屬{z}', meBadge: '我',
    zodiac: ['鼠','牛','虎','兔','龍','蛇','馬','羊','猴','雞','狗','豬'],
    dlTitle: '即將與你見面',
    dlSub: '祖影 Echo 正在為 App Store 上架做最後準備，Android 版隨後跟上。',
    ctTitle: '聯絡我們',
    ctSub: '想法、建議、想第一時間試用？寫封郵件給我們。',
    ctNote: '我們會認真讀每一封來信。',
    footer: '© 2026 祖影 Echo · 把家族的故事留下來',
    styles: { soft: '晨白', glass: '夜潮', candy: '暖橘', paper: '雅紙' },
  },

  en: {
    docTitle: 'Echo 祖影 — Keep your family’s story',
    brand: 'Echo 祖影', brandShort: 'Echo',
    navFeatures: 'Features', navDemo: 'Try it', navDownload: 'Download', navContact: 'Contact',
    heroTitle: 'Keep your family’s story for the next generation',
    heroSub: 'Echo (祖影) is a family-tree app: a card for every relative, holding their photos, voice and stories. Bloodlines flow at your fingertips, kinship terms are worked out for you, and family echoes carry on.',
    badgeSoon: 'Coming soon',
    heroNote: 'Launching first on iPhone. Want to hear the moment it ships? Send us a note.',
    heroCta: 'Try the live demo',
    shotsTitle: 'A first look at the real app',
    shotsSub: 'Screenshots from the iPhone build in development.',
    shotCapTree: 'The tree canvas', shotCapCard: 'Person card',
    shotCapGallery: 'Person page: stories & echoes',
    shotCapWide: 'The whole tree: five generations at a glance',
    shotCapMap: 'The family on a map — everyone’s birthplace, the whole spread at a glance',
    shotCapRoute: 'Family Atlas — follow one direct line and see how far the family came',
    shotCapStyles: 'Pick your style on first launch',
    legendCouple: 'Heart = couple', legendBlood: 'Marching dashes = bloodline',
    legendDeceased: 'Faded = passed away',
    privacyLink: 'Privacy Policy',
    featTitle: 'One tree, a whole family',
    featSub: 'Start from yourself — one card per person, a family tree planted in minutes.',
    feat1T: 'A living family tree',
    feat1B: 'Pan and zoom across the whole tree: bloodlines flow along the branches, couples are tied with a little heart, and those who passed fade gently.',
    feat2T: 'Kinship, worked out for you',
    feat2B: 'Aunt, cousin, grand-niece… tap anyone and the app tells you exactly what to call them — with kinship systems in six languages.',
    feat3T: 'Keep voices and faces',
    feat3B: 'Behind every card is a small memorial: photos, voice recordings, videos and written stories to pass down.',
    feat4T: 'Echoes',
    feat4B: 'Same zodiac as Grandpa, same star sign as Grandma — the app spots coincidences across generations: your family’s echoes.',
    feat5T: 'Your data stays with you',
    feat5B: 'Local-first: no account needed. Your family data lives on your own phone — nothing uploaded, nothing tracked.',
    feat6T: 'Four styles, six languages',
    feat6B: 'Soft Minimal, Aurora Glass, Warm Playful and Heritage themes — with an interface in 简体, 繁體, English, Español, Français and हिन्दी.',
    feat7T: 'Where your family has been',
    feat7B: 'Pin birthplaces on a map and follow one direct line through them — from a grandparent’s village to the city you live in now, the steps of several generations joined into a single road.',
    feat8T: 'Families from the history books',
    feat8B: 'Seven real family trees are built in: seventy-nine generations of Confucius, Zhu Yuanzhang’s twenty-six sons, Elizabeth II, the Kennedys, the Darwins, Liang Qichao, and the legendary Yan and Yellow Emperors. Open one and see what a grown tree looks like.',
    feat9T: 'Bring it in, take it with you',
    feat9B: 'GEDCOM both ways, so it talks to the genealogy software you already use. One .zuying file is the entire tree — AirDrop it to a relative and they open a complete family.',
    demoTitle: 'Try it right here',
    demoSub: 'A miniature of the real UI: drag and zoom the canvas, tap people for cards and kinship terms, tap “Open” to browse their page, switch styles top-right.',
    demoHint: '👆 Tap someone · drag & pinch to move',
    demoNote: 'This is just a glimpse — adding family, writing stories and recording voices all happen in the app.',
    addRelative: 'Add relative', expandChip: 'Expand', refocusChip: 'Center on them', deleteChip: 'Delete',
    tryInApp: 'Want to add your own? That happens in the app — coming soon.',
    gStories: 'Stories', gTellOne: 'Tell one', gAlbum: 'Album', gPhotos: 'Photos',
    gAudio: 'Recordings', gVideo: 'Videos', gEchoes: 'Echoes', gAddMedia: 'Add',
    gStoryTitle: 'Summer nights in the courtyard',
    gStoryBody: 'Grandma waved her fan and told how great-grandfather carried his load south across the sea.',
    gCapFam: 'Family photo, 1998', gCapYard: 'The old courtyard',
    echoZodiac: 'Year of the {z}, same as you', meBadge: 'Me',
    zodiac: ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig'],
    dlTitle: 'See you very soon',
    dlSub: 'Echo is in final preparation for the App Store; Android will follow.',
    ctTitle: 'Contact us',
    ctSub: 'Ideas, feedback, or want to be first to try it? Drop us an email.',
    ctNote: 'We read every message.',
    footer: '© 2026 Echo 祖影 · Keep your family’s story',
    styles: { soft: 'Soft Minimal', glass: 'Aurora Glass', candy: 'Warm Playful', paper: 'Heritage' },
  },

  es: {
    docTitle: 'Echo 祖影 — Guarda la historia de tu familia',
    brand: 'Echo 祖影', brandShort: 'Echo',
    navFeatures: 'Funciones', navDemo: 'Pruébalo', navDownload: 'Descargar', navContact: 'Contacto',
    heroTitle: 'Guarda la historia de tu familia para la próxima generación',
    heroSub: 'Echo (祖影) es una app de árbol genealógico: una tarjeta para cada familiar, con sus fotos, su voz y sus historias. El linaje fluye bajo tus dedos, el parentesco se calcula solo y los ecos familiares perduran.',
    badgeSoon: 'Muy pronto',
    heroNote: 'Llegará primero a iPhone. ¿Quieres enterarte en cuanto salga? Escríbenos.',
    heroCta: 'Prueba la demo',
    shotsTitle: 'Un vistazo a la app real',
    shotsSub: 'Capturas de la versión para iPhone en desarrollo.',
    shotCapTree: 'El lienzo del árbol', shotCapCard: 'Tarjeta de persona',
    shotCapGallery: 'Página personal: historias y ecos',
    shotCapWide: 'Todo el árbol: cinco generaciones de un vistazo',
    shotCapMap: 'La familia en el mapa: el lugar de nacimiento de cada uno, de un vistazo',
    shotCapRoute: 'Atlas familiar: sigue una línea directa y mira cuánto ha recorrido la familia',
    shotCapStyles: 'Elige tu estilo al empezar',
    legendCouple: 'Corazón = pareja', legendBlood: 'Guiones en movimiento = linaje',
    legendDeceased: 'Difuminado = fallecido',
    privacyLink: 'Política de privacidad',
    featTitle: 'Un árbol, toda una familia',
    featSub: 'Empieza por ti: una tarjeta por persona, un árbol plantado en minutos.',
    feat1T: 'Un árbol que respira',
    feat1B: 'Recorre todo el árbol con zoom: el linaje fluye por las ramas, las parejas van unidas por un corazón y quienes partieron se desvanecen con dulzura.',
    feat2T: 'Parentesco calculado',
    feat2B: 'Tía, primo, sobrina nieta… toca a cualquiera y la app te dice exactamente cómo llamarle, con sistemas de parentesco en seis idiomas.',
    feat3T: 'Conserva voces y rostros',
    feat3B: 'Detrás de cada tarjeta hay un pequeño memorial: fotos, grabaciones de voz, vídeos e historias escritas para transmitir.',
    feat4T: 'Ecos',
    feat4B: 'El mismo zodíaco que el abuelo, el mismo signo que la abuela: la app descubre coincidencias entre generaciones, los ecos de tu familia.',
    feat5T: 'Tus datos, contigo',
    feat5B: 'Local primero: sin cuenta. Los datos de tu familia viven en tu propio teléfono; nada se sube, nada se rastrea.',
    feat6T: 'Cuatro estilos, seis idiomas',
    feat6B: 'Temas Soft Minimal, Aurora Glass, Warm Playful y Heritage, con interfaz en 简体, 繁體, English, Español, Français y हिन्दी.',
    feat7T: 'Por dónde ha pasado tu familia',
    feat7B: 'Marca los lugares de nacimiento en un mapa y recorre una línea directa a través de ellos: del pueblo de un abuelo a la ciudad donde vives hoy, los pasos de varias generaciones unidos en un solo camino.',
    feat8T: 'Familias salidas de los libros de historia',
    feat8B: 'Siete árboles genealógicos reales vienen incluidos: setenta y nueve generaciones de Confucio, los veintiséis hijos de Zhu Yuanzhang, Isabel II, los Kennedy, los Darwin, Liang Qichao y los legendarios emperadores Yan y Amarillo. Abre uno y verás cómo es un árbol ya crecido.',
    feat9T: 'Tráelo contigo, y llévatelo',
    feat9B: 'GEDCOM en ambos sentidos, para entenderse con el programa de genealogía que ya usas. Un archivo .zuying es el árbol entero: envíalo por AirDrop y tu familiar abre una familia completa.',
    demoTitle: 'Pruébalo aquí mismo',
    demoSub: 'Una miniatura de la interfaz real: arrastra y haz zoom, toca a las personas para ver su tarjeta y parentesco, toca «Abrir» para ver su página, cambia el estilo arriba a la derecha.',
    demoHint: '👆 Toca a alguien · arrastra y haz zoom',
    demoNote: 'Esto es solo un vistazo: añadir familiares, escribir historias y grabar voces se hace en la app.',
    addRelative: 'Añadir familiar', expandChip: 'Abrir', refocusChip: 'Centrar aquí', deleteChip: 'Eliminar',
    tryInApp: '¿Quieres añadir a los tuyos? Eso se hace en la app — muy pronto.',
    gStories: 'Historias', gTellOne: 'Contar una', gAlbum: 'Álbum', gPhotos: 'Fotos',
    gAudio: 'Grabaciones', gVideo: 'Vídeos', gEchoes: 'Ecos', gAddMedia: 'Añadir',
    gStoryTitle: 'Noches de verano en el patio',
    gStoryBody: 'La abuela contaba, abanico en mano, cómo el bisabuelo cruzó el mar con su carga al hombro.',
    gCapFam: 'Foto familiar, 1998', gCapYard: 'El patio de la casa antigua',
    echoZodiac: 'Año del {z}, igual que tú', meBadge: 'Yo',
    zodiac: ['Rata','Buey','Tigre','Conejo','Dragón','Serpiente','Caballo','Cabra','Mono','Gallo','Perro','Cerdo'],
    dlTitle: 'Nos vemos muy pronto',
    dlSub: 'Echo se prepara para llegar al App Store; la versión Android vendrá después.',
    ctTitle: 'Contacto',
    ctSub: '¿Ideas, sugerencias o quieres ser de los primeros en probarla? Envíanos un correo.',
    ctNote: 'Leemos cada mensaje.',
    footer: '© 2026 Echo 祖影 · Guarda la historia de tu familia',
    styles: { soft: 'Soft Minimal', glass: 'Aurora Glass', candy: 'Warm Playful', paper: 'Heritage' },
  },

  fr: {
    docTitle: 'Echo 祖影 — Gardez l’histoire de votre famille',
    brand: 'Echo 祖影', brandShort: 'Echo',
    navFeatures: 'Fonctions', navDemo: 'Essayer', navDownload: 'Télécharger', navContact: 'Contact',
    heroTitle: 'Gardez l’histoire de votre famille pour la génération suivante',
    heroSub: 'Echo (祖影) est une app d’arbre généalogique : une carte pour chaque proche, avec ses photos, sa voix et ses histoires. Le lignage coule sous vos doigts, les liens de parenté se calculent tout seuls, et les échos de la famille se transmettent.',
    badgeSoon: 'Bientôt disponible',
    heroNote: 'D’abord sur iPhone. Envie d’être prévenu dès la sortie ? Écrivez-nous.',
    heroCta: 'Essayer la démo',
    shotsTitle: 'Un aperçu de la vraie app',
    shotsSub: 'Captures de la version iPhone en développement.',
    shotCapTree: 'Le canevas de l’arbre', shotCapCard: 'Carte de personne',
    shotCapGallery: 'Page personnelle : histoires et échos',
    shotCapWide: 'L’arbre entier : cinq générations d’un coup d’œil',
    shotCapMap: 'La famille sur une carte : le lieu de naissance de chacun, d’un seul coup d’œil',
    shotCapRoute: 'Atlas familial — suivez une lignée directe et voyez le chemin parcouru',
    shotCapStyles: 'Choisissez votre style au départ',
    legendCouple: 'Cœur = couple', legendBlood: 'Tirets animés = lignage',
    legendDeceased: 'Estompé = disparu',
    privacyLink: 'Politique de confidentialité',
    featTitle: 'Un arbre, toute une famille',
    featSub: 'Partez de vous : une carte par personne, un arbre planté en quelques minutes.',
    feat1T: 'Un arbre qui respire',
    feat1B: 'Parcourez tout l’arbre en zoomant : le lignage coule le long des branches, les couples sont liés par un petit cœur, et les disparus s’estompent avec douceur.',
    feat2T: 'La parenté, calculée pour vous',
    feat2B: 'Tante, cousin, petite-nièce… touchez n’importe qui et l’app vous dit exactement comment l’appeler — avec des systèmes de parenté en six langues.',
    feat3T: 'Garder les voix et les visages',
    feat3B: 'Derrière chaque carte, un petit mémorial : photos, enregistrements, vidéos et récits écrits à transmettre.',
    feat4T: 'Échos',
    feat4B: 'Le même zodiaque que grand-père, le même signe que grand-mère — l’app repère les coïncidences entre générations : les échos de votre famille.',
    feat5T: 'Vos données restent chez vous',
    feat5B: 'Local d’abord : aucun compte requis. Les données de votre famille vivent sur votre propre téléphone — rien n’est envoyé, rien n’est pisté.',
    feat6T: 'Quatre styles, six langues',
    feat6B: 'Thèmes Soft Minimal, Aurora Glass, Warm Playful et Heritage — interface en 简体, 繁體, English, Español, Français et हिन्दी.',
    feat7T: 'Là où votre famille est passée',
    feat7B: 'Placez les lieux de naissance sur une carte et suivez une lignée directe : du village d’un grand-père à la ville où vous vivez aujourd’hui, les pas de plusieurs générations réunis en une seule route.',
    feat8T: 'Des familles sorties des livres d’histoire',
    feat8B: 'Sept arbres généalogiques réels sont inclus : soixante-dix-neuf générations de Confucius, les vingt-six fils de Zhu Yuanzhang, Élisabeth II, les Kennedy, les Darwin, Liang Qichao, et les légendaires empereurs Yan et Jaune. Ouvrez-en un pour voir à quoi ressemble un arbre déjà grand.',
    feat9T: 'Il arrive, et il repart avec vous',
    feat9B: 'GEDCOM dans les deux sens, pour dialoguer avec le logiciel de généalogie que vous utilisez déjà. Un fichier .zuying, c’est l’arbre entier : envoyez-le par AirDrop et votre proche ouvre une famille complète.',
    demoTitle: 'Essayez ici même',
    demoSub: 'Une miniature de la vraie interface : déplacez et zoomez, touchez les personnes pour voir carte et lien de parenté, touchez « Ouvrir » pour parcourir leur page, changez de style en haut à droite.',
    demoHint: '👆 Touchez quelqu’un · glissez, zoomez',
    demoNote: 'Ce n’est qu’un aperçu — ajouter des proches, écrire des histoires et enregistrer des voix, tout cela se passe dans l’app.',
    addRelative: 'Ajouter un proche', expandChip: 'Ouvrir', refocusChip: 'Recentrer ici', deleteChip: 'Supprimer',
    tryInApp: 'Envie d’ajouter les vôtres ? Cela se passe dans l’app — bientôt disponible.',
    gStories: 'Histoires', gTellOne: 'En raconter une', gAlbum: 'Album', gPhotos: 'Photos',
    gAudio: 'Enregistrements', gVideo: 'Vidéos', gEchoes: 'Échos', gAddMedia: 'Ajouter',
    gStoryTitle: 'Nuits d’été dans la cour',
    gStoryBody: 'Grand-mère racontait, éventail à la main, comment l’arrière-grand-père partit au sud, sa charge sur l’épaule.',
    gCapFam: 'Photo de famille, 1998', gCapYard: 'La cour de la vieille maison',
    echoZodiac: 'Année du {z}, comme toi', meBadge: 'Moi',
    zodiac: ['Rat','Buffle','Tigre','Lapin','Dragon','Serpent','Cheval','Chèvre','Singe','Coq','Chien','Cochon'],
    dlTitle: 'À très bientôt',
    dlSub: 'Echo se prépare pour l’App Store ; la version Android suivra.',
    ctTitle: 'Nous contacter',
    ctSub: 'Des idées, des retours, envie d’essayer en avant-première ? Écrivez-nous.',
    ctNote: 'Nous lisons chaque message.',
    footer: '© 2026 Echo 祖影 · Gardez l’histoire de votre famille',
    styles: { soft: 'Soft Minimal', glass: 'Aurora Glass', candy: 'Warm Playful', paper: 'Heritage' },
  },

  hi: {
    docTitle: 'Echo 祖影 — अपने परिवार की कहानी संजोएँ',
    brand: 'Echo 祖影', brandShort: 'Echo',
    navFeatures: 'सुविधाएँ', navDemo: 'आज़माएँ', navDownload: 'डाउनलोड', navContact: 'संपर्क',
    heroTitle: 'अपने परिवार की कहानी अगली पीढ़ी के लिए संजोएँ',
    heroSub: 'Echo (祖影) एक वंश-वृक्ष ऐप है: हर रिश्तेदार के लिए एक कार्ड, जिसमें उनकी तस्वीरें, आवाज़ और कहानियाँ रहती हैं। वंश आपकी उँगलियों पर बहता है, रिश्तों के नाम अपने आप निकलते हैं, और परिवार की गूँज पीढ़ी-दर-पीढ़ी चलती है।',
    badgeSoon: 'जल्द आ रहा है',
    heroNote: 'पहले iPhone पर आएगा। लॉन्च की खबर सबसे पहले चाहिए? हमें लिखें।',
    heroCta: 'लाइव डेमो आज़माएँ',
    shotsTitle: 'असली ऐप की पहली झलक',
    shotsSub: 'विकासाधीन iPhone संस्करण के स्क्रीनशॉट।',
    shotCapTree: 'वंश-वृक्ष कैनवास', shotCapCard: 'व्यक्ति कार्ड',
    shotCapGallery: 'व्यक्तिगत पेज: कहानियाँ और गूँज',
    shotCapWide: 'पूरा वृक्ष: एक नज़र में पाँच पीढ़ियाँ',
    shotCapMap: 'नक़्शे पर परिवार — हर किसी का जन्मस्थान, एक ही नज़र में',
    shotCapRoute: 'पारिवारिक एटलस — एक सीधी वंश-रेखा पर चलकर देखिए परिवार कितनी दूर आया',
    shotCapStyles: 'शुरुआत में शैली चुनें',
    legendCouple: 'दिल = दंपती', legendBlood: 'चलती धारियाँ = वंश',
    legendDeceased: 'धुँधला = दिवंगत',
    privacyLink: 'गोपनीयता नीति',
    featTitle: 'एक पेड़ में पूरा परिवार',
    featSub: 'खुद से शुरू करें — हर व्यक्ति का एक कार्ड, मिनटों में वंश-वृक्ष तैयार।',
    feat1T: 'जीवंत वंश-वृक्ष',
    feat1B: 'पूरे पेड़ पर ज़ूम करके घूमें: वंश शाखाओं में बहता है, दंपती एक छोटे दिल से जुड़े रहते हैं, और दिवंगत जन कोमलता से धुँधले हो जाते हैं।',
    feat2T: 'रिश्तों के नाम अपने आप',
    feat2B: 'बुआ, चचेरा भाई, भांजी… किसी को भी छुएँ और ऐप बताता है कि उन्हें क्या कहना है — छह भाषाओं की रिश्ता-प्रणाली के साथ।',
    feat3T: 'आवाज़ और चेहरे संजोएँ',
    feat3B: 'हर कार्ड के पीछे एक छोटा स्मारक है: तस्वीरें, आवाज़ की रिकॉर्डिंग, वीडियो और लिखी कहानियाँ।',
    feat4T: 'गूँज',
    feat4B: 'दादा जैसी ही राशि, दादी जैसा ही नक्षत्र — ऐप पीढ़ियों के बीच के संयोग खोज निकालता है: आपके परिवार की गूँज।',
    feat5T: 'आपका डेटा आपके पास',
    feat5B: 'लोकल-फ़र्स्ट: खाते की ज़रूरत नहीं। परिवार का डेटा आपके अपने फ़ोन में रहता है — कुछ भी अपलोड या ट्रैक नहीं होता।',
    feat6T: 'चार शैलियाँ, छह भाषाएँ',
    feat6B: 'Soft Minimal, Aurora Glass, Warm Playful और Heritage थीम — इंटरफ़ेस 简体, 繁體, English, Español, Français और हिन्दी में।',
    feat7T: 'आपका परिवार कहाँ-कहाँ रहा',
    feat7B: 'जन्मस्थानों को नक़्शे पर लगाइए और एक सीधी वंश-रेखा के साथ उन्हें देखिए — दादा के गाँव से लेकर आज आप जिस शहर में हैं, कई पीढ़ियों के क़दम एक ही रास्ते में जुड़ जाते हैं।',
    feat8T: 'इतिहास की किताबों वाले परिवार',
    feat8B: 'सात असली वंशवृक्ष पहले से मौजूद हैं: कन्फ़्यूशियस की उन्यासी पीढ़ियाँ, झू युआनझांग के छब्बीस बेटे, एलिज़ाबेथ द्वितीय, केनेडी, डार्विन, लियांग छिचाओ, और पौराणिक यान तथा पीत सम्राट। एक खोलिए और देखिए कि पूरा बड़ा हुआ पेड़ कैसा दिखता है।',
    feat9T: 'अंदर लाइए, और साथ ले जाइए',
    feat9B: 'GEDCOM दोनों तरफ़, ताकि यह उस जेनेलॉजी सॉफ़्टवेयर से बात कर सके जो आप पहले से इस्तेमाल करते हैं। एक .zuying फ़ाइल यानी पूरा पेड़ — AirDrop से भेजिए और आपका रिश्तेदार पूरा परिवार खोलेगा।',
    demoTitle: 'यहीं आज़माकर देखें',
    demoSub: 'असली इंटरफ़ेस की झलक: कैनवास खींचें-ज़ूम करें, लोगों पर टैप कर कार्ड और रिश्ते देखें, «खोलें» से उनका पेज घूमें, ऊपर दाईं ओर से थीम बदलें।',
    demoHint: '👆 किसी को छुएँ · खींचें, ज़ूम करें',
    demoNote: 'यह बस एक झलक है — परिजन जोड़ना, कहानियाँ लिखना और आवाज़ रिकॉर्ड करना, सब ऐप में होता है।',
    addRelative: 'रिश्तेदार जोड़ें', expandChip: 'खोलें', refocusChip: 'इन पर केंद्रित करें', deleteChip: 'हटाएँ',
    tryInApp: 'खुद जोड़ना चाहते हैं? यह ऐप में होता है — जल्द आ रहा है।',
    gStories: 'कहानियाँ', gTellOne: 'एक सुनाएँ', gAlbum: 'एल्बम', gPhotos: 'तस्वीरें',
    gAudio: 'रिकॉर्डिंग', gVideo: 'वीडियो', gEchoes: 'गूँज', gAddMedia: 'जोड़ें',
    gStoryTitle: 'आँगन की गर्मियों की रातें',
    gStoryBody: 'दादी पंखा झलते हुए बतातीं कि परदादा कैसे बोझ उठाए दक्षिण के समुद्र पार गए।',
    gCapFam: 'पारिवारिक फ़ोटो, 1998', gCapYard: 'पुराने घर का आँगन',
    echoZodiac: '{z} वर्ष — आपकी तरह', meBadge: 'मैं',
    zodiac: ['चूहा','बैल','बाघ','ख़रगोश','ड्रैगन','साँप','घोड़ा','बकरी','बंदर','मुर्गा','कुत्ता','सुअर'],
    dlTitle: 'बहुत जल्द मिलते हैं',
    dlSub: 'Echo ऐप स्टोर के लिए आख़िरी तैयारी में है; Android इसके बाद आएगा।',
    ctTitle: 'संपर्क करें',
    ctSub: 'सुझाव, विचार, या सबसे पहले आज़माना चाहते हैं? हमें ईमेल भेजें।',
    ctNote: 'हम हर संदेश पढ़ते हैं।',
    footer: '© 2026 Echo 祖影 · अपने परिवार की कहानी संजोएँ',
    styles: { soft: 'Soft Minimal', glass: 'Aurora Glass', candy: 'Warm Playful', paper: 'Heritage' },
  },
};

/* ================== kinship terms (mini engine) ==================
   [zh, en, es, fr, hi]; zh_Hant derives from zh via a char map,
   with a few whole-word exceptions (Taiwan usage). */

const KIN = {
  me:            ['我', 'Me', 'Yo', 'Moi', 'मैं'],
  father:        ['爸爸', 'Dad', 'Papá', 'Papa', 'पिताजी'],
  mother:        ['妈妈', 'Mom', 'Mamá', 'Maman', 'माँ'],
  gfP:           ['爷爷', 'Grandpa', 'Abuelo paterno', 'Grand-père paternel', 'दादा'],
  gmP:           ['奶奶', 'Grandma', 'Abuela paterna', 'Grand-mère paternelle', 'दादी'],
  gfM:           ['外公', 'Grandpa', 'Abuelo materno', 'Grand-père maternel', 'नाना'],
  gmM:           ['外婆', 'Grandma', 'Abuela materna', 'Grand-mère maternelle', 'नानी'],
  ggfP:          ['曾祖父', 'Great-grandpa', 'Bisabuelo', 'Arrière-grand-père', 'परदादा'],
  ggmP:          ['曾祖母', 'Great-grandma', 'Bisabuela', 'Arrière-grand-mère', 'परदादी'],
  ggfM:          ['外曾祖父', 'Great-grandpa', 'Bisabuelo', 'Arrière-grand-père', 'परनाना'],
  ggmM:          ['外曾祖母', 'Great-grandma', 'Bisabuela', 'Arrière-grand-mère', 'परनानी'],
  son:           ['儿子', 'Son', 'Hijo', 'Fils', 'बेटा'],
  daughter:      ['女儿', 'Daughter', 'Hija', 'Fille', 'बेटी'],
  grandsonS:     ['孙子', 'Grandson', 'Nieto', 'Petit-fils', 'पोता'],
  granddaughterS: ['孙女', 'Granddaughter', 'Nieta', 'Petite-fille', 'पोती'],
  grandsonD:     ['外孙', 'Grandson', 'Nieto', 'Petit-fils', 'नाती'],
  granddaughterD: ['外孙女', 'Granddaughter', 'Nieta', 'Petite-fille', 'नातिन'],
  ggsonS:        ['曾孙', 'Great-grandson', 'Bisnieto', 'Arrière-petit-fils', 'परपोता'],
  ggdaughterS:   ['曾孙女', 'Great-granddaughter', 'Bisnieta', 'Arrière-petite-fille', 'परपोती'],
  ggsonD:        ['外曾孙', 'Great-grandson', 'Bisnieto', 'Arrière-petit-fils', 'परनाती'],
  ggdaughterD:   ['外曾孙女', 'Great-granddaughter', 'Bisnieta', 'Arrière-petite-fille', 'परनातिन'],
  brotherE:      ['哥哥', 'Elder brother', 'Hermano mayor', 'Grand frère', 'बड़ा भाई'],
  brotherY:      ['弟弟', 'Little brother', 'Hermano menor', 'Petit frère', 'छोटा भाई'],
  sisterE:       ['姐姐', 'Elder sister', 'Hermana mayor', 'Grande sœur', 'बड़ी बहन'],
  sisterY:       ['妹妹', 'Little sister', 'Hermana menor', 'Petite sœur', 'छोटी बहन'],
  uncleFE:       ['伯伯', 'Uncle', 'Tío', 'Oncle', 'ताऊ'],
  uncleFY:       ['叔叔', 'Uncle', 'Tío', 'Oncle', 'चाचा'],
  auntF:         ['姑姑', 'Aunt', 'Tía', 'Tante', 'बुआ'],
  uncleM:        ['舅舅', 'Uncle', 'Tío', 'Oncle', 'मामा'],
  auntM:         ['姨妈', 'Aunt', 'Tía', 'Tante', 'मौसी'],
  nephewB:       ['侄子', 'Nephew', 'Sobrino', 'Neveu', 'भतीजा'],
  nieceB:        ['侄女', 'Niece', 'Sobrina', 'Nièce', 'भतीजी'],
  nephewS:       ['外甥', 'Nephew', 'Sobrino', 'Neveu', 'भांजा'],
  nieceS:        ['外甥女', 'Niece', 'Sobrina', 'Nièce', 'भांजी'],
  cousinTME:     ['堂哥', 'Cousin', 'Primo', 'Cousin', 'चचेरा भाई'],
  cousinTMY:     ['堂弟', 'Cousin', 'Primo', 'Cousin', 'चचेरा भाई'],
  cousinTFE:     ['堂姐', 'Cousin', 'Prima', 'Cousine', 'चचेरी बहन'],
  cousinTFY:     ['堂妹', 'Cousin', 'Prima', 'Cousine', 'चचेरी बहन'],
  cousinBME:     ['表哥', 'Cousin', 'Primo', 'Cousin', 'फुफेरा भाई'],
  cousinBMY:     ['表弟', 'Cousin', 'Primo', 'Cousin', 'फुफेरा भाई'],
  cousinBFE:     ['表姐', 'Cousin', 'Prima', 'Cousine', 'फुफेरी बहन'],
  cousinBFY:     ['表妹', 'Cousin', 'Prima', 'Cousine', 'फुफेरी बहन'],
  husband:       ['丈夫', 'Husband', 'Esposo', 'Époux', 'पति'],
  wife:          ['妻子', 'Wife', 'Esposa', 'Épouse', 'पत्नी'],
  partner:       ['配偶', 'Spouse', 'Cónyuge', 'Conjoint(e)', 'जीवनसाथी'],
  sisInLawE:     ['嫂子', 'Sister-in-law', 'Cuñada', 'Belle-sœur', 'भाभी'],
  sisInLawY:     ['弟媳', 'Sister-in-law', 'Cuñada', 'Belle-sœur', 'भाभी'],
  broInLawE:     ['姐夫', 'Brother-in-law', 'Cuñado', 'Beau-frère', 'जीजा'],
  broInLawY:     ['妹夫', 'Brother-in-law', 'Cuñado', 'Beau-frère', 'बहनोई'],
  daughterInLaw: ['儿媳', 'Daughter-in-law', 'Nuera', 'Belle-fille', 'बहू'],
  sonInLaw:      ['女婿', 'Son-in-law', 'Yerno', 'Gendre', 'दामाद'],
  auntFH:        ['姑父', 'Uncle', 'Tío', 'Oncle', 'फूफा'],
  uncleFEW:      ['伯母', 'Aunt', 'Tía', 'Tante', 'ताई'],
  uncleFYW:      ['婶婶', 'Aunt', 'Tía', 'Tante', 'चाची'],
  uncleMW:       ['舅妈', 'Aunt', 'Tía', 'Tante', 'मामी'],
  auntMH:        ['姨父', 'Uncle', 'Tío', 'Oncle', 'मौसा'],
  fWife:         ['岳父', 'Father-in-law', 'Suegro', 'Beau-père', 'ससुर'],
  mWife:         ['岳母', 'Mother-in-law', 'Suegra', 'Belle-mère', 'सास'],
  fHusb:         ['公公', 'Father-in-law', 'Suegro', 'Beau-père', 'ससुर'],
  mHusb:         ['婆婆', 'Mother-in-law', 'Suegra', 'Belle-mère', 'सास'],
  bandSame:      ['同辈', 'Same generation', 'Misma generación', 'Même génération', 'समान पीढ़ी'],
  bandParents:   ['父母辈', 'Parents’ generation', 'Generación de los padres', 'Génération des parents', 'माता-पिता की पीढ़ी'],
  bandGrand:     ['祖辈', 'Grandparents’ generation', 'Generación de los abuelos', 'Génération des grands-parents', 'दादा-दादी की पीढ़ी'],
  bandGreat:     ['曾祖辈', 'Great-grandparents', 'Bisabuelos', 'Arrière-grands-parents', 'परदादा की पीढ़ी'],
  bandChildren:  ['子女辈', 'Children’s generation', 'Generación de los hijos', 'Génération des enfants', 'संतान की पीढ़ी'],
  bandGrandCh:   ['孙辈', 'Grandchildren', 'Nietos', 'Petits-enfants', 'पोते-पोतियों की पीढ़ी'],
  bandGreatCh:   ['曾孙辈', 'Great-grandchildren', 'Bisnietos', 'Arrière-petits-enfants', 'परपोतों की पीढ़ी'],
};

const HANT_CHARS = {
  '妈': '媽', '爷': '爺', '孙': '孫', '儿': '兒', '婶': '嬸', '侄': '姪', '辈': '輩',
};
const HANT_EXCEPTIONS = { auntFH: '姑丈', auntMH: '姨丈' };
const toHant = (s) => s.split('').map((c) => HANT_CHARS[c] || c).join('');

function kinTerm(key) {
  const row = KIN[key];
  if (!row) return '';
  switch (lang) {
    case 'zh': return row[0];
    case 'zh_Hant': return HANT_EXCEPTIONS[key] || toHant(row[0]);
    case 'es': return row[2];
    case 'fr': return row[3];
    case 'hi': return row[4];
    default: return row[1];
  }
}

/* ============================ language ============================ */

const LANGS = ['zh', 'zh_Hant', 'en', 'es', 'fr', 'hi'];
const LANG_KEY = 'zuying_web_lang';
let lang = detectLang();

function detectLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  for (const raw of (navigator.languages || [navigator.language || 'en'])) {
    const l = raw.toLowerCase();
    if (l.startsWith('zh')) {
      return (l.includes('hant') || l.includes('tw') || l.includes('hk') || l.includes('mo'))
        ? 'zh_Hant' : 'zh';
    }
    for (const code of ['en', 'es', 'fr', 'hi']) {
      if (l.startsWith(code)) return code;
    }
  }
  return 'en';
}

function t(key) {
  const k = key.replace(/\d+$/, ''); // badgeSoon2/3/4 → badgeSoon
  return (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k;
}

/* Screenshots that exist in more than one language. The app renders these
   itself, so a localised copy is a build step rather than a re-shoot; the
   rest are photographed on a real phone and are Simplified Chinese only for
   now — an <img> whose name is not listed here keeps its base file rather
   than 404ing (founder 2026-08-09: 切换语言后照片也换语言吗). */
const SHOT_LANGS = { route: ['zh', 'zh_Hant', 'en', 'es', 'fr', 'hi'] };

function applyShotLangs() {
  document.querySelectorAll('img[data-shot]').forEach((img) => {
    const name = img.dataset.shot;
    const langs = SHOT_LANGS[name] || [];
    img.src = langs.includes(lang)
      ? `assets/shots/shot-${name}.${lang}.png`
      : `assets/shots/shot-${name}.png`;
  });
}

function applyLang() {
  document.documentElement.lang =
    { zh: 'zh-CN', zh_Hant: 'zh-Hant' }[lang] || lang;
  document.title = t('docTitle');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('#styleDots .dot').forEach((d) => {
    d.title = I18N[lang].styles[d.dataset.style];
  });
  applyShotLangs();
  const sel = document.getElementById('langSelect');
  if (sel.value !== lang) sel.value = lang;
  renderTree();
  if (!overlay.hidden && selectedId) openCard(byId(selectedId));
}

document.getElementById('langSelect').addEventListener('change', (e) => {
  lang = e.target.value;
  localStorage.setItem(LANG_KEY, lang);
  applyLang();
});

/* ========================= demo simulator ========================= */

const NOW_YEAR = 2026;
const SVG_NS = 'http://www.w3.org/2000/svg';
const tree = document.getElementById('tree');
const phone = document.getElementById('phone');

/* --- people. Names stay as entered (like the real app); pinyin for
   non-Chinese visitors. --- */
let nextId = 1;
const people = [];
function addPerson(p) {
  const full = Object.assign(
    { id: nextId++, deceased: false, spouseId: null, parentIds: [] }, p);
  people.push(full);
  return full;
}
function marry(a, b) { a.spouseId = b.id; b.spouseId = a.id; }

const gp = addPerson({ nameZh: '李富贵', nameEn: 'Li Fugui', family: '李', gender: 'male', gen: 0, birthY: 1930, deathY: 2001, deceased: true, placeZh: '山东济南', placeEn: 'Jinan' });
const gm = addPerson({ nameZh: '王秀兰', nameEn: 'Wang Xiulan', family: '王', gender: 'female', gen: 0, birthY: 1938, placeZh: '山东济南', placeEn: 'Jinan' });
marry(gp, gm);
const dad = addPerson({ nameZh: '李建国', nameEn: 'Li Jianguo', family: '李', gender: 'male', gen: 1, birthY: 1962, placeZh: '北京', placeEn: 'Beijing', parentIds: [gp.id, gm.id] });
const mom = addPerson({ nameZh: '张丽华', nameEn: 'Zhang Lihua', family: '张', gender: 'female', gen: 1, birthY: 1965, placeZh: '北京', placeEn: 'Beijing' });
marry(dad, mom);
addPerson({ nameZh: '李桂芳', nameEn: 'Li Guifang', family: '李', gender: 'female', gen: 1, birthY: 1968, placeZh: '北京', placeEn: 'Beijing', parentIds: [gp.id, gm.id] });
const ego = addPerson({ nameZh: '李明', nameEn: 'Li Ming', family: '李', gender: 'male', gen: 2, birthY: 1990, placeZh: '北京', placeEn: 'Beijing', parentIds: [dad.id, mom.id] });
const wife = addPerson({ nameZh: '陈静', nameEn: 'Chen Jing', family: '陈', gender: 'female', gen: 2, birthY: 1991, placeZh: '上海', placeEn: 'Shanghai' });
marry(ego, wife);
addPerson({ nameZh: '李婷', nameEn: 'Li Ting', family: '李', gender: 'female', gen: 2, birthY: 1994, placeZh: '北京', placeEn: 'Beijing', parentIds: [dad.id, mom.id] });
addPerson({ nameZh: '李朵朵', nameEn: 'Li Duoduo', family: '李', gender: 'female', gen: 3, birthY: 2014, placeZh: '北京', placeEn: 'Beijing', parentIds: [ego.id, wife.id] });

let focalId = ego.id;
let selectedId = null;
let lastAddedId = null;

const byId = (id) => people.find((p) => p.id === id);
const parentsOf = (p) => p.parentIds.map(byId).filter(Boolean);
const childrenOf = (p) => people.filter((c) => c.parentIds.includes(p.id));
const displayName = (p) =>
  lang === 'zh' || lang === 'zh_Hant' ? p.nameZh : p.nameEn;
const displayPlace = (p) =>
  lang === 'zh' || lang === 'zh_Hant' ? p.placeZh : p.placeEn;

/* --- name pools for newly added people --- */
const SURNAME_PY = { '李': 'Li', '王': 'Wang', '张': 'Zhang', '陈': 'Chen', '刘': 'Liu', '杨': 'Yang', '赵': 'Zhao' };
const GIVEN_M = [['强', 'Qiang'], ['军', 'Jun'], ['磊', 'Lei'], ['洋', 'Yang'], ['杰', 'Jie'], ['勇', 'Yong']];
const GIVEN_F = [['芳', 'Fang'], ['娜', 'Na'], ['敏', 'Min'], ['雪', 'Xue'], ['琳', 'Lin'], ['丹', 'Dan']];
const MARRY_IN = ['刘', '杨', '赵', '王', '陈'];
let givenIdx = 0, marryIdx = 0;

function makePerson(family, gender, gen, birthY, like) {
  const g = (gender === 'male' ? GIVEN_M : GIVEN_F)[givenIdx++ % 6];
  return addPerson({
    nameZh: family + g[0],
    nameEn: `${SURNAME_PY[family] || family} ${g[1]}`,
    family, gender, gen,
    birthY: Math.min(birthY, NOW_YEAR),
    placeZh: like.placeZh, placeEn: like.placeEn,
  });
}

/* ------------------- kinship engine (mini port) ------------------- */

/* ancestors of p: id → {depth, side: 'father'|'mother', below: child on path} */
function ancestorsOf(p) {
  const map = new Map();
  const walk = (cur, depth, side) => {
    for (const par of parentsOf(cur)) {
      const s = depth === 0 ? (par.gender === 'male' ? 'father' : 'mother') : side;
      if (!map.has(par.id) || map.get(par.id).depth > depth + 1) {
        map.set(par.id, { depth: depth + 1, side: s, below: cur });
        walk(par, depth + 1, s);
      }
    }
  };
  walk(p, 0, null);
  return map;
}

/* descendants of p: id → {depth, side: 'son'|'daughter'} */
function descendantsOf(p) {
  const map = new Map();
  const walk = (cur, depth, side) => {
    for (const c of childrenOf(cur)) {
      const s = depth === 0 ? (c.gender === 'male' ? 'son' : 'daughter') : side;
      if (!map.has(c.id) || map.get(c.id).depth > depth + 1) {
        map.set(c.id, { depth: depth + 1, side: s, via: cur });
        walk(c, depth + 1, s);
      }
    }
  };
  walk(p, 0, null);
  return map;
}

function bloodKey(focal, p) {
  if (p.id === focal.id) return 'me';
  const male = p.gender === 'male';

  const anc = ancestorsOf(focal);
  const ea = anc.get(p.id);
  if (ea) {
    if (ea.depth === 1) return male ? 'father' : 'mother';
    if (ea.depth === 2) {
      return ea.side === 'father' ? (male ? 'gfP' : 'gmP') : (male ? 'gfM' : 'gmM');
    }
    if (ea.depth === 3) {
      return ea.side === 'father' ? (male ? 'ggfP' : 'ggmP') : (male ? 'ggfM' : 'ggmM');
    }
    return null;
  }

  const desc = descendantsOf(focal);
  const ed = desc.get(p.id);
  if (ed) {
    if (ed.depth === 1) return male ? 'son' : 'daughter';
    if (ed.depth === 2) {
      return ed.side === 'son'
        ? (male ? 'grandsonS' : 'granddaughterS')
        : (male ? 'grandsonD' : 'granddaughterD');
    }
    if (ed.depth === 3) {
      return ed.side === 'son'
        ? (male ? 'ggsonS' : 'ggdaughterS') : (male ? 'ggsonD' : 'ggdaughterD');
    }
    return null;
  }

  // collateral: nearest common ancestor
  const ancP = ancestorsOf(p);
  let best = null;
  for (const [aid, ef] of anc) {
    const ep = ancP.get(aid);
    if (ep && (!best || ef.depth + ep.depth < best.sum)) {
      best = { sum: ef.depth + ep.depth, df: ef.depth, dp: ep.depth, ef, ep };
    }
  }
  if (!best) return null;
  const elder = p.birthY != null && focal.birthY != null && p.birthY < focal.birthY;

  if (best.df === 1 && best.dp === 1) {
    return male ? (elder ? 'brotherE' : 'brotherY') : (elder ? 'sisterE' : 'sisterY');
  }
  if (best.df === 2 && best.dp === 1) {
    // parent's sibling; 伯/叔 by age against the father
    if (best.ef.side === 'father') {
      if (!male) return 'auntF';
      const f = parentsOf(focal).find((x) => x.gender === 'male');
      const olderThanDad = f && p.birthY != null && f.birthY != null && p.birthY < f.birthY;
      return olderThanDad ? 'uncleFE' : 'uncleFY';
    }
    return male ? 'uncleM' : 'auntM';
  }
  if (best.df === 1 && best.dp === 2) {
    const sib = best.ep.below; // focal's sibling on the path
    return sib.gender === 'male'
      ? (male ? 'nephewB' : 'nieceB') : (male ? 'nephewS' : 'nieceS');
  }
  if (best.df === 2 && best.dp === 2) {
    // cousin: 堂 via the father's brother, 表 otherwise
    const linkParent = best.ep.below; // p's parent (child of common ancestor)
    const tang = best.ef.side === 'father' && linkParent.gender === 'male';
    const base = tang ? 'cousinT' : 'cousinB';
    return base + (male ? 'M' : 'F') + (elder ? 'E' : 'Y');
  }
  return null;
}

const SPOUSE_OF = {
  brotherE: 'sisInLawE', brotherY: 'sisInLawY',
  sisterE: 'broInLawE', sisterY: 'broInLawY',
  son: 'daughterInLaw', daughter: 'sonInLaw',
  auntF: 'auntFH', uncleFE: 'uncleFEW', uncleFY: 'uncleFYW',
  uncleM: 'uncleMW', auntM: 'auntMH',
};

function relationKey(focal, p) {
  const bk = bloodKey(focal, p);
  if (bk) return bk;
  // spouse (the app's pair rule: 丈夫/妻子 only for a man+woman couple)
  if (focal.spouseId === p.id) {
    if (focal.gender === 'male' && p.gender === 'female') return 'wife';
    if (focal.gender === 'female' && p.gender === 'male') return 'husband';
    return 'partner';
  }
  // spouse of my blood relative
  if (p.spouseId) {
    const b = byId(p.spouseId);
    const k = b && bloodKey(focal, b);
    if (k) {
      if (p.gender === b.gender) return 'partner';
      return SPOUSE_OF[k] || 'partner';
    }
  }
  // blood relative of my spouse
  if (focal.spouseId) {
    const s = byId(focal.spouseId);
    const k = bloodKey(s, p);
    if (k === 'father') return s.gender === 'female' ? 'fWife' : 'fHusb';
    if (k === 'mother') return s.gender === 'female' ? 'mWife' : 'mHusb';
  }
  // generation-band fallback, like the app's _bandLabel
  const g = p.gen - focal.gen;
  return ['bandGreat', 'bandGrand', 'bandParents', 'bandSame',
    'bandChildren', 'bandGrandCh', 'bandGreatCh'][Math.max(-3, Math.min(3, g)) + 3];
}

/* -------------- avatar (port of _PersonAvatarPainter) -------------- */

const SHIRTS = ['#6B7A5E', '#96637B', '#4A6B85', '#B0524B', '#3E7D74',
  '#7A5B3F', '#B06A75', '#5A6472', '#8A7BB4', '#C77B3B'];

function hexLerp(a, b, t) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return '#' + pa.map((v, i) =>
    Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join('');
}

function avatarSvg(p, size, ctx) {
  const mute = (c) => (p.deceased ? hexLerp('#9A9188', c, 0.4) : c);
  const age = p.birthY == null ? 40 : Math.min(120, Math.max(0, NOW_YEAR - p.birthY));
  const elder = age >= 68, child = age <= 12, baby = age <= 3;
  const female = p.gender === 'female';
  const skin = mute(child ? '#F6D4B4' : '#F1C6A0');
  const hairC = mute(elder ? '#C9C4BB' : hexLerp('#3A342E', '#4A423A', (p.id % 7) / 6));
  const shirt = mute(SHIRTS[p.id % SHIRTS.length]);
  const ink = '#33291F';
  const clip = `av${ctx}${p.id}`;

  const top = `<path d="M18.6 26.5 A13.4 13.4 0 0 1 45.4 26.5 Z" fill="${hairC}"/>`;
  let hair;
  if (baby) {
    hair = `<path d="M27 15.5 Q32 8.5 37 15.5 Q32 12.5 27 15.5 Z" fill="${hairC}"/>`;
  } else if (female && child) {
    hair = top + `<circle cx="15.8" cy="27" r="4.4" fill="${hairC}"/><circle cx="48.2" cy="27" r="4.4" fill="${hairC}"/>`;
  } else if (female && elder) {
    hair = top + `<circle cx="32" cy="12" r="4.6" fill="${hairC}"/>`;
  } else if (female) {
    hair = top +
      `<rect x="17.4" y="24.5" width="4.8" height="12" rx="2.4" fill="${hairC}"/>` +
      `<rect x="41.8" y="24.5" width="4.8" height="12" rx="2.4" fill="${hairC}"/>`;
  } else if (elder) {
    hair = `<path d="M21.5 30 Q22 43 32 44.5 Q42 43 42.5 30 Q37 38.5 32 38.5 Q27 38.5 21.5 30 Z" fill="${mute('#E3DFD6')}"/>`;
  } else {
    hair = top;
  }

  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}">
    <defs><clipPath id="${clip}"><circle cx="32" cy="32" r="32"/></clipPath></defs>
    <g clip-path="url(#${clip})">
      <rect width="64" height="64" fill="var(--ph-chip)"/>
      <path d="M11 64 Q11 45 32 45 Q53 45 53 64 Z" fill="${shirt}"/>
      <circle cx="32" cy="27" r="13" fill="${skin}"/>
      ${hair}
      <circle cx="26.5" cy="27.5" r="1.4" fill="${ink}"/>
      <circle cx="37.5" cy="27.5" r="1.4" fill="${ink}"/>
      <path d="M28 32.5 Q32 35.5 36 32.5" stroke="${ink}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`;
}

/* -------------------- layout (tidy-ish rows) -------------------- */

const NW = 148, NH = 56, CGAP = 30, HGAP = 22, VGAP = 110; // CGAP fits the r=11 heart chip between spouses

/* Tidy layout, like the app's tree_layout: couples form units, each
   parent unit is centered over the span of its children. */
function layoutTree() {
  const gens = [...new Set(people.map((p) => p.gen))].sort((a, b) => a - b);
  const rowOf = new Map(gens.map((g, i) => [g, i]));

  // 1. units (couple or single) per generation
  const unitOf = new Map();
  const units = [];
  for (const g of gens) {
    for (const p of people) {
      if (p.gen !== g || unitOf.has(p.id)) continue;
      const members = [p];
      const s = p.spouseId && byId(p.spouseId);
      if (s && s.gen === g && !unitOf.has(s.id)) members.push(s);
      const u = { members, gen: g, children: [], parentUnit: null, subW: 0, x: 0 };
      for (const m of members) unitOf.set(m.id, u);
      units.push(u);
    }
  }

  // 2. one primary parent unit per unit (extra in-law links only draw edges)
  for (const u of units) {
    for (const m of u.members) {
      for (const pid of m.parentIds) {
        const pu = unitOf.get(pid);
        if (pu && pu.gen < u.gen && !u.parentUnit) {
          u.parentUnit = pu;
          pu.children.push(u);
        }
      }
      if (u.parentUnit) break;
    }
  }

  // 3. post-order subtree widths
  const ownW = (u) => u.members.length * NW + (u.members.length - 1) * CGAP;
  const measure = (u) => {
    let kidsW = 0;
    for (const c of u.children) { measure(c); kidsW += c.subW; }
    kidsW += HGAP * Math.max(0, u.children.length - 1);
    u.subW = Math.max(ownW(u), kidsW);
  };

  // 4. parents centered over children
  const place = (u, left) => {
    u.x = left + (u.subW - ownW(u)) / 2;
    let kidsW = HGAP * Math.max(0, u.children.length - 1);
    for (const c of u.children) kidsW += c.subW;
    let cx = left + (u.subW - kidsW) / 2;
    for (const c of u.children) { place(c, cx); cx += c.subW + HGAP; }
  };

  let cursor = 0;
  for (const root of units.filter((u) => !u.parentUnit)) {
    measure(root);
    place(root, cursor);
    cursor += root.subW + HGAP * 2;
  }

  const pos = new Map();
  for (const u of units) {
    const y = rowOf.get(u.gen) * (NH + VGAP);
    let mx = u.x;
    for (const m of u.members) { pos.set(m.id, { x: mx, y }); mx += NW + CGAP; }
  }
  return pos;
}

/* blood edges of the focal person: 'parentId>childId' along the
   ancestor and descendant chains (blood flows down). */
function bloodPairs(focal) {
  const set = new Set();
  for (const [aid, e] of ancestorsOf(focal)) set.add(`${aid}>${e.below.id}`);
  for (const [did, e] of descendantsOf(focal)) set.add(`${e.via.id}>${did}`);
  return set;
}

/* --------------------------- rendering --------------------------- */

function el(name, attrs, parent) {
  const node = document.createElementNS(SVG_NS, name);
  for (const [k, v] of Object.entries(attrs || {})) node.setAttribute(k, v);
  if (parent) parent.appendChild(node);
  return node;
}

const world = el('g', {}, tree);
const view = { x: 0, y: 0, k: 1 };
let bandZoneW = 82; // width of the generation-label gutter; measured in renderTree
function applyView() {
  world.setAttribute('transform',
    `translate(${view.x} ${view.y}) scale(${view.k})`);
}

function fitView(pos) {
  let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
  for (const { x, y } of pos.values()) {
    minX = Math.min(minX, x); minY = Math.min(minY, y);
    maxX = Math.max(maxX, x + NW); maxY = Math.max(maxY, y + NH);
  }
  minX -= bandZoneW; // generation band labels sit left of the tree
  const pad = 26;
  const w = maxX - minX + pad * 2, h = maxY - minY + pad * 2 + 22; // room for years text
  view.k = Math.min(390 / w, 614 / h, 1.05);
  view.x = (390 - (maxX - minX) * view.k) / 2 - minX * view.k;
  view.y = (614 - (maxY - minY) * view.k) / 2 - minY * view.k;
  applyView();
}

/* Ellipsize an SVG <text> to the card's text column (avatar ends at x=54,
   8px right pad) by measuring rendered glyphs — char counts misjudge mixed
   CJK/Latin/Devanagari widths. */
const TEXT_MAX = NW - 54 - 8;
function fitText(textEl, s, max = TEXT_MAX) {
  textEl.textContent = s;
  if (textEl.getComputedTextLength() <= max) return;
  let t = s;
  do {
    t = t.slice(0, -1);
    textEl.textContent = t + '…';
  } while (t.length > 1 && textEl.getComputedTextLength() > max);
}

function renderTree() {
  if (!tree) return;
  world.innerHTML = '';
  const pos = layoutTree();
  const focal = byId(focalId);
  const blood = bloodPairs(focal);
  const bands = el('g', {}, world);
  const edges = el('g', {}, world);
  const hearts = el('g', {}, world);
  const nodes = el('g', {}, world);

  // generation band labels (祖辈 / 父母辈 / 同辈…), relative to the focal
  {
    const rows = new Map(); // y → leftmost x
    let minGenX = 1e9;
    for (const p of people) {
      const { x, y } = pos.get(p.id);
      minGenX = Math.min(minGenX, x);
      rows.set(`${p.gen}`, Math.min(rows.get(`${p.gen}`) ?? 1e9, y));
    }
    const labels = [];
    for (const [genStr, y] of rows) {
      const diff = Number(genStr) - focal.gen;
      const key = ['bandGreat', 'bandGrand', 'bandParents', 'bandSame',
        'bandChildren', 'bandGrandCh', 'bandGreatCh'][Math.max(-3, Math.min(3, diff)) + 3];
      const label = el('text', {
        class: 'band-label', y: y + NH / 2 + 4, 'text-anchor': 'start',
      }, bands);
      label.textContent = kinTerm(key);
      labels.push(label);
      el('line', {
        class: 'band-rail', x1: minGenX - 10, y1: y + NH / 2,
        x2: minGenX + 2, y2: y + NH / 2,
      }, bands);
    }
    // flush-left labels: the widest one ends just before the rail, the rest
    // share its left edge — so no label can reach the dashes or the cards
    const maxW = Math.max(0, ...labels.map((t) => t.getComputedTextLength()));
    for (const t of labels) t.setAttribute('x', minGenX - 18 - maxW);
    bandZoneW = maxW + 26; // label width + rail gap + padding; fitView reserves this
  }

  // partner lines + 连理结 hearts
  const drawn = new Set();
  for (const p of people) {
    if (!p.spouseId || drawn.has(p.id)) continue;
    const s = byId(p.spouseId);
    drawn.add(p.id); drawn.add(s.id);
    const pa = pos.get(p.id), pb = pos.get(s.id);
    const [l, r] = pa.x < pb.x ? [pa, pb] : [pb, pa];
    const cy = pa.y + NH / 2;
    el('line', { x1: l.x + NW, y1: cy, x2: r.x, y2: cy, class: 'edge partner' }, edges);
    const mx = (l.x + NW + r.x) / 2;
    const lit = p.id === focalId || s.id === focalId;
    const hg = el('g', { class: lit ? 'heart-lit' : '' }, hearts);
    el('circle', { cx: mx, cy, r: 11, class: 'heart-ring' }, hg);
    el('path', {
      class: 'heart',
      // the prototype's 24-unit heart, scaled 13/24 like the app
      d: 'M12 20.5C7 16.5 3.5 13.3 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.5 0 4.5 2 4.5 4.6 0 4.1-3.5 6.9-8.5 10.9z',
      transform: `translate(${mx - 6.5}, ${cy - 6.8}) scale(0.542)`,
    }, hg);
  }

  // parent → child elbows
  for (const c of people) {
    const parents = parentsOf(c);
    if (!parents.length) continue;
    let ax, ay;
    if (parents.length === 2 && parents[0].spouseId === parents[1].id) {
      const pa = pos.get(parents[0].id), pb = pos.get(parents[1].id);
      const [l, r] = pa.x < pb.x ? [pa, pb] : [pb, pa];
      ax = (l.x + NW + r.x) / 2;
      ay = pa.y + NH / 2 + 11; // below the heart chip
    } else {
      const pa = pos.get(parents[0].id);
      ax = pa.x + NW / 2;
      ay = pa.y + NH;
    }
    const pc = pos.get(c.id);
    const cx = pc.x + NW / 2, cyTop = pc.y;
    const midY = ay + (cyTop - ay) / 2;
    const lit = parents.some((pp) => blood.has(`${pp.id}>${c.id}`));
    el('path', {
      class: lit ? 'edge blood' : 'edge',
      d: `M ${ax} ${ay} L ${ax} ${midY} L ${cx} ${midY} L ${cx} ${cyTop}`,
    }, edges);
  }

  // chip-card nodes (like _PersonNode's card LOD)
  for (const p of people) {
    const pt = pos.get(p.id);
    const isFocal = p.id === focalId;
    const g = el('g', {
      class: `node${isFocal ? ' is-ego' : ''}${p.deceased ? ' dead' : ''}` +
        `${p.id === lastAddedId ? ' is-new' : ''}`,
      transform: `translate(${pt.x}, ${pt.y})`,
      'data-id': p.id,
    }, nodes);
    el('rect', { class: 'body', width: NW, height: NH, rx: 12 }, g);
    const fo = el('g', { transform: 'translate(10, 10)' }, g);
    fo.innerHTML = avatarSvg(p, 36, 'n');
    const name = el('text', { class: 'name', x: 54, y: 25 }, g);
    fitText(name, displayName(p));
    const kinLabel = isFocal ? null : kinTerm(relationKey(focal, p));
    const years = p.deceased || p.birthY == null ? '' : `${p.birthY}–`;
    const subText = [kinLabel, years].filter(Boolean).join(' · ');
    if (subText) {
      const sub = el('text', {
        class: `sub${kinLabel ? '' : ' no-kin'}`, x: 54, y: 42,
      }, g);
      // prefer dropping the years over chopping the kin term mid-word
      sub.textContent = subText;
      if (sub.getComputedTextLength() > TEXT_MAX) {
        fitText(sub, kinLabel && years ? kinLabel : subText);
      }
    }
  }
  lastAddedId = null;
}

/* --------------------------- pan / zoom --------------------------- */

/* Pointer capture retargets derived clicks to the canvas, so taps are
   detected here from the pointerdown target — not with node listeners. */
let panMoved = false;
let tapNode = null;
let downPt = null;
const pointers = new Map();
let pinchBase = null;

function svgPoint(e) {
  const pt = tree.createSVGPoint();
  pt.x = e.clientX; pt.y = e.clientY;
  return pt.matrixTransform(tree.getScreenCTM().inverse());
}

tree.addEventListener('pointerdown', (e) => {
  try { tree.setPointerCapture(e.pointerId); } catch { /* synthetic event */ }
  const pt = svgPoint(e);
  pointers.set(e.pointerId, pt);
  if (pointers.size === 1) {
    panMoved = false;
    downPt = pt;
    tapNode = e.target.closest ? e.target.closest('.node') : null;
  } else {
    tapNode = null;
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchBase = { d: Math.hypot(a.x - b.x, a.y - b.y), k: view.k };
    }
  }
});
tree.addEventListener('pointermove', (e) => {
  if (!pointers.has(e.pointerId)) return;
  const prev = pointers.get(e.pointerId);
  const cur = svgPoint(e);
  pointers.set(e.pointerId, cur);
  if (pointers.size === 1) {
    if (downPt && Math.hypot(cur.x - downPt.x, cur.y - downPt.y) > 5) {
      panMoved = true;
    }
    view.x += cur.x - prev.x;
    view.y += cur.y - prev.y;
    applyView();
  } else if (pointers.size === 2 && pinchBase) {
    panMoved = true;
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    zoomAt(mid, (pinchBase.k * d / pinchBase.d) / view.k);
  }
});
const endPointer = (e) => {
  if (e.type === 'pointerup' && pointers.size === 1 && !panMoved && tapNode) {
    const p = byId(Number(tapNode.dataset.id));
    if (p) { hideHint(); openCard(p); }
  }
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinchBase = null;
  tapNode = null;
};
tree.addEventListener('pointerup', endPointer);
tree.addEventListener('pointercancel', endPointer);

tree.addEventListener('wheel', (e) => {
  e.preventDefault();
  zoomAt(svgPoint(e), Math.pow(1.0015, -e.deltaY));
}, { passive: false });

function zoomAt(pt, factor) {
  const k = Math.min(2.6, Math.max(0.25, view.k * factor));
  const f = k / view.k;
  view.x = pt.x - (pt.x - view.x) * f;
  view.y = pt.y - (pt.y - view.y) * f;
  view.k = k;
  applyView();
}


/* ---------------- trading-card dialog + action chips ---------------- */

const overlay = document.getElementById('simOverlay');
const hint = document.getElementById('phoneHint');
function hideHint() { if (hint) hint.style.display = 'none'; }

function lifespan(p) {
  if (p.deceased) return `${p.birthY ?? '?'}–${p.deathY ?? '?'}`;
  return p.birthY != null ? `${p.birthY}–` : '';
}

function openCard(p) {
  selectedId = p.id;
  const focal = byId(focalId);
  const isFocal = p.id === focalId;
  document.getElementById('tcWatermark').textContent = p.family;
  document.getElementById('tcAvatar').innerHTML = avatarSvg(p, 108, 'c');
  document.getElementById('tcKin').textContent =
    isFocal ? '' : kinTerm(relationKey(focal, p));
  document.getElementById('tcSeal').textContent = p.family;
  document.getElementById('tcName').textContent = displayName(p);
  document.getElementById('tcYears').textContent = lifespan(p);
  document.getElementById('tcPlace').textContent = displayPlace(p) || '';
  document.getElementById('tcDot').className = `tc-dot${p.deceased ? ' dead' : ''}`;
  document.getElementById('tcPortrait').style.setProperty('--tc-life',
    p.deceased ? 'rgba(138,129,119,.30)' : 'rgba(95,132,104,.30)');
  document.getElementById('chipRefocus').style.display = isFocal ? 'none' : '';
  overlay.hidden = false;
}

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) { overlay.hidden = true; selectedId = null; }
});
document.getElementById('chipRefocus').addEventListener('click', () => {
  focalId = selectedId;
  overlay.hidden = true;
  renderTree();
});
document.getElementById('chipExpand').addEventListener('click', () => {
  const p = byId(selectedId);
  overlay.hidden = true;
  if (p) openGallery(p);
});
// Editing the family is the app's job — the demo only shows it off.
document.getElementById('chipDelete').addEventListener('click', () => {
  overlay.hidden = true;
  showToast(t('tryInApp'));
});
document.getElementById('chipAdd').addEventListener('click', () => {
  overlay.hidden = true;
  showToast(t('tryInApp'));
});

/* ---------- person page (展开): the app's second tap, mocked ---------- */

const gallery = document.getElementById('simGallery');

function zodiacOf(year) {
  return t('zodiac')[(((year - 1900) % 12) + 12) % 12];
}

function openGallery(p) {
  const focal = byId(focalId);
  const isFocal = p.id === focalId;
  document.getElementById('gTitle').textContent = displayName(p);
  document.getElementById('gAvatar').innerHTML = avatarSvg(p, 76, 'g');
  document.getElementById('gName').textContent = displayName(p);
  document.getElementById('gKin').textContent =
    isFocal ? t('meBadge') : kinTerm(relationKey(focal, p));
  document.getElementById('gYears').textContent = lifespan(p);
  document.getElementById('gPlace').textContent = displayPlace(p) || '';
  document.getElementById('gZodiac').textContent =
    p.birthY != null ? zodiacOf(p.birthY) : '—';
  // 回声: the demo derives the same-zodiac echo; the app finds many more
  // (star sign, birth month, trade…).
  const echoes = document.getElementById('gEchoes');
  const sameZodiac = !isFocal && p.birthY != null && focal.birthY != null &&
    (((p.birthY - focal.birthY) % 12) + 12) % 12 === 0;
  echoes.hidden = !sameZodiac;
  if (sameZodiac) {
    echoes.innerHTML =
      `<span class="g-echo-label">${t('gEchoes')}</span>` +
      `<span class="g-echo-chip">✦ ${t('echoZodiac')
        .replace('{z}', zodiacOf(p.birthY))}</span>`;
  }
  gallery.hidden = false;
  gallery.querySelector('.g-scroll').scrollTop = 0;
}

document.getElementById('gBack').addEventListener('click', () => {
  gallery.hidden = true;
});
gallery.addEventListener('click', (e) => {
  if (e.target.closest('[data-try]')) showToast(t('tryInApp'));
});

/* ----------------------------- toast ----------------------------- */

const toast = document.getElementById('simToast');
let toastTimer = null;
function showToast(msg) {
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3200);
}

/* ---------------- canvas FABs (recenter / zoom) ---------------- */

document.getElementById('fabCenter').addEventListener('click', () => {
  fitView(layoutTree());
});
document.getElementById('fabZoomIn').addEventListener('click', () => {
  zoomAt({ x: 195, y: 307 }, 1.3);
});
document.getElementById('fabZoomOut').addEventListener('click', () => {
  zoomAt({ x: 195, y: 307 }, 1 / 1.3);
});

/* tapping the trading card itself = the app's second tap → person page */
document.getElementById('tradingCard').addEventListener('click', () => {
  const p = byId(selectedId);
  overlay.hidden = true;
  if (p) openGallery(p);
});

/* ------------------------- style switcher ------------------------- */

document.getElementById('styleDots').addEventListener('click', (e) => {
  const dot = e.target.closest('.dot');
  if (!dot) return;
  phone.dataset.style = dot.dataset.style;
  document.querySelectorAll('#styleDots .dot').forEach((d) =>
    d.classList.toggle('is-on', d === dot));
});

/* ------------------------------ boot ------------------------------ */

applyLang();
fitView(layoutTree());
