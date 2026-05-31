import { InputType } from "@/lib/qr-utils";

interface InputTypeSelectorProps {
  value: InputType;
  onChange: (type: InputType) => void;
}

const inputTypes: { value: InputType; label: string }[] = [
  { value: "url", label: "URL" },
  { value: "text", label: "Text" },
  { value: "wifi", label: "WiFi" },
  { value: "vcard", label: "vCard" },
];

export default function InputTypeSelector({
  value,
  onChange,
}: InputTypeSelectorProps) {
  return (
    <div className="flex gap-2 p-1 bg-[#242424] rounded-sm w-fit">
      {inputTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => onChange(type.value)}
          className={`px-4 py-2 rounded-sm text-sm font-bold transition-all ${
            value === type.value
              ? "bg-[#6b16ed] text-white"
              : "text-[#a3a3a3] hover:text-white"
          }`}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
