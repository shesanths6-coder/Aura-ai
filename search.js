<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aura AI — Experience the Future of Intelligence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<!-- Google Programmable Search Engine widget (replaces the deprecated Custom Search JSON API) -->
<script async src="https://cse.google.com/cse.js?cx=331ada0d4a6cd4a07"></script>
<style>
  :root{
    --surface: #0b1326;
    --surface-container-lowest: #060e20;
    --surface-container-low: #131b2e;
    --surface-container: #171f33;
    --surface-container-high: #222a3d;
    --on-surface: #dae2fd;
    --on-surface-variant: #cbc3d7;
    --outline: #494454;
    --primary: #d0bcff;
    --primary-container: #a078ff;
    --on-primary: #3c0091;
    --secondary: #4cd7f6;
    --secondary-container: #03b5d3;
    --error: #ffb4ab;
  }

  *{ margin:0; padding:0; box-sizing:border-box; }

  body{
    font-family:'Inter', sans-serif;
    background: var(--surface);
    color: var(--on-surface);
    overflow-x:hidden;
  }

  a{ text-decoration:none; color:inherit; }

  .container{
    max-width:1280px;
    margin:0 auto;
    padding:0 64px;
  }
  @media (max-width:900px){
    .container{ padding:0 20px; }
  }

  /* ---------- Nav ---------- */
  nav{
    position:sticky;
    top:0;
    z-index:100;
    background: rgba(6,14,32,0.7);
    backdrop-filter: blur(20px);
    border-bottom:1px solid rgba(255,255,255,0.06);
  }
  .nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:18px 64px;
  }
  @media (max-width:900px){ .nav-inner{ padding:16px 20px; } }

  .logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-weight:700;
    font-size:18px;
    letter-spacing:-0.01em;
    white-space:nowrap;
  }
  .logo-mark{
    width:28px; height:28px;
    border-radius:8px;
    background:linear-gradient(135deg, var(--primary), var(--secondary));
    display:flex; align-items:center; justify-content:center;
    font-size:14px;
  }

  .nav-links{
    display:flex;
    gap:36px;
    font-size:13px;
    letter-spacing:0.06em;
    text-transform:uppercase;
    color: var(--on-surface-variant);
    font-weight:500;
  }
  .nav-links a:hover{ color: var(--on-surface); }
  @media (max-width:1100px){ .nav-links{ display:none; } }

  .nav-actions{ display:flex; align-items:center; gap:20px; font-size:13px; }
  .nav-actions .signin{ color: var(--on-surface-variant); }
  .btn{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:11px 22px;
    border-radius:9999px;
    font-weight:600;
    font-size:14px;
    cursor:pointer;
    border:none;
    transition: transform .2s ease, box-shadow .2s ease;
    white-space:nowrap;
  }
  .btn-primary{
    background: linear-gradient(135deg, var(--primary), var(--primary-container));
    color: var(--on-primary);
    box-shadow: 0 0 0 rgba(208,188,255,0);
  }
  .btn-primary:hover{
    box-shadow: 0 0 28px rgba(208,188,255,0.45);
    transform: translateY(-1px);
  }
  .btn-ghost{
    background: rgba(255,255,255,0.04);
    color: var(--on-surface);
    border:1px solid rgba(255,255,255,0.12);
  }
  .btn-ghost:hover{ background: rgba(255,255,255,0.08); }

  /* ---------- Search bar in nav (Google CSE widget wrapper) ---------- */
  .search-bar-wrap{
    display:flex; align-items:center;
    background: rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.12);
    border-radius:9999px;
    padding:6px 16px;
    flex:1; max-width:360px; margin:0 24px;
  }
  @media (max-width:900px){ .search-bar-wrap{ display:none; } }

  /* Style overrides so the Google search box blends with the dark theme */
  .search-bar-wrap .gsc-control-cse{
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
  }
  .search-bar-wrap table.gsc-search-box{ margin-bottom:0 !important; }
  .search-bar-wrap .gsc-input-box{
    background: transparent !important;
    border: none !important;
    height:30px;
  }
  .search-bar-wrap input.gsc-input{
    background: transparent !important;
    color: var(--on-surface) !important;
    font-family:'Inter', sans-serif !important;
    font-size:13px !important;
  }
  .search-bar-wrap .gsc-search-button-v2{
    background: var(--primary) !important;
    border: none !important;
    border-radius:9999px !important;
    padding:8px !important;
  }
  .search-bar-wrap .gsc-search-button-v2 svg{ fill:#3c0091 !important; }
  .search-bar-wrap .gsib_a{ padding:6px 4px !important; }
  .search-bar-wrap .gsc-clear-button{ display:none !important; }

  /* ---------- Hero ---------- */
  .hero{
    position:relative;
    padding:110px 64px 140px;
    overflow:hidden;
  }
  @media (max-width:900px){ .hero{ padding:60px 20px 90px; } }

  .aura-bg{
    position:absolute;
    inset:0;
    background:
      radial-gradient(600px 500px at 20% 10%, rgba(208,188,255,0.22), transparent 60%),
      radial-gradient(700px 600px at 85% 60%, rgba(76,215,246,0.18), transparent 60%);
    filter: blur(60px);
    z-index:0;
  }

  .hero-grid{
    position:relative;
    z-index:1;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:40px;
    align-items:center;
  }
  @media (max-width:900px){ .hero-grid{ grid-template-columns:1fr; } }

  .eyebrow{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background: rgba(208,188,255,0.1);
    color: var(--primary);
    padding:7px 14px;
    border-radius:9999px;
    font-family:'JetBrains Mono', monospace;
    font-size:11px;
    letter-spacing:0.08em;
    text-transform:uppercase;
    margin-bottom:24px;
  }
  .eyebrow::before{
    content:'';
    width:6px; height:6px;
    border-radius:50%;
    background: var(--secondary);
    box-shadow: 0 0 8px var(--secondary);
  }

  h1{
    font-size:48px;
    font-weight:700;
    line-height:1.15;
    letter-spacing:-0.02em;
    margin-bottom:20px;
  }
  @media (max-width:900px){ h1{ font-size:34px; } }
  h1 .accent{
    background: linear-gradient(90deg, var(--secondary), var(--primary));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }

  .hero p.lead{
    font-size:16px;
    line-height:1.6;
    color: var(--on-surface-variant);
    max-width:440px;
    margin-bottom:32px;
  }

  .hero-ctas{ display:flex; gap:14px; flex-wrap:wrap; }

  .orb-wrap{
    position:relative;
    height:420px;
    display:flex; align-items:center; justify-content:center;
  }
  .orb{
    position:relative;
    width:320px; height:320px;
    border-radius:9999px;
    background: radial-gradient(circle at 35% 30%, rgba(208,188,255,0.35), rgba(76,215,246,0.15) 55%, transparent 75%);
    border:1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(30px);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    animation: float 7s ease-in-out infinite;
  }
  @keyframes float{
    0%,100%{ transform: translateY(0px); }
    50%{ transform: translateY(-16px); }
  }
  .orb .spark{ font-size:32px; margin-bottom:12px; opacity:0.9; }
  .orb .orb-label{
    font-family:'JetBrains Mono', monospace;
    letter-spacing:0.15em;
    font-size:14px;
    color: var(--on-surface);
    opacity:0.85;
  }

  .float-chip{
    position:absolute;
    display:flex; align-items:center; gap:8px;
    background: rgba(23,31,51,0.85);
    border:1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(16px);
    padding:8px 14px;
    border-radius:9999px;
    font-size:12px;
    font-weight:600;
    box-shadow:0 8px 24px rgba(0,0,0,0.3);
  }
  .chip-icon{
    width:18px; height:18px;
    border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-size:10px;
  }
  .chip-1{ top:8%; right:0; }
  .chip-1 .chip-icon{ background: var(--secondary-container); }
  .chip-2{ bottom:14%; left:0; }
  .chip-2 .chip-icon{ background: var(--primary-container); color:var(--on-primary); }

  /* ---------- Section intro ---------- */
  .section-intro{
    text-align:center;
    max-width:640px;
    margin:0 auto 56px;
  }
  .section-intro h2{
    font-size:32px;
    font-weight:700;
    letter-spacing:-0.01em;
    margin-bottom:14px;
  }
  .section-intro p{
    color: var(--on-surface-variant);
    font-size:15px;
    line-height:1.6;
  }

  section.features{ padding:100px 64px; }
  @media (max-width:900px){ section.features{ padding:60px 20px; } }

  .bento{
    display:grid;
    grid-template-columns: 1.6fr 1fr;
    gap:20px;
  }
  @media (max-width:900px){ .bento{ grid-template-columns:1fr; } }

  .bento-row{
    display:grid;
    grid-template-columns: 1fr 1.2fr;
    gap:20px;
    margin-top:20px;
  }
  @media (max-width:900px){ .bento-row{ grid-template-columns:1fr; } }

  .glass-card{
    background: rgba(23,31,51,0.55);
    border:1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(20px);
    border-radius:20px;
    padding:32px;
    position:relative;
    overflow:hidden;
  }

  .icon-badge{
    width:36px; height:36px;
    border-radius:10px;
    background: rgba(208,188,255,0.12);
    color: var(--primary);
    display:flex; align-items:center; justify-content:center;
    margin-bottom:20px;
    font-size:16px;
  }
  .glass-card h3{
    font-size:18px;
    font-weight:600;
    margin-bottom:10px;
  }
  .glass-card p{
    font-size:14px;
    line-height:1.6;
    color: var(--on-surface-variant);
    margin-bottom:20px;
  }

  .mock-chart{
    height:150px;
    border-radius:12px;
    background: linear-gradient(160deg, #e9e6f4, #cfd3e6);
    display:flex; align-items:center; justify-content:center;
    color:#333;
    font-size:11px;
    font-weight:600;
    font-family:'JetBrains Mono', monospace;
    text-align:center;
    letter-spacing:0.03em;
  }

  .stat-num{
    font-size:38px;
    font-weight:800;
    background: linear-gradient(90deg, var(--secondary), var(--primary));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
    margin-top:20px;
  }
  .stat-label{
    font-family:'JetBrains Mono', monospace;
    font-size:11px;
    letter-spacing:0.1em;
    text-transform:uppercase;
    color: var(--on-surface-variant);
  }

  .tool-icons{ display:flex; gap:10px; }
  .tool-icons span{
    width:34px; height:34px;
    border-radius:9px;
    background: rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.08);
    display:flex; align-items:center; justify-content:center;
    font-size:14px;
  }

  .security-list{ list-style:none; font-size:13px; }
  .security-list li{
    display:flex; align-items:center; gap:8px;
    color: var(--secondary);
    font-weight:600;
    margin-top:10px;
  }
  .security-list li::before{ content:'✓'; }

  .shield-orb{
    position:absolute;
    right:24px; bottom:24px;
    width:140px; height:140px;
    border-radius:9999px;
    background: radial-gradient(circle, rgba(76,215,246,0.15), transparent 70%);
    display:flex; align-items:center; justify-content:center;
    font-size:28px;
    opacity:0.6;
  }

  /* ---------- CTA ---------- */
  .cta-section{ padding:0 64px 120px; }
  @media (max-width:900px){ .cta-section{ padding:0 20px 80px; } }
  .cta-card{
    background: linear-gradient(160deg, rgba(60,40,120,0.5), rgba(23,31,51,0.6));
    border:1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(20px);
    border-radius:24px;
    padding:80px 40px;
    text-align:center;
    position:relative;
    overflow:hidden;
  }
  .cta-card::before{
    content:'';
    position:absolute;
    width:500px; height:500px;
    top:-200px; left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(208,188,255,0.25), transparent 65%);
    filter:blur(40px);
  }
  .cta-card h2{
    position:relative;
    font-size:32px;
    font-weight:700;
    margin-bottom:16px;
  }
  .cta-card p{
    position:relative;
    color: var(--on-surface-variant);
    max-width:480px;
    margin:0 auto 32px;
    font-size:15px;
    line-height:1.6;
  }
  .cta-actions{ position:relative; display:flex; justify-content:center; gap:14px; flex-wrap:wrap; }

  /* ---------- Footer ---------- */
  footer{
    padding:32px 64px;
    border-top:1px solid rgba(255,255,255,0.06);
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:13px;
    color: var(--on-surface-variant);
  }
  @media (max-width:900px){
    footer{ flex-direction:column; gap:16px; padding:32px 20px; text-align:center; }
  }
  .footer-left{ display:flex; align-items:center; gap:10px; }
  .footer-links{ display:flex; gap:24px; }
  .footer-links a:hover{ color: var(--on-surface); }
  .footer-icons{ display:flex; gap:12px; }
  .footer-icons span{
    width:32px; height:32px;
    border-radius:50%;
    background: rgba(255,255,255,0.05);
    display:flex; align-items:center; justify-content:center;
    font-size:13px;
  }

  /* ---------- Auth Modal ---------- */
  .modal-overlay{
    display:none;
    position:fixed; inset:0;
    background: rgba(6,14,32,0.75);
    backdrop-filter: blur(8px);
    z-index:1000;
    align-items:center;
    justify-content:center;
  }
  .modal-box{
    background: var(--surface-container);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:20px;
    padding:36px;
    width:340px;
    position:relative;
  }
  .modal-box h3{ font-size:20px; margin-bottom:20px; }
  .modal-close{
    position:absolute; top:16px; right:16px;
    background:none; border:none; color:var(--on-surface);
    font-size:20px; cursor:pointer;
  }
  #authForm input{
    width:100%;
    padding:12px 14px;
    margin-bottom:12px;
    border-radius:10px;
    border:1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.04);
    color: var(--on-surface);
    font-size:14px;
    outline:none;
  }
  #authForm input:focus{ border-color: var(--secondary); }
  .auth-error{ color: var(--error); font-size:13px; margin-bottom:12px; min-height:16px; }
  .auth-switch{ margin-top:16px; font-size:13px; color: var(--on-surface-variant); text-align:center; }
  .auth-switch a{ color: var(--secondary); font-weight:600; }
  #userStatus span{ font-size:13px; color: var(--on-surface-variant); }
