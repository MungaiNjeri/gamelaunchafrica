// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
extend: {
colors: {
'gloss-black': '#06070A',
'gla-deep': '#07080b',
'neon-green': '#00FF99',
'gla-purple': '#8A2BE2',
'gla-blue': '#00CFFF',
'muted-gray': '#bfc6d0'
},
fontFamily: {
sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
display: ['Orbitron', 'Poppins']
},
boxShadow: {
'neon-sm': '0 6px 18px rgba(138,43,226,0.12)',
'neon-md': '0 10px 30px rgba(0,255,153,0.08)',
'glow-neon': '0 8px 40px rgba(138,43,226,0.18)'
}
}
},
plugins: []
}