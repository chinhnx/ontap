import Logo from '../assets/Logo.svg'
import Bars from '../assets/bars (2).svg'
import Home from '../assets/HomeIcon.svg'
import Channel from '../assets/MultiChannel.svg'
import Chance from '../assets/ChanceIcon.svg'
import Oders from '../assets/ListIcon.svg'
import Settings from '../assets/SettingIcon.svg'
import { useState } from 'react'
const Menu = [
    { icon: Home, label: "Trang chủ" },
    { icon: Channel, label: "Đa kênh" },
    { icon: Chance, label: "Cơ hội" },
    { icon: Oders, label: "Đơn hàng" },
    { icon: Settings, label: "Thiết lập" }


]

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div className={`${isCollapsed ? "w-[4.5%]" : "w-[16%]"} transition-all duration-500 ease-in-out`}>
            {/* Logo + Nút bars */}
            <div className="px-4  mb-2.5  flex justify-between items-center">
                {!isCollapsed && (
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                )}
                <div>
                    <button onClick={toggleSidebar} className={`p-4 mt-3 mb-2.5 pt-3 flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
                        <img src={Bars} alt="Bars" />
                    </button>
                </div>
            </div>

            {/* Menu */}
            <div>
                {Menu.map((menu, index) => {
                    return (
                        <div
                            key={index}
                            className={`group mx-4 mb-1.5 py-2.5 px-3 hover:bg-[#25A55E] rounded-[6px] cursor-pointer ${isCollapsed ? "flex justify-center" : ""}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <img
                                        src={menu.icon}
                                        alt=""
                                        className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert"
                                    />
                                </div>
                                {!isCollapsed && (
                                    <p className="text-[14px] font-normal text-[#00000073] group-hover:text-white whitespace-nowrap">
                                        {menu.label}
                                    </p>
                                )}
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>


    )
}
export default SideBar;