import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search games..." }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid="input-search"
        className="h-12 rounded-full border-border/50 bg-card/50 pl-12 pr-6 text-base backdrop-blur-sm transition-all duration-200 focus:border-primary/50 focus:bg-card focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
