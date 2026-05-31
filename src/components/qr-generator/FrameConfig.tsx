interface FrameConfigProps {
  enabled: boolean;
  topText: string;
  bottomText: string;
  onEnabledChange: (enabled: boolean) => void;
  onTopTextChange: (text: string) => void;
  onBottomTextChange: (text: string) => void;
}

export default function FrameConfig({
  enabled,
  topText,
  bottomText,
  onEnabledChange,
  onTopTextChange,
  onBottomTextChange,
}: FrameConfigProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-bold text-white">Frame Text</label>
        <button
          onClick={() => onEnabledChange(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? "bg-[#6b16ed]" : "bg-[#323232]"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {enabled && (
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-white">
              Top Text
            </label>
            <input
              type="text"
              value={topText}
              onChange={(e) => onTopTextChange(e.target.value)}
              placeholder="SCAN ME"
              className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-white">
              Bottom Text
            </label>
            <input
              type="text"
              value={bottomText}
              onChange={(e) => onBottomTextChange(e.target.value)}
              placeholder="My Website"
              className="w-full px-3 py-2 bg-[#181818] text-white rounded-sm border border-[#323232] focus:border-[#6b16ed] focus:outline-none transition-colors"
            />
          </div>
        </div>
      )}
    </div>
  );
}
