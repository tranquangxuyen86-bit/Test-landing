export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface CurriculumPart {
  partNumber: number;
  timeRange: string;
  title: string;
  duration: string;
  highlights: string[];
  takeaway: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatarText: string;
  rating: number;
  badge: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface GiftItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  tag: string;
  actionText?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    score: number;
    description: string;
  }[];
}

export const WORKSHOP_CONFIG = {
  title: "Lớp Định Hướng Nghề Dưỡng Sinh Trực Tuyến Qua Zoom",
  headline: "90 Phút Giúp Bạn Hiểu Rõ Nghề Dưỡng Sinh Trước Khi Quyết Định Đi Học",
  subheadline:
    "Dành cho người mới bắt đầu, người muốn chuyển nghề hoặc đang tìm kiếm một công việc thực tế, bền vững trong lĩnh vực chăm sóc sức khỏe chủ động chuẩn Đông y.",
  date: "15/04/2026",
  time: "20:00 – 21:30",
  dayOfWeek: "Thứ Tư",
  platform: "Trực tuyến qua Zoom Meeting",
  price: "Hoàn toàn miễn phí 100%",
  totalSlots: 50,
  remainingSlots: 15,
  hotline: "0989.234.888",
  zaloGroupLink: "https://zalo.me/g/sutocare-k25",
  academyName: "Học Viện SUTO CARE",
  masterName: "Master Mai Phương",
  masterTitle: "Trưởng Ban Đào Tạo Dưỡng Sinh SUTO CARE",
};

export const IMAGES = {
  heroVisual:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBHLv0VC7QU6x6RFjOaTvY8l9dB-Ao8mLK8R-rEWohLhxXLGHRN7pN-6cOejBpUjPzZl2NpQuRRY12v_vGp-V1-283e_OcuzYgaitadzc_ASGd-udG0zc_P4c9ypU3OtOT_tttMAsKqhklVECCFeKdHbx-_jpOqZICF1BoBv0ci4mXUqGkxqui_g5yluLt3n8alBaZ1NjV2n5_gJFZ0AoC6vPzwIm4e4joLBTKe5PRys7RLoa9zAJrA",
  masterMaiPhuong:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAnSd5brh0MwUE87-DsySlRjYzTZYmHnZg0q3wNC5JMp1X-tnblQ_H9zh9ztVlKWyYxwe2IVA9k90LUe1CIrAseKEaOZLnKbRimvx_k3RJhs_L6oMMmhL3ClK2eKex2K0sPuVtSf23sv7p75FLNXDM8BDSELna9bAY_-wfHHihulmZzZX1jLfkjocBwmW2BtjH7F4stzZgmTNcw5P9AuEw-pvFl8N__L2ouwHdO8pniLDV9t2YiIime",
  gallery1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBCdyVOFQhAmZZYyKZJ_E07r5zt4G4uDdasf92edk2YKkVFyG3KOLORq1wIFCXGsiqtHFC_t045yBGEU-N2mvkjkaQKwZEx7Pz4lPBKhKB9FG-aCcXTHwUHSRwxViI_kRkOpBTtTpZhIkgVfARwDoi7G0TugVA0uyswpz06Z_lRcGS-LJhhqheZ-QNt6RdrhE623rLE64J8XJHQJ4qcw3C1XCZwaBIuF4IyhtP6EZRHGzS-SHG-qK6j",
  gallery2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBM1zMPkzdnRIYab0YZMpFTpYysFq6aosiGuj8ZtQFqSh-Z6ObVq1CRvnxAl4iycXzkWF5MfFHIEyN8yQOWDEZsXHFuhW93snMuLRZFvSGm5mdpbbjUAS9J5esgHMXjJks2PHKvqFpJSkplICGh_BzpQND9ctXhhg4EFBr-ulaiivYdnp71xem2n89v3pw6-bemLZcLl_Yjxs5RZBd_coUrGcQPLo39YcBz5f2IUMW9iRmoEZy_nl2Z",
  gallery3:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAfIExxzmLXHq3UIHzdyhVtAfZjabfbAKeBi3bsDXqBD5D0M4jO1humCDey2LUfFEyD5D0xWJY0wkIilzJNdzhqMiuckyvUQ1LN5O4pnzwfAlGnyM2xAaA4rmfCAQGJLtA6ZJle-IVcZUEpWj2TtSkS8gAtS2TYamqkrff_wBEWuRdj4dFrsNqN19cyQzTsrhhT6hvMw7DIuh4zC_DnQ5ZnzXMBHfcn4tR-SZbcWnwbAMItsd_nxOZz",
  gallery4:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBc8WOxhet87jfKM4TOPF43PwJ2rcVSNDdZhvTsCVrWiAx7QryYLT1qgHCkp321mJwg127O8xiZAMSPm1E_My01PMITkyK5OC16ksuTsZyzLlZHL1tvwayZ96C2zspdECyijDyv6-Cuv04e5PxNrlhLVHCFgco4bsJ539RNPh7yIJ5txDVr5m2W_0_V5hPluAalcvLr0wDQLhBHsaBfQmDYTXXdi84MUcpnFcnZLIGaPTyoayCUos1_",
};

