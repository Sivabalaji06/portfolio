import React, { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mangjywa", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm"
    >
      <div className="space-y-1">
        <label className="text-xs text-slate-300">Name</label>
        <input
          name="name"
          required
          className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-100"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-slate-300">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-100"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-slate-300">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-100"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-[11px] text-emerald-400">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-[11px] text-red-400">Something went wrong.</p>
      )}
    </form>
  );
}

const projects = [
  {
    title: "Sales & Revenue Analytics System",
    role: "Data Analyst",
    tech: ["Python", "SQL", "Pandas", "Matplotlib", "Data Cleaning"],
    timeline: "2025",
    summary:
      "Analyzed sales datasets using SQL and Python to uncover revenue trends, top-performing products, and customer behavior. Built dashboards and business insights.",
    highlights: [
      "Cleaned large sales datasets using SQL and Python.",
      "Performed EDA to identify revenue trends and customer value.",
      "Generated visual insights including revenue trends and top products.",
    ],
    links: {
      github: "https://github.com/Sivabalaji06/sales-revenue-analytics",
      demo: "#",
      doc: "#",
    },
  },
  {
    title: "Customer Behavior Segmentation (ML)",
    role: "ML / Data Analyst",
    tech: ["Python", "K-Means Clustering", "EDA", "Visualization"],
    timeline: "2025",
    summary:
      "Performed customer segmentation using K-Means to identify meaningful patterns in purchasing behavior, frequency, and engagement.",
    highlights: [
      "Cleaned and prepared customer transactional data.",
      "Applied K-Means clustering to segment customers.",
      "Visualized clusters to highlight behavioral insights.",
    ],
    links: {
      github: "https://github.com/Sivabalaji06/customer-segmentation-ml",
      demo: "#",
      doc: "#",
    },
  },
  {
    title: "Global Trends Insights Report",
    role: "Data Analyst / Statistical Modeling",
    tech: ["Python", "Regression", "Statistics", "EDA", "Visualization"],
    timeline: "2025",
    summary:
      "Performed statistical analysis and regression modeling on global datasets to identify relationships between GDP, CO₂ emissions, and population trends.",
    highlights: [
      "Cleaned and analyzed multiple global indicators.",
      "Generated correlation heatmaps and regression models.",
      "Created visual trend insights to support data-driven reporting.",
    ],
    links: {
      github: "https://github.com/Sivabalaji06/global-trends-insights",
      demo: "#",
      doc: "#",
    },
  },
];


const skills = {
  "SQL Skills": [
    "Data Querying",
    "Data Cleaning",
    "Data Analysis"
  ],
  "Python Skills": [
    "Data Extraction",
    "Data Cleaning",
    "Exploratory Data Analysis (EDA)"
  ],
  "Statistical Analysis": [
    "Working With Quantitative Data",
    "Hypothesis Testing (Basics)",
    "Correlation Analysis"
  ],
  "Machine Learning": [
    "Basic ML Understanding",
    "Clustering (K-Means)",
    "Model Evaluation (Basics)"
  ],
  "Applied Modeling": [
    "Applying Statistical Models To Real-World Data",
    "Regression Modeling",
    "Trend Analysis"
  ],
  "Data Visualization": [
    "Presenting Data Insights Clearly",
    "Matplotlib",
    "Seaborn"
  ],
  "Version Control": [
    "Git",
    "GitHub"
  ]
};


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="rounded-xl bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-400">
              Portfolio
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="hover:text-emerald-400">
              Home
            </a>
            <a href="#about" className="hover:text-emerald-400">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400">
              Projects
            </a>
            <a href="#resume" className="hover:text-emerald-400">
              Resume
            </a>
            <a href="#contact" className="hover:text-emerald-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main
        className="mx-auto max-w-6xl space-y-24 px-4 pb-16 pt-10"
        id="home"
      >
        {/* Hero Section */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
             Data Scientist            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Building reliable, automated, and scalable specific practices distinct from traditional software development
            </h1>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              "Data are just summaries of thousands of stories—tell a few of those stories to help make the data meaningful"
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-500 hover:text-emerald-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Quick Stats / Tech Stack */}
          <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Core Stack</h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "SQL",
                "Python",
                "Machine Learning",
                "GitHub Actions",
                "Data Visualization",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-3 py-1 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2 text-center text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-3">
                <p className="text-lg font-bold text-emerald-400">3+</p>
                <p className="text-[11px] text-slate-400">DA & ML Projects</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-3">
                <p className="text-lg font-bold text-emerald-400">Python</p>
                <p className="text-[11px] text-slate-400">EDA</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-3">
                <p className="text-lg font-bold text-emerald-400">SQL</p>
                <p className="text-[11px] text-slate-400">Data Querying</p>
              </div>
            </div>
          </aside>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold md:text-2xl">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/60 to-transparent" />
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            I am a Detail-oriented and high-energy individual with strong Professional skills in SQL, Python, statistical analysis, and applying machine learning concepts to real-world problems. Experience working under lead data scientist and other team members to create and implement scalable cloud-based data analytic solutions in fast-paced environments with changing priorities.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold md:text-2xl">Skills</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/60 to-transparent" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <h3 className="mb-2 text-sm font-semibold text-slate-100">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-800 px-3 py-1 text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold md:text-2xl">Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/60 to-transparent" />
          </div>
         <p className="max-w-3xl text-sm text-slate-300">
  A selection of Data Analytics & Machine Learning projects showcasing experience in Python, SQL, statistical modelling, and data visualization.
</p>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <p className="text-xs text-emerald-400">{project.role}</p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-300">
                    {project.timeline}
                  </span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-slate-300">
                  {project.summary}
                </p>
                <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800 px-3 py-1 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mb-4 list-disc space-y-1 pl-4 text-xs text-slate-300">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 text-[11px]">
                  <a
                    href={project.links.github}
                    className="rounded-full border border-slate-700 px-3 py-1 hover:border-emerald-500 hover:text-emerald-400"
                  >
                    GitHub Repo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
{/* Data Analytics & ML Projects Section */}

        {/* Resume Section */}
        <section id="resume" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold md:text-2xl">Resume</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/60 to-transparent" />
          </div>
          <p className="max-w-2xl text-sm text-slate-300">
            You can download my resume for a detailed overview of my skills,
            education, and project experience in DevOps, cloud, and automation.
          </p>
          <a
  href="/resume.pdf"
  download="SivaBalaji_Resume.pdf"
  className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400"
>
  Download Resume (PDF)
</a>

        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold md:text-2xl">Contact</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/60 to-transparent" />
          </div>
          <p className="max-w-2xl text-sm text-slate-300">
            Interested in collaborating, discussing DevOps practices, or
            exploring opportunities? Feel free to reach out.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 text-sm text-slate-200">
              <p>
                <span className="font-semibold text-slate-100">Email: </span>
                <a
                  href="mailto:siva06balaji@gmail.com"
                  className="text-emerald-400"
                >
                  siva06balaji@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-100">GitHub: </span>
                <a
                  href="https://github.com/Sivabalaji06"
                  className="text-emerald-400"
                >
                  github.com/Sivabalaji06
                </a>
              </p>
            </div>
            {/* Contact form */}
    <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90 py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Portfolio – Siva Balaji. Built with
        React &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
