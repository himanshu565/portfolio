import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MoveUpRight,
  RadioTower,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { principles, projects, siteConfig, skillGroups } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-pulse" /> FULL-STACK DEVELOPER <span className="eyebrow-divider">/</span> INDIA</div>
              <h1>
                Building software<br />
                for the <span className="hero-highlight">real world.</span>
              </h1>
              <p className="hero-lede">
                I&apos;m Himanshu — a developer who enjoys turning messy workflows into clear products, dependable APIs, and interfaces people can actually use.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></Link>
                <a className="button button-quiet" href={siteConfig.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-traits">
                <span><Check size={14} /> Product-minded</span>
                <span><Check size={14} /> Backend curious</span>
                <span><Check size={14} /> Learning by building</span>
              </div>
            </div>

            <div className="hero-visual" role="img" aria-label="Illustration of an application architecture and telemetry dashboard">
              <div className="visual-topline"><span>WORKING MODEL <b>001</b></span><span className="visual-topline-right"><i /> SYSTEMS THINKING</span></div>
              <div className="architecture-stage">
                <div className="stage-orbit orbit-a" />
                <div className="stage-orbit orbit-b" />
                <div className="stage-orbit orbit-c" />
                <svg className="stage-connectors" viewBox="0 0 520 440" fill="none" aria-hidden="true">
                  <path d="M260 220 L130 130 M260 220 L390 130 M260 220 L130 315 M260 220 L390 315" />
                  <path className="connector-dash" d="M130 130 L390 130 M130 315 L390 315" />
                </svg>
                <div className="architecture-node node-top-left"><span className="node-icon"><Braces size={16} /></span><div><strong>Client</strong><small>React · Next.js</small></div><i className="node-indicator" /></div>
                <div className="architecture-node node-top-right"><span className="node-icon node-icon-blue"><RadioTower size={16} /></span><div><strong>Integrations</strong><small>External APIs</small></div><i className="node-indicator" /></div>
                <div className="architecture-core"><div className="core-ring"><div className="core-symbol"><Layers3 size={27} strokeWidth={1.5} /></div></div><span>PRODUCT LOGIC</span><small>clear · tested · resilient</small></div>
                <div className="architecture-node node-bottom-left"><span className="node-icon node-icon-orange"><Terminal size={16} /></span><div><strong>Services</strong><small>Node.js · REST</small></div><i className="node-indicator" /></div>
                <div className="architecture-node node-bottom-right"><span className="node-icon node-icon-purple"><Code2 size={16} /></span><div><strong>Data layer</strong><small>SQL · MongoDB</small></div><i className="node-indicator" /></div>
                <div className="stage-caption caption-left"><span>01</span> DESIGN WITH INTENT</div>
                <div className="stage-caption caption-right"><Sparkles size={12} /> BUILT TO EVOLVE</div>
              </div>
              <div className="visual-footer"><span><span className="footer-pip" /> CURRENT FOCUS</span><span>Full-stack systems <ArrowUpRight size={13} /></span></div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span className="hero-bottom-label">A FEW THINGS I WORK WITH</span>
            <div className="hero-tech-list"><span>JavaScript</span><b>·</b><span>TypeScript</span><b>·</b><span>React</span><b>·</b><span>Node.js</span><b>·</b><span>SQL / NoSQL</span></div>
            <a href="#work" className="scroll-cue">SCROLL TO EXPLORE <span><ArrowDownRight size={15} /></span></a>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="container">
            <SectionHeading index="01" eyebrow="SELECTED WORK" title="Projects with a purpose.">
              A look at the problems I&apos;m working on — from operational tools to backend systems where correctness matters.
            </SectionHeading>
            <div className="project-grid">
              {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
            <div className="work-bottom-note"><span className="note-mark">↳</span><p>These are evolving builds and case studies. I&apos;m documenting the decisions, trade-offs, and lessons—not just the final screens.</p><a href={siteConfig.github} target="_blank" rel="noreferrer">More code on GitHub <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="container">
            <SectionHeading index="02" eyebrow="THE DEVELOPER BEHIND THE CODE" title="I care about what happens after the demo.">
              Useful software is more than a polished interface. It needs sensible data models, predictable behaviour, and a clear path to production.
            </SectionHeading>
            <div className="about-layout">
              <div className="about-story">
                <div className="about-mark" aria-hidden="true"><span>HB</span><i /><i /><i /></div>
                <p className="about-lead">I bring a mix of <em>development, product thinking,</em> and exposure to real operational problems.</p>
                <p className="body-copy">Working around startup delivery and environmental-monitoring workflows has shaped the kinds of products I like to build: tools that reduce manual friction, make important information easier to trust, and help teams get work done.</p>
                <p className="body-copy">My focus is deepening the craft of full-stack engineering—especially API design, SQL, data consistency, system design, and practical AI integrations—while turning that learning into complete, deployable projects.</p>
                <div className="about-location"><MapPin size={15} /> India <span className="location-separator">·</span> Open to full-stack opportunities</div>
              </div>
              <div className="principles-panel">
                <div className="principles-top"><span>ENGINEERING PRINCIPLES</span><span>03 / 03</span></div>
                {principles.map((item) => (
                  <div className="principle-row" key={item.number}>
                    <span className="principle-number">{item.number}</span>
                    <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                    <ArrowUpRight size={15} className="principle-arrow" />
                  </div>
                ))}
                <div className="principles-foot"><span>LESS TALK. MORE THOUGHTFUL SHIPPING.</span><span className="principles-pulse" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="toolkit-section section-shell" id="toolkit">
          <div className="container">
            <SectionHeading index="03" eyebrow="TOOLS I REACH FOR" title="A practical, growing toolkit.">
              Strong fundamentals first. Tools are useful when they help solve the problem cleanly and can be maintained by the next developer.
            </SectionHeading>
            <div className="toolkit-grid">
              {skillGroups.map((group) => (
                <article className="toolkit-card" key={group.number}>
                  <div className="toolkit-card-top"><span>{group.number}</span><ArrowUpRight size={15} /></div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-chip-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
            <div className="toolkit-honesty"><span className="honesty-icon"><Check size={14} /></span><p><strong>A note on this list:</strong> it reflects my working stack and areas of active learning—not a claim that I have equal depth in every tool.</p></div>
          </div>
        </section>

        <section className="approach-section section-shell">
          <div className="container approach-inner">
            <div className="approach-copy">
              <div className="section-kicker"><span>04</span><span className="kicker-line" /><span>HOW I APPROACH A BUILD</span></div>
              <h2>Understand the workflow.<br /><span>Make the system dependable.</span></h2>
              <p>I like working end to end: clarify the user problem, model the data, design the API, build the interface, handle failure cases, then deploy and iterate.</p>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-link">Explore the code <ArrowRight size={16} /></a>
            </div>
            <div className="approach-steps">
              <div className="approach-step"><span>01</span><div><strong>Map the problem</strong><small>Users · edge cases · constraints</small></div><Check size={15} /></div>
              <div className="approach-step"><span>02</span><div><strong>Design the foundation</strong><small>Data model · API · permissions</small></div><Check size={15} /></div>
              <div className="approach-step"><span>03</span><div><strong>Build and validate</strong><small>UI states · tests · error paths</small></div><Check size={15} /></div>
              <div className="approach-step"><span>04</span><div><strong>Ship and improve</strong><small>Deployment · feedback · iteration</small></div><Check size={15} /></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="container contact-container">
            <div className="contact-grid-pattern" aria-hidden="true" />
            <div className="contact-content">
              <div className="section-kicker"><span>05</span><span className="kicker-line" /><span>THE NEXT BUILD</span></div>
              <h2>Have a real problem<br />worth <span>solving?</span></h2>
              <p>I&apos;m interested in full-stack roles, thoughtful engineering teams, and projects where software makes someone&apos;s work meaningfully better.</p>
              <div className="contact-actions">
                {siteConfig.email ? <a className="button button-primary" href={`mailto:${siteConfig.email}`}><Mail size={17} /> Get in touch <ArrowUpRight size={15} /></a> : null}
                <a className="button button-primary" href={siteConfig.github} target="_blank" rel="noreferrer"><Github size={17} /> Connect on GitHub <ArrowUpRight size={15} /></a>
                {siteConfig.linkedin ? <a className="button button-outline" href={siteConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a> : null}
                {siteConfig.resumePath ? <a className="button button-outline" href={siteConfig.resumePath} target="_blank" rel="noreferrer">Resume <MoveUpRight size={15} /></a> : null}
              </div>
            </div>
            <div className="contact-side-card"><span className="contact-card-icon"><Sparkles size={18} /></span><span className="contact-card-eyebrow">CURRENT MODE</span><strong>Build. Learn.<br />Ship better.</strong><p>One thoughtful iteration at a time.</p><div className="contact-card-line" /><span className="contact-card-signature">HIMANSHU BISHT <b>© {new Date().getFullYear()}</b></span></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner"><Link href="#top" className="footer-brand">HB<span>.</span></Link><span>Designed with intention. Built with React & Next.js.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  );
}
