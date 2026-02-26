// EXOBIO AI Skin Consultation Chatbot Data - Japanese Version
// 日本語版チャットボットデータ
// Version: 1.0.1
// Last Updated: 2026-02-22
// Language: ja (日本語)

const CHATBOT_DATA = {
  version: '1.0.1',
  lastUpdated: '2026-02-22',
  language: 'ja',
  
  qaList: [
    // ========================================
    // しわ/老化関連
    // ========================================
    {
      id: 'wrinkles-01',
      keywords: ['しわ', 'シワ', 'しわ改善', 'しわ除去', 'しわ緩和', '老化'],
      category: 'しわ/老化',
      question: 'しわ',
      answer: `しわ改善には**EXOSOME 5**をお勧めします。

エクソソーム357™技術で肌の弾力を回復し、小じわから深いしわまでケアします。

💡 **使用方法**: 朝・夜の洗顔後、最初のステップ`,
      relatedQuestions: ['wrinkles-02', 'wrinkles-04', 'product-exosome5'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['小じわ', '細かいしわ', '浅いしわ'],
      category: 'しわ/老化',
      question: '小じわ',
      answer: `初期の小じわには**RED 5**から始めてください。

毎日使用できるデイリーケア製品です。

💡 **使用方法**: 毎日朝/夜、洗顔後の最初のステップ

さらにアップグレードしたケアが必要ですか？
→ **EXOSOME 5** (朝・夜の洗顔後、最初のステップ)`,
      relatedQuestions: ['wrinkles-01', 'product-red5', 'product-exosome5'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['目元のしわ', '目の下のしわ', 'カラスの足跡', '眉間のしわ'],
      category: 'しわ/老化',
      question: '目元のしわ',
      answer: `敏感な目元のしわには**EXOSOME 5**をお勧めします！

🎯 **使用のコツ**:
- 目元に少量のみ使用
- 軽くたたいて吸収
- 朝/夜のうち1回のみ

⚠️ **注意**: 目に入らないように注意`,
      relatedQuestions: ['wrinkles-01', 'product-exosome5', 'usage-02'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['ほうれい線', '法令線', '笑いじわ'],
      category: 'しわ/老化',
      question: 'ほうれい線',
      answer: `ほうれい線には**EXOSOME 5 + RED 5 デュアルケア**が効果的です。

🎯 **使用方法**:
- ほうれい線部位に重点的に塗布
- 内側から外側へマッサージ
- **EXOSOME 5**: 週3-4回
- **RED 5**: 毎日`,
      relatedQuestions: ['wrinkles-01', 'product-exosome5', 'product-red5'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    
    // ========================================
    // 美白/色素関連
    // ========================================
    {
      id: 'whitening-01',
      keywords: ['美白', 'ホワイトニング', 'トーンアップ', '明るさ', 'ホワイト'],
      category: '美白/色素',
      question: '美白',
      answer: `肌の美白には**EXOSOME 3**をお勧めします。

エクソソーム357™技術でメラニン生成を抑制し、肌のトーンを明るく改善します。

💡 **使用方法**: 朝・夜の洗顔後、最初のステップ`,
      relatedQuestions: ['whitening-02', 'whitening-03', 'product-exosome3'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-02',
      keywords: ['しみ', 'シミ', 'しみ除去', 'しみ緩和'],
      category: '美白/色素',
      question: 'しみ',
      answer: `しみ改善には**EXOSOME 3 + RED 3 デュアルケア**をお勧めします。

🎯 **使用方法**:
- **EXOSOME 3**: 週3-4回 (集中ケア)
- **RED 3**: 毎日 (デイリーケア)
- 日焼け止め必須！`,
      relatedQuestions: ['whitening-01', 'product-exosome3', 'product-red3'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['そばかす', 'ほくろ', '斑点', '色素'],
      category: '美白/色素',
      question: 'そばかす',
      answer: `そばかす改善には**EXOSOME 3**が効果的です。

💡 **使用方法**:
- そばかす部位に重点的に塗布
- 週3-4回使用
- 日中は日焼け止め必須

💡 **ヒント**: 継続的な使用が重要です`,
      relatedQuestions: ['whitening-01', 'whitening-02', 'product-exosome3'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'whitening-04',
      keywords: ['色素沈着', '色素', 'メラニン', 'くすみ'],
      category: '美白/色素',
      question: '色素沈着',
      answer: `色素沈着改善には**EXOSOME 3**をお勧めします。

エクソソーム成分がメラニン生成を抑制し、色素沈着を改善します。

💡 **使用方法**: 週3-4回、色素部位に集中塗布
⚠️ **注意**: 日焼け止め必須使用`,
      relatedQuestions: ['whitening-01', 'whitening-02', 'product-exosome3'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    
    // ========================================
    // トラブル/ニキビ関連
    // ========================================
    {
      id: 'acne-01',
      keywords: ['ニキビ', '吹き出物', 'アクネ', 'トラブル'],
      category: 'トラブル/ニキビ',
      question: 'ニキビ',
      answer: `はい、EXOBIOはニキビ肌にも安全にご使用いただけます。

**EXOSOME 7**と**RED 7**は肌の鎮静と再生を助け、ニキビで損傷した肌を素早く回復させます。

🎯 **おすすめ製品**:
- **EXOSOME 7** (肌鎮静 + 炎症緩和)
- **RED 7** (日常管理用)

✨ **期待効果**:
- ニキビ鎮静と素早い回復
- 肌バリア強化で再発防止
- 跡や傷跡の改善`,
      relatedQuestions: ['acne-02', 'acne-03', 'product-exosome7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['肌トラブル', '炎症', '赤み'],
      category: 'トラブル/ニキビ',
      question: 'トラブル',
      answer: `肌トラブルには**EXOSOME 7 + RED 7 デュアルケア**をお勧めします。

💡 **使用方法**:
- **EXOSOME 7**: 週3-4回 (集中鎮静)
- **RED 7**: 毎日 (日常管理)
- トラブル部位を重点的にケア

✨ **期待効果**: 素早い鎮静、再発防止`,
      relatedQuestions: ['acne-01', 'product-exosome7', 'product-red7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['ニキビ跡', 'ニキビ傷跡', '傷跡', 'へこみ'],
      category: 'トラブル/ニキビ',
      question: 'ニキビ跡',
      answer: `はい、EXOBIOはニキビ傷跡にも安全にご使用いただけます。

**EXOSOME 3**はニキビ傷跡の改善を助け、ビタミンツリーウォーターとエクソソームできれいな肌を作ることができます。

🎯 **おすすめ製品**: EXOSOME 3 (色素改善 + 美白)

✨ **期待効果**: 素早い鎮静、再発防止`,
      relatedQuestions: ['acne-01', 'acne-02', 'product-exosome3'],
      productTags: ['EXOSOME 3']
    },
    
    // ========================================
    // 毛穴関連
    // ========================================
    {
      id: 'pores-01',
      keywords: ['毛穴', '毛穴縮小', '毛穴改善'],
      category: '毛穴',
      question: '毛穴',
      answer: `毛穴縮小には**EXOSOME 5 ケア**をお勧めします。

🎯 **使用方法**:
- **EXOSOME 5**: 朝・夜の洗顔後、最初のステップ
- 毛穴部位を重点的にケア`,
      relatedQuestions: ['pores-02', 'product-exosome5', 'usage-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'pores-02',
      keywords: ['皮脂', '油分', 'オイリー肌'],
      category: '毛穴',
      question: '皮脂',
      answer: `過度な皮脂分泌には**RED 7**をお勧めします。

毎日使用できる製品で肌のバランスを整えます。

💡 **使用方法**: 毎日朝/夜、洗顔後
💡 **ヒント**: 油分の多い他の製品との併用に注意`,
      relatedQuestions: ['pores-01', 'product-red7', 'usage-01'],
      productTags: ['RED 7']
    },
    
    // ========================================
    // 弾力/リフティング関連
    // ========================================
    {
      id: 'elasticity-01',
      keywords: ['弾力', '肌弾力', 'たるみ', 'リフティング'],
      category: '弾力/リフティング',
      question: '弾力',
      answer: `肌弾力改善には**EXOSOME 5**をお勧めします。

エクソソーム357™技術でコラーゲン生成を促進し、肌の弾力を回復します。

💡 **使用方法**: 週3-4回、下から上へマッサージ`,
      relatedQuestions: ['elasticity-02', 'product-exosome5', 'usage-01'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['顔のたるみ', '輪郭', 'Vライン'],
      category: '弾力/リフティング',
      question: '顔のたるみ',
      answer: `顔のたるみ改善には**EXOSOME 5 + RED 5 デュアルケア**をお勧めします。

🎯 **使用方法**:
- **EXOSOME 5**: 週3-4回 (集中リフティング)
- **RED 5**: 毎日 (日常管理)
- 下から上へ、内側から外側へマッサージ`,
      relatedQuestions: ['elasticity-01', 'product-exosome5', 'product-red5'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    
    // ========================================
    // 水分/保湿関連
    // ========================================
    {
      id: 'hydration-01',
      keywords: ['水分', '保湿', '乾燥', 'しっとり'],
      category: '水分/保湿',
      question: '水分',
      answer: `乾燥肌には**RED 7**をお勧めします。

毎日使用できる製品で肌に十分な水分を供給します。

💡 **使用方法**: 毎日朝/夜、洗顔後の最初のステップ
💡 **ヒント**: 洗顔後の最初のステップで使用するとより効果的`,
      relatedQuestions: ['hydration-02', 'product-red5', 'product-exosome7'],
      productTags: ['RED 5', 'EXOSOME 7', 'RED 7']
    },
    {
      id: 'hydration-02',
      keywords: ['乾燥肌', '角質', 'つっぱり'],
      category: '水分/保湿',
      question: '乾燥肌',
      answer: `乾燥肌には**EXOSOME 5 + EXOSOME 7 (肌バリア強化) プレミアムデュアルケア**をお勧めします。

🎯 **使用方法**:
- **EXOSOME 5**: 毎日 (水分供給)
- **EXOSOME 7**: 毎日 (肌バリア強化)
- 一緒に使用可能

💡 **ヒント**: 十分な水分摂取`,
      relatedQuestions: ['hydration-01', 'product-exosome7', 'product-red7'],
      productTags: ['EXOSOME 5', 'EXOSOME 7', 'RED 7']
    },
    
    // ========================================
    // 鎮静/敏感関連
    // ========================================
    {
      id: 'soothing-01',
      keywords: ['敏感', '敏感肌', 'デリケート', '刺激'],
      category: '鎮静/敏感',
      question: '敏感',
      answer: `敏感な肌には**RED 7**をお勧めします。

マイルドな成分で肌刺激なく鎮静効果を提供します。

✨ **EXOBIOは3無製品です！**
- 無香料 (Fragrance-Free)
- 無着色 (Color-Free)
- 無アルコール (Alcohol-Free)

💡 **使用方法**: 毎日使用可能、少量から開始

💚 **既存製品を変える必要はありません！**
→ クレンジング後の最初のステップに追加するだけで効果UP！`,
      relatedQuestions: ['soothing-02', 'product-red7', 'product-exosome7'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'soothing-02',
      keywords: ['鎮静', '赤み', '赤ら顔'],
      category: '鎮静/敏感',
      question: '鎮静',
      answer: `肌鎮静には**EXOSOME 7 + RED 7**をお勧めします。

🎯 **使用方法**:
- **EXOSOME 7**: 週3-4回 (集中鎮静)
- **RED 7**: 毎日 (日常管理)

💡 **ヒント**: 冷たい水で洗顔後に使用するとより効果的`,
      relatedQuestions: ['soothing-01', 'product-exosome7', 'product-red7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    
    // ========================================
    // 使用方法関連
    // ========================================
    {
      id: 'usage-01',
      keywords: ['使用方法', '使い方', 'どのように', '使用順序'],
      category: '使用方法',
      question: '使用方法',
      answer: `EXOBIO製品使用方法

🧴 **基本使用順序**:
1. 洗顔 (クレンジング)
2. **EXOBIO アンプル** ← ここ！ (最初のステップ = 効果UP ⬆️)
3. 個人の好みに応じて続けて使用

💡 **使用方法**:
- 3番、7番は粘度があり、5番は粘度が少ない特性を理解して
- 適量を顔に直接塗り、ケアしたい部分に均等に塗ってください
- **EXOSOME**: 週3-4回
- **RED**: 毎日使用可能

✨ **効果を高めるヒント**:
- クレンジング後の最初のステップで使用すると効果UP！
- 既存製品を変える必要はありません (ルーティンに追加するだけ！)
- 3無製品で敏感肌も安心して使用可能`,
      relatedQuestions: ['usage-02', 'usage-03', 'product-01'],
      productTags: []
    },
    {
      id: 'usage-02',
      keywords: ['どのくらい', '容量', '量', '使用量'],
      category: '使用方法',
      question: '容量',
      answer: `適正使用量

💧 **1回使用量**: 適量
- ケアしたい部位: 2回

📊 **1 SET使用期間**:
- **EXOSOME 1SET** (週3-4回): 約3-4週間
- **RED** (毎日使用): 約3-4週間`,
      relatedQuestions: ['usage-01', 'usage-03', 'product-08'],
      productTags: []
    },
    {
      id: 'usage-03',
      keywords: ['一緒に', '併用', '組み合わせ', '一緒に使用'],
      category: '使用方法',
      question: '併用使用',
      answer: `EXOBIO製品組み合わせ使用方法

✅ **おすすめの組み合わせ**:

**1. しわ + 美白**
- EXOSOME 5 (週2~3回)
- EXOSOME 3 (週2~3回)
- 交互使用

**2. 集中ケア + デイリーケア**
- EXOSOME (週3-4回)
- RED (毎日)
- 同じ番号推奨 (例: EXOSOME 5 + RED 5)

**3. 複合悩み**
- 昼: RED (デイリーケア)
- 夜: EXOSOME (集中ケア)

💡 **参考**: 複数のEXOBIO製品を一緒に使用しても大丈夫です！`,
      relatedQuestions: ['usage-01', 'usage-02', 'product-01'],
      productTags: []
    },
    {
      id: 'usage-04',
      keywords: ['MTS使用法', 'MTS', 'ダーマローラー', 'マイクロニードル'],
      category: '使用方法',
      question: 'MTS使用法',
      answer: `🔬 **MTS（ダーマローラー）使用方法**

📋 **使用方法**:
**01.** 使用前に、ダーマローラー（MTS）を消毒用エタノールに5〜10分間浸けて十分に消毒してください。

**02.** クレンジングで清潔に洗顔後、肌を整えてください。

**03.** エクソバイオ エクソソーム アンプルを肌に十分に塗布してください。

**04.** ダーマローラーを一定の圧力で希望部位に優しくローリングします。肌に微細な刺激を感じる程度に繰り返してください。

**05.** 残っているアンプルを軽く叩いて吸収させた後、赤くなった肌は鎮静クリームで仕上げてください。

⚠️ **使用案内**:
• MTSは原則として使い捨て製品で、最大3回まで使用可能です。
• 再使用時には必ず毎回徹底的に消毒してから使用してください。
• 3〜4週間隔で1回使用を推奨します。

💡 **効果**: エクソソーム アンプルと一緒に使用すると、肌の吸収率が高まり、より効果的です！
- 0.25mm以下ローラー使用
- 過度な使用禁止 (月1-2回)
- トラブル肌は使用自制`,
      relatedQuestions: ['usage-01', 'product-05', 'product-06'],
      productTags: []
    },
    
    // ========================================
    // 製品情報
    // ========================================
    {
      id: 'product-01',
      keywords: ['違い', '差', '比較', 'EXOSOME', 'RED'],
      category: '製品情報',
      question: 'EXOSOME vs RED 違い',
      answer: `EXOSOME vs RED 違い

🔬 **EXOSOME (集中ケア)**
- 高濃度エクソソーム含有
- 週3-4回使用
- 集中的な肌改善
- より速い効果

💚 **RED (デイリーケア)**
- 適正濃度成分の理想的なフォーミュラ組み合わせ
- 毎日使用可能
- 日常的な肌管理
- マイルドな刺激

💡 **選択ガイド**:
- 速い改善を望むとき → EXOSOME
- 毎日管理したいとき → RED
- 両方使用 → 最高の効果！`,
      relatedQuestions: ['product-02', 'product-03', 'product-04'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-02',
      keywords: ['357', '番号', '数字', '意味'],
      category: '製品情報',
      question: '3, 5, 7 番号の意味',
      answer: `EXOBIO製品番号の意味

3️⃣ **EXOSOME 3 / RED 3**
- 美白 / 色素改善
- しみ、そばかす、くすみ

5️⃣ **EXOSOME 5 / RED 5**
- しわ / 弾力改善
- アンチエイジング、リフティング

7️⃣ **EXOSOME 7 / RED 7**
- 鎮静·水分·バリア集中
- ニキビ、トラブル、敏感性、水分、肌バリア

💡 **選択ガイド**:
- 1つの悩み → 該当番号選択
- 複数の悩み → 組み合わせ使用
- よく分からない場合 → AI診断を受ける！`,
      relatedQuestions: ['product-01', 'product-03', 'product-07'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['おすすめ', 'どれ', '選択', '何', '製品推薦'],
      category: '製品情報',
      question: '製品推薦',
      answer: `自分に合った製品を見つける

🎯 **AI肌診断をおすすめします！**

👉 **今すぐ診断を受ける**: https://curetembio.xyz/

30秒で10種類の肌指標を分析し
カスタマイズされた製品を推薦します。

💡 **クイック選択ガイド**:
- しわの悩み → EXOSOME 5
- 美白の悩み → EXOSOME 3
- 水分鎮静肌バリアの悩み → EXOSOME 7
- デイリーケア → REDシリーズ

📲 **AI診断リンク**: https://curetembio.xyz/`,
      relatedQuestions: ['product-01', 'product-02', 'product-04'],
      productTags: []
    },
    {
      id: 'product-04',
      keywords: ['EXOBIOとは', 'EXOBIO紹介', '製品紹介', 'どんな製品', '信頼', '病院', '皮膚科', '背景', '再購入率', '含量'],
      category: '製品情報',
      question: 'EXOBIO製品背景',
      answer: `EXOBIOは皮膚科専門機器から誕生したホームケアソリューションです！

🏥 **皮膚科専門機器で使用されていた製品**
- **LDM ケア** (超音波皮膚再生管理)
- **ソノ ケア** (皮膚深部への有効成分送達)
- 上記機器施術に使用されていた**EXO BIO357 アンプル**をホームケア用に開発

🎯 **こんな方におすすめ！**
- 30代以降の初期老化兆候
- 40代以降の本格アンチエイジング
- 妊娠/出産後の肌崩れ
- 深いしわ、しみなど深刻な悩み

✨ **EXOBIOの信頼性**
- 皮膚科専門医が認めた成分
- 病院機器施術に使用される高品質アンプル
- ⭐ **再購入率61%** (顧客満足度証明！)
- 皮膚科専門家レベルの高濃縮・高機能性アンプル

🔬 **高濃縮含量 (製品別)**
- **EXOSOME 3**: VITA 620,000 PPM + EXOSOME 5,000 PPM (美白)
- **EXOSOME 5**: Salmon PDRN 10,000 PPM + EXOSOME 5,000 PPM (弾力)
- **EXOSOME 7**: CICA + EXOSOME 760,000 PPM (水分鎮静/肌バリア)
- **RED 3**: VITA 620,000 PPM (美白デイリー)
- **RED 5**: Salmon PDRN 10,000 PPM (弾力デイリー)
- **RED 7**: CICA 7,600 PPM (水分鎮静デイリー)

🌿 **3無 (Three-Free) 製品**
- 無香料、無着色、無アルコール
→ 敏感な肌にも安心して使用可能

💚 **使用が簡単です**
- 既存製品を変える必要なし
- クレンジング後の最初のステップに追加するだけで効果UP！`,
      relatedQuestions: ['product-01', 'product-05', 'product-06'],
      productTags: []
    },
    {
      id: 'product-05',
      keywords: ['LDM', 'LDMケア', '超音波', '病院管理'],
      category: '製品情報',
      question: 'LDM ケア',
      answer: `EXOBIOはLDMケア施術に使用されていたアンプルです！

🏥 **LDM ケアとは？**
- 超音波を利用した皮膚再生管理機器
- 皮膚科で使用される専門機器
- 皮膚深部への有効成分送達

💡 **EXOBIOとLDM ケア**
- LDM ケア施術時に**EXO BIO357 アンプル**使用
- 病院で検証された高品質成分
- ホームケア用に開発し、家庭でも使用可能

✨ **家でも皮膚科レベルのケア**
- 病院施術に使用されていたその成分
- 専門家が認めた効果
- 安全で検証された製品`,
      relatedQuestions: ['product-04', 'product-06', 'usage-04'],
      productTags: []
    },
    {
      id: 'product-06',
      keywords: ['ソノ', 'ソノケア', '病院管理', '皮膚科施術'],
      category: '製品情報',
      question: 'ソノ ケア',
      answer: `EXOBIOはソノケア施術に使用されていたアンプルです！

🏥 **ソノ ケアとは？**
- 皮膚深部へ有効成分を送達する専門機器
- 皮膚科で使用される管理機器
- 皮膚吸収率を高める施術

💡 **EXOBIOとソノ ケア**
- ソノ ケア施術時に**EXO BIO357 アンプル**使用
- 病院で検証された高品質成分
- ホームケア用に開発し、家庭でも使用可能

✨ **家でも皮膚科レベルのケア**
- 病院施術に使用されていたその成分
- 専門家が認めた効果
- 安全で検証された製品

💡 **MTSローラーと一緒に使用すると？**
- 皮膚科施術と類似の効果
- 吸収率大幅増加
- より速い効果実感`,
      relatedQuestions: ['product-04', 'product-05', 'usage-04'],
      productTags: []
    },
    
    // ========================================
    // 製品別詳細情報
    // ========================================
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'エクソソーム3'],
      category: '製品情報',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - 美白集中ケア**

✨ **BIO 357™ EXOSOME**は皮膚科から始まり薬局が認めた、スキンケア効果を一段階引き上げるアップグレードプレミアムエクソソーム357アンプルです。

🎯 **核心成分**
- **VITA 620,000 PPM** (超高濃度ビタミン)
- **EXOSOME 5,000 PPM** (エクソソーム)
- 美白機能性認証成分

💡 **主要効果**
- しみ、そばかす、色素沈着改善
- 肌トーン均一化
- くすみ改善
- 肌ブライトニング

📅 **使用方法**
- **使用周期**: 週3-4回
- **使用時期**: 洗顔後最初のステップ

💚 **デイリーケアは？** RED 3推奨 (毎日使用可能)`,
      relatedQuestions: ['whitening-01', 'product-red3', 'product-01'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'エクソソーム5'],
      category: '製品情報',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - 弾力集中ケア**

✨ **BIO 357™ EXOSOME**は皮膚科から始まり薬局が認めた、スキンケア効果を一段階引き上げるアップグレードプレミアムエクソソーム357アンプルです。

🎯 **核心成分**
- **Salmon PDRN 10,000 PPM** (サーモンDNA)
- **EXOSOME 5,000 PPM** (エクソソーム)
- しわ改善機能性認証成分

💡 **主要効果**
- しわ、小じわ改善
- 肌弾力回復
- アンチエイジング
- リフティング効果

📅 **使用方法**
- **使用周期**: 週3-4回
- **使用時期**: 洗顔後最初のステップ

💚 **デイリーケアは？** RED 5推奨 (毎日使用可能)`,
      relatedQuestions: ['wrinkles-01', 'product-red5', 'product-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'エクソソーム7'],
      category: '製品情報',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - 鎮静集中ケア**

✨ **BIO 357™ EXOSOME**は皮膚科から始まり薬局が認めた、スキンケア効果を一段階引き上げるアップグレードプレミアムエクソソーム357アンプルです。

🎯 **核心成分**
- **CICA (ツボクサ抽出物)**
- **EXOSOME 760,000 PPM** (超高濃度エクソソーム)
- 肌鎮静成分

💡 **主要効果**
- 水分供給
- 鎮静効果
- ニキビ、トラブル鎮静
- 赤み緩和
- 敏感性肌改善
- 肌バリア強化
- 肌再生促進

📅 **使用方法**
- **使用周期**: 週3-4回
- **使用時期**: 洗顔後最初のステップ

⚡ **特徴**
- 敏感な肌に安全
- トラブル肌管理
- 肌鎮静即効実感

💚 **デイリーケアは？** RED 7推奨 (毎日使用可能)`,
      relatedQuestions: ['acne-01', 'product-red7', 'product-01'],
      productTags: ['EXOSOME 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'レッド3'],
      category: '製品情報',
      question: 'RED 3',
      answer: `💚 **RED 3 - 美白デイリーケア**

✨ **BIO 357™ RED**は皮膚科から始まり薬局が認めた、毎日使いやすく設計され、スキンケアの最初のステップで負担なく始められるデイリー357アンプルです。

🎯 **核心成分**
- **VITA 620,000 PPM** (超高濃度ビタミン)
- 美白機能性認証成分
- デイリー使用最適化フォーミュラ

💡 **主要効果**
- しみ、そばかす予防
- 肌トーン明るく
- くすみ改善
- 毎日使用で肌透明感UP

📅 **使用方法**
- **使用周期**: 毎日 (朝/夜)
- **使用時期**: 洗顔後最初のステップ

💡 **デイリー + 集中ケア**
- **RED 3** (毎日) + **EXOSOME 3** (週3-4回) 組み合わせ推奨
- 集中ケア効果最大化

🔬 **集中ケアは？** EXOSOME 3推奨 (週3-4回)`,
      relatedQuestions: ['whitening-01', 'product-exosome3', 'product-01'],
      productTags: ['RED 3']
    },
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'レッド5'],
      category: '製品情報',
      question: 'RED 5',
      answer: `💚 **RED 5 - 弾力デイリーケア**

✨ **BIO 357™ RED**は皮膚科から始まり薬局が認めた、毎日使いやすく設計され、スキンケアの最初のステップで負担なく始められるデイリー357アンプルです。

🎯 **核心成分**
- **Salmon PDRN 10,000 PPM** (サーモンDNA)
- しわ改善機能性認証成分
- デイリー使用最適化フォーミュラ

💡 **主要効果**
- 小じわ予防
- 肌弾力維持
- 日常的なアンチエイジング
- 肌活力UP

📅 **使用方法**
- **使用周期**: 毎日 (朝/夜)
- **使用時期**: 洗顔後最初のステップ

💡 **デイリー + 集中ケア**
- **RED 5** (毎日) + **EXOSOME 5** (週3-4回) 組み合わせ推奨
- 集中ケア効果最大化

🔬 **集中ケアは？** EXOSOME 5推奨 (週3-4回)`,
      relatedQuestions: ['wrinkles-02', 'product-exosome5', 'product-01'],
      productTags: ['RED 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'レッド7'],
      category: '製品情報',
      question: 'RED 7',
      answer: `💚 **RED 7 - 鎮静デイリーケア**

✨ **BIO 357™ RED**は皮膚科から始まり薬局が認めた、毎日使いやすく設計され、スキンケアの最初のステップで負担なく始められるデイリー357アンプルです。

🎯 **核心成分**
- **CICA 7,600 PPM** (ツボクサ抽出物)
- 肌鎮静成分
- デイリー使用最適化フォーミュラ

💡 **主要効果**
- 毎日の肌鎮静
- 水分供給
- ニキビ予防
- 赤み緩和
- 敏感性肌改善

📅 **使用方法**
- **使用周期**: 毎日 (朝/夜)
- **使用時期**: 洗顔後最初のステップ

💡 **デイリー + 集中ケア**
- **RED 7** (毎日) + **EXOSOME 7** (週3-4回) 組み合わせ推奨
- 集中ケア効果最大化

🔬 **集中ケアは？** EXOSOME 7推奨 (週3-4回)`,
      relatedQuestions: ['soothing-01', 'product-exosome7', 'product-01'],
      productTags: ['RED 7']
    },
    
    // ========================================
    // 効能/効果関連
    // ========================================
    {
      id: 'effect-01',
      keywords: ['効能', '効果', '期間', '結果', 'いつから'],
      category: '効能',
      question: '効果実感期間',
      answer: `EXOBIO効果実感期間

✨ **EXOBIOは専門家レベルのホームケアアンプルです！**

📅 **効果実感期間**
1️⃣ **1-2週間**: 初期改善
   - 肌キメ改善
   - 水分感増加
   - 肌トーン明るく

2️⃣ **4-6週間**: 明確な変化
   - 小じわ改善
   - 色素沈着淡化
   - 肌弾力向上

3️⃣ **8-12週間**: 最高の結果
   - 深いしわ改善
   - しみ大幅改善
   - 肌全体的な質向上

💡 **使用方法による違い**
- EXOSOME単独使用: より速い集中改善
- RED単独使用: 緩やかで持続的な改善
- **デュアルケア (EXOSOME + RED)**: 最速効果！

🎯 **最大効果のための秘訣**
- 定期的な使用 (週3-4回)
- クレンジング後の最初のステップで使用
- 適正量使用
- 日焼け止め必須 (美白製品使用時)

⭐ **再購入率61%** - 効果を実感したお客様が再購入します！`,
      relatedQuestions: ['product-04', 'usage-01', 'product-01'],
      productTags: []
    },
    
    // ========================================
    // 安全性関連
    // ========================================
    {
      id: 'safety-01',
      keywords: ['副作用', '肌トラブル', '問題', '異常反応', 'アレルギー'],
      category: '安全性',
      question: '副作用',
      answer: `💊 **副作用について**

EXOBIOは低刺激処方で、ほとんどの方に安全にご使用いただけます。

🔸 **まれに見られる現象**
- 軽い赤み (数時間で消失)
- ピリピリ感 (有効成分の吸収過程)
- 軽い皮むけ (ターンオーバー促進)

⚠️ **以下の症状が出た場合は使用を中止**
- 強い赤みや腫れ
- 持続するかゆみ
- 発疹や蕁麻疹

症状が続く場合は、皮膚科専門医にご相談ください。`,
      relatedQuestions: ['safety-02', 'safety-03', 'usage-01'],
      productTags: []
    },
    {
      id: 'safety-02',
      keywords: ['安全', '検証', '認証', 'テスト', '品質'],
      category: '安全性',
      question: '安全性検証',
      answer: `✅ **安全性検証**

EXOBIOは厳格な安全性テストを経て、多くの専門家から認められた製品です。

🔬 **検証内容**
- ✓ 皮膚科専門医による検証完了
- ✓ 薬局での販売承認済み
- ✓ 3-Free処方 (香料・アルコール・着色料不使用)
- ✓ リピート購入率61%

📧 **お問い合わせ**
製品に関するご質問は下記までご連絡ください：
**Email:** exobio@gmail.com`,
      relatedQuestions: ['safety-01', 'safety-03', 'product-01'],
      productTags: []
    },
    {
      id: 'safety-03',
      keywords: ['妊娠', '授乳', '妊婦', '母乳育児', '妊娠中'],
      category: '安全性',
      question: '妊娠・授乳中使用',
      answer: `🤰 **妊娠・授乳中の使用について**

⚠️ **使用前に必ず確認**
EXOBIOは一般的に安全な成分で構成されていますが、**妊娠・授乳中は体が敏感な時期**です。

使用前に必ず担当の産婦人科医師または皮膚科専門医にご相談ください。

💡 **推奨事項**
- 専門医による個別相談
- パッチテストの実施
- 少量から始める
- 異常を感じたらすぐに中止`,
      relatedQuestions: ['safety-01', 'safety-02', 'usage-01'],
      productTags: []
    },
    {
      id: 'safety-04',
      keywords: ['成分', '材料', '原料', '含量', '高濃縮'],
      category: '安全性',
      question: '主要成分',
      answer: `EXOBIO主要成分情報

🧪 **超高濃縮核心成分**

**EXOSOME 3 / RED 3 (美白)**
💎 VITA成分
- EXOSOME 3: 620,000 PPM (高濃縮) + EXOSOME 5,000 PPM
- RED 3: 620,000 PPM (デイリー)
- 効果: 色素沈着改善、肌のトーンアップ

**EXOSOME 5 / RED 5 (しわ)**
✨ Salmon PDRN (ポリデオキシリボヌクレオチド)
- EXOSOME 5: 10,000 PPM (高濃縮) + EXOSOME 5,000 PPM
- RED 5: 10,000 PPM (デイリー)
- 効果: 肌再生、しわ改善、弾力強化

**EXOSOME 7 / RED 7 (鎮静)**
🌿 CICA (ツボクサエキス)
- EXOSOME 7: CICA + EXOSOME 760,000 PPM (高濃縮)
- RED 7: 7,600 PPM (デイリー)
- 効果: 赤み鎮静、肌バリア強化、水分供給

🌟 **3-Free製品**
❌ 無香料 (No Fragrance)
❌ 無着色 (No Color)
❌ 無アルコール (No Alcohol)
→ 敏感肌にも安心！

✅ **安全性認証**
- 皮膚科専門医による検証
- 病院施術 (LDM、ソノケア) 使用成分
- 高品質原料使用

💡 **濃度の違いを理解する**:
- EXOSOME: 週3-4回集中ケア
- RED: 毎日コツコツデイリーケア
- 目的に応じて選択または併用可能！`,
      relatedQuestions: ['product-04', 'safety-02', 'product-01'],
      productTags: []
    },
    {
      id: 'product-10',
      keywords: ['皮膚バリア', 'バリア', 'バリア機能', '保護膜'],
      category: 'トラブル/鎮静',
      question: '皮膚バリア',
      answer: `皮膚バリア強化 - EXOSOME 7

🛡️ **皮膚バリアとは？**
肌表面の保護膜で、外部刺激から肌を守り、水分損失を防ぐ重要な役割を果たします。

**弱まったバリアの症状**:
- 簡単にヒリヒリして刺激を受ける
- 乾燥してつっぱる
- 赤みが頻繁に出る
- 化粧品が合わない

🌿 **推奨製品: EXOSOME 7 / RED 7**

**EXOSOME 7 (集中ケア)**
- CICA 760,000 PPM 高濃縮
- 週3-4回使用
- 損傷したバリアの迅速な回復

**RED 7 (デイリーケア)**
- CICA 7,600 PPM
- 毎日使用可能
- 継続的なバリア強化

💪 **バリア強化効果**:
1. 外部刺激遮断 (微細塵、環境汚染)
2. 水分保持力増加
3. 赤み・敏感度減少
4. トラブル予防

📖 **使用方法**:
1. クレンジング後EXOBIOアンプルを塗布
2. クリームで仕上げ

✨ **期待効果**:
- 2週間: 刺激減少、水分感増加
- 4週間: 赤み改善、バリア回復
- 8週間: 丈夫な皮膚バリア完成

🎯 **こんな方におすすめ**:
- 敏感肌
- 頻繁な赤み
- 乾燥してつっぱる肌
- 化粧品刺激が頻繁な肌

💡 **TIP**: EXOSOME 7 (週3-4回) + RED 7 (毎日) 併用でより早い効果！`,
      relatedQuestions: ['soothing-01', 'product-exosome7', 'product-red7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    
    // ========================================
    // 価格/購入関連
    // ========================================
    {
      id: 'product-07',
      keywords: ['357', '数字', '番号', '意味', '違い'],
      category: '製品情報',
      question: '357数字の意味',
      answer: `🔢 **357システムの意味**

EXOBIOの製品番号は、各製品の核心機能を表しています。

**3番 - ブライトニング**
💎 美白・色素改善・透明感
核心成分:
- グルタチオン 1,000 PPM
- ナイアシンアミド 50,000 PPM
- トラネキサム酸 10,000 PPM

**5番 - アンチエイジング**
✨ しわ改善・弾力・リフティング
核心成分:
- サーモンPDRN 10,000 PPM
- ペプチド 8種
- レチノール誘導体

**7番 - 鎮静・保湿**
🌿 ニキビ鎮静・水分供給・バリア強化
核心成分:
- CICA 7,600 PPM
- ヒアルロン酸 8種
- パンテノール 50,000 PPM

💡 **製品選択ガイド**
- **3番**: シミ、くすみ、色素が気になる方
- **5番**: しわ、たるみ、弾力低下が気になる方
- **7番**: ニキビ、赤み、敏感肌の方`,
      relatedQuestions: ['product-01', 'product-02', 'product-03'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-08',
      keywords: ['価格', '費用', '価値', 'いくら', 'お金', '金額', '合理的'],
      category: '製品情報',
      question: '価格',
      answer: `EXOBIO製品ラインナップ

💎 **EXOSOMEプレミアムライン（高濃度集中ケア)**

**EXOSOME 3** (美白・シミ)
- 容量: 5ml × 5ea
- 週3-4回使用

**EXOSOME 5** (しわ・弾力)
- 容量: 5ml × 5ea
- 週3-4回使用

**EXOSOME 7** (鎮静・バリア)
- 容量: 5ml × 5ea
- 週3-4回使用

💚 **REDデイリーライン（毎日使用)**

**RED 3** (美白)
- 容量: 15ml × 2ea
- 毎日使用可能

**RED 5** (しわ)
- 容量: 15ml × 2ea
- 毎日使用可能

**RED 7** (鎮静)
- 容量: 15ml × 2ea
- 毎日使用可能

📦 **使用期間**:
- EXOSOME: 週3-4回使用で約3-4週間
- RED: 毎日使用で約3-4週間

💡 **製品特徴**:
- EXOSOME: 高濃度成分で速い改善
- RED: 毎日負担なく使用可能

🎁 **追加特典**:
- AI肌診断: 無料 (https://curetembio.xyz)
- お問い合わせ: curetembio@gmail.com

💰 **価格お問い合わせ**: ショッピングモールまたは薬局でご確認ください`,
      relatedQuestions: ['purchase-01', 'product-01', 'usage-04'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'purchase-01',
      keywords: ['購入', '購入方法', '製品購入', '製品購入方法', '買う', 'どこで', '販売', 'ショッピングモール', '薬局', 'オンライン'],
      category: '購入',
      question: '製品購入方法',
      answer: `EXOBIO製品購入方法

🏪 **オフライン購入**

**ソウル**
- 狎鴎亭DMクリニック
- 主要4大商圏の薬局
  · 明洞
  · 弘大
  · 江南
  · 聖水
  · 建大

**釜山**
- 南浦洞主要拠点
- 釜田駅主要拠点

📍 **詳細な位置情報**
→ https://www.exobio.net/ > PHARMACY

💻 **オンライン購入**

**公式サイト**
🌐 日本: https://www.exobio.net/
🇰🇷 韓国: https://kr.exobio.net/
🌎 英語: https://en.exobio.net/

**海外ショッピングモール**
🇯🇵 Qoo10 JAPAN: https://www.qoo10.jp/shop/EXOBIO (日本語)
🇨🇳 公式サイト(CN): https://cn.curetembio.com/ (中国語、SHOPでドル決済可能)

💬 **中国製品購入お問い合わせ**
🇨🇳 WeChat: lele620918

💡 **購入お問い合わせ**
📧 メール: curetembio@gmail.com
🌐 公式ホームページ: https://www.exobio.net/`,
      relatedQuestions: ['product-01', 'product-08', 'usage-01'],
      productTags: []
    }
  ],
  
  // ========================================
  // クイックリプライボタン
  // ========================================
  quickReplyKeywords: [
    // 🛒 購入方法 (最優先)
    { label: '🛒 購入方法', query: '製品購入方法' },
    
    // 肌悩み - しわ/老化 (4個)
    { label: '💫 シワ', query: 'しわ' },
    { label: '💫 小ジワ', query: '小じわ' },
    { label: '💫 目元のシワ', query: '目元のしわ' },
    { label: '💫 ほうれい線', query: 'ほうれい線' },
    
    // 肌悩み - 美白/シミ (4個)
    { label: '💎 美白', query: '美白' },
    { label: '✨ シミ', query: 'しみ' },
    { label: '💎 色素沈着', query: '色素沈着' },
    { label: '💎 くすみ', query: 'くすみ' },
    
    // 肌悩み - ニキビ/トラブル (4個)
    { label: '🔴 ニキビ', query: 'ニキビ' },
    { label: '🔴 吹き出物', query: '吹き出物' },
    { label: '🔴 肌荒れ', query: '肌トラブル' },
    { label: '🔴 ニキビ跡', query: 'ニキビ跡' },
    
    // 肌悩み - 鎮静/敏感性 (5個)
    { label: '🌸 赤み', query: '赤み' },
    { label: '🌿 鎮静', query: '鎮静' },
    { label: '🌸 敏感肌', query: '敏感' },
    { label: '🛡️ バリア', query: '皮膚バリア' },
    { label: '🛡️ バリア強化', query: '皮膚バリア' },
    
    // 肌悩み - 弾力/たるみ (3個)
    { label: '🌟 弾力', query: '弾力' },
    { label: '🌟 たるみ', query: '顔のたるみ' },
    { label: '🌟 リフティング', query: 'リフティング' },
    
    // 肌悩み - 水分/保湿 (3個)
    { label: '💧 保湿', query: '水分' },
    { label: '💧 乾燥肌', query: '乾燥肌' },
    { label: '💧 うるおい', query: '保湿' },
    
    // 肌悩み - 毛穴 (1個)
    { label: '⭕ 毛穴', query: '毛穴' },
    
    // 使用方法 (4個)
    { label: '📖 使い方', query: '使用方法' },
    { label: '📖 使用量', query: '容量' },
    { label: '📖 併用', query: '併用' },
    { label: '🔬 MTS使用法', query: 'MTS使用法' },
    
    // 製品情報 (10個)
    { label: '🎯 推奨', query: 'おすすめ' },
    { label: '🔄 違い', query: '違い' },
    { label: '💡 EXOBIOとは?', query: 'EXOBIOとは' },
    { label: '✅ 効能', query: '効能' },
    { label: '🔢 番号の意味', query: '357' },
    { label: '💰 価格', query: '価格' },
    { label: '🧪 成分', query: '成分' },
    { label: '🔢 EXOSOME 3', query: 'EXOSOME 3' },
    { label: '🔢 EXOSOME 5', query: 'EXOSOME 5' },
    { label: '🔢 EXOSOME 7', query: 'EXOSOME 7' },
    
    // 安全性 (2個)
    { label: '⚠️ 副作用', query: '副作用' },
    { label: '✅ 安全性', query: '安全' },
    
    // RED ライン (3個)
    { label: '💚 RED 3', query: 'RED 3' },
    { label: '💚 RED 5', query: 'RED 5' },
    { label: '💚 RED 7', query: 'RED 7' }
  ],
  
  // ========================================
  // デフォルト応答 (マッチング失敗時)
  // ========================================
  fallbackResponse: `申し訳ございません。ご質問を理解できませんでした。😅

💡 **以下のキーワードをご参考ください**:

**肌悩み (10個)**
1. 💎 美白 - EXOSOME 3
2. ✨ シミ - EXOSOME 3
3. 💫 シワ - EXOSOME 5
4. 🌟 弾力 - EXOSOME 5
5. 🌸 赤み - EXOSOME 7
6. 🌿 鎮静 - EXOSOME 7
7. 🛡️ バリア - EXOSOME 7
8. 💧 保湿 - EXOSOME 7
9. 🔴 ニキビ - EXOSOME 7
10. ⭕ 毛穴 - EXOSOME 3/5

**製品情報 (8個)**
11. 🎯 製品推奨 - AI診断
12. 🔄 EXOSOME vs RED - 違い
13. 💡 EXOBIOとは? - ブランド紹介
14. ✅ 効能 - 製品効果及び使用法
15. 📖 使用方法 - 使用ガイド
16. 🔢 3·5·7 番号 - 番号の意味
17. 💰 価格 - 製品価格

**安全性 (2個)**
18. ⚠️ 副作用 - 安全性情報
19. 🧪 成分 - 主要成分

下のクイックリプライボタンをクリックすると便利です！ 👇`
};

console.log('✅ CHATBOT_DATA 정의 완료');
console.log('Language:', CHATBOT_DATA.language);
console.log('quickReplyKeywords:', CHATBOT_DATA.quickReplyKeywords.length);
