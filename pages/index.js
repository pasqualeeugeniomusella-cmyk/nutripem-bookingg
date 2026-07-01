import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { translations, LANGUAGES } from "../lib/translations";

const WA_LINK = "https://wa.me/393476907490";

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

const WA_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CERTS = [
  { color:"yellow", top:true,  icon:"🏅", period:"25 Maggio 2026", type:"Certificazione Internazionale", title:"FIFA Diploma in Football Medicine",              org:"FIFA — Fédération Internationale de Football Association" },
  { color:"blue",   top:true,  icon:"🏆", period:"Maggio 2026",    type:"Diploma Federale",               title:"Diploma in Nutrizione applicata al Calcio",     org:"FIGC — Federazione Italiana Giuoco Calcio", highlight:true },
  { color:"pink",   top:true,  icon:"🏅", period:"Marzo 2026",     type:"Diploma Professionale",          title:"Professional Diploma in Sports Nutrition",      org:"Barça Innovation Hub — FC Barcelona's Education Division" },
  { color:"purple", top:true,  icon:"⭐", period:"2022–2023",      type:"Master Internazionale",          title:"Máster en Entrenamiento y Nutrición Deportiva", org:"Escuela Universitaria Real Madrid — Universidad Europea" },
  { color:"green",  top:false, icon:"🧬", period:"Dicembre 2023",  type:"Certificazione Internazionale",  title:"Antropometrista ISAK Livello 2",                org:"International Society for the Advancement of Kinanthropometry" },
  { color:"teal",   top:false, icon:"🔬", period:"2021",           type:"Abilitazione",                   title:"Biologo Nutrizionista — FNOB",                  org:"Federazione Nazionale degli Ordini dei Biologi · Matricola AA_087812" },
];

