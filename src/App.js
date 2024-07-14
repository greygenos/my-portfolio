import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rey</h1>
        <p>Aspiring Tech Professional</p>
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Rey, a career shifter passionate about breaking into the tech industry.
            I'm currently learning data analytics and web development tools to build a solid foundation for my future career in technology.
          </p>
        </section>
        <section className="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-items">
            <div className="portfolio-item">
              <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
                <img src="https://via.placeholder.com/150" alt="Project 1 Thumbnail" />
                <p>Project 1</p>
              </a>
            </div>
            <div className="portfolio-item">
              <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
                <img src="https://via.placeholder.com/150" alt="Project 2 Thumbnail" />
                <p>Project 2</p>
              </a>
            </div>
            <div className="portfolio-item">
              <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">
                <img src="https://via.placeholder.com/150" alt="Project 3 Thumbnail" />
                <p>Project 35</p>
              </a>
            </div>
          </div>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:genosarey@gmail.com">genosarey@gmail.com</a></p>
          <p>Phone: 09091734011</p>
          <p>GitHub: <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">github.com/your-github-username</a></p>
        </section>
      </main>
      <footer>
        <p>Connect with me on social media!</p>
        <div className="social">
          <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://www.linkedin.com/in/reygenosa1/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://github.com/greygenos" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>&copy; 2024 Rey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
