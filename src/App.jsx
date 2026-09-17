import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiGit,
  SiGithub
} from "react-icons/si";
import { useState } from "react";
import "./App.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
<nav className="navbar">
  <div className="logo">Rachana</div>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
    <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>
</nav>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-content">

          <p className="hello">HELLO, I'M</p>

          <h1>
            Mukkera <span>Rachana</span>
          </h1>

          <h2>
            Python Full Stack Developer | Aspiring Data Engineer
          </h2>

          <p className="intro">
            ECE graduate with hands-on experience in Python Full Stack
            development through a QSpiders internship, currently expanding
            my skills in Data Engineering, ETL/ELT, PySpark and
            Databricks.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="primary-btn">
              View Projects →
            </a>

            <a href="#resume" className="secondary-btn">
              Download Resume
            </a>
          </div>

        </div>
      </section>

            {/* About Section */}
      <section id="about" className="about section">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I am an Electronics and Communication Engineering graduate
              with a strong interest in software development and data
              engineering.
            </p>

            <p>
              I completed a Python Full Stack internship at QSpiders,
              where I worked with Python, SQL, Django, React, HTML, CSS,
              JavaScript and databases.
            </p>

            <p>
              Currently, I am learning Data Engineering concepts such as
              ETL, ELT, PySpark and Databricks, while building
              practical projects to strengthen my skills.
            </p>
          </div>

          <div className="about-card">

            <div className="info-item">
              <span>🎓</span>
              <div>
                <h3>Education</h3>
                <p>B.Tech — ECE</p>
              </div>
            </div>

            <div className="info-item">
              <span>💻</span>
              <div>
                <h3>Internship</h3>
                <p>Python Full Stack Intern— QSpiders</p>
              </div>
            </div>

            <div className="info-item">
              <span>📊</span>
              <div>
                <h3>Currently Learning</h3>
                <p>Data Engineering — ETL / ELT</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* Skills */}
<section id="skills" className="skills section">
  <div className="section-heading">
    <p>SKILLS</p>
    <h2>My Technical Skills</h2>
  </div>

  <div className="skills-grid">

    <div className="skill-card">
      <SiPython className="skill-logo python-logo" />
      <div>
        <h3>Python</h3>
        <p>Programming Language</p>
      </div>
    </div>

    <div className="skill-card">
      <div className="sql-logo">SQL</div>
      <div>
        <h3>SQL</h3>
        <p>Querying & Data Analysis</p>
      </div>
    </div>

    <div className="skill-card">
      <SiDjango className="skill-logo django-logo" />
      <div>
        <h3>Django</h3>
        <p>Web Framework</p>
      </div>
    </div>

    <div className="skill-card">
      <SiReact className="skill-logo react-logo" />
      <div>
        <h3>React</h3>
        <p>Basics</p>
      </div>
    </div>

    <div className="skill-card">
      <SiJavascript className="skill-logo javascript-logo" />
      <div>
        <h3>JavaScript</h3>
        <p>Frontend Logic</p>
      </div>
    </div>

    <div className="skill-card">
      <SiHtml5 className="skill-logo html-logo" />
      <div>
        <h3>HTML</h3>
        <p>Web Structure</p>
      </div>
    </div>

    <div className="skill-card">
      <SiCss className="skill-logo css-logo" />
      <div>
        <h3>CSS</h3>
        <p>Web Styling</p>
      </div>
    </div>

    <div className="skill-card">
      <SiPostgresql className="skill-logo postgresql-logo" />
      <div>
        <h3>PostgreSQL</h3>
        <p>Database</p>
      </div>
    </div>

    <div className="skill-card">
      <div className="etl-logo">ETL</div>
      <div>
        <h3>ETL / ELT</h3>
        <p>Data Pipelines</p>
      </div>
    </div>

    <div className="skill-card">
      <div className="text-logo pyspark-text-logo">Py</div>
      <div>
        <h3>PySpark</h3>
        <p>Big Data Processing</p>
      </div>
    </div>

    <div className="skill-card">
      <div className="text-logo databricks-text-logo">DB</div>
      <div>
        <h3>Databricks</h3>
        <p>Data Engineering</p>
      </div>
    </div>

    <div className="skill-card">
      <SiGit className="skill-logo git-logo" />
      <div>
        <h3>Git & GitHub</h3>
        <p>Version Control</p>
      </div>
    </div>

  </div>
