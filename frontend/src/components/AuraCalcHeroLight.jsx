import React from 'react';

const AuraCalcHeroLight = () => {
  return (
    <svg width="100%" viewBox="0 0 680 400" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>AuraCalc light mode hero illustration</title>
      <desc>A floating 3D-style calculator gem surrounded by glowing aura rings and floating math particles on a soft warm background</desc>
      <defs>
        <radialGradient id="bg-light" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#F0EAFB" />
        </radialGradient>
        <radialGradient id="gem-face" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#DDD6FB" />
          <stop offset="100%" stopColor="#7F77DD" />
        </radialGradient>
        <radialGradient id="gem-side" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#AFA9EC" />
          <stop offset="100%" stopColor="#3C3489" />
        </radialGradient>
        <radialGradient id="gem-bottom" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#534AB7" />
          <stop offset="100%" stopColor="#26215C" />
        </radialGradient>
        <radialGradient id="aura1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F77DD" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7F77DD" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="aura2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF9F27" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#EF9F27" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="soft-shadow">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#534AB7" floodOpacity="0.22" />
        </filter>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-10px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes spin-rev {
            from { transform: rotate(0deg); }
            to   { transform: rotate(-360deg); }
          }
          @keyframes pulse-aura {
            0%, 100% { opacity: 0.6; }
            50%       { opacity: 1; }
          }
          @keyframes particle-float {
            0%   { transform: translateY(0) translateX(0); }
            50%  { transform: translateY(-8px) translateX(4px); }
            100% { transform: translateY(0) translateX(0); }
          }
          @media (prefers-reduced-motion: no-preference) {
            #gem-group   { animation: float 3.5s ease-in-out infinite; transform-origin: 340px 195px; }
            #ring1       { animation: spin-slow 12s linear infinite; transform-origin: 340px 195px; }
            #ring2       { animation: spin-rev 9s linear infinite; transform-origin: 340px 195px; }
            .p1          { animation: particle-float 3.2s ease-in-out infinite; }
            .p2          { animation: particle-float 4.1s ease-in-out infinite 0.6s; }
            .p3          { animation: particle-float 2.8s ease-in-out infinite 1.2s; }
            .p4          { animation: particle-float 3.7s ease-in-out infinite 0.3s; }
            #aura-pulse  { animation: pulse-aura 3s ease-in-out infinite; }
          }
        `}</style>
      </defs>

      {/* Background */}
      <rect width="680" height="400" fill="url(#bg-light)" rx="16" />

      {/* Soft aura glow behind gem */}
      <ellipse id="aura-pulse" cx="340" cy="210" rx="140" ry="90" fill="url(#aura1)" />
      <ellipse cx="340" cy="210" rx="100" ry="65" fill="url(#aura2)" opacity="0.6" />

      {/* Spinning rings */}
      <g id="ring1">
        <ellipse cx="340" cy="195" rx="155" ry="50" fill="none" stroke="#7F77DD" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.35" />
        <circle cx="340" cy="145" r="5" fill="#7F77DD" opacity="0.7" />
        <circle cx="495" cy="195" r="3.5" fill="#AFA9EC" opacity="0.6" />
      </g>
      <g id="ring2">
        <ellipse cx="340" cy="195" rx="185" ry="62" fill="none" stroke="#EF9F27" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.25" />
        <circle cx="340" cy="133" r="4" fill="#EF9F27" opacity="0.5" />
        <circle cx="155" cy="195" r="3" fill="#BA7517" opacity="0.5" />
      </g>

      {/* Shadow under gem */}
      <ellipse cx="340" cy="310" rx="76" ry="14" fill="#7F77DD" opacity="0.12" />

      {/* Main 3D Gem */}
      <g id="gem-group" filter="url(#soft-shadow)">
        <polygon points="340,288 266,220 414,220" fill="url(#gem-bottom)" opacity="0.95" />
        <polygon points="266,220 266,130 340,105 340,288" fill="url(#gem-side)" opacity="0.9" />
        <polygon points="414,220 414,130 340,105 340,288" fill="#534AB7" opacity="0.75" />
        <polygon points="266,130 414,130 340,105" fill="url(#gem-face)" opacity="0.98" />
        <polygon points="295,128 385,128 340,110" fill="#FFFFFF" opacity="0.45" />
        <ellipse cx="320" cy="150" rx="22" ry="11" fill="url(#glow-center)" opacity="0.55" transform="rotate(-18,320,150)" />
        <line x1="300" y1="130" x2="325" y2="108" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.3" />
        <line x1="325" y1="130" x2="338" y2="107" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.3" />
        <line x1="350" y1="130" x2="345" y2="107" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.3" />
        <line x1="375" y1="130" x2="356" y2="108" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.3" />
        <line x1="285" y1="175" x2="400" y2="175" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.2" />
        <line x1="272" y1="205" x2="410" y2="205" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />
      </g>

      {/* Floating math symbols */}
      <g className="p1">
        <rect x="128" y="118" width="34" height="34" rx="8" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="1" />
        <text x="145" y="141" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#534AB7">+</text>
      </g>
      <g className="p2">
        <rect x="510" y="98" width="34" height="34" rx="8" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="1" />
        <text x="527" y="121" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#BA7517">÷</text>
      </g>
      <g className="p3">
        <rect x="94" y="240" width="34" height="34" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="1" />
        <text x="111" y="263" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#0F6E56">×</text>
      </g>
      <g className="p4">
        <rect x="538" y="238" width="34" height="34" rx="8" fill="#FBEAF0" stroke="#D4537E" strokeWidth="1" />
        <text x="555" y="261" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#993556">−</text>
      </g>

      {/* Ambient dots */}
      <circle cx="175" cy="175" r="3.5" fill="#7F77DD" opacity="0.4" />
      <circle cx="185" cy="292" r="2.5" fill="#EF9F27" opacity="0.5" />
      <circle cx="490" cy="158" r="4" fill="#1D9E75" opacity="0.35" />
      <circle cx="480" cy="290" r="2.5" fill="#534AB7" opacity="0.4" />
      <circle cx="230" cy="340" r="3" fill="#D4537E" opacity="0.3" />
      <circle cx="445" cy="335" r="3" fill="#AFA9EC" opacity="0.4" />

      {/* Label */}
      <text x="340" y="360" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="13" fontWeight="400" fill="#534AB7" opacity="0.7" letterSpacing="3">AURACALC</text>
    </svg>
  );
};

export default AuraCalcHeroLight;
