import { useEffect, useRef, useState } from 'react';
import {
  FiPlay,
  FiPause,
  FiSkipBack,
  FiSkipForward,
  FiVolume2,
  FiVolume1,
  FiVolumeX
} from 'react-icons/fi';
import './Player.css';

const fmt = sec => {
  if (!sec || Number.isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const Player = ({ songs, currentIndex, isPlaying, setIsPlaying, onChangeIndex }) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [mounted, setMounted] = useState(false);

  const song = songs[currentIndex];

  // smooth fade-in once on load
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(t);
  }, []);

  // react to play/pause + track change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIndex, setIsPlaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) setProgress(audio.currentTime);
  };

  const onLoaded = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
      audio.volume = volume;
      if (isPlaying) audio.play().catch(() => {});
    }
  };

  const seek = e => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const time = Number(e.target.value);
    audio.currentTime = time;
    setProgress(time);
  };

  const next = () => onChangeIndex((currentIndex + 1) % songs.length);
  const prev = () => onChangeIndex((currentIndex - 1 + songs.length) % songs.length);

  const togglePlay = () => setIsPlaying(p => !p);

  const VolIcon = volume === 0 ? FiVolumeX : volume < 0.5 ? FiVolume1 : FiVolume2;

  const pct = duration ? (progress / duration) * 100 : 0;
  const volPct = volume * 100;

  return (
    <div className={`player ${mounted ? 'player--in' : ''}`}>
      <audio
        ref={audioRef}
        src={song?.src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoaded}
        onEnded={next}
        preload="metadata"
      />

      <div className="player__controls">
        <button className="player__btn" onClick={prev} aria-label="Назад">
          <FiSkipBack />
        </button>
        <button className="player__btn player__btn--main" onClick={togglePlay} aria-label="Play/Pause">
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>
        <button className="player__btn" onClick={next} aria-label="Вперёд">
          <FiSkipForward />
        </button>
      </div>

      <div className="player__seek">
        <span className="player__time">{fmt(progress)}</span>
        <input
          type="range"
          className="player__range"
          min={0}
          max={duration || 0}
          step="0.1"
          value={progress}
          onChange={seek}
          style={{ '--fill': `${pct}%` }}
          aria-label="Перемотка"
        />
        <span className="player__time">{fmt(duration)}</span>
      </div>

      <div className="player__volume">
        <VolIcon className="player__vol-icon" />
        <input
          type="range"
          className="player__range player__range--vol"
          min={0}
          max={1}
          step="0.01"
          value={volume}
          onChange={e => setVolume(Number(e.target.value))}
          style={{ '--fill': `${volPct}%` }}
          aria-label="Громкость"
        />
      </div>

      <div className="player__meta">
        <div className="player__meta-text">
          <span className="player__title">{song?.title}</span>
          <span className="player__artist">{song?.artist}</span>
        </div>
        <img className="player__cover" src={song?.cover} alt={song?.artist} />
      </div>
    </div>
  );
};

export default Player;
