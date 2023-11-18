"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import { useRouter, useSearchParams } from "next/navigation";
import kuonline from "@/public/img/kuonline.jpg";
import Image from "next/image";
import camphone from "@/public/img/forsendedoc/camphone.png";
import l from "@/public/img/forsendedoc/l.jpg";
import r from "@/public/img/forsendedoc/r.jpg";
import m from "@/public/img/forsendedoc/m.png";

export default function ScanPage() {
  return (
    <>
          <div className="md:w-[390px] rounded-sm bg-white">
      <nav class="bg-white border-gray-200 h-16">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                fill="#33363F"
              />
            </svg>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  Dropdown{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex  flex-col">
        <section className="w-full h-[59px] bg-gradient-to-b from-emerald-300 to-teal-50">
          <div className="w-[411px] text-center text-neutral-600 text-xl font-semibold ">
            เอกสารสำคัญทางการศึกษาแบบ online{" "}
          </div>
          <div className="w-[411px] text-center text-teal-600 text-xl font-semibold ">
            Edoc
          </div>
        </section>
        <div className="w-full h-[42px] text-center text-neutral-600 text-[10px] font-normal  mb-4 mt-3">
          มหาวิทยาลัยเกษตรศาสตร์ เปิดให้บริการยื่นขอ , รับรอง
          <br />
          และตรวจสอบเอกสารสำคัญทางการศึกษาในช่องทางออนไลน์ทั้งหมด ( Transcript )
          <br />
          และใบรับรองต่างๆ{" "}
        </div>
        <div className="flex ">
          <Image
            width={200}
            height={200}
            className="w-[150px] h-[118px] mr-10"
            src={camphone}
            alt=""
          />
          <section className="flex flex-col justify-center">
            <div className="w-[185px] h-[29px] bg-orange-400 rounded-[15px] shadow">
              <div className="w-[180.03px]  text-center text-white text-sm font-semibold items-center pt-1">
                สำหรับนิสิตไทย
              </div>
            </div>
            <div className="w-[185px] h-[29px] bg-emerald-200 rounded-[15px] shadow mt-2">
              <div className=" text-center text-gray-700 text-xs font-semibold pt-2">
                For Foreign Student Only
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="flex flex-row w-full  h-[23px] text-center text-neutral-400 text-[10px] font-normal justify-end pr-8 mt-6">
            รายการที่ต้องการเลือก
          </div>
        </section>
        <section>
          <div className=" h-[23px] text-center w-full justify-center">
            <span className="text-neutral-600 text-[10px] font-bold ">
              หมายเหตุ :
            </span>
            <span className="text-neutral-400 text-[10px] font-normal "> </span>
            <span className="text-neutral-600 text-[10px] font-normal ">
              การยื่นขอสำหรับวิทยาเขตอื่นๆ ให้ดูรายละเอียดเพิ่มเติม
            </span>
          </div>
          <div className="flex justify-center pt-3">
            <Image
              className="w-[356px] h-[91px]"
              src={kuonline}
              width={356}
              height={91}
              alt=""
            />
          </div>
        </section>
        <div className="w-full h-[23px] text-center text-neutral-600 text-[15px] font-bold font-['Poppins'] mt-5">
          ตัวอย่างเอกสาร
        </div>
        <section className="flex justify-center flex-row mt-5">
          <div className="flex justify-between">
            <Image
              className="w-[123px] h-[174px] mr-1"
              src={l}
              width={123}
              height={174}
              alt=""
            />
            <Image
              className="w-[121.19px] h-[174px] mr-1"
              src={m}
              width={121.19}
              height={174}
              alt=""
            />
            <Image
              className="w-[121.19px] h-[174px]"
              src={r}
              width={121.91}
              height={174}
              alt=""
            />
          </div>
        </section>
      </div>
      <div className="fixed bottom-0 w-full">
        <Navbar />
      </div>
      </div>
    </>
  );
}
