import Head from "next/head";
import { useState, useEffect, useRef } from "react";

function sanitizeSlug(raw) {
  if (!raw) return "";
  return raw.trim().replace(/^["']|["']$/g, "");
}
const BOOKING_SLUG = sanitizeSlug(process.env.NEXT_PUBLIC_BOOKING_SLUG);
const BOOKING_HREF = BOOKING_SLUG ? `/book/${BOOKING_SLUG}` : "#contatti";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    }}>{children}</div>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Head>
        <title>NutriPEM | Pasquale Eugenio Musella — Nutrizionista Sportivo</title>
        <meta name="description" content="Nutrizionista sportivo a Napoli. Specializzato in calcio, basket e sport di squadra. Tirocinio Real Madrid CF, Barça Innovation Hub, FIFA Diploma." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* ───── NAV ───── */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <div className="brand-mark">N</div>
            <div className="brand-text">
              <div className="brand-name">NutriPEM</div>
              <div className="brand-tag">Intervention on your performance</div>
            </div>
          </a>
          <nav className={`links ${menuOpen ? "open" : ""}`}>
            {["#chisono:Chi Sono","#certificazioni:Certificazioni","#formazione:Formazione","#esperienze:Esperienze","#servizi:Servizi","#contatti:Contatti"].map(item => {
              const [href, label] = item.split(":");
              return <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>;
            })}
          </nav>
          <a href={BOOKING_HREF} className="btn btn-lime nav-cta">Contattami</a>
          <button className="burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ───── HERO ───── */}
      <section className="hero" id="top">
        <div className="hero-bg-glow" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <FadeIn delay={0}>
              <div className="eyebrow"><span className="dot" />NUTRIZIONISTA SPORTIVO · PER TUTTI</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1>Pasquale <span className="accent">Eugenio</span><br />Musella</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="lead">
                Che tu sia un atleta professionista, parte di una squadra o semplicemente voglia{" "}
                <strong>perdere peso, tonificarti o sentirti meglio</strong> — costruisco strategie nutrizionali su misura per te.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="hero-actions">
                <a href="https://wa.me/393476909490" className="btn btn-lime">💬 Scrivimi su WhatsApp</a>
                <a href={BOOKING_HREF} className="btn btn-glass">Prenota una consulenza</a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="hero-visual-wrap">
            <div className="hero-visual">
              <div className="hero-ring" />
              <svg viewBox="0 0 220 220" fill="none" className="hero-svg">
                <circle cx="110" cy="110" r="90" stroke="#cdfa3c" strokeOpacity="0.18" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="65" stroke="#cdfa3c" strokeOpacity="0.32" strokeWidth="1.5"/>
                <path d="M65 135 L85 85 L110 118 L135 65 L158 102" stroke="#cdfa3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="65" cy="135" r="4.5" fill="#cdfa3c"/>
                <circle cx="135" cy="65" r="4.5" fill="#cdfa3c"/>
                <circle cx="158" cy="102" r="4.5" fill="#cdfa3c"/>
              </svg>
              <div className="hero-badge top-left">
                <div className="badge-num">5+</div>
                <div className="badge-lbl">Anni nel settore</div>
              </div>
              <div className="hero-badge bottom-right">
                <div className="badge-num">ISAK 2</div>
                <div className="badge-lbl">Antropometria</div>
              </div>
              <div className="hero-badge bottom-left small">
                <div className="badge-num">🏟️</div>
                <div className="badge-lbl">Real Madrid CF</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── TRUST BAR ───── */}
      <section className="trustbar">
        <div className="wrap trustbar-inner">
          {[
            ["🏟️", "Tirocinio Real Madrid CF"],
            ["🔵", "Barça Innovation Hub"],
            ["⚽", "FIFA Diploma in Football Medicine"],
            ["🇮🇹", "Diploma FIGC"],
            ["🧬", "Biologo ONB AA_087812"],
          ].map(([icon, label], i) => (
            <span key={i} className="trust-item">
              <span className="trust-icon">{icon}</span>
              <span>{label}</span>
              {i < 4 && <span className="trust-sep">·</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ───── CHI SONO ───── */}
      <section className="section bg-white" id="chisono">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Chi sono</div>
            <h2>Scienza della nutrizione, <span className="accent">applicata sul campo.</span></h2>
          </FadeIn>
          <div className="chisono-grid">
            <FadeIn delay={0.1} className="portrait-wrap">
              <div className="portrait">
                <div className="portrait-inner">
                  <span style={{fontSize:64}}>👤</span>
                  <p style={{color:"#97a6bb",fontSize:13,marginTop:8}}>Foto profilo</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bio">
              <p>Sono <strong>biologo nutrizionista</strong> (Ordine Nazionale dei Biologi, matricola AA_087812), laureato magistrale in Scienze della Nutrizione all'Università degli Studi di Napoli Federico II.</p>
              <p>Ho completato il tirocinio nell'<strong>area nutrizione dei Servizi Medici del Real Madrid CF</strong> (Ciudad Real Madrid Valdebebas, stagione 2022-23) e mi sono formato con alcune delle istituzioni più autorevoli al mondo nel campo della nutrizione sportiva: Escuela Universitaria Real Madrid, Barça Innovation Hub – FC Barcelona, FIFA e FIGC.</p>
              <p>Sono <strong>Antropometrista certificato ISAK Livello 2</strong>, traduttore del libro <em>"Antropometria — Fondamenti per l'applicazione e l'interpretazione"</em> e relatore in corsi webinar di nutrizione sportiva con Metadieta ed Ethicsport.</p>
              <div className="bio-tags">
                {["Nutrizione sportiva","Composizione corporea","Calcio & basket professionistico","Antropometrista ISAK 2","Biologo ONB","Consulenza individuale"].map(t => (
                  <span key={t} className="bio-tag">{t}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───── CERTIFICAZIONI ───── */}
      <section className="section bg-soft" id="certificazioni">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Certificazioni</div>
            <h2>Una formazione <span className="accent">internazionale.</span></h2>
            <p className="sub">Costruita tra le più importanti istituzioni sportive al mondo, dalla Spagna all'Italia.</p>
          </FadeIn>
          <div className="stats-row">
            {[["5","Cert. internazionali"],["2","Lauree universitarie"],["ISAK 2","Antropometria"]].map(([n,l],i) => (
              <FadeIn key={i} delay={i*0.1}>
                <div className="stat-card">
                  <div className="stat-num">{n}</div>
                  <div className="stat-lbl">{l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="cert-grid">
            {[
              { color:"yellow", top:true, icon:"🏅", period:"25 Maggio 2026", type:"Certificazione Internazionale", title:"FIFA Diploma in Football Medicine", org:"FIFA — Fédération Internationale de Football Association" },
              { color:"blue",   top:false, icon:"🏅", period:"Maggio 2026",    type:"Diploma Federale",               title:"Diploma in Nutrizione applicata al Calcio", org:"FIGC — Federazione Italiana Giuoco Calcio" },
              { color:"pink",   top:true,  icon:"🏅", period:"Marzo 2026",     type:"Diploma Professionale",          title:"Professional Diploma in Sports Nutrition", org:"Barça Innovation Hub — FC Barcelona's Education Division" },
              { color:"purple", top:true,  icon:"⭐", period:"2022–2023",      type:"Master Internazionale",          title:"Máster en Entrenamiento y Nutrición Deportiva", org:"Escuela Universitaria Real Madrid — Universidad Europea" },
              { color:"green",  top:false, icon:"🧬", period:"Dicembre 2023",  type:"Certificazione Internazionale",  title:"Antropometrista ISAK Livello 2", org:"International Society for the Advancement of Kinanthropometry" },
            ].map((c,i) => (
              <FadeIn key={i} delay={i*0.08}>
                <div className={`cert-card cert-${c.color}`}>
                  {c.top && <span className="top-cert">TOP CERT</span>}
                  <div className="cert-icon">{c.icon}</div>
                  <div>
                    <div className="cert-meta">
                      <span className="tag-pill">{c.period}</span>
                      <span className="tag-pill">{c.type}</span>
                    </div>
                    <div className="cert-title">{c.title}</div>
                    <div className="cert-org">{c.org}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FORMAZIONE ───── */}
      <section className="section bg-white" id="formazione">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Formazione</div>
            <h2>Il percorso che mi ha portato <span className="accent">fin qui.</span></h2>
          </FadeIn>
          <div className="timeline">
            {[
              { year:"2012",     title:"Diploma — Istituto Professionale "R. Drengot"", desc:"Aversa (CE)." },
              { year:"2017",     title:"Laurea in Tecnologie Alimentari", desc:"Università degli Studi di Napoli Federico II." },
              { year:"2020",     title:"Laurea Magistrale in Scienze della Nutrizione", desc:"Università degli Studi di Napoli Federico II." },
              { year:"2021",     title:"Abilitazione Ordine Nazionale dei Biologi", desc:"Matricola AA_087812." },
              { year:"2022–23",  title:"Máster in Entrenamiento y Nutrición Deportiva", desc:"Escuela Universitaria Real Madrid — Universidad Europea. In parallelo al tirocinio nell'area nutrizione dei Servizi Medici del Real Madrid CF." },
              { year:"Dic 2023", title:"Antropometrista ISAK Livello 2", desc:"Certificazione internazionale in valutazione della composizione corporea." },
              { year:"Mar 2026", title:"Professional Diploma in Sports Nutrition", desc:"Barça Innovation Hub — FC Barcelona's Education Division." },
              { year:"Mag 2026", title:"Diploma in Nutrizione applicata al Calcio", desc:"FIGC — Federazione Italiana Giuoco Calcio." },
              { year:"25/05/2026",title:"FIFA Diploma in Football Medicine", desc:"FIFA — Fédération Internationale de Football Association." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="tl-item">
                  <div className="tl-year">{item.year}</div>
                  <div>
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-desc">{item.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ESPERIENZE PROFESSIONALI ───── */}
      <section className="section bg-soft" id="esperienze">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Esperienze professionali</div>
            <h2>Dal campo alla <span className="accent">consulenza individuale.</span></h2>
          </FadeIn>
          <div className="work-grid">
            {[
              { period:"Nov 2023 — Mag 2026", title:"Nutrizionista Sportivo — PSA Basket Sant'Antimo",       desc:"Serie B Nazionale, Serie C e settore giovanile.", icon:"🏀" },
              { period:"Nov 2024 — Lug 2025", title:"Nutrizionista Sportivo — Valencia CF Academy",          desc:"Technical Partnership Caserta — AG Soccer School.", icon:"🦇" },
              { period:"Dic 2022 — Giu 2023", title:"Tirocinio — Real Madrid CF",                            desc:"Area nutrizione dei Servizi Medici, Ciudad Real Madrid Valdebebas.", icon:"🏟️" },
              { period:"Nov 2023 — in corso",  title:"Relatore webinar di nutrizione sportiva",               desc:"In collaborazione con Metadieta ed Ethicsport.", icon:"🎤" },
              { period:"Luglio 2025",           title:'Traduttore — "Antropometria"',                         desc:"Fondamenti per l'applicazione e l'interpretazione.", icon:"📖" },
            ].map((w, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="work-card">
                  <div className="work-icon">{w.icon}</div>
                  <div>
                    <div className="work-period">{w.period}</div>
                    <div className="work-title">{w.title}</div>
                    <div className="work-desc">{w.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIANZA ───── */}
      <section className="section bg-navy">
        <div className="wrap">
          <FadeIn>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Durante il tirocinio nella nostra area di nutrizione, Pasquale ha dimostrato un impegno e una passione eccezionali per il lavoro nello sport. Ha unito una solida conoscenza scientifica a grande empatia e capacità di ascolto, dimostrandosi un collaboratore proattivo e sempre propositivo. Lo raccomando senza riserve per qualsiasi opportunità nel suo percorso professionale.
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">CP</div>
                <div>
                  <div className="testimonial-name">Carolina Perea Sánchez</div>
                  <div className="testimonial-role">Nutrizionista Servizi Medici Real Madrid CF · Co-Direttrice Máster UEM</div>
                </div>
                <div className="real-madrid-badge">🏟️ Real Madrid CF</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── SERVIZI ───── */}
      <section className="section bg-navy-deep" id="servizi">
        <div className="wrap">
          <FadeIn>
            <div className="kicker kicker-dark"><span className="dot" />Servizi</div>
            <h2 style={{color:"#fff"}}>Percorsi pensati per <span className="accent">il tuo obiettivo.</span></h2>
            <p className="sub" style={{color:"#97a6bb"}}>Dalla singola valutazione al percorso completo con monitoraggio continuo.</p>
          </FadeIn>
          <div className="serv-grid">
            {[
              {
                icon:"📋", title:"Valutazione iniziale",
                desc:"Anamnesi, plicometria ISAK e analisi delle abitudini alimentari. Il punto di partenza per qualsiasi percorso.",
                price:"€60", unit:"/singola seduta",
                items:["Colloquio 60 minuti","Misurazioni antropometriche ISAK","Report scritto con obiettivi"],
                feat: false,
              },
              {
                icon:"🥗", title:"Percorso 3 mesi",
                desc:"Piano nutrizionale personalizzato con revisioni periodiche e supporto diretto. Il percorso più completo.",
                price:"€180", unit:"/3 mesi",
                items:["Piano alimentare su misura","3 controlli composizione corporea","Supporto WhatsApp continuo"],
                feat: true,
              },
              {
                icon:"⚽", title:"Atleti e squadre",
                desc:"Consulenza per club e atleti: periodizzazione nutrizionale legata al calendario gare e allenamenti.",
                price:"Su richiesta", unit:"",
                items:["Piani individuali per tutta la rosa","Strategie pre/intra/post gara","Report per lo staff tecnico"],
                feat: false,
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`serv-card ${s.feat ? "serv-feat" : ""}`}>
                  {s.feat && <div className="serv-badge">PIÙ SCELTO</div>}
                  <div className="serv-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="serv-price">{s.price} {s.unit && <span>{s.unit}</span>}</div>
                  <ul className="serv-list">
                    {s.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <a href={BOOKING_HREF} className={`btn ${s.feat ? "btn-lime" : "btn-outline-dark"}`}>
                    {s.feat ? "Prenota ora" : "Prenota"}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CONTATTI ───── */}
      <section className="section bg-soft" id="contatti">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Contatti</div>
            <h2>Iniziamo a costruire <span className="accent">il tuo percorso.</span></h2>
          </FadeIn>
          <div className="contact-grid">
            <FadeIn delay={0.1}>
              <div className="contact-card">
                <h3>Scrivimi direttamente</h3>
                <p>Sono disponibile via WhatsApp, email o telefono. Rispondimi entro 24 ore e fissiamo insieme una prima consulenza.</p>
                {[
                  ["💬","WhatsApp","347 690 9490","https://wa.me/393476909490"],
                  ["☎️","Telefono","081 083 7262",null],
                  ["✉️","Email","pasqualeeugeniomusella@gmail.com","mailto:pasqualeeugeniomusella@gmail.com"],
                  ["📍","Studio","Via degli Aranci 20, Sant'Antimo (NA)",null],
                ].map(([ico, label, val, href]) => (
                  <div className="contact-row" key={label}>
                    <div className="contact-ico">{ico}</div>
                    <div>
                      <strong>{label}</strong>
                      {href ? <a href={href} style={{display:"block",color:"var(--muted)",fontSize:13.5,marginTop:2}}>{val}</a>
                             : <span style={{display:"block",color:"var(--muted)",fontSize:13.5,marginTop:2}}>{val}</span>}
                    </div>
                  </div>
                ))}
                <div style={{display:"flex",gap:10,marginTop:24}}>
                  <a href="https://instagram.com/nutripem" target="_blank" rel="noreferrer" className="btn btn-outline-invert" style={{flex:1,justifyContent:"center"}}>📷 Instagram</a>
                  <a href="https://linkedin.com/in/pasquale-eugenio-musella" target="_blank" rel="noreferrer" className="btn btn-outline-invert" style={{flex:1,justifyContent:"center"}}>💼 LinkedIn</a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {!sent ? (
                <form className="form-card" onSubmit={handleSubmit}>
                  <h3>Richiedi informazioni</h3>
                  <p style={{color:"#5b6878",fontSize:14,marginBottom:22}}>Compila il modulo e ti rispondo entro 24 ore con il percorso più adatto a te.</p>
                  <div className="field-row">
                    <div className="field"><label>Nome</label><input type="text" required placeholder="Il tuo nome" /></div>
                    <div className="field"><label>Cognome</label><input type="text" required placeholder="Il tuo cognome" /></div>
                  </div>
                  <div className="field"><label>Email o telefono</label><input type="text" required placeholder="Dove posso ricontattarti" /></div>
                  <div className="field">
                    <label>Servizio di interesse</label>
                    <select>
                      <option>Valutazione iniziale</option>
                      <option>Percorso 3 mesi</option>
                      <option>Atleti e squadre</option>
                    </select>
                  </div>
                  <div className="field"><label>Messaggio (opzionale)</label><textarea rows={3} placeholder="Raccontami il tuo obiettivo..." /></div>
                  <button type="submit" className="btn btn-navy" style={{width:"100%",justifyContent:"center",padding:"14px",marginTop:4}}>Invia richiesta →</button>
                </form>
              ) : (
                <div className="form-card" style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",minHeight:360}}>
                  <div>
                    <div style={{fontSize:52,marginBottom:14}}>✓</div>
                    <h3>Richiesta inviata!</h3>
                    <p style={{color:"#5b6878",marginTop:10}}>Ti contatto a breve per fissare la prima consulenza.</p>
                  </div>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="brand">
            <div className="brand-mark">N</div>
            <div className="brand-text">
              <div className="brand-name" style={{color:"#fff"}}>NutriPEM</div>
              <div className="brand-tag">Intervention on your performance</div>
            </div>
          </div>
          <div className="footer-links">
            {[["#chisono","Chi Sono"],["#certificazioni","Certificazioni"],["#formazione","Formazione"],["#esperienze","Esperienze"],["#servizi","Servizi"],["#contatti","Contatti"],["/admin","Admin"]].map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 NutriPEM — Pasquale Eugenio Musella, Biologo Nutrizionista (ONB AA_087812). Tutti i diritti riservati.
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --navy:#0f1d31; --navy-deep:#08111f; --navy-soft:#15263e;
          --lime:#cdfa3c; --lime-dim:#aedc1f;
          --ink:#ffffff; --muted:#97a6bb;
          --paper:#ffffff; --paper-soft:#f4f6f9; --line:#e4e8ef;
        }
        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family:'Inter',sans-serif; background:var(--paper-soft); color:var(--navy); -webkit-font-smoothing:antialiased; line-height:1.6; }
        h1,h2,h3 { font-family:'Sora',sans-serif; font-weight:800; letter-spacing:-0.02em; }
        a { text-decoration:none; color:inherit; }
        img { max-width:100%; display:block; }
        .wrap { max-width:1160px; margin:0 auto; padding:0 28px; }

        /* BUTTONS */
        .btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; border:none; border-radius:999px; font-family:'Sora',sans-serif; font-weight:700; font-size:14.5px; padding:13px 26px; cursor:pointer; transition:transform .15s ease, box-shadow .2s ease; white-space:nowrap; }
        .btn:hover { transform:translateY(-2px); }
        .btn-lime { background:var(--lime); color:var(--navy-deep); box-shadow:0 8px 28px -10px rgba(205,250,60,.55); }
        .btn-glass { background:rgba(255,255,255,0.1); color:#fff; border:1.5px solid rgba(255,255,255,0.28); backdrop-filter:blur(4px); }
        .btn-glass:hover { background:rgba(255,255,255,0.18); }
        .btn-navy { background:var(--navy); color:#fff; }
        .btn-outline-dark { background:transparent; color:var(--navy); border:1.5px solid var(--line); }
        .btn-outline-invert { background:rgba(255,255,255,0.08); color:#fff; border:1.5px solid rgba(255,255,255,0.18); font-size:13.5px; padding:10px 14px; }

        /* NAV */
        header.nav { position:sticky; top:0; z-index:60; background:rgba(8,17,31,0.96); backdrop-filter:blur(14px); border-bottom:1px solid rgba(255,255,255,0.07); }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; padding:15px 28px; max-width:1160px; margin:0 auto; gap:20px; }
        .brand { display:flex; align-items:center; gap:12px; }
        .brand-mark { width:40px; height:40px; border-radius:11px; background:linear-gradient(140deg,var(--lime),#7fae00); display:flex; align-items:center; justify-content:center; font-family:'Sora',sans-serif; font-weight:800; color:var(--navy-deep); font-size:17px; flex-shrink:0; }
        .brand-name { color:#fff; font-size:19px; font-weight:800; font-family:'Sora',sans-serif; line-height:1; }
        .brand-tag { color:var(--lime); font-size:9.5px; letter-spacing:.14em; text-transform:uppercase; font-weight:700; margin-top:3px; }
        nav.links { display:flex; align-items:center; gap:28px; }
        nav.links a { color:rgba(255,255,255,0.6); font-size:14px; font-weight:600; transition:color .18s; }
        nav.links a:hover { color:#fff; }
        .nav-cta { display:none; }
        @media(min-width:880px) { .nav-cta { display:inline-flex; } }
        .burger { display:none; flex-direction:column; gap:5px; background:none; border:none; padding:4px; cursor:pointer; }
        .burger span { display:block; width:22px; height:2px; background:#fff; border-radius:2px; transition:.2s; }
        @media(max-width:879px) {
          .burger { display:flex; }
          nav.links { display:none; position:fixed; top:62px; left:0; right:0; background:rgba(8,17,31,0.98); flex-direction:column; padding:24px 28px; gap:0; border-bottom:1px solid rgba(255,255,255,.1); }
          nav.links.open { display:flex; }
          nav.links a { padding:14px 0; border-bottom:1px solid rgba(255,255,255,.07); font-size:16px; color:#fff; }
        }

        /* HERO */
        .hero { background:linear-gradient(165deg, var(--navy) 0%, var(--navy-deep) 100%); color:#fff; padding:100px 0 120px; overflow:hidden; position:relative; }
        .hero-bg-glow { position:absolute; top:-100px; right:-100px; width:700px; height:700px; background:radial-gradient(circle, rgba(205,250,60,0.08) 0%, transparent 65%); pointer-events:none; }
        .hero-grid { display:grid; grid-template-columns:1.05fr 0.95fr; gap:60px; align-items:center; }
        @media(max-width:920px) { .hero-grid { grid-template-columns:1fr; } }
        .eyebrow { display:inline-flex; align-items:center; gap:10px; border:1.5px solid rgba(205,250,60,0.4); color:var(--lime); font-size:11.5px; font-weight:700; letter-spacing:.13em; text-transform:uppercase; padding:9px 18px; border-radius:999px; margin-bottom:28px; font-family:'Sora',sans-serif; }
        .dot { display:inline-block; width:7px; height:7px; border-radius:50%; background:var(--lime); flex-shrink:0; }
        .hero h1 { font-size:clamp(44px,6.5vw,74px); line-height:1.01; color:#fff; }
        .accent { color:var(--lime); }
        .lead { margin-top:26px; max-width:530px; color:var(--muted); font-size:17.5px; line-height:1.65; }
        .lead strong { color:var(--lime); font-weight:600; }
        .hero-actions { display:flex; gap:14px; margin-top:38px; flex-wrap:wrap; }

        .hero-visual-wrap { display:flex; justify-content:flex-end; }
        .hero-visual { position:relative; width:100%; max-width:440px; aspect-ratio:1; border-radius:28px; background:linear-gradient(150deg,#182b46,var(--navy-deep)); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; overflow:visible; }
        .hero-ring { position:absolute; inset:-20px; border-radius:40px; border:1px solid rgba(205,250,60,0.12); pointer-events:none; }
        .hero-svg { width:75%; }
        .hero-badge { position:absolute; background:rgba(8,17,31,0.92); border:1px solid rgba(255,255,255,0.12); border-radius:14px; padding:12px 16px; backdrop-filter:blur(8px); }
        .hero-badge.top-left { top:-14px; left:-14px; }
        .hero-badge.bottom-right { bottom:-14px; right:-14px; }
        .hero-badge.bottom-left { bottom:18px; left:-14px; }
        .hero-badge.small { padding:9px 13px; }
        .badge-num { color:var(--lime); font-weight:800; font-size:19px; font-family:'Sora',sans-serif; line-height:1; }
        .badge-lbl { color:var(--muted); font-size:11px; margin-top:3px; }

        /* TRUST BAR */
        .trustbar { background:var(--navy-deep); padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.06); overflow:hidden; }
        .trustbar-inner { display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:10px 6px; }
        .trust-item { display:inline-flex; align-items:center; gap:7px; color:var(--muted); font-size:12.5px; font-weight:600; white-space:nowrap; }
        .trust-icon { font-size:15px; }
        .trust-sep { color:rgba(205,250,60,0.35); margin:0 6px; }
        @media(max-width:680px) { .trust-sep { display:none; } }

        /* SECTION HELPERS */
        .section { padding:104px 0; }
        .bg-white { background:var(--paper); }
        .bg-soft { background:var(--paper-soft); }
        .bg-navy { background:var(--navy); }
        .bg-navy-deep { background:var(--navy-deep); }
        .kicker { display:inline-flex; align-items:center; gap:8px; background:var(--paper-soft); border:1px solid var(--line); color:var(--navy); font-size:11.5px; font-weight:700; letter-spacing:.13em; text-transform:uppercase; padding:7px 16px; border-radius:999px; margin-bottom:18px; font-family:'Sora',sans-serif; }
        .kicker-dark { background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.12); color:#fff; }
        h2 { font-size:clamp(32px,4.2vw,48px); line-height:1.07; color:var(--navy); }
        .sub { color:#5b6878; font-size:17px; line-height:1.65; max-width:620px; margin-top:16px; }

        /* CHI SONO */
        .chisono-grid { display:grid; grid-template-columns:0.8fr 1.2fr; gap:64px; align-items:start; margin-top:52px; }
        @media(max-width:880px) { .chisono-grid { grid-template-columns:1fr; } }
        .portrait-wrap { display:flex; justify-content:center; }
        .portrait { width:100%; max-width:300px; aspect-ratio:4/5; border-radius:24px; background:linear-gradient(160deg,#1a2c45,#0a1421); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; flex-direction:column; }
        .portrait-inner { text-align:center; }
        .bio { display:flex; flex-direction:column; gap:16px; }
        .bio p { color:#4a5566; font-size:16px; line-height:1.7; }
        .bio p strong { color:var(--navy); }
        .bio-tags { display:flex; flex-wrap:wrap; gap:9px; margin-top:8px; }
        .bio-tag { background:var(--paper-soft); border:1px solid var(--line); padding:7px 16px; border-radius:999px; font-size:13.5px; font-weight:600; color:var(--navy); }

        /* STATS */
        .stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin:44px 0 52px; }
        @media(max-width:640px) { .stats-row { grid-template-columns:1fr; } }
        .stat-card { background:var(--navy); border-radius:18px; padding:30px 26px; }
        .stat-num { font-size:36px; font-weight:800; color:var(--lime); font-family:'Sora',sans-serif; }
        .stat-lbl { color:var(--muted); font-size:14px; margin-top:8px; font-weight:600; }

        /* CERT */
        .cert-grid { display:flex; flex-direction:column; gap:20px; }
        .cert-card { position:relative; border-radius:16px; padding:26px 28px; border:1.5px solid var(--line); display:grid; grid-template-columns:50px 1fr; gap:18px; align-items:start; transition:transform .2s ease, box-shadow .2s ease; }
        .cert-card:hover { transform:translateY(-3px); box-shadow:0 12px 32px -10px rgba(0,0,0,.1); }
        .cert-yellow { background:#fef9e7; border-color:#e9d27a; }
        .cert-blue   { background:#eaf1fd; border-color:#a9c4ee; }
        .cert-pink   { background:#fcedf0; border-color:#eaaab6; }
        .cert-purple { background:#f2ecfd; border-color:#c6a9ee; }
        .cert-green  { background:#edfbf0; border-color:#86d9a0; }
        .cert-icon { width:48px; height:48px; border-radius:12px; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; font-size:22px; }
        .cert-meta { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px; }
        .tag-pill { font-size:11.5px; font-weight:700; padding:4px 12px; border-radius:999px; background:rgba(255,255,255,0.7); color:#3a3a3a; }
        .cert-title { font-size:17.5px; font-weight:800; color:var(--navy); font-family:'Sora',sans-serif; line-height:1.3; }
        .cert-org { color:#5b6878; font-size:14px; margin-top:5px; }
        .top-cert { position:absolute; top:-13px; right:18px; background:var(--lime); color:var(--navy-deep); font-size:10.5px; font-weight:800; letter-spacing:.05em; padding:5px 13px; border-radius:999px; font-family:'Sora',sans-serif; }

        /* TIMELINE */
        .timeline { margin-top:50px; display:flex; flex-direction:column; }
        .tl-item { display:grid; grid-template-columns:110px 1fr; gap:24px; padding:22px 0; border-bottom:1px solid var(--line); }
        .tl-item:first-child { padding-top:0; }
        .tl-year { font-weight:800; color:var(--lime-dim); font-family:'Sora',sans-serif; font-size:14px; padding-top:3px; }
        .tl-title { font-weight:700; color:var(--navy); font-size:16px; }
        .tl-desc { color:#5b6878; font-size:14px; margin-top:4px; line-height:1.6; }

        /* WORK */
        .work-grid { display:flex; flex-direction:column; gap:14px; margin-top:50px; }
        .work-card { background:#fff; border:1px solid var(--line); border-radius:16px; padding:22px 26px; display:grid; grid-template-columns:52px 1fr; gap:18px; align-items:start; transition:transform .2s, box-shadow .2s; }
        .work-card:hover { transform:translateY(-2px); box-shadow:0 10px 28px -8px rgba(0,0,0,.08); }
        .work-icon { width:48px; height:48px; border-radius:12px; background:var(--paper-soft); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; font-size:22px; }
        .work-period { font-size:12.5px; font-weight:700; color:var(--lime-dim); font-family:'Sora',sans-serif; letter-spacing:.04em; margin-bottom:4px; }
        .work-title { font-weight:700; font-size:16px; color:var(--navy); }
        .work-desc { color:#5b6878; font-size:14px; margin-top:4px; }

        /* TESTIMONIAL */
        .testimonial-card { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:52px 56px; position:relative; max-width:820px; margin:0 auto; }
        @media(max-width:640px) { .testimonial-card { padding:36px 28px; } }
        .quote-icon { position:absolute; top:-18px; left:48px; font-size:80px; line-height:1; color:var(--lime); font-family:'Sora',sans-serif; opacity:.6; }
        .testimonial-text { font-size:18px; line-height:1.75; color:rgba(255,255,255,0.88); font-style:italic; }
        .testimonial-footer { display:flex; align-items:center; gap:16px; margin-top:32px; flex-wrap:wrap; }
        .testimonial-avatar { width:46px; height:46px; border-radius:50%; background:var(--lime); color:var(--navy-deep); font-weight:800; font-size:15px; font-family:'Sora',sans-serif; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .testimonial-name { font-weight:700; color:#fff; font-size:15.5px; }
        .testimonial-role { color:var(--muted); font-size:13px; margin-top:2px; }
        .real-madrid-badge { margin-left:auto; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); padding:8px 16px; border-radius:999px; font-size:13px; color:#fff; font-weight:600; }
        @media(max-width:600px) { .real-madrid-badge { margin-left:0; } }

        /* SERVIZI */
        .serv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; margin-top:52px; }
        @media(max-width:880px) { .serv-grid { grid-template-columns:1fr; } }
        .serv-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09); border-radius:20px; padding:34px 28px; display:flex; flex-direction:column; color:#fff; transition:transform .2s, border-color .2s; }
        .serv-card:hover { transform:translateY(-4px); border-color:rgba(205,250,60,0.3); }
        .serv-feat { border-color:var(--lime); box-shadow:0 0 0 1px var(--lime), 0 24px 48px -16px rgba(205,250,60,0.25); background:rgba(205,250,60,0.04); }
        .serv-badge { align-self:flex-start; background:var(--lime); color:var(--navy-deep); font-size:11px; font-weight:800; padding:5px 14px; border-radius:999px; margin-bottom:20px; font-family:'Sora',sans-serif; }
        .serv-icon { font-size:32px; margin-bottom:18px; }
        .serv-card h3 { font-size:22px; margin-bottom:10px; }
        .serv-card p { color:var(--muted); font-size:15px; line-height:1.65; flex:1; }
        .serv-price { font-size:28px; font-weight:800; color:var(--lime); margin:20px 0 6px; font-family:'Sora',sans-serif; }
        .serv-price span { font-size:13px; color:var(--muted); font-weight:500; }
        .serv-list { list-style:none; margin:12px 0 24px; display:flex; flex-direction:column; gap:9px; }
        .serv-list li { font-size:14px; color:rgba(255,255,255,0.8); display:flex; gap:9px; align-items:flex-start; }
        .serv-list li::before { content:"✓"; color:var(--lime); font-weight:800; flex-shrink:0; }
        .btn-outline-dark { background:transparent; color:rgba(255,255,255,0.7); border:1.5px solid rgba(255,255,255,0.2); }

        /* CONTATTI */
        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:50px; margin-top:52px; align-items:start; }
        @media(max-width:880px) { .contact-grid { grid-template-columns:1fr; } }
        .contact-card { background:var(--navy); border-radius:22px; padding:40px; color:#fff; }
        .contact-card h3 { font-size:22px; margin-bottom:10px; }
        .contact-card p { color:var(--muted); font-size:15px; margin-bottom:26px; line-height:1.6; }
        .contact-row { display:flex; align-items:flex-start; gap:14px; margin-bottom:18px; }
        .contact-ico { width:42px; height:42px; border-radius:11px; background:rgba(205,250,60,0.1); display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
        .contact-row strong { display:block; font-size:14px; color:#fff; }
        .form-card { background:#fff; border:1px solid var(--line); border-radius:22px; padding:38px; }
        .form-card h3 { font-size:22px; color:var(--navy); margin-bottom:6px; }
        .field { margin-bottom:16px; }
        .field label { display:block; font-size:13px; font-weight:700; color:var(--navy); margin-bottom:7px; }
        .field input, .field select, .field textarea { width:100%; padding:12px 14px; border-radius:11px; border:1.5px solid var(--line); font-family:'Inter',sans-serif; font-size:14.5px; color:var(--navy); background:#fff; transition:border-color .15s; }
        .field input:focus, .field select:focus, .field textarea:focus { outline:none; border-color:var(--lime-dim); }
        .field-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        @media(max-width:480px) { .field-row { grid-template-columns:1fr; } }

        /* FOOTER */
        .footer { background:var(--navy-deep); color:var(--muted); padding:52px 0 28px; }
        .footer-inner { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:28px; margin-bottom:22px; }
        .footer-links { display:flex; flex-wrap:wrap; gap:20px; }
        .footer-links a { font-size:13.5px; color:var(--muted); transition:color .15s; }
        .footer-links a:hover { color:#fff; }
        .footer-bottom { text-align:center; font-size:12.5px; color:#4e5c70; }
      `}</style>
    </>
  );
}
