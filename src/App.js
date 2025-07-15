import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>QuitChampion</h1>
      <p>Break habits. Rebuild your life.</p>
      <form>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
