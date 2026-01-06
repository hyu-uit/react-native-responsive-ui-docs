interface ScaleExample {
  input: string;
  output: string;
  device: string;
}

interface ScaleExamplesTableProps {
  examples: ScaleExample[];
}

export function ScaleExamplesTable({ examples }: ScaleExamplesTableProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl p-5">
      <h4 className="text-xs font-semibold text-muted tracking-wider mb-4">
        SCALE EXAMPLES
      </h4>
      <div className="space-y-3">
        {examples.map((example, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <code className="text-muted font-mono">{example.input}</code>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted">→</span>
              <span className="text-accent font-mono">
                {example.output}{" "}
                <span className="text-xs text-muted">({example.device})</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
