import Head from "next/head";
import Background from "../components/background/Background";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import React from "react";
import Switchere from "../components/switchere/Switchere";
import IntroText from "../components/elements/IntroText";
import {SwapWidget} from "@uniswap/widgets";

function GetActToken() {
    const UNISWAP_TOKEN_LIST = 'http://localhost:3000/tokens.uniswap.org'
    const MATIC = '0x0000000000000000000000000000000000001010'
    const TUSD  = '0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e'
    const theme = {
        borderRadius: 0.5,
        fontFamily: '"Helvetica"',
        container: "#1b2654",
        module: "#0c1739",
        dialog: "#0c1739",
        primary: "#ffffff",
        interactive: "#4d4f78",
        accent: '#2da245',

    }

    return <div className="relative overflow-hidden">
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            <meta
                name="description"
                content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
            />
            <meta
                name="keywords"
                content="ArcadeChain, Arcade Chain, Arcade, Crypto Game, ICO, initial coin offering, Crypto Token, Crypto Games, Passive Income, Blockchain Games, token pre-sale, pre-sale, stable coin"
            />
            <meta property={"og:locale"} content={"en_US"}/>
            <meta property={"og:type"} content={"website"}/>
            <meta
                property={"og:title"}
                content={
                    "Arcade Chain - Crypto games - initial coin offering - token pre-sale"
                }
            />
            <meta
                property={"og:description"}
                content={
                    "Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
                }
            />
            <meta property={"og:url"} content={"https://www.arcadechain.io"}/>
            <meta property={"og:site_name"} content={"Arcade Chain"}/>
            <meta
                property={"og:image"}
                content={
                    "https://arcadechain-images.s3.amazonaws.com/arcade_chain_og.jpg"
                }
            />
            <meta
                property={"og:video"}
                content={"https://www.arcadechain.io/videos/intro_small.mp4"}
            />
            <meta property={"twitter:card"} content={"summary"}/>
            <meta name="twitter:site" content="https://www.arcadechain.io"/>
            <meta
                name="twitter:title"
                content="Arcade Chain - Crypto games - initial coin offering - token pre-sale"
            />
            <meta
                name="twitter:description"
                content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
            />
            <meta name="twitter:creator" content="@arcadechain"/>
            <title>Arcade Chain - Slot Machine Crypto Game</title>
        </Head>
        <Background/>
        <Header/>

        <main className="mx-auto mt-16 max-w-container px-4 sm:mt-24 sm:px-10 3xl:px-0">

            <div className={"grid place-items-center"}>
                <IntroText leadText={['1. ', 'Exchange your money for crypto.']}
                           followText={'For your convenience you are now able to convert your fiat currency to crypto tokens of your choice using wide range of payment methods including payment card and bank transfers.'}/>
                <Switchere/>
                <IntroText style={'mt-52'} leadText={['2. ', 'Swap your crypto for ACT token.']}
                           followText={'It\'s easier then ever to swap crypto you own for our ACT token, directly from our platform.'}/>

                <div className="Uniswap">
                    <SwapWidget
                        width={505}
                        theme={theme}
                        tokenList={UNISWAP_TOKEN_LIST}
                        defaultInputTokenAddress={MATIC}
                       defaultInputAmount={0.1}
                        hideConnectionUI={true}
                        defaultChainId={80001}
                        defaultOutputTokenAddress={TUSD}
                    />
                </div>
            </div>
        </main>
        <Footer/>T
        <div className="absolute inset-x-0 bottom-0 -z-10 w-full">
            <div className="relative h-screen w-full lg:h-[120rem]">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src={"/images/stellar-bg-2.webp"}
                    alt="stellar bg"
                />
            </div>
        </div>
    </div>
}

export default GetActToken;