const TL_ITEMS = [
  { year:"2012",      icon:"🎓", title:"Diploma — Istituto Professionale R. Drengot",           desc:"Aversa (CE).",                                                                                         color:"#e8f4e8" },
  { year:"2017",      icon:"🎓", title:"Laurea in Tecnologie Alimentari",                         desc:"Università degli Studi di Napoli Federico II.",                                                        color:"#e8f0fb" },
  { year:"2020",      icon:"🎓", title:"Laurea Magistrale in Scienze della Nutrizione",           desc:"Università degli Studi di Napoli Federico II.",                                                        color:"#e8f0fb" },
  { year:"2021",      icon:"🔬", title:"Abilitazione — Biologo Nutrizionista FNOB",               desc:"Matricola AA_087812.",                                                                                  color:"#f2ecfd" },
  { year:"2022–23",   icon:"🏟️", title:"Tirocinio Real Madrid CF + Master Universidad Europea",  desc:"Area nutrizione Servizi Medici, Ciudad Real Madrid Valdebebas. Máster en Entrenamiento y Nutrición Deportiva.", color:"#fff3e0" },
  { year:"Dic 2023",  icon:"📏", title:"Antropometrista ISAK Livello 2",                          desc:"Certificazione internazionale in valutazione della composizione corporea.",                              color:"#fdf6e0" },
  { year:"Mar 2026",  icon:"🔵", title:"Professional Diploma in Sports Nutrition",                desc:"Barça Innovation Hub — FC Barcelona.",                                                                  color:"#e8f0fb" },
  { year:"Mag 2026",  icon:"🇮🇹", title:"Diploma FIGC in Nutrizione applicata al Calcio",        desc:"Federazione Italiana Giuoco Calcio — accesso selettivo.",                                               color:"#eaf8ed" },
  { year:"25/05/2026",icon:"⚽", title:"FIFA Diploma in Football Medicine",                       desc:"FIFA — Fédération Internationale de Football Association.",                                              color:"#fdf6e0" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [lang, setLang] = useState("it");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nutripem_lang");
    if (saved && LANGUAGES.includes(saved)) setLang(saved);
  }, []);

  function changeLang(l) {
    setLang(l);
    setLangOpen(false);
    localStorage.setItem("nutripem_lang", l);
  }

  const t = translations[lang];
  const isRTL = t.dir === "rtl";

  return (
    <>
      <Head>
        <title>NutriPEM | Pasquale Eugenio Musella — Nutrizionista Sportivo</title>
        <meta name="description" content="Nutrizionista sportivo specializzato in calcio, basket e sport di squadra." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div dir={t.dir} style={{ fontFamily: lang === "zh" ? "'Noto Sans SC', sans-serif" : lang === "ar" ? "'Noto Sans Arabic', sans-serif" : lang === "ru" ? "'Inter', sans-serif" : "'Inter', sans-serif" }}>

        {/* ─── NAVBAR ─── */}
        <header className="nav">
          <div className="nav-inner">
            <a href="#top" className="brand-logo">
              <Image src="/logo-white.png" alt="NutriPEM" width={160} height={64} style={{ objectFit:"contain" }} />
            </a>
            <nav className={`links ${menuOpen ? "open" : ""}`}>
              {[
                ["#chisono", t.nav.chiSono],
                ["#certificazioni", t.nav.certificazioni],
                ["#servizi", t.nav.servizi],
                ["#contatti", t.nav.contatti],
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </nav>

            <div className="nav-right">
              {/* Language picker */}
              <div className="lang-picker">
                <button className="lang-btn" onClick={() => setLangOpen(o => !o)}>
                  {t.langLabel} <span className="lang-arrow">▾</span>
                </button>
                {langOpen && (
                  <div className="lang-dropdown">
                    {LANGUAGES.map(l => (
                      <button key={l} className={`lang-option ${l === lang ? "active" : ""}`} onClick={() => changeLang(l)}>
                        {translations[l].langLabel}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-lime nav-cta">
                {WA_SVG} {t.nav.contattami}
              </a>
            </div>

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
                <div className="eyebrow"><span className="dot" />{t.hero.eyebrow}</div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1>{t.hero.h1a} <span className="accent">{t.hero.h1b}</span><br />{t.hero.h1c}</h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="lead">{t.hero.lead} <strong>{t.hero.leadBold}</strong> {t.hero.leadEnd}</p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="hero-actions">
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-lime">{WA_SVG}{t.hero.cta}</a>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="hero-badges">
                  {t.trust.map((item, i) => <div key={i} className="hero-badge-pill">{item}</div>)}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15} className="hero-photo-wrap">
              <div className="hero-photo-frame">
                <div className="hero-photo-ring" />
                <div className="hero-photo-inner">
                  <Image src="/profile.jpg" alt="Pasquale Eugenio Musella" fill style={{ objectFit:"cover", objectPosition:"center top" }} priority />
                </div>
                <div className="hero-photo-card top">
                  <div className="hpc-num">ISAK 2</div>
                  <div className="hpc-lbl">{lang === "ar" ? "أنثروبومترية" : lang === "zh" ? "体型测量师" : lang === "ru" ? "Антропометрист" : "Antropometrista"}</div>
                </div>
                <div className="hero-photo-card bottom">
                  <div className="hpc-num">5+</div>
                  <div className="hpc-lbl">{lang === "ar" ? "سنوات خبرة" : lang === "zh" ? "年经验" : lang === "ru" ? "Лет опыта" : lang === "en" ? "Years exp." : lang === "es" ? "Años exp." : lang === "pt" ? "Anos exp." : "Anni nel settore"}</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <section className="trustbar">
          <div className="wrap trustbar-inner">
            {t.trust.map((item, i, arr) => (
              <span key={i} className="trust-item">
                <span>{item}</span>
                {i < arr.length - 1 && <span className="trust-sep">·</span>}
              </span>
            ))}
          </div>
        </section>

        {/* ─── CHI SONO + PERCORSO + ESPERIENZE (compatto) ─── */}
        <section className="section bg-white" id="chisono">
          <div className="wrap">
            <FadeIn>
              <div className="kicker"><span className="dot" />{t.chiSono.kicker}</div>
              <h2>{t.chiSono.title} <span className="accent">{t.chiSono.accent}</span></h2>
            </FadeIn>

            {/* TOP GRID: foto + bio + numeri */}
            <div className="profilo-grid">
              <FadeIn delay={0.1} className="chisono-photo-wrap">
                <div className="chisono-photo">
                  <Image src="/profile.jpg" alt="Pasquale Eugenio Musella" fill style={{ objectFit:"cover", objectPosition:"center top" }} />
                  <div className="chisono-photo-badge"><span>🧬</span><span>{t.chiSono.badge}</span></div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="profilo-right">
                <p className="profilo-bio">{t.chiSono.p1}</p>
                <p className="profilo-bio">{t.chiSono.p2}</p>
                <div className="profilo-numeri">
                  <div className="pn-card"><div className="pn-num">2</div><div className="pn-lbl">{lang==="en"?"Federico II Degrees":lang==="es"?"Títulos Federico II":lang==="pt"?"Diplomas Federico II":lang==="ar"?"درجات فيدريكو II":lang==="ru"?"Дипломов":lang==="zh"?"学位":"Lauree Federico II"}</div></div>
                  <div className="pn-card"><div className="pn-num">1</div><div className="pn-lbl">{lang==="en"?"Real Madrid Master":lang==="es"?"Máster Real Madrid":lang==="pt"?"Master Real Madrid":lang==="ar"?"ماستر ريال مدريد":lang==="ru"?"Мастер Реал Мадрид":lang==="zh"?"皇马硕士":"Master Real Madrid"}</div></div>
                  <div className="pn-card accent-card"><div className="pn-num">5+</div><div className="pn-lbl">{lang==="en"?"Intl. Certifications":lang==="es"?"Cert. internacionales":lang==="pt"?"Cert. internacionais":lang==="ar"?"شهادات دولية":lang==="ru"?"Сертификатов":lang==="zh"?"国际证书":"Cert. internazionali"}</div></div>
                  <div className="pn-card"><div className="pn-num">ISAK 2</div><div className="pn-lbl">{lang==="en"?"Anthropometrist":lang==="es"?"Antropometrista":lang==="pt"?"Antropometrista":lang==="ar"?"أنثروبومترية":lang==="ru"?"Антропометрист":lang==="zh"?"体型测量师":"Antropometrista"}</div></div>
                </div>
                <div className="bio-tags">{t.chiSono.tags.map(tag => <span key={tag} className="bio-tag">{tag}</span>)}</div>
              </FadeIn>
            </div>

            {/* MILESTONES: i momenti chiave del percorso */}
            <FadeIn delay={0.1}>
              <div className="milestones-label">
                <span className="milestone-kicker">📍 {lang==="en"?"Key milestones":lang==="es"?"Hitos clave":lang==="pt"?"Marcos principais":lang==="ar"?"المحطات الرئيسية":lang==="ru"?"Ключевые этапы":lang==="zh"?"关键里程碑":"Tappe fondamentali"}</span>
              </div>
            </FadeIn>
            <div className="milestones-row">
              {[
                { year:"2020", icon:"🎓", label:lang==="en"?"MSc Nutrition":lang==="es"?"Máster Nutrición":lang==="pt"?"Mestrado Nutrição":lang==="ar"?"ماجستير تغذية":lang==="ru"?"Магистр питания":lang==="zh"?"营养学硕士":"Laurea Magistrale Nutrizione", sub:"Federico II" },
                { year:"2021", icon:"🔬", label:lang==="en"?"FNOB Biologist":lang==="es"?"Biólogo FNOB":lang==="pt"?"Biólogo FNOB":lang==="ar"?"بيولوجي FNOB":lang==="ru"?"Биолог FNOB":lang==="zh"?"生物学家FNOB":"Biologo FNOB", sub:"AA_087812" },
                { year:"2022–23", icon:"🏟️", label:lang==="en"?"Real Madrid CF":lang==="es"?"Real Madrid CF":lang==="pt"?"Real Madrid CF":lang==="ar"?"ريال مدريد CF":lang==="ru"?"Реал Мадрид CF":lang==="zh"?"皇家马德里CF":"Tirocinio Real Madrid", sub:lang==="en"?"Internship + Master":lang==="es"?"Prácticas + Máster":lang==="pt"?"Estágio + Master":lang==="ar"?"تدريب + ماستر":lang==="ru"?"Стажировка + Мастер":lang==="zh"?"实习+硕士":"Tirocinio + Master" },
                { year:"2023", icon:"📏", label:"ISAK Level 2", sub:lang==="en"?"Anthropometrist":lang==="es"?"Antropometrista":lang==="pt"?"Antropometrista":lang==="ar"?"أنثروبومترية":lang==="ru"?"Антропометрист":lang==="zh"?"体型测量师":"Antropometrista" },
                { year:"2023–26", icon:"🏀", label:lang==="en"?"PSA Basket":lang==="es"?"PSA Basket":lang==="pt"?"PSA Basket":lang==="ar"?"PSA باسكت":lang==="ru"?"PSA Basket":lang==="zh"?"PSA篮球":"PSA Basket", sub:lang==="en"?"Sports Nutritionist":lang==="es"?"Nutricionista deportivo":lang==="pt"?"Nutricionista esportivo":lang==="ar"?"أخصائي تغذية":lang==="ru"?"Нутрициолог":lang==="zh"?"运动营养师":"Nutrizionista Sportivo" },
                { year:"2026", icon:"⚽", label:lang==="en"?"FIFA + FIGC + Barça":lang==="ar"?"فيفا + FIGC + برشلونة":lang==="zh"?"FIFA+FIGC+巴萨":"FIFA + FIGC + Barça", sub:lang==="en"?"3 top certifications":lang==="es"?"3 top certificaciones":lang==="pt"?"3 top certificações":lang==="ar"?"3 شهادات قمة":lang==="ru"?"3 топ сертификата":lang==="zh"?"3项顶级证书":"3 certificazioni top" },
              ].map((m, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="milestone-card">
                    <div className="ms-year">{m.year}</div>
                    <div className="ms-icon">{m.icon}</div>
                    <div className="ms-label">{m.label}</div>
                    <div className="ms-sub">{m.sub}</div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* ESPERIENZE HIGHLIGHT: solo le 3 più importanti */}
            <div className="exp-highlight-row">
              {[
                { icon:"🏟️", color:"#fff3e0", border:"#f5c87a", title:lang==="en"?"Real Madrid CF — Internship":lang==="es"?"Real Madrid CF — Prácticas":lang==="pt"?"Real Madrid CF — Estágio":lang==="ar"?"ريال مدريد CF — تدريب":lang==="ru"?"Реал Мадрид CF — Стажировка":lang==="zh"?"皇马CF-实习":"Real Madrid CF — Tirocinio", period:"Dic 2022 – Giu 2023", desc:lang==="en"?"Nutrition department of Real Madrid's Medical Services, working with elite athletes.":lang==="es"?"Área de nutrición de los Servicios Médicos del Real Madrid, con atletas de élite.":lang==="pt"?"Área de nutrição dos Serviços Médicos do Real Madrid, com atletas de elite.":lang==="ar"?"قسم التغذية في الخدمات الطبية لريال مدريد مع الرياضيين من النخبة.":lang==="ru"?"Отдел питания медицинских служб Реал Мадрид, работа с элитными спортсменами.":lang==="zh"?"皇家马德里医疗部门营养科，与精英运动员合作。":"Area nutrizione Servizi Medici del Real Madrid, con atleti d'élite.", featured:true },
                { icon:"🏀", color:"#e8f0fb", border:"#a9c4ee", title:lang==="en"?"PSA Basket Sant'Antimo":lang==="ar"?"PSA Basket Sant'Antimo":lang==="zh"?"PSA篮球":"PSA Basket Sant'Antimo", period:"Nov 2023 – Mag 2026", desc:lang==="en"?"Sports nutritionist for the club across National Series B, Series C and youth sector.":lang==="es"?"Nutricionista deportivo del club en Serie B Nacional, Serie C y cantera.":lang==="pt"?"Nutricionista esportivo do clube na Série B Nacional, Série C e setor juvenil.":lang==="ar"?"أخصائي تغذية رياضية للنادي في الدوري الوطني B والدوري C والقطاع الشبابي.":lang==="ru"?"Нутрициолог клуба в Национальной серии B, серии C и молодёжном секторе.":lang==="zh"?"俱乐部运动营养师，覆盖全国B联赛、C联赛及青训。":"Nutrizionista del club tra Serie B Nazionale, Serie C e settore giovanile.", featured:false },
                { icon:"🦇", color:"#fcedf0", border:"#eaaab6", title:lang==="en"?"Valencia CF Academy":lang==="ar"?"أكاديمية فالنسيا CF":lang==="zh"?"巴伦西亚CF学院":"Valencia CF Academy", period:"Nov 2024 – Lug 2025", desc:lang==="en"?"Applied nutrition for youth football — Technical Partnership Caserta, AG Soccer School.":lang==="es"?"Nutrición aplicada al fútbol juvenil — Technical Partnership Caserta, AG Soccer School.":lang==="pt"?"Nutrição aplicada ao futebol juvenil — Technical Partnership Caserta, AG Soccer School.":lang==="ar"?"تغذية مطبقة لكرة القدم الشبابية — Technical Partnership Caserta, AG Soccer School.":lang==="ru"?"Питание для молодёжного футбола — Technical Partnership Caserta, AG Soccer School.":lang==="zh"?"青训足球应用营养——卡塞尔塔技术合作，AG足球学校。":"Nutrizione applicata al calcio giovanile — Technical Partnership Caserta.", featured:false },
              ].map((e, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="exp-hl-card" style={{ background:e.color, borderColor:e.border }}>
                    {e.featured && <span className="exp-hl-feat">⭐ {lang==="en"?"Elite exp.":lang==="es"?"Exp. élite":lang==="pt"?"Exp. elite":lang==="ar"?"خبرة نخبة":lang==="ru"?"Элит. опыт":lang==="zh"?"精英经历":"Esperienza d'élite"}</span>}
                    <div className="exp-hl-icon">{e.icon}</div>
                    <div className="exp-hl-title">{e.title}</div>
                    <div className="exp-hl-period">{e.period}</div>
                    <div className="exp-hl-desc">{e.desc}</div>
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
                <p className="testimonial-text">{t.testimonianza.text}</p>
                <div className="testimonial-footer">
                  <div className="t-avatar">CP</div>
                  <div>
                    <div className="t-name">{t.testimonianza.name}</div>
                    <div className="t-role">{t.testimonianza.role}</div>
                  </div>
                  <div className="t-badge">🏟️ Real Madrid CF</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── ISAK FULL ─── */}
        <section className="isak-full-strip">
          <div className="wrap">
            <FadeIn>
              <div className="isak-full-label">
                <div>
                  <div className="isak-badge-lg">{t.isak.badgeLg}</div>
                  <h3>{t.isak.title}</h3>
                  <p>{t.isak.desc2}</p>
                </div>
                <div className="isak-full-charts">
                  {["isak-health","isak-adiposity"].map((name) => (
                    <div key={name} className="isak-full-chart">
                      <Image src={`/${name}.jpg`} alt="ISAK chart" width={500} height={400} style={{ width:"100%", height:"auto", borderRadius:12 }} />
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
              <div className="kicker kicker-dark"><span className="dot" />{t.servizi.kicker}</div>
              <h2 style={{ color:"#fff" }}>{t.servizi.title} <span className="accent">{t.servizi.accent}</span></h2>
              <p className="sub" style={{ color:"#97a6bb" }}>{t.servizi.sub}</p>
            </FadeIn>
            <div className="serv-grid">
              {t.servizi.items.map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`serv-card ${s.feat ? "serv-feat" : ""}`}>
                    {s.feat && <div className="serv-badge">{t.servizi.mostChosen}</div>}
                    <div className="serv-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="serv-list">{s.items.map(item => <li key={item}>{item}</li>)}</ul>
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className={`btn ${s.feat ? "btn-lime" : "btn-wa"}`}>
                      {WA_SVG}{s.cta}
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
              <div className="kicker"><span className="dot" />{t.contatti.kicker}</div>
              <h2>{t.contatti.title} <span className="accent">{t.contatti.accent}</span></h2>
            </FadeIn>
            <div className="contact-grid">
              <FadeIn delay={0.1}>
                <div className="contact-card">
                  <h3>{t.contatti.cardTitle}</h3>
                  <p>{t.contatti.cardDesc}</p>
                  <div className="contact-channels">
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="channel-btn channel-wa">
                      {WA_SVG}<div><strong>WhatsApp</strong><span>347 690 7490</span></div>
                    </a>
                    <a href="mailto:pasqualeeugeniomusella@gmail.com" className="channel-btn channel-email">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <div><strong>Email</strong><span>pasqualeeugeniomusella@gmail.com</span></div>
                    </a>
                    <a href="https://instagram.com/musella.pasquale_nutripem" target="_blank" rel="noreferrer" className="channel-btn channel-ig">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                      <div><strong>Instagram</strong><span>@musella.pasquale_nutripem</span></div>
                    </a>
                    <a href="https://www.linkedin.com/in/pasquale-eugenio-musella-ba1073167/" target="_blank" rel="noreferrer" className="channel-btn channel-li">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                      <div><strong>LinkedIn</strong><span>Pasquale Eugenio Musella</span></div>
                    </a>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                {!sent ? (
                  <form className="form-card" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                    <h3>{t.contatti.formTitle}</h3>
                    <p style={{ color:"#5b6878", fontSize:14, marginBottom:22 }}>{t.contatti.formDesc}</p>
                    <div className="field-row">
                      <div className="field"><label>{t.contatti.name}</label><input type="text" required placeholder={t.contatti.name} /></div>
                      <div className="field"><label>{t.contatti.surname}</label><input type="text" required placeholder={t.contatti.surname} /></div>
                    </div>
                    <div className="field">
                      <label>{t.contatti.contactPref}</label>
                      <div className="contact-choice">
                        <label className="choice-opt"><input type="radio" name="cm" defaultChecked /><span>💬 WhatsApp</span></label>
                        <label className="choice-opt"><input type="radio" name="cm" /><span>✉️ Email</span></label>
                      </div>
                    </div>
                    <div className="field"><label>{t.contatti.contactInfo}</label><input type="text" required placeholder={t.contatti.contactInfoPh} /></div>
                    <div className="field">
                      <label>{t.contatti.service}</label>
                      <select>{t.contatti.services.map(s => <option key={s}>{s}</option>)}</select>
                    </div>
                    <div className="field"><label>{t.contatti.message}</label><textarea rows={3} placeholder={t.contatti.messagePh} /></div>
                    <button type="submit" className="btn btn-navy" style={{ width:"100%", justifyContent:"center", padding:"14px", marginTop:4 }}>{t.contatti.send}</button>
                  </form>
                ) : (
                  <div className="form-card" style={{ display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", minHeight:380 }}>
                    <div>
                      <div style={{ fontSize:56, marginBottom:14 }}>✓</div>
                      <h3>{t.contatti.sentTitle}</h3>
                      <p style={{ color:"#5b6878", marginTop:10 }}>{t.contatti.sentDesc}</p>
                      <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-lime" style={{ marginTop:20 }}>{t.contatti.sentWa}</a>
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
              <Image src="/logo-white.png" alt="NutriPEM" width={180} height={72} style={{ objectFit:"contain" }} />
            </div>
            <div className="footer-links">
              {[["#chisono", t.nav.chiSono],["#certificazioni", t.nav.certificazioni],["#servizi", t.nav.servizi],["#contatti", t.nav.contatti],["/admin","Admin"]].map(([href, label]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </div>
            <div className="footer-socials">
              <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp">{WA_SVG}</a>
              <a href="https://instagram.com/musella.pasquale_nutripem" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/pasquale-eugenio-musella-ba1073167/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">{t.footer.rights}</div>
        </footer>

      </div>

      <style jsx global>{`
        :root{
          --navy:#0f1d31;--navy-deep:#08111f;--navy-soft:#15263e;
          --lime:#cdfa3c;--lime-dim:#aedc1f;
          --ink:#fff;--muted:#97a6bb;
          --paper:#fff;--paper-soft:#f4f6f9;--line:#e4e8ef;
        }
        html{scroll-behavior:smooth;}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Inter',sans-serif;background:var(--paper-soft);color:var(--navy);-webkit-font-smoothing:antialiased;line-height:1.6;}
        h1,h2,h3{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:-.02em;}
        a{text-decoration:none;color:inherit;}
        img{max-width:100%;display:block;}
        .wrap{max-width:1160px;margin:0 auto;padding:0 28px;}

        .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border:none;border-radius:999px;font-family:'Sora',sans-serif;font-weight:700;font-size:14.5px;padding:13px 26px;cursor:pointer;transition:transform .15s,box-shadow .2s;white-space:nowrap;}
        .btn:hover{transform:translateY(-2px);}
        .btn-lime{background:var(--lime);color:var(--navy-deep);box-shadow:0 8px 28px -10px rgba(205,250,60,.55);}
        .btn-navy{background:var(--navy);color:#fff;}
        .btn-wa{background:#25d366;color:#fff;}

        header.nav{position:sticky;top:0;z-index:60;background:rgba(8,17,31,.96);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.07);}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;padding:12px 28px;max-width:1160px;margin:0 auto;gap:20px;}
        .brand-logo{display:flex;align-items:center;}
        nav.links{display:flex;align-items:center;gap:26px;}
        nav.links a{color:rgba(255,255,255,.6);font-size:14px;font-weight:600;transition:color .18s;}
        nav.links a:hover{color:#fff;}
        .nav-right{display:flex;align-items:center;gap:12px;}
        .nav-cta{display:none;}
        @media(min-width:880px){.nav-cta{display:inline-flex;}}

        .lang-picker{position:relative;}
        .lang-btn{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#fff;padding:8px 14px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;transition:background .15s;}
        .lang-btn:hover{background:rgba(255,255,255,.15);}
        .lang-arrow{font-size:10px;opacity:.7;}
        .lang-dropdown{position:absolute;top:calc(100% + 8px);right:0;background:var(--navy);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:8px;display:flex;flex-direction:column;gap:4px;min-width:130px;box-shadow:0 20px 40px -10px rgba(0,0,0,.5);z-index:100;}
        .lang-option{background:none;border:none;color:rgba(255,255,255,.7);padding:9px 14px;border-radius:8px;font-size:13.5px;font-weight:600;cursor:pointer;text-align:left;transition:all .15s;}
        .lang-option:hover{background:rgba(255,255,255,.08);color:#fff;}
        .lang-option.active{background:var(--lime);color:var(--navy-deep);}

        .burger{display:none;flex-direction:column;gap:5px;background:none;border:none;padding:4px;cursor:pointer;}
        .burger span{display:block;width:22px;height:2px;background:#fff;border-radius:2px;}
        @media(max-width:879px){
          .burger{display:flex;}
          nav.links{display:none;position:fixed;top:62px;left:0;right:0;background:rgba(8,17,31,.98);flex-direction:column;padding:20px 28px;gap:0;border-bottom:1px solid rgba(255,255,255,.1);}
          nav.links.open{display:flex;}
          nav.links a{padding:13px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:16px;color:#fff;}
        }

        .hero{background:linear-gradient(165deg,var(--navy) 0%,var(--navy-deep) 100%);color:#fff;padding:90px 0 110px;position:relative;overflow:hidden;}
        .hero-glow{position:absolute;top:-150px;right:-150px;width:700px;height:700px;background:radial-gradient(circle,rgba(205,250,60,.09) 0%,transparent 65%);pointer-events:none;}
        .hero-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:60px;align-items:center;}
        @media(max-width:920px){.hero-grid{grid-template-columns:1fr;}}
        .eyebrow{display:inline-flex;align-items:center;gap:10px;border:1.5px solid rgba(205,250,60,.4);color:var(--lime);font-size:11.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;padding:9px 18px;border-radius:999px;margin-bottom:26px;font-family:'Sora',sans-serif;}
        .dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--lime);flex-shrink:0;}
        .hero h1{font-size:clamp(44px,6.5vw,74px);line-height:1.01;color:#fff;}
        .accent{color:var(--lime);}
        .lead{margin-top:24px;max-width:520px;color:var(--muted);font-size:17px;line-height:1.65;}
        .lead strong{color:rgba(255,255,255,.9);font-weight:600;}
        .hero-actions{margin-top:34px;}
        .hero-badges{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px;}
        .hero-badge-pill{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:rgba(255,255,255,.75);font-size:12px;font-weight:600;padding:7px 14px;border-radius:999px;}

        .hero-photo-wrap{display:flex;justify-content:center;}
        .hero-photo-frame{position:relative;width:100%;max-width:400px;aspect-ratio:3/4;}
        .hero-photo-ring{position:absolute;inset:-16px;border-radius:32px;border:2px solid rgba(205,250,60,.2);pointer-events:none;}
        .hero-photo-inner{position:absolute;inset:0;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.1);}
        .hero-photo-card{position:absolute;background:rgba(8,17,31,.92);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px 18px;backdrop-filter:blur(8px);}
        .hero-photo-card.top{top:-14px;left:-14px;}
        .hero-photo-card.bottom{bottom:-14px;right:-14px;}
        .hpc-num{color:var(--lime);font-weight:800;font-size:18px;font-family:'Sora',sans-serif;line-height:1;}
        .hpc-lbl{color:var(--muted);font-size:11px;margin-top:3px;}

        .trustbar{background:var(--navy-deep);padding:15px 0;border-bottom:1px solid rgba(255,255,255,.06);}
        .trustbar-inner{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px 0;}
        .trust-item{display:inline-flex;align-items:center;gap:7px;color:var(--muted);font-size:12.5px;font-weight:600;padding:0 12px;}
        .trust-sep{color:rgba(205,250,60,.3);margin:0 4px;}

        .section{padding:100px 0;}
        .bg-white{background:var(--paper);}
        .bg-soft{background:var(--paper-soft);}
        .bg-navy{background:var(--navy);}
        .bg-navy-deep{background:var(--navy-deep);}
        .kicker{display:inline-flex;align-items:center;gap:8px;background:var(--paper-soft);border:1px solid var(--line);color:var(--navy);font-size:11.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;padding:7px 16px;border-radius:999px;margin-bottom:18px;font-family:'Sora',sans-serif;}
        .kicker-dark{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:#fff;}
        h2{font-size:clamp(32px,4.2vw,48px);line-height:1.07;color:var(--navy);}
        .sub{color:#5b6878;font-size:17px;line-height:1.65;max-width:620px;margin-top:16px;}

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

        /* PROFILO COMPATTO */
        .profilo-grid{display:grid;grid-template-columns:0.65fr 1.35fr;gap:52px;align-items:start;margin-top:48px;}
        @media(max-width:880px){.profilo-grid{grid-template-columns:1fr;}}
        .profilo-right{display:flex;flex-direction:column;gap:14px;}
        .profilo-bio{color:#4a5566;font-size:15.5px;line-height:1.7;}
        .profilo-bio strong{color:var(--navy);}
        .profilo-numeri{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:16px 0 14px;}
        @media(max-width:600px){.profilo-numeri{grid-template-columns:repeat(2,1fr);}}
        .pn-card{background:var(--paper-soft);border:1px solid var(--line);border-radius:14px;padding:16px 12px;text-align:center;}
        .accent-card{background:var(--navy);border-color:var(--navy);}
        .accent-card .pn-num{color:var(--lime);}
        .accent-card .pn-lbl{color:var(--muted);}
        .pn-num{font-size:22px;font-weight:800;color:var(--navy);font-family:'Sora',sans-serif;line-height:1;}
        .pn-lbl{font-size:11px;color:#5b6878;margin-top:6px;font-weight:600;line-height:1.3;}

        /* MILESTONES */
        .milestones-label{margin:52px 0 20px;}
        .milestone-kicker{background:var(--navy);color:var(--lime);font-size:12px;font-weight:800;padding:7px 18px;border-radius:999px;font-family:'Sora',sans-serif;}
        .milestones-row{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-bottom:48px;}
        @media(max-width:1000px){.milestones-row{grid-template-columns:repeat(3,1fr);}}
        @media(max-width:560px){.milestones-row{grid-template-columns:repeat(2,1fr);}}
        .milestone-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 14px;text-align:center;transition:transform .2s,box-shadow .2s;}
        .milestone-card:hover{transform:translateY(-4px);box-shadow:0 12px 28px -8px rgba(0,0,0,.1);border-color:var(--lime-dim);}
        .ms-year{font-size:11px;font-weight:800;color:var(--lime-dim);font-family:'Sora',sans-serif;letter-spacing:.06em;margin-bottom:8px;}
        .ms-icon{font-size:26px;margin-bottom:8px;}
        .ms-label{font-size:13px;font-weight:700;color:var(--navy);line-height:1.3;}
        .ms-sub{font-size:11.5px;color:#5b6878;margin-top:5px;}

        /* ESPERIENZE HIGHLIGHT */
        .exp-highlight-row{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
        @media(max-width:880px){.exp-highlight-row{grid-template-columns:1fr;}}
        .exp-hl-card{position:relative;border-radius:18px;border:1.5px solid;padding:26px 22px;transition:transform .2s,box-shadow .2s;}
        .exp-hl-card:hover{transform:translateY(-4px);box-shadow:0 14px 32px -10px rgba(0,0,0,.12);}
        .exp-hl-feat{display:inline-block;background:var(--navy);color:#fff;font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;margin-bottom:14px;font-family:'Sora',sans-serif;}
        .exp-hl-icon{font-size:28px;margin-bottom:12px;}
        .exp-hl-title{font-size:16px;font-weight:800;color:var(--navy);font-family:'Sora',sans-serif;margin-bottom:6px;line-height:1.3;}
        .exp-hl-period{font-size:12px;font-weight:700;color:var(--lime-dim);font-family:'Sora',sans-serif;margin-bottom:10px;}
        .exp-hl-desc{font-size:13.5px;color:#5b6878;line-height:1.6;}

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

        .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:44px 0 52px;}
        @media(max-width:640px){.stats-row{grid-template-columns:1fr;}}
        .stat-card{background:var(--navy);border-radius:18px;padding:30px 26px;}
        .stat-num{font-size:36px;font-weight:800;color:var(--lime);font-family:'Sora',sans-serif;}
        .stat-lbl{color:var(--muted);font-size:14px;margin-top:8px;font-weight:600;}

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

        .tl-wrap{margin-top:50px;display:flex;flex-direction:column;gap:14px;}
        .tl-item{display:grid;grid-template-columns:140px 1fr;gap:0;border-radius:14px;overflow:hidden;background:#fff;border:1px solid var(--line);transition:transform .2s,box-shadow .2s;}
        .tl-item:hover{transform:translateY(-2px);box-shadow:0 8px 24px -8px rgba(0,0,0,.08);}
        .tl-left{background:var(--tl-bg,#f4f6f9);padding:20px 18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;}
        .tl-icon{font-size:24px;}
        .tl-year{font-size:12px;font-weight:800;color:var(--navy);font-family:'Sora',sans-serif;letter-spacing:.04em;}
        .tl-body{padding:20px 22px;}
        .tl-title{font-weight:700;font-size:15.5px;color:var(--navy);}
        .tl-desc{color:#5b6878;font-size:13.5px;margin-top:5px;line-height:1.55;}
        @media(max-width:600px){.tl-item{grid-template-columns:90px 1fr;}.tl-left{padding:16px 10px;}}

        .work-grid{display:flex;flex-direction:column;gap:14px;margin-top:50px;}
        .work-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 26px;display:grid;grid-template-columns:56px 1fr;gap:18px;align-items:start;transition:transform .2s,box-shadow .2s;}
        .work-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px -8px rgba(0,0,0,.08);}
        .work-featured{border-color:var(--navy);border-width:2px;background:linear-gradient(135deg,#f8faff,#fff);}
        .work-icon-wrap{width:52px;height:52px;border-radius:14px;background:var(--paper-soft);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-size:22px;}
        .work-feat-label{display:inline-block;background:var(--navy);color:#fff;font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;margin-bottom:6px;font-family:'Sora',sans-serif;}
        .work-period{font-size:12.5px;font-weight:700;color:var(--lime-dim);font-family:'Sora',sans-serif;letter-spacing:.04em;margin-bottom:4px;}
        .work-title{font-weight:700;font-size:16px;color:var(--navy);}
        .work-desc{color:#5b6878;font-size:14px;margin-top:4px;}

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

        .footer{background:var(--navy-deep);color:var(--muted);padding:52px 0 28px;}
        .footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;border-bottom:1px solid rgba(255,255,255,.08);padding-bottom:28px;margin-bottom:22px;}
        .footer-links{display:flex;flex-wrap:wrap;gap:18px;}
        .footer-links a{font-size:13.5px;color:var(--muted);transition:color .15s;}
        .footer-links a:hover{color:#fff;}
        .footer-socials{display:flex;gap:12px;}
        .footer-socials a{width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;color:var(--muted);transition:all .15s;}
        .footer-socials a:hover{background:rgba(205,250,60,.15);color:var(--lime);}
        .footer-bottom{text-align:center;font-size:12.5px;color:#4e5c70;}

        [dir="rtl"] .lang-dropdown{right:auto;left:0;}
        [dir="rtl"] .figc-note{border-left:none;border-right:3px solid var(--navy);}
        [dir="rtl"] .channel-btn:hover{transform:translateX(-4px);}
        [dir="rtl"] .t-badge{margin-left:0;margin-right:auto;}
        [dir="rtl"] .top-cert{right:auto;left:18px;}
        [dir="rtl"] .figc-badge{left:auto;right:18px;}
      `}</style>
    </>
  );
}
