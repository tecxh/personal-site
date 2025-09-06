export const Viz = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <svg viewBox="0 0 500 200" className="w-screen">
        {/* Main angular blob shape inspired by sound waves */}
        <path
          d="M50 100 L80 60 L120 140 L160 40 L200 120 L240 80 L280 160 L320 30 L360 110 L400 70 L440 150 L450 100 Z"
          fill="oklch(0.833 0.145 321.434)"
          opacity="0.8"
        />

        {/* Secondary wave layer */}
        <path
          d="M60 100 L90 80 L130 130 L170 50 L210 110 L250 90 L290 150 L330 40 L370 100 L410 80 L440 140 L460 100 Z"
          fill="oklch(0.74 0.238 322.16)"
          opacity="0.6"
        />

        {/* Inner angular details */}
        <path
          d="M100 100 L130 85 L160 115 L190 75 L220 105 L250 95 L280 125 L310 85 L340 105 L370 100 Z"
          fill="#f9a8d4"
          opacity="0.7"
        />
      </svg>
    </div>
  )
}