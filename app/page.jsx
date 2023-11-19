"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import book from "@/public/img/homepage/book.png";
import Qmenu from "@/app/components/qmenu";
import takky from "@/public/img/takky.jpg";

export default function Home() {
  const [imageUrls, setImageUrls] = useState([
    "https://via.placeholder.com/358x166",
    "https://via.placeholder.com/358x166",
    "https://via.placeholder.com/358x166",
  ]);

  async function getData() {
    try {
      const response = await fetch(
        `https://api-c3vk.onrender.com/news?input_text=econ%2C1`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data[0].image != null) {
        console.log(data[0].image);
        setImageUrls([data[0].image]);
      } else {
      }

      return data;
    } catch (error) {
      console.error("An error occurred while fetching the data:", error);
      return null;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="md:w-[390px] rounded-sm bg-white">
        {/* Welcome */}
        <section className="w-full h-24 bg-emerald-200 rounded-br-3xl rounded-bl-3xl p-4  justify-between mb-7 relative z-0 flex">
          <div>
            <div className="absolute inset-y-0 left-0  bottom-2  z-10 bg-gradient-to-r from-emerald-600 to-emerald-400 w-full rounded-br-3xl rounded-bl-3xl ">
              <div className=" flex w-full justify-between">
                <div className="flex">

                <div class="rounded-full h-10 w-16 bg-gradient-to-r from-teal-400 to-yellow-200 min-h-fit min-w-fit mt-5 ml-3"></div>

                  <h1 className="  text-white text-xl font-bold w-full mt-5 ml-2 leading-4 ">
                    Hello!
                    <br />
                    <span className=" text-lg text-gray-100">ตัวอย่าง</span>
                  </h1>
                </div>
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="80px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.75005 4.75C9.33584 4.75 9.00005 5.08579 9.00005 5.5C9.00005 5.91421 9.33584 6.25 9.75005 6.25V4.75ZM12.6751 6.25C13.0893 6.25 13.4251 5.91421 13.4251 5.5C13.4251 5.08579 13.0893 4.75 12.6751 4.75V6.25ZM9.48794 17.0191C9.48249 16.605 9.14232 16.2736 8.72814 16.2791C8.31396 16.2845 7.98262 16.6247 7.98807 17.0389L9.48794 17.0191ZM11.2126 19.5L11.2228 18.7501C11.216 18.75 11.2092 18.75 11.2023 18.7501L11.2126 19.5ZM14.437 17.0389C14.4425 16.6247 14.1111 16.2845 13.697 16.2791C13.2828 16.2736 12.9426 16.605 12.9372 17.0191L14.437 17.0389ZM8.73703 17.779C9.15124 17.779 9.48703 17.4432 9.48703 17.029C9.48703 16.6148 9.15124 16.279 8.73703 16.279V17.779ZM7.63723 17.029L7.631 17.779H7.63723V17.029ZM5.85005 15.168L6.60005 15.1732V15.168H5.85005ZM6.57058 12.676L5.82897 12.5641L5.82888 12.5647L6.57058 12.676ZM6.76558 11.276L7.50406 11.4069C7.50578 11.3972 7.50731 11.3875 7.50865 11.3777L6.76558 11.276ZM11.2126 7.147L11.2433 6.39763C11.2228 6.39679 11.2022 6.39679 11.1817 6.39763L11.2126 7.147ZM15.6595 11.273L14.9165 11.3751C14.9177 11.3836 14.919 11.392 14.9204 11.4004L15.6595 11.273ZM15.8545 12.673L16.5962 12.5617L16.596 12.5605L15.8545 12.673ZM16.5751 15.165L15.825 15.165L15.8251 15.1706L16.5751 15.165ZM14.7879 17.027L14.7879 17.777L14.7941 17.777L14.7879 17.027ZM13.6871 16.277C13.2729 16.277 12.9371 16.6128 12.9371 17.027C12.9371 17.4412 13.2729 17.777 13.6871 17.777V16.277ZM8.73703 16.277C8.32281 16.277 7.98703 16.6128 7.98703 17.027C7.98703 17.4412 8.32281 17.777 8.73703 17.777V16.277ZM13.6871 17.777C14.1013 17.777 14.4371 17.4412 14.4371 17.027C14.4371 16.6128 14.1013 16.277 13.6871 16.277V17.777ZM9.75005 6.25H12.6751V4.75H9.75005V6.25ZM7.98807 17.0389C8.01146 18.8183 9.4421 20.2742 11.2228 20.2499L11.2023 18.7501C10.2859 18.7625 9.50091 18.006 9.48794 17.0191L7.98807 17.0389ZM11.2023 20.2499C12.983 20.2742 14.4136 18.8183 14.437 17.0389L12.9372 17.0191C12.9242 18.006 12.1392 18.7625 11.2228 18.7501L11.2023 20.2499ZM8.73703 16.279H7.63723V17.779H8.73703V16.279ZM7.64345 16.279C7.08063 16.2744 6.59573 15.7972 6.60003 15.1732L5.10007 15.1628C5.09031 16.5785 6.20512 17.7671 7.631 17.779L7.64345 16.279ZM6.60005 15.168C6.60005 14.891 6.69326 14.6047 6.85708 14.1992C7.00452 13.8342 7.23096 13.3291 7.31227 12.7873L5.82888 12.5647C5.78052 12.8869 5.6467 13.1908 5.46629 13.6373C5.30227 14.0433 5.10005 14.571 5.10005 15.168H6.60005ZM7.31219 12.7879C7.40448 12.1759 7.4489 11.7181 7.50406 11.4069L6.02709 11.1451C5.97305 11.4499 5.90047 12.0901 5.82897 12.5641L7.31219 12.7879ZM7.50865 11.3777C7.77569 9.42625 9.35923 7.97389 11.2434 7.89637L11.1817 6.39763C8.54483 6.50613 6.38434 8.53009 6.0225 11.1743L7.50865 11.3777ZM11.1818 7.89637C13.0651 7.97369 14.6484 9.42473 14.9165 11.3751L16.4025 11.1709C16.0392 8.52798 13.8791 6.50584 11.2433 6.39763L11.1818 7.89637ZM14.9204 11.4004C14.9759 11.7223 15.0202 12.1736 15.113 12.7855L16.596 12.5605C16.525 12.0924 16.4504 11.4457 16.3986 11.1456L14.9204 11.4004ZM15.1128 12.7843C15.1941 13.3261 15.4206 13.8312 15.568 14.1962C15.7318 14.6017 15.8251 14.888 15.8251 15.165H17.3251C17.3251 14.568 17.1228 14.0403 16.9588 13.6343C16.7784 13.1878 16.6446 12.8839 16.5962 12.5617L15.1128 12.7843ZM15.8251 15.1706C15.8297 15.7949 15.3447 16.2724 14.7817 16.277L14.7941 17.777C16.2205 17.7651 17.3355 16.5756 17.325 15.1594L15.8251 15.1706ZM14.7879 16.277H13.6871V17.777H14.7879V16.277ZM8.73703 17.777H13.6871V16.277H8.73703V17.777Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* cate */}
        <Qmenu />
        {/* news */}
        <section className="flex p-4 flex-col ">
          <div className="flex justify-between">
            <h1 className="text-slate-900 text-xl font-bold  mb-4">KU News</h1>
            <div class="text-right text-blue-500 text-xs font-normal mt-2">
              Show all
            </div>
          </div>
          <div className="flex flex-row overflow-x-scroll">
            {imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                className="w-[358px] h-[166px] rounded-[30px] mr-2 shadow-lg"
                src={imageUrl}
                alt=""
                width={358}
                height={166}
              />
            ))}
          </div>
        </section>
        <div className="h-10"></div>
        <div className="fixed bottom-0 w-full">
          <Navbar />
        </div>
      </div>
    </>
  );
}
