import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function sanitizeSlug(raw) {
  if (!raw) return "";
  return raw.trim().replace(/^["']|["']$/g, "");
}
const BOOKING_SLUG = sanitizeSlug(process.env.NEXT_PUBLIC_BOOKING_SLUG);
const WA_LINK = "https://wa.me/393476909490";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      <Head>
        <title>NutriPEM | Pasquale Eugenio Musella — Nutrizionista Sportivo</title>
        <meta name="description" content="Nutrizionista sportivo specializzato in calcio, basket e sport di squadra. Tirocinio Real Madrid CF, Barça Innovation Hub, FIFA e FIGC." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* ─── NAVBAR ─── */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <div className="brand-logo">
              <Image src="/logo-white.png" alt="NutriPEM Logo" width={110} height={44} style={{objectFit:"contain"}} />
            </div>
          </a>
          <nav className={`links ${menuOpen ? "open" : ""}`}>
            {[
              ["#chisono","Chi Sono"],
              ["#certificazioni","Certificazioni"],
              ["#formazione","Formazione"],
              ["#esperienze","Esperienze"],
              ["#servizi","Servizi"],
              ["#contatti","Contatti"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-lime nav-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contattami
          </a>
          <button className="burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <FadeIn delay={0}>
              <div className="eyebrow">
                <span className="dot" />
                NUTRIZIONISTA SPORTIVO · CALCIO · BASKET · NUOTO
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1>Pasquale <span className="accent">Eugenio</span><br />Musella</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="lead">
                Strategie nutrizionali su misura per atleti professionisti, squadre sportive e chiunque voglia
                <strong> migliorare le proprie performance</strong> — dentro e fuori dal campo.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="hero-actions">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-lime">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Scrivimi su WhatsApp
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="hero-badges">
                <div className="hero-badge-pill">🏟️ Real Madrid CF</div>
                <div className="hero-badge-pill">🔵 Barça Innovation Hub</div>
                <div className="hero-badge-pill">⚽ FIFA Diploma</div>
                <div className="hero-badge-pill">🇮🇹 FIGC</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="hero-photo-wrap">
            <div className="hero-photo-frame">
              <div className="hero-photo-ring" />
              <div className="hero-photo-inner">
                <Image
                  src="/profile.jpg"
                  alt="Pasquale Eugenio Musella — Nutrizionista Sportivo"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
              <div className="hero-photo-card top">
                <div className="hpc-num">ISAK 2</div>
                <div className="hpc-lbl">Antropometrista</div>
              </div>
              <div className="hero-photo-card bottom">
                <div className="hpc-num">5+</div>
                <div className="hpc-lbl">Anni nel settore</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="trustbar">
        <div className="wrap trustbar-inner">
          {[
            ["🏟️","Tirocinio Real Madrid CF"],
            ["🔵","Barça Innovation Hub"],
            ["⚽","FIFA Diploma in Football Medicine"],
            ["🇮🇹","Diploma FIGC"],
            ["🧬","Biologo FNOB AA_087812"],
          ].map(([icon, label], i, arr) => (
            <span key={i} className="trust-item">
              <span>{icon}</span><span>{label}</span>
              {i < arr.length - 1 && <span className="trust-sep">·</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── CHI SONO ─── */}
      <section className="section bg-white" id="chisono">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Chi sono</div>
            <h2>Scienza della nutrizione, <span className="accent">applicata sul campo.</span></h2>
          </FadeIn>
          <div className="chisono-grid">
            <FadeIn delay={0.1} className="chisono-photo-wrap">
              <div className="chisono-photo">
                <Image
                  src="/profile.jpg"
                  alt="Pasquale Eugenio Musella"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div className="chisono-photo-badge">
                  <span>🧬</span>
                  <span>Biologo Nutrizionista</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bio">
              <p>Sono <strong>biologo nutrizionista</strong> (FNOB, matricola AA_087812), laureato magistrale in Scienze della Nutrizione e in Tecnologie Alimentari all&apos;Università degli Studi di Napoli Federico II.</p>
              <p>Ho completato il tirocinio nell&apos;<strong>area nutrizione dei Servizi Medici del Real Madrid CF</strong> (Ciudad Real Madrid Valdebebas, stagione 2022-23), dove ho avuto il privilegio di lavorare con atleti d&apos;élite sotto la guida della Dott.ssa Carolina Perea Sánchez.</p>
              <p>Sono <strong>Antropometrista certificato ISAK Livello 2</strong>, traduttore del libro <em>&quot;Antropometria — Fondamenti per l&apos;applicazione e l&apos;interpretazione&quot;</em> e relatore in corsi webinar di nutrizione sportiva con Metadieta ed Ethicsport.</p>
              <div className="bio-tags">
                {["Calcio","Basket","Nuoto","Composizione corporea","Antropometrista ISAK 2","Biologo FNOB"].map(t => (
                  <span key={t} className="bio-tag">{t}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── ISAK PREVIEW STRIP ─── */}
      <section className="isak-strip">
        <div className="wrap">
          <FadeIn>
            <div className="isak-strip-label">
              <span className="isak-badge">ISAK Livello 2</span>
              <span>Valutazione antropometrica professionale — composizione corporea, somatotipo, indici di salute</span>
            </div>
          </FadeIn>
          <div className="isak-charts-row">
            {["isak-composition","isak-distribution","isak-somatotype"].map((name, i) => (
              <FadeIn key={name} delay={i * 0.12} className="isak-chart-card">
                <Image
                  src={`/${name}.jpg`}
                  alt={`Grafico ISAK ${name}`}
                  width={400}
                  height={320}
                  style={{ width: "100%", height: "auto", borderRadius: 12 }}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICAZIONI ─── */}
      <section className="section bg-soft" id="certificazioni">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Certificazioni</div>
            <h2>Una formazione <span className="accent">internazionale.</span></h2>
            <p className="sub">Costruita tra le più autorevoli istituzioni sportive al mondo — FIFA, Barça, FIGC, Real Madrid.</p>
          </FadeIn>
          <div className="stats-row">
            {[["2","Lauree Federico II"],["1","Master Real Madrid"],["5","Cert. internazionali"]].map(([n, l], i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="stat-card">
                  <div className="stat-num">{n}</div>
                  <div className="stat-lbl">{l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="cert-grid">
            {[
              { color:"yellow", top:true,  icon:"🏅", period:"25 Maggio 2026",  type:"Certificazione Internazionale", title:"FIFA Diploma in Football Medicine", org:"FIFA — Fédération Internationale de Football Association" },
              { color:"blue",   top:true,  icon:"🏆", period:"Maggio 2026",     type:"Diploma Federale — Accesso ristretto", title:"Diploma in Nutrizione applicata al Calcio", org:"FIGC — Federazione Italiana Giuoco Calcio", highlight: true },
              { color:"pink",   top:true,  icon:"🏅", period:"Marzo 2026",      type:"Diploma Professionale",         title:"Professional Diploma in Sports Nutrition", org:"Barça Innovation Hub — FC Barcelona's Education Division" },
              { color:"purple", top:true,  icon:"⭐", period:"2022–2023",       type:"Master Internazionale",         title:"Máster en Entrenamiento y Nutrición Deportiva", org:"Escuela Universitaria Real Madrid — Universidad Europea" },
              { color:"green",  top:false, icon:"🧬", period:"Dicembre 2023",   type:"Certificazione Internazionale", title:"Antropometrista ISAK Livello 2", org:"International Society for the Advancement of Kinanthropometry" },
              { color:"teal",   top:false, icon:"🔬", period:"2021",            type:"Abilitazione",                  title:"Biologo Nutrizionista — FNOB", org:"Federazione Nazionale degli Ordini dei Biologi · Matricola AA_087812" },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className={`cert-card cert-${c.color} ${c.highlight ? "cert-highlight" : ""}`}>
                  {c.top && <span className="top-cert">TOP CERT</span>}
                  {c.highlight && <span className="figc-badge">🔒 Accesso selettivo</span>}
                  <div className="cert-icon">{c.icon}</div>
                  <div>
                    <div className="cert-meta">
                      <span className="tag-pill">{c.period}</span>
                      <span className="tag-pill">{c.type}</span>
                    </div>
                    <div className="cert-title">{c.title}</div>
                    <div className="cert-org">{c.org}</div>
                    {c.highlight && (
                      <div className="figc-note">
                        Il Diploma FIGC in Nutrizione applicata al Calcio è riservato a un numero selezionatissimo di nutrizionisti in Italia. Un percorso di formazione d&apos;élite direttamente con la Federazione Italiana Giuoco Calcio.
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMAZIONE ─── */}
      <section className="section bg-white" id="formazione">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Formazione</div>
            <h2>Il percorso che mi ha portato <span className="accent">fin qui.</span></h2>
          </FadeIn>
          <div className="tl-wrap">
            {[
              { year:"2012",      icon:"🎓", title:"Diploma — Istituto Professionale R. Drengot",      desc:"Aversa (CE).",                               color:"#e8f4e8" },
              { year:"2017",      icon:"🎓", title:"Laurea in Tecnologie Alimentari",                   desc:"Università degli Studi di Napoli Federico II.", color:"#e8f0fb" },
              { year:"2020",      icon:"🎓", title:"Laurea Magistrale in Scienze della Nutrizione",     desc:"Università degli Studi di Napoli Federico II.", color:"#e8f0fb" },
              { year:"2021",      icon:"🔬", title:"Abilitazione — Biologo Nutrizionista FNOB",        desc:"Matricola AA_087812.",                          color:"#f2ecfd" },
              { year:"2022–23",   icon:"🏟️", title:"Tirocinio Real Madrid CF + Master Universidad Europea", desc:"Area nutrizione Servizi Medici, Ciudad Real Madrid Valdebebas. Máster en Entrenamiento y Nutrición Deportiva.", color:"#fff3e0" },
              { year:"Dic 2023",  icon:"📏", title:"Antropometrista ISAK Livello 2",                  desc:"Certificazione internazionale in valutazione della composizione corporea.", color:"#fdf6e0" },
              { year:"Mar 2026",  icon:"🔵", title:"Professional Diploma in Sports Nutrition",         desc:"Barça Innovation Hub — FC Barcelona.",         color:"#e8f0fb" },
              { year:"Mag 2026",  icon:"🇮🇹", title:"Diploma FIGC in Nutrizione applicata al Calcio",  desc:"Federazione Italiana Giuoco Calcio — accesso selettivo.", color:"#eaf8ed" },
              { year:"25/05/2026",icon:"⚽", title:"FIFA Diploma in Football Medicine",               desc:"FIFA — Fédération Internationale de Football Association.", color:"#fdf6e0" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="tl-item" style={{ "--tl-bg": item.color }}>
                  <div className="tl-left">
                    <div className="tl-icon">{item.icon}</div>
                    <div className="tl-year">{item.year}</div>
                  </div>
                  <div className="tl-body">
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-desc">{item.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESPERIENZE ─── */}
      <section className="section bg-soft" id="esperienze">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Esperienze professionali</div>
            <h2>Dal campo alla <span className="accent">consulenza individuale.</span></h2>
          </FadeIn>
          <div className="work-grid">
            {[
              { period:"Nov 2023 — Mag 2026", icon:"🏀", title:"Nutrizionista Sportivo — PSA Basket Sant'Antimo",    desc:"Serie B Nazionale, Serie C e settore giovanile. Supporto nutrizionale completo alla rosa.", featured: false },
              { period:"Nov 2024 — Lug 2025", icon:"🦇", title:"Nutrizionista Sportivo — Valencia CF Academy",       desc:"Technical Partnership Caserta — AG Soccer School. Nutrizione applicata al calcio giovanile.", featured: false },
              { period:"Dic 2022 — Giu 2023", icon:"🏟️", title:"Tirocinio — Real Madrid CF",                        desc:"Area nutrizione dei Servizi Medici, Ciudad Real Madrid Valdebebas. Stagione 2022-23.", featured: true },
              { period:"Nov 2023 — in corso",  icon:"🎤", title:"Relatore webinar di nutrizione sportiva",            desc:"In collaborazione con Metadieta ed Ethicsport. Formazione continua per professionisti.", featured: false },
              { period:"Luglio 2025",           icon:"📖", title:"Traduttore — Antropometria",                        desc:"\"Fondamenti per l'applicazione e l'interpretazione\" — pubblicazione scientifica.", featured: false },
            ].map((w, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`work-card ${w.featured ? "work-featured" : ""}`}>
                  <div className="work-icon-wrap">{w.icon}</div>
                  <div>
                    {w.featured && <span className="work-feat-label">⭐ Esperienza d&apos;élite</span>}
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

      {/* ─── TESTIMONIANZA ─── */}
      <section className="section bg-navy">
        <div className="wrap">
          <FadeIn>
            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                Durante il tirocinio nella nostra area di nutrizione, Pasquale ha dimostrato un impegno e una passione eccezionali per il lavoro nello sport. Ha unito una solida conoscenza scientifica a grande empatia e capacità di ascolto, dimostrandosi un collaboratore proattivo e sempre propositivo. Lo raccomando senza riserve per qualsiasi opportunità nel suo percorso professionale.
              </p>
              <div className="testimonial-footer">
                <div className="t-avatar">CP</div>
                <div>
                  <div className="t-name">Carolina Perea Sánchez</div>
                  <div className="t-role">Nutrizionista Servizi Medici Real Madrid CF · Co-Direttrice Máster UEM</div>
                </div>
                <div className="t-badge">🏟️ Real Madrid CF</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── ISAK HEALTH CHART ─── */}
      <section className="isak-full-strip">
        <div className="wrap">
          <FadeIn>
            <div className="isak-full-label">
              <div>
                <div className="isak-badge-lg">📏 Valutazione ISAK</div>
                <h3>Analisi della composizione corporea basata su dati reali</h3>
                <p>Ogni consulenza inizia con una misurazione oggettiva: pliche cutanee, perimetri, diametri ossei. Protocollo internazionale ISAK Livello 2.</p>
              </div>
              <div className="isak-full-charts">
                {["isak-health","isak-adiposity"].map((name, i) => (
                  <div key={name} className="isak-full-chart">
                    <Image
                      src={`/${name}.jpg`}
                      alt="Grafico composizione corporea ISAK"
                      width={500}
                      height={400}
                      style={{ width: "100%", height: "auto", borderRadius: 12 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVIZI ─── */}
      <section className="section bg-navy-deep" id="servizi">
        <div className="wrap">
          <FadeIn>
            <div className="kicker kicker-dark"><span className="dot" />Servizi</div>
            <h2 style={{ color: "#fff" }}>Un percorso su misura per <span className="accent">ogni obiettivo.</span></h2>
            <p className="sub" style={{ color: "#97a6bb" }}>Che tu sia un atleta professionista, parte di una squadra o voglia semplicemente stare meglio — c&apos;è un percorso pensato per te.</p>
          </FadeIn>
          <div className="serv-grid">
            {[
              {
                icon: "⚽🏀🏊",
                title: "Atleti & Squadre",
                desc: "Nutrizione periodizzata sul calendario gare, misurazioni ISAK, piani individuali per tutta la rosa. Calcio, basket, nuoto e sport di squadra.",
                items: ["Piani individuali per ogni atleta","Strategia pre/intra/post gara","Misurazioni antropometriche ISAK","Report per lo staff tecnico","Collaborazioni continuative con club"],
                feat: true,
                cta: "Parla con me per squadre",
              },
              {
                icon: "🏃",
                title: "Atleta Individuale",
                desc: "Per l&apos;atleta che vuole ottimizzare composizione corporea, energia e recupero. Protocollo completo con misurazione ISAK e piano personalizzato.",
                items: ["Valutazione antropometrica ISAK","Piano alimentare periodizzato","Monitoraggio progressi","Supporto WhatsApp diretto"],
                feat: false,
                cta: "Richiedi info su WhatsApp",
              },
              {
                icon: "🥗",
                title: "Percorso Benessere",
                desc: "Per chi non è atleta ma vuole perdere peso, tonificarsi o semplicemente migliorare il proprio stile di vita con un approccio scientifico.",
                items: ["Anamnesi e obiettivi personalizzati","Piano alimentare sostenibile","Revisioni periodiche","Supporto continuo"],
                feat: false,
                cta: "Inizia su WhatsApp",
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`serv-card ${s.feat ? "serv-feat" : ""}`}>
                  {s.feat && <div className="serv-badge">PIÙ RICHIESTO</div>}
                  <div className="serv-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="serv-list">
                    {s.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className={`btn ${s.feat ? "btn-lime" : "btn-wa"}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {s.cta}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTATTI ─── */}
      <section className="section bg-soft" id="contatti">
        <div className="wrap">
          <FadeIn>
            <div className="kicker"><span className="dot" />Contatti</div>
            <h2>Scrivimi, <span className="accent">rispondo entro 24h.</span></h2>
          </FadeIn>
          <div className="contact-grid">
            <FadeIn delay={0.1}>
              <div className="contact-card">
                <h3>Scegli come contattarmi</h3>
                <p>Preferisci WhatsApp per una risposta rapida, o email per messaggi più dettagliati. Sono disponibile anche sui social.</p>
                <div className="contact-channels">
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="channel-btn channel-wa">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <div>
                      <strong>WhatsApp</strong>
                      <span>347 690 9490</span>
                    </div>
                  </a>
                  <a href="mailto:pasqualeeugeniomusella@gmail.com" className="channel-btn channel-email">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <div>
                      <strong>Email</strong>
                      <span>pasqualeeugeniomusella@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://instagram.com/nutripem" target="_blank" rel="noreferrer" className="channel-btn channel-ig">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                    <div>
                      <strong>Instagram</strong>
                      <span>@nutripem</span>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/pasquale-eugenio-musella" target="_blank" rel="noreferrer" className="channel-btn channel-li">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    <div>
                      <strong>LinkedIn</strong>
                      <span>Pasquale Eugenio Musella</span>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {!sent ? (
                <form className="form-card" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <h3>Richiedi informazioni</h3>
                  <p style={{ color: "#5b6878", fontSize: 14, marginBottom: 22 }}>
                    Compila il modulo e ti rispondo entro 24 ore. Oppure scrivimi direttamente su WhatsApp o Email.
                  </p>
                  <div className="field-row">
                    <div className="field"><label>Nome</label><input type="text" required placeholder="Il tuo nome" /></div>
                    <div className="field"><label>Cognome</label><input type="text" required placeholder="Il tuo cognome" /></div>
                  </div>
                  <div className="field">
                    <label>Preferisci essere ricontattato via</label>
                    <div className="contact-choice">
                      <label className="choice-opt">
                        <input type="radio" name="contact_method" value="whatsapp" defaultChecked />
                        <span>💬 WhatsApp</span>
                      </label>
                      <label className="choice-opt">
                        <input type="radio" name="contact_method" value="email" />
                        <span>✉️ Email</span>
                      </label>
                    </div>
                  </div>
                  <div className="field"><label>Email o telefono</label><input type="text" required placeholder="Dove ti ricontatto" /></div>
                  <div className="field">
                    <label>Servizio di interesse</label>
                    <select>
                      <option>Atleti e Squadre</option>
                      <option>Atleta individuale</option>
                      <option>Percorso Benessere</option>
                    </select>
                  </div>
                  <div className="field"><label>Messaggio (opzionale)</label><textarea rows={3} placeholder="Raccontami il tuo obiettivo..." /></div>
                  <button type="submit" className="btn btn-navy" style={{ width: "100%", justifyContent: "center", padding: "14px", marginTop: 4 }}>
                    Invia richiesta →
                  </button>
                </form>
              ) : (
                <div className="form-card" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 380 }}>
                  <div>
                    <div style={{ fontSize: 56, marginBottom: 14 }}>✓</div>
                    <h3>Richiesta inviata!</h3>
                    <p style={{ color: "#5b6878", marginTop: 10 }}>Ti contatto a breve al recapito indicato.</p>
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-lime" style={{ marginTop: 20 }}>
                      O scrivimi su WhatsApp →
                    </a>
                  </div>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-logo">
            <Image src="/logo-white.png" alt="NutriPEM" width={120} height={48} style={{ objectFit: "contain" }} />
          </div>
          <div className="footer-links">
            {[["#chisono","Chi Sono"],["#certificazioni","Certificazioni"],["#formazione","Formazione"],["#esperienze","Esperienze"],["#servizi","Servizi"],["#contatti","Contatti"],["/admin","Admin"]].map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
          <div className="footer-socials">
            <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://instagram.com/nutripem" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="https://linkedin.com/in/pasquale-eugenio-musella" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 NutriPEM — Pasquale Eugenio Musella, Biologo Nutrizionista (FNOB AA_087812). Tutti i diritti riservati.
        </div>
      </footer>

      <style jsx global>{`
        :root{
          --navy:#0f1d31; --navy-deep:#08111f; --navy-soft:#15263e;
          --lime:#cdfa3c; --lime-dim:#aedc1f;
          --ink:#fff; --muted:#97a6bb;
          --paper:#fff; --paper-soft:#f4f6f9; --line:#e4e8ef;
        }
        html{scroll-behavior:smooth;}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Inter',sans-serif;background:var(--paper-soft);color:var(--navy);-webkit-font-smoothing:antialiased;line-height:1.6;}
        h1,h2,h3{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:-.02em;}
        a{text-decoration:none;color:inherit;}
        img{max-width:100%;display:block;}
        .wrap{max-width:1160px;margin:0 auto;padding:0 28px;}

        /* BUTTONS */
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border:none;border-radius:999px;font-family:'Sora',sans-serif;font-weight:700;font-size:14.5px;padding:13px 26px;cursor:pointer;transition:transform .15s,box-shadow .2s;white-space:nowrap;}
        .btn:hover{transform:translateY(-2px);}
        .btn-lime{background:var(--lime);color:var(--navy-deep);box-shadow:0 8px 28px -10px rgba(205,250,60,.55);}
        .btn-navy{background:var(--navy);color:#fff;}
        .btn-wa{background:#25d366;color:#fff;}

        /* NAV */
        header.nav{position:sticky;top:0;z-index:60;background:rgba(8,17,31,.96);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.07);}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;padding:12px 28px;max-width:1160px;margin:0 auto;gap:20px;}
        .brand-logo{display:flex;align-items:center;}
        nav.links{display:flex;align-items:center;gap:26px;}
        nav.links a{color:rgba(255,255,255,.6);font-size:14px;font-weight:600;transition:color .18s;}
        nav.links a:hover{color:#fff;}
        .nav-cta{display:none;}
        @media(min-width:880px){.nav-cta{display:inline-flex;}}
        .burger{display:none;flex-direction:column;gap:5px;background:none;border:none;padding:4px;cursor:pointer;}
        .burger span{display:block;width:22px;height:2px;background:#fff;border-radius:2px;}
        @media(max-width:879px){
          .burger{display:flex;}
          nav.links{display:none;position:fixed;top:62px;left:0;right:0;background:rgba(8,17,31,.98);flex-direction:column;padding:20px 28px;gap:0;border-bottom:1px solid rgba(255,255,255,.1);}
          nav.links.open{display:flex;}
          nav.links a{padding:13px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:16px;color:#fff;}
        }

        /* HERO */
        .hero{background:linear-gradient(165deg,var(--navy) 0%,var(--navy-deep) 100%);color:#fff;padding:90px 0 110px;position:relative;overflow:hidden;}
        .hero-glow{position:absolute;top:-150px;right:-150px;width:700px;height:700px;background:radial-gradient(circle,rgba(205,250,60,.09) 0%,transparent 65%);pointer-events:none;}
        .hero-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:60px;align-items:center;}
        @media(max-width:920px){.hero-grid{grid-template-columns:1fr;}}
        .hero-copy{display:flex;flex-direction:column;gap:0;}
        .eyebrow{display:inline-flex;align-items:center;gap:10px;border:1.5px solid rgba(205,250,60,.4);color:var(--lime);font-size:11.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;padding:9px 18px;border-radius:999px;margin-bottom:26px;font-family:'Sora',sans-serif;}
        .dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--lime);flex-shrink:0;}
        .hero h1{font-size:clamp(44px,6.5vw,74px);line-height:1.01;color:#fff;}
        .accent{color:var(--lime);}
        .lead{margin-top:24px;max-width:520px;color:var(--muted);font-size:17px;line-height:1.65;}
        .lead strong{color:rgba(255,255,255,.9);font-weight:600;}
        .hero-actions{margin-top:34px;}
        .hero-badges{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px;}
        .hero-badge-pill{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:rgba(255,255,255,.75);font-size:12px;font-weight:600;padding:7px 14px;border-radius:999px;}

        /* HERO PHOTO */
        .hero-photo-wrap{display:flex;justify-content:center;}
        .hero-photo-frame{position:relative;width:100%;max-width:400px;aspect-ratio:3/4;}
        .hero-photo-ring{position:absolute;inset:-16px;border-radius:32px;border:2px solid rgba(205,250,60,.2);pointer-events:none;}
        .hero-photo-inner{position:absolute;inset:0;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.1);}
        .hero-photo-card{position:absolute;background:rgba(8,17,31,.92);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px 18px;backdrop-filter:blur(8px);}
        .hero-photo-card.top{top:-14px;left:-14px;}
        .hero-photo-card.bottom{bottom:-14px;right:-14px;}
        .hpc-num{color:var(--lime);font-weight:800;font-size:18px;font-family:'Sora',sans-serif;line-height:1;}
        .hpc-lbl{color:var(--muted);font-size:11px;margin-top:3px;}

        /* TRUST BAR */
        .trustbar{background:var(--navy-deep);padding:15px 0;border-bottom:1px solid rgba(255,255,255,.06);}
        .trustbar-inner{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px 0;}
        .trust-item{display:inline-flex;align-items:center;gap:7px;color:var(--muted);font-size:12.5px;font-weight:600;padding:0 12px;}
        .trust-sep{color:rgba(205,250,60,.3);margin:0 4px;}

        /* SECTIONS */
        .section{padding:100px 0;}
        .bg-white{background:var(--paper);}
        .bg-soft{background:var(--paper-soft);}
        .bg-navy{background:var(--navy);}
        .bg-navy-deep{background:var(--navy-deep);}
        .kicker{display:inline-flex;align-items:center;gap:8px;background:var(--paper-soft);border:1px solid var(--line);color:var(--navy);font-size:11.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;padding:7px 16px;border-radius:999px;margin-bottom:18px;font-family:'Sora',sans-serif;}
        .kicker-dark{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:#fff;}
        h2{font-size:clamp(32px,4.2vw,48px);line-height:1.07;color:var(--navy);}
        .sub{color:#5b6878;font-size:17px;line-height:1.65;max-width:620px;margin-top:16px;}

        /* CHI SONO */
        .chisono-grid{display:grid;grid-template-columns:0.75fr 1.25fr;gap:64px;align-items:start;margin-top:52px;}
        @media(max-width:880px){.chisono-grid{grid-template-columns:1fr;}}
        .chisono-photo-wrap{display:flex;justify-content:center;}
        .chisono-photo{position:relative;width:100%;max-width:280px;aspect-ratio:3/4;border-radius:20px;overflow:hidden;border:1px solid var(--line);}
        .chisono-photo-badge{position:absolute;bottom:12px;left:12px;right:12px;background:rgba(8,17,31,.9);border-radius:10px;padding:8px 12px;display:flex;align-items:center;gap:8px;color:#fff;font-size:13px;font-weight:600;backdrop-filter:blur(6px);}
        .bio{display:flex;flex-direction:column;gap:14px;}
        .bio p{color:#4a5566;font-size:16px;line-height:1.7;}
        .bio p strong{color:var(--navy);}
        .bio-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px;}
        .bio-tag{background:var(--paper-soft);border:1px solid var(--line);padding:7px 16px;border-radius:999px;font-size:13.5px;font-weight:600;color:var(--navy);}

        /* ISAK STRIPS */
        .isak-strip{background:var(--navy);padding:60px 0;}
        .isak-strip-label{display:flex;align-items:center;gap:16px;margin-bottom:30px;flex-wrap:wrap;}
        .isak-badge{background:var(--lime);color:var(--navy-deep);font-size:12px;font-weight:800;padding:6px 16px;border-radius:999px;font-family:'Sora',sans-serif;white-space:nowrap;}
        .isak-strip-label span:last-child{color:var(--muted);font-size:14px;}
        .isak-charts-row{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
        @media(max-width:780px){.isak-charts-row{grid-template-columns:1fr;}}
        .isak-chart-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;}

        .isak-full-strip{background:var(--paper-soft);padding:80px 0;}
        .isak-full-label{display:grid;grid-template-columns:1fr 1.4fr;gap:50px;align-items:center;}
        @media(max-width:880px){.isak-full-label{grid-template-columns:1fr;}}
        .isak-badge-lg{background:var(--navy);color:var(--lime);font-size:12px;font-weight:800;padding:7px 18px;border-radius:999px;display:inline-block;margin-bottom:16px;}
        .isak-full-label h3{font-size:clamp(22px,3vw,30px);color:var(--navy);margin-bottom:12px;}
        .isak-full-label p{color:#5b6878;font-size:15px;line-height:1.65;}
        .isak-full-charts{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        @media(max-width:580px){.isak-full-charts{grid-template-columns:1fr;}}
        .isak-full-chart{border-radius:14px;overflow:hidden;border:1px solid var(--line);}

        /* STATS */
        .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:44px 0 52px;}
        @media(max-width:640px){.stats-row{grid-template-columns:1fr;}}
        .stat-card{background:var(--navy);border-radius:18px;padding:30px 26px;}
        .stat-num{font-size:36px;font-weight:800;color:var(--lime);font-family:'Sora',sans-serif;}
        .stat-lbl{color:var(--muted);font-size:14px;margin-top:8px;font-weight:600;}

        /* CERT */
        .cert-grid{display:flex;flex-direction:column;gap:20px;}
        .cert-card{position:relative;border-radius:16px;padding:26px 28px;border:1.5px solid var(--line);display:grid;grid-template-columns:52px 1fr;gap:18px;align-items:start;transition:transform .2s,box-shadow .2s;}
        .cert-card:hover{transform:translateY(-3px);box-shadow:0 14px 36px -10px rgba(0,0,0,.1);}
        .cert-yellow{background:#fef9e7;border-color:#e9d27a;}
        .cert-blue{background:#eaf1fd;border-color:#a9c4ee;}
        .cert-pink{background:#fcedf0;border-color:#eaaab6;}
        .cert-purple{background:#f2ecfd;border-color:#c6a9ee;}
        .cert-green{background:#edfbf0;border-color:#86d9a0;}
        .cert-teal{background:#e8f8f5;border-color:#7ecfc0;}
        .cert-highlight{border-color:#0f1d31;border-width:2px;box-shadow:0 0 0 3px rgba(15,29,49,.1);}
        .cert-icon{width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,.7);display:flex;align-items:center;justify-content:center;font-size:22px;}
        .cert-meta{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;}
        .tag-pill{font-size:11.5px;font-weight:700;padding:4px 12px;border-radius:999px;background:rgba(255,255,255,.7);color:#3a3a3a;}
        .cert-title{font-size:17.5px;font-weight:800;color:var(--navy);font-family:'Sora',sans-serif;line-height:1.3;}
        .cert-org{color:#5b6878;font-size:14px;margin-top:5px;}
        .top-cert{position:absolute;top:-13px;right:18px;background:var(--lime);color:var(--navy-deep);font-size:10.5px;font-weight:800;letter-spacing:.05em;padding:5px 13px;border-radius:999px;font-family:'Sora',sans-serif;}
        .figc-badge{position:absolute;top:-13px;left:18px;background:var(--navy);color:#fff;font-size:10.5px;font-weight:800;padding:5px 13px;border-radius:999px;font-family:'Sora',sans-serif;}
        .figc-note{margin-top:12px;padding:12px 16px;background:rgba(15,29,49,.06);border-radius:10px;font-size:13.5px;color:#4a5566;line-height:1.6;border-left:3px solid var(--navy);}

        /* TIMELINE */
        .tl-wrap{margin-top:50px;display:flex;flex-direction:column;gap:14px;}
        .tl-item{display:grid;grid-template-columns:140px 1fr;gap:0;border-radius:14px;overflow:hidden;background:#fff;border:1px solid var(--line);transition:transform .2s,box-shadow .2s;}
        .tl-item:hover{transform:translateY(-2px);box-shadow:0 8px 24px -8px rgba(0,0,0,.08);}
        .tl-left{background:var(--tl-bg, #f4f6f9);padding:20px 18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;}
        .tl-icon{font-size:24px;}
        .tl-year{font-size:12px;font-weight:800;color:var(--navy);font-family:'Sora',sans-serif;letter-spacing:.04em;}
        .tl-body{padding:20px 22px;}
        .tl-title{font-weight:700;font-size:15.5px;color:var(--navy);}
        .tl-desc{color:#5b6878;font-size:13.5px;margin-top:5px;line-height:1.55;}
        @media(max-width:600px){.tl-item{grid-template-columns:90px 1fr;} .tl-left{padding:16px 10px;}}

        /* WORK */
        .work-grid{display:flex;flex-direction:column;gap:14px;margin-top:50px;}
        .work-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 26px;display:grid;grid-template-columns:56px 1fr;gap:18px;align-items:start;transition:transform .2s,box-shadow .2s;}
        .work-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px -8px rgba(0,0,0,.08);}
        .work-featured{border-color:var(--navy);border-width:2px;background:linear-gradient(135deg,#f8faff,#fff);}
        .work-icon-wrap{width:52px;height:52px;border-radius:14px;background:var(--paper-soft);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-size:22px;}
        .work-feat-label{display:inline-block;background:var(--navy);color:#fff;font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;margin-bottom:6px;font-family:'Sora',sans-serif;}
        .work-period{font-size:12.5px;font-weight:700;color:var(--lime-dim);font-family:'Sora',sans-serif;letter-spacing:.04em;margin-bottom:4px;}
        .work-title{font-weight:700;font-size:16px;color:var(--navy);}
        .work-desc{color:#5b6878;font-size:14px;margin-top:4px;}

        /* TESTIMONIAL */
        .testimonial-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:52px 56px;position:relative;max-width:820px;margin:0 auto;}
        @media(max-width:640px){.testimonial-card{padding:36px 28px;}}
        .quote-mark{position:absolute;top:-24px;left:48px;font-size:90px;line-height:1;color:var(--lime);font-family:'Sora',sans-serif;opacity:.5;}
        .testimonial-text{font-size:18px;line-height:1.75;color:rgba(255,255,255,.88);font-style:italic;}
        .testimonial-footer{display:flex;align-items:center;gap:16px;margin-top:32px;flex-wrap:wrap;}
        .t-avatar{width:46px;height:46px;border-radius:50%;background:var(--lime);color:var(--navy-deep);font-weight:800;font-size:15px;font-family:'Sora',sans-serif;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .t-name{font-weight:700;color:#fff;font-size:15.5px;}
        .t-role{color:var(--muted);font-size:13px;margin-top:2px;}
        .t-badge{margin-left:auto;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);padding:8px 16px;border-radius:999px;font-size:13px;color:#fff;font-weight:600;}
        @media(max-width:600px){.t-badge{margin-left:0;}}

        /* SERVIZI */
        .serv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px;}
        @media(max-width:880px){.serv-grid{grid-template-columns:1fr;}}
        .serv-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:20px;padding:34px 28px;display:flex;flex-direction:column;color:#fff;transition:transform .2s,border-color .2s;}
        .serv-card:hover{transform:translateY(-4px);border-color:rgba(205,250,60,.3);}
        .serv-feat{border-color:var(--lime);box-shadow:0 0 0 1px var(--lime),0 24px 48px -16px rgba(205,250,60,.25);background:rgba(205,250,60,.04);}
        .serv-badge{align-self:flex-start;background:var(--lime);color:var(--navy-deep);font-size:11px;font-weight:800;padding:5px 14px;border-radius:999px;margin-bottom:20px;font-family:'Sora',sans-serif;}
        .serv-icon{font-size:32px;margin-bottom:16px;}
        .serv-card h3{font-size:21px;margin-bottom:10px;}
        .serv-card p{color:var(--muted);font-size:15px;line-height:1.65;flex:1;}
        .serv-list{list-style:none;margin:18px 0 24px;display:flex;flex-direction:column;gap:9px;}
        .serv-list li{font-size:14px;color:rgba(255,255,255,.8);display:flex;gap:9px;align-items:flex-start;}
        .serv-list li::before{content:"✓";color:var(--lime);font-weight:800;flex-shrink:0;}

        /* CONTATTI */
        .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;margin-top:52px;align-items:start;}
        @media(max-width:880px){.contact-grid{grid-template-columns:1fr;}}
        .contact-card{background:var(--navy);border-radius:22px;padding:40px;color:#fff;}
        .contact-card h3{font-size:22px;margin-bottom:10px;}
        .contact-card p{color:var(--muted);font-size:15px;margin-bottom:28px;line-height:1.6;}
        .contact-channels{display:flex;flex-direction:column;gap:12px;}
        .channel-btn{display:flex;align-items:center;gap:16px;padding:14px 18px;border-radius:14px;border:1px solid rgba(255,255,255,.1);transition:all .18s;color:#fff;}
        .channel-btn:hover{transform:translateX(4px);}
        .channel-btn strong{display:block;font-size:14.5px;}
        .channel-btn span{display:block;font-size:12.5px;color:var(--muted);margin-top:1px;}
        .channel-wa{background:rgba(37,211,102,.12);border-color:rgba(37,211,102,.3);}
        .channel-wa:hover{background:rgba(37,211,102,.2);}
        .channel-email{background:rgba(205,250,60,.07);border-color:rgba(205,250,60,.2);}
        .channel-email:hover{background:rgba(205,250,60,.14);}
        .channel-ig{background:rgba(225,48,108,.1);border-color:rgba(225,48,108,.25);}
        .channel-ig:hover{background:rgba(225,48,108,.18);}
        .channel-li{background:rgba(10,102,194,.1);border-color:rgba(10,102,194,.25);}
        .channel-li:hover{background:rgba(10,102,194,.18);}
        .form-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:38px;}
        .form-card h3{font-size:22px;color:var(--navy);margin-bottom:6px;}
        .field{margin-bottom:16px;}
        .field label{display:block;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:7px;}
        .field input,.field select,.field textarea{width:100%;padding:12px 14px;border-radius:11px;border:1.5px solid var(--line);font-family:'Inter',sans-serif;font-size:14.5px;color:var(--navy);background:#fff;transition:border-color .15s;}
        .field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--lime-dim);}
        .field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        @media(max-width:480px){.field-row{grid-template-columns:1fr;}}
        .contact-choice{display:flex;gap:14px;margin-top:4px;}
        .choice-opt{display:flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;border:1.5px solid var(--line);cursor:pointer;font-weight:600;font-size:14px;transition:border-color .15s;}
        .choice-opt:has(input:checked){border-color:var(--lime-dim);background:#f8ffe0;}
        .choice-opt input{accent-color:var(--lime-dim);}

        /* FOOTER */
        .footer{background:var(--navy-deep);color:var(--muted);padding:52px 0 28px;}
        .footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;border-bottom:1px solid rgba(255,255,255,.08);padding-bottom:28px;margin-bottom:22px;}
        .footer-links{display:flex;flex-wrap:wrap;gap:18px;}
        .footer-links a{font-size:13.5px;color:var(--muted);transition:color .15s;}
        .footer-links a:hover{color:#fff;}
        .footer-socials{display:flex;gap:12px;}
        .footer-socials a{width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;color:var(--muted);transition:all .15s;}
        .footer-socials a:hover{background:rgba(205,250,60,.15);color:var(--lime);}
        .footer-bottom{text-align:center;font-size:12.5px;color:#4e5c70;}
      `}</style>
    </>
  );
}
