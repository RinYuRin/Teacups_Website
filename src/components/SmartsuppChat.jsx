import React, { useEffect } from 'react';

const SmartsuppChat = () => {
    useEffect(() => {
        const smartsuppKey = import.meta.env.VITE_SMARTSUPP_KEY;

        if (!smartsuppKey) {
            console.error("Botlogs wala ung Smartsupp key.");
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        
        script.innerHTML = `
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '${smartsuppKey}';
            window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='//www.smartsuppchat.com/loader.js';s.parentNode.insertBefore(c,s);
            })(document);
        `;
        
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return null;
};

export default SmartsuppChat;