
export default function SectionCard({ children, className = "" }) {
  return (
    <div
      className={`card-shine p-5 bg-gray-900 rounded-2xl border border-gray-800 
      hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 
      transition duration-300 ${className}`}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(320px,380px)_1fr] items-start">
        {children}
      </div>
    </div>
  );
}
