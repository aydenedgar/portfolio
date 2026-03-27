const players = document.querySelectorAll('.hls-player');

    players.forEach(video => {
      const source = video.getAttribute('data-source');

      // Safari / iOS: native HLS support
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;

      // Other browsers: use hls.js
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
      } else {
        console.error('HLS not supported in this browser for', source);
      }
    });