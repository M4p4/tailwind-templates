import Image from 'next/image';
import React from 'react';

const Steps = () => {
  return (
    <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between items-center mt-20 relative">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Image
          className="mb-5 lg:mb-10"
          src="/images/steps/step1.png"
          alt="Step 1"
          width={100}
          height={100}
        />
        <span className="bg-blue-200 text-blue-700 rounded-xl px-2.5 py-1 text-xs">
          Step 1
        </span>
        <h3 className="font-semibold text-lg">Filter & Discover</h3>
        <p className="font-medium text-slate-400">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 text-center">
        <Image
          className="mb-5 lg:mb-10"
          src="/images/steps/step2.png"
          alt="Step 2"
          width={100}
          height={100}
        />
        <span className="bg-red-200 text-red-700 rounded-xl px-2.5 py-1 text-xs">
          Step 2
        </span>
        <h3 className="font-semibold text-lg">Connect wallet</h3>
        <p className="font-medium text-slate-400">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 text-center">
        <Image
          className="mb-5 lg:mb-10"
          src="/images/steps/step3.png"
          alt="Step 1"
          width={100}
          height={100}
        />
        <span className="bg-yellow-200 text-yellow-700 rounded-xl px-2.5 py-1 text-xs">
          Step 3
        </span>
        <h3 className="font-semibold text-lg">Start trading</h3>
        <p className="font-medium text-slate-400">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 text-center">
        <Image
          className="mb-5 lg:mb-10"
          src="/images/steps/step4.png"
          alt="Step 4"
          width={100}
          height={100}
        />
        <span className="bg-emerald-300 text-emerald-700 rounded-xl px-2.5 py-1 text-xs">
          Step 4
        </span>
        <h3 className="font-semibold text-lg">Earn Money</h3>
        <p className="font-medium text-slate-400">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>

      <div className="absolute top-1 -z-0 hidden lg:block inset-x-0 w-full">
        <Image
          src="/images/steps/stepsbg.svg"
          width={1024}
          height={128}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Steps;
