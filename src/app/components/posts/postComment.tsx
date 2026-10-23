"use client";

import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";

const PostComment = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [loadedPath, setLoadedPath] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const frame = requestAnimationFrame(() => {
      if (cancelled || !container.isConnected) return;

      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("repo", "hsp8412/utterances-comments");
      script.setAttribute("theme", "github-light");
      script.setAttribute("issue-term", "pathname");

      container.appendChild(script);
    });

    // Observe when Utterances inserts its iframe.
    const observer = new MutationObserver(() => {
      const iframe = container.querySelector("iframe.utterances-frame");

      if (iframe) {
        iframe.addEventListener(
          "load",
          () => {
            if (!cancelled) {
              setLoadedPath(pathname);
            }
          },
          {once: true},
        );
        observer.disconnect();
      }
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      container.replaceChildren();
    };
  }, [pathname]);

  return (
    <div className="w-full me-auto">
      {loadedPath !== pathname && (
        <div
          className="flex flex-col items-center justify-center py-10 gap-3"
          role="status"
          aria-live="polite"
        >
          <div className="h-7 w-7 animate-spin rounded-full border-4 border-gray-200 border-t-blue-800" />
          <span className="text-sm text-gray-500">Loading comments...</span>
        </div>
      )}

      <div ref={containerRef} />
    </div>
  );
};

export default PostComment;
