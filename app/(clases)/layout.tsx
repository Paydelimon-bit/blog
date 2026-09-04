import { ReactNode } from "react";
import Clase1 from "./MD/clase1/page";

interface LayoutProps{
    children:ReactNode
}

export default function layout({children}:LayoutProps){
    return(
    <div className="flex  ">
        
        {children}
    </div>
    )
}