import Image from "next/image";
import home from "@/public/img/home.png";
import camera from "@/public/img/Camera.png";
import card from "@/public/img/card.png";
import menu from "@/public/img/menu.png";
import user from "@/public/img/user.jpg"
export default function Navbar() {
  return (
    <>
      <footer class="bg-white border-gray-200 h-14 flex justify-evenly  ">
        <div className="flex  items-center mt-1.5 mb-1 flex-col">
          <Image className="h-6 w-5 mb-0.5" src={home} alt="home" />
          Home
        </div>
        <div className="flex flex-col items-center mt-2 mb-1">
          <Image className="h-7 w-6" src={menu} alt="home" />
          Menu
        </div>
        
        <div className="flex flex-col items-center ml-8 mr-9">
        <div className=" absolute  bottom-5">

          <Image className="w-16  rounded-full h-16 border-2 border-green-600" src={user} alt="home" />


        </div>
        </div>

        <div className="flex flex-col items-center mt-2 mb-1">
          <Image className="h-9 w-8 " src={card} alt="home" />
          Card
        </div>
        <div className="flex flex-col items-center mt-2 mb-1">
          <Image className="h-6 w-6" src={camera} alt="home" />
          Scan
        </div>
      </footer>
    </>
  );
}
