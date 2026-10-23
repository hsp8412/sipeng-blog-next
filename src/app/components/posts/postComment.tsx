"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PostComment = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use the native embed: the React wrapper does not support React 19.
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", "hsp8412/utterances-comments");
    script.setAttribute("theme", "github-light");
    script.setAttribute("issue-term", "pathname");
    container.appendChild(script);

    return () => container.replaceChildren();
  }, [pathname]);

  return <div ref={containerRef} className="w-full xl:w-9/12 mt-10" />;
};

export default PostComment;
