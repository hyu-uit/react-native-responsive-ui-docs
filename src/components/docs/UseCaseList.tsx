import { ReactNode } from "react";

interface UseCase {
  icon: ReactNode;
  iconBg: string;
  title: string;
}

interface UseCaseListProps {
  useCases: UseCase[];
}

export function UseCaseList({ useCases }: UseCaseListProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl p-5 space-y-4">
      {useCases.map((useCase, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-lg ${useCase.iconBg} flex items-center justify-center shrink-0`}
          >
            {useCase.icon}
          </div>
          <span className="text-sm text-muted">{useCase.title}</span>
        </div>
      ))}
    </div>
  );
}
