import React, { useState, useEffect } from "react";
import { WORKSHOP_CONFIG, IMAGES } from "../data/workshopData";

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Lợi ích", href: "#loi-ich" },
    { label: "Nội dung", href: "#noi-dung" },
    { label: "Giảng viên", href: "#giang-vien" },
    { label: "Hình ảnh", href: "#hinh-anh" },
    { label: "Cảm nhận", href: "#cam-nhan" },
    { label: "Quà tặng", href: "#qua-tang" },
    { label: "FAQ", href: "#faq" },
    { label: "Đăng ký", href: "#form-dang-ky" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fff8ef]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "bg-[#fff8ef]/90 backdrop-blur-sm shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="h-20 max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#eee7dc] flex items-center justify-center text-[#5f4302] shadow-[0_2px_8px_rgba(90,56,37,0.08)] group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl text-[#5f4302]">spa</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Playfair_Display'] text-xl font-bold text-[#003931] tracking-tight leading-none">
              SUTO CARE
            </span>
            <span className="text-[11px] font-semibold text-[#7c5641] tracking-widest uppercase mt-0.5">
              Học Viện Dưỡng Sinh Đông Y
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm font-semibold text-[#404946] hover:text-[#003931] transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA & Profile */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={onOpenRegister}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#ffdea6] text-[#271900] font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-[#003931] hover:text-white shadow-[0_4px_16px_rgba(67,46,0,0.12)] transition-all duration-300 cursor-pointer"
          >
            GIỮ CHỖ MIỄN PHÍ
          </button>

          <img
            alt="Giảng viên SUTO CARE"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#ffdea6] shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
            src={IMAGES.masterMaiPhuong}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#eee7dc] text-[#003931] hover:bg-[#e8e2d7] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fff8ef] border-b border-[#e8e2d7] shadow-xl px-4 py-4 animate-fadeIn">
          <div className="flex flex-col gap-2 max-w-[1200px] mx-auto">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#1e1b15] hover:bg-[#f4ede2] hover:text-[#003931] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 bg-[#ffdea6] text-[#271900] font-bold text-xs uppercase tracking-wider rounded-lg text-center shadow-md hover:bg-[#003931] hover:text-white transition-all"
              >
                ĐĂNG KÝ GIỮ CHỖ MIỄN PHÍ
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
