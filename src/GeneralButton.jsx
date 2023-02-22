import React from "react";

function GeneralButton({content, functionName}){
    console.log(' content & functionName in GeneralButton',content, functionName);
    
    const noFunction = ()=>console.log('No functionName');

    return (
        <button className="bg-primary-default px-4 py-1 rounded-md hover:bg-primary-dark text-white" onClick={functionName || noFunction}>{content}</button>
        
    );
}

export default GeneralButton;