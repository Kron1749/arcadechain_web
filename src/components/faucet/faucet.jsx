import React from "react";
import Image from "next/image";
import ERC20 from "../elements/ERC20"
import Network from "../elements/Network";


const FaucetComp = () => {
    
    return (
        <>

            <section
                       className="flex flex-col max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                {/*<section className=" flex flex-col max-w-4xl mx-auto overflow-hidden   rounded-lg shadow-lg    ">*/}
                <div className="md:flex md:items-center md:justify-center md:w-1/2 ">
                    {/*<div className="px-6 py-6 md:px-8 md:py-0 bg-slate-800/40 drop-shadow-white-xl ">*/}
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <div data-netlify-recaptcha="true"></div>

                        <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Request your
                            test game tokens.
                        </h2>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Enter your wallet
                            address and we will send you some TUSD tokens. Be patience this might take a little
                            while.</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <div className="mb-10">
                        <form name="faucet"
                            method="POST"
                            action="/thank-you"
                            data-netlify="true">
                            <input type="hidden" name="form-name" value="faucet" />
                             

                             
                            <div
                                className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input
                                    className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                                    type="text" 
                                    name="wallet" 
                                    pattern="[0][x][a-zA-Z0-9]{40}"
                                    title="Incorrect wallet address"
                                    placeholder="0x00000000000000"
                                    aria-label="Your wallet address"
                                    required
                                    minLength="1"/>
                                <button type="submit"
                                        className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Get
                                    TUSD
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </section>
            <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/20">       
                <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
                    <div className="mt-2">
                        <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 ">Use Cronos Test Network</p>     
                        <div>
                            <p className="mt-2 text-gray-600 ">We are using Cronos Test network for testing our blockchain functionality prior to production release.
                            </p>
                            <div className="flex mt-4">
                                <Network color="black" chainId='0x152' chainName="Cronos Testnet" rpcUrls="https://cronos-testnet-3.crypto.org:8545" nameOfNativeCurrency="TCRO" blockExplorerUrls="https://cronos.crypto.org/explorer/testnet3"/>                                  
                                <div className="ml-40">
                                    <ERC20 color="black" chainId='0x152' tokenAddress = '0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e' tokenSymbol = 'TUSD'  tokenDecimals={18}/>
                                </div> 
                            </div>                   
                        </div>
                        
                    </div>  

                     
                              
                </div>
                 
            </div>
           
        </>
    )

}

export default FaucetComp
