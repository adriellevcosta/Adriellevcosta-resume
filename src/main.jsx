import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Cpu, Waves, Terminal, Menu, X } from "lucide-react";
import "./styles.css";

const projects = [
  {number:"01",title:"Robot Launcher Race",type:"Interdisciplinary Team Project",award:"1ST PLACE",description:"A microcontroller driven mobile robot with line following sensors, gyroscope based orientation control, and collision detection for an autonomous navigation challenge.",tags:["C","Sensors","Control","Embedded"],icon:<Cpu size={28} strokeWidth={1.5}/>,link:null},
  {number:"02",title:"RC Boat",type:"Embedded Control & Navigation",award:"WATCH THE BUILD",description:"A custom 3D printed hull with a jet style DC motor propulsion assembly and Arduino controlled motor speed and servo driven steering.",tags:["Arduino","3D Printing","CAD","Embedded"],icon:<Waves size={28} strokeWidth={1.5}/>,link:"https://youtu.be/EIevH93PdFA?si=oTXljkwuFR0AjCkv"},
  {number:"03",title:"Earthquake Simulator",type:"C Programming Project",award:"WATCH THE DEMO",description:"A C program that simulates earthquake motion and demonstrates how software can model physical behavior.",tags:["C","Simulation","Programming"],icon:<Terminal size={28} strokeWidth={1.5}/>,link:"https://youtu.be/c-yZX7f1LR0?si=JtdahhgRQ6dmADbi",zenodo:"https://zenodo.org/records/22926999"},
];

