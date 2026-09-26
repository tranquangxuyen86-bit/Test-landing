import React, { useState, useEffect } from "react";
import { WORKSHOP_CONFIG } from "../data/workshopData";

interface StickyBottomBarProps {
  onOpenRegister: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenRegister }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(30,27,21,0.12)] border-t border-[#eee7dc] py-3 px-4 md:px-6 transition-all duration-300 animate-slideUp">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        {/* Left Information */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffdea6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e9c177]"></span>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-['Playfair_Display'] text-sm sm:text-base font-bold text-[#003931] truncate">
                Khóa Định Hướng Nghề Trực Tuyến Qua Zoom
              </span>
              <span className="hidden md:inline-block px-2.5 py-0.5 bg-[#eee7dc] text-[#7c5641] text-xs font-semibold rounded-lg shrink-0">
                Chỉ còn {WORKSHOP_CONFIG.remainingSlots} suất ưu đãi 100%
              </span>
            </div>
            <span className="text-xs text-[#404946] hidden sm:inline truncate">
              20:00 • Thứ Tư, {WORKSHOP_CONFIG.date} • Đồng hành bởi {WORKSHOP_CONFIG.masterName}
            </span>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 bg-[#ffdea6] text-[#271900] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#003931] hover:text-white shadow-[0_4px_16px_rgba(67,46,0,0.15)] transition-all duration-300 cursor-pointer"
          >
            ĐĂNG KÝ GIỮ CHỖ
          </button>
        </div>
      </div>
    </aside>
  );
};