</section>

            {/* Experience Section */}
      <section id="experience" className="experience section">

        <div className="section-heading">
          <p>EXPERIENCE</p>
          <h2>My Experience</h2>
        </div>

        <div className="experience-card">

          <div className="experience-top">
            <div>
              <h3>Python Full Stack Developer Intern</h3>
              <h4>QSpiders</h4>
            </div>

            <span className="experience-date">
              Internship
            </span>
          </div>

          <p className="experience-description">
            Completed a Python Full Stack internship with hands-on learning
            and practical development experience in frontend and backend
            technologies.
          </p>

          <div className="experience-skills">
            <span>Python</span>
            <span>Django</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React Basics</span>
            <span>SQL</span>
            <span>PostgreSQL</span>
          </div>

        </div>

      </section>

            {/* Projects Section */}
      <section id="projects" className="projects section">

        <div className="section-heading">
          <p>PROJECTS</p>
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">

            <div className="project-number">01</div>

            <h3>End-to-End E-Commerce ETL pipeline</h3>

            <p>
              A practical data engineering project focused on building an
              ETL pipeline to extract data, transform and clean it, validate
              the data, and load the processed data for analysis.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>SQL</span>
              <span>ETL</span>
              <span>PySpark</span>
              <span>Databricks</span>
            </div>

            <div className="project-buttons">
  <a
    href="https://github.com/rachanamukkera/ecommerce-etl-data-pipeline"
    target="_blank"
    rel="noreferrer"
    className="project-btn"
  >
    GitHub →
  </a>
</div>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <div className="project-number">02</div>

            <h3>AI-Powered Multilingual Communication Platform</h3>

            <p>
              A multilingual communication platform built with Django and
              React that provides AI-powered language-related features and
              backend APIs for communication and text processing.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Django</span>
              <span>React Basics</span>
              <span>PostgreSQL</span>
              <span>Gemini</span>
            </div>

            <div className="project-buttons">
  <a
    href="https://github.com/rachanamukkera/AI-Multilingual-Communication-Platform-"
    target="_blank"
    rel="noreferrer"
    className="project-btn"
  >
    GitHub →
  </a>
</div>

          </div>


          {/* Project 3 */}
<div className="project-card">

  <div className="project-number">03</div>

  <div className="project-type">ACADEMIC PROJECT</div>

  <h3>Wi-Fi-Based Stress Monitoring System</h3>

  <p>
    An IoT-based academic project designed to monitor physiological
    signals using heart-rate, GSR and respiration sensors. The system
    uses threshold-based alerts and Wi-Fi communication to provide
    notifications when abnormal readings are detected.
  </p>

  <div className="project-tech">
    <span>Arduino Nano</span>
    <span>ESP8266</span>
    <span>Sensors</span>
    <span>IoT</span>
    <span>Wi-Fi</span>
  </div>
  <div className="project-buttons">
  <a
    href="https://www.linkedin.com/in/rachana-mukkera-1351692ba/"
    target="_blank"
    rel="noreferrer"
    className="project-btn"
  >
    LinkedIn →
  </a>
</div>

</div>


