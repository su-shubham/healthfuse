import React from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  return (
    <div>
      <section class="   ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-orange-500 hover:text-orange-600">
              Gift Smiles by donating <span className="text-orange-800">Crypto</span>
            </h2>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Save countless life by giving some{" "}
              <span className="text-indigo-500">MATIC</span>.
            </p>
            <div
              className="flex justify-center"
            >
              <QRCode
                size={256}
                className="w-200 text-"
                value="values"
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QrCode;
