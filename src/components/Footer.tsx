import React, { useState } from "react";
import { WORKSHOP_CONFIG } from "../data/workshopData";

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="w-full bg-[#faf3e8] border-t border-[#eee7dc] text-[#1e1b15] pb-20 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#eee7dc] flex items-center justify-center text-[#5f4302]">
                <span className="material-symbols-outlined text-xl">spa</span>
              </div>
              <span className="font-['Playfair_Display'] text-xl font-bold text-[#003931] tracking-tight">
                SUTO CARE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#404946] leading-relaxed">
              Học viện Đào tạo & Chuyển giao Kỹ thuật Dưỡng sinh Đông Y tiêu chuẩn y khoa, kiến tạo sự nghiệp nhân văn và bền vững cho phụ nữ Việt.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="material-symbols-outlined text-[#7c5641] text-lg">verified</span>
              <span className="text-xs text-[#7c5641] uppercase font-bold tracking-wider">
                Đào Tạo Chuẩn Y Khoa
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-2">
            <span className="font-['Playfair_Display'] text-base font-bold text-[#003931] mb-1">
              Tôn Chỉ Đào Tạo
            </span>
            <p className="text-xs sm:text-sm text-[#404946] leading-relaxed">
              "Tâm sáng dưỡng nghiệp lành - Y đức dẫn lối thành công". SUTO CARE cam kết cầm tay chỉ việc, truyền tải bí quyết thực chiến để mỗi học viên tự tin hành nghề và làm chủ spa bài bản.
            </p>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-2">
            <span className="font-['Playfair_Display'] text-base font-bold text-[#003931] mb-1">
              Thông Tin Liên Hệ
            </span>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#404946]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#7c5641] mt-0.5 shrink-0">
                  location_on
                </span>
                <span>Trụ sở chính: Tầng 5, Tòa nhà Tri thức SUTO, Hà Nội & Chi nhánh TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#7c5641] shrink-0">
                  call
                </span>
                <span>Hotline Tư Vấn: 0989.234.888 (Hỗ trợ 24/7)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#7c5641] shrink-0">
                  mail
                </span>
                <span>tuyensinh@sutocare.edu.vn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#7c5641] shrink-0">
                  videocam
                </span>
                <span>Phòng Zoom Đào Tạo Trực Tuyến Bản Quyền</span>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-2">
            <span className="font-['Playfair_Display'] text-base font-bold text-[#003931] mb-1">
              Cam Kết & Bảo Mật
            </span>
            <p className="text-xs sm:text-sm text-[#404946] leading-relaxed">
              SUTO CARE tôn trọng và bảo mật 100% dữ liệu đăng ký theo chính sách an toàn thông tin quốc gia. Học viên tham gia lớp trực tuyến Zoom được cam kết giải đáp trực tiếp 1:1.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#eee7dc] rounded-lg text-[#1e1b15] text-xs">
                <span className="material-symbols-outlined text-base text-[#003931]">lock</span>
                <span>Thông tin được mã hóa bảo mật SSL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="mt-12 pt-6 border-t border-[#eee7dc] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#404946]">
          <p>© 2026 SUTO CARE Academy. Bản quyền thuộc về Học Viện Dưỡng Sinh Đông Y SUTO CARE.</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setActiveModal("quy-che")}
              className="hover:text-[#003931] transition-colors cursor-pointer"
            >
              Quy chế đào tạo
            </button>
            <button
              onClick={() => setActiveModal("chinh-sach")}
              className="hover:text-[#003931] transition-colors cursor-pointer"
            >
              Chính sách bảo mật
            </button>
            <button
              onClick={() => setActiveModal("dieu-khoan")}
              className="hover:text-[#003931] transition-colors cursor-pointer"
            >
              Điều khoản tham gia
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#eee7dc] flex items-center justify-center text-[#404946]"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#003931]">
              {activeModal === "quy-che" && "Quy Chế Đào Tạo Tại SUTO CARE"}
              {activeModal === "chinh-sach" && "Chính Sách Bảo Mật Thông Tin"}
              {activeModal === "dieu-khoan" && "Điều Khoản Tham Gia Lớp Zoom"}
            </h3>
            <div className="text-xs sm:text-sm text-[#404946] leading-relaxed max-h-[350px] overflow-y-auto flex flex-col gap-2">
              <p>
                1. <strong>Tôn trọng quyền riêng tư:</strong> Số điện thoại của học viên chỉ sử dụng duy nhất cho mục đích gửi link tham gia Zoom và gửi tài liệu cẩm nang khóa học.
              </p>
              <p>
                2. <strong>Chuẩn mực y đức:</strong> Mọi giáo trình giảng dạy tại Học Viện SUTO CARE đều tuân thủ các quy tắc bảo an sinh lý cơ thể theo chuẩn Đông y dưỡng sinh.
              </p>
              <p>
                3. <strong>Văn hóa lớp học:</strong> Học viên tham gia phòng Zoom cần giữ thái độ lịch sự, tương tác xây dựng, không quay lén hoặc phân phối tài liệu trái phép.
              </p>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-[#003931] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#2c685d] transition-colors"
            >
              Tôi Đã Hiểu
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
