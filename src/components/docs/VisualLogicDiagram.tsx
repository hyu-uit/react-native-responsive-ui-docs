interface LogicRule {
  condition: string;
  result: string;
}

interface VisualLogicDiagramProps {
  rules: LogicRule[];
}

export function VisualLogicDiagram({ rules }: VisualLogicDiagramProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl p-5">
      <h4 className="text-xs font-semibold text-muted tracking-wider mb-4">
        VISUAL LOGIC
      </h4>
      <div className="space-y-4">
        {rules.map((rule, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-muted mb-1">INPUT</div>
              <div className="text-sm text-foreground font-mono">
                {rule.condition}
              </div>
            </div>
            <div className="text-muted">→</div>
            <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg">
              <code className="text-sm text-primary-hover font-mono">
                {rule.result}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
