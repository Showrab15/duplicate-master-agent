import LeftBanner from "../components/Banner/LeftBanner";
import RightBanner from "../components/Banner/RightBanner";

export default function BannerLayout() {
  return (
    <div className="grid lg:grid-cols-6 border-[1px] mt-8 lg:mx-14">
      {/* Left Banner (60% width) */}
      <div className="lg:col-span-2 w-full" >
      <RightBanner />
       
      </div>
      
      {/* Right Banner (40% width) */}
      <div  className="lg:col-span-4 w-full" >
        <LeftBanner />
      </div>
    </div>
  );
}
