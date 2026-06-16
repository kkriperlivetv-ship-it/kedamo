import { useState } from 'react';
import { FiPlay, FiPause, FiVideo, FiImage } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import Plasma from './components/Plasma.jsx';
import CardNav from './components/CardNav.jsx';
import Player from './components/Player.jsx';
import { games, songs, socials, galleryVideos, galleryPhotos } from './data.js';
import './App.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goTo = (e, id) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const playSong = idx => {
    if (idx === currentIndex) {
      setIsPlaying(p => !p);
    } else {
      setCurrentIndex(idx);
      setIsPlaying(true);
    }
  };

  const navItems = [
    {
      label: 'Игры',
      bgColor: '#161616',
      textColor: '#fff',
      links: games.map(g => ({ label: g.name, href: '#games', ariaLabel: g.name }))
    },
    {
      label: 'Музыка',
      bgColor: '#161616',
      textColor: '#fff',
      links: songs.map(s => ({ label: `${s.artist} — ${s.title}`, href: '#music', ariaLabel: s.title }))
    },
    {
      label: 'Контакты',
      bgColor: '#161616',
      textColor: '#fff',
      links: socials.map(s => ({ label: s.name, href: s.href, ariaLabel: s.name }))
    }
  ];

  return (
    <div className="app">
      <div className="bg">
        <Plasma color="#ffffff" speed={0.7} direction="forward" scale={1.1} opacity={0.55} mouseInteractive />
        <div className="bg__vignette" />
      </div>

      <CardNav
        logo="/assets/avatars/Kedamo.jpg"
        logoAlt="Kedamo"
        items={navItems}
        baseColor="rgba(10,10,10,0.7)"
        menuColor="#fff"
        buttonBgColor="#fff"
        buttonTextColor="#000"
        ctaLabel="Галерея"
        ctaHref="#gallery"
        ctaOnClick={e => goTo(e, 'gallery')}
      />

      <main className="scroll">
        {/* ---------- PAGE 1 ---------- */}
        <section className="page" id="top">
          <div className="hero">
            <div className="hero__avatar-wrap">
              <img className="hero__avatar" src="/assets/avatars/Kedamo.jpg" alt="Kedamo" />
            </div>
            <h1 className="hero__name">Kedamo</h1>
            <p className="hero__sub">the stars collide</p>
          </div>

          <div className="cards">
            {/* GAMES */}
            <article className="card card--games" id="games">
              <header className="card__head">
                <h2 className="card__title">Игры</h2>
                <span className="card__count">{games.length}</span>
              </header>
              <ul className="games">
                {games.map(g => (
                  <li className="game" key={g.name}>
                    <span className="game__icon">
                      <img src={g.icon} alt={g.name} />
                    </span>
                    <span className="game__text">
                      <span className="game__name">{g.name}</span>
                      <span className="game__tag">{g.tag}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* SONGS */}
            <article className="card card--music" id="music">
              <header className="card__head">
                <h2 className="card__title">Музыка</h2>
                <span className="card__count">{songs.length}</span>
              </header>
              <ul className="songs">
                {songs.map((s, i) => {
                  const active = i === currentIndex;
                  const playingThis = active && isPlaying;
                  return (
                    <li
                      className={`song ${active ? 'song--active' : ''}`}
                      key={s.title}
                      onClick={() => playSong(i)}
                    >
                      <span className="song__cover">
                        <img src={s.cover} alt={s.artist} />
                        <span className="song__play">{playingThis ? <FiPause /> : <FiPlay />}</span>
                      </span>
                      <span className="song__text">
                        <span className="song__title">{s.title}</span>
                        <span className="song__artist">{s.artist}</span>
                      </span>
                      {playingThis && (
                        <span className="song__eq" aria-hidden="true">
                          <i></i><i></i><i></i><i></i>
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </article>

            {/* SOCIALS */}
            <article className="card card--social" id="social">
              <header className="card__head">
                <h2 className="card__title">Соц. сети</h2>
                <span className="card__count">{socials.length}</span>
              </header>
              <div className="socials">
                {socials.map(s => (
                  <a className="social" key={s.name} href={s.href} target="_blank" rel="noreferrer">
                    <span className="social__logo">
                      <img src={s.logo} alt={s.name} />
                    </span>
                    <span className="social__text">
                      <span className="social__name">{s.name}</span>
                      <span className="social__handle">{s.handle}</span>
                    </span>
                    <GoArrowUpRight className="social__arrow" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          </div>

          <a className="scroll-hint" href="#gallery" onClick={e => goTo(e, 'gallery')}>
            <span>Галерея</span>
            <span className="scroll-hint__arrow">↓</span>
          </a>
        </section>

        {/* ---------- PAGE 2 ---------- */}
        <section className="page page--gallery" id="gallery">
          <div className="gallery-head">
            <h2 className="gallery-title">Галерея</h2>
            <p className="gallery-sub">Видео и скриншоты</p>
          </div>

          <div className="gallery-block">
            <h3 className="gallery-block__title"><FiVideo /> Видео</h3>
            <div className="grid">
              {galleryVideos.map((v, i) => (
                <figure className="cell" key={`v${i}`}>
                  <div className="cell__media cell__media--video">
                    {v.src ? (
                      <video src={v.src} controls />
                    ) : (
                      <span className="cell__placeholder"><FiVideo /></span>
                    )}
                  </div>
                  <figcaption className="cell__caption">{v.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="gallery-block">
            <h3 className="gallery-block__title"><FiImage /> Фото</h3>
            <div className="grid">
              {galleryPhotos.map((p, i) => (
                <figure className="cell" key={`p${i}`}>
                  <div className="cell__media cell__media--photo">
                    {p.src ? (
                      <img src={p.src} alt={p.caption} />
                    ) : (
                      <span className="cell__placeholder"><FiImage /></span>
                    )}
                  </div>
                  <figcaption className="cell__caption">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Player
        songs={songs}
        currentIndex={currentIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onChangeIndex={idx => {
          setCurrentIndex(idx);
          setIsPlaying(true);
        }}
      />
    </div>
  );
}
