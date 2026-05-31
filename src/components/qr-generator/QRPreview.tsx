"use client";

interface QRPreviewProps {
  qrDataUrl: string;
  foregroundColor: string;
  backgroundColor: string;
  frameEnabled: boolean;
  topText: string;
  bottomText: string;
}

export default function QRPreview({
  qrDataUrl,
  foregroundColor,
  backgroundColor,
  frameEnabled,
  topText,
  bottomText,
}: QRPreviewProps) {
  if (!qrDataUrl) {
    return (
      <div className="aspect-square flex items-center justify-center bg-[#181818] rounded-md">
        <p className="text-[#a3a3a3] text-sm">Enter data to generate QR code</p>
      </div>
    );
  }

  return (
    <div
      id="qr-preview"
      className="flex flex-col items-center justify-center p-8 bg-[#181818] rounded-md"
      style={{ backgroundColor }}
    >
      {frameEnabled && topText && (
        <div className="mb-4 text-center">
          <p className="text-lg font-bold" style={{ color: foregroundColor }}>
            {topText}
          </p>
        </div>
      )}

      <div className="relative">
        <img src={qrDataUrl} alt="QR Code" className="w-64 h-64" />
      </div>

      {frameEnabled && bottomText && (
        <div className="mt-4 text-center">
          <p className="text-base" style={{ color: foregroundColor }}>
            {bottomText}
          </p>
        </div>
      )}
    </div>
  );
}