{/* Project 4 */}
<div className="project-card">

  <div className="project-number">04</div>

  <div className="project-type">ACADEMIC PROJECT</div>

  <h3>
    High-Performance Fault-Tolerant Approximate Adders
    for Low-Power Arithmetic Units
  </h3>

  <p>
    An academic project focused on approximate arithmetic circuits
    designed to reduce power consumption while maintaining an
    acceptable level of computational accuracy for low-power
    arithmetic applications.
  </p>

  <div className="project-tech">
    <span>Digital Electronics</span>
    <span>Approximate Computing</span>
    <span>Low-Power Design</span>
    <span>Fault Tolerance</span>
  </div>
  <div className="project-buttons">
  <a
    href="https://www.linkedin.com/in/rachana-mukkera-1351692ba/"
    target="_blank"
    rel="noreferrer"
    className="project-btn"
  >
    LinkedIn →
  </a>
</div>

</div>

        </div>

      </section>



            {/* Education Section */}
      <section id="education" className="education section">
        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My Education</h2>
        </div>

        <div className="education-list">

          {/* B.Tech */}
          <div className="education-card">
            <div className="education-icon">🎓</div>

            <div className="education-content">
              <div className="education-top">
                <div>
                  <h3>B.Tech — Electronics and Communication Engineering</h3>
                  <h4>Kakatiya Institute of Technology and Science for Women</h4>
                </div>

                <span className="education-year">
                  2022 – 2026
                </span>
              </div>

              <p className="education-score">
                CGPA: <strong>9.02 / 10</strong>
              </p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="education-card">
            <div className="education-icon">📚</div>

            <div className="education-content">
              <div className="education-top">
                <div>
                  <h3>Higher Secondary Education</h3>
                  <h4>Alphores Junior College</h4>

                  
                </div>
                <span className="education-year">
                  2020 – 2022
                </span>
              </div>

              <p className="education-score">
                Percentage: <strong>97.6%</strong>
              </p>
            </div>
          </div>

          {/* SSC */}
          <div className="education-card">
            <div className="education-icon">🏫</div>

            <div className="education-content">
              <div className="education-top">
                <div>
                  <h3>Secondary School Education</h3>
                  <h4>Chanakya High School</h4>
                </div>
                <span className="education-year">
                  2019 – 2020
                </span>
              </div>

              <p className="education-score">
                CGPA: <strong>10.0/ 10</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Resume Section */}
<section id="resume" className="resume section">
  <div className="section-heading">
    <p>RESUME</p>
    <h2>My Resume</h2>
  </div>

  <div className="resume-card">
    <div className="resume-content">
      <h3>Interested in working together?</h3>

      <p>
        Download my resume to learn more about my education,
        technical skills, internship experience and projects.
      </p>

      <a href="/rachana-portfolio/resume.pdf" download className="resume-btn">Download Resume</a>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="contact section">
  <div className="section-heading">
    <p>CONTACT</p>
    <h2>Let's Connect</h2>
  </div>

  <div className="contact-content">

    <div className="contact-text">
      <h3>Have an opportunity or want to connect?</h3>

      <p>
        I am open to opportunities in Python Full Stack Development,
        Software Development, and Data Engineering.
      </p>

      <div className="contact-details">

        <div className="contact-item">
          <span>📧</span>
          <div>
            <h4>Email</h4>
            <a href="mailto:rachanamukkera76@gmail.com">
              rachanamukkera76@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>💼</span>
          <div>
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/rachana-mukkera-1351692ba"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile →
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>💻</span>
          <div>
            <h4>GitHub</h4>
            <a
              href="https://github.com/rachanamukkera"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile →
            </a>
          </div>
        </div>

      </div>
    </div>

    <div className="contact-card">
      <h3>Let's Work Together</h3>

      <p>
        I'm interested in opportunities where I can apply my
        development skills and continue growing in Data Engineering.
      </p>

      <a
        href="mailto:rachanamukkera76@gmail.com"
        className="contact-btn"
      >
        Send Me an Email →
      </a>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Rachana</h3>

          <p>
            Python Full Stack Developer | Aspiring Data Engineer
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="copyright">
            © 2026 Rachana Mukkera. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;