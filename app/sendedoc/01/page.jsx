"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Feanav from "@/app/components/feanav";
import down from "@/public/svg/down.svg";
import Link from "next/link";

export default function ScanPage() {
  return (
    <>
      <div className="md:w-[390px] rounded-sm bg-white p-4">
        <Feanav />
        <section className="mt-10">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              เอกสารขอลาเรียน
            </h5>
            <div class="mb-1 text-base font-medium text-gray-500 ">สถานะ</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
              <div
                class="bg-green-600 h-2.5 rounded-full 0"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>
          <hr class="w-48 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 " />
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Step 1
            </h5>
            <p className="font-normal text-gray-700">
              กรุณา Download เอกสาร กรอกฟอร์มเเละส่งไปในระบบ
            </p>
            <div className=" flex justify-start mt-3">
              <Link href="/sendedoc/01/form">
                <button
                  type="button"
                  class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                >
                  ส่งเอกสาร
                </button>
              </Link>
              <a
                href="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/206284168_161134366046200_420121818485335831_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=84c479&_nc_ohc=33RQMoEp0iYAX8IwU_K&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfAnoEF9IW_d50-Lpa2l2devnyK7wvxa17UDi60cmuTzYg&oe=65805743"
                download
              >
                <button
                  type="button"
                  class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200  "
                >
                  โหลด
                </button>
              </a>
            </div>
          </div>
          {/* --------- */}
          <div className="flex w-full justify-center items-center mt-3 mb-3 ">
            <Image width={30} height={30} src={down} alt="" className="" />
          </div>
          {/* ---------------- */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Step 2
            </h5>
            <p className="font-normal text-gray-700">รออาจารย์ตอบกลับ</p>
            <div className=" flex justify-start mt-3">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200  "
              >
                สถานะ :{" "}
                <span className=" text-yellow-600">ยังไม่ได้ส่งอีเมล</span>
              </button>
            </div>
          </div>
          {/* --------- */}
          <div className="flex w-full justify-center items-center mt-3 mb-3 ">
            <Image width={30} height={30} src={down} alt="" className="" />
          </div>
          {/* ---------------- */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Step 3
            </h5>
            <p className="font-normal text-gray-700">ส่งเอกสารกลับให้คุณ</p>
            <div className=" flex justify-start mt-3">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200  "
              >
                สถานะ :{" "}
                <span className=" text-yellow-600">ยังไม่ได้รับอีเมล</span>
              </button>
            </div>
          </div>
        </section>
        <div className="h-16"></div>
        <div className="fixed bottom-0 w-full">
          <Navbar />
        </div>
      </div>
    </>
  );
}