import {FaBars} from 'react-icons/fa' 
import {Link} from 'react-router-dom'

import subadminbanner from "../../assets/subadminbanner.jpg";
import rightBannerBottom from "../../assets/rightbannerbottom.jpg";
export default function RightBanner() {
  return (
    <div className="border-r-[1px] border-t-[1px] border-l-[1px] pt-4 bg-orange-400">
      <div className="bg-[#f2f2f2] p-4 text-center">
        <h4 className="text-[14px] text-center text-black font-bold uppercase flex items-center justify-center gap-2">
          {" "}
         <FaBars />
 More News<FaBars />

        </h4>
      </div>

      <div>
        <div className="border-b-2 p-4 flex-col items-center justify-between">
          <div className=" lg:ml-0 ml-6 flex gap-4 items-start">
            <div>
              <img className="w-[80px] h-[30px]" src={subadminbanner} alt="" />
            </div>

            <div>
              <div className="flex gap-2">
              <input
                  className="cursor-pointer text-center text-sm font-normal uppercase  border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "

                  type="button"
                  value="Agent"
                />
                <p className="text-[11px] text-green-600 font-semibold uppercase" >02 January 2024</p>
              </div>
              <h4 className="py-2  text-sm cursor-pointer font-semibold  text-black hover:text-[#cc0000]">
               <Link to="/sub-admin"> সাব এডমিন লিষ্টঃ</Link>
              </h4>
            </div>
          </div>
        </div>

        <div className="border-b-2 p-4 flex-col items-center justify-between">
          <div className=" lg:ml-0  ml-6 flex gap-4 items-start">
            <div>
              <img className="w-[80px] h-[30px]" src={subadminbanner} alt="" />
            </div>

            <div>
              <div className="flex gap-2">
              <input
                  className="cursor-pointer text-center text-sm font-normal uppercase  border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "
                    value="Agent"

                  type="button"
                  />
                <p className="text-[11px] text-green-600 font-semibold uppercase" >02 January 2024</p>
              </div>
              <h4 className="py-2  text-sm cursor-pointer font-semibold  text-black hover:text-[#cc0000]">
                এজেন্ট কয় প্রকারঃ
              </h4>
            </div>
          </div>
        </div>

        <div className="border-b-2 p-4 flex-col items-center justify-between">
          <div className=" lg:ml-0 ml-6 flex gap-4 items-start">
            <div>
              <img className="w-[80px] h-[30px]" src={subadminbanner} alt="" />
            </div>

            <div>
              <div className="flex gap-2">
              <input
                  className="cursor-pointer text-center text-sm font-normal uppercase  border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "
value="Agent"
                    type="button"
                    />
                  <p className="text-[11px] text-green-600 font-semibold uppercase" >02 January 2024</p>
              </div>
              <h4 className="py-2  text-sm cursor-pointer font-semibold  text-black hover:text-[#cc0000]">
                এজেন্ট লিস্টঃ
              </h4>
            </div>
          </div>
        </div>

        <div className="border-b-2 p-4 flex-col items-center justify-between">
          <div className="  lg:ml-0 ml-6 flex gap-4 items-start">
            <div>
              <img className="w-[80px] h-[30px]" src={subadminbanner} alt="" />
            </div>

            <div>
              <div className="flex gap-2">
                <input
                  className="cursor-pointer text-center text-sm font-normal uppercase border-[1px]
                   border-black bg-white hover:bg-[#cc0000] text-black hover:text-white
                    px-1 "

                  type="button"
                  value="agent"
                  />
                <p className="text-[11px] text-green-600 font-semibold uppercase" >02 January 2024</p>
              </div>
              <h4 className="py-2  text-sm cursor-pointer font-semibold  text-black hover:text-[#cc0000]">
               <Link to="/site-admin"> সাইট এডমিন লিষ্ট :</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div >
        <img className="mx-auto  p-3" src={rightBannerBottom} alt="" />
      </div>
    </div>
  );
}
