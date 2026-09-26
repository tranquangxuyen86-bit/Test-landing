import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "../data/workshopData";

export const PracticalGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="w-full py-16 bg-[#fff8ef]" id="hinh-anh">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Hình ảnh thực tế
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            KHÔNG CHỈ HỌC LÝ THUYẾT – HỌC VIÊN ĐƯỢC TIẾP CẬN NGHỀ THỰC TẾ
          </h2>
          <p className="text-sm md:text-base text-[#404946]">
            Cận cảnh không gian đào tạo chuẩn y khoa ấm cúng và sự tỉ mỉ trong từng thao tác ấn huyệt.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-sm bg-[#eee7dc] h-60 border border-[#eee7dc]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-[#003931] shadow-md">
                    <span className="material-symbols-outlined text-xl">zoom_in</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-['Playfair_Display'] text-base font-bold text-[#003931] group-hover:text-[#2c685d] transition-colors">
                  {item.title}
                </span>
                <p className="text-xs text-[#404946] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-white flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#7c5641] uppercase tracking-wider">
                {selectedImage.tag}
              </span>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#003931]">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#404946]">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
