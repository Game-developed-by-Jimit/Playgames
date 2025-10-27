import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  text?: string;
}

export function LoadingSpinner({ text = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16" data-testid="loading-spinner">
      <div className="relative">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <div className="absolute inset-0 h-12 w-12 animate-spin rounded-full bg-gradient-to-r from-primary to-chart-2 opacity-20 blur-md" />
      </div>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
