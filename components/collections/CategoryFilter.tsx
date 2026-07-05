"use client";

type Props = {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({ categories, selectedCategory, onChange }: Props) {
  return (
    <>
      <style>{`
        .filter-container {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(42, 33, 28, 0.06);
        }

        .filter-btn {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 20px;
          border: 1px solid rgba(42, 33, 28, 0.08);
          border-radius: 2px;
          background: transparent;
          color: #6b5f54;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .filter-btn:hover {
          border-color: #b9862f;
          color: #241a15;
          background: rgba(185, 134, 47, 0.04);
        }

        .filter-btn.active {
          border-color: #b9862f;
          color: #4d0e17;
          background: rgba(185, 134, 47, 0.08);
          font-weight: 500;
        }

        .filter-btn.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 20%;
          right: 20%;
          height: 2px;
          background: linear-gradient(90deg, #b9862f, #ddb673);
          border-radius: 1px;
        }

        .filter-btn:focus-visible {
          outline: 2px solid #b9862f;
          outline-offset: 2px;
        }

        /* Filter stats badge */
        .filter-stats {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: #8a7a6b;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          padding-left: 16px;
          border-left: 1px solid rgba(42, 33, 28, 0.06);
        }

        .filter-stats .dot {
          color: #b9862f;
          opacity: 0.3;
          font-size: 6px;
        }

        @media (max-width: 860px) {
          .filter-container {
            gap: 6px;
            margin-bottom: 24px;
          }
          .filter-btn {
            font-size: 10px;
            padding: 6px 14px;
          }
          .filter-stats {
            margin-left: 0;
            padding-left: 0;
            border-left: none;
            width: 100%;
            justify-content: flex-start;
            padding-top: 12px;
            border-top: 1px solid rgba(42, 33, 28, 0.06);
          }
        }

        @media (max-width: 600px) {
          .filter-btn {
            font-size: 9.5px;
            padding: 5px 12px;
          }
          .filter-container {
            gap: 4px;
          }
        }
      `}</style>

      <div className="filter-container">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            type="button"
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
        
        {/* Optional: Show filter stats */}
        <div className="filter-stats">
          <span>{categories.length} categories</span>
          <span className="dot">◆</span>
          <span>Showing: {selectedCategory === 'All' ? 'All' : selectedCategory}</span>
        </div>
      </div>
    </>
  );
}