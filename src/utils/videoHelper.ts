/**
 * Helper para detecção e geração de URLs de embed (YouTube, Vimeo, MP4 direto)
 */

export interface VideoSourceInfo {
  type: "youtube" | "vimeo" | "direct" | "none";
  embedUrl?: string;
  directSrc?: string;
  videoId?: string;
}

export function parseVideoSource(
  srcOrId?: string,
  options: { autoplay?: boolean; muted?: boolean; loop?: boolean; controls?: boolean } = {}
): VideoSourceInfo {
  if (!srcOrId || srcOrId.trim() === "") {
    return { type: "none" };
  }

  const clean = srcOrId.trim();
  const { autoplay = true, muted = false, loop = true, controls = true } = options;

  // 1. YouTube Shorts: https://www.youtube.com/shorts/VIDEO_ID
  const ytShortsMatch = clean.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (ytShortsMatch) {
    const videoId = ytShortsMatch[1];
    return {
      type: "youtube",
      videoId,
      embedUrl: buildYouTubeEmbedUrl(videoId, { autoplay, muted, loop, controls }),
    };
  }

  // 2. YouTube Padrão ou Encurtado (youtu.be / youtube.com/watch?v=)
  const ytMatch = clean.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  if (ytMatch) {
    const videoId = ytMatch[1];
    return {
      type: "youtube",
      videoId,
      embedUrl: buildYouTubeEmbedUrl(videoId, { autoplay, muted, loop, controls }),
    };
  }

  // 3. YouTube Embed já formatado
  if (clean.includes("youtube.com/embed/")) {
    return {
      type: "youtube",
      embedUrl: clean,
    };
  }

  // 4. Vimeo
  const vimeoMatch = clean.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
  if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      muted: muted ? "1" : "0",
      loop: loop ? "1" : "0",
    });
    return {
      type: "vimeo",
      videoId,
      embedUrl: `https://player.vimeo.com/video/${videoId}?${params.toString()}`,
    };
  }

  // 5. Caso seja apenas o ID de 11 caracteres do YouTube (ex: "dQw4w9WgXcQ")
  if (/^[a-zA-Z0-9_-]{11}$/.test(clean)) {
    return {
      type: "youtube",
      videoId: clean,
      embedUrl: buildYouTubeEmbedUrl(clean, { autoplay, muted, loop, controls }),
    };
  }

  // 6. Arquivo direto (.mp4, .webm, ou caminho local)
  return {
    type: "direct",
    directSrc: clean,
  };
}

function buildYouTubeEmbedUrl(
  videoId: string,
  options: { autoplay?: boolean; muted?: boolean; loop?: boolean; controls?: boolean }
): string {
  const params = new URLSearchParams();
  if (options.autoplay) params.set("autoplay", "1");
  if (options.muted) params.set("mute", "1");
  if (options.loop) {
    params.set("loop", "1");
    params.set("playlist", videoId);
  }
  if (!options.controls) params.set("controls", "0");
  params.set("rel", "0");
  params.set("modestbranding", "1");
  params.set("playsinline", "1");

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
