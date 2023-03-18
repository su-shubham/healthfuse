import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import { standocs } from "../assets";
import Testomonial from "../components/Testomonial";
import QrCode from "../components/QrCode";
import Timeline from "../components/Timeline";
import { Link, useNavigate } from "react-router-dom";
import { Popover } from "@typeform/embed-react";
import Newsletter from "../components/Newsletter";

const chatButtonClasses =
  "fixed bottom-4 right-4 w-12 h-12 bg-orange-500 rounded-full text-white flex items-center justify-center";
const chatWindowClasses =
  "fixed bottom-24 right-4 w-80 h-96 bg-white rounded-lg shadow-md";

function ChatButton({ onClick }) {
  return (
    <button className={chatButtonClasses} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 1.667C5.314 1.667 1.667 5.314 1.667 10c0 4.686 3.647 8.333 8.333 8.333 4.686 0 8.333-3.647 8.333-8.333 0-4.686-3.647-8.333-8.333-8.333zm0 15.833c-3.95 0-7.5-3.05-7.5-7.5S6.05 2.5 10 2.5c3.95 0 7.5 3.05 7.5 7.5s-3.55 7.5-7.5 7.5zm-1.667-5c0 .92-.747 1.667-1.667 1.667S5 12.92 5 12s.747-1.667 1.667-1.667S8.333 11.08 8.333 12zm3.334 0c0 .92-.747 1.667-1.667 1.667s-1.667-.747-1.667-1.667.747-1.667 1.667-1.667 1.667.747 1.667 1.667z" />
      </svg>
    </button>
  );
}

function ChatWindow() {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={chatWindowClasses}
      style={{ display: visible ? "block" : "none" }}
    >
      {/* Add chat window contents here */}
    </div>
  );
}

const Homes = () => {
  return (
    <div>
      <Header />

      <section class="">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">
          <div className="">
            <div className="flex">
              <div class=" mr-auto place-self-center lg:col-span-7 ">
                <h1 class="max-w-2xl mb-4 text-9xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-orange-500">
                  Donate funds within
                  <span className="text-orange-800"> 2 steps !</span>
                </h1>
                <span className="text-gray-500 font-light text-xl">
                  Medical Crowdfunding is the Best Way to Raise Money for
                  Medical Expenses.
                </span>
                <p class="max-w-2xl mb-6 font-light break-all lg:mb-8 md:text-md lg:text-lg text-gray-500"></p>
                <a
                  href="https://donate-medifund.netlify.app/"
                  class="text-white text-lg font-semibold bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300  rounded-full p-4 text-center mr-2 mb-2"
                >
                  Start a fundraiser !
                </a>
              </div>
              <img src={standocs} />
            </div>
            <Timeline />
            <Testomonial />
            <QrCode />
          </div>
          <Newsletter />

          <Popover
            id={"uk9FKprx"}
            chat={true}
            opacity={90}
            autoClose={5}
            lazy={true}
            buttonColor={"#FF8B13"}
            customIcon={"🗨️"}
          >
            <button className="btn">Open</button>
          </Popover>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homes;
