import FAQBanner from "../../assets/faqbanner.jpg";
import { FaArrowRight } from "react-icons/fa";
export default function FAQ() {
  return (
    <div className="mx-14 mt-2 border-[1px] bg-blue-500">
      <h4 className="py-4 uppercase text-lg md:text-[21px] font-bold text-left ml-7">
        FAQ
      </h4>
      <div className="bg-[#e5e5e5] py-3">
        <div className="bg-[#cc0000] p-2 ml-8 text-white uppercase  font-normal text-md  w-40 flex gap-2 items-center">
          Velki FAQ
          <FaArrowRight />
        </div>
      </div>
      <div className="flex flex-col">
        <img className="md:p- p-4" src={FAQBanner} alt="" />
        <h3 className="text-left ml-4 md:ml-10 font-semibold text-lg text-black cursor-pointer hover:text-[#cc0000]">
          ভেল্কি প্রক্সি লিঙ্ক
        </h3>
      </div>
      <div>
        <p className="hover:underline cursor-pointer my-4  text-lg md:text-2xl font-normal text-[#cc0000] text-center">
        <a href="https://wa.me/+60183267235">ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.adhmor365.live</a>    
        </p>
        <p className="hover:underline cursor-pointer mb-8  text-lg md:text-2xl font-normal text-[#cc0000] text-center">
          {" "}
      <a href="https://wa.me/+60183267235">ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.adhmor365.live</a>    
        </p>
      </div>
    </div>
  );
}
