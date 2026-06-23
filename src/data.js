export const games = [
  { name: 'Dead by Daylight', icon: '/assets/icons/deadbydaylight.svg', tag: 'жесткий хоррорец(разорвет очко)' },
  { name: 'Counter-Strike 2', icon: '/assets/icons/counterstrike.svg', tag: 'просьба не начинать играть' },
  { name: 'Valorant', icon: '/assets/icons/valorant.svg', tag: 'я не гей, отвечаю' },
  { name: 'Roblox', icon: '/assets/icons/roblox.svg', tag: 'не, я реально не гей' }
];

// theme — оттенок (hex), под который перекрашивается сайт при выборе трека.
export const songs = [
  {
    title: 'Клей',
    artist: 'CUPSIZE',
    cover: '/assets/avatars/CUPSIZE.jpg',
    src: '/music/SpotiDown.App - Клей - CUPSIZE.mp3',
    theme: '#ffffff'
  },
  {
    title: 'SOLO',
    artist: 'elox1m',
    cover: '/assets/avatars/elox1m.jpg',
    src: '/music/elox1m-solo.mp3',
    theme: '#5f3702'
  },
  {
    title: 'Night Club',
    artist: 'FORTUNA812',
    cover: '/assets/avatars/fortuna812.jpg',
    src: '/music/fortuna812-nightclub.mp3',
    theme: '#17af24'
  },
  {
    title: 'Свалка',
    artist: 'темный принц',
    cover: '/assets/avatars/tjomnyj-princ.jpg',
    src: '/music/tjomnyj-princ-svalka.mp3',
    theme: '#3f3f3e'
  },
  {
    title: 'Мрак',
    artist: 'killaheelz',
    cover: '/assets/avatars/killaheelz.png',
    src: '/music/killaheelz-mrak.mp3',
    theme: '#3d2801'
  }
];

// Серверы в раскрывающемся меню (header).
// href — впиши сюда инвайт-ссылку на Discord-сервер (сейчас заглушки '#').
export const servers = [
  {
    name: 'Dead by Daylight RU',
    img: '/assets/servers/1.png',
    href: 'https://discord.gg/duRyUHfU9k',
    desc: 'Крупный русскоязычный DBD дискорд сервер для поиска команды как для игр в паблике, так и на турнирные мероприятия'
  },
  {
    name: 'Monolith',
    img: '/assets/servers/2.png',
    href: 'https://discord.gg/pwAcUVwZET',
    desc: 'Терновый венец эволюции'
  },
  {
    name: 'Aruku',
    img: '/assets/servers/3.png',
    href: 'https://discord.com/invite/aruku',
    desc: 'Комфортное общение'
  }
];

export const socials = [
  { name: 'Steam', handle: 'Kedamo', logo: '/assets/logo/steam-logo 1.svg', href: 'https://steamcommunity.com/profiles/76561199086500935/' },
  { name: 'Telegram', handle: '@goodyuikim', logo: '/assets/logo/telegram-logo 1.svg', href: 'https://t.me/goodyuikim' },
  { name: 'Spotify', handle: 'expired pills', logo: '/assets/logo/spotify-logo 1.svg', href: 'https://open.spotify.com/user/31cfua6572ryv4sfswuag7fz6hzi?si=d60caa0e9af541ba' },
  { name: 'Discord', handle: 'kedamo', logo: '/assets/logo/discord-logo 1.svg', href: 'https://discord.com/users/1479799017104998450' }
];

// Видео-галерея. Положи файлы в public/gallery/ и впиши путь в src.
// Пока src пустой ('') — показывается заглушка с иконкой.
export const galleryVideos = [
  { src: '/gallery/moment_1.mp4', caption: 'Все таки попался молодой' },
  { src: '/gallery/moment_2.mp4', caption: 'Kedamo Oni Chan' },
  { src: '/gallery/moment_3.mp4', caption: 'Ну нихуя он брекдансит' },
  { src: '/gallery/moment_4.mp4', caption: 'Пиздец.mp4' },
  { src: '/gallery/moment_5.mp4', caption: 'Он был всего лишь добрым малым' },
  { src: '/gallery/moment_6.mp4', caption: 'Осуждаю...' }
];

// Фото-галерея. Аналогично: положи картинки в public/gallery/ и впиши путь.
export const galleryPhotos = [
  { src: '/gallery/photo1.jpg', caption: 'топ 5 китайских подработок' },
  { src: '/gallery/photo2.png', caption: 'me роблакс' },
  { src: '/gallery/photo3.jpg', caption: 'Я и Сашка' },
  { src: '/gallery/photo4.jpg', caption: 'ставим лайк' },
  { src: '/gallery/photo5.jpg', caption: 'Ada Wong P100' },
  { src: '/gallery/photo6.jpg', caption: 'Steve Harrington P100' }
];
