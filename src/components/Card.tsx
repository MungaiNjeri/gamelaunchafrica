interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-800 ${hover ? 'hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
}