</style>
</head>
<body>

<nav>
  <div class="nav-inner">
    <div class="logo"><span class="logo-mark">✦</span> Aura AI</div>

    <div class="search-bar-wrap">
   <div class="gcse-search"></div>
    </div>

    <div class="nav-actions" id="userStatus">
      <a href="#" id="signInBtn" class="signin">Sign in</a>
    </div>
  </div>
</nav>

<header class="hero">
  <div class="aura-bg"></div>
  <div class="container hero-grid">
    <div>
      <div class="eyebrow">Aura Pro v2.0 is live</div>
      <h1>Experience the <span class="accent">Future</span> of Intelligence</h1>
      <p class="lead">Aura AI is a next-generation workspace companion designed to merge human creativity with machine precision through fluid, intuitive dialogue.</p>
      <div class="hero-ctas">
        <button class="btn btn-primary" id="getStartedBtn">Launch Aura 🚀</button>
        <button class="btn btn-ghost">View Demo ▶</button>
      </div>
    </div>
    <div class="orb-wrap">
      <div class="float-chip chip-1"><span class="chip-icon">◈</span> Deep Context</div>
      <div class="orb">
        <div class="spark">✧</div>
        <div class="orb-label">AURA</div>
      </div>
      <div class="float-chip chip-2"><span class="chip-icon">⚡</span> Instant Logic</div>
    </div>
  </div>
