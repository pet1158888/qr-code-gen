interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function ColorPicker({
  label,
  value,
  onChange,
}: ColorPickerProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-white">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-12 rounded-sm border-2 border-[#323232] cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000"
          className="flex-1 px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
        />
      </div>
    </div>
  );
}
