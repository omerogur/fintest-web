// DDoS görseline bindirilen saldırı haritası: dünyanın farklı noktalarından tek hedefe akan trafik.
const TARGET = { x: 1010, y: 505 };
const SOURCES = [
  [70, 330], [260, 160], [520, 90], [800, 40], [1180, 70], [1430, 170], [1560, 380],
  [1520, 690], [1260, 820], [640, 800], [300, 620], [140, 480],
];

function arc([sx, sy], i) {
  const mx = (sx + TARGET.x) / 2;
  const my = (sy + TARGET.y) / 2;
  const dist = Math.hypot(TARGET.x - sx, TARGET.y - sy);
  const lift = dist * (0.35 + (i % 3) * 0.08);
  return { d: `M${sx} ${sy} Q${mx} ${my - lift} ${TARGET.x} ${TARGET.y}`, delay: (i * 0.37) % 2.4 };
}

export default function AttackArcs({ className }) {
  const arcs = SOURCES.map(arc);
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="arc-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#fb923c" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ef4444" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="target-glow">
          <stop offset="0" stopColor="#f87171" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>

      {arcs.map((a, i) => (
        <g key={i}>
          <path d={a.d} fill="none" stroke="#f97316" strokeOpacity="0.32" strokeWidth="2.5" />
          <path
            d={a.d}
            fill="none"
            stroke="url(#arc-grad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            pathLength="100"
            className="attack-arc"
            style={{ animationDelay: `${a.delay}s` }}
          />
          <circle cx={SOURCES[i][0]} cy={SOURCES[i][1]} r="5" fill="#fdba74" className="attack-source" style={{ animationDelay: `${a.delay}s` }} />
        </g>
      ))}

      <circle cx={TARGET.x} cy={TARGET.y} r="90" fill="url(#target-glow)" className="attack-glow" />
      <circle cx={TARGET.x} cy={TARGET.y} r="14" fill="none" stroke="#fca5a5" strokeWidth="3" className="attack-ring" />
      <circle cx={TARGET.x} cy={TARGET.y} r="14" fill="none" stroke="#fca5a5" strokeWidth="3" className="attack-ring" style={{ animationDelay: '1s' }} />
      <circle cx={TARGET.x} cy={TARGET.y} r="8" fill="#fee2e2" />
    </svg>
  );
}