export const HERO_BULLETS = [
  {
    icon: "check_circle",
    text: "Hiểu rõ kỹ thuật viên dưỡng sinh thực tế làm những công việc gì",
  },
  {
    icon: "schema",
    text: "Biết nên học kỹ thuật và nội dung nào trước, tránh học lan man",
  },
  {
    icon: "psychology",
    text: "Tự xác định bản thân có thực sự phù hợp với nghề dưỡng sinh",
  },
  {
    icon: "trending_up",
    text: "Nhận lộ trình rõ ràng từ người mới tinh đến khi hành nghề tự tin",
  },
];

export const PAIN_POINTS = [
  {
    icon: "help_center",
    title: "Không biết bắt đầu từ đâu?",
    description:
      "Muốn học nghề dưỡng sinh nhưng biển thông tin trên mạng quá nhiều, khóa nào cũng hứa hẹn thu nhập khủng nhưng không rõ thực tế học gì.",
    iconColor: "text-secondary",
  },
  {
    icon: "paid",
    title: "Lo mất tiền học phí oan?",
    description:
      "Sợ đóng học phí từ 15-30 triệu rồi mới phát hiện thể lực không đủ, không hợp nghề hoặc phương pháp dạy chỉ là lý thuyết cưỡi ngựa xem hoa.",
    iconColor: "text-error",
  },
  {
    icon: "menu_book",
    title: "Chưa rõ kiến thức cần học?",
    description:
      "Bối rối không biết cần tích lũy những kỹ thuật cơ xương khớp, huyệt đạo hay bài bản gội dưỡng sinh nào thì mới đủ tiêu chuẩn đi làm tại spa.",
    iconColor: "text-surface-tint",
  },
  {
    icon: "upgrade",
    title: "Thiếu lộ trình thăng tiến?",
    description:
      "Đang làm kỹ thuật viên nhưng cảm thấy bế tắc, lặp lại máy móc, chưa có phác đồ bài bản để tăng thu nhập hoặc chuẩn bị hành trang mở spa riêng.",
    iconColor: "text-tertiary",
  },
];

export const OUTCOMES = [
  {
    number: "01",
    title: "HIỂU ĐÚNG VỀ NGHỀ DƯỠNG SINH",
    description:
      "Nắm bắt môi trường làm việc thực tế, thời gian biểu của kỹ thuật viên, mức thu nhập trung bình theo từng giai đoạn và cơ hội phát triển bền vững cho phụ nữ ở mọi lứa tuổi.",
  },
  {
    number: "02",
    title: "BIẾT LỘ TRÌNH HỌC PHÙ HỢP",
    description:
      "Biết chính xác kỹ thuật nào nên học trước (xoa bóp day ấn huyệt, thông kinh lạc, vai gáy) và kỹ thuật chuyên sâu nào học sau để nhanh chóng đi làm kiếm thu nhập.",
  },
  {
    number: "03",
    title: "QUAN SÁT THAO TÁC THỰC TẾ",
    description:
      "Trực tiếp chứng kiến chuyên gia thị phạm các động tác dưỡng sinh tiêu chuẩn Đông y, hiểu được sự phối hợp giữa lực tay, hơi thở và định vị chuẩn xác hệ thống huyệt vị.",
  },
  {
    number: "04",
    title: "XÁC ĐỊNH HƯỚNG ĐI TIẾP THEO",
    description:
      "Lựa chọn lối đi rõ ràng: học nghề vững vàng để xin việc ngay tại các chuỗi spa lớn, nâng cao tay nghề để nhận lương cao hơn, hay chuẩn bị tài chính và kinh nghiệm để tự mở spa.",
  },
];

