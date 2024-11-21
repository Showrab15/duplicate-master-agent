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

 const useAgents = () => {
   const [agents, setAgents] = useState([]);
   const [loading, setLoading] = useState(true);
 
   // Fetch the agents from the backend
   useEffect(() => {
     const fetchAgents = async () => {
       try {
         const response = await fetch("https://velkii-server.vercel.app/velkix24-master-agents");
         const data = await response.json();
         setAgents(data);
         setLoading(false);
       } catch (error) {
         console.error('Error fetching agents:', error);
       }
     };
 
     fetchAgents();
   }, []); // Fetches data once when the component is mounted
 
   return [agents, setAgents, loading];
 };
 
 export default useAgents;
 
