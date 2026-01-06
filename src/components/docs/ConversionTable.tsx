interface ConversionExample {
  property: string;
  value: string | number;
  result: string;
  isScaled: boolean;
}

interface ConversionTableProps {
  examples: ConversionExample[];
}

export function ConversionTable({ examples }: ConversionTableProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl p-5">
      <h4 className="text-xs font-semibold text-muted tracking-wider mb-4">
        CONVERSION EXAMPLES
      </h4>
      <div className="space-y-3">
        {examples.map((example, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${example.isScaled ? "bg-primary" : "bg-muted"}`}
              />
              <code className="text-muted font-mono">
                {example.property}: {example.value}
              </code>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted">→</span>
              <span
                className={`font-mono ${example.isScaled ? "text-accent" : "text-muted"}`}
              >
                {example.result}{" "}
                <span className="text-xs">
                  ({example.isScaled ? "Scaled" : "Ignored"})
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