export const CURRICULUM: CurriculumPart[] = [
  {
    partNumber: 1,
    timeRange: "20:00 - 20:20 (20 Phút)",
    title: "HIỂU ĐÚNG VỀ NGHỀ DƯỠNG SINH ĐÔNG Y",
    duration: "20 phút",
    highlights: [
      "Bản chất nghề dưỡng sinh: Chăm sóc sức khỏe tự nhiên kết hợp y học cổ truyền.",
      "Một ngày làm việc thực tế của kỹ thuật viên: Thời gian, cường độ, tính chất môi trường.",
      "Những hiểu lầm tai hại: Phải có sức khỏe vạm vỡ mới làm được? Hay chỉ là xoa bóp bình thường?",
    ],
    takeaway: "Giải tỏa tâm lý e ngại thể lực và định hình tư duy y đức chuẩn mực.",
  },
  {
    partNumber: 2,
    timeRange: "20:20 - 20:45 (25 Phút)",
    title: "LỘ TRÌNH HỌC NGHỀ BÀI BẢN TỪ SỐ 0",
    duration: "25 phút",
    highlights: [
      "Học viên mới tinh nên bắt đầu từ module nào: Gội đầu dưỡng sinh, Vai Cổ Gáy hay Body?",
      "Hệ thống kiến thức cốt lõi: 12 đường kinh lạc, huyệt vị then chốt và cơ chế vận hành khí huyết.",
      "Phương pháp học cầm tay chỉ việc: Lý do 80% thời lượng cần dành cho thực hành trên mẫu thật.",
    ],
    takeaway: "Tiết kiệm tối thiểu 6 tháng học lan man và tránh tốn học phí vô ích.",
  },
  {
    partNumber: 3,
    timeRange: "20:45 - 21:05 (20 Phút)",
    title: "QUAN SÁT THAO TÁC THỰC TẾ TRỰC TIẾP TRÊN ZOOM",
    duration: "20 phút",
    highlights: [
      "Giảng viên thị phạm trực tiếp góc quay cận cảnh thao tác ấn huyệt Bách Hội, Phong Trì, Kiên Tỉnh.",
      "Cách dồn lực từ hơi thở và trọng tâm cơ thể giúp kỹ thuật viên làm việc cả ngày không bị mỏi tay.",
      "Phân tích lỗi sai 90% người tự học trên mạng thường mắc phải dẫn đến tổn thương cơ khách hàng.",
    ],
    takeaway: "Nắm bí quyết dùng lực cơ thể 'Lực sâu - Tay nhẹ - Đã thông huyệt'.",
  },
  {
    partNumber: 4,
    timeRange: "21:05 - 21:30 (25 Phút)",
    title: "ĐỊNH HƯỚNG CON ĐƯỜNG & GIẢI ĐÁP Q&A 1:1",
    duration: "25 phút",
    highlights: [
      "Tư vấn cá nhân hóa: Đi làm hưởng lương hay tự tích lũy vốn mở spa riêng?",
      "Hỏi đáp mở trực tiếp cùng Giảng viên: Bất kỳ câu hỏi nào về học phí, thời gian và việc làm.",
      "Chia sẻ bí quyết tìm việc tại các chuỗi spa uy tín không lo bị nợ lương.",
    ],
    takeaway: "Có ngay kế hoạch hành động cá nhân hóa phù hợp điều kiện tài chính và gia đình.",
  },
];

