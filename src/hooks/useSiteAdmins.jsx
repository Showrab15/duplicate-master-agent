// import  { useState, useEffect } from 'react';

// const useAgents =()=>{

//     const [agents, setAgents] = useState([]);
//     const [loading, setLoading]= useState(true)

//   useEffect(() => {
//     fetch("agents.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setAgents(data)
//         setLoading(false)
//       });
//   }, []); // Dependency array should be empty to avoid infinite re-renders
//   return[agents,loading]
// }

// export default useAgents


import  { useState, useEffect } from 'react';

const useSiteAdmins = () => {
  const [siteAdmins, setSiteAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the siteAdmins from the backend
  useEffect(() => {
    const fetchSiteAdmins = async () => {
      try {
        const response = await fetch("https://velkii-server.vercel.app/site-admins");
        const data = await response.json();
        setSiteAdmins(data);
        setLoading(false);
        console.log(siteAdmins)
      } catch (error) {
        console.error('Error fetching siteAdmins:', error);
      }
    };

    fetchSiteAdmins();
  }, []); // Fetches data once when the component is mounted

  return [siteAdmins, setSiteAdmins, loading];
};

export default useSiteAdmins;

