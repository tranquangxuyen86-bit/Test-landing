import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Outcomes } from "./components/Outcomes";
import { CurriculumTimeline } from "./components/CurriculumTimeline";
import { WhoShouldAttend } from "./components/WhoShouldAttend";
import { Instructor } from "./components/Instructor";
import { PracticalGallery } from "./components/PracticalGallery";
import { Testimonials } from "./components/Testimonials";
import { ExclusiveGifts } from "./components/ExclusiveGifts";
import { FaqAccordion } from "./components/FaqAccordion";
import { RegistrationForm, RegistrationData } from "./components/RegistrationForm";
import { ThankYouModal } from "./components/ThankYouModal";
import { QuizModal } from "./components/QuizModal";
import { EbookPreviewModal } from "./components/EbookPreviewModal";
import { StickyBottomBar } from "./components/StickyBottomBar";
import { Footer } from "./components/Footer";

export default function App() {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [registeredData, setRegisteredData] = useState<RegistrationData | null>(null);

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isEbookOpen, setIsEbookOpen] = useState(false);

  const scrollToRegistration = () => {
    const el = document.getElementById("form-dang-ky");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = document.getElementById("fullname") as HTMLInputElement;
        if (input) input.focus();
      }, 500);
    }
  };

  const handleRegistrationSuccess = (data: RegistrationData) => {
    setRegisteredData(data);
    setIsThankYouOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#1e1b15] font-['Be_Vietnam_Pro',sans-serif] flex flex-col selection:bg-[#ffdea6] selection:text-[#432e00]">
      {/* Top Navbar */}
      <Navbar onOpenRegister={scrollToRegistration} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pt-20">
        {/* Hero Section */}
        <Hero
          onOpenRegister={scrollToRegistration}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Section 2: Pain Points (Bạn Có Đang Băn Khoăn?) */}
        <PainPoints onOpenRegister={scrollToRegistration} />

        {/* Section 3: Outcomes (Sau 90 Phút, Bạn Sẽ Nhận Được Gì?) */}
        <Outcomes />

        {/* Section 4: Timeline 90 phút (Nội Dung Buổi Học Qua Zoom) */}
        <CurriculumTimeline />

        {/* Section 5: Target audience (Buổi Học Này Dành Cho Ai?) */}
        <WhoShouldAttend onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* Section 6: Instructor (Master Mai Phương) */}
        <Instructor onOpenRegister={scrollToRegistration} />

        {/* Section 7: Practical Spa Gallery (Hình Ảnh Thực Tế) */}
        <PracticalGallery />

        {/* Section 8: Testimonials (Học Viên Nói Gì Sau Khi Được Định Hướng?) */}
        <Testimonials />

        {/* Section 9: Exclusive Gifts (Quà Tặng Cho Người Đăng Ký Hôm Nay) */}
        <ExclusiveGifts
          onOpenEbookPreview={() => setIsEbookOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenRegister={scrollToRegistration}
        />

        {/* Section 10: FAQ Accordion */}
        <FaqAccordion />

        {/* Section 11: Registration Form */}
        <RegistrationForm onSuccess={handleRegistrationSuccess} />
      </main>

      {/* Persistent Sticky Bottom Bar with live notification */}
      <StickyBottomBar onOpenRegister={scrollToRegistration} />

      {/* Academy Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
        data={registeredData}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onProceedToRegister={scrollToRegistration}
      />

      <EbookPreviewModal
        isOpen={isEbookOpen}
        onClose={() => setIsEbookOpen(false)}
        onOpenRegister={scrollToRegistration}
      />
    </div>
  );
}
