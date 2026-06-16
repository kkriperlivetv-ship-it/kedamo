# Kedamo — сайт-визитка

Чёрно-белая визитка на React + Vite: анимированный плазма-фон, карточки (игры, музыка с плеером, соцсети), галерея видео и фото.

## Запуск

```bash
npm install
npm run dev
```

Сборка прод-версии:

```bash
npm run build
npm run preview
```

## Где менять контент

Почти всё — в [`src/data.js`](src/data.js): игры, треки, соцсети, галерея.
Медиа лежат в папке `public/` и доступны по пути от корня (например `public/music/x.mp3` → `/music/x.mp3`).

- Аватарка / ник — в [`src/App.jsx`](src/App.jsx)
- Фавикон — в [`index.html`](index.html)
- Музыка — `public/music/`
- Видео и фото галереи — `public/gallery/`

## Стек

React 18 · Vite 5 · GSAP · OGL (WebGL-фон) · react-icons
