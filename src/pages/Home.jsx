const Home = () => {
  return (
    <div className="page-container hero">
      <h1>Ketaki Patil</h1>
      <div className="typewriter-container">
        <h2>Jr. Software Developer</h2>
      </div>

      <div className="contact-info">
        <a href="mailto:patilketaki2607@gmail.com" className="contact-item">
          <span>✉️</span> patilketaki2607@gmail.com
        </a>
        <div className="contact-item">
          <span>📞</span> 8767955401
        </div>
        <div className="contact-item">
          <span>📍</span> Mumbai, Maharashtra
        </div>
      </div>

      <p>
        Hi! I'm a Jr. Software Developer with experience in C#, Asp.NET Core, React Js, and SQL.
        I enjoy building clean, efficient, and user-friendly applications.I’ve worked on real company projects using React and .NET MVC, handled databases like MySQL/MariaDB, and contributed to API development, debugging, and frontend enhancements.
      </p>

      <div className="hero-actions">
        <a 
          href="mailto:patilketaki2607@gmail.com?subject=Hiring Inquiry - Ketaki Patil" 
          className="btn-primary"
          onClick={() => {
            navigator.clipboard.writeText("patilketaki2607@gmail.com");
            alert("Ready to hire me? Great!\n\nMy email address (patilketaki2607@gmail.com) has been copied to your clipboard.\n\nYour default mail app should also open now.");
          }}
        >
          <span>💼</span> Hire Me
        </a>
        <a href="/Ketaki_Patil_CV.png" download="Ketaki_Patil_CV.png" className="btn-secondary">
          <span>📄</span> Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
