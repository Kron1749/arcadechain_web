import ERC20 from "../elements/ERC20"
export const ThankYouComp = () => {
    return (
        <div className="grid place-items-center mt-80 mb-80 pb-20">
            <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-800 dark:text-gray-400 font-bold">Thank you.</span>
                </div>

                <div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Your request has been received and we will process it shorty.
                    </p>
                    
                </div>
            </div>
            <div className="flex justify-center max-w-md mx-auto mt-8 gap-x-6 md:mt-5 md:gap-x-10">
                <ERC20 chainId='0x152' tokenAddress = '0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e' tokenSymbol = 'TUSD'  tokenDecimals={18}/>
            </div>
        </div>
    );
};