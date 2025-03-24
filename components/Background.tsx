type BackgroundProps = {
  activeCard: number | null;
};

export function Background({ activeCard }: BackgroundProps) {
  return (
    <>
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-20 transition-opacity duration-300"
        style={{
          backgroundSize: "50px 50px",
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
        }}
      />

      {/* Teal glow effect */}
      <div
        className={`absolute top-0 left-1/4 w-1/2 h-1/2 bg-teal-500 rounded-full filter blur-[150px] opacity-20 transition-all duration-500 ${
          activeCard !== null ? "opacity-40" : ""
        }`}
      />
    </>
  );
}
