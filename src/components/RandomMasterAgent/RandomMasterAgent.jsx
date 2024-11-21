import masterAgentBanner from "../../assets/800x300randommasteragent.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function RandomMasterAgent() {
  return (
    <div className="border-[1px] mx-14 mt-4 bg-pink-800">
      <h4 className="py-4 uppercase text-lg md:text-[21px] font-bold text-left ml-6">
        Random Master Agent
      </h4>
      <div className="bg-[#e5e5e5] py-3 ">
        <div className="bg-green-700 p-2 ml-8 text-white uppercase  font-normal text-md  w-40 flex gap-2 items-center">
          Master Agent <FaArrowRight />
        </div>
      </div>
      <div className="grid md:grid-cols-4   mx-4">
        <div className="border-[1px] border-t-0 border-l-0 p-4 mt-2">
          <img src={masterAgentBanner} alt="" />
          <div className="-mt-4">
            <input
              className="cursor-pointer text-center text-sm font-normal uppercase  border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "
              type="button"
              value="Master Agent"
            />
          </div>

          <h3 className="text-lg text-black hover:text-[#cc0000] cursor-pointer font-semibold mt-4">
            মাষ্টার এজেন্ট এর তথ্য ১
          </h3>
          <p className="text-[11px] text-[#999999] text-left font-semibold mt-1 mb-4 uppercase">
            <span className="uppercase font-bold text-[#999999]  pr-2">
              Administrator
            </span>{" "}
            02 January 2024
          </p>
          <p className="font-semibold flex-col flex  text-sm md:text-[15px] text-center">
            মাষ্টার এজেন্ট আইডিঃ 1401 হোয়াটসঅ্যাপ নাম্বারঃ{" "}
            <span className="text-[#cc0000] mt-2 cursor-pointer">
              +855966690526
            </span>
          </p>
        </div>

        <div className="border-[1px] border-t-0 border-l p-4  mt-2">
          <img src={masterAgentBanner} alt="" />
          <div className="-mt-4">
            <input
              className="cursor-pointer text-center text-sm font-normal uppercase border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "
              type="button"
              value="Master Agent"
            />
          </div>

          <h3 className="text-lg text-black hover:text-[#cc0000] cursor-pointer font-semibold mt-4">
            মাষ্টার এজেন্ট এর তথ্য ২
          </h3>
          <p className="text-[11px] text-[#999999] text-left font-semibold mt-1 mb-4 uppercase">
            <span className="uppercase font-bold text-[#999999]  pr-2">
              Administrator
            </span>{" "}
            02 January 2024
          </p>
          <p className="font-semibold flex flex-col text-sm md:text-[15px] text-center">
            মাষ্টার এজেন্ট আইডিঃ 1401 হোয়াটসঅ্যাপ নাম্বারঃ{" "}
            <span className="text-[#cc0000] mt-2 cursor-pointer">
              +855966690526
            </span>
          </p>
        </div>

        <div className="border-[1px] border-t-0 border-l p-4  mt-2">
          <img src={masterAgentBanner} alt="" />
          <div className="-mt-4">
            <input
              className="cursor-pointer text-center text-sm font-normal uppercase border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "
              type="button"
              value="Master Agent"
            />
          </div>

          <h3 className="text-lg text-black hover:text-[#cc0000] cursor-pointer font-semibold mt-4">
            মাষ্টার এজেন্ট এর তথ্য ৩
          </h3>
          <p className="text-[11px] text-[#999999] text-left font-semibold mt-1 mb-4 uppercase">
            <span className="uppercase font-bold text-[#999999]  pr-2">
              Administrator
            </span>{" "}
            02 January 2024
          </p>
          <p className="font-semibold flex-col flex text-sm md:text-[15px] text-center">
            মাষ্টার এজেন্ট আইডিঃ 1401 হোয়াটসঅ্যাপ নাম্বারঃ{" "}
            <span className="text-[#cc0000] mt-2 cursor-pointer">
              +855966690526
            </span>
          </p>
        </div>

        <div className="border-[1px] border-t-0 border-l p-4  mt-2">
          <img src={masterAgentBanner} alt="" />
          <div className="-mt-4">
            <input
              className="cursor-pointer text-center text-sm font-normal uppercase border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "
              type="button"
              value="Master Agent"
            />
          </div>

          <h3 className="text-md text-black hover:text-[#cc0000] cursor-pointer font-semibold mt-4">
            মাষ্টার এজেন্ট এর তথ্য ৪{" "}
          </h3>
          <p className="text-[11px] text-[#999999] text-left font-semibold mt-1 mb-4 uppercase">
            <span className="uppercase font-bold text-[#999999]  pr-2">
              Administrator
            </span>{" "} 
            02 January 2024
          </p>
          <p className="font-semibold flex flex-col text-sm md:text-[15px] text-center">
            মাষ্টার এজেন্ট আইডিঃ 1401 হোয়াটসঅ্যাপ নাম্বারঃ{" "}
            <span className="text-[#cc0000] mt-2 cursor-pointer">
              +855966690526
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
