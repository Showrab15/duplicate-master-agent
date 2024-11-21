import customerServiceListBanner from "../../assets/800x300customerservice3.jpg";

export default function LeftBanner() {
  return (
    <>
      <div className="border-r-[1px] border-t-[1px] border-l-[1px] pt-4 bg-green-500">
        <div className="bg-[#c3c3c3]  p-4">
          <h4 className="text-sm text-left text-white font-normal uppercase">
            In The Spotlight
          </h4>
        </div>
        <div>
          {" "}
          <input
            className="cursor-pointer text-center text-sm font-normal uppercase  border-[1px] border-black
           bg-white hover:bg-[#cc0000] text-black hover:text-white px-1 m-4 "
            type="button"
            value="Agent"
          />
          <h1 className="cursor-pointer md:text-3xl text-xl text-left ml-6 text-black hover:text-[#cc0000] my-2 font-semibold">
            VELKI AGENT LIST | ভেলকি এজেন্ট লিস্ট | <br /> VELKI LIVE AGENT
            LIST BANGLADESH
          </h1>
          <h4 className="cursor-pointer my-8 text-[#cc0000] text-left ml-6 text-[16px] md:text-lg hover:underline ">
            {" "}
            <a href="https://wa.me/+60183267235">
              VELKI AGENT LIST. হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে
              যোগাযোগ বা লেনদেন করা যাবে না  <br /> এবং করলে তা গ্রহনযোগ্য হবে না. TYPE,
              NAME, ID NO, PHONE  APP LINK, PHONE 
            </a>{" "}
            
          </h4>
          <h4 className="cursor-pointer my-8 text-[#cc0000] text-center text-[16px] md:text-lg hover:underline ">
            {" "}
            <a href="https://wa.me/+60183267235">
            ভেল্কি তে কিভাবে অটো ডিপোজিট করবেন তা জানতে <br />
            আপনি এই লিঙ্ক এ ক্লিক করে দয়া করে ভিডিও টি দেখে নিন
            </a>{" "}
            
          </h4>
          <div className="bg-[#f2f2f2] hover:bg-[#f2f2f2c4] cursor-pointer  border-[1px] border-[#999999] p-2 text-center text-[12px] text-black my-10 mx-8 ">
            Read More.... ভেল্কি অটো ডিপোজিট এজেন্ট
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid lg:grid-cols-3 mt-1 gap-">
        <div className="border-[1px] border-b-0 p-4 bg-rose-500">
          <img src={customerServiceListBanner} alt="" />
          <div className="-mt-4">
            <input
              className="cursor-pointer hover:bg-[#cc0000]  text-center text-sm  font-normal uppercase border-2 border-black bg-white text-black hover:text-white px-1 "
              type="button"
              value="Agent"
            />
          </div>

          <h3 className="cursor-pointer text-[16px] text-black hover:text-[#cc0000] font-semibold my-6">
            কাস্টমার সার্ভিস লিষ্টঃ
          </h3>
          <h4 className="text-xl text-black text-center font-semibold my-6">
            VELKI CUSTOMER SERVICE LIST
          </h4>

          <div className="bg-[#f2f2f2] hover:bg-[#f2f2f2c4] cursor-pointer   mt-6 w-full border-[1px] border-[#999999]  text-center text-[12px] p-2  ">
            Read More....কাস্টমার সার্ভিস লিষ্ট
          </div>
        </div>
        <div className="border-[1px] border-b-0 p-4 bg-rose-500">
          <img src={customerServiceListBanner} alt="" />
          <div className="-mt-4">
            <input
              className="cursor-pointer hover:bg-[#cc0000]  text-center text-sm  font-normal uppercase border-2 border-black bg-white text-black hover:text-white px-1 "
              type="button"
              value="Agent"
            />
          </div>

          <h3 className="cursor-pointer text-[16px] text-black hover:text-[#cc0000] font-semibold my-6">
            মাস্টার এজেন্ট লিষ্টঃ
          </h3>
          <p className="text-[12px] text-black text-left font-bold my-6">
            এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
            **প্রতারনার হাত থেকে বাচতে
          </p>
          <div className=" bg-[#f2f2f2] hover:bg-[#f2f2f2c4] cursor-pointer   w-full border-[1px] border-[#999999]  text-center text-[12px] text-black  p-2  ">
            Read More....মাস্টার এজেন্ট লিষ্ট
          </div>
        </div>

        <div className="border-[1px]  border-b-0 p-4 bg-rose-500">
          <img src={customerServiceListBanner} alt="" />
          <div className="-mt-4">
            <input
              className="cursor-pointer hover:bg-[#cc0000] text-center text-sm  font-normal uppercase border-2 border-black bg-white text-black hover:text-white px-1 "
              type="button"
              value="Agent"
            />
          </div>

          <h3 className="cursor-pointer text-[16px] text-black hover:text-[#cc0000] font-semibold my-6">
            সুপার এজেন্ট লিষ্টঃ
          </h3>
          <p className="text-[12px] text-black text-left font-bold my-6">
            এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
            **প্রতারনার হাত থেকে বাচতে
          </p>

          <div className="bg-[#f2f2f2] hover:bg-[#f2f2f2c4] cursor-pointer  w-full border-[1px] border-[#999999]  text-center text-[12px] text-black  p-2  ">
            Read More....সুপার এজেন্ট লিষ্ট
          </div>
        </div>
      </div>
    </>
  );
}
