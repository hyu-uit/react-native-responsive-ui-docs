interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-6 bg-primary rounded-full" />
      <h2 className="text-xl font-bold text-foreground">{children}</h2>
    </div>
  );
}

