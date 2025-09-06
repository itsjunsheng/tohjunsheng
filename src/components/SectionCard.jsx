import ScrollReveal from "./ScrollReveal";

export default function SectionCard({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative z-10 py-20 px-8 lg:px-30 text-white ${className}`}
    >
      <ScrollReveal>
      {/* Title */}
        <div className="text-3xl lg:text-4xl font-extrabold tracking-wide text-center mb-10">
          {title}
        </div>
      </ScrollReveal>

      
      <ScrollReveal>
      {/* Inner Content */}  
        <div className="space-y-6">
          {children}
        </div>
      </ScrollReveal>
    </section>
  );
}