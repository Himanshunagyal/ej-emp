"use client";

import { useEffect, useState } from "react";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { Enquiry } from "@/types";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  async function loadEnquiries() {
    const response = await fetch("/api/enquiries");
    const data = await response.json();
    setEnquiries(Array.isArray(data) ? data : []);
  }

  async function updateStatus(id: string | undefined, status: Enquiry["status"]) {
    if (!id) return;
    await fetch(`/api/enquiries/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    loadEnquiries();
  }

  useEffect(() => {
    loadEnquiries();
  }, []);

  return (
    <section className="page-section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <h1>Enquiries</h1>
          <LogoutButton />
        </div>
        <div className="grid-auto">
          {enquiries.map((enquiry) => (
            <article key={enquiry._id} className="card" style={{ padding: 18 }}>
              <p style={{ color: "#8B1A1A", fontWeight: 700 }}>{enquiry.productName}</p>
              <h3 style={{ marginTop: 0 }}>{enquiry.customerName}</h3>
              <p className="muted">{enquiry.email} {enquiry.phone ? ` | ${enquiry.phone}` : ""}</p>
              <p>{enquiry.message || "No message provided."}</p>
              <div className="field">
                <label>Status</label>
                <select value={enquiry.status} onChange={(event) => updateStatus(enquiry._id, event.target.value as Enquiry["status"])}>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </article>
          ))}
        </div>
        {enquiries.length === 0 && <p className="muted">No enquiries yet.</p>}
      </div>
    </section>
  );
}
