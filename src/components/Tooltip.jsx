import { useState } from "react";

export const Tooltip = ({text, children}) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    return (
        <div 
            className="tooltip-container"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
        >
            {children}
            {isTooltipVisible && <div className="tooltip bg-primary-500 w-min text-white p-3 rounded relative z-index right-16 top-20">{text}</div>}
        </div>
    );
};