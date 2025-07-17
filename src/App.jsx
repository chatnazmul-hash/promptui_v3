import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState(null);

  const handleGenerate = () => {
    if (!prompt) return;
    const generatedUI = (
      <div style={{ fontFamily: 'sans-serif' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
          <h1>AdBoost</h1>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <button style={{ backgroundColor: '#f97316', color: '#fff', padding: '0.5rem 1rem' }}>Get Started</button>
        </header>
        <section style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fff7ed' }}>
          <h2>Boost Your Ad Campaigns</h2>
          <p>Target better, spend smarter — Meta, Google & Amazon Ads</p>
          <button style={{ backgroundColor: '#f97316', color: '#fff', padding: '0.5rem 1rem' }}>Launch Campaign</button>
        </section>
      </div>
    );
    setOutput(generatedUI);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
      <h1>What should we design?</h1>
      <textarea
        style={{ width: '100%', height: '100px', margin: '1rem 0' }}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe design you need..."
      />
      <button onClick={handleGenerate} style={{ backgroundColor: '#f97316', color: '#fff', padding: '0.5rem 1rem' }}>
        Generate
      </button>
      <div style={{ marginTop: '2rem' }}>{output}</div>
    </div>
  );
}

export default App;