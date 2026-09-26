import React from "react";
import { IMAGES, INSTRUCTOR_STATS, WORKSHOP_CONFIG } from "../data/workshopData";

interface InstructorProps {
  onOpenRegister: () => void;
}

export const Instructor: React.FC<InstructorProps> = ({ onOpenRegister }) => {
  return (
    <section className="w-full py-16 bg-[#faf3e8] border-y border-[#eee7dc]" id="giang-vien">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Instructor Image Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl bg-[#eee7dc] border border-[#e8e2d7]">
              <img
                src={IMAGES.masterMaiPhuong}
                alt="Chân dung Giảng viên Mai Phương - Trưởng ban Đào tạo Dưỡng sinh SUTO CARE"
                className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
              />

              {/* Tag below image */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md text-center shadow-lg border border-[#f4ede2]">
                <span className="font-['Playfair_Display'] text-xl font-bold text-[#003931] block">
                  {WORKSHOP_CONFIG.masterName}
                </span>
                <p className="text-xs font-semibold text-[#7c5641] mt-0.5">
                  {WORKSHOP_CONFIG.masterTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Instructor Info Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#eee7dc] text-[#003931] text-xs font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-base text-[#7c5641]">school</span>
              <span>Chuyên Gia Dẫn Dắt</span>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
                NGƯỜI TRỰC TIẾP ĐỒNG HÀNH CÙNG BẠN
              </h2>
              <p className="text-base text-[#404946] leading-relaxed">
                Học viện SUTO CARE chủ trương không đào tạo lý thuyết suông. Người đồng hành cùng bạn là những chuyên gia đang trực tiếp vận hành hệ thống spa dưỡng sinh mỗi ngày.
              </p>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INSTRUCTOR_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#eee7dc] shadow-sm flex items-start gap-3.5 hover:border-[#ffdea6] transition-all"
                >
                  <span className="material-symbols-outlined text-[#2c685d] text-2xl mt-0.5 shrink-0">
                    {stat.icon}
                  </span>
                  <div>
                    <span className="font-['Playfair_Display'] text-base font-bold text-[#1e1b15] block">
                      {stat.title}
                    </span>
                    <span className="text-xs text-[#404946] leading-relaxed block mt-0.5">
                      {stat.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote and CTA */}
            <div className="p-4 rounded-xl bg-[#eee7dc] border border-[#e8e2d7] text-xs text-[#404946] italic flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-[#003931] shrink-0">format_quote</span>
              <span>
                "Y đức là gốc, tay nghề là cành ngọn. Dưỡng sinh không chỉ là nghề mưu sinh mà là trao đi sức khỏe và nhận lại bình an." – Master Mai Phương
              </span>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#003931] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#2c685d] transition-all cursor-pointer"
              >
                ĐĂNG KÝ HỌC CÙNG GIẢNG VIÊN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
