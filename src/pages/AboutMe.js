import React from 'react';
import { FaCertificate, FaGraduationCap, FaLightbulb, FaGoogle } from 'react-icons/fa';

const pulseAnimation = {
  animation: 'pulse 2s infinite',
  color: '#0af',
  marginLeft: '8px',
  verticalAlign: 'middle',
};

export default function AboutMe() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div
        style={{
          maxWidth: '700px',
          margin: '2rem auto',
          color: '#eee',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          lineHeight: '1.6',
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            marginBottom: '0.5rem',
            color: '#0af',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Vyaas Subramanian
          <FaLightbulb style={pulseAnimation} title="Innovator" />
        </h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.6rem',
              borderBottom: '2px solid #0af',
              paddingBottom: '0.3rem',
            }}
          >
            About
          </h2>
          <p>
            Passionate about Artificial Intelligence and Machine Learning, I have built AI-driven projects, including a multi-method Netflix recommendation system and a facial recognition-based attendance tracker. I specialize in Python, Scikit-learn, TensorFlow, and OpenCV, with hands-on experience in AI/ML model development and data analysis. Open to AI research roles, internships, and collaborations! Check out my Projects page and click for links to the Git Repos for each Project!
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.6rem',
              borderBottom: '2px solid #0af',
              paddingBottom: '0.3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <FaGraduationCap /> Education
          </h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>BS Computer Science, Knox College '26</li>
            <li>Relevant coursework: Artificial Intelligence, Data Mining, Software Engineering</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.6rem',
              borderBottom: '2px solid #0af',
              paddingBottom: '0.3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <FaCertificate /> Certifications
          </h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '0.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
              <FaGoogle color="#DB4437" /> Google Data Analytics
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
              <FaGoogle color="#DB4437" /> Google Generative AI
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaCertificate color="#0af" /> ZTM AI/ML & Python
            </li>
          </ul>
        </section>

        <section>
          <a
            href="/resume.pdf"
            download
            style={{
              display: 'inline-block',
              backgroundColor: '#0af',
              color: '#111',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              boxShadow: '0 4px 10px rgba(0, 170, 255, 0.5)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0088cc')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0af')}
          >
            Download Resume
          </a>
        </section>
      </div>
    </>
  );
}

