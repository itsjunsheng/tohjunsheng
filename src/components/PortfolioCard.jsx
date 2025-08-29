import ScrollFloat from "./ScrollFloat/ScrollFloat";

export default function PortfolioCard({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`relative z-10 py-10 px-8 lg:px-30 ${className}`}>
      {/* Floating Title */}
      {title && <ScrollFloat>{title}</ScrollFloat>}

      {/* Inner Content */}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
