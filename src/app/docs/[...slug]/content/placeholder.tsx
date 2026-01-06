import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {title}
      </h1>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Construction className="w-16 h-16 text-muted mb-6" />
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Coming Soon
        </h2>
        <p className="text-muted max-w-md">
          This documentation page is currently under construction. Check back
          soon for detailed content about {title.toLowerCase()}.
        </p>
      </div>
    </div>
  );
}
