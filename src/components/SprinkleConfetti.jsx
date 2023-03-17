import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaBeer } from 'react-icons/fa';

function SprinkleBirthday() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="relative inline-block">
      <button
        className="relative px-4 py-2 font-medium text-white transition duration-300 ease-in-out transform rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 active:bg-red-800"
        onClick={handleButtonClick}
      >
        <span className="sr-only">Sprinkle Birthday</span>
        {/* <FaBeer className="absolute inset-0 m-auto text-3xl" /> */}
        <span className="z-10">Sprinkle Birthday</span>
      </button>
      <Transition
        show={showConfetti}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-0 left-0 z-50 w-full h-full">
          <div className="flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 25 }, (_, i) => (
                <div
                  key={i}
                  className={`p-1 rounded-full animate-confetti-${
                    i % 5 + 1
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default SprinkleBirthday;
