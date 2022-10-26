import Link from "next/link";
import React from "react";
import Image from "next/image";
import IntroText from "./IntroText";

export const Step = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <IntroText leadText={['Slot','game meets the blockchain.']}
                       followText={'Explore the classic game of Slot in entirely new setting. All transactions are securely registered on the block chain with all fees and winning in stable coin for your convenience and piece of mind.'}/>
            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                    <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                </div>
                <div
                    className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Connect your wallet</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white">
                        </p>
                        <Image src={"/images/wallet.png"} height="64" width="64"/>
                    </div>
                    <h3 className="text-sm text-gray-400">
                        We recommend that you use Metamask but any web3 crypto wallet should work. Remember to use Cronos Test network.
                    </h3>
                </div>
                <div
                    className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Sign in with your wallet</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white">
                        </p>
                        <Image src={"/images/connect.png"} height="64" width="64"/>

                    </div>
                    <h3 className="text-sm text-gray-400">
                        You are in control - no account, credentials creation is needed.
                    </h3>
                </div>
                <div className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">

                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Approve in-game tokens</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white">
                        </p>
                        <Image src={"/images/approved.png"} height="64" width="64"/>
                    </div>
                    <h3 className="text-sm text-gray-400">
                        <Link  className='font-bold text-white text-lg'  href='/faucet'><a target='_self' rel='noreferrer' className='font-bold text-gray-200 underline '>Get your in game TUSD tokens. </a></Link>
                        <br/>
                        Approve TUSD for in-game spending. Approval of tokens will not deduct your funds until play the game.
                    </h3>
                </div>
                <div
                    className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">

                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Play slot and win</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white ">
                        </p>
                        <Image src={"/images/controller.png"} height="64" width="64"/>
                    </div>
                    <h3 className="text-sm text-gray-400">
                        Play the game by pressing the Spin button. Wait a few moments and see what is your win today!
                    </h3>
                </div>
            </div>
        </div>
    );
};