const skills = [
  ["Python","Primary language","https://cdn.simpleicons.org/python"],["C","Embedded","https://cdn.simpleicons.org/c"],["Java","Programming","https://cdn.simpleicons.org/openjdk"],["Arduino","Microcontrollers","https://cdn.simpleicons.org/arduino"],["Docker","Systems","https://cdn.simpleicons.org/docker"],["MQTT","Messaging","https://cdn.simpleicons.org/mqtt"],["MATLAB","Modeling","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"],["GitHub","Development","https://cdn.simpleicons.org/github"],["AutoCAD","Hardware","https://cdn.simpleicons.org/autocad"],["KiCad","PCB design","https://cdn.simpleicons.org/kicad"],
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="noise" aria-hidden="true" />
      <header className="nav">
        <a className="logo" href="#top" onClick={closeMenu}>
          AV<span>.</span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>01 / About</a>
          <a href="#experience" onClick={closeMenu}>02 / Experience</a>
          <a href="#projects" onClick={closeMenu}>03 / Projects</a>
          <a href="#skills" onClick={closeMenu}>04 / Skills</a>
          <a href="#contact" onClick={closeMenu}>05 / Contact</a>
        </nav>

      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Adrielle<br /><em>Vieira-Costa</em></h1>
            <p className="hero-subtitle">Computer Engineering student interested in <strong>hardware, embedded systems, and software.</strong></p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <ArrowUpRight size={17} /></a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="grid" />
            <div className="orb">
              <div className="orb-ring ring-one" />
              <div className="orb-ring ring-two" />
              <div className="orb-core" />
              <div className="orb-line line-one" />
              <div className="orb-line line-two" />
            </div>
            <div className="terminal-card">
              <div className="terminal-top"><span /><span /><span /></div>
              <p><b>~/adrielle</b> $ whoami</p>
              <p className="terminal-output">computer_engineer</p>
              <p><b>~/adrielle</b> $ focus --current</p>
              <p className="terminal-output">embedded + real_time + vision</p>
              <span className="cursor">_</span>
            </div>
            <span className="art-label label-a">28° / 2028</span>
            <span className="art-label label-b">BUILD / TEST / ITERATE</span>
          </div>
        </section>

        <div className="ticker">
          <span>PYTHON</span><i>✦</i><span>EMBEDDED SYSTEMS</span><i>✦</i><span>REAL-TIME DATA</span><i>✦</i><span>HARDWARE DESIGN</span><i>✦</i><span>CONTROL SYSTEMS</span>
        </div>

        <section className="section intro" id="about">
          <div className="section-label">01 / About</div>
          <div className="intro-content">
            <p className="big-copy">I’m a Computer Engineering student at <span>the University of Central Florida</span> interested in hardware, programming, and design. I enjoy working with embedded systems and bringing ideas to life through hands on engineering.</p>
            <div className="intro-details">
              <p>My work spans embedded systems, real-time data pipelines, hardware design, modeling, and simulation.</p>
              <div className="stats">
                <div><strong>3.9</strong><span>UCF GPA</span></div>
                <div><strong>'28</strong><span>Expected graduation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-label">02 / Experience</div>
          <article className="experience">
  <div className="experience-meta"><span>Aug 2025 to Aug 2026</span><span>Orlando, FL</span></div>
  <div className="experience-main"><div className="title-row"><div><p className="kicker">Undergraduate Researcher</p><h2>RISES</h2><p className="muted">Resilient, Intelligent and Sustainable Energy Systems</p></div><Terminal className="experience-icon" size={38} strokeWidth={1}/></div>
  <div className="experience-grid"><p>Implemented transient event detection algorithms to flag abnormal inverter states and strengthen real time system reliability through collaborative experimentation.</p><p>Built a Python, MQTT, and Docker based multi process data pipeline for real time validation of power inverter models, plus Python tooling for MATLAB data analysis.</p></div>
  <div className="tag-list"><span>Python</span><span>MQTT</span><span>Docker</span><span>MATLAB</span><span>Real time systems</span></div><a className="paper-link" href="https://ieeexplore.ieee.org/document/11221716/" target="_blank" rel="noreferrer">Related IEEE publication <ArrowUpRight size={15}/></a></div>
</article>
<article className="experience">
  <div className="experience-meta"><span>May 10, 2026 to Present</span><span>UCF</span></div>
  <div className="experience-main"><div className="title-row"><div><p className="kicker">Linear Circuits II</p><h2>Undergraduate Learning Assistant</h2><p className="muted">University of Central Florida</p></div><Cpu className="experience-icon" size={38} strokeWidth={1}/></div>
  <div className="experience-grid"><p>Support students in Linear Circuits II by helping explain circuit concepts, working through problems, and reinforcing course material.</p><p>This role has given me more experience communicating technical ideas clearly while strengthening my own understanding of circuits.</p></div>
  <div className="tag-list"><span>Circuits</span><span>Teaching</span><span>Technical communication</span></div></div>
</article>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label">03 / Projects</div>
          <div className="projects-header">
            <h2>Things I’ve<br /><em>built.</em></h2>
            <p>Projects where software, electronics, and physical design meet.</p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-body">
                  <p className="kicker">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-bottom">
                  <span>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.award}
                      </a>
                    ) : (
                      project.award
                    )}
                
                    {project.zenodo && (
                      <>
                        {" · "}
                        <a href={project.zenodo} target="_blank" rel="noreferrer">
                          VIEW ON ZENODO
                        </a>
                      </>
                    )}
                  </span>
                
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <ArrowUpRight size={19}/>
                    </a>
                  ) : (
                    <ArrowUpRight size={19}/>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label">04 / Skills</div>
          <div className="skills-layout">
            <div>
              <h2>Tools I<br /><em>use.</em></h2>
              <p className="muted">A growing toolkit for building and testing systems.</p>
            </div>
            <div className="skill-grid">
              {skills.map(([name, desc, image], i) => (
                <div className="skill" key={name}>
                  <span className="skill-index">{String(i + 1).padStart(2, "0")}</span>
                  <div className="skill-info"><img src={image} alt="" aria-hidden="true"/><div><strong>{name}</strong><small>{desc}</small></div></div>
                  <ArrowUpRight size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-grid">
            <div className="section-label">05 / Contact</div>
            <div>
              <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
              <h2>Let’s build<br /><em>something.</em></h2>
              <a className="email-link" href="mailto:adriellevcosta@icloud.com">adriellevcosta@icloud.com <ArrowUpRight size={20} /></a>
            </div>
          </div>
          <div className="footer-links">
            <span>Adrielle Vieira-Costa © 2026</span>
            <div>
              <a href="https://github.com/adriellevcosta" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/adrielle-vieira-costa/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="mailto:adriellevcosta@icloud.com"><Mail size={17} /> Email</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
