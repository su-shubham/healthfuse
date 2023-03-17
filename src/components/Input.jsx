import React from "react";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

const Input = () => {
  return (
    <form class="flex items-center space-x-5">
      <label for="simple-search" class="sr-only">
        Enter your Email
      </label>
      <div class="relative w-[70%]">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MdEmail className="text-orange-500 text-4xl" />
        </div>
        <input
          type="text"
          id="simple-search"
          class=" border  text-sm rounded-lg text-orange-500 block w-full pl-16 p-5 focus:outline-none bg-white focus:ring   border-orange-500 placeholder-orange-400 focus:ring-orange-400 focus:border-orange-600"
          placeholder="Enter your email"
          required
        />
      </div>

      <button
        type="submit"
        class="inline-flex items-center justify-center px-2 lg:py-4 md:py-3 text-base  focus:ring-orange-300 font-medium text-center text-white border border-orange-300 rounded-lg bg-orange-400 focus:ring-2  dark:border-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-700"
      >
        Get Newsletter
      </button>
      
    </form>
  );
};
export default Input;
