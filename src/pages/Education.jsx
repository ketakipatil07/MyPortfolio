const Education = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Education & Skills</h1>
      </div>

      <div className="edu-grid">
        {/* Left Column: Education */}
        <div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Education</h2>
          
          <div className="card">
            <h3 className="card-title">Bachelor of Science in Computer Science</h3>
            <div className="card-subtitle">
              <span>Viva College of Science, Commerce & Arts – Virar</span>
            </div>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>SGPA: 7.35</p>
          </div>

          <div className="card">
            <h3 className="card-title">Class XII (HSC) – Science</h3>
            <div className="card-subtitle">
              <span>Anand Laxman Chandawarkar Jr. College – Wada, Palghar</span>
            </div>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Percentage: 76.83%</p>
          </div>

          <div className="card">
            <h3 className="card-title">Class X (SSC)</h3>
            <div className="card-subtitle">
              <span>Vivekananda Public School, Kharivali</span>
            </div>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Percentage: 75.40%</p>
          </div>
        </div>

        {/* Right Column: Skills & Certificates */}
        <div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Skills</h2>
          
          <div className="card">
            <div className="skill-category">
              <div className="skill-category-title">Programming Languages</div>
              <div className="tags">
                <span className="tag">C#</span>
                <span className="tag">Core Java</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-title">Web Development</div>
              <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">React</span>
                <span className="tag">Core PHP</span>
                <span className="tag">.NET MVC</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-title">Databases & Tools</div>
              <div className="tags">
                <span className="tag">MySQL</span>
                <span className="tag">MariaDB</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
              </div>
            </div>
          </div>

          <h2 style={{ margin: '2rem 0 1.5rem', color: 'var(--accent)' }}>Certifications</h2>
          
          <div className="card">
            <div style={{ marginBottom: '1rem' }}>
              <h3 className="card-title" style={{ fontSize: '1rem' }}>CSS Workshop</h3>
              <p className="card-date">Mar 2024</p>
            </div>
            <div>
              <h3 className="card-title" style={{ fontSize: '1rem' }}>JavaScript Full Stack Developer</h3>
              <p className="card-date">Dec 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
