/**
 * EXOBIO AI Perundingan Kulit Chatbot
 * @description EXOBIO adalah serum penjagaan kulit premium 357 yang bermula dari klinik dermatologi - 32 soalan jawab penjagaan kulit
 * @version 1.0.0
 * @language ms (Malay - Bahasa Melayu)
 * @lastUpdated 2026-02-21
 * @totalQuestions 32
 */

const CHATBOT_DATA = {
  version: '1.0.0',
  lastUpdated: '2026-02-21',
  language: 'ms',
  totalQuestions: 32,
  
  // 🗂️ Kategori (10 categories)
  categories: [
    'Kedutan/Anti-penuaan',          // Wrinkles/Anti-aging
    'Pemutihan/Pigmentasi',          // Whitening/Pigmentation
    'Jerawat/Masalah',               // Acne/Trouble
    'Liang Pori',                    // Pores
    'Keanjalan/Lifting',             // Elasticity/Lifting
    'Hidrasi',                       // Hydration
    'Menenangkan/Sensitif',          // Soothing/Sensitive
    'Cara Penggunaan',               // Usage
    'Maklumat Produk',               // Product Info
    'Keselamatan'                    // Safety
  ],
  
  // 💬 32 Q&A Data
  qaList: [
    // ============================================================
    // Kedutan/Anti-penuaan (Wrinkles/Anti-aging) - 4 items
    // ============================================================
    {
      id: 'wrinkles-01',
      keywords: ['kedutan', 'anti-penuaan', 'penghapus kedutan', 'penjagaan kedutan', 'penuaan'],
      category: 'Kedutan/Anti-penuaan',
      question: 'Kedutan',
      answer: `Kami mengesyorkan **EXOSOME 5** untuk memperbaiki kedutan

Teknologi Exosome 357™ memulihkan keanjalan kulit dan menjaga dari kedutan halus hingga kedutan dalam

💡 **Cara Penggunaan**: Langkah pertama selepas mencuci muka, pagi dan malam`,
      relatedQuestions: ['Kedutan Halus', 'Kedutan Mata', 'Garisan Senyum'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['kedutan halus', 'kedutan kecil', 'kedutan ringan'],
      category: 'Kedutan/Anti-penuaan',
      question: 'Kedutan Halus',
      answer: `Mulakan dengan **RED 5** untuk kedutan halus peringkat awal

Produk penjagaan harian untuk kegunaan setiap hari

Jika ingin pembaikan lebih cepat, gabungkan dengan **EXOSOME 5** digunakan 3-4 kali seminggu`,
      relatedQuestions: ['Kedutan', 'Kedutan Mata'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['kedutan mata', 'penjagaan mata', 'kaki ayam'],
      category: 'Kedutan/Anti-penuaan',
      question: 'Kedutan Mata',
      answer: `Kami mengesyorkan **EXOSOME 5** untuk memperbaiki kedutan mata

💡 **Cara Penggunaan**: Sapukan dengan lembut di kawasan sekitar mata
⚠️ **Perhatian**: Elakkan sentuhan langsung dengan mata`,
      relatedQuestions: ['Kedutan', 'Kedutan Halus'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['garisan senyum', 'lipatan nasolabial', 'lipatan pipi'],
      category: 'Kedutan/Anti-penuaan',
      question: 'Garisan Senyum',
      answer: `Kami mengesyorkan **EXOSOME 5** + **RED 5** untuk penjagaan berganda kedutan dalam

💡 **Jadual Penggunaan**:
- Pagi: RED 5 (Penjagaan harian)
- Malam: EXOSOME 5 (3-4 kali/minggu, Penjagaan intensif)`,
      relatedQuestions: ['Kedutan', 'Kedutan Halus'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Pemutihan/Pigmentasi (Whitening/Pigmentation) - 4 items
    // ============================================================
    {
      id: 'whitening-01',
      keywords: ['pemutihan', 'mencerahkan', 'kulit cerah', 'warna kulit sekata'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Pemutihan',
      answer: `Kami mengesyorkan **EXOSOME 3** untuk mencerahkan kulit

Kandungan vitamin kepekatan tinggi (VITA 620,000 PPM) menjadikan kulit cerah dan bersih

💡 **Cara Penggunaan**: Gunakan 3-4 kali seminggu, fokus pada kawasan gelap`,
      relatedQuestions: ['Melasma', 'Bintik Gelap', 'Kusam'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-02',
      keywords: ['melasma', 'bintik melasma', 'jeragat'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Melasma',
      answer: `Kami mengesyorkan **EXOSOME 3** + **RED 3** untuk melasma

💡 **Kaedah penjagaan intensif**:
1. RED 3: Penjagaan harian (Pagi & Malam)
2. EXOSOME 3: Penjagaan intensif 3-4 kali/minggu
3. Nota: Penggunaan pelindung matahari wajib!`,
      relatedQuestions: ['Pemutihan', 'Bintik Gelap'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['bintik gelap', 'bintik', 'noda kulit'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Bintik Gelap',
      answer: `Kami mengesyorkan **EXOSOME 3** untuk memperbaiki bintik gelap

Bahan aktif VITA 620,000 PPM memperbaiki pigmentasi kulit

💡 **Petua Penggunaan**: Sapukan fokus pada kawasan bintik selepas mencuci muka`,
      relatedQuestions: ['Pemutihan', 'Melasma', 'Kusam'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-04',
      keywords: ['hiperpigmentasi', 'pigmentasi', 'melanin', 'kusam'],
      category: 'Pemutihan/Pigmentasi',
      question: 'Hiperpigmentasi',
      answer: `Kami mengesyorkan **EXOSOME 3** untuk memperbaiki hiperpigmentasi

Kandungan dalam exosome menghalang pembentukan melanin

💡 **Cara Penggunaan**: Gunakan 3-4 kali seminggu pada kawasan hiperpigmentasi
🌞 **Perhatian**: Penggunaan pelindung matahari wajib`,
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
      answer: `EXOBIO selamat untuk kulit berjerawat!

🎯 **Produk yang disyorkan**
- **EXOSOME 7**: Menenangkan dan regenerasi
- **RED 7**: Penjagaan harian

✨ **Kesan yang dijangka**
- Menenangkan jerawat
- Pemulihan cepat
- Mengukuhkan penghalang kulit
- Memperbaiki parut jerawat`,
      relatedQuestions: ['Masalah Kulit', 'Parut Jerawat'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['masalah kulit', 'keradangan', 'kemerahan'],
      category: 'Jerawat/Masalah',
      question: 'Masalah Kulit',
      answer: `Kami mengesyorkan **EXOSOME 7** + **RED 7** untuk penjagaan berganda

💡 **Cara Penggunaan**:
- EXOSOME 7: 3-4 kali/minggu, fokus pada kawasan bermasalah
- RED 7: Gunakan setiap hari
- Kesan: Menenangkan cepat, mencegah berulang`,
      relatedQuestions: ['Jerawat', 'Parut Jerawat', 'Kulit Sensitif'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['parut jerawat', 'tanda jerawat', 'parut', 'lubang parut jerawat'],
      category: 'Jerawat/Masalah',
      question: 'Parut Jerawat',
      answer: `Kami mengesyorkan **EXOSOME 3** untuk memperbaiki parut jerawat

Pembaikan pigmentasi (pemutihan) + Menenangkan + Regenerasi

✅ EXOBIO selamat dan boleh digunakan walaupun pada kulit berjerawat`,
      relatedQuestions: ['Jerawat', 'Masalah Kulit', 'Pemutihan'],
      productTags: ['EXOSOME 3', 'EXOSOME 7']
    },

    // ============================================================
    // Liang Pori (Pores) - 2 items
    // ============================================================
    {
      id: 'pores-01',
      keywords: ['liang pori', 'pori besar', 'mengecilkan pori'],
      category: 'Liang Pori',
      question: 'Liang Pori',
      answer: `Kami mengesyorkan **EXOSOME 5** untuk penjagaan mengecilkan pori

💡 **Cara Penggunaan**:
- Gunakan sebagai langkah pertama selepas mencuci muka, pagi dan malam
- Fokus pada kawasan liang pori`,
      relatedQuestions: ['Sebum', 'Kedutan'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'pores-02',
      keywords: ['sebum', 'kulit berminyak', 'pengeluaran minyak'],
      category: 'Liang Pori',
      question: 'Sebum',
      answer: `Kami mengesyorkan **RED 7** untuk mengawal sebum

💡 **Cara Penggunaan**: Gunakan setiap hari, pagi dan malam, selepas mencuci muka
⚠️ **Perhatian**: Elakkan mencampur dengan produk berminyak lain`,
      relatedQuestions: ['Liang Pori', 'Jerawat'],
      productTags: ['RED 7', 'EXOSOME 7']
    },

    // ============================================================
    // Keanjalan/Lifting (Elasticity/Lifting) - 2 items
    // ============================================================
    {
      id: 'elasticity-01',
      keywords: ['keanjalan', 'kekencangan', 'mengencangkan kulit'],
      category: 'Keanjalan/Lifting',
      question: 'Keanjalan',
      answer: `Kami mengesyorkan **EXOSOME 5** untuk meningkatkan keanjalan kulit

Kandungan Salmon PDRN 10,000 PPM menggalakkan pengeluaran kolagen dan mengencangkan kulit

💡 **Cara Penggunaan**: Sapukan 3-4 kali seminggu, urut ke arah atas`,
      relatedQuestions: ['Kedutan', 'Kendur', 'Lifting'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['kendur', 'kendur muka', 'lifting'],
      category: 'Keanjalan/Lifting',
      question: 'Kendur Muka',
      answer: `Kami mengesyorkan **EXOSOME 5** + **RED 5** untuk penjagaan berganda

💡 **Kaedah penjagaan berganda**:
- EXOSOME 5: 3-4 kali/minggu (Penjagaan intensif)
- RED 5: Gunakan setiap hari (Penjagaan harian)
- Urut ke arah atas dan keluar`,
      relatedQuestions: ['Keanjalan', 'Kedutan'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Hidrasi (Hydration) - 2 items
    // ============================================================
    {
      id: 'hydration-01',
      keywords: ['hidrasi', 'kelembapan', 'melembapkan'],
      category: 'Hidrasi',
      question: 'Hidrasi',
      answer: `Kami mengesyorkan **RED 7** untuk kulit kering

💡 **Cara Penggunaan**: Gunakan setiap hari, langkah pertama selepas mencuci muka
💧 **Petua**: Sapukan pada kulit serta-merta selepas mencuci muka untuk meningkatkan kesan`,
      relatedQuestions: ['Kulit Kering', 'Kulit Sensitif'],
      productTags: ['RED 5', 'RED 7']
    },
    {
      id: 'hydration-02',
      keywords: ['kulit kering', 'kulit ketat', 'kulit dehidrasi'],
      category: 'Hidrasi',
      question: 'Kulit Kering',
      answer: `Kami mengesyorkan **EXOSOME 5** + **EXOSOME 7** untuk penjagaan premium berganda

💡 **Kesan pengukuhan penghalang kulit**:
- Memberikan kelembapan dalam + Mengukuhkan penghalang
- Gunakan setiap hari bersama-sama
- Minum air yang cukup!`,
      relatedQuestions: ['Hidrasi', 'Kulit Sensitif', 'Penghalang Kulit'],
      productTags: ['EXOSOME 5', 'EXOSOME 7', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Menenangkan/Sensitif (Soothing/Sensitive) - 2 items
    // ============================================================
    {
      id: 'soothing-01',
      keywords: ['menenangkan', 'kerengsaan', 'kemerahan'],
      category: 'Menenangkan/Sensitif',
      question: 'Menenangkan',
      answer: `Kami mengesyorkan **RED 7** untuk kulit sensitif

Memberikan kesan menenangkan dengan bahan lembut tanpa kerengsaan kulit

✨ **EXOBIO adalah produk 3-FREE!**
- Bebas Pewangi
- Bebas Pewarna
- Bebas Alkohol`,
      relatedQuestions: ['Kulit Sensitif', 'Masalah Kulit', 'Penghalang Kulit'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'soothing-02',
      keywords: ['kulit sensitif', 'sensitif', 'kulit mudah rengsang', 'rosacea'],
      category: 'Menenangkan/Sensitif',
      question: 'Kulit Sensitif',
      answer: `Kami mengesyorkan **EXOSOME 7** untuk kulit sensitif

🌿 **Kandungan CICA 760,000 PPM**:
- Menenangkan serta-merta
- Mengukuhkan penghalang kulit
- Mengurangkan kemerahan

💡 **Penggunaan selamat**: Sistem 3-FREE (Bebas Pewangi/Pewarna/Alkohol)`,
      relatedQuestions: ['Menenangkan', 'Masalah Kulit', 'Penghalang Kulit'],
      productTags: ['EXOSOME 7', 'RED 7']
    },

    // ============================================================
    // Cara Penggunaan (Usage) - 3 items
    // ============================================================
    {
      id: 'usage-01',
      keywords: ['cara guna', 'susunan penggunaan', 'bila digunakan', 'panduan penggunaan'],
      category: 'Cara Penggunaan',
      question: 'Cara Penggunaan',
      answer: `EXOBIO - Panduan Penggunaan Asas

💡 **Susunan Penggunaan**:
1. Cuci muka
2. **Serum EXOBIO** (Langkah pertama!)
3. Produk Anda (Toner, Serum, Krim)

✅ **Nota Penting**:
- Serum EXOBIO mempunyai kelikatan, sapukan terus
- EXOSOME: 3-4 kali/minggu
- RED: Gunakan setiap hari

💡 **Petua**: Gunakan selepas mencuci muka untuk meningkatkan kesan!

✨ **Tambah ke rutin anda yang sedia ada**
- Tidak perlu menukar produk yang ada
- Cukup tambah EXOBIO di langkah pertama
- Kesan meningkat⬆️

🌟 **Selamat untuk kulit sensitif dengan 3-FREE**
- Bebas Pewangi ❌
- Bebas Pewarna ❌
- Bebas Alkohol ❌`,
      relatedQuestions: ['Jumlah Penggunaan', 'Penggunaan Gabungan'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-02',
      keywords: ['jumlah penggunaan', 'jumlah yang sesuai', 'berapa banyak', 'tempoh penggunaan'],
      category: 'Cara Penggunaan',
      question: 'Jumlah Penggunaan',
      answer: `Jumlah Penggunaan yang Sesuai untuk EXOBIO

💡 **Jumlah setiap penggunaan**:
- Sapukan 2 kali pada kawasan yang ingin dijaga

📦 **Tempoh penggunaan setiap set**:
- EXOSOME 1 SET (5ml × 5): Kira-kira 3-4 minggu (3-4 kali/minggu)
- RED 1 SET (15ml × 2): Kira-kira 3-4 minggu (Setiap hari)`,
      relatedQuestions: ['Cara Penggunaan', 'Penggunaan Gabungan'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-03',
      keywords: ['penggunaan gabungan', 'guna bersama', 'guna beberapa produk', 'gabungan'],
      category: 'Cara Penggunaan',
      question: 'Penggunaan Gabungan',
      answer: `Ya! Boleh digunakan bersama

💡 **Gabungan yang disyorkan**:

**1️⃣ Kedutan + Pemutihan**
- EXOSOME 5 atau 3: 2-3 kali/minggu berselang-seli

**2️⃣ Intensif + Harian**
- EXOSOME (3-4 kali/minggu) + RED (Setiap hari)
- Disyorkan nombor yang sama (3, 5, atau 7)

**3️⃣ Beberapa masalah**
- RED (Siang hari) + EXOSOME (Malam hari)

✅ Boleh menggunakan beberapa produk EXOBIO bersama-sama!`,
      relatedQuestions: ['Cara Penggunaan', 'Jumlah Penggunaan'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-04',
      keywords: ['cara guna MTS', 'MTS', 'dermaroller', 'roller kulit'],
      category: 'Cara Penggunaan',
      question: 'Cara Guna MTS',
      answer: `🔬 **Cara Penggunaan MTS (Dermaroller)**

📋 **Cara Penggunaan**:
**01.** Sebelum digunakan, rendam dermaroller (MTS) dalam etanol pembasmi kuman selama 5-10 minit untuk membasmi kuman secara menyeluruh.

**02.** Selepas membersihkan muka dengan pembersih, sediakan kulit anda.

**03.** Sapukan ampul Exosome EXOBIO secara generous pada kulit anda.

**04.** Gulungkan dermaroller dengan lembut di kawasan yang dikehendaki dengan tekanan yang konsisten. Ulangi sehingga anda merasakan rangsangan ringan pada kulit.

**05.** Tepuk-tepuk lembut sisa ampul untuk diserap, kemudian selesaikan dengan krim penenang pada kulit yang memerah.

⚠️ **Panduan Penggunaan**:
• MTS pada prinsipnya adalah produk sekali guna, dengan maksimum 3 kali penggunaan.
• Jika menggunakan semula, pastikan untuk membasmi kuman secara menyeluruh setiap kali sebelum digunakan.
• Disyorkan menggunakan 1 kali setiap 3-4 minggu.

💡 **Kesan**: Apabila digunakan dengan ampul Exosome, kadar penyerapan kulit meningkat untuk hasil yang lebih baik!`,
      relatedQuestions: ['Cara Penggunaan', 'Penggunaan Gabungan'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },

    // ============================================================
    // Maklumat Produk (Product Info) - 10 items
    // ============================================================
    {
      id: 'product-01',
      keywords: ['EXOSOME', 'RED', 'perbezaan', 'perbandingan', 'beza'],
      category: 'Maklumat Produk',
      question: 'Perbezaan EXOSOME dan RED',
      answer: `EXOSOME vs RED - Perbezaan

🔬 **EXOSOME (Penjagaan Intensif)**
- Kepekatan Exosome tinggi
- Gunakan 3-4 kali/minggu
- Pembaikan cepat
- Untuk masalah kulit serius

💚 **RED (Penjagaan Harian)**
- Formula seimbang
- Gunakan setiap hari
- Bahan lembut
- Sesuai untuk kegunaan harian

💡 **Panduan pemilihan**:
- Masalah serius → EXOSOME
- Penjagaan harian → RED
- Kesan terbaik → Gabungkan kedua-duanya!`,
      relatedQuestions: ['Cadangan Produk', 'Maksud Nombor 3·5·7'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-02',
      keywords: ['3', '5', '7', 'nombor', 'maksud nombor'],
      category: 'Maklumat Produk',
      question: 'Maksud Nombor 3, 5, 7',
      answer: `Maksud Nombor 3️⃣5️⃣7️⃣ EXOBIO

**3️⃣ EXOSOME/RED 3 - Pemutihan/Pigmentasi**
💎 Kandungan VITA 620,000 PPM
- Memperbaiki melasma, bintik gelap
- Mencerahkan warna kulit

**5️⃣ EXOSOME/RED 5 - Kedutan/Keanjalan**
✨ Salmon PDRN 10,000 PPM
- Memperbaiki kedutan
- Meningkatkan keanjalan

**7️⃣ EXOSOME/RED 7 - Menenangkan, Hidrasi, Penghalang**
🌿 CICA + EXOSOME 760,000 PPM
- Menenangkan, Kulit Sensitif
- Hidrasi, Mengukuhkan Penghalang Kulit

💡 **Panduan pemilihan**:
- Satu masalah → Pilih 1 nombor
- Beberapa masalah → Gabungkan 2-3 nombor!`,
      relatedQuestions: ['Cadangan Produk', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['cadangan', 'pilih produk', 'produk yang sesuai', 'saran produk', 'cadangan produk'],
      category: 'Maklumat Produk',
      question: 'Cadangan Produk',
      answer: `🎯 **Diagnosis Kulit AI - Cadangan Peribadi**

Analisis 10 penunjuk kulit dalam 30 saat
→ Cadangan produk yang paling sesuai untuk Anda!

👉 **https://curetembio.xyz**

💡 **Pilihan pantas berdasarkan masalah**:
- Kedutan → EXOSOME 5
- Pemutihan → EXOSOME 3
- Hidrasi/Menenangkan/Penghalang → EXOSOME 7
- Penjagaan harian → Siri RED`,
      relatedQuestions: ['EXOSOME vs RED', 'Maksud Nombor 3·5·7'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-04',
      keywords: ['EXOBIO', 'pengenalan', 'jenama', 'syarikat', 'tentang EXOBIO'],
      category: 'Maklumat Produk',
      question: 'Tentang EXOBIO',
      answer: `EXOBIO - Pengenalan Jenama

🏥 **Serum penjagaan rumah dari Peralatan Dermatologi Profesional**

**Apa itu EXOBIO?**
Serum Exosome yang benar-benar digunakan dalam peralatan dermatologi profesional

🔬 **Berasal dari peralatan dermatologi profesional**
- **LDM Care**: Regenerasi kulit ultrasonik
- **SONO Care**: Penembusan bahan dalam

→ Serum EXOBIO digunakan sebagai bahan teras

💡 **Siapa yang patut menggunakan**:
- Usia 30an: Tanda penuaan awal
- Usia 40an: Penjagaan anti-penuaan menyeluruh
- Selepas bersalin: Pemulihan kulit rosak
- Masalah: Kedutan, Melasma, dll

📊 **Kredibiliti**:
- Diiktiraf oleh pakar dermatologi
- Kadar pembelian semula 61%
- Serum kepekatan tinggi`,
      relatedQuestions: ['Kesan', 'LDM Care', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-05',
      keywords: ['LDM', 'LDM Care', 'rawatan LDM'],
      category: 'Maklumat Produk',
      question: 'LDM Care',
      answer: `🏥 **Apa itu LDM Care?**

**LDM (Local Dynamic Micro-massage)**
- Peralatan regenerasi kulit berasaskan ultrasonik
- Penembusan bahan dalam ke kulit
- Digunakan di klinik dermatologi

💡 **Serum EXOBIO**
→ Adalah bahan teras yang digunakan dalam rawatan LDM Care!

✨ **Boleh dijaga di rumah**
Sekarang anda boleh mengalami serum yang sama di rumah`,
      relatedQuestions: ['SONO Care', 'Tentang EXOBIO'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-06',
      keywords: ['SONO', 'SONO Care', 'rawatan SONO'],
      category: 'Maklumat Produk',
      question: 'SONO Care',
      answer: `🏥 **Apa itu SONO Care?**

**Rawatan mendalam menggunakan serum EXOBIO**
- Penembusan bahan aktif dalam ke kulit
- Digunakan di klinik dermatologi
- Boleh dijaga di rumah

💡 **Penjagaan di rumah**
Gunakan dengan MTS roller (0.25mm) untuk meningkatkan penyerapan`,
      relatedQuestions: ['LDM Care', 'MTS Roller'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'exosome 3'],
      category: 'Maklumat Produk',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - Penjagaan Pemutihan Intensif**

✨ **BIO 357™ EXOSOME** adalah serum Exosome357 premium yang bermula dari klinik dermatologi dan diiktiraf oleh farmasi, meningkatkan kesan penjagaan kulit ke tahap seterusnya.

🎯 **Kandungan Teras**
- **VITA 620,000 PPM** (Vitamin kepekatan sangat tinggi)
- **EXOSOME 5,000 PPM** (Exosome kepekatan tinggi)
- Bahan fungsian pemutihan bersijil

💡 **Kesan Utama**
- Memperbaiki melasma
- Memperbaiki bintik gelap
- Memperbaiki hiperpigmentasi
- Meratakan warna kulit
- Mencerahkan kulit

📅 **Cara Penggunaan**
- **Kekerapan**: 3-4 kali/minggu
- **Masa**: Langkah pertama selepas mencuci muka

💚 **Penjagaan harian?** Disyorkan RED 3 (Kegunaan harian)`,
      relatedQuestions: ['RED 3', 'Pemutihan', 'Melasma'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'exosome 5'],
      category: 'Maklumat Produk',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - Penjagaan Keanjalan Intensif**

✨ **BIO 357™ EXOSOME** adalah serum Exosome357 premium yang bermula dari klinik dermatologi dan diiktiraf oleh farmasi, meningkatkan kesan penjagaan kulit ke tahap seterusnya.

🎯 **Kandungan Teras**
- **Salmon PDRN 10,000 PPM** (DNA salmon)
- **EXOSOME 5,000 PPM** (Exosome kepekatan tinggi)
- Bahan fungsian pembaikan kedutan bersijil

💡 **Kesan Utama**
- Memperbaiki kedutan dalam
- Memulihkan keanjalan kulit
- Anti-penuaan
- Meningkatkan kekencangan
- Kesan lifting

📅 **Cara Penggunaan**
- **Kekerapan**: 3-4 kali/minggu
- **Masa**: Langkah pertama selepas mencuci muka

💚 **Penjagaan harian?** Disyorkan RED 5 (Kegunaan harian)`,
      relatedQuestions: ['RED 5', 'Kedutan', 'Keanjalan'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'exosome 7'],
      category: 'Maklumat Produk',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - Penjagaan Menenangkan Intensif**

✨ **BIO 357™ EXOSOME** adalah serum Exosome357 premium yang bermula dari klinik dermatologi dan diiktiraf oleh farmasi, meningkatkan kesan penjagaan kulit ke tahap seterusnya.

🎯 **Kandungan Teras**
- **CICA (Ekstrak Centella asiatica)**
- **EXOSOME 760,000 PPM** (Exosome kepekatan sangat tinggi)
- Bahan menenangkan kulit

💡 **Kesan Utama**
- Bekalan hidrasi
- Kesan menenangkan
- Menenangkan jerawat, masalah kulit
- Mengurangkan kemerahan
- Memperbaiki kulit sensitif
- Mengukuhkan penghalang kulit
- Menggalakkan regenerasi kulit

📅 **Cara Penggunaan**
- **Kekerapan**: 3-4 kali/minggu
- **Masa**: Langkah pertama selepas mencuci muka

⚡ **Ciri**
- Selamat untuk kulit sensitif
- Penjagaan kulit bermasalah
- Sensasi menenangkan serta-merta

💚 **Penjagaan harian?** Disyorkan RED 7 (Kegunaan harian)`,
      relatedQuestions: ['RED 7', 'Menenangkan', 'Kulit Sensitif'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'red 3'],
      category: 'Maklumat Produk',
      question: 'RED 3',
      answer: `💚 **RED 3 - Penjagaan Pemutihan Harian**

✨ **BIO 357™ RED** adalah serum 357 harian yang bermula dari klinik dermatologi dan diiktiraf oleh farmasi, direka untuk kegunaan harian tanpa beban sebagai langkah pertama dalam penjagaan kulit.

🎯 **Kandungan Teras**
- **VITA 620,000 PPM** (Vitamin kepekatan sangat tinggi)
- Bahan fungsian pemutihan bersijil
- Formula dioptimumkan untuk kegunaan harian

💡 **Kesan Utama**
- Mencegah melasma dan bintik
- Mencerahkan warna kulit
- Memperbaiki kusam
- Kegunaan harian untuk meningkatkan ketelusan kulit

📅 **Cara Penggunaan**
- **Kekerapan**: Setiap hari (pagi/malam)
- **Masa**: Langkah pertama selepas mencuci muka

💡 **Penjagaan harian + Penjagaan intensif**
- Gabungan **RED 3** (Harian) + **EXOSOME 3** (3-4 kali/minggu) disyorkan
- Memaksimumkan kesan penjagaan intensif

🔬 **Penjagaan intensif?** Disyorkan EXOSOME 3 (3-4 kali/minggu)`,
      relatedQuestions: ['EXOSOME 3', 'Pemutihan', 'Melasma'],
      productTags: ['RED 3', 'EXOSOME 3']
    },
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'red 5'],
      category: 'Maklumat Produk',
      question: 'RED 5',
      answer: `💚 **RED 5 - Penjagaan Keanjalan Harian**

✨ **BIO 357™ RED** adalah serum 357 harian yang bermula dari klinik dermatologi dan diiktiraf oleh farmasi, direka untuk kegunaan harian tanpa beban sebagai langkah pertama dalam penjagaan kulit.

🎯 **Kandungan Teras**
- **Salmon PDRN 10,000 PPM** (DNA salmon)
- Bahan fungsian pembaikan kedutan bersijil
- Formula dioptimumkan untuk kegunaan harian

💡 **Kesan Utama**
- Mencegah kedutan halus
- Mengekalkan keanjalan kulit
- Anti-penuaan
- Kegunaan harian untuk meningkatkan keanjalan kulit

📅 **Cara Penggunaan**
- **Kekerapan**: Setiap hari (pagi/malam)
- **Masa**: Langkah pertama selepas mencuci muka

💡 **Penjagaan harian + Penjagaan intensif**
- Gabungan **RED 5** (Harian) + **EXOSOME 5** (3-4 kali/minggu) disyorkan
- Penjagaan intensif untuk kedutan dalam

🔬 **Penjagaan intensif?** Disyorkan EXOSOME 5 (3-4 kali/minggu)`,
      relatedQuestions: ['EXOSOME 5', 'Kedutan', 'Keanjalan'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'red 7'],
      category: 'Maklumat Produk',
      question: 'RED 7',
      answer: `💚 **RED 7 - Penjagaan Menenangkan Harian**

✨ **BIO 357™ RED** adalah serum 357 harian yang bermula dari klinik dermatologi dan diiktiraf oleh farmasi, direka untuk kegunaan harian tanpa beban sebagai langkah pertama dalam penjagaan kulit.

🎯 **Kandungan Teras**
- **CICA 7,600 PPM** (Ekstrak Centella asiatica)
- Bahan menenangkan kulit
- Formula dioptimumkan untuk kegunaan harian

💡 **Kesan Utama**
- Bekalan hidrasi
- Kesan menenangkan
- Mencegah jerawat dan masalah kulit
- Mengurangkan kemerahan
- Menguruskan kulit sensitif
- Kegunaan harian mengukuhkan penghalang kulit

📅 **Cara Penggunaan**
- **Kekerapan**: Setiap hari (pagi/malam)
- **Masa**: Langkah pertama selepas mencuci muka

💡 **Penjagaan harian + Penjagaan intensif**
- Gabungan **RED 7** (Harian) + **EXOSOME 7** (3-4 kali/minggu) disyorkan
- Penjagaan intensif untuk kulit bermasalah

🔬 **Penjagaan intensif?** Disyorkan EXOSOME 7 (3-4 kali/minggu)`,
      relatedQuestions: ['EXOSOME 7', 'Menenangkan', 'Kulit Sensitif'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'effect-01',
      keywords: ['kesan', 'hasil', 'bila', 'pembaikan', 'perubahan'],
      category: 'Maklumat Produk',
      question: 'Kesan EXOBIO',
      answer: `Kesan dan Panduan Penggunaan Produk EXOBIO

🏥 **Versi Penjagaan Rumah dari Serum Dermatologi Profesional**

EXOBIO adalah serum yang benar-benar digunakan dalam rawatan peralatan profesional seperti **LDM Care** dan **SONO Care** di klinik dermatologi. Bahan yang telah disahkan secara klinikal kini tersedia untuk penjagaan di rumah.

💡 **Cara Penggunaan - Langkah Pertama Selepas Mencuci Muka!**

✨ **Kekalkan Produk yang Sedia Ada**
- Tambah produk EXOBIO sebagai **langkah pertama** selepas mencuci muka
- Teruskan menggunakan toner, serum, krim yang sedia ada
- Kesan meningkat tanpa mengubah rutin! ⬆️

📅 **Bila Hasil Kelihatan**

⏰ **Perubahan kulit kelihatan selepas 4 minggu**
- **1-2 minggu**: Tekstur kulit bertambah baik, kelembapan meningkat
- **3-4 minggu**: Warna kulit lebih cerah, keanjalan pulih
- **Selepas 4 minggu**: Transformasi penuh - keseimbangan kulit stabil
- **8-12 minggu**: Pembaikan intensif kedutan, melasma disahkan

✨ **Penstabilan Keseimbangan Kulit**
- Penghalang kulit dikukuhkan, lebih tahan terhadap kerengsaan luaran
- Keseimbangan kelembapan-minyak
- Kekuatan semula jadi kulit dipulihkan

🎯 **Pilih Produk yang Sempurna untuk Anda**

**Kaedah 1️⃣: Berdasarkan Masalah**
- **3**: Pemutihan, melasma, kusam
- **5**: Kedutan, keanjalan, lifting
- **7**: Menenangkan, masalah, sensitif, hidrasi, penghalang kulit

**Kaedah 2️⃣: Diagnosis Kulit AI (Disyorkan!)** 🎯
- Analisis 10 penunjuk kulit dalam 30 saat
- Cadangan produk peribadi
- Penjagaan kulit lebih cekap
- 👉 https://curetembio.xyz

💚 **Penjagaan Intensif vs Penjagaan Harian**

**Siri EXOSOME** (Penjagaan Intensif)
- Gunakan 3-4 kali/minggu
- Pembaikan cepat dengan bahan kepekatan tinggi
- Mengatasi masalah kulit serius

**Siri RED** (Penjagaan Harian)
- Boleh digunakan setiap hari
- Penjagaan berterusan dengan harga berpatutan
- Mengekalkan keseimbangan kulit

💡 **Kaedah Paling Berkesan**
→ **EXOSOME + RED Penjagaan Berganda**
→ Hasil terbaik dengan penjagaan intensif + pengurusan harian!

🌟 **Kelebihan EXOBIO**
✅ Bahan rawatan klinik profesional
✅ Kesan meningkat sambil mengekalkan rutin yang sedia ada
✅ Perubahan jelas selepas 4 minggu
✅ Diiktiraf oleh pakar dermatologi
✅ Kadar pembelian semula 61% (Kepuasan pelanggan terbukti)`,
      relatedQuestions: ['Tentang EXOBIO', 'Cadangan Produk'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Keselamatan (Safety) - 4 items
    // ============================================================
    {
      id: 'mts-01',
      keywords: ['MTS', 'derma roller', 'microneedle', 'roller'],
      category: 'Cara Penggunaan',
      question: 'MTS Roller',
      answer: `Derma Roller MTS Boleh Dijaga di Rumah!

🔬 **Cara Penggunaan**:
- Microneedle 0.25mm disyorkan
- 1-2 kali sebulan
- Sapukan produk EXOBIO selepas menggunakan MTS

✨ **Kesan**:
- Penyerapan EXOBIO meningkat dengan ketara
- Regenerasi kulit digalakkan
- Hasil lebih cepat kelihatan

⚠️ **Perhatian**:
- Mesti menggunakan 0.25mm atau lebih kecil
- Elakkan penggunaan berlebihan
- Gunakan hanya apabila kulit dalam keadaan baik
- Elakkan apabila kulit sensitif atau bermasalah

💡 **Susunan Penggunaan MTS**:
1. Cuci muka
2. MTS roller (0.25mm)
3. Serta-merta sapukan produk EXOBIO
4. Krim selepas diserap`,
      relatedQuestions: ['Cara Penggunaan', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'safety-02',
      keywords: ['kesan sampingan', 'tindak balas buruk', 'alahan'],
      category: 'Keselamatan',
      question: 'Kesan Sampingan',
      answer: `Kesan Sampingan dan Tindak Balas Buruk

✅ **EXOBIO adalah Produk Selamat**

⚠️ **Tindak Balas yang Mungkin Berlaku (Jarang)**:
- Kemerahan sementara
- Rasa gatal ringan
- Pengelupasan kulit (Proses regenerasi normal)

🚨 **Bila Perlu Berhenti dan Rujuk Profesional**:
- Gatal atau kemerahan teruk
- Ruam atau biduran
- Bengkak

💡 **Pencegahan**:
- Mulakan dengan jumlah kecil
- Pantau keadaan kulit`,
      relatedQuestions: ['Kestabilan Produk', 'Kulit Sensitif'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'safety-03',
      keywords: ['kestabilan', 'keselamatan', 'selamat', 'pengesahan', 'jaminan'],
      category: 'Keselamatan',
      question: 'Kestabilan Produk',
      answer: `Kestabilan Produk EXOBIO

✅ **Disahkan oleh Dermatologi & Farmasi**
EXOBIO adalah serum kepekatan tinggi yang digunakan dalam rawatan profesional seperti LDM Care dan SONO Care di klinik dermatologi.
Ini adalah produk dipercayai yang disahkan oleh farmasi, diiktiraf kestabilannya oleh profesional kulit.

🔬 **Sistem 3-FREE (Bahan Selamat)**
- ❌ Bebas Pewangi
- ❌ Bebas Alkohol
- ❌ Bebas Pewarna Tiruan

→ Boleh digunakan tanpa beban pada kulit sensitif!

💡 **Penggunaan Langkah Pertama Selepas Mencuci Muka**
Menggunakan EXOBIO sebagai langkah pertama selepas mencuci muka memaksimumkan penyerapan kulit dan meningkatkan kesan produk yang sedia ada.
Cukup tambah EXOBIO sebagai langkah pertama tanpa mengubah rutin anda untuk kesan penjagaan kulit yang pasti meningkat⬆️!

📊 **Kredibiliti Disahkan**
- Serum rawatan klinik → Penukaran penjagaan rumah
- Pengesahan pengedaran farmasi
- Kadar pembelian semula pelanggan 61%
- Keselamatan terjamin dengan bahan 3-FREE

🎯 **Disyorkan Untuk**
- Mereka yang mempunyai kulit sensitif
- Mereka yang suka bahan selamat
- Mereka yang ingin penjagaan rumah selepas rawatan dermatologi
- Mereka yang ingin kesan meningkat tanpa mengubah rutin yang sedia ada

📞 **Hubungi**: curetembio@gmail.com`,
      relatedQuestions: ['Kesan Sampingan', 'Kulit Sensitif'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-07',
      keywords: ['357', 'nombor 3', 'nombor 5', 'nombor 7', 'nombor', 'maksud'],
      category: 'Maklumat Produk',
      question: 'Maksud Nombor 3·5·7',
      answer: `Penjelasan Sistem EXOSOME 357

🔢 **Apa itu 357?**
Sistem teras EXOBIO, setiap nombor fokus pada masalah kulit tertentu!

**Nombor 3 - Fokus Pemutihan·Melasma**
💎 EXOSOME 3 / RED 3
- Memperbaiki pigmentasi kulit
- Kulit cerah dan bersih
- Bahan utama: VITA 620,000 PPM

**Nombor 5 - Fokus Kedutan·Keanjalan**
✨ EXOSOME 5 / RED 5
- Memperbaiki kedutan dalam
- Memulihkan keanjalan
- Bahan utama: Salmon PDRN 10,000 PPM

**Nombor 7 - Fokus Menenangkan·Hidrasi·Penghalang**
🌿 EXOSOME 7 / RED 7
- Menenangkan, masalah kulit, sensitif
- Hidrasi, penghalang kulit
- Bahan utama: CICA + EXOSOME 760,000 PPM

💡 **Panduan pemilihan**:
- Masalah pigmentasi → Nombor 3
- Masalah penuaan → Nombor 5
- Sensitif·Masalah → Nombor 7
- Beberapa masalah → Boleh gabungkan 2-3!`,
      relatedQuestions: ['Maksud Nombor 3, 5, 7', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-08',
      keywords: ['harga', 'kos', 'berapa', 'pricing', 'harga runcit'],
      category: 'Maklumat Produk',
      question: 'Harga Produk',
      answer: `Senarai Produk EXOBIO

💎 **Siri Premium EXOSOME (Penjagaan Intensif Kepekatan Tinggi)**

**EXOSOME 3** (Pemutihan·Melasma)
- Isipadu: 5ml × 5ea
- Gunakan 3-4 kali/minggu

**EXOSOME 5** (Kedutan·Keanjalan)
- Isipadu: 5ml × 5ea
- Gunakan 3-4 kali/minggu

**EXOSOME 7** (Menenangkan·Penghalang)
- Isipadu: 5ml × 5ea
- Gunakan 3-4 kali/minggu

💚 **Siri RED Harian (Kegunaan Harian)**

**RED 3** (Pemutihan)
- Isipadu: 15ml × 2ea
- Boleh digunakan setiap hari

**RED 5** (Kedutan)
- Isipadu: 15ml × 2ea
- Boleh digunakan setiap hari

**RED 7** (Menenangkan)
- Isipadu: 15ml × 2ea
- Boleh digunakan setiap hari

📦 **Tempoh Penggunaan**:
- EXOSOME: Kira-kira 3-4 minggu apabila digunakan 3-4 kali/minggu
- RED: Kira-kira 3-4 minggu apabila digunakan setiap hari

💡 **Ciri Produk**:
- EXOSOME: Penambahbaikan pantas dengan ramuan kepekatan tinggi
- RED: Boleh digunakan setiap hari tanpa beban

🎁 **Manfaat Tambahan**:
- Diagnosis Kulit AI: Percuma (https://curetembio.xyz)
- Pertanyaan: curetembio@gmail.com

💰 **Pertanyaan Harga**: Tersedia di pusat membeli-belah atau farmasi`,
      relatedQuestions: ['Cara Beli', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-09',
      keywords: ['beli', 'cara beli', 'beli produk', 'di mana beli', 'beli-belah', 'farmasi', 'dalam talian'],
      category: 'Maklumat Produk',
      question: 'Cara Beli',
      answer: `Kaedah Pembelian Produk EXOBIO

🏪 **Pembelian Luar Talian**

**Seoul**
- Klinik Dermatologi DM Apgujeong
- Farmasi di 4 daerah beli-belah utama
  · Myeongdong
  · Hongdae
  · Gangnam
  · Seongsu
  · Universiti Konkuk

**Busan**
- Lokasi utama Nampo-dong
- Lokasi utama Stesen Bujeon

📍 **Maklumat Lokasi Terperinci**
→ https://www.exobio.net/ > PHARMACY

💻 **Pembelian Dalam Talian**

**Kedai Rasmi**
🌐 Jepun: https://www.exobio.net/
🇰🇷 Korea: https://kr.exobio.net/
🌎 English: https://en.exobio.net/

**Pusat Beli-belah Antarabangsa**
🇯🇵 Qoo10 JEPUN: https://www.qoo10.jp/shop/EXOBIO (Jepun)
🇨🇳 Laman Rasmi(CN): https://cn.curetembio.com/ (Cina, pembayaran USD tersedia di SHOP)

💬 **Pertanyaan Pembelian Produk China**
🇨🇳 WeChat: lele620918

💡 **Pertanyaan Pembelian**
📧 Email: curetembio@gmail.com
🌐 Laman Web Rasmi: https://www.exobio.net/`,
      relatedQuestions: ['Harga Produk'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-ingredients',
      keywords: ['bahan', 'komposisi', 'material', 'kepekatan', 'kepekatan tinggi'],
      category: 'Keselamatan',
      question: 'Bahan Utama',
      answer: `Maklumat Bahan Utama EXOBIO

🧪 **Bahan Teras Kepekatan Sangat Tinggi**

**EXOSOME 3 / RED 3 (Pemutihan)**
💎 Bahan VITA
- EXOSOME 3: 620,000 PPM (Kepekatan tinggi) + EXOSOME 5,000 PPM
- RED 3: 620,000 PPM (Harian)
- Kesan: Memperbaiki hiperpigmentasi, mencerahkan warna kulit

**EXOSOME 5 / RED 5 (Kedutan)**
✨ Salmon PDRN (Polydeoxyribonucleotide)
- EXOSOME 5: 10,000 PPM (Kepekatan tinggi) + EXOSOME 5,000 PPM
- RED 5: 10,000 PPM (Harian)
- Kesan: Regenerasi kulit, pembaikan kedutan, pengukuhan keanjalan

**EXOSOME 7 / RED 7 (Menenangkan)**
🌿 CICA (Ekstrak Centella asiatica)
- EXOSOME 7: CICA + EXOSOME 760,000 PPM (Kepekatan tinggi)
- RED 7: 7,600 PPM (Harian)
- Kesan: Menenangkan kemerahan, mengukuhkan penghalang kulit, hidrasi

🌟 **Produk 3-FREE (Tiga Bebas)**
❌ Bebas Pewangi
❌ Bebas Pewarna
❌ Bebas Alkohol
→ Selamat untuk kulit sensitif!

✅ **Pensijilan Keselamatan**
- Disahkan oleh pakar dermatologi
- Bahan yang digunakan dalam rawatan klinik (LDM, SONO Care)
- Bahan mentah berkualiti tinggi digunakan

💡 **Memahami Perbezaan Kepekatan**:
- EXOSOME: Penjagaan intensif 3-4 kali/minggu
- RED: Penjagaan konsisten harian
- Pilih atau gabungkan mengikut tujuan!`,
      relatedQuestions: ['Kestabilan Produk', 'Kesan Sampingan'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-10',
      keywords: ['penghalang kulit', 'penghalang', 'pelindung', 'perisai'],
      category: 'Menenangkan/Sensitif',
      question: 'Penghalang Kulit',
      answer: `Pengukuhan Penghalang Kulit - EXOSOME 7

🛡️ **Apa itu Penghalang Kulit?**
Lapisan pelindung pada permukaan kulit yang melindungi dari kerengsaan luaran dan mencegah kehilangan kelembapan.

**Gejala Penghalang Lemah**:
- Mudah tersengat dan terengsang
- Kering dan ketat
- Kemerahan kerap
- Kosmetik tidak berfungsi dengan baik

🌿 **Produk yang Disyorkan: EXOSOME 7 / RED 7**

**EXOSOME 7 (Penjagaan Intensif)**
- CICA 760,000 PPM kepekatan tinggi
- Gunakan 3-4 kali/minggu
- Pemulihan cepat penghalang yang rosak

**RED 7 (Penjagaan Harian)**
- CICA 7,600 PPM
- Boleh digunakan setiap hari
- Pengukuhan penghalang konsisten

💪 **Kesan Pengukuhan Penghalang**:
1. Menghalang kerengsaan luaran (habuk halus, pencemaran)
2. Peningkatan pengekalan kelembapan
3. Pengurangan kemerahan·kepekaan
4. Mencegah masalah kulit

📖 **Cara Penggunaan**:
1. Sapukan serum EXOBIO selepas mencuci muka
2. Selesaikan dengan krim

✨ **Kesan yang Dijangka**:
- 2 minggu: Kerengsaan berkurang, kelembapan meningkat
- 4 minggu: Kemerahan bertambah baik, penghalang pulih
- 8 minggu: Penghalang kulit kuat lengkap

🎯 **Disyorkan Untuk**:
- Kulit sensitif
- Kemerahan kerap
- Kulit kering dan ketat
- Kerengsaan kosmetik kerap

💡 **PETUA**: Gabungkan EXOSOME 7 (3-4 kali/minggu) + RED 7 (harian) untuk hasil lebih cepat!`,
      relatedQuestions: ['Kulit Sensitif', 'Menenangkan', 'EXOSOME 7', 'RED 7'],
      productTags: ['EXOSOME 7', 'RED 7']
    }
  ],
  
  // 🔥 43 Quick Reply Keywords (Merangkumi Semua Q&A)
  quickReplies: [
    // 🛒 Pembelian (Keutamaan Utama)
    { text: '🛒 Cara Beli', query: 'beli' },
    
    // Masalah Kulit - Kedutan/Penuaan (4)
    { text: '💫 Kedutan', query: 'kedutan' },
    { text: '💫 Kedutan Halus', query: 'kedutan halus' },
    { text: '💫 Kedutan Mata', query: 'kedutan mata' },
    { text: '💫 Garisan Senyum', query: 'garisan senyum' },
    
    // Masalah Kulit - Pemutihan/Pigmentasi (4)
    { text: '💎 Pemutihan', query: 'pemutihan' },
    { text: '✨ Melasma', query: 'melasma' },
    { text: '💎 Hiperpigmentasi', query: 'hiperpigmentasi' },
    { text: '💎 Kusam', query: 'kusam' },
    
    // Masalah Kulit - Jerawat/Masalah (4)
    { text: '🔴 Jerawat', query: 'jerawat' },
    { text: '🔴 Bruntusan', query: 'bruntusan' },
    { text: '🔴 Masalah', query: 'masalah kulit' },
    { text: '🔴 Parut', query: 'parut jerawat' },
    
    // Masalah Kulit - Menenangkan/Sensitif (5)
    { text: '🌸 Kemerahan', query: 'kemerahan' },
    { text: '🌿 Menenangkan', query: 'menenangkan' },
    { text: '🌸 Sensitif', query: 'kulit sensitif' },
    { text: '🛡️ Penghalang', query: 'penghalang kulit' },
    { text: '🛡️ Penjagaan Penghalang', query: 'pengukuhan penghalang' },
    
    // Masalah Kulit - Keanjalan/Kendur (3)
    { text: '🌟 Keanjalan', query: 'keanjalan' },
    { text: '🌟 Kendur', query: 'kendur' },
    { text: '🌟 Lifting', query: 'lifting' },
    
    // Masalah Kulit - Hidrasi/Kelembapan (3)
    { text: '💧 Hidrasi', query: 'hidrasi' },
    { text: '💧 Kulit Kering', query: 'kulit kering' },
    { text: '💧 Kelembapan', query: 'kelembapan' },
    
    // Masalah Kulit - Liang Pori (2)
    { text: '🔹 Liang Pori', query: 'liang pori' },
    { text: '🔹 Sebum', query: 'sebum' },
    
    // Maklumat Produk (8)
    { text: '🎯 Cadangan Produk', query: 'cadangan' },
    { text: '📊 EXOSOME vs RED', query: 'perbezaan' },
    { text: '🏥 Tentang EXOBIO', query: 'EXOBIO' },
    { text: '✨ Kesan', query: 'kesan' },
    { text: '📖 Cara Guna', query: 'cara guna' },
    { text: '🔢 Nombor 3·5·7', query: '357' },
    { text: '💰 Harga', query: 'harga' },
    
    // Keselamatan (2)
    { text: '⚠️ Kesan Sampingan', query: 'kesan sampingan' },
    { text: '🧪 Bahan', query: 'bahan' },
    
    // Produk Khusus (6)
    { text: '💎 EXOSOME 3', query: 'EXOSOME 3' },
    { text: '✨ EXOSOME 5', query: 'EXOSOME 5' },
    { text: '🌿 EXOSOME 7', query: 'EXOSOME 7' },
    { text: '💚 RED 3', query: 'RED 3' },
    { text: '💚 RED 5', query: 'RED 5' },
    { text: '💚 RED 7', query: 'RED 7' }
  ],
  
  // ❓ Fallback response (tidak dijumpai)
  fallbackResponse: `Maaf, saya tidak menemui maklumat yang sesuai dengan soalan anda. 😥

Berikut adalah topik yang tersedia. Sila pilih dari butang balasan pantas di bawah atau masukkan kata kunci berikut:

🔍 **Masalah Kulit** (10 item)
• Pemutihan (EXOSOME 3) • Melasma (EXOSOME 3) • Kedutan (EXOSOME 5)
• Keanjalan (EXOSOME 5) • Kemerahan (EXOSOME 7) • Menenangkan (EXOSOME 7)
• Penghalang (EXOSOME 7) • Hidrasi (EXOSOME 7) • Jerawat (EXOSOME 7) • Liang Pori (EXOSOME 3/5)

📦 **Maklumat Produk** (8 item)
• Cadangan Produk (Diagnosis AI) • EXOSOME vs RED (Perbezaan)
• Tentang EXOBIO (Pengenalan Jenama) • Kesan (Kesan & Cara Penggunaan Produk)
• Cara Guna (Panduan Penggunaan) • Nombor 3·5·7 (Maksud Nombor) • Harga (Harga Produk)

🔬 **Keselamatan** (2 item)
• Kesan Sampingan (Maklumat Keselamatan) • Bahan (Bahan Utama)

💡 Sila klik butang balasan pantas untuk melihat maklumat terperinci!`,

  // 43 kata kunci balasan pantas
  quickReplyKeywords: [
    // Kaedah pembelian
    { label: '🛒 Cara Beli', query: 'pembelian' },
    
    // Kedutan/Penuaan
    { label: '💫 Kedutan', query: 'kedutan' },
    { label: '💫 Garisan Halus', query: 'garisan halus' },
    { label: '💫 Kedutan Dalam', query: 'kedutan dalam' },
    { label: '💫 Kedutan Mata', query: 'kedutan mata' },
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
    { label: '🔴 Parut Jerawat', query: 'parut jerawat' },
    { label: '⭕ Liang Pori', query: 'liang pori' },
    
    // Menenangkan/Sensitif
    { label: '🌸 Kemerahan', query: 'kemerahan' },
    { label: '🌿 Menenangkan', query: 'menenangkan' },
    { label: '🌸 Sensitif', query: 'sensitif' },
    { label: '🛡️ Penghalang Kulit', query: 'penghalang kulit' },
    { label: '🛡️ Pengukuhan Penghalang', query: 'pengukuhan penghalang' },
    
    // Keanjalan/Kendur
    { label: '🌟 Keanjalan', query: 'keanjalan' },
    { label: '🌟 Kendur', query: 'kendur' },
    { label: '🌟 Liftingan', query: 'liftingan' },
    
    // Hidrasi/Kelembapan
    { label: '💧 Hidrasi', query: 'hidrasi' },
    { label: '💧 Kulit Kering', query: 'kulit kering' },
    { label: '💧 Kelembapan', query: 'kelembapan' },
    
    // Cara Guna
    { label: '📖 Cara Guna', query: 'cara guna' },
    { label: '📖 Jumlah', query: 'jumlah' },
    { label: '📖 Kombinasi', query: 'kombinasi' },
    { label: '🔬 Cara Guna MTS', query: 'cara guna MTS' },
    
    // Maklumat Produk
    { label: '🎯 Cadangan', query: 'cadangan' },
    { label: '🔄 Perbezaan', query: 'perbezaan' },
    { label: '💡 Tentang EXOBIO', query: 'EXOBIO' },
    { label: '✅ Kesan', query: 'kesan' },
    { label: '🔢 Maksud Nombor', query: '357' },
    { label: '💰 Harga', query: 'harga' },
    { label: '🧪 Bahan', query: 'bahan' },
    
    // Produk EXOSOME
    { label: 'EXOSOME 3', query: 'EXOSOME 3' },
    { label: 'EXOSOME 5', query: 'EXOSOME 5' },
    { label: 'EXOSOME 7', query: 'EXOSOME 7' },
    
    // Keselamatan
    { label: '⚠️ Kesan Sampingan', query: 'kesan sampingan' },
    { label: '✅ Keselamatan', query: 'keselamatan' },
    
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
