import { useState } from 'react';
import styles from '../src/styles/Style.module.scss'
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <section className={styles['section-admin']}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Ingresar</button>
      </form>
    </section>

  );
};

export default LoginForm;
