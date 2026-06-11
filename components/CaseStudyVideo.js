import { useEffect, useRef, useState } from 'react';
import { HiPlay, HiPause, HiSpeakerWave, HiSpeakerXMark, HiArrowsPointingOut, HiXMark } from 'react-icons/hi2';

const CaseStudyVideo = ({ src, poster, title, aspectRatio = '16/9' }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!src || !videoRef.current || !containerRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [src]);

  useEffect(() => {
    if (isFullscreen && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {});
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    setHasInteracted(true);
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const openFullscreen = (e) => {
    e.stopPropagation();
    videoRef.current?.pause();
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    modalVideoRef.current?.pause();
    setIsFullscreen(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        className='relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm group'
        style={{ aspectRatio }}
      >
        {src ? (
          <>
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              muted={isMuted}
              loop
              playsInline
              preload='metadata'
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={togglePlay}
              className='w-full h-full object-cover cursor-pointer'
            />
            {/* play/pause overlay */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                isPlaying && hasInteracted ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
            >
              <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 flex items-center justify-center text-white text-3xl shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110'>
                {isPlaying ? <HiPause /> : <HiPlay className='translate-x-0.5' />}
              </div>
            </button>
            {/* enlarge button */}
            <button
              onClick={openFullscreen}
              aria-label='Enlarge video'
              className='absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-accent text-white flex items-center justify-center text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10'
            >
              <HiArrowsPointingOut />
            </button>
            {/* mute toggle */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className='absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-accent text-white flex items-center justify-center text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10'
            >
              {isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
            </button>
            {/* title bar */}
            {title && (
              <div className='absolute top-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-b from-black/70 to-transparent text-sm sm:text-base font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                {title}
              </div>
            )}
          </>
        ) : (
          <div className='absolute inset-0 flex flex-col items-center justify-center text-white/40 gap-2'>
            {poster ? (
              <img
                src={poster}
                alt={title || ''}
                className='absolute inset-0 w-full h-full object-cover opacity-50'
              />
            ) : null}
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center'>
              <div className='w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-2xl'>
                <HiPlay className='translate-x-0.5' />
              </div>
              <div className='text-xs sm:text-sm uppercase tracking-[2px]'>Demo video coming soon</div>
            </div>
          </div>
        )}
      </div>

      {/* fullscreen modal */}
      {isFullscreen && src && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8'
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            aria-label='Close fullscreen'
            className='absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center text-2xl transition-all duration-300 z-20'
          >
            <HiXMark />
          </button>
          <div
            className='relative w-full max-w-6xl flex flex-col items-center'
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div className='w-full text-center mb-3 text-sm sm:text-base font-medium text-white/80'>
                {title}
              </div>
            )}
            <video
              ref={modalVideoRef}
              src={src}
              poster={poster}
              muted={isMuted}
              loop
              playsInline
              controls
              className='w-full h-auto max-h-[80vh] rounded-2xl object-contain'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyVideo;
