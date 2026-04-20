import React from 'react';

const AuraCalcHeroDark = () => {
  return (
    <svg width="100%" viewBox="0 0 680 400" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>AuraCalc dark mode hero illustration</title>
      <desc>A glowing 3D crystal calculator floating in deep space with electric aura rings and neon math particles on a deep dark background</desc>
      <defs>
        <radialGradient id="bg-dark" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#1A1630" />
          <stop offset="100%" stopColor="#0B0A14" />
        </radialGradient>
        <radialGradient id="gem-face-d" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#CECBF6" />
          <stop offset="100%" stopColor="#3C3489" />
        </radialGradient>
        <radialGradient id="gem-side-d" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#7F77DD" />
          <stop offset="100%" stopColor="#1A1640" />
        </radialGradient>
        <radialGradient id="gem-right-d" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#534AB7" />
          <stop offset="100%" stopColor="#0D0B22" />
        </radialGradient>
        <radialGradient id="gem-bottom-d" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#26215C" />
          <stop offset="100%" stopColor="#080712" />
        </radialGradient>
        <radialGradient id="aura-dark1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F77DD" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7F77DD" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="aura-dark2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF9F27" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EF9F27" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-d" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="gem-glow">
          <feDropShadow dx="0" dy="0" stdDeviation="22" floodColor="#7F77DD" floodOpacity="0.7" />
        </filter>
        <filter id="ring-glow">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#7F77DD" floodOpacity="0.6" />
        </filter>
        <filter id="particle-glow">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#FFFFFF" floodOpacity="0.4" />
        </filter>
        <style>{`
          @keyframes float-d {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-12px); }
          }
          @keyframes spin-d1 {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes spin-d2 {
            from { transform: rotate(0deg); }
            to   { transform: rotate(-360deg); }
          }
          @keyframes spin-d3 {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes pulse-d {
            0%, 100% { opacity: 0.55; }
            50%       { opacity: 1; }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50%       { opacity: 0.9; }
          }
          @keyframes pf1 {
            0%   { transform: translateY(0) translateX(0); }
            50%  { transform: translateY(-9px) translateX(5px); }
            100% { transform: translateY(0) translateX(0); }
          }
          @keyframes pf2 {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-7px); }
            100% { transform: translateY(0); }
          }
          @media (prefers-reduced-motion: no-preference) {
            #gem-d   { animation: float-d 3.8s ease-in-out infinite; transform-origin: 340px 195px; }
            #ring-d1 { animation: spin-d1 14s linear infinite; transform-origin: 340px 195px; }
            #ring-d2 { animation: spin-d2 10s linear infinite; transform-origin: 340px 195px; }
            #ring-d3 { animation: spin-d3 20s linear infinite; transform-origin: 340px 195px; }
            #aura-d  { animation: pulse-d 3.2s ease-in-out infinite; }
            .dp1     { animation: pf1 3.4s ease-in-out infinite; }
            .dp2     { animation: pf1 4.2s ease-in-out infinite 0.7s; }
            .dp3     { animation: pf2 2.9s ease-in-out infinite 1.1s; }
            .dp4     { animation: pf2 3.8s ease-in-out infinite 0.4s; }
            .star    { animation: twinkle var(--d, 2s) ease-in-out infinite var(--dl, 0s); }
          }
        `}</style>
      </defs>

      {/* Dark space background */}
      <rect width="680" height="400" fill="url(#bg-dark)" rx="16" />

      {/* Star field */}
      <circle cx="62"  cy="48"  r="1"   fill="#FFFFFF" className="star" style={{"--d":"2.1s","--dl":"0s"}}   opacity="0.6" />
      <circle cx="145" cy="82"  r="1.5" fill="#CECBF6" className="star" style={{"--d":"3.2s","--dl":"0.5s"}} opacity="0.5" />
      <circle cx="220" cy="30"  r="1"   fill="#FFFFFF" className="star" style={{"--d":"2.7s","--dl":"1s"}}   opacity="0.7" />
      <circle cx="490" cy="55"  r="1.5" fill="#FFFFFF" className="star" style={{"--d":"1.9s","--dl":"0.3s"}} opacity="0.55" />
      <circle cx="598" cy="38"  r="1"   fill="#CECBF6" className="star" style={{"--d":"3s",  "--dl":"0.8s"}} opacity="0.6" />
      <circle cx="625" cy="110" r="1.2" fill="#FFFFFF" className="star" style={{"--d":"2.4s","--dl":"1.4s"}} opacity="0.5" />
      <circle cx="78"  cy="310" r="1"   fill="#FFFFFF" className="star" style={{"--d":"3.5s","--dl":"0.2s"}} opacity="0.45" />
      <circle cx="600" cy="330" r="1.3" fill="#CECBF6" className="star" style={{"--d":"2.2s","--dl":"0.9s"}} opacity="0.5" />
      <circle cx="55"  cy="180" r="0.8" fill="#FFFFFF" className="star" style={{"--d":"2.8s","--dl":"1.6s"}} opacity="0.6" />
      <circle cx="635" cy="240" r="1"   fill="#FFFFFF" className="star" style={{"--d":"3.1s","--dl":"0.1s"}} opacity="0.55" />

      {/* Deep aura glow */}
      <ellipse id="aura-d" cx="340" cy="210" rx="160" ry="100" fill="url(#aura-dark1)" />
      <ellipse cx="340" cy="210" rx="100" ry="65" fill="url(#aura-dark2)" opacity="0.55" />

      {/* Spinning rings */}
      <g id="ring-d1" filter="url(#ring-glow)">
        <ellipse cx="340" cy="195" rx="155" ry="50" fill="none" stroke="#7F77DD" strokeWidth="1.5" strokeDasharray="7 5" opacity="0.55" />
        <circle cx="340" cy="145" r="5.5" fill="#AFA9EC" />
        <circle cx="495" cy="195" r="4" fill="#7F77DD" />
      </g>
      <g id="ring-d2">
        <ellipse cx="340" cy="195" rx="188" ry="63" fill="none" stroke="#EF9F27" strokeWidth="1" strokeDasharray="4 9" opacity="0.35" />
        <circle cx="340" cy="132" r="4" fill="#EF9F27" opacity="0.6" />
        <circle cx="152" cy="195" r="3" fill="#BA7517" opacity="0.6" />
      </g>
      <g id="ring-d3">
        <ellipse cx="340" cy="195" rx="122" ry="38" fill="none" stroke="#1D9E75" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.3" />
        <circle cx="340" cy="157" r="3" fill="#1D9E75" opacity="0.5" />
      </g>

      {/* Ground glow shadow */}
      <ellipse cx="340" cy="315" rx="72" ry="12" fill="#7F77DD" opacity="0.18" />

      {/* Main 3D Gem */}
      <g id="gem-d" filter="url(#gem-glow)">
        <polygon points="340,290 264,220 416,220" fill="url(#gem-bottom-d)" opacity="0.97" />
        <polygon points="264,220 264,130 340,104 340,290" fill="url(#gem-side-d)" opacity="0.92" />
        <polygon points="416,220 416,130 340,104 340,290" fill="url(#gem-right-d)" opacity="0.85" />
        <polygon points="264,130 416,130 340,104" fill="url(#gem-face-d)" opacity="0.98" />
        <polygon points="292,129 388,129 340,111" fill="#FFFFFF" opacity="0.5" />
        <ellipse cx="318" cy="150" rx="20" ry="10" fill="url(#glow-d)" opacity="0.65" transform="rotate(-18,318,150)" />
        <line x1="298" y1="130" x2="322" y2="107" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        <line x1="323" y1="130" x2="336" y2="107" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        <line x1="350" y1="130" x2="346" y2="107" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        <line x1="376" y1="130" x2="358" y2="107" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        <line x1="282" y1="175" x2="400" y2="175" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.18" />
        <line x1="270" y1="205" x2="412" y2="205" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.12" />
        <polygon points="264,130 416,130 340,104" fill="none" stroke="#AFA9EC" strokeWidth="1.2" opacity="0.5" />
      </g>

      {/* Floating particle chips */}
      <g className="dp1" filter="url(#particle-glow)">
        <rect x="118" y="112" width="38" height="38" rx="9" fill="#1A1640" stroke="#7F77DD" strokeWidth="1.5" />
        <text x="137" y="137" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="#AFA9EC">+</text>
      </g>
      <g className="dp2" filter="url(#particle-glow)">
        <rect x="514" y="94" width="38" height="38" rx="9" fill="#221808" stroke="#EF9F27" strokeWidth="1.5" />
        <text x="533" y="119" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="#EF9F27">÷</text>
      </g>
      <g className="dp3" filter="url(#particle-glow)">
        <rect x="84" y="238" width="38" height="38" rx="9" fill="#071810" stroke="#1D9E75" strokeWidth="1.5" />
        <text x="103" y="263" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="#5DCAA5">×</text>
      </g>
      <g className="dp4" filter="url(#particle-glow)">
        <rect x="542" y="236" width="38" height="38" rx="9" fill="#1C0A12" stroke="#D4537E" strokeWidth="1.5" />
        <text x="561" y="261" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="#ED93B1">−</text>
      </g>

      {/* Ambient glowing dots */}
      <circle cx="170" cy="170" r="3"   fill="#7F77DD" opacity="0.55" />
      <circle cx="178" cy="295" r="2"   fill="#EF9F27" opacity="0.5" />
      <circle cx="492" cy="155" r="3.5" fill="#1D9E75" opacity="0.45" />
      <circle cx="476" cy="295" r="2.5" fill="#AFA9EC" opacity="0.5" />
      <circle cx="225" cy="346" r="2.5" fill="#D4537E" opacity="0.4" />
      <circle cx="450" cy="342" r="2"   fill="#534AB7" opacity="0.45" />

      {/* Label */}
      <text x="340" y="362" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="12" fontWeight="400" fill="#AFA9EC" opacity="0.8" letterSpacing="4">AURACALC</text>
    </svg>
  );
};

export default AuraCalcHeroDark;
