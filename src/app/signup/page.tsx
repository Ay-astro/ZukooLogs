'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./signup.module.css";
import logo from "../logoimg.jpg"; // Adjust the path to your logo image

interface SignupProps {}

export const Signup: React.FC<SignupProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup Details:", { username, email, password });
  };

  return (
    <div className={styles.main}>
      <div className={styles.authcontainer}>
        <div className={styles.loginH4}>
          <Image src={logo} alt="Logo" />
          <h2>Sign Up</h2>
        </div>
        <form className={styles.authform} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className={styles.authbutton}>Sign Up</button>
        </form>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
