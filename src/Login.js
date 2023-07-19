import React, { useState } from 'react';
import firebase from './firebase';

function Login() {
  const [firebaseApp, setFirebaseApp] = useState(firebase.initializeApp());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // TODO: Use the firebaseApp variable here.
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Logga in</button>
      </form>
      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;