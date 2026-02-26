/**
 * EXOBIO AI Konsultasi Kulit Chatbot
 * @description EXOBIO adalah serum perawatan kulit premium 357 yang dimulai dari klinik dermatologi - 32 tanya jawab perawatan kulit
 * @version 1.0.0
 * @language id (Indonesian - Bahasa Indonesia)
 * @lastUpdated 2026-02-21
 * @totalQuestions 32
 */

const CHATBOT_DATA = {
  version: '1.0.0',
  lastUpdated: '2026-02-21',
  language: 'id',
  totalQuestions: 32,
  
  // 🗂️ Kategori (10 categories)
  categories: [
    'Kerut/Anti-penuaan',           // Wrinkles/Anti-aging
    'Pemutihan/Pigmentasi',         // Whitening/Pigmentation
    'Jerawat/Masalah',              // Acne/Trouble
    'Pori-pori',                    // Pores
    'Elastisitas/Lifting',          // Elasticity/Lifting
    'Hidrasi',                      // Hydration
    'Menenangkan/Sensitif',         // Soothing/Sensitive
    'Cara Penggunaan',              // Usage
    'Info Produk',                  // Product Info
    'Keamanan'                      // Safety
  ],
  
  // 💬 32 Q&A Data
  qaList: [
    // ============================================================
    // Kerut/Anti-penuaan (Wrinkles/Anti-aging) - 4 items
    // ============================================================
    {
      id: 'wrinkles-01',
      keywords: ['kerut', 'anti-penuaan', 'penghilang kerut', 'perawatan kerut', 'penuaan'],
      category: 'Kerut/Anti-penuaan',
      question: 'Kerut',
      answer: `Kami merekomendasikan **EXOSOME 5** untuk memperbaiki kerut

Teknologi Exosome 357™ memulihkan elastisitas kulit dan merawat dari kerutan halus hingga kerutan dalam

💡 **Cara Penggunaan**: Langkah pertama setelah mencuci muka, pagi dan malam`,
      relatedQuestions: ['Kerut Halus', 'Kerut Mata', 'Garis Senyum'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['kerut halus', 'kerutan kecil', 'kerutan ringan'],
      category: 'Kerut/Anti-penuaan',
      question: 'Kerut Halus',
      answer: `Mulai dengan **RED 5** untuk kerut halus tahap awal

Produk perawatan harian untuk penggunaan sehari-hari

Jika ingin perbaikan lebih cepat, kombinasikan dengan **EXOSOME 5** digunakan 3-4 kali seminggu`,
      relatedQuestions: ['Kerut', 'Kerut Mata'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['kerut mata', 'perawatan mata', 'kaki gagak'],
      category: 'Kerut/Anti-penuaan',
      question: 'Kerut Mata',
      answer: `Kami merekomendasikan **EXOSOME 5** untuk memperbaiki kerut mata

💡 **Cara Penggunaan**: Oleskan dengan lembut di area sekitar mata
⚠️ **Perhatian**: Hindari kontak langsung dengan mata`,
      relatedQuestions: ['Kerut', 'Kerut Halus'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['garis senyum', 'lipatan nasolabial', 'lipatan pipi'],
      category: 'Kerut/Anti-penuaan',
      question: 'Garis Senyum',
      answer: `Kami merekomendasikan **EXOSOME 5** + **RED 5** untuk perawatan ganda kerutan dalam

💡 **Jadwal Penggunaan**:
- Pagi: RED 5 (Perawatan harian)
- Malam: EXOSOME 5 (3-4 kali/minggu, Perawatan intensif)`,
      relatedQuestions: ['Kerut', 'Kerut Halus'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Pemutihan/Pigmentasi (Whitening/Pigmentation) - 4 items
    // ============================================================
    {
      id: 'whitening-01',
      keywords: ['pemutihan', 'mencerahkan', 'kulit cerah', 'warna kulit rata'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Pemutihan',
      answer: `Kami merekomendasikan **EXOSOME 3** untuk mencerahkan kulit

Kandungan vitamin konsentrasi tinggi (VITA 620,000 PPM) membuat kulit cerah dan bersih

💡 **Cara Penggunaan**: Gunakan 3-4 kali seminggu, fokus pada area gelap`,
      relatedQuestions: ['Melasma', 'Bintik Gelap', 'Kusam'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-02',
      keywords: ['melasma', 'bintik melasma', 'flek'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Melasma',
      answer: `Kami merekomendasikan **EXOSOME 3** + **RED 3** untuk melasma

💡 **Metode perawatan intensif**:
1. RED 3: Perawatan harian (Pagi & Malam)
2. EXOSOME 3: Perawatan intensif 3-4 kali/minggu
3. Catatan: Penggunaan tabir surya wajib!`,
      relatedQuestions: ['Pemutihan', 'Bintik Gelap'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['bintik gelap', 'bintik', 'noda kulit'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Bintik Gelap',
      answer: `Kami merekomendasikan **EXOSOME 3** untuk memperbaiki bintik gelap

Bahan aktif VITA 620,000 PPM memperbaiki pigmentasi kulit

💡 **Tips Penggunaan**: Oleskan fokus pada area bintik setelah mencuci muka`,
      relatedQuestions: ['Pemutihan', 'Melasma', 'Kusam'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-04',
      keywords: ['hiperpigmentasi', 'pigmentasi', 'melanin', 'kusam'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Hiperpigmentasi',
      answer: `Kami merekomendasikan **EXOSOME 3** untuk memperbaiki hiperpigmentasi

Kandungan dalam exosome menghambat pembentukan melanin

💡 **Cara Penggunaan**: Gunakan 3-4 kali seminggu pada area hiperpigmentasi
🌞 **Perhatian**: Penggunaan tabir surya wajib`,
      relatedQuestions: ['Pemutihan', 'Melasma', 'Bintik Gelap'],
      productTags: ['EXOSOME 3', 'RED 3']
    },

    // ============================================================
    // Jerawat/Masalah (Acne/Trouble) - 3 items
    // ============================================================
    {
      id: 'acne-01',
      keywords: ['jerawat', 'acne', 'bruntusan', 'jerawat meradang'],
      category: 'Jerawat/Masalah',
      question: 'Jerawat',
      answer: `EXOBIO aman untuk kulit berjerawat!

🎯 **Produk yang direkomendasikan**
- **EXOSOME 7**: Menenangkan dan regenerasi
- **RED 7**: Perawatan harian

✨ **Efek yang diharapkan**
- Menenangkan jerawat
- Pemulihan cepat
- Memperkuat barrier kulit
- Memperbaiki bekas jerawat`,
      relatedQuestions: ['Masalah Kulit', 'Bekas Jerawat'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['masalah kulit', 'inflamasi', 'kemerahan'],
      category: 'Jerawat/Masalah',
      question: 'Masalah Kulit',
      answer: `Kami merekomendasikan **EXOSOME 7** + **RED 7** untuk perawatan ganda

💡 **Cara Penggunaan**:
- EXOSOME 7: 3-4 kali/minggu, fokus pada area bermasalah
- RED 7: Gunakan setiap hari
- Efek: Menenangkan cepat, mencegah kambuh`,
      relatedQuestions: ['Jerawat', 'Bekas Jerawat', 'Kulit Sensitif'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['bekas jerawat', 'noda jerawat', 'bekas luka', 'lubang bekas jerawat'],
      category: 'Jerawat/Masalah',
      question: 'Bekas Jerawat',
      answer: `Kami merekomendasikan **EXOSOME 3** untuk memperbaiki bekas jerawat

Perbaikan pigmentasi (pemutihan) + Menenangkan + Regenerasi

✅ EXOBIO aman dan dapat digunakan bahkan pada kulit berjerawat`,
      relatedQuestions: ['Jerawat', 'Masalah Kulit', 'Pemutihan'],
      productTags: ['EXOSOME 3', 'EXOSOME 7']
    },

    // ============================================================
    // Pori-pori (Pores) - 2 items
    // ============================================================
    {
      id: 'pores-01',
      keywords: ['pori-pori', 'pori besar', 'mengecilkan pori'],
      category: 'Pori-pori',
      question: 'Pori-pori',
      answer: `Kami merekomendasikan **EXOSOME 5** untuk perawatan mengecilkan pori

💡 **Cara Penggunaan**:
- Gunakan sebagai langkah pertama setelah mencuci muka, pagi dan malam
- Fokus pada area pori-pori`,
      relatedQuestions: ['Sebum', 'Kerut'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'pores-02',
      keywords: ['sebum', 'kulit berminyak', 'produksi minyak'],
      category: 'Pori-pori',
      question: 'Sebum',
      answer: `Kami merekomendasikan **RED 7** untuk mengontrol sebum

💡 **Cara Penggunaan**: Gunakan setiap hari, pagi dan malam, setelah mencuci muka
⚠️ **Perhatian**: Hindari mencampur dengan produk berminyak lainnya`,
      relatedQuestions: ['Pori-pori', 'Jerawat'],
      productTags: ['RED 7', 'EXOSOME 7']
    },

    // ============================================================
    // Elastisitas/Lifting (Elasticity/Lifting) - 2 items
    // ============================================================
    {
      id: 'elasticity-01',
      keywords: ['elastisitas', 'kekencangan', 'mengencangkan kulit'],
      category: 'Elastisitas/Lifting',
      question: 'Elastisitas',
      answer: `Kami merekomendasikan **EXOSOME 5** untuk meningkatkan elastisitas kulit

Kandungan Salmon PDRN 10,000 PPM mendorong produksi kolagen dan mengencangkan kulit

💡 **Cara Penggunaan**: Oleskan 3-4 kali seminggu, pijat ke arah atas`,
      relatedQuestions: ['Kerut', 'Kendur', 'Lifting'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['kendur', 'kendur wajah', 'lifting'],
      category: 'Elastisitas/Lifting',
      question: 'Kendur Wajah',
      answer: `Kami merekomendasikan **EXOSOME 5** + **RED 5** untuk perawatan ganda

💡 **Metode perawatan ganda**:
- EXOSOME 5: 3-4 kali/minggu (Perawatan intensif)
- RED 5: Gunakan setiap hari (Perawatan harian)
- Pijat ke arah atas dan keluar`,
      relatedQuestions: ['Elastisitas', 'Kerut'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Hidrasi (Hydration) - 2 items
    // ============================================================
    {
      id: 'hydration-01',
      keywords: ['hidrasi', 'kelembaban', 'melembabkan'],
      category: 'Hidrasi',
      question: 'Hidrasi',
      answer: `Kami merekomendasikan **RED 7** untuk kulit kering

💡 **Cara Penggunaan**: Gunakan setiap hari, langkah pertama setelah mencuci muka
💧 **Tips**: Oleskan pada kulit segera setelah mencuci muka untuk meningkatkan efek`,
      relatedQuestions: ['Kulit Kering', 'Kulit Sensitif'],
      productTags: ['RED 5', 'RED 7']
    },
    {
      id: 'hydration-02',
      keywords: ['kulit kering', 'kulit kencang', 'kulit dehidrasi'],
      category: 'Hidrasi',
      question: 'Kulit Kering',
      answer: `Kami merekomendasikan **EXOSOME 5** + **EXOSOME 7** untuk perawatan premium ganda

💡 **Efek penguatan barrier kulit**:
- Memberikan kelembaban dalam + Memperkuat barrier
- Gunakan setiap hari bersama-sama
- Minum air yang cukup!`,
      relatedQuestions: ['Hidrasi', 'Kulit Sensitif', 'Barrier Kulit'],
      productTags: ['EXOSOME 5', 'EXOSOME 7', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Menenangkan/Sensitif (Soothing/Sensitive) - 2 items
    // ============================================================
    {
      id: 'soothing-01',
      keywords: ['menenangkan', 'iritasi', 'kemerahan'],
      category: 'Menenangkan/Sensitif',
      question: 'Menenangkan',
      answer: `Kami merekomendasikan **RED 7** untuk kulit sensitif

Memberikan efek menenangkan dengan bahan lembut tanpa iritasi kulit

✨ **EXOBIO adalah produk 3-FREE!**
- Bebas Pewangi
- Bebas Pewarna
- Bebas Alkohol`,
      relatedQuestions: ['Kulit Sensitif', 'Masalah Kulit', 'Barrier Kulit'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'soothing-02',
      keywords: ['kulit sensitif', 'sensitif', 'kulit mudah iritasi', 'rosacea'],
      category: 'Menenangkan/Sensitif',
      question: 'Kulit Sensitif',
      answer: `Kami merekomendasikan **EXOSOME 7** untuk kulit sensitif

🌿 **Kandungan CICA 760,000 PPM**:
- Menenangkan seketika
- Memperkuat barrier kulit
- Mengurangi kemerahan

💡 **Penggunaan aman**: Sistem 3-FREE (Bebas Pewangi/Pewarna/Alkohol)`,
      relatedQuestions: ['Menenangkan', 'Masalah Kulit', 'Barrier Kulit'],
      productTags: ['EXOSOME 7', 'RED 7']
    },

    // ============================================================
    // Cara Penggunaan (Usage) - 3 items
    // ============================================================
    {
      id: 'usage-01',
      keywords: ['cara pakai', 'urutan penggunaan', 'kapan digunakan', 'panduan penggunaan'],
      category: 'Cara Penggunaan',
      question: 'Cara Penggunaan',
      answer: `EXOBIO - Panduan Penggunaan Dasar

💡 **Urutan Penggunaan**:
1. Cuci muka
2. **Serum EXOBIO** (Langkah pertama!)
3. Produk Anda (Toner, Serum, Krim)

✅ **Catatan Penting**:
- Serum EXOBIO memiliki viskositas, oleskan langsung
- EXOSOME: 3-4 kali/minggu
- RED: Gunakan setiap hari

💡 **Tips**: Gunakan setelah mencuci muka untuk meningkatkan efek!

✨ **Tambahkan ke rutinitas Anda yang ada**
- Tidak perlu mengganti produk yang ada
- Cukup tambahkan EXOBIO di langkah pertama
- Efek meningkat⬆️

🌟 **Aman untuk kulit sensitif dengan 3-FREE**
- Bebas Pewangi ❌
- Bebas Pewarna ❌
- Bebas Alkohol ❌`,
      relatedQuestions: ['Jumlah Penggunaan', 'Penggunaan Kombinasi'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-02',
      keywords: ['jumlah penggunaan', 'jumlah yang tepat', 'berapa banyak', 'periode penggunaan'],
      category: 'Cara Penggunaan',
      question: 'Jumlah Penggunaan',
      answer: `Jumlah Penggunaan yang Tepat untuk EXOBIO

💡 **Jumlah per penggunaan**:
- Oleskan 2 kali pada area yang ingin dirawat

📦 **Periode penggunaan per set**:
- EXOSOME 1 SET (5ml × 5): Sekitar 3-4 minggu (3-4 kali/minggu)
- RED 1 SET (15ml × 2): Sekitar 3-4 minggu (Setiap hari)`,
      relatedQuestions: ['Cara Penggunaan', 'Penggunaan Kombinasi'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-03',
      keywords: ['penggunaan kombinasi', 'gunakan bersama', 'gunakan beberapa produk', 'kombinasi'],
      category: 'Cara Penggunaan',
      question: 'Penggunaan Kombinasi',
      answer: `Ya! Dapat digunakan bersama

💡 **Kombinasi yang direkomendasikan**:

**1️⃣ Kerut + Pemutihan**
- EXOSOME 5 atau 3: 2-3 kali/minggu bergantian

**2️⃣ Intensif + Harian**
- EXOSOME (3-4 kali/minggu) + RED (Setiap hari)
- Direkomendasikan nomor yang sama (3, 5, atau 7)

**3️⃣ Beberapa masalah**
- RED (Siang hari) + EXOSOME (Malam hari)

✅ Dapat menggunakan beberapa produk EXOBIO bersama-sama!`,
      relatedQuestions: ['Cara Penggunaan', 'Jumlah Penggunaan'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-04',
      keywords: ['cara pakai MTS', 'MTS', 'dermaroller', 'roller kulit'],
      category: 'Cara Penggunaan',
      question: 'Cara Pakai MTS',
      answer: `🔬 **Cara Penggunaan MTS (Dermaroller)**

📋 **Cara Penggunaan**:
**01.** Sebelum digunakan, rendam dermaroller (MTS) dalam etanol disinfektan selama 5-10 menit untuk mendisinfeksi secara menyeluruh.

**02.** Setelah membersihkan wajah dengan cleanser, persiapkan kulit Anda.

**03.** Aplikasikan ampul Exosome EXOBIO secara generous pada kulit Anda.

**04.** Gulung dermaroller dengan lembut di area yang diinginkan dengan tekanan yang konsisten. Ulangi sampai Anda merasakan stimulasi ringan pada kulit.

**05.** Tepuk-tepuk lembut sisa ampul untuk diserap, kemudian selesaikan dengan krim menenangkan pada kulit yang memerah.

⚠️ **Panduan Penggunaan**:
• MTS pada prinsipnya adalah produk sekali pakai, dengan maksimal 3 kali penggunaan.
• Jika menggunakan kembali, pastikan untuk mendisinfeksi secara menyeluruh setiap kali sebelum digunakan.
• Direkomendasikan menggunakan 1 kali setiap 3-4 minggu.

💡 **Efek**: Ketika digunakan dengan ampul Exosome, tingkat penyerapan kulit meningkat untuk hasil yang lebih baik!`,
      relatedQuestions: ['Cara Penggunaan', 'Penggunaan Kombinasi'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },

    // ============================================================
    // Info Produk (Product Info) - 10 items
    // ============================================================
    {
      id: 'product-01',
      keywords: ['EXOSOME', 'RED', 'perbedaan', 'perbandingan', 'beda'],
      category: 'Info Produk',
      question: 'Perbedaan EXOSOME dan RED',
      answer: `EXOSOME vs RED - Perbedaan

🔬 **EXOSOME (Perawatan Intensif)**
- Konsentrasi Exosome tinggi
- Gunakan 3-4 kali/minggu
- Perbaikan cepat
- Untuk masalah kulit serius

💚 **RED (Perawatan Harian)**
- Formula seimbang
- Gunakan setiap hari
- Bahan lembut
- Cocok untuk penggunaan sehari-hari

💡 **Panduan pemilihan**:
- Masalah serius → EXOSOME
- Perawatan harian → RED
- Efek terbaik → Kombinasikan keduanya!`,
      relatedQuestions: ['Rekomendasi Produk', 'Arti Nomor 3·5·7'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-02',
      keywords: ['3', '5', '7', 'nomor', 'arti nomor'],
      category: 'Info Produk',
      question: 'Arti Nomor 3, 5, 7',
      answer: `Arti Nomor 3️⃣5️⃣7️⃣ EXOBIO

**3️⃣ EXOSOME/RED 3 - Pemutihan/Pigmentasi**
💎 Kandungan VITA 620,000 PPM
- Memperbaiki melasma, bintik gelap
- Mencerahkan warna kulit

**5️⃣ EXOSOME/RED 5 - Kerut/Elastisitas**
✨ Salmon PDRN 10,000 PPM
- Memperbaiki kerutan
- Meningkatkan elastisitas

**7️⃣ EXOSOME/RED 7 - Menenangkan, Hidrasi, Barrier**
🌿 CICA + EXOSOME 760,000 PPM
- Menenangkan, Kulit Sensitif
- Hidrasi, Memperkuat Barrier Kulit

💡 **Panduan pemilihan**:
- Satu masalah → Pilih 1 nomor
- Beberapa masalah → Kombinasikan 2-3 nomor!`,
      relatedQuestions: ['Rekomendasi Produk', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['rekomendasi', 'pilih produk', 'produk yang cocok', 'saran produk', 'rekomendasi produk'],
      category: 'Info Produk',
      question: 'Rekomendasi Produk',
      answer: `🎯 **Diagnosis Kulit AI - Rekomendasi Personal**

Analisis 10 indikator kulit dalam 30 detik
→ Rekomendasi produk yang paling cocok untuk Anda!

👉 **https://curetembio.xyz**

💡 **Pilihan cepat berdasarkan masalah**:
- Kerut → EXOSOME 5
- Pemutihan → EXOSOME 3
- Hidrasi/Menenangkan/Barrier → EXOSOME 7
- Perawatan harian → Seri RED`,
      relatedQuestions: ['EXOSOME vs RED', 'Arti Nomor 3·5·7'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-04',
      keywords: ['EXOBIO', 'pengenalan', 'merek', 'perusahaan', 'tentang EXOBIO'],
      category: 'Info Produk',
      question: 'Tentang EXOBIO',
      answer: `EXOBIO - Pengenalan Merek

🏥 **Serum perawatan rumah dari Peralatan Dermatologi Profesional**

**Apa itu EXOBIO?**
Serum Exosome yang benar-benar digunakan dalam peralatan dermatologi profesional

🔬 **Berasal dari peralatan dermatologi profesional**
- **LDM Care**: Regenerasi kulit ultrasonik
- **SONO Care**: Penetrasi bahan dalam

→ Serum EXOBIO digunakan sebagai bahan inti

💡 **Siapa yang harus menggunakan**:
- Usia 30an: Tanda penuaan dini
- Usia 40an: Perawatan anti-penuaan menyeluruh
- Setelah melahirkan: Pemulihan kulit rusak
- Masalah: Kerut, Melasma, dll

📊 **Kredibilitas**:
- Diakui oleh dermatolog
- Tingkat pembelian ulang 61%
- Serum konsentrasi tinggi`,
      relatedQuestions: ['Efek', 'LDM Care', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-05',
      keywords: ['LDM', 'LDM Care', 'perawatan LDM'],
      category: 'Info Produk',
      question: 'LDM Care',
      answer: `🏥 **Apa itu LDM Care?**

**LDM (Local Dynamic Micro-massage)**
- Peralatan regenerasi kulit berbasis ultrasonik
- Penetrasi bahan dalam ke kulit
- Digunakan di klinik dermatologi

💡 **Serum EXOBIO**
→ Adalah bahan inti yang digunakan dalam perawatan LDM Care!

✨ **Dapat dirawat di rumah**
Sekarang Anda dapat mengalami serum yang sama di rumah`,
      relatedQuestions: ['SONO Care', 'Tentang EXOBIO'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-06',
      keywords: ['SONO', 'SONO Care', 'perawatan SONO'],
      category: 'Info Produk',
      question: 'SONO Care',
      answer: `🏥 **Apa itu SONO Care?**

**Perawatan mendalam menggunakan serum EXOBIO**
- Penetrasi bahan aktif dalam ke kulit
- Digunakan di klinik dermatologi
- Dapat dirawat di rumah

💡 **Perawatan di rumah**
Gunakan dengan MTS roller (0.25mm) untuk meningkatkan penyerapan`,
      relatedQuestions: ['LDM Care', 'MTS Roller'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'exosome 3'],
      category: 'Info Produk',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - Perawatan Pemutihan Intensif**

✨ **BIO 357™ EXOSOME** adalah serum Exosome357 premium yang dimulai dari klinik dermatologi dan diakui oleh apotek, meningkatkan efek perawatan kulit ke tingkat berikutnya.

🎯 **Kandungan Inti**
- **VITA 620,000 PPM** (Vitamin konsentrasi sangat tinggi)
- **EXOSOME 5,000 PPM** (Exosome konsentrasi tinggi)
- Bahan fungsional pemutihan bersertifikat

💡 **Efek Utama**
- Memperbaiki melasma
- Memperbaiki bintik gelap
- Memperbaiki hiperpigmentasi
- Meratakan warna kulit
- Mencerahkan kulit

📅 **Cara Penggunaan**
- **Frekuensi**: 3-4 kali/minggu
- **Waktu**: Langkah pertama setelah mencuci muka

💰 **Harga**: $80 (5ml × 5 botol)

💚 **Perawatan harian?** Direkomendasikan RED 3 (Penggunaan harian)`,
      relatedQuestions: ['RED 3', 'Pemutihan', 'Melasma'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'exosome 5'],
      category: 'Info Produk',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - Perawatan Elastisitas Intensif**

✨ **BIO 357™ EXOSOME** adalah serum Exosome357 premium yang dimulai dari klinik dermatologi dan diakui oleh apotek, meningkatkan efek perawatan kulit ke tingkat berikutnya.

🎯 **Kandungan Inti**
- **Salmon PDRN 10,000 PPM** (DNA salmon)
- **EXOSOME 5,000 PPM** (Exosome konsentrasi tinggi)
- Bahan fungsional perbaikan kerut bersertifikat

💡 **Efek Utama**
- Memperbaiki kerutan dalam
- Memulihkan elastisitas kulit
- Anti-penuaan
- Meningkatkan kekencangan
- Efek lifting

📅 **Cara Penggunaan**
- **Frekuensi**: 3-4 kali/minggu
- **Waktu**: Langkah pertama setelah mencuci muka

💰 **Harga**: $80 (5ml × 5 botol)

💚 **Perawatan harian?** Direkomendasikan RED 5 (Penggunaan harian)`,
      relatedQuestions: ['RED 5', 'Kerut', 'Elastisitas'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'exosome 7'],
      category: 'Info Produk',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - Perawatan Menenangkan Intensif**

✨ **BIO 357™ EXOSOME** adalah serum Exosome357 premium yang dimulai dari klinik dermatologi dan diakui oleh apotek, meningkatkan efek perawatan kulit ke tingkat berikutnya.

🎯 **Kandungan Inti**
- **CICA (Ekstrak Centella asiatica)**
- **EXOSOME 760,000 PPM** (Exosome konsentrasi sangat tinggi)
- Bahan menenangkan kulit

💡 **Efek Utama**
- Pasokan hidrasi
- Efek menenangkan
- Menenangkan jerawat, masalah kulit
- Mengurangi kemerahan
- Memperbaiki kulit sensitif
- Memperkuat barrier kulit
- Mendorong regenerasi kulit

📅 **Cara Penggunaan**
- **Frekuensi**: 3-4 kali/minggu
- **Waktu**: Langkah pertama setelah mencuci muka

⚡ **Fitur**
- Aman untuk kulit sensitif
- Perawatan kulit bermasalah
- Sensasi menenangkan seketika

💰 **Harga**: $80 (5ml × 5 botol)

💚 **Perawatan harian?** Direkomendasikan RED 7 (Penggunaan harian)`,
      relatedQuestions: ['RED 7', 'Menenangkan', 'Kulit Sensitif'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'red 3'],
      category: 'Info Produk',
      question: 'RED 3',
      answer: `💚 **RED 3 - Perawatan Pemutihan Harian**

✨ **BIO 357™ RED** adalah serum 357 harian yang dimulai dari klinik dermatologi dan diakui oleh apotek, dirancang untuk penggunaan sehari-hari tanpa beban sebagai langkah pertama dalam perawatan kulit.

🎯 **Kandungan Inti**
- **VITA 620,000 PPM** (Vitamin konsentrasi sangat tinggi)
- Bahan fungsional pemutihan bersertifikat
- Formula dioptimalkan untuk penggunaan harian

💡 **Efek Utama**
- Mencegah melasma dan bintik
- Mencerahkan warna kulit
- Memperbaiki kusam
- Penggunaan harian untuk meningkatkan transparansi kulit

📅 **Cara Penggunaan**
- **Frekuensi**: Setiap hari (pagi/malam)
- **Waktu**: Langkah pertama setelah mencuci muka

💡 **Perawatan harian + Perawatan intensif**
- Kombinasi **RED 3** (Harian) + **EXOSOME 3** (3-4 kali/minggu) direkomendasikan
- Maksimalkan efek perawatan intensif

💰 **Harga**: $33 (15ml × 2 botol)

🔬 **Perawatan intensif?** Direkomendasikan EXOSOME 3 (3-4 kali/minggu)`,
      relatedQuestions: ['EXOSOME 3', 'Pemutihan', 'Melasma'],
      productTags: ['RED 3', 'EXOSOME 3']
    },
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'red 5'],
      category: 'Info Produk',
      question: 'RED 5',
      answer: `💚 **RED 5 - Perawatan Elastisitas Harian**

✨ **BIO 357™ RED** adalah serum 357 harian yang dimulai dari klinik dermatologi dan diakui oleh apotek, dirancang untuk penggunaan sehari-hari tanpa beban sebagai langkah pertama dalam perawatan kulit.

🎯 **Kandungan Inti**
- **Salmon PDRN 10,000 PPM** (DNA salmon)
- Bahan fungsional perbaikan kerut bersertifikat
- Formula dioptimalkan untuk penggunaan harian

💡 **Efek Utama**
- Mencegah kerut halus
- Mempertahankan elastisitas kulit
- Anti-penuaan
- Penggunaan harian untuk meningkatkan elastisitas kulit

📅 **Cara Penggunaan**
- **Frekuensi**: Setiap hari (pagi/malam)
- **Waktu**: Langkah pertama setelah mencuci muka

💡 **Perawatan harian + Perawatan intensif**
- Kombinasi **RED 5** (Harian) + **EXOSOME 5** (3-4 kali/minggu) direkomendasikan
- Perawatan intensif untuk kerutan dalam

💰 **Harga**: $37 (15ml × 2 botol)

🔬 **Perawatan intensif?** Direkomendasikan EXOSOME 5 (3-4 kali/minggu)`,
      relatedQuestions: ['EXOSOME 5', 'Kerut', 'Elastisitas'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'red 7'],
      category: 'Info Produk',
      question: 'RED 7',
      answer: `💚 **RED 7 - Perawatan Menenangkan Harian**

✨ **BIO 357™ RED** adalah serum 357 harian yang dimulai dari klinik dermatologi dan diakui oleh apotek, dirancang untuk penggunaan sehari-hari tanpa beban sebagai langkah pertama dalam perawatan kulit.

🎯 **Kandungan Inti**
- **CICA 7,600 PPM** (Ekstrak Centella asiatica)
- Bahan menenangkan kulit
- Formula dioptimalkan untuk penggunaan harian

💡 **Efek Utama**
- Pasokan hidrasi
- Efek menenangkan
- Mencegah jerawat dan masalah kulit
- Mengurangi kemerahan
- Mengelola kulit sensitif
- Penggunaan harian memperkuat barrier kulit

📅 **Cara Penggunaan**
- **Frekuensi**: Setiap hari (pagi/malam)
- **Waktu**: Langkah pertama setelah mencuci muka

💡 **Perawatan harian + Perawatan intensif**
- Kombinasi **RED 7** (Harian) + **EXOSOME 7** (3-4 kali/minggu) direkomendasikan
- Perawatan intensif untuk kulit bermasalah

💰 **Harga**: $32 (15ml × 2 botol)

🔬 **Perawatan intensif?** Direkomendasikan EXOSOME 7 (3-4 kali/minggu)`,
      relatedQuestions: ['EXOSOME 7', 'Menenangkan', 'Kulit Sensitif'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'effect-01',
      keywords: ['efek', 'hasil', 'kapan', 'perbaikan', 'perubahan'],
      category: 'Info Produk',
      question: 'Efek EXOBIO',
      answer: `Efek dan Panduan Penggunaan Produk EXOBIO

🏥 **Versi Perawatan Rumah dari Serum Dermatologi Profesional**

EXOBIO adalah serum yang benar-benar digunakan dalam perawatan peralatan profesional seperti **LDM Care** dan **SONO Care** di klinik dermatologi. Bahan yang telah diverifikasi secara klinis kini tersedia untuk perawatan di rumah.

💡 **Cara Penggunaan - Langkah Pertama Setelah Mencuci Muka!**

✨ **Pertahankan Produk yang Ada**
- Tambahkan produk EXOBIO sebagai **langkah pertama** setelah mencuci muka
- Lanjutkan menggunakan toner, serum, krim yang ada
- Efek meningkat tanpa mengubah rutinitas! ⬆️

📅 **Kapan Hasil Terlihat**

⏰ **Perubahan kulit terlihat setelah 4 minggu**
- **1-2 minggu**: Tekstur kulit membaik, kelembaban meningkat
- **3-4 minggu**: Warna kulit lebih cerah, elastisitas pulih
- **Setelah 4 minggu**: Transformasi penuh - keseimbangan kulit stabil
- **8-12 minggu**: Perbaikan intensif kerut, melasma terkonfirmasi

✨ **Stabilisasi Keseimbangan Kulit**
- Barrier kulit diperkuat, lebih tahan terhadap iritasi eksternal
- Keseimbangan kelembaban-minyak
- Kekuatan alami kulit dipulihkan

🎯 **Pilih Produk yang Sempurna untuk Anda**

**Metode 1️⃣: Berdasarkan Masalah**
- **3**: Pemutihan, melasma, kusam
- **5**: Kerut, elastisitas, lifting
- **7**: Menenangkan, masalah, sensitif, hidrasi, barrier kulit

**Metode 2️⃣: Diagnosis Kulit AI (Direkomendasikan!)** 🎯
- Analisis 10 indikator kulit dalam 30 detik
- Rekomendasi produk personal
- Perawatan kulit lebih efisien
- 👉 https://curetembio.xyz

💚 **Perawatan Intensif vs Perawatan Harian**

**Seri EXOSOME** (Perawatan Intensif)
- Gunakan 3-4 kali/minggu
- Perbaikan cepat dengan bahan konsentrasi tinggi
- Mengatasi masalah kulit serius

**Seri RED** (Perawatan Harian)
- Dapat digunakan setiap hari
- Perawatan berkelanjutan dengan harga terjangkau
- Mempertahankan keseimbangan kulit

💡 **Metode Paling Efektif**
→ **EXOSOME + RED Perawatan Ganda**
→ Hasil terbaik dengan perawatan intensif + manajemen harian!

🌟 **Keunggulan EXOBIO**
✅ Bahan perawatan klinik profesional
✅ Efek meningkat sambil mempertahankan rutinitas yang ada
✅ Perubahan jelas setelah 4 minggu
✅ Diakui oleh dermatolog
✅ Tingkat pembelian ulang 61% (Kepuasan pelanggan terbukti)`,
      relatedQuestions: ['Tentang EXOBIO', 'Rekomendasi Produk'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Keamanan (Safety) - 4 items
    // ============================================================
    {
      id: 'mts-01',
      keywords: ['MTS', 'derma roller', 'microneedle', 'roller'],
      category: 'Cara Penggunaan',
      question: 'MTS Roller',
      answer: `Derma Roller MTS Dapat Dirawat di Rumah!

🔬 **Cara Penggunaan**:
- Microneedle 0.25mm direkomendasikan
- 1-2 kali per bulan
- Oleskan produk EXOBIO setelah menggunakan MTS

✨ **Efek**:
- Penyerapan EXOBIO meningkat signifikan
- Regenerasi kulit terpromosi
- Hasil lebih cepat terlihat

⚠️ **Perhatian**:
- Harus menggunakan 0.25mm atau lebih kecil
- Hindari penggunaan berlebihan
- Gunakan hanya saat kulit dalam kondisi baik
- Hindari saat kulit sensitif atau bermasalah

💡 **Urutan Penggunaan MTS**:
1. Cuci muka
2. MTS roller (0.25mm)
3. Segera oleskan produk EXOBIO
4. Krim setelah terserap`,
      relatedQuestions: ['Cara Penggunaan', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'safety-02',
      keywords: ['efek samping', 'reaksi buruk', 'alergi'],
      category: 'Keamanan',
      question: 'Efek Samping',
      answer: `Efek Samping dan Reaksi Buruk

✅ **EXOBIO adalah Produk Aman**

⚠️ **Reaksi yang Mungkin Terjadi (Jarang)**:
- Kemerahan sementara
- Rasa gatal ringan
- Pengelupasan kulit (Proses regenerasi normal)

🚨 **Kapan Harus Berhenti dan Konsultasi Profesional**:
- Gatal atau kemerahan parah
- Ruam atau biduran
- Pembengkakan

💡 **Pencegahan**:
- Mulai dengan jumlah kecil
- Pantau kondisi kulit`,
      relatedQuestions: ['Stabilitas Produk', 'Kulit Sensitif'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'safety-03',
      keywords: ['stabilitas', 'keamanan', 'aman', 'verifikasi', 'jaminan'],
      category: 'Keamanan',
      question: 'Stabilitas Produk',
      answer: `Stabilitas Produk EXOBIO

✅ **Diverifikasi oleh Dermatologi & Apotek**
EXOBIO adalah serum konsentrasi tinggi yang digunakan dalam perawatan profesional seperti LDM Care dan SONO Care di klinik dermatologi.
Ini adalah produk terpercaya yang diverifikasi oleh apotek, diakui stabilitasnya oleh profesional kulit.

🔬 **Sistem 3-FREE (Bahan Aman)**
- ❌ Bebas Pewangi
- ❌ Bebas Alkohol
- ❌ Bebas Pewarna Buatan

→ Dapat digunakan tanpa beban pada kulit sensitif!

💡 **Penggunaan Langkah Pertama Setelah Mencuci Muka**
Menggunakan EXOBIO sebagai langkah pertama setelah mencuci muka memaksimalkan penyerapan kulit dan meningkatkan efek produk yang ada.
Cukup tambahkan EXOBIO sebagai langkah pertama tanpa mengubah rutinitas Anda untuk efek perawatan kulit yang pasti meningkat⬆️!

📊 **Kredibilitas Terverifikasi**
- Serum perawatan klinik → Konversi perawatan rumah
- Verifikasi distribusi apotek
- Tingkat pembelian ulang pelanggan 61%
- Keamanan terjamin dengan bahan 3-FREE

🎯 **Direkomendasikan Untuk**
- Mereka yang memiliki kulit sensitif
- Mereka yang menyukai bahan aman
- Mereka yang ingin perawatan rumah setelah perawatan dermatologi
- Mereka yang ingin efek meningkat tanpa mengubah rutinitas yang ada

📞 **Kontak**: curetembio@gmail.com`,
      relatedQuestions: ['Efek Samping', 'Kulit Sensitif'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-07',
      keywords: ['357', 'nomor 3', 'nomor 5', 'nomor 7', 'nomor', 'arti'],
      category: 'Info Produk',
      question: 'Arti Nomor 3·5·7',
      answer: `Penjelasan Sistem EXOSOME 357

🔢 **Apa itu 357?**
Sistem inti EXOBIO, setiap nomor fokus pada masalah kulit tertentu!

**Nomor 3 - Fokus Pemutihan·Melasma**
💎 EXOSOME 3 / RED 3
- Memperbaiki pigmentasi kulit
- Kulit cerah dan bersih
- Bahan utama: VITA 620,000 PPM

**Nomor 5 - Fokus Kerut·Elastisitas**
✨ EXOSOME 5 / RED 5
- Memperbaiki kerutan dalam
- Memulihkan elastisitas
- Bahan utama: Salmon PDRN 10,000 PPM

**Nomor 7 - Fokus Menenangkan·Hidrasi·Barrier**
🌿 EXOSOME 7 / RED 7
- Menenangkan, masalah kulit, sensitif
- Hidrasi, barrier kulit
- Bahan utama: CICA + EXOSOME 760,000 PPM

💡 **Panduan pemilihan**:
- Masalah pigmentasi → Nomor 3
- Masalah penuaan → Nomor 5
- Sensitif·Masalah → Nomor 7
- Beberapa masalah → Dapat kombinasikan 2-3!`,
      relatedQuestions: ['Arti Nomor 3, 5, 7', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-08',
      keywords: ['harga', 'biaya', 'berapa', 'pricing', 'harga retail'],
      category: 'Info Produk',
      question: 'Harga Produk',
      answer: `Informasi Harga Produk EXOBIO

💰 **Seri Premium EXOSOME (Konsentrasi Tinggi)**

**EXOSOME 3 (Pemutihan·Melasma)**
- 5ml × 5 botol: **$80**

**EXOSOME 5 (Kerut·Elastisitas)**
- 5ml × 5 botol: **$80**

**EXOSOME 7 (Menenangkan·Barrier)**
- 5ml × 5 botol: **$80**

💚 **Seri RED Harian (Penggunaan Harian)**

**RED 3 (Pemutihan)**
- 15ml × 2 botol: **$33**

**RED 5 (Kerut)**
- 15ml × 2 botol: **$37**

**RED 7 (Menenangkan)**
- 15ml × 2 botol: **$32**

📦 **Periode Penggunaan**:
- EXOSOME: Sekitar 3-4 minggu saat digunakan 3-4 kali/minggu
- RED: Sekitar 3-4 minggu saat digunakan setiap hari

💡 **Perbandingan Harga**:
- EXOSOME: Perawatan intensif konsentrasi tinggi ($80)
- RED: Harga perawatan harian terjangkau ($32-37)

🎁 **Manfaat Tambahan**:
- Diagnosis Kulit AI: Gratis (https://curetembio.xyz)
- Pertanyaan: curetembio@gmail.com`,
      relatedQuestions: ['Cara Beli', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-09',
      keywords: ['beli', 'cara beli', 'beli produk', 'dimana beli', 'belanja', 'apotek', 'online'],
      category: 'Info Produk',
      question: 'Cara Beli',
      answer: `Metode Pembelian Produk EXOBIO

🏪 **Pembelian Offline**

**Seoul**
- Klinik Dermatologi DM Apgujeong
- Apotek di 4 distrik belanja utama
  · Myeongdong
  · Hongdae
  · Gangnam
  · Seongsu
  · Universitas Konkuk

**Busan**
- Lokasi utama Nampo-dong
- Lokasi utama Stasiun Bujeon

📍 **Informasi Lokasi Detail**
→ https://www.exobio.net/ > PHARMACY

💻 **Pembelian Online**

**Toko Resmi**
🌐 Jepang: https://www.exobio.net/
🇰🇷 Korea: https://kr.exobio.net/
🌎 English: https://en.exobio.net/

**Mall Belanja Internasional**
🇯🇵 Qoo10 JEPANG: https://www.qoo10.jp/shop/EXOBIO (Jepang)
🇨🇳 Situs Resmi(CN): https://cn.curetembio.com/ (Cina, pembayaran USD tersedia di SHOP)

💬 **Pertanyaan Pembelian Produk China**
🇨🇳 WeChat: lele620918

💡 **Pertanyaan Pembelian**
📧 Email: curetembio@gmail.com
🌐 Website Resmi: https://www.exobio.net/`,
      relatedQuestions: ['Harga Produk'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-ingredients',
      keywords: ['bahan', 'komposisi', 'material', 'konsentrasi', 'konsentrasi tinggi'],
      category: 'Keamanan',
      question: 'Bahan Utama',
      answer: `Informasi Bahan Utama EXOBIO

🧪 **Bahan Inti Konsentrasi Sangat Tinggi**

**EXOSOME 3 / RED 3 (Pemutihan)**
💎 Bahan VITA
- EXOSOME 3: 620,000 PPM (Konsentrasi tinggi) + EXOSOME 5,000 PPM
- RED 3: 620,000 PPM (Harian)
- Efek: Memperbaiki hiperpigmentasi, mencerahkan warna kulit

**EXOSOME 5 / RED 5 (Kerut)**
✨ Salmon PDRN (Polydeoxyribonucleotide)
- EXOSOME 5: 10,000 PPM (Konsentrasi tinggi) + EXOSOME 5,000 PPM
- RED 5: 10,000 PPM (Harian)
- Efek: Regenerasi kulit, perbaikan kerut, penguatan elastisitas

**EXOSOME 7 / RED 7 (Menenangkan)**
🌿 CICA (Ekstrak Centella asiatica)
- EXOSOME 7: CICA + EXOSOME 760,000 PPM (Konsentrasi tinggi)
- RED 7: 7,600 PPM (Harian)
- Efek: Menenangkan kemerahan, memperkuat barrier kulit, hidrasi

🌟 **Produk 3-FREE (Tiga Bebas)**
❌ Bebas Pewangi
❌ Bebas Pewarna
❌ Bebas Alkohol
→ Aman untuk kulit sensitif!

✅ **Sertifikasi Keamanan**
- Diverifikasi oleh dermatolog
- Bahan yang digunakan dalam perawatan klinik (LDM, SONO Care)
- Bahan baku berkualitas tinggi digunakan

💡 **Memahami Perbedaan Konsentrasi**:
- EXOSOME: Perawatan intensif 3-4 kali/minggu
- RED: Perawatan konsisten harian
- Pilih atau kombinasikan sesuai tujuan!`,
      relatedQuestions: ['Stabilitas Produk', 'Efek Samping'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-10',
      keywords: ['barrier kulit', 'barrier', 'pelindung', 'perisai'],
      category: 'Menenangkan/Sensitif',
      question: 'Barrier Kulit',
      answer: `Penguatan Barrier Kulit - EXOSOME 7

🛡️ **Apa itu Barrier Kulit?**
Lapisan pelindung pada permukaan kulit yang melindungi dari iritasi eksternal dan mencegah kehilangan kelembaban.

**Gejala Barrier Lemah**:
- Mudah tersengat dan teriritasi
- Kering dan kencang
- Kemerahan sering
- Kosmetik tidak bekerja dengan baik

🌿 **Produk yang Direkomendasikan: EXOSOME 7 / RED 7**

**EXOSOME 7 (Perawatan Intensif)**
- CICA 760,000 PPM konsentrasi tinggi
- Gunakan 3-4 kali/minggu
- Pemulihan cepat barrier yang rusak

**RED 7 (Perawatan Harian)**
- CICA 7,600 PPM
- Dapat digunakan setiap hari
- Penguatan barrier konsisten

💪 **Efek Penguatan Barrier**:
1. Memblokir iritasi eksternal (debu halus, polusi)
2. Peningkatan retensi kelembaban
3. Pengurangan kemerahan·sensitivitas
4. Mencegah masalah kulit

📖 **Cara Penggunaan**:
1. Oleskan serum EXOBIO setelah mencuci muka
2. Selesaikan dengan krim

✨ **Efek yang Diharapkan**:
- 2 minggu: Iritasi berkurang, kelembaban meningkat
- 4 minggu: Kemerahan membaik, barrier pulih
- 8 minggu: Barrier kulit kuat lengkap

🎯 **Direkomendasikan Untuk**:
- Kulit sensitif
- Kemerahan sering
- Kulit kering dan kencang
- Iritasi kosmetik sering

💡 **TIP**: Kombinasikan EXOSOME 7 (3-4 kali/minggu) + RED 7 (harian) untuk hasil lebih cepat!`,
      relatedQuestions: ['Kulit Sensitif', 'Menenangkan', 'EXOSOME 7', 'RED 7'],
      productTags: ['EXOSOME 7', 'RED 7']
    }
  ],
  
  // 🔥 43 Quick Reply Keywords (Mencakup Semua Q&A)
  quickReplies: [
    // 🛒 Pembelian (Prioritas Utama)
    { text: '🛒 Cara Beli', query: 'beli' },
    
    // Masalah Kulit - Kerut/Penuaan (4)
    { text: '💫 Kerut', query: 'kerut' },
    { text: '💫 Kerut Halus', query: 'kerut halus' },
    { text: '💫 Kerut Mata', query: 'kerut mata' },
    { text: '💫 Garis Senyum', query: 'garis senyum' },
    
    // Masalah Kulit - Pemutihan/Pigmentasi (4)
    { text: '💎 Pemutihan', query: 'pemutihan' },
    { text: '✨ Melasma', query: 'melasma' },
    { text: '💎 Hiperpigmentasi', query: 'hiperpigmentasi' },
    { text: '💎 Kusam', query: 'kusam' },
    
    // Masalah Kulit - Jerawat/Masalah (4)
    { text: '🔴 Jerawat', query: 'jerawat' },
    { text: '🔴 Bruntusan', query: 'bruntusan' },
    { text: '🔴 Masalah', query: 'masalah kulit' },
    { text: '🔴 Bekas', query: 'bekas jerawat' },
    
    // Masalah Kulit - Menenangkan/Sensitif (5)
    { text: '🌸 Kemerahan', query: 'kemerahan' },
    { text: '🌿 Menenangkan', query: 'menenangkan' },
    { text: '🌸 Sensitif', query: 'kulit sensitif' },
    { text: '🛡️ Barrier', query: 'barrier kulit' },
    { text: '🛡️ Perawatan Barrier', query: 'penguatan barrier' },
    
    // Masalah Kulit - Elastisitas/Kendur (3)
    { text: '🌟 Elastisitas', query: 'elastisitas' },
    { text: '🌟 Kendur', query: 'kendur' },
    { text: '🌟 Lifting', query: 'lifting' },
    
    // Masalah Kulit - Hidrasi/Kelembaban (3)
    { text: '💧 Hidrasi', query: 'hidrasi' },
    { text: '💧 Kulit Kering', query: 'kulit kering' },
    { text: '💧 Kelembaban', query: 'kelembaban' },
    
    // Masalah Kulit - Pori-pori (2)
    { text: '🔹 Pori-pori', query: 'pori-pori' },
    { text: '🔹 Sebum', query: 'sebum' },
    
    // Info Produk (8)
    { text: '🎯 Rekomendasi Produk', query: 'rekomendasi' },
    { text: '📊 EXOSOME vs RED', query: 'perbedaan' },
    { text: '🏥 Tentang EXOBIO', query: 'EXOBIO' },
    { text: '✨ Efek', query: 'efek' },
    { text: '📖 Cara Pakai', query: 'cara pakai' },
    { text: '🔢 Nomor 3·5·7', query: '357' },
    { text: '💰 Harga', query: 'harga' },
    
    // Keamanan (2)
    { text: '⚠️ Efek Samping', query: 'efek samping' },
    { text: '🧪 Bahan', query: 'bahan' },
    
    // Produk Spesifik (6)
    { text: '💎 EXOSOME 3', query: 'EXOSOME 3' },
    { text: '✨ EXOSOME 5', query: 'EXOSOME 5' },
    { text: '🌿 EXOSOME 7', query: 'EXOSOME 7' },
    { text: '💚 RED 3', query: 'RED 3' },
    { text: '💚 RED 5', query: 'RED 5' },
    { text: '💚 RED 7', query: 'RED 7' }
  ],
  
  // ❓ Fallback response (tidak ditemukan)
  fallbackResponse: `Maaf, saya tidak menemukan informasi yang sesuai dengan pertanyaan Anda. 😥

Berikut adalah topik yang tersedia. Silakan pilih dari tombol balasan cepat di bawah atau masukkan kata kunci berikut:

🔍 **Masalah Kulit** (10 item)
• Pemutihan (EXOSOME 3) • Melasma (EXOSOME 3) • Kerut (EXOSOME 5)
• Elastisitas (EXOSOME 5) • Kemerahan (EXOSOME 7) • Menenangkan (EXOSOME 7)
• Barrier (EXOSOME 7) • Hidrasi (EXOSOME 7) • Jerawat (EXOSOME 7) • Pori-pori (EXOSOME 3/5)

📦 **Informasi Produk** (8 item)
• Rekomendasi Produk (Diagnosis AI) • EXOSOME vs RED (Perbedaan)
• Tentang EXOBIO (Pengenalan Merek) • Efek (Efek & Cara Penggunaan Produk)
• Cara Pakai (Panduan Penggunaan) • Nomor 3·5·7 (Arti Nomor) • Harga (Harga Produk)

🔬 **Keamanan** (2 item)
• Efek Samping (Informasi Keamanan) • Bahan (Bahan Utama)

💡 Silakan klik tombol balasan cepat untuk melihat informasi detail!`,

  // 43 kata kunci balasan cepat
  quickReplyKeywords: [
    // Metode pembelian
    { label: '🛒 Cara Beli', query: 'pembelian' },
    
    // Kerut/Penuaan
    { label: '💫 Kerut', query: 'kerut' },
    { label: '💫 Garis Halus', query: 'garis halus' },
    { label: '💫 Kerut Dalam', query: 'kerut dalam' },
    { label: '💫 Kerut Mata', query: 'kerut mata' },
    { label: '💫 Lipatan Nasolabial', query: 'lipatan nasolabial' },
    
    // Pemutihan/Pigmentasi
    { label: '💎 Pemutihan', query: 'pemutihan' },
    { label: '✨ Melasma', query: 'melasma' },
    { label: '💎 Hiperpigmentasi', query: 'hiperpigmentasi' },
    { label: '💎 Kulit Kusam', query: 'kulit kusam' },
    
    // Jerawat/Masalah
    { label: '🔴 Jerawat', query: 'jerawat' },
    { label: '🔴 Komedo', query: 'komedo' },
    { label: '🔴 Masalah', query: 'masalah' },
    { label: '🔴 Bekas Jerawat', query: 'bekas jerawat' },
    { label: '⭕ Pori-pori', query: 'pori-pori' },
    
    // Menenangkan/Sensitif
    { label: '🌸 Kemerahan', query: 'kemerahan' },
    { label: '🌿 Menenangkan', query: 'menenangkan' },
    { label: '🌸 Sensitif', query: 'sensitif' },
    { label: '🛡️ Barrier Kulit', query: 'barrier kulit' },
    { label: '🛡️ Penguatan Barrier', query: 'penguatan barrier' },
    
    // Elastisitas/Kendur
    { label: '🌟 Elastisitas', query: 'elastisitas' },
    { label: '🌟 Kendur', query: 'kendur' },
    { label: '🌟 Lifting', query: 'lifting' },
    
    // Hidrasi/Kelembaban
    { label: '💧 Hidrasi', query: 'hidrasi' },
    { label: '💧 Kulit Kering', query: 'kulit kering' },
    { label: '💧 Kelembaban', query: 'kelembaban' },
    
    // Cara Pakai
    { label: '📖 Cara Pakai', query: 'cara pakai' },
    { label: '📖 Jumlah', query: 'jumlah' },
    { label: '📖 Kombinasi', query: 'kombinasi' },
    { label: '🔬 Cara Pakai MTS', query: 'cara pakai MTS' },
    
    // Informasi Produk
    { label: '🎯 Rekomendasi', query: 'rekomendasi' },
    { label: '🔄 Perbedaan', query: 'perbedaan' },
    { label: '💡 Tentang EXOBIO', query: 'EXOBIO' },
    { label: '✅ Efek', query: 'efek' },
    { label: '🔢 Arti Nomor', query: '357' },
    { label: '💰 Harga', query: 'harga' },
    { label: '🧪 Bahan', query: 'bahan' },
    
    // Produk EXOSOME
    { label: 'EXOSOME 3', query: 'EXOSOME 3' },
    { label: 'EXOSOME 5', query: 'EXOSOME 5' },
    { label: 'EXOSOME 7', query: 'EXOSOME 7' },
    
    // Keamanan
    { label: '⚠️ Efek Samping', query: 'efek samping' },
    { label: '✅ Keamanan', query: 'keamanan' },
    
    // Produk RED
    { label: '💚 RED 3', query: 'RED 3' },
    { label: '💚 RED 5', query: 'RED 5' },
    { label: '💚 RED 7', query: 'RED 7' }
  ]
};

// Node.js module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHATBOT_DATA;
}
