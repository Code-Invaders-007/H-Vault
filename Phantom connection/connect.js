const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
  
      if (provider?.isPhantom) {
        return provider;
      }
    }
  
    window.open('https://phantom.app/', '_blank');
  };


async function getAccount(){
    const provider = getProvider();   
   
    // const solanaObject = window.solana;
    // window.solana.connect();

    try {
        const resp = await provider.connect();
        console.log(resp.publicKey.toString());
    
        document.getElementById("user-account").innerHTML = window.solana.publicKey;
    } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
    }
   
   
    //     document.getElementById("user-account").innerHTML = window.solana.publicKey;
    };




function logout(){
    window.solana.disconnect();
    window.solana.on("disconnect", () => {
        window.alert("Disconnected!");
    }
    )
}