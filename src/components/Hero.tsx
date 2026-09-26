import React, { useState, useEffect } from "react";
import { WORKSHOP_CONFIG, HERO_BULLETS, IMAGES } from "../data/workshopData";

interface HeroProps {
  onOpenRegister: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenQuiz }) => {
  // Live Countdown to session
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#fff8ef] pt-8 pb-14 md:pt-12 md:pb-16" id="gioi-thieu">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-lg bg-[#eee7dc] text-[#003931] text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span className="material-symbols-outlined text-base text-[#7c5641]">verified_user</span>
              <span>{WORKSHOP_CONFIG.academyName}</span>
            </div>

            {/* Subtitle & Main Title */}
            <div className="flex flex-col gap-2.5">
              <span className="text-sm md:text-base font-semibold text-[#7c5641] uppercase tracking-widest">
                {WORKSHOP_CONFIG.title}
              </span>
              <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#003931] leading-[1.2]">
                {WORKSHOP_CONFIG.headline}
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-[#404946] leading-relaxed">
              {WORKSHOP_CONFIG.subheadline}
            </p>

            {/* 4 Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {HERO_BULLETS.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#faf3e8] border border-[#e8e2d7]/60 shadow-sm hover:shadow transition-shadow"
                >
                  <span className="material-symbols-outlined text-[#2c685d] text-xl mt-0.5 shrink-0">
                    {bullet.icon}
                  </span>
                  <span className="text-sm font-medium text-[#1e1b15] leading-snug">
                    {bullet.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Box with Countdown */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#003931] text-white shadow-lg flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#ffdea6] text-[#271900] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">event_available</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-base sm:text-lg text-white">
                      {WORKSHOP_CONFIG.time} | {WORKSHOP_CONFIG.dayOfWeek}, {WORKSHOP_CONFIG.date}
                    </span>
                    <span className="text-xs sm:text-sm text-[#87c2b5]">
                      {WORKSHOP_CONFIG.platform} • {WORKSHOP_CONFIG.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="px-3 py-1 bg-white/15 rounded-full text-xs font-semibold text-[#ffdea6] border border-[#ffdea6]/30">
                    Còn {WORKSHOP_CONFIG.remainingSlots} / {WORKSHOP_CONFIG.totalSlots} Chỗ
                  </span>
                </div>
              </div>

              {/* Countdown Bar */}
              <div className="pt-2 border-t border-[#0f5147] flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="text-[#87c2b5] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#ffdea6]">hourglass_bottom</span>
                  Thời gian đếm ngược đến giờ mở phòng Zoom:
                </span>
                <div className="flex items-center gap-1 font-mono font-bold text-[#ffdea6]">
                  <span className="bg-[#0f5147] px-2 py-0.5 rounded text-white">{timeLeft.days}n</span>:
                  <span className="bg-[#0f5147] px-2 py-0.5 rounded text-white">{String(timeLeft.hours).padStart(2, '0')}g</span>:
                  <span className="bg-[#0f5147] px-2 py-0.5 rounded text-white">{String(timeLeft.minutes).padStart(2, '0')}p</span>:
                  <span className="bg-[#0f5147] px-2 py-0.5 rounded text-white">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                </div>
              </div>
            </div>

            {/* CTA & Note */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#ffdea6] text-[#271900] font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-[#003931] hover:text-white transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined mr-2 text-xl">how_to_reg</span>
                ĐĂNG KÝ GIỮ CHỖ MIỄN PHÍ
              </button>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-[#003931]/30 bg-transparent text-[#003931] text-xs font-semibold hover:bg-[#eee7dc] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined mr-1.5 text-base">quiz</span>
                Test nhanh xem bạn có hợp nghề? (1 phút)
              </button>
            </div>

            <div className="flex items-center gap-2 text-[#404946] text-xs">
              <span className="material-symbols-outlined text-[#7c5641] text-base">timer</span>
              <span>Chỉ mất 30 giây điền form • Link & ID Zoom gửi trực tiếp qua Zalo</span>
            </div>
          </div>

          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#eee7dc] border border-[#e8e2d7]">
              <img
                src={IMAGES.heroVisual}
                alt="Học viên và giảng viên tại Học viện SUTO CARE đang thực hành kỹ thuật ấn huyệt đầu và dưỡng sinh đông y"
                className="w-full h-[440px] sm:h-[490px] object-cover hover:scale-105 transition-transform duration-500"
              />

              {/* Subtle top gradient badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Lớp Zoom Trực Tuyến Tương Tác 1:1
                </span>
              </div>

              {/* Floating tag at bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-3 border border-[#f4ede2]">
                <div className="w-10 h-10 rounded-full bg-[#eee7dc] flex items-center justify-center text-[#003931] shrink-0">
                  <span className="material-symbols-outlined text-2xl">self_improvement</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Playfair_Display'] font-bold text-base text-[#003931] truncate">
                    Thực Hành Dưỡng Sinh Cầm Tay Chỉ Việc
                  </span>
                  <span className="text-xs text-[#404946] truncate">
                    Trực tiếp quan sát các thao tác Đông Y cốt lõi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
