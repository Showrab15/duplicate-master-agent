import HeaderForm from "../components/HeaderForm/HeaderForm";
import EightTable from "../components/MasterAgent/EightTable";
import FifthTable from "../components/MasterAgent/FifthTable";
import FirstTable from "../components/MasterAgent/FirstTable";
import FourthTable from "../components/MasterAgent/FourthTable";
import MasterAgentBanner from "../components/MasterAgent/MasterAgentBanner";
import NinthTable from "../components/MasterAgent/NithTable";
import SecondTable from "../components/MasterAgent/SecondTable";
import SeventhTable from "../components/MasterAgent/SeventhTable";
import SixthTable from "../components/MasterAgent/SixthTable";
import Tenth from "../components/MasterAgent/TenthTable";
import ThirdTable from "../components/MasterAgent/ThirdTable";
// import { Helmet } from "react-helmet-async";
import { useRef, createRef, useState, useEffect } from "react";
import useAgents from "../hooks/useAgents";
import EleventhTable from "../components/MasterAgent/EleventhTable";
import TweleveTable from "../components/MasterAgent/TweleveTable";
import TitheenthTable from "../components/MasterAgent/TitheenthTable";
import FourteenthTable from "../components/MasterAgent/FourteenthTable";
import FifteenthTable from "../components/MasterAgent/FifteenthTable";
import SixteenthTable from "../components/MasterAgent/SixteenthTable";
import SeventeenthTable from "../components/MasterAgent/SeventeenthTable";
import EighteenthTable from "../components/MasterAgent/EighteenthTable";
import TwentyTable from "../components/MasterAgent/TwentyTable";

export default function MasterAgent() {
  const [agents] = useAgents();
  const [searchId, setSearchId] = useState("");

  // Create a dictionary of refs based on agent IDs
  const agentRefs = useRef({});

  const MasterAgent = agents.filter((item) => item.type === "master-agent");

  // Populate refs dictionary with agent IDs on initial load or agent updates
  useEffect(() => {
    MasterAgent.forEach((agent) => {
      if (!agentRefs.current[agent.id]) {
        agentRefs.current[agent.id] = { ref: createRef() };
      }
    });
  }, [MasterAgent]);

  const handleSearch = (id) => {
    setSearchId(id);
    const targetElement = agentRefs.current[id]?.ref.current;

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <>
    

      <h3 className="my-10 text-2xl font-semibold text-center text-black">
        এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
      </h3>

      <HeaderForm onSearch={handleSearch} />
      <div className="border-[1px] mx- md:mx-14">
        <MasterAgentBanner />
        <SeventhTable searchId={searchId} agentRefs={agentRefs} />
        <EightTable searchId={searchId} agentRefs={agentRefs} />
        <NinthTable searchId={searchId} agentRefs={agentRefs} />
        <SeventeenthTable searchId={searchId} agentRefs={agentRefs} />
        <EighteenthTable searchId={searchId} agentRefs={agentRefs} />
        <TwentyTable searchId={searchId} agentRefs={agentRefs} />
        <ThirdTable searchId={searchId} agentRefs={agentRefs}/>
        <FourthTable searchId={searchId} agentRefs={agentRefs} />
        <FifthTable searchId={searchId} agentRefs={agentRefs} />
        <SixthTable searchId={searchId} agentRefs={agentRefs} />
        <SecondTable    searchId={searchId} agentRefs={agentRefs}/>
        <FifteenthTable searchId={searchId} agentRefs={agentRefs} />
        <SixteenthTable searchId={searchId} agentRefs={agentRefs} />
        <Tenth searchId={searchId} agentRefs={agentRefs} />
        <FirstTable  searchId={searchId} agentRefs={agentRefs}/>
        <EleventhTable searchId={searchId} agentRefs={agentRefs} />
        <TweleveTable searchId={searchId} agentRefs={agentRefs} />
        <TitheenthTable searchId={searchId} agentRefs={agentRefs} />
        <FourteenthTable searchId={searchId} agentRefs={agentRefs} />
       
       
        
      </div>
    </>
  );
}







// <Helmet prioritizeSeoTags>
// <title>Get Support Fast: Use Our Velki Live Agent List</title>
// <meta
//   property="og:title"
//   content="Get Support Fast: Use Our Velki Live Agent List"
// />
// <meta
//   property="og:description"
//   content="Get support fast with our Velki Live Agent List. Connect instantly with master agents and trusted experts ready to assist you. Our comprehensive list of live agents provides quick, reliable help tailored to your needs. Find the best support for solutions and guidance anytime"
// />   <meta
// property="og:image"
// content="https://www.velkie123live.com/favicon.ico"
// />
// <meta
// property="og:image:secure_url"
// content="https://www.velkie123live.com/favicon.ico"
// />
// <meta property="og:image:type" content="image/ico" />
// <meta property="og:image:alt" content="website image" />
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="630" />
// <meta property="og:site_name" content="Velkie123live" />

// {/* <meta
//   property="og:url"
//   content="https://www.triogenexports.com/products"
// />
// <link rel="canonical" href="https://www.triogenexports.com/products" />
// <meta
//   property="og:image"
//   content="https://i.ibb.co.com/Xjw2hM1/triogenblack.png"
// /> */}
// </Helmet>