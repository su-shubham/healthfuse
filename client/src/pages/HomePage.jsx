import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import { standocs } from "../assets";
import Testomonial from "../components/Testomonial";
import QrCode from "../components/QrCode";
import SprinkleConfetti from '../components/SprinkleConfetti'

const Homes = () => {
  return (
    <div>
      <Header />

      <section class="">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">
          <div className="">
            <div className="flex">
              <div class=" mr-auto place-self-center lg:col-span-7 ">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-orange-500">
                  Book your appointments in{" "}
                  <span className="text-orange-800">3 Steps ! </span>
                </h1>
                <p class="max-w-2xl mb-6 font-light  lg:mb-8 md:text-md lg:text-lg text-gray-400">
                  Book an appointments by login and pointing towards dashboard |
                  Head towards services to see according to your preferences.
                </p>
                <div className="w-full">
                  <Input />
                </div>
              </div>
              <img src={standocs} />
              <div className=""></div>
            </div>
            <QrCode />
            <Testomonial />
            <SprinkleConfetti />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homes;
