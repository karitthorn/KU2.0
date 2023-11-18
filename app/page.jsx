import Navbar from "@/app/components/navbar";
import Image from "next/image";
import book from "@/public/img/homepage/book.png";
import Qmenu from "@/app/components/qmenu";

export default function Home() {
  return (
    <>
      <div className="md:w-[390px] rounded-sm bg-white">
        {/* Welcome */}
        <section className="w-full h-32 bg-emerald-500 rounded-br-3xl rounded-bl-3xl p-4  justify-between ">
          <div>
            <h1 className=" text-white text-2xl font-bold w-full">
              Hello, Plus <br />
              <span className=" text-lg">📌Kasetsart University</span>
            </h1>
          </div>
        </section>
        {/* cate */}
        <Qmenu />
        {/* news */}
        <section className="flex p-4 flex-col ">
          <h1 className="text-slate-900 text-xl font-bold  mb-4">KU News</h1>
          <div className="flex flex-row overflow-x-scroll">
            <img
              className="w-[358px] h-[166px] rounded-[30px] mr-2"
              src="https://via.placeholder.com/358x166"
            />
            <img
              className="w-[358px] h-[166px] rounded-[30px]"
              src="https://via.placeholder.com/358x166"
            />
          </div>
        </section>
        <div className="fixed bottom-0 w-full">
          <Navbar />
        </div>
      </div>
    </>
  );
}
