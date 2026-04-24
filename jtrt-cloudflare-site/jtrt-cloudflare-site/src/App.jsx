import React, { useState } from "react";
import { motion } from "framer-motion";

function Card({ className = "", children }) {
  return <div className={`border bg-white ${className}`}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ asChild = false, type = "button", size, variant, className = "", children }) {
  const base = "inline-flex items-center justify-center font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const sizing = size === "lg" ? "min-h-12 px-6 text-base" : "min-h-10 px-4 text-sm";
  const variantClass = variant === "outline" ? "border border-slate-300" : "";
  const classes = `${base} ${sizing} ${variantClass} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [classes, children.props.className].filter(Boolean).join(" "),
    });
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  if (name === "network") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3h6v3" />
        <path d="M18 9v3h-6" />
      </svg>
    );
  }

  if (name === "server") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="6" rx="2" />
        <rect x="4" y="14" width="16" height="6" rx="2" />
        <path d="M8 7h.01" />
        <path d="M8 17h.01" />
      </svg>
    );
  }

  if (name === "clipboard") {
    return (
      <svg {...common}>
        <path d="M9 4h6a2 2 0 0 1 2 2v1H7V6a2 2 0 0 1 2-2z" />
        <path d="M7 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
        <path d="m9 14 2 2 4-5" />
      </svg>
    );
  }

  if (name === "headphones") {
    return (
      <svg {...common}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h2v-8H6a2 2 0 0 0-2 2z" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2z" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.3 2.3 4.7-5.3" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg {...common}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return null;
}

const services = [
  {
    icon: "shield",
    title: "Cybersecurity & Risk",
    description:
      "Practical assessments, vulnerability reviews, policy guidance, and remediation roadmaps that help organizations understand and reduce risk without unnecessary complexity.",
  },
  {
    icon: "network",
    title: "Network Infrastructure",
    description:
      "Design, implementation, and modernization of wired, wireless, firewall, remote access, and campus connectivity environments.",
  },
  {
    icon: "server",
    title: "Datacenter & Systems",
    description:
      "Server, storage, virtualization, backup, and hybrid cloud planning for organizations that need resilient infrastructure and clear technical execution.",
  },
  {
    icon: "clipboard",
    title: "Project Delivery",
    description:
      "Experienced technical project leadership that turns complex IT goals into realistic plans, clear milestones, and completed outcomes.",
  },
  {
    icon: "headphones",
    title: "Managed IT Support",
    description:
      "Flexible support options for organizations that need reliable IT operations, responsive escalation, and experienced guidance without building a full internal team.",
  },
];

const differentiators = [
  "Senior technical guidance without vendor noise",
  "Infrastructure, security, and operations expertise in one partner",
  "Practical roadmaps that balance risk, budget, and business need",
  "Hands-on delivery from assessment through implementation",
];

const process = [
  {
    step: "01",
    title: "Assess",
    text: "We review the current environment, business goals, constraints, risks, and operational pain points.",
  },
  {
    step: "02",
    title: "Prioritize",
    text: "We separate urgent needs from nice-to-haves and build a practical roadmap around impact and effort.",
  },
  {
    step: "03",
    title: "Execute",
    text: "We help design, implement, stabilize, document, and support the solution through completion.",
  },
];

const focusAreas = [
  "Security assessments and remediation planning",
  "Network, wireless, firewall, and remote access design",
  "Datacenter, server, backup, and cloud modernization",
  "Managed support and fractional IT leadership",
];

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const logoUrl = "/images/jtrt-logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-12 w-28 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
            <img src={logoUrl} alt="JTRT Solutions" className="h-10 w-auto object-contain" />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold tracking-tight text-slate-950">JTRT Solutions</div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">IT Consulting</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
            <a href="#contact">Schedule a Consultation</a>
          </Button>
        </div>
        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <Icon name="x" className="h-5 w-5" /> : <Icon name="menu" className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav id="mobile-navigation" className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full bg-slate-950 text-white hover:bg-slate-800">
              <a href="#contact" onClick={closeMenu}>Schedule a Consultation</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
            <span className="flex h-7 w-16 items-center justify-center overflow-hidden rounded-md bg-white/95 px-1">
              <img src={logoUrl} alt="" className="h-6 w-auto object-contain" />
            </span>
            Infrastructure. Security. Support. Done right.
          </div>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Practical IT leadership for organizations that need experienced hands.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            JTRT Solutions helps organizations design, secure, modernize, and support their technology environments with clear guidance, realistic planning, and hands-on execution.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-white px-7 text-slate-950 hover:bg-slate-100">
              <a href="#contact">
                Start a Conversation <Icon name="arrow" className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
          <Card className="rounded-3xl border-white/10 bg-white/10 shadow-2xl backdrop-blur-lg">
            <CardContent className="p-7">
              <div className="rounded-2xl bg-white p-6 text-slate-950 shadow-xl">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Focus Areas</div>
                  <img src={logoUrl} alt="JTRT Solutions" className="h-11 w-auto object-contain" />
                </div>
                <div className="space-y-4">
                  {focusAreas.map((item) => (
                    <div key={item} className="flex gap-3">
                      <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-blue-600" />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Services</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">IT solutions built around real operational needs.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Whether you need a security assessment, infrastructure refresh, project leadership, or ongoing support, JTRT brings the technical depth to help you move forward confidently.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Approach</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Clear recommendations. Practical execution.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Technology projects often stall when organizations receive generic recommendations, unclear priorities, or solutions that do not match their budget or operating model. JTRT focuses on what is practical, supportable, and worth doing first.
            </p>
            <div className="mt-8 space-y-3">
              {differentiators.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-blue-700" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {process.map((item) => (
              <Card key={item.step} className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="grid gap-5 p-7 sm:grid-cols-[80px_1fr]">
                  <div className="text-4xl font-bold text-blue-700">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
          <div className="mb-8 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">Why JTRT Solutions</div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experienced technical leadership without the overhead.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            JTRT Solutions provides the kind of senior-level IT guidance many organizations need, but may not have internally. We help bridge the gap between strategy, technical design, implementation, and day-to-day support.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">About</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Built for organizations that need IT done right.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The name JTRT reflects a simple philosophy: do the right thing, the right way, with the right level of detail. Our work is grounded in practical experience across infrastructure, cybersecurity, project execution, and operational support.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We work best with organizations that need a trusted technical partner to clarify options, reduce risk, and help move important technology initiatives across the finish line.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent("Website inquiry from JTRT Solutions");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:info@jtrtsolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Contact</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let’s talk through what you need.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Whether you are planning a refresh, assessing risk, stabilizing operations, or looking for a practical IT partner, JTRT Solutions can help you define the path forward.
          </p>
          <div className="mt-8 space-y-4 text-slate-300">
            <a href="mailto:info@jtrtsolutions.com" className="flex gap-3 hover:text-white">
              <Icon name="mail" className="h-5 w-5 text-blue-300" /> info@jtrtsolutions.com
            </a>
            <a href="tel:8453919576" className="flex gap-3 hover:text-white">
              <Icon name="phone" className="h-5 w-5 text-blue-300" /> 845-391-9576
            </a>
            <div className="flex gap-3">
              <Icon name="map" className="h-5 w-5 text-blue-300" /> Serving clients remotely and onsite as needed
            </div>
          </div>
        </div>
        <Card className="rounded-3xl border-white/10 bg-white text-slate-950 shadow-2xl">
          <CardContent className="p-7">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
                <input id="name" name="name" type="text" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600" placeholder="Your name" autoComplete="name" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                <input id="email" name="email" type="email" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600" placeholder="you@example.com" autoComplete="email" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea id="message" name="message" className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600" placeholder="Tell us about your project, support need, or assessment request." required />
              </div>
              <Button type="submit" className="mt-2 rounded-full bg-slate-950 py-6 text-base text-white hover:bg-slate-800">Send Message</Button>
              <p className="text-sm leading-6 text-slate-500">This form currently opens the visitor's email client. It can be upgraded to Cloudflare Pages Functions later.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} JTRT Solutions. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#services" className="hover:text-slate-950">Services</a>
          <a href="#about" className="hover:text-slate-950">About</a>
          <a href="#contact" className="hover:text-slate-950">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-950">
      <Header />
      <Hero />
      <Services />
      <Approach />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
