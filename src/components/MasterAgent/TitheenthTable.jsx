/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



import { FaWhatsapp } from "react-icons/fa";
import { useState, useRef, useContext } from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import useAgents from "../../hooks/useAgents";

export default function TitheenthTable({ agentRefs, searchId }) {

  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [agents, setAgents, loading] = useAgents(); // Get setAgents

  const MasterAgent = agents.filter((item) => item.type === "master-agent");

  const toggleEditMode = () => {
    setEditMode(!editMode); // Toggle edit mode
  };

  const handleInputChange = (id, field, value) => {
    const updatedAgents = agents.map((agent) =>
      agent.id === id ? { ...agent, [field]: value } : agent
    );
    setAgents(updatedAgents); // Update state for agents
  };

  const saveChanges = async () => {
    setEditMode(false); // Exit edit mode

    try {
      // Loop through agents and send update requests for each modified agent
      const updatedAgents = agents.map(async (agent) => {
        const { _id, ...agentWithoutId } = agent;

        const response = await fetch(
          `https://velkii-server.vercel.app/master-agents/${agent.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(agentWithoutId), // Send updated agent data without _id
          }
        );

        if (!response.ok) {
          console.error(`Failed to update agent ${agent.id}`);
        }
        return response.json();
      });

      await Promise.all(updatedAgents);

      const response = await fetch("https://velkii-server.vercel.app/master-agents");
      const newAgents = await response.json();
      setAgents(newAgents); // Update state with new data

      console.log("Updated agent data successfully:", newAgents);
    } catch (error) {
      console.error("Error updating agents:", error);
    }
  };

  return (
    <div>
      <h4 className="mt-4 mb-2 text-[21px] md:text-[21px] font-extrabold text-center text-black">
        সাব এডমিন 13 এর অধীনে সুপার এজেন্ট 218 এর অধীনে সর্বমোট মাস্টার এজেন্ট
        আছে 10 জন{" "}
      </h4>

     

      <div className="p-4 flex flex-col justify-center items-center">
        <div className="w-full md:w-auto">
          <table className="table-fixed border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-xs sm:text-sm md:text-base w-[14%]">
                  ID NO
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-xs sm:text-sm md:text-base w-[17%]">
                  AGENT
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-center text-xs sm:text-sm md:text-base w-[10%]">
                  APP
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-xs sm:text-sm md:text-base w-[35%]">
                  PHONE NUMBER
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3]  text-xs sm:text-sm md:text-base w-[24%]">
                  COMPLAIN
                </th>
              </tr>
            </thead>
            <tbody>
              {MasterAgent.slice(211, 221).map((agent, rowIndex) => (
                <tr
                key={agent.id}
                ref={agentRefs.current[agent.id]?.ref} // Assign ref from the dictionary
                className={`text-center h-2 ${
                  rowIndex % 2 === 0 ? "bg-[#efefef]" : "bg-[#fff6f3]"
                } ${searchId === agent.id.toString() ? "bg-yellow-300" : ""}`}
                >
                  <td className="border border-gray-300 px-2 py-2 text-[12px] md:text-xl font-extrabold">
                    {agent.id}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-[12px] md:text-xl font-extrabold">
                    {agent.agent}
                  </td>

                  {/* Editable APP (WhatsApp link) Field */}
                  <td className="border border-gray-300 px-2 py-2 text-[12px] md:text-xl font-extrabold">
                    {editMode ? (
                      <input
                        type="text"
                        value={agent.link}
                        onChange={(e) =>
                          handleInputChange(agent.id, "link", e.target.value)
                        }
                        className="w-full border border-gray-400 px-2 py-1 text-xs"
                      />
                    ) : (
                      <a
                        href={agent.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        <FaWhatsapp className="text-[#23b466] text-xl md:text-2xl mx-auto" />
                      </a>
                    )}
                  </td>

                  {/* Editable Phone Number Field */}
                  <td className="border border-gray-300 px-2 py-2 text-[12px] md:text-xl font-extrabold">
                    {editMode ? (
                      <input
                        type="text"
                        value={agent.phone}
                        onChange={(e) =>
                          handleInputChange(agent.id, "phone", e.target.value)
                        }
                        className="w-full border border-gray-400 px-2 py-1 text-xs"
                      />
                    ) : (
                      <a
                        href={agent.link}
                        className="text-[#cc0000] text-[12px] md:text-xl font-extrabold"
                      >
                        {agent.phone}
                      </a>
                    )}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-[#cc0000]  text-[12px] md:text-xl font-extrabold">
                    <a
                      href={agent.link}
                      className="text-[#cc0000] md:text-xl font-extrabold text-[12px]"
                    >
                      {agent.complain}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