export const WHO_SHOULD_ATTEND = [
  {
    icon: "person_search",
    title: "Người Chưa Có Kinh Nghiệm",
    description:
      "Chưa từng tiếp xúc với spa hay massage, muốn tìm hiểu kỹ lưỡng về tính chất công việc trước khi đầu tư thời gian và học phí.",
    badge: "Bắt đầu từ số 0",
  },
  {
    icon: "published_with_changes",
    title: "Người Muốn Chuyển Nghề",
    description:
      "Mẹ bỉm sữa, công nhân viên văn phòng hoặc lao động tự do đang tìm kiếm nghề mới có thu nhập tốt hơn, chủ động thời gian và không lo bị đào thải.",
    badge: "Thu nhập bền vững",
  },
  {
    icon: "engineering",
    title: "Kỹ Thuật Viên Thiếu Lộ Trình",
    description:
      "Đang làm dịch vụ tại các cơ sở nhưng làm theo quán tính, muốn chuẩn hóa kiến thức Đông y bài bản để nâng tầm tay nghề và gia tăng thu nhập.",
    badge: "Chuẩn hóa tay nghề",
  },
  {
    icon: "storefront",
    title: "Người Có Dự Định Mở Spa",
    description:
      "Cần nắm vững chuyên môn cốt lõi để biết cách tuyển dụng, đào tạo nhân sự và kiểm soát chất lượng dịch vụ của cơ sở spa tương lai.",
    badge: "Làm chủ kinh doanh",
  },
];

export const INSTRUCTOR_STATS = [
  {
    icon: "workspace_premium",
    title: "10+ Năm Kinh Nghiệm",
    description: "Thực chiến trị liệu cơ xương khớp & dưỡng sinh chuyên sâu",
  },
  {
    icon: "groups",
    title: "1,500+ Học Viên",
    description: "Đã được đào tạo và làm việc tại các chuỗi spa toàn quốc",
  },
  {
    icon: "real_estate_agent",
    title: "Vận Hành Thực Tế",
    description: "Trực tiếp điều hành chuỗi cơ sở SUTO CARE tại Hà Nội & TP.HCM",
  },
  {
    icon: "support_agent",
    title: "Đồng Hành 1:1",
    description: "Tận tâm giải đáp mọi vướng mắc cả trong và sau khóa học",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Cầm Tay Chỉ Việc Từng Huyệt Vị",
    description: "Chỉnh sửa chuẩn từng milimet lực ấn và tư thế đứng trị liệu.",
    imageUrl: IMAGES.gallery1,
    tag: "Thực hành lâm sàng",
  },
  {
    id: 2,
    title: "Gội Đầu Dưỡng Sinh & Đả Thông Kinh Lạc",
    description: "Kỹ thuật chuông xoay, canh thảo dược xông ấm da đầu thư giãn sâu.",
    imageUrl: IMAGES.gallery2,
    tag: "Liệu trình cổ truyền",
  },
  {
    id: 3,
    title: "Không Gian Spa Cổ Truyền Sang Trọng",
    description: "Trang bị đầy đủ phòng thực hành giường gội, giường massage chuẩn mẫu.",
    imageUrl: IMAGES.gallery3,
    tag: "Không gian chuẩn y khoa",
  },
  {
    id: 4,
    title: "Đánh Giá & Chỉnh Sửa Định Kỳ",
    description: "Kiểm tra sát hạch nghiêm ngặt để đảm bảo 100% học viên tự tin hành nghề.",
    imageUrl: IMAGES.gallery4,
    tag: "Kiểm định tay nghề",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Trước đây mình làm kế toán áp lực quá, muốn chuyển sang nghề chăm sóc sức khỏe nhưng sợ mình yếu tay không làm được. Nhờ buổi Zoom 90 phút của cô Phương, mình hiểu ra dưỡng sinh dùng lực toàn thân chứ không phải gồng cơ tay. Nay mình đã đi làm tại spa được 6 tháng, thu nhập ổn định và thấy yêu đời hơn hẳn.",
    name: "Chị Thùy Linh (32 tuổi)",
    role: "Cựu kế toán - Nay là KTV SUTO CARE",
    avatarText: "TL",
    rating: 5,
    badge: "Chuyển nghề thành công",
  },
  {
    quote:
      "Mình định mở spa ở quê nhưng không biết cần những máy móc gì và học bài bản thế nào. Nghe cô chia sẻ về các sai lầm khi mua máy móc thừa thãi giúp mình tiết kiệm cả trăm triệu đồng đầu tư! Buổi zoom cực kỳ bổ ích và cô chia sẻ rất chân tình, không hề chèo kéo.",
    name: "Chị Hoàng Nga (38 tuổi)",
    role: "Chủ Spa Dưỡng Sinh tại Bắc Ninh",
    avatarText: "HN",
    rating: 5,
    badge: "Khởi nghiệp Spa",
  },
  {
    quote:
      "Em là mẹ bỉm muốn tìm việc làm thêm. Tham gia buổi zoom em mới biết lộ trình học gội đầu dưỡng sinh và vai gáy chỉ mất vài tuần là có thể tự tin làm khách. Rất cảm ơn đội ngũ SUTO CARE đã tổ chức lớp học miễn phí nhưng chất lượng vượt mong đợi như thế này!",
    name: "Bạn Mai Hoa (25 tuổi)",
    role: "Học viên khóa K24",
    avatarText: "MH",
    rating: 5,
    badge: "Học viên xuất sắc",
  },
];

