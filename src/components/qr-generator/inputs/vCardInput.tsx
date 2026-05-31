import { vCardConfig } from "@/lib/qr-utils";

interface vCardInputProps {
  value: vCardConfig;
  onChange: (value: vCardConfig) => void;
}

export default function vCardInput({ value, onChange }: vCardInputProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-white">
            First Name
          </label>
          <input
            type="text"
            value={value.firstName}
            onChange={(e) => onChange({ ...value, firstName: e.target.value })}
            placeholder="John"
            className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-white">
            Last Name
          </label>
          <input
            type="text"
            value={value.lastName}
            onChange={(e) => onChange({ ...value, lastName: e.target.value })}
            placeholder="Doe"
            className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-white">
          Phone Number
        </label>
        <input
          type="tel"
          value={value.phone}
          onChange={(e) => onChange({ ...value, phone: e.target.value })}
          placeholder="+1 234 567 8900"
          className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-white">
          Email Address
        </label>
        <input
          type="email"
          value={value.email}
          onChange={(e) => onChange({ ...value, email: e.target.value })}
          placeholder="john@example.com"
          className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-white">
          Organization
        </label>
        <input
          type="text"
          value={value.organization}
          onChange={(e) => onChange({ ...value, organization: e.target.value })}
          placeholder="Company Name"
          className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
        />
      </div>
    </div>
  );
}
