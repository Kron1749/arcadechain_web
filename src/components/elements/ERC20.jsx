import { useMoralis } from "react-moralis";

function ERC20({chainId,tokenAddress,tokenSymbol,tokenDecimals}) {
    const {isAuthenticated,authenticate} = useMoralis()
    let currentChainId
      async function switchChain() {
         await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainId }],
        })
    }

       async function addTUSD() {
          await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: tokenAddress, 
                symbol: tokenSymbol, 
                decimals: tokenDecimals,
              },
            },
          });
    }

    const addToken = async () => {     
        if(!isAuthenticated) {
            await authenticate({signingMessage: "Log in to interact with Arcade Chain" })
        } 
        currentChainId = await ethereum.request({
            method: 'eth_chainId',
        })
        if(currentChainId!=chainId) {
            await switchChain()  
        } 
        await addTUSD()
    }
        return(
            <>
                        <button onClick={addToken} className="relative h-10 w-32 font-poppins text-sm font-bold text-white md:h-[54px] md:w-[180px] md:text-base" >
                            <p className="relative z-20">Add TUSD to Metamask</p>        
                            <img layout="fill" className="absolute inset-0" src={"/images/btn-gradient-transparent.webp"} alt="button gradient" />                        
                        </button>
            </>       
    )
}


export default ERC20;