"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";

export default function ScanPage() {
  const [scanReult, setScanReult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 200,
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
      <div className="md:w-[390px] rounded-sm bg-white ">
        {scanReult ? (
          <>
            <div className=" m-4">
              <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div class="flex justify-end px-4 pt-4">
                  {/* <!-- Dropdown menu --> */}
                </div>
                <div class="flex flex-col items-center pb-10">
                  <img
                    class="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                  />
                  <h5 class="mb-1 text-xl font-medium text-gray-900">
                    นาย ตัวอย่าง
                  </h5>
                  <span class="text-sm text-gray-500">
                    วินมอไซต์ลงทะเบียนเเล้ว
                  </span>
                  <div class="flex mt-4 md:mt-6">
                    <a
                      href="tel:0-2942-8222"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Call Sos
                    </a>
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ms-3"
                    >
                      Report
                    </a>
                  </div>
                </div>
              </div>

              <div className="fixed bottom-0 w-full">
                <Navbar />
              </div>
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
