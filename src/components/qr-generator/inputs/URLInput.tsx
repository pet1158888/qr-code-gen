interface URLInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function URLInput({ value, onChange }: URLInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-white">Website URL</label>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com"
        className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
      />
    </div>
  );
}
