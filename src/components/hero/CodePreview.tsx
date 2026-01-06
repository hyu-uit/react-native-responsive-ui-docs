import { TypeSafeBadge } from "./TypeSafeBadge";

export function CodePreview() {
  return (
    <div className="relative">
      <div className="bg-code-bg border border-border rounded-2xl overflow-hidden shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 text-sm text-muted">App.tsx</span>
        </div>

        {/* Code content */}
        <pre className="p-6 text-sm leading-relaxed overflow-x-auto border-0 rounded-none bg-transparent">
          <code>
            <span className="text-syntax-keyword">import</span>
            <span className="text-syntax-bracket">{" { "}</span>
            <span className="text-syntax-component">ResponsiveView</span>
            <span className="text-syntax-bracket">{" } "}</span>
            <span className="text-syntax-keyword">from</span>
            <span className="text-syntax-string">
              {" "}
              &apos;rn-responsive-ui&apos;
            </span>
            {"\n\n"}
            <span className="text-syntax-keyword">export default</span>
            <span className="text-syntax-keyword"> function</span>
            <span className="text-syntax-function"> App</span>
            <span className="text-syntax-bracket">() {"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-syntax-keyword">return</span>
            <span className="text-syntax-bracket"> (</span>
            {"\n"}
            {"    "}
            <span className="text-syntax-bracket">&lt;</span>
            <span className="text-syntax-component">ResponsiveView</span>
            {"\n"}
            {"      "}
            <span className="text-syntax-property">breakpoints</span>
            <span className="text-syntax-operator">=</span>
            <span className="text-syntax-bracket">{"{{"}</span>
            {"\n"}
            {"        "}
            <span className="text-syntax-property">mobile</span>
            <span className="text-syntax-operator">:</span>
            <span className="text-syntax-string"> &apos;100%&apos;</span>
            <span className="text-syntax-bracket">,</span>
            {"\n"}
            {"        "}
            <span className="text-syntax-property">tablet</span>
            <span className="text-syntax-operator">:</span>
            <span className="text-syntax-string"> &apos;50%&apos;</span>
            <span className="text-syntax-bracket">,</span>
            {"\n"}
            {"        "}
            <span className="text-syntax-property">desktop</span>
            <span className="text-syntax-operator">:</span>
            <span className="text-syntax-string"> &apos;33%&apos;</span>
            {"\n"}
            {"      "}
            <span className="text-syntax-bracket">{"}}"}</span>
            {"\n"}
            {"      "}
            <span className="text-syntax-property">style</span>
            <span className="text-syntax-operator">=</span>
            <span className="text-syntax-bracket">{"{"}styles.</span>
            <span className="text-syntax-property">container</span>
            <span className="text-syntax-bracket">{"}"}</span>
            {"\n"}
            {"    "}
            <span className="text-syntax-bracket">&gt;</span>
            {"\n"}
            {"      "}
            <span className="text-syntax-bracket">&lt;</span>
            <span className="text-syntax-component">Card</span>
            <span className="text-syntax-property"> variant</span>
            <span className="text-syntax-operator">=</span>
            <span className="text-syntax-string">&quot;adaptive&quot;</span>
            <span className="text-syntax-bracket"> /&gt;</span>
            {"\n"}
            {"    "}
            <span className="text-syntax-bracket">&lt;/</span>
            <span className="text-syntax-component">ResponsiveView</span>
            <span className="text-syntax-bracket">&gt;</span>
            {"\n"}
            {"  "}
            <span className="text-syntax-bracket">);</span>
            {"\n"}
            <span className="text-syntax-bracket">{"}"}</span>
          </code>
        </pre>
      </div>
      <TypeSafeBadge />
    </div>
  );
}
