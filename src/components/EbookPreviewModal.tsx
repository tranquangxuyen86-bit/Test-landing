import React from "react";

interface EbookPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const EbookPreviewModal: React.FC<EbookPreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  if (!isOpen) return null;

  const chapters = [
    {
      number: "Chương 1",
      title: "Tổng quan ngành Spa Dưỡng Sinh Đông Y tại Việt Nam",
      desc: "Nhu cầu thị trường, vì sao nghề dưỡng sinh tăng trưởng mạnh và không lo bị trí tuệ nhân tạo (AI) thay thế.",
    },
    {
      number: "Chương 2",
      title: "Bản đồ huyệt vị và 12 đường kinh lạc cơ bản",
      desc: "Hướng dẫn nhận biết các huyệt đạo then chốt điều trị đau mỏi cổ vai gáy, mất ngủ và đau nửa đầu.",
    },
    {
      number: "Chương 3",
      title: "Kỹ thuật dùng lực 'Khí - Lực - Ý' trong dưỡng sinh",
      desc: "Bí quyết trị liệu 8 tiếng một ngày không bị đuối sức, không mỏi cổ tay và bảo vệ cột sống của kỹ thuật viên.",
    },
    {
      number: "Chương 4",
      title: "Lộ trình 3 giai đoạn từ người mới tinh đến làm chủ Spa",
      desc: "Kế hoạch tích lũy tay nghề, kinh nghiệm vận hành và bảng dự toán chi phí mở spa dưỡng sinh mini thành công.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-3xl bg-white border border-[#eee7dc] shadow-2xl p-6 sm:p-8 flex flex-col gap-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#eee7dc] flex items-center justify-center text-[#404946] hover:text-[#1e1b15] hover:bg-[#e8e2d7] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 pt-1">
          <div className="w-14 h-14 rounded-2xl bg-[#ffdea6] text-[#271900] flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-3xl">auto_stories</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#7c5641] uppercase tracking-wider">
              Tài Liệu Độc Quyền (30 Trang PDF)
            </span>
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#003931]">
              Ebook: Lộ Trình Nghề Dưỡng Sinh Cho Người Mới
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#404946] leading-relaxed">
          Được biên soạn công phu bởi Hội đồng chuyên môn Viện SUTO CARE nhằm giúp người mới có cái nhìn toàn diện, trung thực nhất về nghề.
        </p>

        {/* Chapters Outline */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-[#003931] uppercase tracking-wider">
            Mục lục chính của tài liệu:
          </span>
          <div className="flex flex-col gap-2.5 max-h-[300px] overflow-y-auto pr-1">
            {chapters.map((ch, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#faf3e8] border border-[#eee7dc] flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#7c5641] uppercase">
                    {ch.number}
                  </span>
                  <span className="text-[11px] text-[#2c685d] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">lock</span> Đã mở khóa
                  </span>
                </div>
                <span className="font-semibold text-sm text-[#003931]">{ch.title}</span>
                <p className="text-xs text-[#404946]">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to action */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[#eee7dc]">
          <button
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
            className="w-full py-3.5 rounded-xl bg-[#ffdea6] text-[#271900] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#003931] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">download</span>
            <span>ĐĂNG KÝ ĐỂ NHẬN TRỌN BỘ EBOOK QUA ZALO</span>
          </button>
          <span className="text-center text-[11px] text-[#707976]">
            File PDF bản đẹp sẽ được gửi thẳng vào hộp thư Zalo của bạn kèm link Zoom.
          </span>
        </div>
      </div>
    </div>
  );
};
