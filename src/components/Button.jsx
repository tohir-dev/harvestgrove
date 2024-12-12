const Button = ({icon, children, color, variant}) => {
    switch (variant) {
        case "underline":
            return (
                <button className="group text-xs md:text-base w-max flex flex-col gap-1"><span>{children}</span><div className="h-1 rounded-full w-0 transition-all duration-300  bg-[#0e0e0e]/80 group-hover:w-full"></div></button>
            )
            break;
    
        default:
            return (
                <button className="group rounded-full w-max bg-white  border border-[#0EA91E] text-xs md:text-base text-black flex items-center gap-1 p-1 pl-4"><span>{children}</span><div className="md:p-3 p-3 rounded-full bg-[#0EA91E]/30">{icon}</div></button>
                )
            break;
    }
    
}
export default Button