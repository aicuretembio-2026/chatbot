/**
 * EXOBIO AI 肌膚諮詢聊天機器人
 * @description EXOBIO是從皮膚科診所開始的357高級護膚精華液 - 32個肌膚護理問答
 * @version 1.0.0
 * @language zh-TW (Traditional Chinese - 繁體中文)
 * @lastUpdated 2026-02-21
 * @totalQuestions 32
 */

const CHATBOT_DATA = {
  version: '1.0.0',
  lastUpdated: '2026-02-21',
  language: 'zh-TW',
  totalQuestions: 32,
  
  // 🗂️ 類別 (10 categories)
  categories: [
    '皺紋/抗老化',       // Wrinkles/Anti-aging
    '美白/色素沉澱',      // Whitening/Pigmentation
    '痘痘/問題肌膚',      // Acne/Trouble
    '毛孔',             // Pores
    '彈力/提拉',         // Elasticity/Lifting
    '保濕',             // Hydration
    '舒緩/敏感肌膚',      // Soothing/Sensitive
    '使用方法',          // Usage
    '產品資訊',          // Product Info
    '安全性'            // Safety
  ],
  
  // 💬 32 Q&A Data
  qa: [
    // ============================================================
    // 皺紋/抗老化 (Wrinkles/Anti-aging) - 4 items
    // ============================================================
    {
      id: 'wrinkles-01',
      keywords: ['皺紋', '抗老化', '除皺', '皺紋護理', '老化'],
      category: '皺紋/抗老化',
      question: '皺紋',
      answer: `我們推薦使用 **EXOSOME 5** 來改善皺紋

Exosome 357™ 技術恢復肌膚彈力，護理從細紋到深層皺紋

💡 **使用方法**：洗臉後第一步，早晚使用`,
      relatedQuestions: ['細紋', '眼周皺紋', '法令紋'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['細紋', '小皺紋', '淺層皺紋'],
      category: '皺紋/抗老化',
      question: '細紋',
      answer: `從初期細紋開始使用 **RED 5**

每日護理產品，可每天使用

如果想要更快改善，可搭配 **EXOSOME 5** 每週使用3-4次`,
      relatedQuestions: ['皺紋', '眼周皺紋'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['眼周皺紋', '眼部護理', '魚尾紋'],
      category: '皺紋/抗老化',
      question: '眼周皺紋',
      answer: `我們推薦使用 **EXOSOME 5** 來改善眼周皺紋

💡 **使用方法**：輕輕塗抹於眼部周圍
⚠️ **注意**：避免接觸眼睛內部`,
      relatedQuestions: ['皺紋', '細紋'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['法令紋', '鼻唇溝', '嘴角紋'],
      category: '皺紋/抗老化',
      question: '法令紋',
      answer: `我們推薦使用 **EXOSOME 5** + **RED 5** 雙重護理深層皺紋

💡 **使用時間表**：
- 早上：RED 5（每日護理）
- 晚上：EXOSOME 5（每週3-4次，集中護理）`,
      relatedQuestions: ['皺紋', '細紋'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // 美白/色素沉澱 (Whitening/Pigmentation) - 4 items
    // ============================================================
    {
      id: 'whitening-01',
      keywords: ['美白', '提亮', '亮白', '均勻膚色'],
      category: '美白/色素沉澱',
      question: '美白',
      answer: `我們推薦使用 **EXOSOME 3** 提亮肌膚

高濃度維他命成分（VITA 620,000 PPM）讓肌膚明亮透淨

💡 **使用方法**：每週使用3-4次，集中於暗沉部位`,
      relatedQuestions: ['黑斑', '雀斑', '膚色暗沉'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-02',
      keywords: ['黑斑', '色斑', '斑點'],
      category: '美白/色素沉澱',
      question: '黑斑',
      answer: `我們推薦使用 **EXOSOME 3** + **RED 3** 護理黑斑

💡 **集中護理方法**：
1. RED 3：每日護理（早晚）
2. EXOSOME 3：每週集中護理3-4次
3. 注意：必須使用防曬！`,
      relatedQuestions: ['美白', '雀斑'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['雀斑', '曬斑', '色素點'],
      category: '美白/色素沉澱',
      question: '雀斑',
      answer: `我們推薦使用 **EXOSOME 3** 改善雀斑

VITA 620,000 PPM 活性成分改善肌膚色素

💡 **使用訣竅**：洗臉後，集中塗抹於雀斑部位`,
      relatedQuestions: ['美白', '黑斑', '膚色暗沉'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-04',
      keywords: ['膚色暗沉', '色素', '黑色素', '暗啞肌膚'],
      category: '美白/色素沉澱',
      question: '膚色暗沉',
      answer: `我們推薦使用 **EXOSOME 3** 改善膚色暗沉

外泌體成分抑制黑色素生成

💡 **使用方法**：每週使用3-4次於暗沉部位
🌞 **注意**：必須使用防曬產品`,
      relatedQuestions: ['美白', '黑斑', '雀斑'],
      productTags: ['EXOSOME 3', 'RED 3']
    },

    // ============================================================
    // 痘痘/問題肌膚 (Acne/Trouble) - 3 items
    // ============================================================
    {
      id: 'acne-01',
      keywords: ['痘痘', '青春痘', '長痘', '紅腫痘'],
      category: '痘痘/問題肌膚',
      question: '痘痘',
      answer: `EXOBIO對易長痘肌膚安全！

🎯 **推薦產品**
- **EXOSOME 7**：舒緩與再生
- **RED 7**：每日護理

✨ **預期效果**
- 舒緩痘痘
- 快速修復
- 強化肌膚屏障
- 改善痘印`,
      relatedQuestions: ['問題肌膚', '痘印'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['問題肌膚', '發炎', '泛紅'],
      category: '痘痘/問題肌膚',
      question: '問題肌膚',
      answer: `我們推薦使用 **EXOSOME 7** + **RED 7** 雙重護理

💡 **使用方法**：
- EXOSOME 7：每週3-4次，集中於問題部位
- RED 7：每日使用
- 效果：快速舒緩，預防復發`,
      relatedQuestions: ['痘痘', '痘印', '敏感肌膚'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['痘印', '痘疤', '疤痕', '凹洞'],
      category: '痘痘/問題肌膚',
      question: '痘印',
      answer: `我們推薦使用 **EXOSOME 3** 改善痘印

改善色素沉澱（美白）+ 舒緩 + 再生

✅ EXOBIO安全，即使在長痘肌膚上也可使用`,
      relatedQuestions: ['痘痘', '問題肌膚', '美白'],
      productTags: ['EXOSOME 3', 'EXOSOME 7']
    },

    // ============================================================
    // 毛孔 (Pores) - 2 items
    // ============================================================
    {
      id: 'pores-01',
      keywords: ['毛孔', '粗大毛孔', '收縮毛孔'],
      category: '毛孔',
      question: '毛孔',
      answer: `我們推薦使用 **EXOSOME 5** 護理毛孔收縮

💡 **使用方法**：
- 洗臉後第一步使用，早晚
- 集中於毛孔部位`,
      relatedQuestions: ['出油', '皺紋'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'pores-02',
      keywords: ['出油', '油性肌膚', '皮脂分泌'],
      category: '毛孔',
      question: '出油',
      answer: `我們推薦使用 **RED 7** 控制油脂

💡 **使用方法**：每日早晚洗臉後使用
⚠️ **注意**：避免與其他含油產品混合使用`,
      relatedQuestions: ['毛孔', '痘痘'],
      productTags: ['RED 7', 'EXOSOME 7']
    },

    // ============================================================
    // 彈力/提拉 (Elasticity/Lifting) - 2 items
    // ============================================================
    {
      id: 'elasticity-01',
      keywords: ['彈力', '緊緻', '緊實肌膚'],
      category: '彈力/提拉',
      question: '彈力',
      answer: `我們推薦使用 **EXOSOME 5** 增強肌膚彈力

Salmon PDRN 10,000 PPM 成分促進膠原蛋白生成，緊實肌膚

💡 **使用方法**：每週塗抹3-4次，按摩方向往上提`,
      relatedQuestions: ['皺紋', '下垂', '提拉'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['下垂', '臉部下垂', '提拉'],
      category: '彈力/提拉',
      question: '臉部下垂',
      answer: `我們推薦使用 **EXOSOME 5** + **RED 5** 雙重護理

💡 **雙重護理方法**：
- EXOSOME 5：每週3-4次（集中護理）
- RED 5：每日使用（日常護理）
- 按摩方向往上往外`,
      relatedQuestions: ['彈力', '皺紋'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // 保濕 (Hydration) - 2 items
    // ============================================================
    {
      id: 'hydration-01',
      keywords: ['保濕', '水分', '鎖水'],
      category: '保濕',
      question: '保濕',
      answer: `我們推薦使用 **RED 5** 給乾燥肌膚

💡 **使用方法**：每日使用，洗臉後第一步
💧 **訣竅**：洗臉後立即塗抹以提高效果`,
      relatedQuestions: ['乾燥肌膚', '敏感肌膚'],
      productTags: ['RED 5', 'RED 7']
    },
    {
      id: 'hydration-02',
      keywords: ['乾燥肌膚', '緊繃', '缺水肌膚'],
      category: '保濕',
      question: '乾燥肌膚',
      answer: `我們推薦使用 **EXOSOME 5** + **EXOSOME 7** 進行高級雙重護理

💡 **強化屏障效果**：
- 深層保濕 + 強化屏障
- 每日一起使用
- 多喝水！`,
      relatedQuestions: ['保濕', '敏感肌膚', '肌膚屏障'],
      productTags: ['EXOSOME 5', 'EXOSOME 7', 'RED 5', 'RED 7']
    },

    // ============================================================
    // 舒緩/敏感肌膚 (Soothing/Sensitive) - 2 items
    // ============================================================
    {
      id: 'soothing-01',
      keywords: ['舒緩', '刺激', '發紅'],
      category: '舒緩/敏感肌膚',
      question: '舒緩',
      answer: `我們推薦使用 **RED 7** 給敏感肌膚

提供溫和不刺激的舒緩效果

✨ **EXOBIO是3-FREE產品！**
- 無香料
- 無色素
- 無酒精`,
      relatedQuestions: ['敏感肌膚', '問題肌膚', '肌膚屏障'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'soothing-02',
      keywords: ['敏感肌膚', '敏感', '易刺激肌膚', '酒糟鼻'],
      category: '舒緩/敏感肌膚',
      question: '敏感肌膚',
      answer: `我們推薦使用 **EXOSOME 7** 給敏感肌膚

🌿 **CICA 760,000 PPM成分**：
- 即時舒緩
- 強化肌膚屏障
- 減少泛紅

💡 **安全使用**：3-FREE系統（無香料/無色素/無酒精）`,
      relatedQuestions: ['舒緩', '問題肌膚', '肌膚屏障'],
      productTags: ['EXOSOME 7', 'RED 7']
    },

    // ============================================================
    // 使用方法 (Usage) - 3 items
    // ============================================================
    {
      id: 'usage-01',
      keywords: ['使用方法', '使用順序', '何時使用', '使用指南'],
      category: '使用方法',
      question: '使用方法',
      answer: `EXOBIO - 基本使用指南

💡 **使用順序**：
1. 洗臉
2. **EXOBIO 精華液**（第一步！）
3. 您的產品（化妝水、精華液、乳霜）

✅ **重要注意事項**：
- EXOBIO精華液有黏度，直接塗抹
- EXOSOME：每週3-4次
- RED：每日使用

💡 **訣竅**：洗臉後使用以提高效果！

✨ **加入您現有的護膚程序**
- 無需更換現有產品
- 只需將EXOBIO加入第一步
- 效果提升⬆️

🌟 **3-FREE對敏感肌膚安全**
- 無香料 ❌
- 無色素 ❌
- 無酒精 ❌`,
      relatedQuestions: ['使用量', '混合使用'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-02',
      keywords: ['使用量', '適當用量', '多少', '使用期限'],
      category: '使用方法',
      question: '使用量',
      answer: `EXOBIO適當使用量

💡 **每次使用量**：
- 在需要護理的部位塗抹2次

📦 **每組使用期限**：
- EXOSOME 1組（5ml × 5）：約3-4週（每週3-4次）
- RED 1組（15ml × 2）：約3-4週（每日使用）`,
      relatedQuestions: ['使用方法', '混合使用'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-03',
      keywords: ['混合使用', '一起使用', '多種產品', '搭配'],
      category: '使用方法',
      question: '混合使用',
      answer: `可以！可以一起使用

💡 **推薦組合**：

**1️⃣ 皺紋 + 美白**
- EXOSOME 5 或 3：每週交替使用2-3次

**2️⃣ 集中 + 日常**
- EXOSOME（每週3-4次）+ RED（每日）
- 建議使用相同數字（3、5或7）

**3️⃣ 多重關注**
- RED（白天）+ EXOSOME（晚上）

✅ 可以同時使用多種EXOBIO產品！`,
      relatedQuestions: ['使用方法', '使用量'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },

    // ============================================================
    // 產品資訊 (Product Info) - 10 items
    // ============================================================
    {
      id: 'product-01',
      keywords: ['EXOSOME', 'RED', '差異', '比較', '不同'],
      category: '產品資訊',
      question: 'EXOSOME與RED的差異',
      answer: `EXOSOME vs RED - 差異

🔬 **EXOSOME（集中護理）**
- 高濃度外泌體
- 每週使用3-4次
- 快速改善
- 針對嚴重肌膚問題

💚 **RED（日常護理）**
- 平衡配方
- 每日使用
- 溫和成分
- 適合日常使用

💡 **選擇指南**：
- 嚴重問題 → EXOSOME
- 日常護理 → RED
- 最佳效果 → 兩者搭配！`,
      relatedQuestions: ['產品推薦', '3·5·7的意義'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-02',
      keywords: ['3', '5', '7', '數字', '數字意義'],
      category: '產品資訊',
      question: '3、5、7數字的意義',
      answer: `EXOBIO的3️⃣5️⃣7️⃣數字意義

**3️⃣ EXOSOME/RED 3 - 美白/色素沉澱**
💎 VITA 620,000 PPM成分
- 改善黑斑、雀斑
- 提亮膚色

**5️⃣ EXOSOME/RED 5 - 皺紋/彈力**
✨ Salmon PDRN 10,000 PPM
- 改善皺紋
- 增強彈力

**7️⃣ EXOSOME/RED 7 - 舒緩、保濕、屏障**
🌿 CICA + EXOSOME 760,000 PPM
- 舒緩、敏感肌膚
- 保濕、強化肌膚屏障

💡 **選擇指南**：
- 一個關注 → 選擇1個數字
- 多個關注 → 搭配2-3個數字！`,
      relatedQuestions: ['產品推薦', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['推薦', '選擇產品', '適合產品', '產品建議', '產品推薦'],
      category: '產品資訊',
      question: '產品推薦',
      answer: `🎯 **AI肌膚診斷 - 個人化推薦**

30秒分析10項肌膚指標
→ 推薦最適合您的產品！

👉 **https://curetembio.xyz**

💡 **按關注快速選擇**：
- 皺紋 → EXOSOME 5
- 美白 → EXOSOME 3
- 保濕/舒緩/屏障 → EXOSOME 7
- 日常護理 → RED系列`,
      relatedQuestions: ['EXOSOME vs RED', '3·5·7的意義'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-04',
      keywords: ['EXOBIO', '介紹', '品牌', '公司', '關於EXOBIO'],
      category: '產品資訊',
      question: '關於EXOBIO',
      answer: `EXOBIO - 品牌介紹

🏥 **來自專業皮膚科設備的居家護理精華液**

**什麼是EXOBIO？**
實際用於專業皮膚科設備的外泌體精華液

🔬 **源自專業皮膚科設備**
- **LDM Care**：超音波肌膚再生
- **SONO Care**：成分深層導入

→ EXOBIO精華液作為核心成分使用

💡 **適用對象**：
- 30歲：早期老化跡象
- 40歲：全面抗老護理
- 產後：修復受損肌膚
- 問題：皺紋、黑斑等

📊 **可靠性**：
- 皮膚科醫師認證
- 61%回購率
- 高濃度精華液`,
      relatedQuestions: ['功效', 'LDM Care', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-05',
      keywords: ['LDM', 'LDM Care', 'LDM治療'],
      category: '產品資訊',
      question: 'LDM Care',
      answer: `🏥 **什麼是LDM Care？**

**LDM (Local Dynamic Micro-massage)**
- 基於超音波的肌膚再生設備
- 將成分深層導入肌膚
- 在皮膚科診所使用

💡 **EXOBIO精華液**
→ 是LDM Care治療中使用的核心成分！

✨ **可居家護理**
現在您可以在家體驗相同的精華液`,
      relatedQuestions: ['SONO Care', '關於EXOBIO'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-06',
      keywords: ['SONO', 'SONO Care', 'SONO治療'],
      category: '產品資訊',
      question: 'SONO Care',
      answer: `🏥 **什麼是SONO Care？**

**使用EXOBIO精華液的深層治療**
- 將活性成分深層導入肌膚
- 在皮膚科診所使用
- 可居家護理

💡 **居家護理**
使用MTS滾輪（0.25mm）提高EXOBIO吸收率`,
      relatedQuestions: ['LDM Care', 'MTS滾輪'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'exosome 3'],
      category: '產品資訊',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - 美白集中護理**

✨ **BIO 357™ EXOSOME** 是從皮膚科診所開始並經藥局認證的升級版高級Exosome357精華液，將肌膚護理效果提升到新層次。

🎯 **核心成分**
- **VITA 620,000 PPM**（超高濃度維他命）
- **EXOSOME 5,000 PPM**（高濃度外泌體）
- 認證的美白功能成分

💡 **主要功效**
- 改善黑斑
- 改善雀斑
- 改善膚色暗沉
- 均勻膚色
- 提亮肌膚

📅 **使用方法**
- **頻率**：每週3-4次
- **時間**：洗臉後第一步

💰 **價格**：$80（5ml × 5瓶）

💚 **日常護理？** 推薦RED 3（每日使用）`,
      relatedQuestions: ['RED 3', '美白', '黑斑'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'exosome 5'],
      category: '產品資訊',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - 彈力集中護理**

✨ **BIO 357™ EXOSOME** 是從皮膚科診所開始並經藥局認證的升級版高級Exosome357精華液，將肌膚護理效果提升到新層次。

🎯 **核心成分**
- **Salmon PDRN 10,000 PPM**（鮭魚DNA）
- **EXOSOME 5,000 PPM**（高濃度外泌體）
- 認證的改善皺紋功能成分

💡 **主要功效**
- 改善深層皺紋
- 恢復肌膚彈力
- 抗老化
- 增強緊緻度
- 提拉效果

📅 **使用方法**
- **頻率**：每週3-4次
- **時間**：洗臉後第一步

💰 **價格**：$80（5ml × 5瓶）

💚 **日常護理？** 推薦RED 5（每日使用）`,
      relatedQuestions: ['RED 5', '皺紋', '彈力'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'exosome 7'],
      category: '產品資訊',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - 舒緩集中護理**

✨ **BIO 357™ EXOSOME** 是從皮膚科診所開始並經藥局認證的升級版高級Exosome357精華液，將肌膚護理效果提升到新層次。

🎯 **核心成分**
- **CICA（積雪草提取物）**
- **EXOSOME 760,000 PPM**（超高濃度外泌體）
- 舒緩肌膚成分

💡 **主要功效**
- 提供水分
- 舒緩效果
- 舒緩痘痘、問題肌膚
- 減少泛紅
- 改善敏感肌膚
- 強化肌膚屏障
- 促進肌膚再生

📅 **使用方法**
- **頻率**：每週3-4次
- **時間**：洗臉後第一步

⚡ **特點**
- 對敏感肌膚安全
- 問題肌膚護理
- 即時舒緩感

💰 **價格**：$80（5ml × 5瓶）

💚 **日常護理？** 推薦RED 7（每日使用）`,
      relatedQuestions: ['RED 7', '舒緩', '敏感肌膚'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'red 3'],
      category: '產品資訊',
      question: 'RED 3',
      answer: `💚 **RED 3 - 美白日常護理**

✨ **BIO 357™ RED** 是從皮膚科診所開始並經藥局認證的日常357精華液，設計為不負擔的每日使用，作為護膚程序的第一步。

🎯 **核心成分**
- **VITA 620,000 PPM**（超高濃度維他命）
- 認證的美白功能成分
- 優化的每日使用配方

💡 **主要功效**
- 預防黑斑和雀斑
- 提亮膚色
- 改善暗啞肌膚
- 每日使用讓肌膚更透亮

📅 **使用方法**
- **頻率**：每日（早/晚）
- **時間**：洗臉後第一步

💡 **日常護理 + 集中護理**
- 推薦搭配 **RED 3**（每日）+ **EXOSOME 3**（每週3-4次）
- 最大化集中護理效果

💰 **價格**：$33（15ml × 2瓶）

🔬 **集中護理？** 推薦EXOSOME 3（每週3-4次）`,
      relatedQuestions: ['EXOSOME 3', '美白', '黑斑'],
      productTags: ['RED 3', 'EXOSOME 3']
    },
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'red 5'],
      category: '產品資訊',
      question: 'RED 5',
      answer: `💚 **RED 5 - 彈力日常護理**

✨ **BIO 357™ RED** 是從皮膚科診所開始並經藥局認證的日常357精華液，設計為不負擔的每日使用，作為護膚程序的第一步。

🎯 **核心成分**
- **Salmon PDRN 10,000 PPM**（鮭魚DNA）
- 認證的改善皺紋功能成分
- 優化的每日使用配方

💡 **主要功效**
- 預防細紋
- 維持肌膚彈力
- 抗老化
- 每日使用讓肌膚更有彈力

📅 **使用方法**
- **頻率**：每日（早/晚）
- **時間**：洗臉後第一步

💡 **日常護理 + 集中護理**
- 推薦搭配 **RED 5**（每日）+ **EXOSOME 5**（每週3-4次）
- 深層皺紋集中護理

💰 **價格**：$37（15ml × 2瓶）

🔬 **集中護理？** 推薦EXOSOME 5（每週3-4次）`,
      relatedQuestions: ['EXOSOME 5', '皺紋', '彈力'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'red 7'],
      category: '產品資訊',
      question: 'RED 7',
      answer: `💚 **RED 7 - 舒緩日常護理**

✨ **BIO 357™ RED** 是從皮膚科診所開始並經藥局認證的日常357精華液，設計為不負擔的每日使用，作為護膚程序的第一步。

🎯 **核心成分**
- **CICA 7,600 PPM**（積雪草提取物）
- 舒緩肌膚成分
- 優化的每日使用配方

💡 **主要功效**
- 提供水分
- 舒緩效果
- 預防痘痘和問題肌膚
- 減少泛紅
- 管理敏感肌膚
- 每日使用強化肌膚屏障

📅 **使用方法**
- **頻率**：每日（早/晚）
- **時間**：洗臉後第一步

💡 **日常護理 + 集中護理**
- 推薦搭配 **RED 7**（每日）+ **EXOSOME 7**（每週3-4次）
- 問題肌膚集中護理

💰 **價格**：$32（15ml × 2瓶）

🔬 **集中護理？** 推薦EXOSOME 7（每週3-4次）`,
      relatedQuestions: ['EXOSOME 7', '舒緩', '敏感肌膚'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'effect-01',
      keywords: ['功效', '效果', '結果', '何時', '改善', '變化'],
      category: '產品資訊',
      question: 'EXOBIO功效',
      answer: `EXOBIO產品功效與使用指南

🏥 **專業皮膚科精華液的居家護理版本**

EXOBIO是實際用於皮膚科診所的專業治療設備如 **LDM Care** 和 **SONO Care** 的精華液。經臨床驗證的成分現在可供居家護理使用。

💡 **使用方法 - 洗臉後第一步！**

✨ **保留您現有的產品**
- 將EXOBIO產品加入洗臉後的 **第一步**
- 繼續使用現有的化妝水、精華液、乳霜
- 無需改變程序即可提升效果！⬆️

📅 **何時見效**

⏰ **4週後明顯的肌膚變化**
- **1-2週**：改善肌膚質地，增加水分
- **3-4週**：提亮膚色，恢復彈力
- **4週後**：全面轉變 - 穩定的肌膚平衡
- **8-12週**：確認集中改善皺紋、黑斑

✨ **穩定的肌膚平衡**
- 強化肌膚屏障，更好地抵抗外界刺激
- 水分-油脂平衡
- 恢復肌膚的自然力量

🎯 **為您選擇完美產品**

**方法1️⃣：按關注**
- **3**：美白、黑斑、暗沉
- **5**：皺紋、彈力、提拉
- **7**：舒緩、問題肌膚、敏感、水分、屏障

**方法2️⃣：AI肌膚診斷（推薦！）** 🎯
- 30秒分析10項肌膚指標
- 個人化產品推薦
- 更有效的肌膚護理
- 👉 https://curetembio.xyz

💚 **集中護理 vs 日常護理**

**EXOSOME系列**（集中護理）
- 每週使用3-4次
- 高濃度成分快速改善
- 解決嚴重肌膚問題

**RED系列**（日常護理）
- 可每日使用
- 實惠價格持續護理
- 維持肌膚平衡

💡 **最有效的方法**
→ **EXOSOME + RED 雙重護理**
→ 集中護理 + 日常管理帶來最佳結果！

🌟 **EXOBIO的優勢**
✅ 專業診所治療成分
✅ 維持現有程序同時提升效果
✅ 4週後明顯變化
✅ 皮膚科醫師認證
✅ 61%回購率（證明的客戶滿意度）`,
      relatedQuestions: ['關於EXOBIO', '產品推薦'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },

    // ============================================================
    // 安全性 (Safety) - 4 items
    // ============================================================
    {
      id: 'mts-01',
      keywords: ['MTS', '微針滾輪', '微針', '滾輪'],
      category: '使用方法',
      question: 'MTS滾輪',
      answer: `MTS微針滾輪可居家護理！

🔬 **使用方法**：
- 推薦0.25mm微針
- 每月1-2次
- 使用MTS後塗抹EXOBIO產品

✨ **效果**：
- 顯著提高EXOBIO吸收率
- 促進肌膚再生
- 更快的結果

⚠️ **注意事項**：
- 必須使用0.25mm或更小
- 避免過度使用
- 僅在肌膚狀況良好時使用
- 敏感或有問題肌膚時避免使用

💡 **MTS使用順序**：
1. 洗臉
2. MTS滾輪（0.25mm）
3. 立即塗抹EXOBIO產品
4. 吸收後使用乳霜`,
      relatedQuestions: ['使用方法', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'safety-02',
      keywords: ['副作用', '不良反應', '過敏'],
      category: '安全性',
      question: '副作用',
      answer: `副作用與不良反應

✅ **EXOBIO是安全產品**

⚠️ **可能的罕見反應**：
- 暫時性泛紅
- 輕微刺痛
- 肌膚脫皮（正常再生過程）

🚨 **何時需要停用並諮詢專家**：
- 嚴重瘙癢或泛紅
- 皮疹或蕁麻疹
- 肌膚腫脹

💡 **預防**：
- 從少量開始
- 監測肌膚狀況`,
      relatedQuestions: ['產品穩定性', '敏感肌膚'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'safety-03',
      keywords: ['穩定性', '安全', '安全性', '驗證', '保證'],
      category: '安全性',
      question: '產品穩定性',
      answer: `EXOBIO產品穩定性

✅ **經皮膚科與藥局驗證**
EXOBIO是用於皮膚科診所專業治療如LDM Care和SONO Care的高濃度精華液。
這是經藥局驗證的可靠產品，專業皮膚科醫師認證其穩定性。

🔬 **3-FREE系統（安全成分）**
- ❌ 無香料
- ❌ 無酒精
- ❌ 無人工色素

→ 敏感肌膚可無負擔使用！

💡 **洗臉後第一步使用**
洗臉後第一步使用EXOBIO可最大化肌膚吸收，增強現有產品的效果。
只需將EXOBIO加入第一步而無需改變您的程序，即可確保護膚效果提升⬆️！

📊 **驗證的可靠性**
- 診所治療精華液 → 轉換為居家護理
- 藥局分銷驗證
- 客戶61%回購率
- 3-FREE成分保證安全

🎯 **推薦給**
- 敏感肌膚者
- 喜歡安全成分者
- 希望皮膚科治療後居家護理者
- 希望在不改變現有程序下提升效果者

📞 **聯繫**：curetembio@gmail.com`,
      relatedQuestions: ['副作用', '敏感肌膚'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-07',
      keywords: ['357', '數字3', '數字5', '數字7', '數字', '意義'],
      category: '產品資訊',
      question: '3·5·7數字的意義',
      answer: `EXOSOME 357系統說明

🔢 **什麼是357？**
EXOBIO的核心系統，每個數字針對特定肌膚問題！

**數字3 - 美白·黑斑集中**
💎 EXOSOME 3 / RED 3
- 改善肌膚色素
- 明亮透淨肌膚
- 主要成分：VITA 620,000 PPM

**數字5 - 皺紋·彈力集中**
✨ EXOSOME 5 / RED 5
- 改善深層皺紋
- 恢復彈力
- 主要成分：Salmon PDRN 10,000 PPM

**數字7 - 舒緩·水分·屏障集中**
🌿 EXOSOME 7 / RED 7
- 舒緩、問題肌膚、敏感
- 水分、肌膚屏障
- 主要成分：CICA + EXOSOME 760,000 PPM

💡 **選擇指南**：
- 色素關注 → 數字3
- 老化關注 → 數字5
- 敏感·問題肌膚 → 數字7
- 多重關注 → 可搭配2-3個！`,
      relatedQuestions: ['3、5、7數字的意義', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-08',
      keywords: ['價格', '費用', '多少錢', '定價', '零售價'],
      category: '產品資訊',
      question: '產品價格',
      answer: `EXOBIO產品價格資訊

💰 **高級EXOSOME系列（高濃度）**

**EXOSOME 3（美白·黑斑）**
- 5ml × 5瓶：**$80**

**EXOSOME 5（皺紋·彈力）**
- 5ml × 5瓶：**$80**

**EXOSOME 7（舒緩·屏障）**
- 5ml × 5瓶：**$80**

💚 **RED日常系列（日常使用）**

**RED 3（美白）**
- 15ml × 2瓶：**$33**

**RED 5（皺紋）**
- 15ml × 2瓶：**$37**

**RED 7（舒緩）**
- 15ml × 2瓶：**$32**

📦 **使用期限**：
- EXOSOME：每週使用3-4次約3-4週
- RED：每日使用約3-4週

💡 **價格比較**：
- EXOSOME：高濃度集中護理（$80）
- RED：實惠的日常護理價格（$32-37）

🎁 **額外優惠**：
- AI肌膚診斷：免費（https://curetembio.xyz）
- 諮詢請求：curetembio@gmail.com`,
      relatedQuestions: ['如何購買', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-09',
      keywords: ['購買', '如何購買', '購買產品', '哪裡買', '購物', '藥局', '線上'],
      category: '產品資訊',
      question: '如何購買',
      answer: `EXOBIO產品購買方式

🏪 **線下購買**

**首爾**
- 狎鷗亭DM皮膚科診所
- 4大購物區藥局
  · 明洞
  · 弘大
  · 江南
  · 聖水
  · 建國大學

**釜山**
- 南浦洞主要地點
- 釜田站主要地點

📍 **詳細地點資訊**
→ https://www.exobio.net/ > PHARMACY

💻 **線上購買**

**官方商店**
🌐 日本：https://www.exobio.net/
🇰🇷 韓國：https://kr.exobio.net/
🌎 英文：https://en.exobio.net/

**國際購物商城**
🇯🇵 Q100日本：https://www.qoo10.jp/shop/EXOBIO（日文）
🇨🇳 官方網站(CN)：https://cn.curetembio.com/（中文，SHOP內可使用USD支付）

💬 **中國產品購買諮詢**
🇨🇳 微信：lele620918

💡 **購買諮詢**
📧 電子郵件：curetembio@gmail.com
🌐 官方網站：https://www.exobio.net/`,
      relatedQuestions: ['產品價格'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-ingredients',
      keywords: ['成分', '原料', '材料', '濃度', '高濃度'],
      category: '安全性',
      question: '主要成分',
      answer: `EXOBIO主要成分資訊

🧪 **超高濃度核心成分**

**EXOSOME 3 / RED 3（美白）**
💎 VITA成分
- EXOSOME 3：620,000 PPM（高濃度）+ EXOSOME 5,000 PPM
- RED 3：620,000 PPM（日常）
- 效果：改善過度色素沉澱，提亮膚色

**EXOSOME 5 / RED 5（皺紋）**
✨ Salmon PDRN（聚脫氧核糖核苷酸）
- EXOSOME 5：10,000 PPM（高濃度）+ EXOSOME 5,000 PPM
- RED 5：10,000 PPM（日常）
- 效果：肌膚再生，改善皺紋，增強彈力

**EXOSOME 7 / RED 7（舒緩）**
🌿 CICA（積雪草提取物）
- EXOSOME 7：CICA + EXOSOME 760,000 PPM（高濃度）
- RED 7：7,600 PPM（日常）
- 效果：舒緩泛紅，強化肌膚屏障，水分

🌟 **3-FREE產品（三無）**
❌ 無香料
❌ 無色素
❌ 無酒精
→ 對敏感肌膚安全！

✅ **安全認證**
- 皮膚科醫師驗證
- 診所治療使用成分（LDM、SONO Care）
- 使用高品質原料

💡 **理解濃度差異**：
- EXOSOME：每週集中護理3-4次
- RED：每日持續護理
- 根據目的選擇或搭配！`,
      relatedQuestions: ['產品穩定性', '副作用'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-10',
      keywords: ['肌膚屏障', '屏障', '保護屏障', '防護'],
      category: '舒緩/敏感肌膚',
      question: '肌膚屏障',
      answer: `強化肌膚屏障 - EXOSOME 7

🛡️ **什麼是肌膚屏障？**
肌膚表面的保護層，保護免受外界刺激並防止水分流失。

**屏障弱化的症狀**：
- 容易刺痛和刺激
- 乾燥和緊繃
- 經常泛紅
- 化妝品效果不佳

🌿 **推薦產品：EXOSOME 7 / RED 7**

**EXOSOME 7（集中護理）**
- 高濃度CICA 760,000 PPM
- 每週使用3-4次
- 快速修復受損屏障

**RED 7（日常護理）**
- CICA 7,600 PPM
- 可每日使用
- 持續強化屏障

💪 **強化屏障效果**：
1. 阻擋外界刺激（細塵、污染）
2. 提高保水能力
3. 減少泛紅·敏感
4. 預防肌膚問題

📖 **使用方法**：
1. 洗臉後塗抹EXOBIO精華液
2. 以乳霜完成

✨ **預期效果**：
- 2週：減少刺激，增加水分
- 4週：改善泛紅，恢復屏障
- 8週：完成強健肌膚屏障

🎯 **推薦給**：
- 敏感肌膚
- 經常泛紅
- 乾燥緊繃肌膚
- 經常對化妝品刺激

💡 **訣竅**：搭配EXOSOME 7（每週3-4次）+ RED 7（每日）以獲得更快結果！`,
      relatedQuestions: ['敏感肌膚', '舒緩', 'EXOSOME 7', 'RED 7'],
      productTags: ['EXOSOME 7', 'RED 7']
    }
  ],
  
  // 🔥 43 Quick Reply Keywords (涵蓋所有Q&A)
  quickReplies: [
    // 🛒 購買（最優先）
    { text: '🛒 如何購買', query: '購買' },
    
    // 肌膚問題 - 皺紋/老化 (4)
    { text: '💫 皺紋', query: '皺紋' },
    { text: '💫 細紋', query: '細紋' },
    { text: '💫 眼周皺紋', query: '眼周皺紋' },
    { text: '💫 法令紋', query: '法令紋' },
    
    // 肌膚問題 - 美白/色素 (4)
    { text: '💎 美白', query: '美白' },
    { text: '✨ 黑斑', query: '黑斑' },
    { text: '💎 膚色暗沉', query: '膚色暗沉' },
    { text: '💎 暗啞', query: '暗啞肌膚' },
    
    // 肌膚問題 - 痘痘/問題 (4)
    { text: '🔴 痘痘', query: '痘痘' },
    { text: '🔴 青春痘', query: '青春痘' },
    { text: '🔴 問題肌膚', query: '問題肌膚' },
    { text: '🔴 痘印', query: '痘印' },
    
    // 肌膚問題 - 舒緩/敏感 (5)
    { text: '🌸 泛紅', query: '泛紅' },
    { text: '🌿 舒緩', query: '舒緩' },
    { text: '🌸 敏感', query: '敏感肌膚' },
    { text: '🛡️ 屏障', query: '肌膚屏障' },
    { text: '🛡️ 屏障護理', query: '強化屏障' },
    
    // 肌膚問題 - 彈力/下垂 (3)
    { text: '🌟 彈力', query: '彈力' },
    { text: '🌟 下垂', query: '下垂' },
    { text: '🌟 提拉', query: '提拉' },
    
    // 肌膚問題 - 保濕/水分 (3)
    { text: '💧 保濕', query: '保濕' },
    { text: '💧 乾燥', query: '乾燥肌膚' },
    { text: '💧 水分', query: '水分' },
    
    // 肌膚問題 - 毛孔 (2)
    { text: '🔹 毛孔', query: '毛孔' },
    { text: '🔹 出油', query: '出油' },
    
    // 產品資訊 (8)
    { text: '🎯 產品推薦', query: '推薦' },
    { text: '📊 EXOSOME vs RED', query: '差異' },
    { text: '🏥 關於EXOBIO', query: 'EXOBIO' },
    { text: '✨ 功效', query: '功效' },
    { text: '📖 使用方法', query: '使用方法' },
    { text: '🔢 數字3·5·7', query: '357' },
    { text: '💰 價格', query: '價格' },
    
    // 安全性 (2)
    { text: '⚠️ 副作用', query: '副作用' },
    { text: '🧪 成分', query: '成分' },
    
    // 特定產品 (6)
    { text: '💎 EXOSOME 3', query: 'EXOSOME 3' },
    { text: '✨ EXOSOME 5', query: 'EXOSOME 5' },
    { text: '🌿 EXOSOME 7', query: 'EXOSOME 7' },
    { text: '💚 RED 3', query: 'RED 3' },
    { text: '💚 RED 5', query: 'RED 5' },
    { text: '💚 RED 7', query: 'RED 7' }
  ],
  
  // ❓ Fallback response (找不到)
  fallbackResponse: `抱歉，我找不到與您的問題相關的資訊。😥

以下是可用的主題。請從下方的快速回覆按鈕中選擇，或輸入以下關鍵字：

🔍 **肌膚問題**（10項）
• 美白（EXOSOME 3）• 黑斑（EXOSOME 3）• 皺紋（EXOSOME 5）
• 彈力（EXOSOME 5）• 泛紅（EXOSOME 7）• 舒緩（EXOSOME 7）
• 屏障（EXOSOME 7）• 保濕（EXOSOME 7）• 痘痘（EXOSOME 7）• 毛孔（EXOSOME 3/5）

📦 **產品資訊**（8項）
• 產品推薦（AI診斷）• EXOSOME vs RED（差異）
• 關於EXOBIO（品牌介紹）• 功效（效果與產品使用）
• 使用方法（使用指南）• 數字3·5·7（數字意義）• 價格（產品定價）

🔬 **安全性**（2項）
• 副作用（安全資訊）• 成分（主要成分）

💡 請點擊快速回覆按鈕查看詳細資訊！`
};

// Node.js module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHATBOT_DATA;
}
