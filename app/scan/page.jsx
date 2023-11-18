"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";

export default function ScanPage() {
  const [scanReult, setScanReult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 100,
        height: 200,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanReult(result);
    }
    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <div>
        {scanReult ? (
          <>
            <div className="w-full h-screen">
              {" "}
              Success: <p>{scanReult}</p>
            </div>
            <div className="fixed bottom-0 w-full">
              <Navbar />
            </div>
          </>
        ) : (
          <>
            <div id="reader"></div>
            <div className="fixed bottom-0 w-full">
              <Navbar />
            </div>
          </>
        )}
      </div>
    </>
  );
}