</header>

<section class="features" id="features">
  <div class="container">
    <div class="section-intro">
      <h2>Intelligence in every interaction</h2>
      <p>We've reimagined how logic and creativity coexist. Aura isn't just a tool; it's an organic extension of your thinking process.</p>
    </div>

    <div class="bento">
      <div class="glass-card">
        <div class="icon-badge">🧠</div>
        <h3>Natural Neural Pathways</h3>
        <p>Our architecture mimics organic learning, allowing Aura to understand nuance, sarcasm, and subtle shifts in creative intent that others miss.</p>
        <div class="mock-chart">Intelligent Data &amp; Analytics Platform</div>
      </div>
      <div class="glass-card">
        <div class="icon-badge">∞</div>
        <h3>Endless Availability</h3>
        <p>Your creative flow doesn't have a schedule. Aura remains vigilant 24/7, refining your projects while you rest.</p>
        <div class="stat-num">99.9%</div>
        <div class="stat-label">Active Resonance</div>
      </div>
    </div>

    <div class="bento-row">
      <div class="glass-card">
        <div class="icon-badge">✺</div>
        <h3>Seamless Connectivity</h3>
        <p>Aura acts as the central nervous system for your existing tools, syncing data with organic fluidity.</p>
        <div class="tool-icons"><span>✉</span><span>▤</span><span>▦</span></div>
      </div>
      <div class="glass-card">
        <div class="icon-badge">🛡</div>
        <h3>Quantum Security</h3>
        <p>Your intellectual property is sacred. We employ bank-grade encryption layers designed to evolve with emerging threats.</p>
        <ul class="security-list">
          <li>Zero-Knowledge Encryption</li>
          <li>Private Instance Control</li>
        </ul>
        <div class="shield-orb">🔒</div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <div class="cta-card">
      <h2>Ready to transcend the ordinary?</h2>
      <p>Join the vanguard of digital creation. Aura AI is your gateway to a more intelligent, creative, and efficient reality.</p>
      <div class="cta-actions">
        <button class="btn btn-primary" onclick="document.getElementById('getStartedBtn').click()">Initialize Free Trial</button>
        <button class="btn btn-ghost">Consult Our Team</button>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-left"><span class="logo-mark">✦</span> Aura AI &nbsp;·&nbsp; © 2024 Aura Systems Inc.</div>
  <div class="footer-links">
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
    <a href="#">Support</a>
  </div>
  <div class="footer-icons"><span>🌐</span><span>💬</span></div>
</footer>

<!-- Auth Modal -->
<div class="modal-overlay" id="authModal">
  <div class="modal-box">
    <button class="modal-close" id="closeModal">&times;</button>
    <h3 id="authTitle">Sign in to Aura</h3>
    <form id="authForm">
      <input type="email" id="authEmail" placeholder="Email" required>
      <input type="password" id="authPassword" placeholder="Password (6+ characters)" required minlength="6">
      <div class="auth-error" id="authError"></div>
      <button type="submit" class="btn btn-primary" id="authSubmitBtn" style="width:100%; justify-content:center;">Sign In</button>
    </form>
    <p class="auth-switch" id="authSwitchText"></p>
  </div>
</div>

<script src="firebase-config.js"></script>
<script src="auth.js"></script>
</body>
</html>