export const GIFTS: GiftItem[] = [
  {
    id: 1,
    title: "Ebook: Lộ Trình Nghề Dưỡng Sinh Cho Người Mới",
    description:
      "Tổng hợp 30 trang hướng dẫn chi tiết các bước từ khi chưa biết gì đến khi trở thành kỹ thuật viên cứng tay nghề.",
    icon: "auto_stories",
    tag: "Tài liệu độc quyền 30 trang",
    actionText: "Xem trước mục lục",
  },
  {
    id: 2,
    title: "Bộ Câu Hỏi Trắc Nghiệm Đánh Giá Độ Hợp Nghề",
    description:
      "Phiếu tự đánh giá giúp bạn kiểm tra các tố chất: độ khéo léo, tính kiên nhẫn, thể lực và tâm lý chăm sóc khách hàng.",
    icon: "fact_check",
    tag: "Trắc nghiệm 1 phút",
    actionText: "Làm test ngay",
  },
  {
    id: 3,
    title: "Buổi Tư Vấn 1:1 Định Hướng Nghề Nghiệp",
    description:
      "20 phút trao đổi trực tiếp cùng chuyên viên tuyển sinh và đào tạo để tìm kiếm giải pháp học tập phù hợp ngân sách và thời gian của bạn.",
    icon: "support_agent",
    tag: "Suất giới hạn 50 người",
    actionText: "Đăng ký nhận",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "1. Khóa học qua Zoom này có thực sự miễn phí không?",
    answer:
      "Hoàn toàn miễn phí 100%. SUTO CARE tổ chức lớp định hướng này định kỳ nhằm giúp các bạn quan tâm hiểu đúng về ngành nghề trước khi đưa ra quyết định học tập, tránh việc học theo trào lưu gây lãng phí tiền bạc.",
  },
  {
    id: 2,
    question: "2. Tôi chưa từng biết gì về spa hay dưỡng sinh thì có tham gia được không?",
    answer:
      "Lớp học này sinh ra chính là để dành cho những người chưa biết gì hoặc muốn chuyển nghề từ lĩnh vực khác. Nội dung được trình bày từ tốn, trực quan, dễ hiểu và không dùng thuật ngữ y khoa phức tạp.",
  },
  {
    id: 3,
    question: "3. Tôi tham gia qua ứng dụng Zoom như thế nào?",
    answer:
      "Bạn chỉ cần cài đặt ứng dụng Zoom trên điện thoại hoặc máy tính. Sau khi đăng ký qua biểu mẫu bên dưới, ban tổ chức sẽ gửi link và mã phòng Zoom trực tiếp qua số Zalo của bạn trước giờ học 30 phút.",
  },
  {
    id: 4,
    question: "4. Tôi cần chuẩn bị những gì cho buổi học?",
    answer:
      "Bạn chỉ cần chuẩn bị một không gian yên tĩnh, kết nối mạng internet ổn định, một quyển sổ tay và một cây bút để ghi chép lại những kinh nghiệm thực chiến đắt giá từ chuyên gia.",
  },
  {
    id: 5,
    question: "5. Trong buổi Zoom có ép mua khóa học hay đóng cọc không?",
    answer:
      "Tuyệt đối không! SUTO CARE tôn trọng quyền tự quyết của từng học viên. Buổi học tập trung 100% vào định hướng nghề, phân tích thực tế và giải đáp thắc mắc. Bạn hoàn toàn thoải mái lắng nghe và suy nghĩ kỹ sau buổi học.",
  },
  {
    id: 6,
    question: "6. Nếu bận vào giờ đó tôi có được xem lại video không?",
    answer:
      "Để đảm bảo tính tương tác cao và hỗ trợ phần Q&A trực tiếp, lớp học sẽ không phát lại toàn bộ. Tuy nhiên những ai đã đăng ký sẽ được gửi bản tóm tắt các điểm then chốt qua Zalo sau buổi học.",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Mục tiêu lớn nhất hiện tại của bạn khi tìm hiểu ngành Dưỡng Sinh là gì?",
    options: [
      {
        label: "Tìm một nghề mới có việc làm ngay, thu nhập ổn định 10 - 20 triệu/tháng",
        score: 3,
        description: "Phù hợp định hướng đi làm KTV tại các viện dưỡng sinh lớn.",
      },
      {
        label: "Học bài bản để chuẩn bị mở spa dưỡng sinh mini hoặc cơ sở tại nhà",
        score: 4,
        description: "Rất tiềm năng cho mô hình kinh doanh khởi nghiệp ít vốn.",
      },
      {
        label: "Chăm sóc sức khỏe xương khớp, cổ vai gáy cho người thân và chính mình",
        score: 3,
        description: "Mục đích nhân văn, giúp gia đình phòng ngừa thoái hóa.",
      },
      {
        label: "Đang làm spa/thẩm mỹ, muốn nâng cấp thêm dịch vụ dưỡng sinh Đông y",
        score: 4,
        description: "Gia tăng doanh thu đáng kể cho spa hiện tại.",
      },
    ],
  },
  {
    id: 2,
    question: "Bạn đánh giá thế nào về thể lực và độ khéo léo của đôi bàn tay?",
    options: [
      {
        label: "Thể lực bình thường, tay mềm mại, kiên nhẫn khi tỉ mỉ làm đẹp",
        score: 4,
        description: "Rất thuận lợi! Dưỡng sinh dùng trọng lực cơ thể chứ không gồng tay.",
      },
      {
        label: "Thể lực tốt, thích các hoạt động vận động và trị liệu",
        score: 4,
        description: "Tuyệt vời cho các liệu trình trị liệu cơ xương khớp chuyên sâu.",
      },
      {
        label: "Thể lực hơi yếu một chút, sợ mỏi tay khi làm dịch vụ lâu",
        score: 3,
        description: "Khóa Zoom sẽ hướng dẫn bạn phương pháp dồn lực bằng hơi thở không mỏi!",
      },
    ],
  },
  {
    id: 3,
    question: "Quỹ thời gian bạn có thể dành để học nghề là bao lâu?",
    options: [
      {
        label: "Học cấp tốc 2 - 4 tuần để sớm ra nghề đi làm kiếm tiền",
        score: 4,
        description: "Phù hợp các khóa cầm tay chỉ việc chuyên sâu 80% thực hành.",
      },
      {
        label: "Học linh hoạt buổi tối hoặc cuối tuần kết hợp công việc hiện tại",
        score: 3,
        description: "Rất phù hợp lộ trình kết hợp Zoom lý thuyết và thực hành cuối tuần.",
      },
      {
        label: "Học chuyên sâu 2-3 tháng bài bản toàn diện từ gội đầu, vai gáy đến body",
        score: 4,
        description: "Lộ trình hoàn hảo để trở thành Kỹ thuật viên cứng hoặc Master.",
      },
    ],
  },
  {
    id: 4,
    question: "Điều gì khiến bạn lo lắng nhất lúc này?",
    options: [
      {
        label: "Sợ học xong không xin được việc hoặc tay nghề yếu không dám làm khách",
        score: 3,
        description: "SUTO CARE cam kết hỗ trợ việc làm và kèm cặp đến khi vững tay nghề.",
      },
      {
        label: "Sợ đóng học phí quá cao mà dạy không tận tâm",
        score: 3,
        description: "Lớp Zoom 90 phút này giúp bạn kiểm chứng chất lượng hoàn toàn miễn phí!",
      },
      {
        label: "Chưa biết chọn trung tâm nào uy tín, sợ lý thuyết suông",
        score: 4,
        description: "Buổi Zoom sẽ thị phạm thực tế trực tiếp trước mắt bạn.",
      },
    ],
  },
];
