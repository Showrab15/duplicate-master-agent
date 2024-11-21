import  {FaInstagram}  from "react-icons/fa";
import  {FaLinkedin}  from "react-icons/fa";
import  {FaYoutube}  from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>

            {/* useful links */}

           
          
            <div className=" py-5 mt-8 border-y-0 text-center">
            <hr className="my-2 border-blue-200" />
            <p className="mt-4 md:text-lg text-base font-medium ">
              &copy; Copyright 2024{" "}
              © 2024 Velki Agent List


            </p>
         
          </div>
            
              {/* social icon */}
              <ul className="flex gap-5 mt-3 justify-center mx-auto">
        <li className="cursor-pointer rounded-full p-2 bg-green-500 text-white hover:bg-white hover:text-black">
          <a
            href="https://www.facebook.com"
            aria-label="Read more about Triogen Export on Facebook"
          >
            {" "}
            <FaFacebook className="text-2xl  " />
          </a>
        </li>
        <li  className="cursor-pointer rounded-full p-2 bg-green-500 text-white hover:bg-white hover:text-black">
          <a
            href="https://www.instagram.com"
            aria-label="Read more about Triogen Export on Instagram"
          >
            {" "}
            <FaInstagram className="text-2xl " />
          </a>
        </li>
        <li  className="cursor-pointer rounded-full p-2 bg-green-500 text-white hover:bg-white hover:text-black">
          <a
            href="https://www.linkedin.com"
            aria-label="Read more about Triogen Export on LinkdIn"
          >
            <FaLinkedin className="text-2xl " />
          </a>
        </li>
        <li  className="cursor-pointer rounded-full p-2 bg-green-500 text-white hover:bg-white hover:text-black">
          <a
            href="https://www.youtube.com"
            aria-label="Read more about Triogen Export on Youtube"
          >
            {" "}
            <FaYoutube className="text-2xl " />
          </a>
        </li>
      </ul>


          {/* bottom */}
          <div className=" py-5 border-y-0 text-center">
            <hr className="my-2 border-blue-200" />
            <p className="mt-4  md:text-lg text-base font-medium">
              &copy; Copyright 2024{" "}
               2024 Velki Agent List | ভেলকি এজেন্ট লিস্ট | Velki Agent List Bangladesh
            </p>
         
          </div>

    </footer>
  );
};

export default Footer;
