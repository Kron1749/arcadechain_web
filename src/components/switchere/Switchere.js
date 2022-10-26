import React, {useEffect} from "react";

function Switchere() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://switchere.com/js/widget.js";
        script.async = true;
        document.body.appendChild(script);
        setTimeout(() => {
            window.initSwitchere("#switchere", {
                "r": "sbc0zsmag8iw",
                "lang": "en",
                "sz": "lg",
                "no_brd": true,
                "in": "card,sepa,bank,crypto,sofort",
                "out": "crypto",
                "mode": "custom",
                "width": "512",
                "out_grp_cur": "crypto_matic",

            });
        }, 600)

    }, []);

    return <div id="switchere" className={'h-40'}></div>
}

export default Switchere;