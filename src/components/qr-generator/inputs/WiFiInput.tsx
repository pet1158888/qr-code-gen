import { WiFiConfig } from "@/lib/qr-utils";

interface WiFiInputProps {
  value: WiFiConfig;
  onChange: (value: WiFiConfig) => void;
}

export default function WiFiInput({ value, onChange }: WiFiInputProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-white">
          Network Name (SSID)
        </label>
        <input
          type="text"
          value={value.ssid}
          onChange={(e) => onChange({ ...value, ssid: e.target.value })}
          placeholder="MyWiFiNetwork"
          className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-white">
          Security Type
        </label>
        <select
          value={value.security}
          onChange={(e) =>
            onChange({
              ...value,
              security: e.target.value as WiFiConfig["security"],
            })
          }
          className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
        >
          <option value="WPA">WPA/WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">No Password</option>
        </select>
      </div>

      {value.security !== "nopass" && (
        <div className="space-y-2">
          <label className="block text-sm font-bold text-white">Password</label>
          <input
            type="password"
            value={value.password}
            onChange={(e) => onChange({ ...value, password: e.target.value })}
            placeholder="Enter password"
            className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
          />
        </div>
      )}
    </div>
  );
}
