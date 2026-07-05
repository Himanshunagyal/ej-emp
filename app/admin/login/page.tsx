"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password")
      })
    });

    if (response.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <section className="page-section">
      <div className="container" style={{ maxWidth: 440 }}>
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin} className="card" style={{ padding: 20, display: "grid", gap: 14 }}>
          <div className="field"><label>Email</label><input type="email" name="email" required /></div>
          <div className="field"><label>Password</label><input type="password" name="password" required /></div>
          <button className="btn" type="submit">Login</button>
          {error && <p style={{ color: "#8B1A1A", margin: 0 }}>{error}</p>}
        </form>
      </div>
    </section>
  );
}
