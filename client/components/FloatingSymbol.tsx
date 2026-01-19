interface FloatingSymbolProps {
  symbol: string;
  color: string;
  delay?: number;
  size?: "small" | "medium" | "large";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  animation?: "float" | "jump" | "bounce" | "spin-3d";
}

export default function FloatingSymbol({
  symbol,
  color,
  delay = 0,
  size = "medium",
  top,
  left,
  right,
  bottom,
  animation = "float",
}: FloatingSymbolProps) {
  const sizeClasses = {
    small: "w-16 h-16 text-2xl",
    medium: "w-24 h-24 text-4xl",
    large: "w-32 h-32 text-6xl",
  };

  return (
    <div
      className={`absolute ${sizeClasses[size]} rounded-full ${color} flex items-center justify-center text-white font-bold ${animation} cursor-pointer hover:scale-125 transition-transform duration-300 soft-shadow`}
      style={{
        top,
        left,
        right,
        bottom,
        animationDelay: `${delay}s`,
        filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))",
      }}
    >
      {symbol}
    </div>
  );
}
