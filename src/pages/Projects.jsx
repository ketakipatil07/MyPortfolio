const Projects = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
      </div>

      <div className="card">
        <h3 className="card-title">Travel Blog Website</h3>
        <div className="card-subtitle">
          <span>Personal Project</span>
          <span className="card-date">10/2024</span>
        </div>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          Created a blog platform using PHP, MySQL, Bootstrap where users can create, fetch, and manage posts with seamless UI/UX.
        </p>
      </div>

      <div className="card">
        <h3 className="card-title">E-commerce Website</h3>
        <div className="card-subtitle">
          <span>Personal Project</span>
          <span className="card-date">04/2023</span>
        </div>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          Developed a dynamic online eCommerce website with secure payment integration, product browsing, and checkout flow using React, HTML, CSS, and JavaScript.
        </p>
      </div>
    </div>
  );
};

export default Projects;
