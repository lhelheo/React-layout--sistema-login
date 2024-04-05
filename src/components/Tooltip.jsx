import { useState } from "react";

export const Tooltip = ({text, children}) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    return (
        <div
            className="tooltip-container relative"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
        >
            {children}
            {isTooltipVisible && <div className="tooltip p-3 text-sm bg-primary-500 w-min whitespace-nowrap text-white p-1 rounded absolute z-10 -right-32 bottom-0">{text}</div>}
        </div>
    );
};