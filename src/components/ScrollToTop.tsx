import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
        else window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
