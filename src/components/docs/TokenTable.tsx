interface TokenRow {
  name: string;
  baseValue: number;
  scaledIphone: string;
  scaledIpad: string;
}

interface TokenTableProps {
  tokens: TokenRow[];
}

export function TokenTable({ tokens }: TokenTableProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border text-xs font-semibold text-muted tracking-wider">
        <div>TOKEN NAME</div>
        <div>BASE VALUE (PX)</div>
        <div>SCALED (IPHONE 14)</div>
        <div>SCALED (IPAD PRO)</div>
      </div>

      {/* Rows */}
      {tokens.map((token, i) => (
        <div
          key={token.name}
          className={`grid grid-cols-4 gap-4 px-6 py-4 ${
            i !== tokens.length - 1 ? "border-b border-border" : ""
          }`}
        >
          <div>
            <code className="text-primary-hover font-mono text-sm">
              {token.name}
            </code>
          </div>
          <div className="text-foreground text-sm">{token.baseValue}</div>
          <div className="text-muted text-sm">{token.scaledIphone}</div>
          <div className="text-muted text-sm">{token.scaledIpad}</div>
        </div>
      ))}
    </div>
  );
}

