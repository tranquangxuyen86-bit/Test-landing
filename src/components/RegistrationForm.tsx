import React, { useState } from "react";
import { WORKSHOP_CONFIG } from "../data/workshopData";

export interface RegistrationData {
  fullname: string;
  phone: string;
  orientation: string;
  workshopDate: string;
  note?: string;
}

interface RegistrationFormProps {
  onSuccess: (data: RegistrationData) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullname: "",
    phone: "",
    orientation: "",
    workshopDate: "15/04/2026",
    note: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullname.trim()) {
      setErrorMsg("Vui lòng nhập họ và tên của bạn.");
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg("Vui lòng nhập số điện thoại Zalo hợp lệ (tối thiểu 10 số).");
      return;
    }

    if (!formData.orientation) {
      setErrorMsg("Vui lòng chọn giai đoạn và định hướng hiện tại của bạn.");
      return;
    }

    setIsSubmitting(true);

    // Simulate instant secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(formData);
    }, 600);
  };

  return (
    <section className="w-full py-16 bg-[#fff8ef]" id="form-dang-ky">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <div className="p-7 sm:p-10 md:p-12 rounded-3xl bg-[#f4ede2] border border-[#e8e2d7] shadow-xl flex flex-col gap-6">
          {/* Header */}
          <div className="text-center flex flex-col gap-2.5">
            <div className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-1.5 rounded-full bg-[#003931] text-white text-xs font-semibold shadow-sm">
              <span className="material-symbols-outlined text-base text-[#ffdea6]">lock_clock</span>
              <span>Chỉ Còn {WORKSHOP_CONFIG.remainingSlots} Suất Ưu Đãi 100% Học Phí</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
              ĐĂNG KÝ GIỮ CHỖ LỚP ZOOM MIỄN PHÍ
            </h2>
            <p className="text-sm md:text-base text-[#404946]">
              Điền thông tin bên dưới để nhận lịch học và đường link tham gia qua Zalo ngay hôm nay.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-100 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Fullname Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullname" className="text-sm font-semibold text-[#1e1b15]">
                Họ và tên của bạn <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Thị Lan"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-white text-[#1e1b15] placeholder:text-[#707976]/60 border border-[#eee7dc] focus:outline-none focus:ring-2 focus:ring-[#003931] focus:border-transparent shadow-sm text-sm"
                />
                <span className="material-symbols-outlined absolute right-3.5 top-3 text-[#707976]">
                  person
                </span>
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-semibold text-[#1e1b15]">
                Số điện thoại (Nhận link Zoom qua Zalo) <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Ví dụ: 0989 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-white text-[#1e1b15] placeholder:text-[#707976]/60 border border-[#eee7dc] focus:outline-none focus:ring-2 focus:ring-[#003931] focus:border-transparent shadow-sm text-sm"
                />
                <span className="material-symbols-outlined absolute right-3.5 top-3 text-[#707976]">
                  phone_iphone
                </span>
              </div>
            </div>

            {/* Select Workshop Date */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="workshopDate" className="text-sm font-semibold text-[#1e1b15]">
                Chọn đợt học bạn muốn tham gia <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, workshopDate: "15/04/2026" })}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    formData.workshopDate === "15/04/2026"
                      ? "border-[#003931] bg-white ring-2 ring-[#003931]"
                      : "border-[#eee7dc] bg-white/70 hover:bg-white"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-[#003931]">Đợt 1 (Sắp diễn ra)</span>
                    <span className="text-xs text-[#404946]">20:00 • Thứ Tư, 15/04/2026</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffdea6] text-[#271900]">
                    Còn 15 chỗ
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, workshopDate: "22/04/2026" })}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    formData.workshopDate === "22/04/2026"
                      ? "border-[#003931] bg-white ring-2 ring-[#003931]"
                      : "border-[#eee7dc] bg-white/70 hover:bg-white"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-[#003931]">Đợt 2 (Dự bị)</span>
                    <span className="text-xs text-[#404946]">20:00 • Thứ Tư, 22/04/2026</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#eee7dc] text-[#7c5641]">
                    Mở đăng ký
                  </span>
                </button>
              </div>
            </div>

            {/* Current Status Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="current-status" className="text-sm font-semibold text-[#1e1b15]">
                Giai đoạn và định hướng hiện tại của bạn <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <select
                  id="current-status"
                  required
                  value={formData.orientation}
                  onChange={(e) => setFormData({ ...formData, orientation: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-white text-[#1e1b15] border border-[#eee7dc] focus:outline-none focus:ring-2 focus:ring-[#003931] focus:border-transparent shadow-sm appearance-none cursor-pointer text-sm"
                >
                  <option value="" disabled>
                    Chọn định hướng của bạn...
                  </option>
                  <option value="tim-hieu">Tôi đang tìm hiểu nghề dưỡng sinh Đông y từ số 0</option>
                  <option value="chuyen-nghe">Tôi đang muốn chuyển nghề trong 1-3 tháng tới</option>
                  <option value="ktv-nang-cao">Tôi đang làm KTV spa, muốn chuẩn hóa kiến thức Đông y</option>
                  <option value="mo-spa">Tôi có dự định tự mở cơ sở Spa dưỡng sinh</option>
                </select>
                <span className="material-symbols-outlined absolute right-3.5 top-3 text-[#707976] pointer-events-none">
                  arrow_drop_down
                </span>
              </div>
            </div>

            {/* Optional question */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="note" className="text-sm font-semibold text-[#1e1b15] flex items-center justify-between">
                <span>Câu hỏi bạn muốn Giảng viên giải đáp trong buổi Zoom? (Không bắt buộc)</span>
                <span className="text-xs text-[#707976] font-normal">Tùy chọn</span>
              </label>
              <textarea
                id="note"
                rows={2}
                placeholder="Ví dụ: Em muốn hỏi về cơ hội việc làm sau 35 tuổi..."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-white text-[#1e1b15] placeholder:text-[#707976]/60 border border-[#eee7dc] focus:outline-none focus:ring-2 focus:ring-[#003931] focus:border-transparent shadow-sm text-sm"
              />
            </div>

            {/* Privacy check */}
            <div className="flex items-center gap-2 pt-1 text-[#404946] text-xs">
              <span className="material-symbols-outlined text-[#2c685d] text-base shrink-0">
                shield
              </span>
              <span>SUTO CARE cam kết bảo mật 100% thông tin cá nhân và không spam cuộc gọi.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#ffdea6] text-[#271900] font-['Playfair_Display'] text-base md:text-lg uppercase tracking-wider font-bold shadow-lg hover:bg-[#003931] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-[#271900] border-t-transparent rounded-full animate-spin"></div>
                  <span>ĐANG XỬ LÝ...</span>
                </div>
              ) : (
                <>
                  <span className="material-symbols-outlined text-xl">send</span>
                  <span>NHẬN LỊCH HỌC VÀ LINK ZOOM</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
