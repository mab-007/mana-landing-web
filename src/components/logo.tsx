export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  // navy ink on light backgrounds, cream on dark backgrounds
  const ink = light ? "#FAF6EF" : "#0A1228";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 124 130" aria-label="Mana" className="h-7 w-auto">
        <path d="M16 100 L46 24 L76 100 Z" fill={ink} />
        <path d="M50 100 L80 38 L110 100 Z" fill="#E85D2C" />
        <path
          d="M6 108 L118 108"
          fill="none"
          stroke={ink}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M22 118 Q34 114 46 118 T70 118 T94 118"
          fill="none"
          stroke={ink}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <span
        className="font-serif text-2xl font-semibold tracking-tight"
        style={{ color: ink }}
      >
        Mana
      </span>
    </span>
  );
}
