"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  className?: string;
};

export function LogoutButton({ className = "btn ghost" }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button className={className} type="button" onClick={handleLogout} disabled={loading}>
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
