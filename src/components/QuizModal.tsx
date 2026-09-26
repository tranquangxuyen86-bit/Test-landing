import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/workshopData";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToRegister: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onProceedToRegister,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (index: number) => {
    const updated = [...selectedAnswers, index];
    setSelectedAnswers(updated);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsFinished(false);
  };

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

        {!isFinished ? (
          <>
            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#7c5641]">
                <span>TRẮC NGHIỆM ĐỘ HỢP NGHỀ DƯỠNG SINH</span>
                <span>Câu {currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-2 bg-[#eee7dc] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#003931] transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                ></div>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#003931] mt-2">
                {currentQ.question}
              </h3>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="p-4 rounded-xl border border-[#eee7dc] text-left hover:border-[#003931] hover:bg-[#faf3e8] transition-all flex flex-col gap-1 cursor-pointer group"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#eee7dc] text-[#003931] group-hover:bg-[#003931] group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="font-medium text-sm text-[#1e1b15] group-hover:text-[#003931]">
                      {opt.label}
                    </span>
                  </div>
                  <span className="text-xs text-[#7c5641] pl-8">
                    {opt.description}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Result View */
          <div className="flex flex-col items-center text-center gap-4 py-2">
            <div className="w-16 h-16 rounded-full bg-[#ffdea6] text-[#271900] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-[#7c5641] font-bold">
                KẾT QUẢ ĐÁNH GIÁ CỦA BẠN
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#003931]">
                ĐỘ PHÙ HỢP VỚI NGHỀ: 95% (RẤT TIỀM NĂNG)
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf3e8] border border-[#eee7dc] text-left flex flex-col gap-2 text-xs sm:text-sm text-[#404946]">
              <div className="flex items-center gap-2 text-[#003931] font-semibold">
                <span className="material-symbols-outlined text-base">task_alt</span>
                <span>Lời khuyên từ chuyên gia SUTO CARE:</span>
              </div>
              <p>
                Bạn có nền tảng tâm lý và mong muốn rất phù hợp với ngành dưỡng sinh Đông y. Nghề này không đòi hỏi sức mạnh cơ bắp gồ ghề mà chú trọng vào lực đẩy của hơi thở, sự tỉ mỉ và tâm huyết chăm sóc người khác.
              </p>
              <p className="font-medium text-[#7c5641]">
                Buổi Zoom 90 phút ngày 15/04 sẽ giúp bạn giải tỏa nốt những băn khoăn về học phí, thời gian và lộ trình học tập tối ưu nhất!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
              <button
                onClick={() => {
                  onClose();
                  onProceedToRegister();
                }}
                className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#ffdea6] text-[#271900] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#003931] hover:text-white transition-all cursor-pointer"
              >
                GIỮ CHỖ THAM GIA LỚP ZOOM
              </button>
              <button
                onClick={handleReset}
                className="py-3 px-4 rounded-xl border border-[#eee7dc] text-[#707976] hover:text-[#1e1b15] text-xs font-semibold hover:bg-[#faf3e8] transition-colors cursor-pointer"
              >
                Làm lại
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
