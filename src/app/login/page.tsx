'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";
import logo from "../logoimg.jpg";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Details:", { email, password });
  };

  return (
    <div className={styles.main}>
      <div className={styles.authcontainer}>
        <div className={styles.loginH4}>
          <Image src={logo} alt="Logo" />
          <h2>Login</h2>
        </div>
        <form className={styles.authform} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.authbutton}>
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
