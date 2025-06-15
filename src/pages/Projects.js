import React, { useEffect, useState } from 'react';
import './Projects.css'; // Make sure this file exists with styling (or include styles in App.css)

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Vysubs28/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching repositories:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 className="projects-title">My Projects</h1>

      {loading ? (
        <p style={{ color: '#aaa' }}>Loading projects...</p>
      ) : (
        <div className="repo-grid">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <div className="card-content">
                <h2>{repo.name}</h2>
                <p>{repo.description || 'No description available.'}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}


