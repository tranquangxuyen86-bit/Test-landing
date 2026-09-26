import React from "react";
import { WORKSHOP_CONFIG } from "../data/workshopData";
import { RegistrationData } from "./RegistrationForm";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: RegistrationData | null;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  // Generate Google Calendar Link
  const gcalTitle = encodeURIComponent("Lớp Định Hướng Nghề Dưỡng Sinh Đông Y Trực Tuyến - SUTO CARE");
  const gcalDetails = encodeURIComponent(
    `Học viện SUTO CARE - Lớp định hướng nghề dưỡng sinh Đông Y trực tuyến qua Zoom.\n\nGiảng viên: ${WORKSHOP_CONFIG.masterName}\nSố điện thoại hỗ trợ: ${WORKSHOP_CONFIG.hotline}\nLink Zoom và mật khẩu sẽ được gửi qua Zalo trước 30 phút buổi học.`
  );
  const gcalLocation = encodeURIComponent("Zoom Meeting Online");
  // 15/04/2026 20:00 - 21:30 Vietnam time (UTC+7) -> 13:00 - 14:30 UTC
  const gcalDates = "20260415T130000Z/20260415T143000Z";
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcalTitle}&dates=${gcalDates}&details=${gcalDetails}&location=${gcalLocation}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white border border-[#eee7dc] shadow-2xl p-6 sm:p-8 flex flex-col gap-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#eee7dc] flex items-center justify-center text-[#404946] hover:text-[#1e1b15] hover:bg-[#e8e2d7] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header Icon & Message */}
        <div className="flex flex-col items-center text-center gap-3 pt-2">
          <div className="w-16 h-16 rounded-full bg-[#b2efe1]/40 text-[#003931] flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-4xl text-[#003931]">
              check_circle
            </span>
          </div>
          <span className="font-['Playfair_Display'] text-2xl font-bold text-[#003931]">
            ĐĂNG KÝ GIỮ CHỖ THÀNH CÔNG!
          </span>
          <p className="text-sm text-[#404946] leading-relaxed">
            Chúc mừng bạn {data?.fullname ? <strong>{data.fullname}</strong> : ""} đã ghi danh thành công. SUTO CARE đã bảo lưu 01 suất học miễn phí cho bạn.
          </p>
        </div>

        {/* Workshop Info Recap Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#faf3e8] border border-[#eee7dc] flex flex-col gap-2.5 text-xs sm:text-sm">
          <div className="flex items-center justify-between text-[#1e1b15]">
            <span className="text-[#404946]">Mã vé tham gia:</span>
            <span className="font-mono font-bold text-[#003931] bg-[#eee7dc] px-2 py-0.5 rounded">
              SUTO-ZM-{Math.floor(1000 + Math.random() * 9000)}
            </span>
          </div>
          <div className="flex items-center justify-between text-[#1e1b15]">
            <span className="text-[#404946]">Thời gian học:</span>
            <span className="font-semibold text-[#003931]">
              20:00 - 21:30 | {data?.workshopDate || "15/04/2026"}
            </span>
          </div>
          <div className="flex items-center justify-between text-[#1e1b15]">
            <span className="text-[#404946]">Hình thức:</span>
            <span className="font-semibold">Trực tuyến qua Zoom Meeting</span>
          </div>
          <div className="flex items-center justify-between text-[#1e1b15]">
            <span className="text-[#404946]">Số Zalo nhận link:</span>
            <span className="font-semibold text-[#7c5641]">{data?.phone || "Đã lưu"}</span>
          </div>
          <div className="flex items-center justify-between text-[#1e1b15]">
            <span className="text-[#404946]">Hotline hỗ trợ:</span>
            <span className="font-semibold text-[#7c5641]">{WORKSHOP_CONFIG.hotline}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <a
            href={WORKSHOP_CONFIG.zaloGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-[#ffdea6] text-[#271900] text-center font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:bg-[#003931] hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">forum</span>
            <span>VÀO NHÓM ZALO LỚP HỌC (NHẬN LINK ZOOM)</span>
          </a>

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#eee7dc] text-[#003931] text-center text-xs sm:text-sm font-semibold hover:bg-[#e8e2d7] transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">event</span>
            <span>LƯU LỊCH VÀO GOOGLE CALENDAR</span>
          </a>
        </div>

        <p className="text-center text-xs text-[#707976]">
          * Link phòng Zoom và tài liệu Ebook sẽ được gửi tự động qua Zalo trước 30 phút buổi học. Vui lòng kiểm tra tin nhắn Zalo.
        </p>
      </div>
    </div>
  );
};
