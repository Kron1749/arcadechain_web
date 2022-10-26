import { useMoralis } from "react-moralis";
import { color } from "web3uikit";

function Network({color,chainId,chainName,rpcUrls,nameOfNativeCurrency,blockExplorerUrls}) {
    const {isAuthenticated,authenticate} = useMoralis()
    let currentChainId
    async function switchChain() {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainId }],
        })
    }

    async function addChain(){
        console.log("want to add chain")
        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                  chainId: chainId,
                  chainName: chainName,
                  rpcUrls: [rpcUrls],
                  nativeCurrency: {
                    name: nameOfNativeCurrency,
                    symbol: nameOfNativeCurrency,
                    decimals: 18
                  },
                  blockExplorerUrls: [blockExplorerUrls]
                }
              ]
        })
    }

   const addChainByButtonClick = async () => {
        console.log('hey i am working')
        if(!isAuthenticated) {
            await authenticate({signingMessage: "Log in to interact with Arcade Chain" })
        } 
        currentChainId = await ethereum.request({
            method: 'eth_chainId',
        })
        if(currentChainId!=chainId) {
            await addChain()  
        } 
        await switchChain()
    }

    return(
        <>
                    <button onClick={addChainByButtonClick} className={`relative h-10 w-32 font-poppins text-sm font-bold text-${color} h-150px md:h-[54px] md:w-[180px] md:text-base`} >
                        <p className="relative z-20">Add Cronos Testnet <br/>to Metamask</p>
                        <img className="absolute inset-0 h-14 " src={"/images/btn-gradient-transparent.webp"} alt="add network button" />
                    </button>
        </>       
)

}

export default Network