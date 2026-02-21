/**
 * EXOBIO AI Tư vấn Da Chatbot
 * @description EXOBIO là serum dưỡng da 357 cao cấp bắt đầu từ phòng khám da liễu - 32 câu hỏi và câu trả lời về chăm sóc da
 * @version 1.0.0
 * @language vi (Vietnamese - Tiếng Việt)
 * @lastUpdated 2026-02-21
 * @totalQuestions 32
 */

const CHATBOT_DATA = {
  version: '1.0.0',
  lastUpdated: '2026-02-21',
  language: 'vi',
  totalQuestions: 32,
  
  // 🗂️ Danh mục (10 categories)
  categories: [
    'Nếp nhăn/Chống lão hóa',       // Wrinkles/Anti-aging
    'Dưỡng trắng/Sắc tố',           // Whitening/Pigmentation
    'Mụn/Da có vấn đề',             // Acne/Trouble
    'Lỗ chân lông',                 // Pores
    'Đàn hồi/Nâng da',              // Elasticity/Lifting
    'Cấp ẩm',                       // Hydration
    'Làm dịu/Da nhạy cảm',          // Soothing/Sensitive
    'Cách sử dụng',                 // Usage
    'Thông tin sản phẩm',           // Product Info
    'An toàn'                       // Safety
  ],
  
  // 💬 32 Q&A Data
  qaList: [
    // ============================================================
    // Nếp nhăn/Chống lão hóa (Wrinkles/Anti-aging) - 4 items
    // ============================================================
    {
      id: 'wrinkles-01',
      keywords: ['nếp nhăn', 'chống lão hóa', 'xóa nhăn', 'chăm sóc nếp nhăn', 'lão hóa'],
      category: 'Nếp nhăn/Chống lão hóa',
      question: 'Nếp nhăn',
      answer: `Chúng tôi khuyên dùng **EXOSOME 5** để cải thiện nếp nhăn

Công nghệ Exosome 357™ phục hồi độ đàn hồi của da và chăm sóc từ nếp nhăn nhỏ đến nếp nhăn sâu

💡 **Cách sử dụng**: Bước đầu tiên sau khi rửa mặt, sáng và tối`,
      relatedQuestions: ['Nếp nhăn nhỏ', 'Nếp nhăn quanh mắt', 'Nếp nhăn nụ cười'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['nếp nhăn nhỏ', 'nhăn nhỏ', 'nhăn nông'],
      category: 'Nếp nhăn/Chống lão hóa',
      question: 'Nếp nhăn nhỏ',
      answer: `Bắt đầu với **RED 5** cho nếp nhăn nhỏ ở giai đoạn đầu

Sản phẩm chăm sóc hàng ngày để sử dụng mỗi ngày

Nếu bạn muốn cải thiện nhanh hơn, hãy kết hợp với **EXOSOME 5** sử dụng 3-4 lần mỗi tuần`,
      relatedQuestions: ['Nếp nhăn', 'Nếp nhăn quanh mắt'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['nếp nhăn quanh mắt', 'chăm sóc mắt', 'nếp nhăn chân chim'],
      category: 'Nếp nhăn/Chống lão hóa',
      question: 'Nếp nhăn quanh mắt',
      answer: `Chúng tôi khuyên dùng **EXOSOME 5** để cải thiện nếp nhăn quanh mắt

💡 **Cách sử dụng**: Thoa nhẹ nhàng trên vùng quanh mắt
⚠️ **Lưu ý**: Tránh để sản phẩm vào mắt`,
      relatedQuestions: ['Nếp nhăn', 'Nếp nhăn nhỏ'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['nếp nhăn nụ cười', 'rãnh mũi má', 'nếp gấp má'],
      category: 'Nếp nhăn/Chống lão hóa',
      question: 'Nếp nhăn nụ cười',
      answer: `Chúng tôi khuyên dùng **EXOSOME 5** + **RED 5** để chăm sóc kép cho nếp nhăn sâu

💡 **Lịch sử dụng**:
- Sáng: RED 5 (Chăm sóc hàng ngày)
- Tối: EXOSOME 5 (3-4 lần/tuần, Chăm sóc tập trung)`,
      relatedQuestions: ['Nếp nhăn', 'Nếp nhăn nhỏ'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Dưỡng trắng/Sắc tố (Whitening/Pigmentation) - 4 items
    // ============================================================
    {
      id: 'whitening-01',
      keywords: ['dưỡng trắng', 'làm sáng da', 'sáng da', 'tông da đều'],
      category: 'Dưỡng trắng/Sắc tố',
      question: 'Dưỡng trắng',
      answer: `Chúng tôi khuyên dùng **EXOSOME 3** để làm sáng da

Thành phần vitamin nồng độ cao (VITA 620,000 PPM) giúp da sáng và trong trẻo

💡 **Cách sử dụng**: Sử dụng 3-4 lần mỗi tuần, tập trung vào vùng tối màu`,
      relatedQuestions: ['Nám da', 'Đốm nâu', 'Sạm da'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-02',
      keywords: ['nám da', 'đốm nám', 'nám'],
      category: 'Dưỡng trắng/Sắc tố',
      question: 'Nám da',
      answer: `Chúng tôi khuyên dùng **EXOSOME 3** + **RED 3** cho nám da

💡 **Phương pháp chăm sóc tập trung**:
1. RED 3: Chăm sóc hàng ngày (Sáng & Tối)
2. EXOSOME 3: Chăm sóc tập trung 3-4 lần/tuần
3. Lưu ý: Sử dụng kem chống nắng là bắt buộc!`,
      relatedQuestions: ['Dưỡng trắng', 'Đốm nâu'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['đốm nâu', 'tàn nhang', 'đốm da'],
      category: 'Dưỡng trắng/Sắc tố',
      question: 'Đốm nâu',
      answer: `Chúng tôi khuyên dùng **EXOSOME 3** để cải thiện đốm nâu

Hoạt chất VITA 620,000 PPM cải thiện sắc tố da

💡 **Mẹo sử dụng**: Thoa tập trung vào vùng có đốm nâu sau khi rửa mặt`,
      relatedQuestions: ['Dưỡng trắng', 'Nám da', 'Sạm da'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-04',
      keywords: ['sạm da', 'sắc tố', 'melanin', 'da xỉn'],
      category: 'Dưỡng trắng/Sắc tố',
      question: 'Sạm da',
      answer: `Chúng tôi khuyên dùng **EXOSOME 3** để cải thiện sạm da

Thành phần trong exosome ức chế sự hình thành melanin

💡 **Cách sử dụng**: Sử dụng 3-4 lần mỗi tuần trên vùng bị sạm da
🌞 **Chú ý**: Sử dụng kem chống nắng là bắt buộc`,
      relatedQuestions: ['Dưỡng trắng', 'Nám da', 'Đốm nâu'],
      productTags: ['EXOSOME 3', 'RED 3']
    },

    // ============================================================
    // Mụn/Da có vấn đề (Acne/Trouble) - 3 items
    // ============================================================
    {
      id: 'acne-01',
      keywords: ['mụn', 'mụn trứng cá', 'nổi mụn', 'mụn đỏ'],
      category: 'Mụn/Da có vấn đề',
      question: 'Mụn',
      answer: `EXOBIO an toàn cho da dễ bị mụn!

🎯 **Sản phẩm khuyến nghị**
- **EXOSOME 7**: Làm dịu và tái tạo
- **RED 7**: Chăm sóc hàng ngày

✨ **Hiệu quả kỳ vọng**
- Làm dịu mụn
- Phục hồi nhanh
- Tăng cường hàng rào da
- Cải thiện vết thâm mụn`,
      relatedQuestions: ['Da có vấn đề', 'Vết thâm mụn'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['da có vấn đề', 'viêm da', 'đỏ da'],
      category: 'Mụn/Da có vấn đề',
      question: 'Da có vấn đề',
      answer: `Chúng tôi khuyên dùng **EXOSOME 7** + **RED 7** cho chăm sóc kép

💡 **Cách sử dụng**:
- EXOSOME 7: 3-4 lần/tuần, tập trung vào vùng có vấn đề
- RED 7: Sử dụng hàng ngày
- Hiệu quả: Làm dịu nhanh, ngăn ngừa tái phát`,
      relatedQuestions: ['Mụn', 'Vết thâm mụn', 'Da nhạy cảm'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['vết thâm mụn', 'vết mụn', 'sẹo', 'sẹo rỗ'],
      category: 'Mụn/Da có vấn đề',
      question: 'Vết thâm mụn',
      answer: `Chúng tôi khuyên dùng **EXOSOME 3** để cải thiện vết thâm mụn

Cải thiện sắc tố (dưỡng trắng) + Làm dịu + Tái tạo

✅ EXOBIO an toàn và có thể sử dụng ngay cả trên da có mụn`,
      relatedQuestions: ['Mụn', 'Da có vấn đề', 'Dưỡng trắng'],
      productTags: ['EXOSOME 3', 'EXOSOME 7']
    },

    // ============================================================
    // Lỗ chân lông (Pores) - 2 items
    // ============================================================
    {
      id: 'pores-01',
      keywords: ['lỗ chân lông', 'lỗ chân lông to', 'thu nhỏ lỗ chân lông'],
      category: 'Lỗ chân lông',
      question: 'Lỗ chân lông',
      answer: `Chúng tôi khuyên dùng **EXOSOME 5** để chăm sóc thu nhỏ lỗ chân lông

💡 **Cách sử dụng**:
- Sử dụng như bước đầu tiên sau khi rửa mặt, sáng và tối
- Tập trung vào vùng lỗ chân lông`,
      relatedQuestions: ['Dầu nhờn', 'Nếp nhăn'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'pores-02',
      keywords: ['dầu nhờn', 'da nhờn', 'tiết dầu'],
      category: 'Lỗ chân lông',
      question: 'Dầu nhờn',
      answer: `Chúng tôi khuyên dùng **RED 7** để kiểm soát dầu nhờn

💡 **Cách sử dụng**: Sử dụng hàng ngày, sáng và tối, sau khi rửa mặt
⚠️ **Lưu ý**: Tránh trộn với các sản phẩm có dầu khác`,
      relatedQuestions: ['Lỗ chân lông', 'Mụn'],
      productTags: ['RED 7', 'EXOSOME 7']
    },

    // ============================================================
    // Đàn hồi/Nâng da (Elasticity/Lifting) - 2 items
    // ============================================================
    {
      id: 'elasticity-01',
      keywords: ['đàn hồi', 'độ săn chắc', 'săn chắc da'],
      category: 'Đàn hồi/Nâng da',
      question: 'Đàn hồi',
      answer: `Chúng tôi khuyên dùng **EXOSOME 5** để tăng cường đàn hồi da

Thành phần Salmon PDRN 10,000 PPM thúc đẩy sản xuất collagen và làm săn chắc da

💡 **Cách sử dụng**: Thoa 3-4 lần mỗi tuần, massage theo hướng đi lên`,
      relatedQuestions: ['Nếp nhăn', 'Chảy xệ', 'Nâng da'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['chảy xệ', 'chảy xệ mặt', 'nâng da'],
      category: 'Đàn hồi/Nâng da',
      question: 'Chảy xệ mặt',
      answer: `Chúng tôi khuyên dùng **EXOSOME 5** + **RED 5** cho chăm sóc kép

💡 **Phương pháp chăm sóc kép**:
- EXOSOME 5: 3-4 lần/tuần (Chăm sóc tập trung)
- RED 5: Sử dụng hàng ngày (Chăm sóc hàng ngày)
- Massage theo hướng đi lên và ra ngoài`,
      relatedQuestions: ['Đàn hồi', 'Nếp nhăn'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Cấp ẩm (Hydration) - 2 items
    // ============================================================
    {
      id: 'hydration-01',
      keywords: ['cấp ẩm', 'độ ẩm', 'giữ ẩm'],
      category: 'Cấp ẩm',
      question: 'Cấp ẩm',
      answer: `Chúng tôi khuyên dùng **RED 5** cho da khô

💡 **Cách sử dụng**: Sử dụng hàng ngày, bước đầu tiên sau khi rửa mặt
💧 **Mẹo**: Thoa lên da ngay sau khi rửa mặt để tăng hiệu quả`,
      relatedQuestions: ['Da khô', 'Da nhạy cảm'],
      productTags: ['RED 5', 'RED 7']
    },
    {
      id: 'hydration-02',
      keywords: ['da khô', 'da căng', 'da thiếu nước'],
      category: 'Cấp ẩm',
      question: 'Da khô',
      answer: `Chúng tôi khuyên dùng **EXOSOME 5** + **EXOSOME 7** cho chăm sóc cao cấp kép

💡 **Hiệu quả tăng cường hàng rào da**:
- Cung cấp độ ẩm sâu + Tăng cường hàng rào
- Sử dụng hàng ngày cùng nhau
- Uống đủ nước!`,
      relatedQuestions: ['Cấp ẩm', 'Da nhạy cảm', 'Hàng rào da'],
      productTags: ['EXOSOME 5', 'EXOSOME 7', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Làm dịu/Da nhạy cảm (Soothing/Sensitive) - 2 items
    // ============================================================
    {
      id: 'soothing-01',
      keywords: ['làm dịu', 'kích ứng', 'mẩn đỏ'],
      category: 'Làm dịu/Da nhạy cảm',
      question: 'Làm dịu',
      answer: `Chúng tôi khuyên dùng **RED 7** cho da nhạy cảm

Cung cấp hiệu quả làm dịu với thành phần nhẹ nhàng mà không gây kích ứng da

✨ **EXOBIO là sản phẩm 3-FREE!**
- Không hương liệu
- Không màu
- Không cồn`,
      relatedQuestions: ['Da nhạy cảm', 'Da có vấn đề', 'Hàng rào da'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'soothing-02',
      keywords: ['da nhạy cảm', 'nhạy cảm', 'da dễ kích ứng', 'rosacea'],
      category: 'Làm dịu/Da nhạy cảm',
      question: 'Da nhạy cảm',
      answer: `Chúng tôi khuyên dùng **EXOSOME 7** cho da nhạy cảm

🌿 **Thành phần CICA 760,000 PPM**:
- Làm dịu tức thì
- Tăng cường hàng rào da
- Giảm đỏ da

💡 **Sử dụng an toàn**: Hệ thống 3-FREE (Không hương liệu/Không màu/Không cồn)`,
      relatedQuestions: ['Làm dịu', 'Da có vấn đề', 'Hàng rào da'],
      productTags: ['EXOSOME 7', 'RED 7']
    },

    // ============================================================
    // Cách sử dụng (Usage) - 3 items
    // ============================================================
    {
      id: 'usage-01',
      keywords: ['cách sử dụng', 'thứ tự sử dụng', 'khi nào dùng', 'hướng dẫn sử dụng'],
      category: 'Cách sử dụng',
      question: 'Cách sử dụng',
      answer: `EXOBIO - Hướng dẫn sử dụng cơ bản

💡 **Thứ tự sử dụng**:
1. Rửa mặt
2. **EXOBIO Serum** (Bước đầu tiên!)
3. Các sản phẩm của bạn (Toner, Serum, Kem)

✅ **Lưu ý quan trọng**:
- Serum EXOBIO có độ nhớt, thoa trực tiếp
- EXOSOME: 3-4 lần/tuần
- RED: Sử dụng hàng ngày

💡 **Mẹo**: Sử dụng sau khi rửa mặt để tăng hiệu quả!

✨ **Thêm vào quy trình hiện có của bạn**
- Không cần thay đổi sản phẩm hiện có
- Chỉ cần thêm EXOBIO vào bước đầu tiên
- Hiệu quả tăng cường⬆️

🌟 **An toàn cho da nhạy cảm với 3-FREE**
- Không hương liệu ❌
- Không màu ❌
- Không cồn ❌`,
      relatedQuestions: ['Lượng sử dụng', 'Sử dụng kết hợp'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-02',
      keywords: ['lượng sử dụng', 'lượng thích hợp', 'bao nhiêu', 'thời gian sử dụng'],
      category: 'Cách sử dụng',
      question: 'Lượng sử dụng',
      answer: `Lượng sử dụng thích hợp cho EXOBIO

💡 **Lượng sử dụng mỗi lần**:
- Thoa 2 lần trên vùng cần chăm sóc

📦 **Thời gian sử dụng mỗi bộ**:
- EXOSOME 1 BỘ (5ml × 5): Khoảng 3-4 tuần (3-4 lần/tuần)
- RED 1 BỘ (15ml × 2): Khoảng 3-4 tuần (Hàng ngày)`,
      relatedQuestions: ['Cách sử dụng', 'Sử dụng kết hợp'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-03',
      keywords: ['sử dụng kết hợp', 'sử dụng cùng nhau', 'dùng nhiều sản phẩm', 'kết hợp'],
      category: 'Cách sử dụng',
      question: 'Sử dụng kết hợp',
      answer: `Có! Có thể sử dụng cùng nhau

💡 **Kết hợp khuyến nghị**:

**1️⃣ Nếp nhăn + Dưỡng trắng**
- EXOSOME 5 hoặc 3: 2-3 lần/tuần xen kẽ

**2️⃣ Tập trung + Hàng ngày**
- EXOSOME (3-4 lần/tuần) + RED (Hàng ngày)
- Khuyên dùng cùng số (3, 5, hoặc 7)

**3️⃣ Nhiều mối quan tâm**
- RED (Ban ngày) + EXOSOME (Ban đêm)

✅ Có thể sử dụng nhiều sản phẩm EXOBIO cùng nhau!`,
      relatedQuestions: ['Cách sử dụng', 'Lượng sử dụng'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Thông tin sản phẩm (Product Info) - 10 items
    // ============================================================
    {
      id: 'product-01',
      keywords: ['EXOSOME', 'RED', 'khác biệt', 'so sánh', 'sự khác biệt'],
      category: 'Thông tin sản phẩm',
      question: 'Sự khác biệt giữa EXOSOME và RED',
      answer: `EXOSOME vs RED - Sự khác biệt

🔬 **EXOSOME (Chăm sóc tập trung)**
- Nồng độ Exosome cao
- Sử dụng 3-4 lần/tuần
- Cải thiện nhanh
- Cho các vấn đề da nghiêm trọng

💚 **RED (Chăm sóc hàng ngày)**
- Công thức cân bằng
- Sử dụng hàng ngày
- Thành phần nhẹ nhàng
- Phù hợp cho sử dụng hàng ngày

💡 **Hướng dẫn lựa chọn**:
- Các vấn đề nghiêm trọng → EXOSOME
- Chăm sóc hàng ngày → RED
- Hiệu quả tốt nhất → Kết hợp cả hai!`,
      relatedQuestions: ['Khuyến nghị sản phẩm', 'Ý nghĩa số 3·5·7'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-02',
      keywords: ['3', '5', '7', 'số', 'ý nghĩa số'],
      category: 'Thông tin sản phẩm',
      question: 'Ý nghĩa số 3, 5, 7',
      answer: `Ý nghĩa số 3️⃣5️⃣7️⃣ của EXOBIO

**3️⃣ EXOSOME/RED 3 - Dưỡng trắng/Sắc tố**
💎 Thành phần VITA 620,000 PPM
- Cải thiện nám da, đốm nâu
- Làm sáng tông da

**5️⃣ EXOSOME/RED 5 - Nếp nhăn/Đàn hồi**
✨ Salmon PDRN 10,000 PPM
- Cải thiện nếp nhăn
- Tăng cường đàn hồi

**7️⃣ EXOSOME/RED 7 - Làm dịu, Cấp ẩm, Hàng rào**
🌿 CICA + EXOSOME 760,000 PPM
- Làm dịu, Da nhạy cảm
- Cấp ẩm, Tăng cường hàng rào da

💡 **Hướng dẫn lựa chọn**:
- Một mối quan tâm → Chọn 1 số
- Nhiều mối quan tâm → Kết hợp 2-3 số!`,
      relatedQuestions: ['Khuyến nghị sản phẩm', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['khuyến nghị', 'chọn sản phẩm', 'sản phẩm phù hợp', 'gợi ý sản phẩm', 'khuyến nghị sản phẩm'],
      category: 'Thông tin sản phẩm',
      question: 'Khuyến nghị sản phẩm',
      answer: `🎯 **Chẩn đoán da AI - Khuyến nghị cá nhân hóa**

Phân tích 10 chỉ số da trong 30 giây
→ Khuyến nghị sản phẩm phù hợp nhất cho bạn!

👉 **https://curetembio.xyz**

💡 **Lựa chọn nhanh theo mối quan tâm**:
- Nếp nhăn → EXOSOME 5
- Dưỡng trắng → EXOSOME 3
- Cấp ẩm/Làm dịu/Hàng rào → EXOSOME 7
- Chăm sóc hàng ngày → Dòng RED`,
      relatedQuestions: ['EXOSOME vs RED', 'Ý nghĩa số 3·5·7'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-04',
      keywords: ['EXOBIO', 'giới thiệu', 'thương hiệu', 'công ty', 'về EXOBIO'],
      category: 'Thông tin sản phẩm',
      question: 'Về EXOBIO',
      answer: `EXOBIO - Giới thiệu thương hiệu

🏥 **Serum chăm sóc tại nhà từ Thiết bị da liễu chuyên nghiệp**

**EXOBIO là gì?**
Serum Exosome được sử dụng thực tế trong các thiết bị da liễu chuyên nghiệp

🔬 **Xuất phát từ thiết bị da liễu chuyên nghiệp**
- **LDM Care**: Tái tạo da siêu âm
- **SONO Care**: Truyền thành phần sâu

→ Serum EXOBIO được sử dụng làm thành phần cốt lõi

💡 **Ai nên sử dụng**:
- Độ tuổi 30: Dấu hiệu lão hóa sớm
- Độ tuổi 40: Chăm sóc chống lão hóa toàn diện
- Sau sinh: Phục hồi da bị hư hại
- Các vấn đề: Nếp nhăn, Nám da, v.v.

📊 **Độ tin cậy**:
- Được các bác sĩ da liễu công nhận
- Tỷ lệ mua lại 61%
- Serum nồng độ cao`,
      relatedQuestions: ['Công dụng', 'LDM Care', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-05',
      keywords: ['LDM', 'LDM Care', 'LDM treatment'],
      category: 'Thông tin sản phẩm',
      question: 'LDM Care',
      answer: `🏥 **LDM Care là gì?**

**LDM (Local Dynamic Micro-massage)**
- Thiết bị tái tạo da dựa trên siêu âm
- Truyền thành phần sâu vào da
- Được sử dụng tại các phòng khám da liễu

💡 **Serum EXOBIO**
→ Là thành phần cốt lõi được sử dụng trong điều trị LDM Care!

✨ **Có thể chăm sóc tại nhà**
Giờ đây bạn có thể trải nghiệm serum tương tự tại nhà`,
      relatedQuestions: ['SONO Care', 'Về EXOBIO'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-06',
      keywords: ['SONO', 'SONO Care', 'SONO treatment'],
      category: 'Thông tin sản phẩm',
      question: 'SONO Care',
      answer: `🏥 **SONO Care là gì?**

**Điều trị chuyên sâu sử dụng serum EXOBIO**
- Truyền thành phần hoạt động sâu vào da
- Được sử dụng tại các phòng khám da liễu
- Có thể chăm sóc tại nhà

💡 **Chăm sóc tại nhà**
Sử dụng với con lăn MTS (0.25mm) để tăng khả năng hấp thụ`,
      relatedQuestions: ['LDM Care', 'Con lăn MTS'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'exosome 3'],
      category: 'Thông tin sản phẩm',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - Chăm sóc làm trắng tập trung**

✨ **BIO 357™ EXOSOME** là serum Exosome357 cao cấp nâng cấp bắt đầu từ phòng khám da liễu và được nhà thuốc công nhận, nâng hiệu quả chăm sóc da lên cấp độ tiếp theo.

🎯 **Thành phần cốt lõi**
- **VITA 620,000 PPM** (Vitamin nồng độ cực cao)
- **EXOSOME 5,000 PPM** (Exosome nồng độ cao)
- Thành phần chức năng làm trắng được chứng nhận

💡 **Hiệu quả chính**
- Cải thiện nám da
- Cải thiện đốm nâu
- Cải thiện sạm da
- Làm đều tông da
- Làm sáng da

📅 **Cách sử dụng**
- **Tần suất**: 3-4 lần/tuần
- **Thời điểm**: Bước đầu tiên sau khi rửa mặt

💰 **Giá**: $80 (5ml × 5 lọ)

💚 **Chăm sóc hàng ngày?** Khuyên dùng RED 3 (Sử dụng hàng ngày)`,
      relatedQuestions: ['RED 3', 'Dưỡng trắng', 'Nám da'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'exosome 5'],
      category: 'Thông tin sản phẩm',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - Chăm sóc độ đàn hồi tập trung**

✨ **BIO 357™ EXOSOME** là serum Exosome357 cao cấp nâng cấp bắt đầu từ phòng khám da liễu và được nhà thuốc công nhận, nâng hiệu quả chăm sóc da lên cấp độ tiếp theo.

🎯 **Thành phần cốt lõi**
- **Salmon PDRN 10,000 PPM** (DNA cá hồi)
- **EXOSOME 5,000 PPM** (Exosome nồng độ cao)
- Thành phần chức năng cải thiện nếp nhăn được chứng nhận

💡 **Hiệu quả chính**
- Cải thiện nếp nhăn sâu
- Phục hồi độ đàn hồi của da
- Chống lão hóa
- Tăng cường độ săn chắc
- Hiệu quả nâng da

📅 **Cách sử dụng**
- **Tần suất**: 3-4 lần/tuần
- **Thời điểm**: Bước đầu tiên sau khi rửa mặt

💰 **Giá**: $80 (5ml × 5 lọ)

💚 **Chăm sóc hàng ngày?** Khuyên dùng RED 5 (Sử dụng hàng ngày)`,
      relatedQuestions: ['RED 5', 'Nếp nhăn', 'Đàn hồi'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'exosome 7'],
      category: 'Thông tin sản phẩm',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - Chăm sóc làm dịu tập trung**

✨ **BIO 357™ EXOSOME** là serum Exosome357 cao cấp nâng cấp bắt đầu từ phòng khám da liễu và được nhà thuốc công nhận, nâng hiệu quả chăm sóc da lên cấp độ tiếp theo.

🎯 **Thành phần cốt lõi**
- **CICA (Chiết xuất rau má)**
- **EXOSOME 760,000 PPM** (Exosome nồng độ cực cao)
- Thành phần làm dịu da

💡 **Hiệu quả chính**
- Cung cấp độ ẩm
- Hiệu quả làm dịu
- Làm dịu mụn, vấn đề da
- Giảm đỏ da
- Cải thiện da nhạy cảm
- Tăng cường hàng rào da
- Thúc đẩy tái tạo da

📅 **Cách sử dụng**
- **Tần suất**: 3-4 lần/tuần
- **Thời điểm**: Bước đầu tiên sau khi rửa mặt

⚡ **Đặc điểm**
- An toàn cho da nhạy cảm
- Chăm sóc da có vấn đề
- Cảm giác làm dịu tức thì

💰 **Giá**: $80 (5ml × 5 lọ)

💚 **Chăm sóc hàng ngày?** Khuyên dùng RED 7 (Sử dụng hàng ngày)`,
      relatedQuestions: ['RED 7', 'Làm dịu', 'Da nhạy cảm'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'red 3'],
      category: 'Thông tin sản phẩm',
      question: 'RED 3',
      answer: `💚 **RED 3 - Chăm sóc làm trắng hàng ngày**

✨ **BIO 357™ RED** là serum 357 hàng ngày bắt đầu từ phòng khám da liễu và được nhà thuốc công nhận, được thiết kế để sử dụng hàng ngày không gây gánh nặng như bước đầu tiên trong quy trình dưỡng da.

🎯 **Thành phần cốt lõi**
- **VITA 620,000 PPM** (Vitamin nồng độ cực cao)
- Thành phần chức năng làm trắng được chứng nhận
- Công thức tối ưu hóa cho sử dụng hàng ngày

💡 **Hiệu quả chính**
- Ngăn ngừa nám da và đốm nâu
- Làm sáng tông da
- Cải thiện da xỉn màu
- Sử dụng hàng ngày giúp da trong suốt hơn

📅 **Cách sử dụng**
- **Tần suất**: Hàng ngày (sáng/tối)
- **Thời điểm**: Bước đầu tiên sau khi rửa mặt

💡 **Chăm sóc hàng ngày + Chăm sóc tập trung**
- Khuyến nghị kết hợp **RED 3** (Hàng ngày) + **EXOSOME 3** (3-4 lần/tuần)
- Tối đa hóa hiệu quả chăm sóc tập trung

💰 **Giá**: $33 (15ml × 2 lọ)

🔬 **Chăm sóc tập trung?** Khuyên dùng EXOSOME 3 (3-4 lần/tuần)`,
      relatedQuestions: ['EXOSOME 3', 'Dưỡng trắng', 'Nám da'],
      productTags: ['RED 3', 'EXOSOME 3']
    },
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'red 5'],
      category: 'Thông tin sản phẩm',
      question: 'RED 5',
      answer: `💚 **RED 5 - Chăm sóc độ đàn hồi hàng ngày**

✨ **BIO 357™ RED** là serum 357 hàng ngày bắt đầu từ phòng khám da liễu và được nhà thuốc công nhận, được thiết kế để sử dụng hàng ngày không gây gánh nặng như bước đầu tiên trong quy trình dưỡng da.

🎯 **Thành phần cốt lõi**
- **Salmon PDRN 10,000 PPM** (DNA cá hồi)
- Thành phần chức năng cải thiện nếp nhăn được chứng nhận
- Công thức tối ưu hóa cho sử dụng hàng ngày

💡 **Hiệu quả chính**
- Ngăn ngừa nếp nhăn li ti
- Duy trì độ đàn hồi của da
- Chống lão hóa
- Sử dụng hàng ngày giúp da đàn hồi hơn

📅 **Cách sử dụng**
- **Tần suất**: Hàng ngày (sáng/tối)
- **Thời điểm**: Bước đầu tiên sau khi rửa mặt

💡 **Chăm sóc hàng ngày + Chăm sóc tập trung**
- Khuyến nghị kết hợp **RED 5** (Hàng ngày) + **EXOSOME 5** (3-4 lần/tuần)
- Chăm sóc tập trung cho nếp nhăn sâu

💰 **Giá**: $37 (15ml × 2 lọ)

🔬 **Chăm sóc tập trung?** Khuyên dùng EXOSOME 5 (3-4 lần/tuần)`,
      relatedQuestions: ['EXOSOME 5', 'Nếp nhăn', 'Đàn hồi'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'red 7'],
      category: 'Thông tin sản phẩm',
      question: 'RED 7',
      answer: `💚 **RED 7 - Chăm sóc làm dịu hàng ngày**

✨ **BIO 357™ RED** là serum 357 hàng ngày bắt đầu từ phòng khám da liễu và được nhà thuốc công nhận, được thiết kế để sử dụng hàng ngày không gây gánh nặng như bước đầu tiên trong quy trình dưỡng da.

🎯 **Thành phần cốt lõi**
- **CICA 7,600 PPM** (Chiết xuất rau má)
- Thành phần làm dịu da
- Công thức tối ưu hóa cho sử dụng hàng ngày

💡 **Hiệu quả chính**
- Cung cấp độ ẩm
- Hiệu quả làm dịu
- Ngăn ngừa mụn và vấn đề da
- Giảm đỏ da
- Quản lý da nhạy cảm
- Sử dụng hàng ngày giúp tăng cường hàng rào bảo vệ da

📅 **Cách sử dụng**
- **Tần suất**: Hàng ngày (sáng/tối)
- **Thời điểm**: Bước đầu tiên sau khi rửa mặt

💡 **Chăm sóc hàng ngày + Chăm sóc tập trung**
- Khuyến nghị kết hợp **RED 7** (Hàng ngày) + **EXOSOME 7** (3-4 lần/tuần)
- Chăm sóc tập trung cho da có vấn đề

💰 **Giá**: $32 (15ml × 2 lọ)

🔬 **Chăm sóc tập trung?** Khuyên dùng EXOSOME 7 (3-4 lần/tuần)`,
      relatedQuestions: ['EXOSOME 7', 'Làm dịu', 'Da nhạy cảm'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'effect-01',
      keywords: ['công dụng', 'hiệu quả', 'kết quả', 'khi nào', 'cải thiện', 'thay đổi'],
      category: 'Thông tin sản phẩm',
      question: 'Công dụng EXOBIO',
      answer: `Công dụng và Hướng dẫn sử dụng sản phẩm EXOBIO

🏥 **Phiên bản chăm sóc tại nhà của Serum da liễu chuyên nghiệp**

EXOBIO là serum thực sự được sử dụng trong các thiết bị điều trị chuyên nghiệp như **LDM Care** và **SONO Care** tại các phòng khám da liễu. Các thành phần được kiểm chứng lâm sàng giờ đây có sẵn cho chăm sóc tại nhà.

💡 **Cách sử dụng - Bước đầu tiên sau khi rửa mặt!**

✨ **Giữ các sản phẩm hiện có của bạn**
- Thêm sản phẩm EXOBIO làm **bước đầu tiên** sau khi rửa mặt
- Tiếp tục sử dụng toner, serum, kem hiện có
- Hiệu quả tăng cường mà không cần thay đổi quy trình! ⬆️

📅 **Khi nào có kết quả**

⏰ **Thay đổi da rõ rệt sau 4 tuần**
- **1-2 tuần**: Cải thiện kết cấu da, tăng độ ẩm
- **3-4 tuần**: Làm sáng tông da, phục hồi độ đàn hồi
- **Sau 4 tuần**: Chuyển đổi toàn diện - cân bằng da ổn định
- **8-12 tuần**: Xác nhận cải thiện tập trung nếp nhăn, nám da

✨ **Ổn định cân bằng da**
- Tăng cường hàng rào bảo vệ da, chống lại kích thích bên ngoài tốt hơn
- Cân bằng độ ẩm-dầu
- Phục hồi sức mạnh tự nhiên của da

🎯 **Chọn sản phẩm hoàn hảo cho bạn**

**Phương pháp 1️⃣: Theo mối quan tâm**
- **3**: Làm trắng, nám da, xỉn màu
- **5**: Nếp nhăn, độ đàn hồi, nâng da
- **7**: Làm dịu, vấn đề da, nhạy cảm, độ ẩm, hàng rào da

**Phương pháp 2️⃣: Chẩn đoán da AI (Khuyến nghị!)** 🎯
- Phân tích 10 chỉ số da trong 30 giây
- Khuyến nghị sản phẩm cá nhân hóa
- Chăm sóc da hiệu quả hơn
- 👉 https://curetembio.xyz

💚 **Chăm sóc tập trung vs Chăm sóc hàng ngày**

**Dòng EXOSOME** (Chăm sóc tập trung)
- Sử dụng 3-4 lần/tuần
- Cải thiện nhanh với thành phần nồng độ cao
- Giải quyết các vấn đề da nghiêm trọng

**Dòng RED** (Chăm sóc hàng ngày)
- Có thể sử dụng hàng ngày
- Chăm sóc liên tục với giá cả phải chăng
- Duy trì cân bằng da

💡 **Phương pháp hiệu quả nhất**
→ **EXOSOME + RED Chăm sóc kép**
→ Kết quả tốt nhất với chăm sóc tập trung + quản lý hàng ngày!

🌟 **Ưu điểm của EXOBIO**
✅ Thành phần điều trị phòng khám chuyên nghiệp
✅ Hiệu quả tăng cường trong khi duy trì quy trình hiện có
✅ Thay đổi rõ ràng sau 4 tuần
✅ Được các bác sĩ da liễu công nhận
✅ Tỷ lệ mua lại 61% (Sự hài lòng của khách hàng được chứng minh)`,
      relatedQuestions: ['Về EXOBIO', 'Khuyến nghị sản phẩm'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },

    // ============================================================
    // An toàn (Safety) - 4 items
    // ============================================================
    {
      id: 'mts-01',
      keywords: ['MTS', 'con lăn derma', 'kim nhỏ', 'con lăn'],
      category: 'Cách sử dụng',
      question: 'Con lăn MTS',
      answer: `Con lăn Derma MTS có thể chăm sóc tại nhà!

🔬 **Cách sử dụng**:
- Khuyến nghị kim nhỏ 0.25mm
- 1-2 lần mỗi tháng
- Thoa sản phẩm EXOBIO sau khi sử dụng MTS

✨ **Hiệu quả**:
- Tăng đáng kể khả năng hấp thụ EXOBIO
- Thúc đẩy tái tạo da
- Kết quả nhanh hơn

⚠️ **Lưu ý**:
- Phải sử dụng 0.25mm hoặc nhỏ hơn
- Tránh sử dụng quá mức
- Chỉ sử dụng khi da trong tình trạng tốt
- Tránh khi da nhạy cảm hoặc có vấn đề

💡 **Thứ tự sử dụng MTS**:
1. Rửa mặt
2. Con lăn MTS (0.25mm)
3. Thoa ngay sản phẩm EXOBIO
4. Kem dưỡng sau khi hấp thụ`,
      relatedQuestions: ['Cách sử dụng', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'safety-02',
      keywords: ['tác dụng phụ', 'phản ứng bất lợi', 'dị ứng'],
      category: 'An toàn',
      question: 'Tác dụng phụ',
      answer: `Tác dụng phụ và Phản ứng bất lợi

✅ **EXOBIO là Sản phẩm An toàn**

⚠️ **Phản ứng hiếm gặp có thể có**:
- Đỏ da tạm thời
- Ngứa nhẹ
- Da bong tróc (Quá trình tái tạo bình thường)

🚨 **Khi nào cần ngừng sử dụng và tham khảo chuyên gia**:
- Ngứa hoặc đỏ da nghiêm trọng
- Phát ban hoặc nổi mề đay
- Sưng da

💡 **Phòng ngừa**:
- Bắt đầu với lượng nhỏ
- Theo dõi tình trạng da`,
      relatedQuestions: ['Độ ổn định sản phẩm', 'Da nhạy cảm'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'safety-03',
      keywords: ['độ ổn định', 'an toàn', 'an toàn', 'xác minh', 'bảo đảm'],
      category: 'An toàn',
      question: 'Độ ổn định sản phẩm',
      answer: `Độ ổn định sản phẩm EXOBIO

✅ **Được xác minh bởi Da liễu & Nhà thuốc**
EXOBIO là serum nồng độ cao được sử dụng trong các điều trị chuyên nghiệp như LDM Care và SONO Care tại các phòng khám da liễu.
Đây là sản phẩm đáng tin cậy được nhà thuốc xác minh, được các chuyên gia da công nhận về độ ổn định.

🔬 **Hệ thống 3-FREE (Thành phần an toàn)**
- ❌ Không hương liệu
- ❌ Không cồn
- ❌ Không màu nhân tạo

→ Có thể sử dụng không gây gánh nặng cho da nhạy cảm!

💡 **Sử dụng bước đầu tiên sau khi rửa mặt**
Sử dụng EXOBIO làm bước đầu tiên sau khi rửa mặt tối đa hóa khả năng hấp thụ da và tăng cường hiệu quả của các sản phẩm hiện có.
Chỉ cần thêm EXOBIO làm bước đầu tiên mà không cần thay đổi quy trình của bạn để có hiệu quả dưỡng da chắc chắn tăng cường⬆️!

📊 **Độ tin cậy được xác minh**
- Serum điều trị phòng khám → Chuyển đổi chăm sóc tại nhà
- Xác minh phân phối nhà thuốc
- Tỷ lệ mua lại của khách hàng 61%
- An toàn được bảo đảm với thành phần 3-FREE

🎯 **Khuyến nghị cho**
- Những người có da nhạy cảm
- Những người thích thành phần an toàn
- Những người muốn chăm sóc tại nhà sau điều trị da liễu
- Những người muốn hiệu quả tăng cường mà không thay đổi quy trình hiện có

📞 **Liên hệ**: curetembio@gmail.com`,
      relatedQuestions: ['Tác dụng phụ', 'Da nhạy cảm'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-07',
      keywords: ['357', 'số 3', 'số 5', 'số 7', 'các số', 'ý nghĩa'],
      category: 'Thông tin sản phẩm',
      question: 'Ý nghĩa số 3·5·7',
      answer: `Giải thích Hệ thống EXOSOME 357

🔢 **357 là gì?**
Hệ thống cốt lõi của EXOBIO, mỗi số tập trung vào các vấn đề da cụ thể!

**Số 3 - Tập trung Làm trắng·Nám da**
💎 EXOSOME 3 / RED 3
- Cải thiện sắc tố da
- Da sáng và trong trẻo
- Thành phần chính: VITA 620,000 PPM

**Số 5 - Tập trung Nếp nhăn·Độ đàn hồi**
✨ EXOSOME 5 / RED 5
- Cải thiện nếp nhăn sâu
- Phục hồi độ đàn hồi
- Thành phần chính: Salmon PDRN 10,000 PPM

**Số 7 - Tập trung Làm dịu·Độ ẩm·Hàng rào**
🌿 EXOSOME 7 / RED 7
- Làm dịu, vấn đề da, nhạy cảm
- Độ ẩm, hàng rào da
- Thành phần chính: CICA + EXOSOME 760,000 PPM

💡 **Hướng dẫn lựa chọn**:
- Quan tâm sắc tố → Số 3
- Quan tâm lão hóa → Số 5
- Nhạy cảm·Vấn đề da → Số 7
- Nhiều mối quan tâm → Có thể kết hợp 2-3!`,
      relatedQuestions: ['Ý nghĩa số 3, 5, 7', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-08',
      keywords: ['giá', 'chi phí', 'bao nhiêu', 'định giá', 'giá bán lẻ'],
      category: 'Thông tin sản phẩm',
      question: 'Giá sản phẩm',
      answer: `Thông tin Giá sản phẩm EXOBIO

💰 **Dòng cao cấp EXOSOME (Nồng độ cao)**

**EXOSOME 3 (Làm trắng·Nám da)**
- 5ml × 5 lọ: **$80**

**EXOSOME 5 (Nếp nhăn·Độ đàn hồi)**
- 5ml × 5 lọ: **$80**

**EXOSOME 7 (Làm dịu·Hàng rào)**
- 5ml × 5 lọ: **$80**

💚 **Dòng RED hàng ngày (Sử dụng hàng ngày)**

**RED 3 (Làm trắng)**
- 15ml × 2 lọ: **$33**

**RED 5 (Nếp nhăn)**
- 15ml × 2 lọ: **$37**

**RED 7 (Làm dịu)**
- 15ml × 2 lọ: **$32**

📦 **Thời gian sử dụng**:
- EXOSOME: Khoảng 3-4 tuần khi sử dụng 3-4 lần/tuần
- RED: Khoảng 3-4 tuần khi sử dụng hàng ngày

💡 **So sánh giá**:
- EXOSOME: Chăm sóc tập trung nồng độ cao ($80)
- RED: Giá chăm sóc hàng ngày phải chăng ($32-37)

🎁 **Lợi ích bổ sung**:
- Chẩn đoán da AI: Miễn phí (https://curetembio.xyz)
- Yêu cầu thông tin: curetembio@gmail.com`,
      relatedQuestions: ['Cách mua hàng', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-09',
      keywords: ['mua hàng', 'cách mua', 'mua sản phẩm', 'mua ở đâu', 'mua sắm', 'nhà thuốc', 'trực tuyến'],
      category: 'Thông tin sản phẩm',
      question: 'Cách mua hàng',
      answer: `Phương thức mua sản phẩm EXOBIO

🏪 **Mua hàng ngoại tuyến**

**Seoul**
- Phòng khám Da liễu DM Apgujeong
- Nhà thuốc tại 4 khu mua sắm chính
  · Myeongdong
  · Hongdae
  · Gangnam
  · Seongsu
  · Đại học Konkuk

**Busan**
- Các địa điểm chính Nampo-dong
- Các địa điểm chính Ga Bujeon

📍 **Thông tin địa điểm chi tiết**
→ https://www.exobio.net/ > PHARMACY

💻 **Mua hàng trực tuyến**

**Cửa hàng chính thức**
🌐 Nhật Bản: https://www.exobio.net/
🇰🇷 Hàn Quốc: https://kr.exobio.net/
🌎 Tiếng Anh: https://en.exobio.net/

**Trung tâm mua sắm quốc tế**
🇯🇵 Q100 NHẬT BẢN: https://www.qoo10.jp/shop/EXOBIO (Tiếng Nhật)
🇨🇳 Trang chính thức(CN): https://cn.curetembio.com/ (Tiếng Trung, thanh toán USD có sẵn trong SHOP)

💬 **Yêu cầu thông tin mua sản phẩm Trung Quốc**
🇨🇳 WeChat: lele620918

💡 **Yêu cầu thông tin mua hàng**
📧 Email: curetembio@gmail.com
🌐 Trang web chính thức: https://www.exobio.net/`,
      relatedQuestions: ['Giá sản phẩm'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-ingredients',
      keywords: ['thành phần', 'thành phần', 'vật liệu', 'nồng độ', 'nồng độ cao'],
      category: 'An toàn',
      question: 'Thành phần chính',
      answer: `Thông tin Thành phần chính EXOBIO

🧪 **Thành phần cốt lõi nồng độ cực cao**

**EXOSOME 3 / RED 3 (Làm trắng)**
💎 Thành phần VITA
- EXOSOME 3: 620,000 PPM (Nồng độ cao) + EXOSOME 5,000 PPM
- RED 3: 620,000 PPM (Hàng ngày)
- Hiệu quả: Cải thiện sắc tố quá mức, làm sáng tông da

**EXOSOME 5 / RED 5 (Nếp nhăn)**
✨ Salmon PDRN (Polydeoxyribonucleotide)
- EXOSOME 5: 10,000 PPM (Nồng độ cao) + EXOSOME 5,000 PPM
- RED 5: 10,000 PPM (Hàng ngày)
- Hiệu quả: Tái tạo da, cải thiện nếp nhăn, tăng cường độ đàn hồi

**EXOSOME 7 / RED 7 (Làm dịu)**
🌿 CICA (Chiết xuất rau má)
- EXOSOME 7: CICA + EXOSOME 760,000 PPM (Nồng độ cao)
- RED 7: 7,600 PPM (Hàng ngày)
- Hiệu quả: Làm dịu đỏ da, tăng cường hàng rào da, độ ẩm

🌟 **Sản phẩm 3-FREE (Ba không)**
❌ Không hương liệu
❌ Không màu
❌ Không cồn
→ An toàn cho da nhạy cảm!

✅ **Chứng nhận an toàn**
- Được các bác sĩ da liễu xác minh
- Thành phần được sử dụng trong điều trị phòng khám (LDM, SONO Care)
- Nguyên liệu thô chất lượng cao được sử dụng

💡 **Hiểu về sự khác biệt nồng độ**:
- EXOSOME: Chăm sóc tập trung 3-4 lần/tuần
- RED: Chăm sóc nhất quán hàng ngày
- Chọn hoặc kết hợp theo mục đích!`,
      relatedQuestions: ['Độ ổn định sản phẩm', 'Tác dụng phụ'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-10',
      keywords: ['hàng rào da', 'hàng rào', 'hàng rào bảo vệ', 'lá chắn'],
      category: 'Làm dịu/Da nhạy cảm',
      question: 'Hàng rào da',
      answer: `Tăng cường Hàng rào da - EXOSOME 7

🛡️ **Hàng rào da là gì?**
Một lớp bảo vệ trên bề mặt da bảo vệ chống lại các chất kích thích bên ngoài và ngăn mất độ ẩm.

**Triệu chứng hàng rào yếu**:
- Dễ bị châm chích và kích ứng
- Khô và căng
- Đỏ da thường xuyên
- Mỹ phẩm không hoạt động tốt

🌿 **Sản phẩm khuyến nghị: EXOSOME 7 / RED 7**

**EXOSOME 7 (Chăm sóc tập trung)**
- CICA 760,000 PPM nồng độ cao
- Sử dụng 3-4 lần/tuần
- Phục hồi nhanh hàng rào bị hư hại

**RED 7 (Chăm sóc hàng ngày)**
- CICA 7,600 PPM
- Có thể sử dụng hàng ngày
- Tăng cường hàng rào nhất quán

💪 **Hiệu quả tăng cường hàng rào**:
1. Chặn các chất kích thích bên ngoài (bụi mịn, ô nhiễm)
2. Tăng khả năng giữ ẩm
3. Giảm đỏ da·nhạy cảm
4. Ngăn ngừa vấn đề da

📖 **Cách sử dụng**:
1. Thoa serum EXOBIO sau khi rửa mặt
2. Kết thúc với kem dưỡng

✨ **Hiệu quả dự kiến**:
- 2 tuần: Giảm kích ứng, tăng độ ẩm
- 4 tuần: Cải thiện đỏ da, phục hồi hàng rào
- 8 tuần: Hoàn thành hàng rào da mạnh mẽ

🎯 **Khuyến nghị cho**:
- Da nhạy cảm
- Đỏ da thường xuyên
- Da khô và căng
- Kích ứng mỹ phẩm thường xuyên

💡 **MẸO**: Kết hợp EXOSOME 7 (3-4 lần/tuần) + RED 7 (hàng ngày) để có kết quả nhanh hơn!`,
      relatedQuestions: ['Da nhạy cảm', 'Làm dịu', 'EXOSOME 7', 'RED 7'],
      productTags: ['EXOSOME 7', 'RED 7']
    }
  ],
  
  // 🔥 43 Quick Reply Keywords (Bao gồm tất cả Q&A)
  quickReplies: [
    // 🛒 Mua hàng (Ưu tiên hàng đầu)
    { text: '🛒 Cách mua', query: 'mua hàng' },
    
    // Các vấn đề da - Nếp nhăn/Lão hóa (4)
    { text: '💫 Nếp nhăn', query: 'nếp nhăn' },
    { text: '💫 Nếp nhăn nhỏ', query: 'nếp nhăn nhỏ' },
    { text: '💫 Nếp nhăn quanh mắt', query: 'nếp nhăn quanh mắt' },
    { text: '💫 Nếp nhăn nụ cười', query: 'nếp nhăn nụ cười' },
    
    // Các vấn đề da - Dưỡng trắng/Sắc tố (4)
    { text: '💎 Dưỡng trắng', query: 'dưỡng trắng' },
    { text: '✨ Nám da', query: 'nám da' },
    { text: '💎 Sạm da', query: 'sạm da' },
    { text: '💎 Xỉn màu', query: 'da xỉn' },
    
    // Các vấn đề da - Mụn/Vấn đề (4)
    { text: '🔴 Mụn', query: 'mụn' },
    { text: '🔴 Mụn trứng cá', query: 'mụn trứng cá' },
    { text: '🔴 Vấn đề da', query: 'da có vấn đề' },
    { text: '🔴 Vết thâm', query: 'vết thâm mụn' },
    
    // Các vấn đề da - Làm dịu/Nhạy cảm (5)
    { text: '🌸 Đỏ da', query: 'đỏ da' },
    { text: '🌿 Làm dịu', query: 'làm dịu' },
    { text: '🌸 Nhạy cảm', query: 'da nhạy cảm' },
    { text: '🛡️ Hàng rào', query: 'hàng rào da' },
    { text: '🛡️ Chăm sóc hàng rào', query: 'tăng cường hàng rào' },
    
    // Các vấn đề da - Đàn hồi/Chảy xệ (3)
    { text: '🌟 Đàn hồi', query: 'đàn hồi' },
    { text: '🌟 Chảy xệ', query: 'chảy xệ' },
    { text: '🌟 Nâng da', query: 'nâng da' },
    
    // Các vấn đề da - Cấp ẩm/Độ ẩm (3)
    { text: '💧 Cấp ẩm', query: 'cấp ẩm' },
    { text: '💧 Da khô', query: 'da khô' },
    { text: '💧 Độ ẩm', query: 'độ ẩm' },
    
    // Các vấn đề da - Lỗ chân lông (2)
    { text: '🔹 Lỗ chân lông', query: 'lỗ chân lông' },
    { text: '🔹 Dầu nhờn', query: 'dầu nhờn' },
    
    // Thông tin sản phẩm (8)
    { text: '🎯 Khuyến nghị sản phẩm', query: 'khuyến nghị' },
    { text: '📊 EXOSOME vs RED', query: 'khác biệt' },
    { text: '🏥 Về EXOBIO', query: 'EXOBIO' },
    { text: '✨ Công dụng', query: 'công dụng' },
    { text: '📖 Cách sử dụng', query: 'cách sử dụng' },
    { text: '🔢 Số 3·5·7', query: '357' },
    { text: '💰 Giá', query: 'giá' },
    
    // An toàn (2)
    { text: '⚠️ Tác dụng phụ', query: 'tác dụng phụ' },
    { text: '🧪 Thành phần', query: 'thành phần' },
    
    // Sản phẩm cụ thể (6)
    { text: '💎 EXOSOME 3', query: 'EXOSOME 3' },
    { text: '✨ EXOSOME 5', query: 'EXOSOME 5' },
    { text: '🌿 EXOSOME 7', query: 'EXOSOME 7' },
    { text: '💚 RED 3', query: 'RED 3' },
    { text: '💚 RED 5', query: 'RED 5' },
    { text: '💚 RED 7', query: 'RED 7' }
  ],
  
  // ❓ Fallback response (không tìm thấy)
  fallbackResponse: `Xin lỗi, tôi không tìm thấy thông tin phù hợp với câu hỏi của bạn. 😥

Dưới đây là các chủ đề có sẵn. Vui lòng chọn từ các nút trả lời nhanh bên dưới hoặc nhập từ khóa sau:

🔍 **Các vấn đề da** (10 mục)
• Dưỡng trắng (EXOSOME 3) • Nám da (EXOSOME 3) • Nếp nhăn (EXOSOME 5)
• Đàn hồi (EXOSOME 5) • Đỏ da (EXOSOME 7) • Làm dịu (EXOSOME 7)
• Hàng rào (EXOSOME 7) • Cấp ẩm (EXOSOME 7) • Mụn (EXOSOME 7) • Lỗ chân lông (EXOSOME 3/5)

📦 **Thông tin sản phẩm** (8 mục)
• Khuyến nghị sản phẩm (Chẩn đoán AI) • EXOSOME vs RED (Khác biệt)
• Về EXOBIO (Giới thiệu thương hiệu) • Công dụng (Hiệu quả & Cách sử dụng sản phẩm)
• Cách sử dụng (Hướng dẫn sử dụng) • Số 3·5·7 (Ý nghĩa số) • Giá (Định giá sản phẩm)

🔬 **An toàn** (2 mục)
• Tác dụng phụ (Thông tin an toàn) • Thành phần (Thành phần chính)

💡 Vui lòng nhấp vào các nút trả lời nhanh để xem thông tin chi tiết!`,

  // 43 từ khóa trả lời nhanh
  quickReplyKeywords: [
    // Phương thức mua hàng
    { label: '🛒 Cách mua', query: 'mua hàng' },
    
    // Nếp nhăn/Lão hóa
    { label: '💫 Nếp nhăn', query: 'nếp nhăn' },
    { label: '💫 Nếp nhăn nhỏ', query: 'nếp nhăn nhỏ' },
    { label: '💫 Nếp nhăn sâu', query: 'nếp nhăn sâu' },
    { label: '💫 Nếp nhăn mắt', query: 'nếp nhăn mắt' },
    { label: '💫 Nếp gấp mũi', query: 'nếp gấp mũi' },
    
    // Dưỡng trắng/Sắc tố
    { label: '💎 Dưỡng trắng', query: 'dưỡng trắng' },
    { label: '✨ Nám da', query: 'nám da' },
    { label: '💎 Tăng sắc tố', query: 'tăng sắc tố' },
    { label: '💎 Da xỉn màu', query: 'da xỉn màu' },
    
    // Mụn/Vấn đề
    { label: '🔴 Mụn', query: 'mụn' },
    { label: '🔴 Mụn nhọt', query: 'mụn nhọt' },
    { label: '🔴 Vấn đề', query: 'vấn đề' },
    { label: '🔴 Scar mụn', query: 'scar mụn' },
    { label: '⭕ Lỗ chân lông', query: 'lỗ chân lông' },
    
    // Làm dịu/Nhạy cảm
    { label: '🌸 Đỏ da', query: 'đỏ da' },
    { label: '🌿 Làm dịu', query: 'làm dịu' },
    { label: '🌸 Nhạy cảm', query: 'nhạy cảm' },
    { label: '🛡️ Hàng rào da', query: 'hàng rào da' },
    { label: '🛡️ Tăng cường hàng rào', query: 'tăng cường hàng rào' },
    
    // Đàn hồi/Chảy xệ
    { label: '🌟 Đàn hồi', query: 'đàn hồi' },
    { label: '🌟 Chảy xệ', query: 'chảy xệ' },
    { label: '🌟 Nâng cơ', query: 'nâng cơ' },
    
    // Cấp ẩm/Độ ẩm
    { label: '💧 Cấp ẩm', query: 'cấp ẩm' },
    { label: '💧 Da khô', query: 'da khô' },
    { label: '💧 Độ ẩm', query: 'độ ẩm' },
    
    // Cách sử dụng
    { label: '📖 Cách sử dụng', query: 'cách sử dụng' },
    { label: '📖 Liều lượng', query: 'liều lượng' },
    { label: '📖 Kết hợp', query: 'kết hợp' },
    
    // Thông tin sản phẩm
    { label: '🎯 Khuyến nghị', query: 'khuyến nghị' },
    { label: '🔄 Khác biệt', query: 'khác biệt' },
    { label: '💡 Về EXOBIO', query: 'EXOBIO' },
    { label: '✅ Công dụng', query: 'công dụng' },
    { label: '🔢 Ý nghĩa số', query: '357' },
    { label: '💰 Giá', query: 'giá' },
    { label: '🧪 Thành phần', query: 'thành phần' },
    
    // Sản phẩm EXOSOME
    { label: 'EXOSOME 3', query: 'EXOSOME 3' },
    { label: 'EXOSOME 5', query: 'EXOSOME 5' },
    { label: 'EXOSOME 7', query: 'EXOSOME 7' },
    
    // An toàn
    { label: '⚠️ Tác dụng phụ', query: 'tác dụng phụ' },
    { label: '✅ An toàn', query: 'an toàn' },
    
    // Sản phẩm RED
    { label: '💚 RED 3', query: 'RED 3' },
    { label: '💚 RED 5', query: 'RED 5' },
    { label: '💚 RED 7', query: 'RED 7' }
  ]
};

// Node.js module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHATBOT_DATA;
}
