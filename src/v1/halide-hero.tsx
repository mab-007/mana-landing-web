import { useEffect, useRef } from "react";

/**
 * Dark, industrial 3D-parallax hero (inspired by the "Halide topo" concept).
 * The 3D centerpiece is the MANA debit card; mouse moves it with depth parallax,
 * and it tilts into view on load.
 */
export function HalideHero() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      canvas.style.transform = `rotateX(${20 + y / 2}deg) rotateZ(${-16 + x / 2}deg)`;
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 26;
        const moveX = x * (index + 1) * 0.25;
        const moveY = y * (index + 1) * 0.25;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // entrance animation
    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(90deg) rotateZ(0deg) scale(0.85)";
    const t = setTimeout(() => {
      canvas.style.transition = "all 2.2s cubic-bezier(0.16, 1, 0.3, 1)";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(20deg) rotateZ(-16deg) scale(1)";
    }, 250);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(t);
    };
  }, []);

  const setLayer = (i: number) => (el: HTMLDivElement | null) => {
    if (el) layersRef.current[i] = el;
  };

  return (
    <section className="v1hero">
      <style>{styles}</style>

      {/* grain */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden>
        <filter id="v1grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div className="grain" style={{ filter: "url(#v1grain)" }} aria-hidden />

      {/* 3D card stage */}
      <div className="viewport" aria-hidden>
        <div className="canvas-3d" ref={canvasRef}>
          <div className="contours" />

          {/* the MANA debit card */}
          <div className="layer card" ref={setLayer(0)}>
            <div className="card-top">
              <span className="card-brand">Mana</span>
              <span className="card-dot" />
            </div>
            <div className="card-chip" />
            <div className="card-bottom">
              <div className="card-number">5421 •••• •••• 4521</div>
              <div className="card-row">
                <span>MARIA SANTOS</span>
                <span className="card-scheme">
                  <i /> <i />
                </span>
              </div>
            </div>
          </div>

          {/* floating depth chips */}
          <div className="layer chip chip-balance" ref={setLayer(1)}>
            <span className="chip-label">USD WALLET</span>
            <span className="chip-value">$1,247.50</span>
          </div>
          <div className="layer chip chip-send" ref={setLayer(2)}>
            ↗ Sent to Mom · ₱11,148
          </div>
        </div>
      </div>

      {/* interface grid */}
      <div className="grid">
        <div className="grid-top">
          <div className="brand">
            <span className="brand-mark">▲</span> MANA
          </div>
          <div className="coords">
            <div>MANILA · 14.5995° N</div>
            <div>CORRIDOR: US → PH</div>
            <div>RATE 1.00 = ₱55.74</div>
          </div>
        </div>

        <h1 className="hero-title">
          SEND HOME
          <br />
          FREE.
        </h1>

        <div className="grid-bottom">
          <div className="meta">
            <p>[ EARLY ACCESS · 2026 ]</p>
            <p>STABLECOIN NEOBANK · BUILT FOR OFWS</p>
          </div>
          <a href="#join" className="cta">
            GET THE APP
          </a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden />
    </section>
  );
}

const styles = `
.v1hero {
  position: relative;
  height: 100vh;
  min-height: 640px;
  width: 100%;
  overflow: hidden;
  background: #0b0b0c;
  color: #e8e6e1;
  font-family: 'Manrope', sans-serif;
}
.v1hero .grain { position: absolute; inset: 0; pointer-events: none; z-index: 30; opacity: 0.16; }

.v1hero .viewport {
  position: absolute; inset: 0;
  perspective: 2000px;
  display: flex; align-items: center; justify-content: center;
}
.v1hero .canvas-3d {
  position: relative;
  width: 540px; height: 340px; max-width: 82vw;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.v1hero .layer { position: absolute; inset: 0; transition: transform 0.4s ease; }

.v1hero .contours {
  position: absolute; width: 220%; height: 220%; top: -60%; left: -60%;
  background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 36px, rgba(232,93,44,0.10) 37px, transparent 39px);
  transform: translateZ(-30px);
  pointer-events: none;
}

.v1hero .card {
  border-radius: 20px;
  background: linear-gradient(145deg, #2b2b30 0%, #131316 55%, #0d0d0f 100%);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 50px 90px -25px rgba(0,0,0,0.85);
  padding: 26px 28px;
  display: flex; flex-direction: column; justify-content: space-between;
}
.v1hero .card-top { display: flex; align-items: center; justify-content: space-between; }
.v1hero .card-brand { font-family: 'Fraunces', serif; font-size: 1.6rem; font-weight: 600; color: #fff; }
.v1hero .card-dot { width: 14px; height: 14px; border-radius: 999px; background: #E85D2C; box-shadow: 0 0 18px rgba(232,93,44,0.8); }
.v1hero .card-chip { width: 46px; height: 34px; border-radius: 7px; background: linear-gradient(135deg, #d9b15f, #a87f33); }
.v1hero .card-bottom { display: flex; flex-direction: column; gap: 10px; }
.v1hero .card-number { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.18em; font-size: 1.05rem; color: #d8d6d1; }
.v1hero .card-row { display: flex; align-items: center; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; color: #9a9893; }
.v1hero .card-scheme { display: inline-flex; }
.v1hero .card-scheme i { width: 22px; height: 22px; border-radius: 999px; display: inline-block; }
.v1hero .card-scheme i:first-child { background: #E85D2C; }
.v1hero .card-scheme i:last-child { background: rgba(255,255,255,0.55); margin-left: -9px; }

.v1hero .chip {
  inset: auto; width: max-content; height: max-content;
  background: rgba(20,20,22,0.7);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  border-radius: 12px; padding: 10px 14px;
}
.v1hero .chip-balance { top: -34px; right: -28px; display: flex; flex-direction: column; }
.v1hero .chip-label { font-family: 'JetBrains Mono', monospace; font-size: 0.55rem; letter-spacing: 0.15em; color: #8a8884; }
.v1hero .chip-value { font-weight: 700; font-size: 1.05rem; color: #fff; }
.v1hero .chip-send { bottom: -26px; left: -22px; font-size: 0.72rem; color: #E85D2C; font-weight: 600; }

.v1hero .grid {
  position: absolute; inset: 0; z-index: 20;
  padding: clamp(1.5rem, 4vw, 4rem);
  display: grid; grid-template-rows: auto 1fr auto;
  pointer-events: none;
}
.v1hero .grid a, .v1hero .grid button { pointer-events: auto; }
.v1hero .grid-top { display: flex; justify-content: space-between; align-items: flex-start; }
.v1hero .brand { font-weight: 700; letter-spacing: 0.18em; display: flex; align-items: center; gap: 0.5rem; }
.v1hero .brand-mark { color: #E85D2C; }
.v1hero .coords { text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 0.66rem; line-height: 1.5; color: #E85D2C; }

.v1hero .hero-title {
  align-self: center;
  font-family: 'Syncopate', sans-serif;
  font-weight: 700;
  font-size: clamp(2.6rem, 9vw, 8rem);
  line-height: 0.92;
  letter-spacing: -0.02em;
  mix-blend-mode: difference;
  color: #fff;
}

.v1hero .grid-bottom { display: flex; justify-content: space-between; align-items: flex-end; gap: 1rem; }
.v1hero .meta { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; line-height: 1.7; color: #b9b7b2; }
.v1hero .cta {
  background: #e8e6e1; color: #0b0b0c;
  padding: 0.95rem 1.9rem; font-weight: 700; letter-spacing: 0.06em; font-size: 0.85rem;
  text-decoration: none;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 86% 100%, 0 100%);
  transition: 0.3s;
}
.v1hero .cta:hover { background: #E85D2C; color: #fff; transform: translateY(-4px); }

.v1hero .scroll-hint {
  position: absolute; bottom: 1.5rem; left: 50%;
  width: 1px; height: 54px;
  background: linear-gradient(to bottom, #e8e6e1, transparent);
  animation: v1flow 2s infinite ease-in-out;
}
@keyframes v1flow {
  0%, 100% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
}

@media (max-width: 640px) {
  .v1hero .chip-balance { right: 0; }
  .v1hero .coords { font-size: 0.58rem; }
}
`;
