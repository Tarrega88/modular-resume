function RelativeAbsLeft({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -left-6 group-hover:opacity-100 opacity-0 transition-all duration-150">
        {children}
      </div>
    </div>
  );
}

export default RelativeAbsLeft;
