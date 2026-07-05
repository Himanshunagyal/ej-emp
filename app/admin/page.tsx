import Link from "next/link";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import Enquiry from "@/models/Enquiry";

async function getStats() {
  try {
    await connectDB();
    const [products, enquiries, newEnquiries] = await Promise.all([
      Product.countDocuments(),
      Enquiry.countDocuments(),
      Enquiry.countDocuments({ status: "new" })
    ]);
    return { products, enquiries, newEnquiries };
  } catch {
    return { products: 0, enquiries: 0, newEnquiries: 0 };
  }
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  return (
    <>
      <style>{`
        .admin-serif {
          font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
        }
        .admin-sans {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
        }
        .admin-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .admin-btn {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 2px;
          transition: all 0.2s ease;
          border: 1px solid transparent;
          display: inline-block;
        }

        .admin-btn-primary {
          background: #4d0e17;
          color: #f6f0e4;
          border-color: #4d0e17;
        }

        .admin-btn-primary:hover {
          background: #6b1420;
          border-color: #6b1420;
        }

        .admin-btn-secondary {
          background: transparent;
          color: #4d0e17;
          border-color: #4d0e17;
        }

        .admin-btn-secondary:hover {
          background: rgba(75, 14, 23, 0.05);
        }

        .admin-logout-btn {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 2px;
          border: 1px solid rgba(107, 95, 84, 0.3);
          background: transparent;
          color: #6b5f54;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admin-logout-btn:hover {
          background: rgba(107, 95, 84, 0.08);
          border-color: #6b5f54;
        }

        .stat-card {
          background: #fffdf8;
          border: 1px solid rgba(42, 33, 28, 0.08);
          padding: 28px 32px;
          border-radius: 2px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(42, 33, 28, 0.06);
        }

        .stat-label {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #6b5f54;
          margin: 0 0 4px;
        }

        .stat-value {
          font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 500;
          color: #2a211c;
          margin: 0;
        }

        .stat-value-new {
          color: #6b1420;
        }

        .admin-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
          padding-top: 24px;
          border-top: 1px solid rgba(42, 33, 28, 0.06);
        }
      `}</style>

      <section 
        className="admin-sans"
        style={{
          background: "#f6f0e4",
          padding: "40px 24px 80px",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <div 
          className="container" 
          style={{
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {/* Header Section */}
          <div 
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 40,
              paddingBottom: 24,
              borderBottom: "1px solid rgba(42, 33, 28, 0.08)",
              position: "relative",
            }}
          >
            {/* Ornamental accent */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -1,
                left: 0,
                width: 80,
                height: 2,
                background: "linear-gradient(90deg, #a8823d, #cdaa66)",
                opacity: 0.6,
              }}
            />

            <div style={{ display: "grid", gap: 4 }}>
              <span 
                className="admin-eyebrow"
                style={{
                  color: "#a8823d",
                }}
              >
                Administration
              </span>
              <h1 
                className="admin-serif"
                style={{
                  margin: 0,
                  fontSize: "clamp(32px, 4vw, 44px)",
                  color: "#2a211c",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                Dashboard
              </h1>
            </div>

            <LogoutButton 
              className="admin-logout-btn"
            />
          </div>

          {/* Stats Grid */}
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
              marginBottom: 32,
            }}
          >
            <div className="stat-card">
              <p className="stat-label">Total Products</p>
              <h2 className="stat-value">{stats.products}</h2>
            </div>
            <div className="stat-card">
              <p className="stat-label">Total Enquiries</p>
              <h2 className="stat-value">{stats.enquiries}</h2>
            </div>
            <div className="stat-card">
              <p className="stat-label">New Enquiries</p>
              <h2 className="stat-value stat-value-new">{stats.newEnquiries}</h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="admin-actions">
            <Link 
              href="/admin/products" 
              className="admin-btn admin-btn-primary"
            >
              Manage Products
            </Link>
            <Link 
              href="/admin/enquiries" 
              className="admin-btn admin-btn-secondary"
            >
              View Enquiries
            </Link>
          </div>

          {/* Optional: Quick Info */}
          <div 
            style={{
              marginTop: 40,
              padding: "20px 24px",
              background: "rgba(255, 253, 248, 0.4)",
              border: "1px solid rgba(42, 33, 28, 0.06)",
              borderRadius: 2,
            }}
          >
            <p style={{
              margin: 0,
              fontSize: 13,
              color: "#6b5f54",
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}>
              <span style={{ color: "#a8823d" }}>✦</span> 
              {stats.newEnquiries > 0 
                ? ` You have ${stats.newEnquiries} new enquiry${stats.newEnquiries > 1 ? 's' : ''} awaiting your attention.`
                : " All enquiries have been reviewed. Great work!"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
