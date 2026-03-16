const Experience = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Professional Experience</h1>
      </div>

      <div className="card">
        <h3 className="card-title">Jr. Software Developer</h3>
        <div className="card-subtitle">
          <span>Algo IQ Software Solutions Pvt Ltd</span>
          <span className="card-location">Present - Malad, Maharashtra</span>
        </div>
        <ul>
          <li>Designing, developing, and deploying web-based applications using C#, .NET MVC, React, SQL, and MariaDB.</li>
          <li>Assisted in building company projects, contributing to front-end development with React and back-end using MVC framework.</li>
          <li>Gained hands-on experience in database integration and API handling.</li>
          <li>Strengthened problem-solving skills by debugging and testing features in live projects.</li>
        </ul>
      </div>

      <div className="card">
        <h3 className="card-title">Software Development Intern</h3>
        <div className="card-subtitle">
          <span>Algo IQ Software Solutions Pvt Ltd</span>
          <span className="card-date">02/2025 – 04/2025 | Vasai, Maharashtra</span>
        </div>
        <ul>
          <li>Completed a 2-month internship focusing on C#, .NET MVC, React.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
