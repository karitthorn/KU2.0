import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen  bg-black">
        <div className="w-96 h-96">

        </div>
        <div className="sticky bottom-0  ">
          <Navbar />
        </div>
      </div>
    </>
  );
}
