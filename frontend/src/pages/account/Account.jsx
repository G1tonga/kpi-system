import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/user-Context';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import styles from './Account.module.css';

function Account() {
  const navigate = useNavigate();
  const { setUserData } = useUser();
  const [showPassword, setShowPassword] = useState(false);

 
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1234');

  function handleLogin(e) {
    e.preventDefault();

   
    if (username === 'admin' && password === '1234') {
      const fakeUser = {
        full_name: 'Demo Admin',
        username: 'admin',
        role: 'Administrator',
        initials: 'DA',
      };

      setUserData(fakeUser);
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('Invalid credentials. Use admin / 1234');
    }
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

       
        <div className={styles.labelContainer}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

      
        <div className={styles.labelContainer} style={{ position: 'relative' }}>
          <label>Password</label>
          <div className={styles.inputWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={styles.eyeButton}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit">Login</button>
          <p className="text-gray-500 text-sm mt-3 text-center">
            Prefilled with <strong>admin</strong> / <strong>1234</strong>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Account;
// dummy change
