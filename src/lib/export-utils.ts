import html2canvas from "html2canvas";

export async function exportAsPNG(
  elementId: string,
  filename: string = "qrcode.png",
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error("Element not found");
  }

  const canvas = await html2canvas(element, {
    backgroundColor: null,
    scale: 2, // Higher quality
    logging: false,
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

export async function exportAsSVG(
  qrDataUrl: string,
  filename: string = "qrcode.svg",
): Promise<void> {
  // Convert base64 PNG to SVG wrapper
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = qrDataUrl;
  });

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${img.width}" height="${img.height}">
      <image href="${qrDataUrl}" width="${img.width}" height="${img.height}" />
    </svg>
  `;

  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  link.click();

  URL.revokeObjectURL(url);
}
