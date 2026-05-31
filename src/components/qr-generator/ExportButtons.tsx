interface ExportButtonsProps {
  qrDataUrl: string;
  disabled: boolean;
}

export default function ExportButtons({
  qrDataUrl,
  disabled,
}: ExportButtonsProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.download = "qrcode.png";
          link.href = qrDataUrl;
          link.click();
        }}
        disabled={disabled}
        className="flex-1 px-4 py-3 bg-[#242424] text-white rounded-sm font-bold hover:bg-[#323232] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Download PNG
      </button>
      <button
        onClick={() => {
          const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
              <rect width="512" height="512" fill="white"/>
              <image href="${qrDataUrl}" width="512" height="512"/>
            </svg>
          `;
          const blob = new Blob([svgContent], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "qrcode.svg";
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }}
        disabled={disabled}
        className="flex-1 px-4 py-3 bg-[#6b16ed] text-white rounded-sm font-bold hover:bg-[#a78bfa] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Download SVG
      </button>
    </div>
  );
}
