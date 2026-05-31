interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-white">Text Content</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your text here..."
        rows={4}
        className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors resize-none"
      />
    </div>
  );
}
