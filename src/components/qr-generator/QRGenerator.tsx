"use client";

import { useState, useEffect } from "react";
import {
  InputType,
  WiFiConfig,
  vCardConfig,
  generateQRCode,
  formatWiFiQR,
  formatvCardQR,
} from "@/lib/qr-utils";
import InputTypeSelector from "./InputTypeSelector";
import URLInput from "./inputs/URLInput";
import TextInput from "./inputs/TextInput";
import WiFiInput from "./inputs/WiFiInput";
import vCardInput from "./inputs/vCardInput";
import ColorPicker from "./ColorPicker";
import FrameConfig from "./FrameConfig";
import QRPreview from "./QRPreview";
import ExportButtons from "./ExportButtons";

export default function QRGenerator() {
  const [inputType, setInputType] = useState<InputType>("url");
  const [urlData, setUrlData] = useState("");
  const [textData, setTextData] = useState("");
  const [wifiData, setWifiData] = useState<WiFiConfig>({
    ssid: "",
    password: "",
    security: "WPA",
  });
  const [vcardData, setVcardData] = useState<vCardConfig>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    organization: "",
  });
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [frameEnabled, setFrameEnabled] = useState(false);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    let data = "";

    switch (inputType) {
      case "url":
        data = urlData;
        break;
      case "text":
        data = textData;
        break;
      case "wifi":
        if (wifiData.ssid) {
          data = formatWiFiQR(wifiData);
        }
        break;
      case "vcard":
        if (
          vcardData.firstName ||
          vcardData.lastName ||
          vcardData.phone ||
          vcardData.email
        ) {
          data = formatvCardQR(vcardData);
        }
        break;
    }

    if (data) {
      generateQRCode(data, {
        width: 512,
        margin: 2,
        color: {
          dark: foregroundColor,
          light: backgroundColor,
        },
      })
        .then(setQrDataUrl)
        .catch(console.error);
    } else {
      setQrDataUrl("");
    }
  }, [
    inputType,
    urlData,
    textData,
    wifiData,
    vcardData,
    foregroundColor,
    backgroundColor,
  ]);

  const hasData = qrDataUrl.length > 0;

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
      {/* Left Column - Input Controls */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            QR Code Generator
          </h1>
          <p className="text-[#a3a3a3] text-base">
            Create custom QR codes for URLs, text, WiFi, and vCards
          </p>
        </div>

        {/* Input Type Selector */}
        <div>
          <InputTypeSelector value={inputType} onChange={setInputType} />
        </div>

        {/* Input Forms */}
        <div className="p-4 bg-[#181818] rounded-md">
          {inputType === "url" && (
            <URLInput value={urlData} onChange={setUrlData} />
          )}
          {inputType === "text" && (
            <TextInput value={textData} onChange={setTextData} />
          )}
          {inputType === "wifi" && (
            <WiFiInput value={wifiData} onChange={setWifiData} />
          )}
          {inputType === "vcard" && (
            <vCardInput value={vcardData} onChange={setVcardData} />
          )}
        </div>

        {/* Color Pickers */}
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="QR Color"
            value={foregroundColor}
            onChange={setForegroundColor}
          />
          <ColorPicker
            label="Background"
            value={backgroundColor}
            onChange={setBackgroundColor}
          />
        </div>

        {/* Frame Configuration */}
        <div className="p-4 bg-[#181818] rounded-md">
          <FrameConfig
            enabled={frameEnabled}
            topText={topText}
            bottomText={bottomText}
            onEnabledChange={setFrameEnabled}
            onTopTextChange={setTopText}
            onBottomTextChange={setBottomText}
          />
        </div>
      </div>

      {/* Right Column - Preview & Export */}
      <div className="flex flex-col space-y-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-4">Preview</h2>
          <QRPreview
            qrDataUrl={qrDataUrl}
            foregroundColor={foregroundColor}
            backgroundColor={backgroundColor}
            frameEnabled={frameEnabled}
            topText={topText}
            bottomText={bottomText}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Export</h2>
          <ExportButtons qrDataUrl={qrDataUrl} disabled={!hasData} />
        </div>
      </div>
    </div>
  );
}
