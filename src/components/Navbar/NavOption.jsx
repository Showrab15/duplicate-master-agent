import { useState } from "react";

export default function NavOption() {
  const [activeTab, setActiveTab] = useState("ভেল্কি"); // Default active tab
  const [dropdownVisible, setDropdownVisible] = useState(null); // Manage dropdown visibility for multiple dropdowns

  const tabs = [
    { label: "ভেল্কি অটো ডিপোজিট এজেন্ট" },
    { label: "হোম পেইজ", link: "/" }, // Added link to হোম পেইজ
    { label: "সাধারণ প্রশ্ন উত্তর" },
    { label: "এজেন্ট লিস্ট" }
  ];

  const agentOptions = [
    { label: "এজেন্ট কে ভেরিফাই করুন" },
    { label: "মাস্টার এজেন্ট লিস্ট", link: "/master-agent" },
    { label: "সুপার এজেন্ট লিস্ট", link: "/super-agent" },
    { label: "সাব এডমিন লিস্ট", link: "/sub-admin" },
    { label: "সাইট এডমিন লিস্ট" , link: "/site-admin"},
    { label: "ভেল্কি এজেন্ট লিস্ট" , link: "/velki-agent-list"},

    { label: "কাস্টমার সার্ভিস লিস্ট" },
  ];

  const generalQOptions = [
    { label: "ভেল্কি প্রক্সি লিংক" },
    { label: "ভেল্কিতে একাউন্ট খুলবেন?" },
    { label: "এজেন্ট এর নতুন নাম্বার" },
    { label: "ফোন নাম্বার সার্চ করুন" },
  ];

  return (
    <div className="md:block hidden">
      <div className="border-2 flex items-center justify-between py-2 relative w-full bg-rose-500">
        {/* Tabs with Dividers */}
        <div className="flex items-center px-14">
          {tabs.map((tab, index) => (
            <div key={tab.label} className=" flex items-center relative">
              {/* Conditionally render link for "হোম পেইজ" */}
              {tab.link ? (
                <a
                  href={tab.link}
                  className={`cursor-pointer px-8 py-2 text-black font-semibold transition-colors duration-200 ${
                    activeTab === tab.label ? "bg-black text-white" : "hover:bg-yellow-600 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.label}
                </a>
              ) : (
                <span
                  onClick={() => setActiveTab(tab.label)}
                  onMouseEnter={() => {
                    if (tab.label === "এজেন্ট লিস্ট") setDropdownVisible("এজেন্ট লিস্ট");
                    if (tab.label === "সাধারণ প্রশ্ন উত্তর") setDropdownVisible("সাধারণ প্রশ্ন উত্তর");
                  }}
                  onMouseLeave={() => {
                    if (tab.label === "এজেন্ট লিস্ট") setDropdownVisible("এজেন্ট লিস্ট");
                    if (tab.label === "সাধারণ প্রশ্ন উত্তর") setDropdownVisible("সাধারণ প্রশ্ন উত্তর");
                  }}
                  className={`px-8 py-2 text-black font-semibold cursor-pointer transition-colors duration-200 ${
                    activeTab === tab.label
                      ? "bg-black text-white" // Active tab styles
                      : "hover:bg-yellow-600 hover:text-white" // Inactive tab styles
                  }`}
                >
                  {tab.label}
                </span>
              )}

              {/* Dropdown for "এজেন্ট লিস্ট" */}
              {tab.label === "এজেন্ট লিস্ট" && dropdownVisible === "এজেন্ট লিস্ট" && (
                <div
                  onMouseEnter={() => setDropdownVisible("এজেন্ট লিস্ট")}
                  onMouseLeave={() => setDropdownVisible(null)}
                  className="text-md w-48 absolute top-full left-0 mt-2 bg-white shadow-lg z-10"
                >
                  {agentOptions.map((option, idx) => (
                    <a
                      key={idx}
                      href={option.link || "#"} // Only add href if a link exists
                      className={`block px-4 py-2 text-black hover:bg-yellow-600 hover:text-white ${
                        option.link ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Dropdown for "সাধারণ প্রশ্ন উত্তর" */}
              {tab.label === "সাধারণ প্রশ্ন উত্তর" && dropdownVisible === "সাধারণ প্রশ্ন উত্তর" && (
                <div
                  onMouseEnter={() => setDropdownVisible("সাধারণ প্রশ্ন উত্তর")}
                  onMouseLeave={() => setDropdownVisible(null)}
                  className="text-md w-48 absolute top-full left-0 mt-2 bg-white shadow-lg z-10"
                >
                  {generalQOptions.map((option, idx) => (
                    <a
                      key={idx}
                      href={option.link || "#"} // Only add href if a link exists
                      className={`block px-4 py-2 text-black hover:bg-yellow-600 hover:text-white ${
                        option.link ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}

              {index < tabs.length - 1 && (
                <div className="h-6 w-px bg-gray-300 opacity-50 mx-2" /> // Vertical Divider
              )}
            </div>
          ))}
          {/* Additional Divider after the last tab */}
          <div className="h-6 w-px bg-gray-300 opacity-50 mx-2" />
        </div>
      </div>
    </div>
  );
}
