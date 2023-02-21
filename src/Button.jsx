import React from "react";

function Button({content}){
    return (
        <Button className="bg-primary-default px-4 py-2 rounded-md hover:bg-primary-dark">{content}</Button>
    );
}

export default Button;