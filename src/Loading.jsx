import React from "react";
import {ImSpinner11} from "react-icons/im"

export function Loading(){
    return <div className="flex justify-center items-center h-[100%]"><ImSpinner11 className="animate-spin"/></div>
}