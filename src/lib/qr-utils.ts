import QRCode, { QRCodeToDataURLOptions } from "qrcode";

export type InputType = "url" | "text" | "wifi" | "vcard";

export interface WiFiConfig {
  ssid: string;
  password: string;
  security: "WPA" | "WEP" | "nopass";
}

export interface vCardConfig {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  organization: string;
}

export function formatWiFiQR(config: WiFiConfig): string {
  const { ssid, password, security } = config;
  return `WIFI:T:${security === "nopass" ? "nopass" : security};S:${ssid};${password ? `P:${password};` : ""};;`;
}

export function formatvCardQR(config: vCardConfig): string {
  const { firstName, lastName, phone, email, organization } = config;
  const fullName = `${firstName} ${lastName}`.trim();

  let vcard = "BEGIN:VCARD\nVERSION:3.0\n";
  if (firstName || lastName) {
    vcard += `N:${lastName};${firstName}\n`;
    vcard += `FN:${fullName}\n`;
  }
  if (phone) vcard += `TEL:${phone}\n`;
  if (email) vcard += `EMAIL:${email}\n`;
  if (organization) vcard += `ORG:${organization}\n`;
  vcard += "END:VCARD";

  return vcard;
}

export function generateQRCode(
  data: string,
  options: QRCodeToDataURLOptions = {},
): Promise<string> {
  const defaultOptions: QRCodeToDataURLOptions = {
    width: 512,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
    ...options,
  };

  return QRCode.toDataURL(data, defaultOptions);
}
