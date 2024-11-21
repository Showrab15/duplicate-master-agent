import BannerLayout from "../Layout/BannerLayout";
import RandomMasterAgent from "../components/RandomMasterAgent/RandomMasterAgent";
import FAQ from "../components/FAQ/FAQ";
import FAQList from "../components/FAQ/FAQList";

export default function Home() {
  return (
    <div className="overflow-hidden">
      
          
      {/* <Helmet prioritizeSeoTags>
      

        <title>
          VELKI AGENT LIST | ভেলকি এজেন্ট লিস্ট | VELKI LIVE AGENT LIST
          BANGLADESH
        </title>
        <meta
          property="og:title"
          content="Updated Velki Live Agent List: Find Your Support Now"
        />
        <meta
          property="og:description"
          content="Discover the complete Velki Live Agent List to connect with expert, caring agents ready to assist you. Find top-rated support quickly and easily –4 your reliable guide to trusted live agents for fast solutions and guidance tailored to your needs"
        />
        <meta
          property="og:image"
          content="https://www.velkie123live.com/favicon.ico"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.velkie123live.com/favicon.ico"
        />
        <meta property="og:image:type" content="image/ico" />
        <meta property="og:image:alt" content="website image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Velkie123live" />
      </Helmet> */}

      <BannerLayout />
      
      <RandomMasterAgent />
      <FAQ />
      <FAQList />
    </div>
  );
}
