## Hi there 👋

<!--
**ahmed-Deaf-11/Ahmed-Deaf-11** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ASL Connect</title>
  <style>
    :root {
      --bg1: #071a2d;
      --bg2: #0d2d46;
      --card: rgba(255,255,255,0.08);
      --white: #f5f7fb;
      --muted: #c9d5e2;
      --primary: #22c55e;
      --secondary: #38bdf8;
      --accent: #f59e0b;
      --danger: #ef4444;
      --shadow: rgba(0,0,0,0.3);
    }

    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, sans-serif;
      background: linear-gradient(135deg, var(--bg1), var(--bg2));
      color: var(--white);
      min-height: 100vh;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
    }

    .app {
      width: min(1200px, 100%);
      background: rgba(8, 20, 35, 0.75);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 50px var(--shadow);
      backdrop-filter: blur(12px);
    }

    .topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 30px;
      background: rgba(255,255,255,0.03);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      font-size: 1.1rem;
    }

    .logo-mark {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      display: grid;
      place-items: center;
      font-size: 1.2rem;
      box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
    }

    .lang-switch {
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 0.95rem;
    }

    .lang-button {
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.04);
      color: var(--white);
      border-radius: 999px;
      padding: 8px 14px;
      cursor: pointer;
      transition: 0.2s ease;
    }

    .lang-button.active {
      background: linear-gradient(135deg, var(--secondary), var(--primary));
      border: none;
      color: #06233a;
      font-weight: bold;
    }

    .main {
      display: grid;
      grid-template-columns: 1.05fr 1.35fr;
      min-height: 760px;
    }

    .left-panel {
      background: rgba(255,255,255,0.03);
      border-left: 1px solid rgba(255,255,255,0.08);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .auth-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 18px;
      padding: 24px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
    }

    .tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 18px;
    }

    .tab {
      flex: 1;
      border: 1px solid rgba(255,255,255,0.1);
      background: transparent;
      color: var(--white);
      border-radius: 10px;
      padding: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s ease;
    }

    .tab.active {
      background: linear-gradient(135deg, var(--accent), #f97316);
      color: #1b1200;
      border: none;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    input, select {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      background: rgba(255,255,255,0.04);
      color: var(--white);
      outline: none;
      font-size: 0.98rem;
    }

    input::placeholder {
      color: rgba(255,255,255,0.5);
    }

    .btn {
      border: none;
      border-radius: 12px;
      padding: 14px 16px;
      cursor: pointer;
      font-weight: 700;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .btn:hover { transform: translateY(-1px); opacity: 0.96; }

    .primary {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: #041b2e;
    }

    .ghost {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      color: var(--white);
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--muted);
      font-size: 0.8rem;
      margin: 12px 0;
    }

    .divider::before, .divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: rgba(255,255,255,0.1);
    }

    .socials {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 10px;
    }

    .social {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.12);
      color: var(--white);
      padding: 10px;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
      font-weight: 600;
    }

    .social.google { background: rgba(239,68,68,0.08); }
    .social.facebook { background: rgba(59,130,246,0.08); }
    .social.instagram { background: rgba(236,72,153,0.08); }
    .social.whatsapp { background: rgba(34,197,94,0.08); }

    .right-panel {
      padding: 28px;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .hero {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 18px;
      align-items: stretch;
    }

    .hero-box {
      background: linear-gradient(135deg, rgba(56,189,248,0.14), rgba(34,197,94,0.08));
      border-radius: 22px;
      padding: 25px;
      border: 1px solid rgba(255,255,255,0.08);
      position: relative;
      overflow: hidden;
    }

    .hero-box h1 {
      font-size: clamp(2rem, 3vw, 3rem);
      margin: 0 0 14px;
      line-height: 1.1;
    }

    .hero-box p {
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.8;
      margin: 0;
      max-width: 640px;
    }

    .badge {
      display: inline-block;
      background: rgba(34,197,94,0.15);
      color: #b2f7d0;
      border: 1px solid rgba(34,197,94,0.18);
      padding: 7px 12px;
      border-radius: 999px;
      margin-bottom: 14px;
      font-size: 0.8rem;
      font-weight: 700;
    }

    .mini-visual {
      background: linear-gradient(180deg, rgba(34,197,94,0.18), rgba(14,116,144,0.2));
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 22px;
      min-height: 240px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 18px;
