import Head from "next/head";
import { useState } from "react";

const BOOKING_HREF = process.env.NEXT_PUBLIC_BOOKING_SLUG
  ? `/book/${process.env.NEXT_PUBLIC_BOOKING_SLUG}`
  : "#contatti";

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Head>
        <title>NutriPEM | Intervention on Your Performance</title>
      </Head>

      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <div className="brand-mark">N</div>
            <div className="brand-text">
              <div className="name">NutriPEM</div>
              <div className="tag">Intervention on your performance</div>
            </div>
          </a>
          <nav className="links">
            <a href="#chisono">Chi Sono</a>
            <a href="#esperienze">Esperienze</a>
            <a href="#formazione">Formazione</a>
            <a href="#servizi">Servizi</a>
            <a href="#contatti">Contatti</a>
          </nav>
          <a href={BOOKING_HREF} className="btn btn-lime nav-cta">Contattami</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span> NUTRIZIONISTA SPORTIVO · PER TUTTI</div>
            <h1>Pasquale <span className="accent">Eugenio</span><br />Musella</h1>
            <p className="lead">Che tu sia un atleta professionista, parte di una squadra o semplicemente voglia <strong>perdere peso, tonificarti o sentirti meglio</strong> — costruisco strategie nutrizionali su misura per te.</p>
            <div className="hero-actions">
              <a href="https://wa.me/390000000000" className="btn btn-lime">💬 Contattami su WhatsApp</a>
              <a href={BOOKING_HREF} className="btn btn-outline">Prenota un appuntamento</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="float-card top">
              <div className="num">8+</div>
              <div className="lbl">Anni di esperienza</div>
            </div>
            <div className="float-card bottom">
              <div className="num">ISAK 2</div>
              <div className="lbl">Antropometria</div>
            </div>
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#cdfa3c" strokeOpacity="0.25" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="58" stroke="#cdfa3c" strokeOpacity="0.4" strokeWidth="1.5" />
              <path d="M60 120 L80 80 L100 110 L120 60 L140 95" stroke="#cdfa3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="60" cy="120" r="4" fill="#cdfa3c" />
              <circle cx="120" cy="60" r="4" fill="#cdfa3c" />
              <circle cx="140" cy="95" r="4" fill="#cdfa3c" />
            </svg>
          </div>
        </div>
      </section>

      <section className="chisono section" id="chisono">
        <div className="wrap">
          <div className="kicker"><span className="dot"></span> Chi sono</div>
          <h2>Scienza della nutrizione, applicata <span className="accent">alle performance reali.</span></h2>
          <div className="chisono-grid">
            <div className="portrait">Foto profilo</div>
            <div className="bio">
              <p>Sono biologo nutrizionista specializzato in nutrizione sportiva applicata al calcio e agli sport di squadra. Lavoro con atleti professionisti, squadre giovanili e persone comuni che vogliono migliorare composizione corporea, energia e recupero.</p>
              <p>Il mio approccio unisce dati oggettivi — plicometria ISAK, bioimpedenza, diari alimentari — a piani pratici e sostenibili nel tempo, costruiti sulla vita reale della persona, non su modelli standard.</p>
              <div className="bio-tags">
                <span className="bio-tag">Nutrizione sportiva</span>
                <span className="bio-tag">Composizione corporea</span>
                <span className="bio-tag">Calcio professionistico</span>
                <span className="bio-tag">Antropometria ISAK 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="esperienze section" id="esperienze">
        <div className="wrap">
          <div className="kicker"><span className="dot"></span> Esperienze e certificazioni</div>
          <h2>Una formazione <span className="accent">internazionale.</span></h2>
          <p className="sub">Percorso costruito tra federazioni sportive, hub di innovazione e master internazionali in nutrizione applicata alla performance.</p>

          <div className="stats-row">
            <div className="stat-card"><div className="num">8+</div><div className="lbl">Anni di formazione</div></div>
            <div className="stat-card"><div className="num">5</div><div className="lbl">Cert. internazionali</div></div>
            <div className="stat-card"><div className="num">ISAK 2</div><div className="lbl">Antropometria</div></div>
          </div>

          <div className="cert-grid">
            <div className="cert-card yellow">
              <span className="top-cert">TOP CERT</span>
              <div className="cert-icon">🏅</div>
              <div>
                <div className="cert-top">
                  <span className="tag-pill">2026</span>
                  <span className="tag-pill">Certificazione Internazionale</span>
                </div>
                <div className="cert-title">FIFA Diploma in Football Medicine</div>
                <div className="cert-org">FIFA — Fédération Internationale de Football Association</div>
              </div>
            </div>

            <div className="cert-card blue">
              <div className="cert-icon">🏅</div>
              <div>
                <div className="cert-top">
                  <span className="tag-pill">2026</span>
                  <span className="tag-pill">Diploma Federale</span>
                </div>
                <div className="cert-title">Diploma in Nutrizione applicata al Calcio</div>
                <div className="cert-org">FIGC — Federazione Italiana Giuoco Calcio</div>
              </div>
            </div>

            <div className="cert-card pink">
              <span className="top-cert">TOP CERT</span>
              <div className="cert-icon">🏅</div>
              <div>
                <div className="cert-top">
                  <span className="tag-pill">2026</span>
                  <span className="tag-pill">Diploma Professionale</span>
                </div>
                <div className="cert-title">Professional Diploma in Sports Nutrition</div>
                <div className="cert-org">Barça Innovation Hub — FC Barcelona</div>
              </div>
            </div>

            <div className="cert-card purple">
              <span className="top-cert">TOP CERT</span>
              <div className="cert-icon">⭐</div>
              <div>
                <div className="cert-top">
                  <span className="tag-pill">2022–2023</span>
                  <span className="tag-pill">Master Internazionale</span>
                </div>
                <div className="cert-title">Máster en Entrenamiento y Nutrición Deportiva</div>
                <div className="cert-org">Universidad — Spagna</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="formazione section" id="formazione">
        <div className="wrap">
          <div className="kicker"><span className="dot"></span> Formazione</div>
          <h2>Il percorso che mi ha portato <span className="accent">fin qui.</span></h2>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-year">2018</div>
              <div>
                <div className="tl-title">Laurea in Scienze della Nutrizione</div>
                <div className="tl-desc">Formazione di base in biochimica, fisiologia e dietetica clinica.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">2020</div>
              <div>
                <div className="tl-title">Certificazione ISAK livello 2</div>
                <div className="tl-desc">Specializzazione in antropometria e valutazione della composizione corporea.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">2022–23</div>
              <div>
                <div className="tl-title">Máster en Entrenamiento y Nutrición Deportiva</div>
                <div className="tl-desc">Approfondimento su periodizzazione nutrizionale e performance nello sport di squadra.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">2026</div>
              <div>
                <div className="tl-title">FIFA Diploma in Football Medicine</div>
                <div className="tl-desc">Aggiornamento sulle linee guida internazionali per la medicina e nutrizione nel calcio.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servizi section" id="servizi">
        <div className="wrap">
          <div className="kicker"><span className="dot"></span> Servizi</div>
          <h2>Percorsi pensati per <span className="accent">il tuo obiettivo.</span></h2>
          <p className="sub">Tre modalità di consulenza, dalla singola valutazione al percorso completo con monitoraggio continuo.</p>
          <div className="serv-grid">
            <div className="serv-card">
              <div className="serv-icon">📋</div>
              <h3>Valutazione iniziale</h3>
              <p>Anamnesi completa, plicometria ISAK e analisi delle abitudini alimentari per fare il punto di partenza.</p>
              <div className="serv-price">€60 <span>/ singola seduta</span></div>
              <ul className="serv-list">
                <li>Colloquio 60 minuti</li>
                <li>Misurazioni antropometriche</li>
                <li>Report scritto con obiettivi</li>
              </ul>
              <a href={BOOKING_HREF} className="btn btn-outline-dark">Prenota</a>
            </div>

            <div className="serv-card feat">
              <span className="serv-badge">PIÙ RICHIESTO</span>
              <div className="serv-icon">🥗</div>
              <h3>Percorso 3 mesi</h3>
              <p>Piano nutrizionale personalizzato con revisioni periodiche e supporto diretto via messaggi.</p>
              <div className="serv-price">€180 <span>/ 3 mesi</span></div>
              <ul className="serv-list">
                <li>Piano alimentare su misura</li>
                <li>3 controlli di composizione corporea</li>
                <li>Supporto WhatsApp continuo</li>
              </ul>
              <a href={BOOKING_HREF} className="btn btn-lime">Prenota</a>
            </div>

            <div className="serv-card">
              <div className="serv-icon">⚽</div>
              <h3>Atleti e squadre</h3>
              <p>Consulenza per club e atleti professionisti: periodizzazione nutrizionale legata al calendario gare.</p>
              <div className="serv-price">Su richiesta</div>
              <ul className="serv-list">
                <li>Piani individuali per rosa squadra</li>
                <li>Strategie pre/post gara</li>
                <li>Reportistica per lo staff tecnico</li>
              </ul>
              <a href="#contatti" className="btn btn-outline">Richiedi info</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contatti section" id="contatti">
        <div className="wrap">
          <div className="kicker"><span className="dot"></span> Contatti</div>
          <h2>Iniziamo a costruire <span className="accent">il tuo percorso.</span></h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Parliamone subito</h3>
              <p>Scrivimi per fissare una prima valutazione o per qualsiasi domanda sul percorso più adatto a te. Se hai già ricevuto un link di prenotazione, usalo direttamente per scegliere giorno e ora.</p>
              <div className="contact-row">
                <div className="ico">💬</div>
                <div className="txt"><strong>WhatsApp</strong><span>+39 000 000 0000</span></div>
              </div>
              <div className="contact-row">
                <div className="ico">✉️</div>
                <div className="txt"><strong>Email</strong><span>info@nutripem.it</span></div>
              </div>
              <div className="contact-row">
                <div className="ico">📍</div>
                <div className="txt"><strong>Studio</strong><span>Riceve su prenotazione, anche online</span></div>
              </div>
            </div>

            {!sent ? (
              <form className="book" onSubmit={handleSubmit}>
                <h3>Richiedi informazioni</h3>
                <p className="note">Compila il modulo, ti ricontatto entro 24 ore per proporti il percorso più adatto e inviarti il link per prenotare lo slot.</p>
                <div className="field-row">
                  <div className="field">
                    <label>Nome</label>
                    <input type="text" required placeholder="Il tuo nome" />
                  </div>
                  <div className="field">
                    <label>Cognome</label>
                    <input type="text" required placeholder="Il tuo cognome" />
                  </div>
                </div>
                <div className="field">
                  <label>Email o telefono</label>
                  <input type="text" required placeholder="Dove posso ricontattarti" />
                </div>
                <div className="field">
                  <label>Servizio di interesse</label>
                  <select>
                    <option>Valutazione iniziale</option>
                    <option>Percorso 3 mesi</option>
                    <option>Atleti e squadre</option>
                  </select>
                </div>
                <div className="field">
                  <label>Messaggio (opzionale)</label>
                  <textarea rows={3} placeholder="Raccontami il tuo obiettivo"></textarea>
                </div>
                <button type="submit" className="submit-btn">Invia richiesta</button>
              </form>
            ) : (
              <div className="book" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                <div>
                  <div style={{ fontSize: 40, marginBottom: 10 }}>✓</div>
                  <h3>Richiesta inviata!</h3>
                  <p className="note">Ti ricontatto a breve con il link per prenotare il tuo slot.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-inner">
            <div className="brand">
              <div className="brand-mark">N</div>
              <div className="brand-text">
                <div className="name" style={{ color: "#fff" }}>NutriPEM</div>
                <div className="tag">Intervention on your performance</div>
              </div>
            </div>
            <div className="foot-links">
              <a href="#chisono">Chi Sono</a>
              <a href="#esperienze">Esperienze</a>
              <a href="#formazione">Formazione</a>
              <a href="#servizi">Servizi</a>
              <a href="#contatti">Contatti</a>
              <a href="/admin">Area Admin</a>
            </div>
          </div>
          <div className="foot-bottom">© 2026 NutriPEM — Pasquale Eugenio Musella. Tutti i diritti riservati.</div>
        </div>
      </footer>

      <style jsx global>{`
        :root{
          --cert-yellow-bg:#fdf6e0; --cert-yellow-line:#e9d27a;
          --cert-blue-bg:#e9f0fb; --cert-blue-line:#a9c4ee;
          --cert-pink-bg:#fbe9ec; --cert-pink-line:#eaaab6;
          --cert-purple-bg:#f1eafb; --cert-purple-line:#c6a9ee;
          --radius: 18px;
        }
        html{scroll-behavior:smooth;}
        section{position:relative;}
        .wrap{max-width:1180px; margin:0 auto; padding:0 28px;}

        header.nav{ position:sticky; top:0; z-index:50; background:var(--navy); border-bottom:1px solid rgba(255,255,255,0.06); }
        .nav-inner{ display:flex; align-items:center; justify-content:space-between; padding:16px 28px; max-width:1180px; margin:0 auto; }
        .brand{display:flex; align-items:center; gap:12px; text-decoration:none;}
        .brand-mark{ width:38px; height:38px; border-radius:10px; background:linear-gradient(140deg, var(--lime), #7fae00); display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--navy-deep); font-size:16px; font-family:'Plus Jakarta Sans', sans-serif; }
        .brand-text .name{ color:var(--ink); font-size:19px; font-weight:800; line-height:1; font-family:'Plus Jakarta Sans', sans-serif; letter-spacing:0.01em; }
        .brand-text .tag{ color:var(--lime); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; font-weight:700; margin-top:3px; }
        nav.links{display:flex; align-items:center; gap:34px;}
        nav.links a{ color:#cfd8e4; font-size:14.5px; font-weight:600; text-decoration:none; }
        nav.links a:hover{color:#fff;}
        @media(max-width:880px){ nav.links{display:none;} }

        .btn{ display:inline-flex; align-items:center; gap:8px; border-radius:999px; font-weight:700; font-size:14.5px; padding:12px 24px; cursor:pointer; border:none; font-family:'Plus Jakarta Sans', sans-serif; transition:transform .15s ease; text-decoration:none; }
        .btn:hover{transform:translateY(-2px);}
        .btn-lime{ background:var(--lime); color:var(--navy-deep); box-shadow:0 8px 24px -8px rgba(205,250,60,0.5);}
        .btn-outline{ background:transparent; color:var(--ink); border:1.5px solid rgba(255,255,255,0.35);}
        .btn-outline-dark{ background:transparent; color:var(--navy); border:1.5px solid var(--line);}
        .nav-cta{display:none;}
        @media(min-width:880px){.nav-cta{display:inline-flex;}}

        .hero{ background: radial-gradient(900px 500px at 85% 10%, rgba(205,250,60,0.07), transparent 60%), linear-gradient(180deg, var(--navy) 0%, var(--navy-deep) 100%); color:var(--ink); padding:90px 0 110px; overflow:hidden; }
        .hero-grid{ display:grid; grid-template-columns:1.1fr 0.9fr; gap:50px; align-items:center; }
        @media(max-width:920px){ .hero-grid{grid-template-columns:1fr;} }
        .eyebrow{ display:inline-flex; align-items:center; gap:10px; border:1.5px solid rgba(205,250,60,0.45); color:var(--lime); font-size:12.5px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:9px 18px; border-radius:999px; margin-bottom:28px; }
        .eyebrow .dot{width:7px; height:7px; border-radius:50%; background:var(--lime);}
        .hero h1{ font-size:clamp(40px, 6vw, 68px); line-height:1.04; color:var(--ink); }
        .hero h1 .accent{ color:var(--lime); }
        .hero p.lead{ margin-top:26px; max-width:520px; color:var(--muted); font-size:17.5px; }
        .hero p.lead strong{ color:var(--lime); font-weight:700; }
        .hero-actions{display:flex; gap:16px; margin-top:36px; flex-wrap:wrap;}
        .hero-visual{ position:relative; aspect-ratio:1/1; border-radius:24px; background:linear-gradient(160deg, var(--navy-soft), var(--navy-deep)); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .hero-visual svg{ width:78%; }
        .float-card{ position:absolute; background:rgba(15,29,49,0.9); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:14px 18px; }
        .float-card.top{ top:8%; left:8%; }
        .float-card.bottom{ bottom:8%; right:8%; }
        .float-card .num{ color:var(--lime); font-weight:800; font-size:20px; font-family:'Plus Jakarta Sans';}
        .float-card .lbl{ color:var(--muted); font-size:11.5px; margin-top:2px;}

        .section{padding:96px 0;}
        .kicker{ display:inline-flex; align-items:center; gap:8px; color:var(--navy); background:var(--paper-soft); border:1px solid var(--line); font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:7px 16px; border-radius:999px; margin-bottom:18px; }
        .kicker .dot{width:6px; height:6px; border-radius:50%; background:var(--lime-dim);}
        .section h2{ font-size:clamp(30px, 4vw, 44px); color:var(--navy); line-height:1.1; }
        .section h2 .accent{color:var(--lime-dim); -webkit-text-stroke:0.3px var(--navy);}
        .section .sub{ color:#5b6878; font-size:16.5px; max-width:620px; margin-top:16px;}

        .chisono{background:var(--paper);}
        .chisono-grid{ display:grid; grid-template-columns:0.85fr 1.15fr; gap:60px; align-items:start; margin-top:48px; }
        @media(max-width:880px){.chisono-grid{grid-template-columns:1fr;}}
        .portrait{ border-radius:var(--radius); background:linear-gradient(160deg,#1a2c45,#0a1421); aspect-ratio:4/5; display:flex; align-items:center; justify-content:center; color:var(--muted); font-size:14px; border:1px solid var(--line); }
        .bio p{color:#4a5566; font-size:16px; margin-bottom:16px;}
        .bio-tags{display:flex; flex-wrap:wrap; gap:10px; margin-top:24px;}
        .bio-tag{ background:var(--paper-soft); border:1px solid var(--line); padding:8px 16px; border-radius:999px; font-size:13.5px; font-weight:600; color:var(--navy); }

        .esperienze{background:var(--paper-soft);}
        .stats-row{display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin:44px 0 56px;}
        @media(max-width:700px){.stats-row{grid-template-columns:1fr;}}
        .stat-card{ background:var(--navy); border-radius:16px; padding:28px 24px; }
        .stat-card .num{ font-size:34px; font-weight:800; color:var(--lime); font-family:'Plus Jakarta Sans';}
        .stat-card .lbl{ color:var(--muted); font-size:14px; margin-top:6px; font-weight:600;}
        .cert-grid{display:flex; flex-direction:column; gap:22px;}
        .cert-card{ position:relative; border-radius:16px; padding:26px 28px; border:1.5px solid var(--line); display:grid; grid-template-columns:46px 1fr; gap:18px; align-items:start; }
        .cert-card.yellow{ background:var(--cert-yellow-bg); border-color:var(--cert-yellow-line);}
        .cert-card.blue{ background:var(--cert-blue-bg); border-color:var(--cert-blue-line);}
        .cert-card.pink{ background:var(--cert-pink-bg); border-color:var(--cert-pink-line);}
        .cert-card.purple{ background:var(--cert-purple-bg); border-color:var(--cert-purple-line);}
        .cert-icon{ width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.6); font-size:20px; }
        .cert-top{display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:8px;}
        .tag-pill{ font-size:11.5px; font-weight:700; padding:4px 12px; border-radius:999px; background:rgba(255,255,255,0.65); color:#3a3a3a; }
        .cert-title{font-size:18px; font-weight:800; color:var(--navy); font-family:'Plus Jakarta Sans';}
        .cert-org{color:#5b6878; font-size:14.5px; margin-top:4px;}
        .top-cert{ position:absolute; top:-12px; right:18px; background:var(--lime); color:var(--navy-deep); font-size:10.5px; font-weight:800; letter-spacing:0.04em; padding:5px 12px; border-radius:999px; }

        .formazione{background:var(--paper);}
        .timeline{margin-top:48px; display:flex; flex-direction:column;}
        .tl-item{ display:grid; grid-template-columns:90px 1fr; gap:24px; padding:22px 0; border-bottom:1px solid var(--line); }
        .tl-item:first-child{padding-top:0;}
        .tl-year{font-weight:800; color:var(--lime-dim); font-family:'Plus Jakarta Sans'; font-size:17px; -webkit-text-stroke:0.3px var(--navy);}
        .tl-title{font-weight:700; color:var(--navy); font-size:16.5px;}
        .tl-desc{color:#5b6878; font-size:14.5px; margin-top:4px;}

        .servizi{background:var(--navy); color:var(--ink);}
        .servizi .kicker{background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.12); color:var(--ink);}
        .servizi h2{color:var(--ink);}
        .servizi .sub{color:var(--muted);}
        .serv-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:22px; margin-top:48px;}
        @media(max-width:900px){.serv-grid{grid-template-columns:1fr;}}
        .serv-card{ background:var(--navy-soft); border:1px solid rgba(255,255,255,0.08); border-radius:18px; padding:32px 26px; display:flex; flex-direction:column; }
        .serv-card.feat{ border-color:var(--lime); box-shadow:0 0 0 1px var(--lime) inset;}
        .serv-badge{ align-self:flex-start; background:var(--lime); color:var(--navy-deep); font-size:11px; font-weight:800; padding:5px 12px; border-radius:999px; margin-bottom:18px; }
        .serv-icon{font-size:30px; margin-bottom:18px;}
        .serv-card h3{font-size:21px; margin-bottom:10px;}
        .serv-card p{color:var(--muted); font-size:14.5px; flex-grow:1;}
        .serv-price{ font-size:26px; font-weight:800; color:var(--lime); margin:18px 0 6px; font-family:'Plus Jakarta Sans';}
        .serv-price span{font-size:13px; color:var(--muted); font-weight:600;}
        .serv-list{list-style:none; margin:14px 0 22px; padding:0; display:flex; flex-direction:column; gap:8px;}
        .serv-list li{font-size:13.8px; color:#d6dde6; display:flex; gap:8px; align-items:flex-start;}
        .serv-list li::before{content:"✓"; color:var(--lime); font-weight:800;}

        .contatti{background:var(--paper-soft);}
        .contact-grid{display:grid; grid-template-columns:1fr 1fr; gap:50px; margin-top:48px; align-items:start;}
        @media(max-width:880px){.contact-grid{grid-template-columns:1fr;}}
        .contact-card{ background:var(--navy); border-radius:20px; padding:40px; color:var(--ink); }
        .contact-card h3{font-size:22px; margin-bottom:14px;}
        .contact-card p{color:var(--muted); font-size:15px; margin-bottom:26px;}
        .contact-row{display:flex; align-items:center; gap:14px; margin-bottom:16px;}
        .contact-row .ico{ width:40px; height:40px; border-radius:10px; background:rgba(205,250,60,0.12); display:flex; align-items:center; justify-content:center; color:var(--lime); font-size:17px; flex-shrink:0; }
        .contact-row .txt strong{display:block; font-size:14.5px; color:var(--ink);}
        .contact-row .txt span{font-size:13.5px; color:var(--muted);}

        form.book, .book{ background:var(--paper); border:1px solid var(--line); border-radius:20px; padding:36px; min-height: 100%; }
        form.book h3, .book h3{font-size:20px; color:var(--navy); margin-bottom:6px;}
        form.book p.note, .book p.note{color:#5b6878; font-size:14px; margin-bottom:24px;}
        .field{margin-bottom:18px;}
        .field label{display:block; font-size:13px; font-weight:700; color:var(--navy); margin-bottom:7px;}
        .field input, .field select, .field textarea{ width:100%; padding:12px 14px; border-radius:10px; border:1.5px solid var(--line); font-family:inherit; font-size:14.5px; color:var(--navy); background:#fff; }
        .field-row{display:grid; grid-template-columns:1fr 1fr; gap:14px;}
        @media(max-width:480px){.field-row{grid-template-columns:1fr;}}
        .submit-btn{ width:100%; background:var(--navy); color:var(--ink); border:none; padding:14px; border-radius:10px; font-weight:700; font-size:15px; cursor:pointer; font-family:'Plus Jakarta Sans'; margin-top:6px; }
        .submit-btn:hover{background:#1a2c45;}

        footer{background:var(--navy-deep); color:var(--muted); padding:48px 0 28px;}
        .foot-inner{ display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:18px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:28px; margin-bottom:22px; }
        .foot-links{display:flex; gap:24px; flex-wrap:wrap;}
        .foot-links a{font-size:13.5px; color:var(--muted); text-decoration:none;}
        .foot-links a:hover{color:#fff;}
        .foot-bottom{font-size:12.5px; text-align:center; color:#5e6c80;}
      `}</style>
    </>
  );
}
