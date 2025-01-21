import Image from "next/image";
import { AiFillTwitterSquare } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import logo from "../../../../public/images/Brand-logo.svg";
import Container from "../Container";
const Footer = () => {
  return (
    <>
      <div className="py-14 px-4 bg-slate-950 w-full">
        <Container>
          <div className="px-4">
            <div className="mb-28 text-center">
              <p className="bodyMedium font-syne text-brandOrange-light mb-6">
                Get in Touch With Us
              </p>
              <h3 className="font-syne underline">info@aaronn.com</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between border-b-2 border-slate-300 pb-10 mb-5">
              <Image src={logo} width={125} height={22} alt="brand logo" />
              <ul className="flex flex-col">
                <li>Street Avenue 21, CA</li>
                <li>0-8-00-888-000</li>
              </ul>
              <div className="flex flex-col">
                <span>+9 0283353</span>
                <ul className="flex ">
                  <li>
                    <IoLogoFacebook />
                  </li>
                  <li>
                    <AiFillTwitterSquare />
                  </li>
                  <li>
                    <CiInstagram />
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <p className="bodyMedium font-syne text-center">
                © 2023. Ideapeel. All rights reserved.{" "}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
