/**
 * EXOBIO AI Skin Consultation Chatbot
 * @description EXOBIO is a premium 357 skincare serum that started from dermatology clinics - 32 Q&As about skincare
 * @version 1.0.0
 * @language en (English)
 * @lastUpdated 2026-02-21
 * @totalQuestions 32
 */

const CHATBOT_DATA = {
  version: '1.0.0',
  lastUpdated: '2026-02-21',
  language: 'en',
  totalQuestions: 32,
  
  // 🗂️ Categories (10 categories)
  categories: [
    'Wrinkles/Anti-aging',       // Wrinkles/Anti-aging
    'Whitening/Pigmentation',     // Whitening/Pigmentation
    'Acne/Trouble',              // Acne/Trouble
    'Pores',                     // Pores
    'Elasticity/Lifting',        // Elasticity/Lifting
    'Hydration',                 // Hydration
    'Soothing/Sensitive',        // Soothing/Sensitive
    'Usage',                     // Usage
    'Product Info',              // Product Info
    'Safety'                     // Safety
  ],
  
  // 💬 32 Q&A Data
  qaList: [
    // ============================================================
    // Wrinkles/Anti-aging - 4 items
    // ============================================================
    {
      id: 'wrinkles-01',
      keywords: ['wrinkles', 'anti-aging', 'wrinkle removal', 'wrinkle care', 'aging'],
      category: 'Wrinkles/Anti-aging',
      question: 'Wrinkles',
      answer: `We recommend **EXOSOME 5** for wrinkle improvement.

Exosome 357™ technology restores skin elasticity and cares for fine lines to deep wrinkles.

💡 **How to use**: First step after cleansing, morning and evening`,
      relatedQuestions: ['Fine Lines', 'Eye Wrinkles', 'Nasolabial Folds'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['fine lines', 'fine wrinkles', 'superficial wrinkles'],
      category: 'Wrinkles/Anti-aging',
      question: 'Fine Lines',
      answer: `Start with **RED 5** for early fine lines.

A daily care product for everyday use.

If you want faster improvement, combine with **EXOSOME 5** used 3-4 times a week`,
      relatedQuestions: ['Wrinkles', 'Eye Wrinkles'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['eye wrinkles', 'under eye wrinkles', 'crow\'s feet', 'forehead wrinkles'],
      category: 'Wrinkles/Anti-aging',
      question: 'Eye Wrinkles',
      answer: `We recommend **EXOSOME 5** for improving eye wrinkles.

💡 **How to use**: Apply gently around the eye area
⚠️ **Caution**: Avoid contact with eyes`,
      relatedQuestions: ['Wrinkles', 'Fine Lines'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['nasolabial folds', 'smile lines', 'laugh lines'],
      category: 'Wrinkles/Anti-aging',
      question: 'Nasolabial Folds',
      answer: `We recommend **EXOSOME 5** + **RED 5** dual care for deep wrinkles.

💡 **Usage schedule**:
- Morning: RED 5 (Daily care)
- Evening: EXOSOME 5 (3-4 times/week, Intensive care)`,
      relatedQuestions: ['Wrinkles', 'Fine Lines'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Whitening/Pigmentation - 4 items
    // ============================================================
    {
      id: 'whitening-01',
      keywords: ['whitening', 'brightening', 'tone up', 'brightness', 'white'],
      category: 'Whitening/Pigmentation',
      question: 'Whitening',
      answer: `We recommend **EXOSOME 3** for skin brightening.

High-concentration vitamin ingredients (VITA 620,000 PPM) make skin bright and clear.

💡 **How to use**: Use 3-4 times a week, focus on dark areas`,
      relatedQuestions: ['Melasma', 'Spots', 'Hyperpigmentation'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-02',
      keywords: ['melasma', 'melasma removal', 'dark spots'],
      category: 'Whitening/Pigmentation',
      question: 'Melasma',
      answer: `We recommend **EXOSOME 3** + **RED 3** for melasma care.

💡 **Intensive care method**:
1. RED 3: Daily care (Morning & Evening)
2. EXOSOME 3: Intensive care 3-4 times/week
3. Note: Sunscreen is essential!`,
      relatedQuestions: ['Whitening', 'Spots'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['spots', 'freckles', 'blemishes', 'pigmentation'],
      category: 'Whitening/Pigmentation',
      question: 'Spots',
      answer: `We recommend **EXOSOME 3** for improving spots.

VITA 620,000 PPM active ingredients improve skin pigmentation.

💡 **Usage tip**: After cleansing, focus application on spotted areas`,
      relatedQuestions: ['Whitening', 'Melasma', 'Hyperpigmentation'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-04',
      keywords: ['hyperpigmentation', 'pigmentation', 'melanin', 'dullness'],
      category: 'Whitening/Pigmentation',
      question: 'Hyperpigmentation',
      answer: `We recommend **EXOSOME 3** for improving hyperpigmentation.

Exosome ingredients inhibit melanin formation.

💡 **How to use**: Use 3-4 times a week on pigmented areas
🌞 **Note**: Sunscreen is essential`,
      relatedQuestions: ['Whitening', 'Melasma', 'Spots'],
      productTags: ['EXOSOME 3', 'RED 3']
    },

    // ============================================================
    // Acne/Trouble - 3 items
    // ============================================================
    {
      id: 'acne-01',
      keywords: ['acne', 'pimples', 'breakouts', 'blemishes'],
      category: 'Acne/Trouble',
      question: 'Acne',
      answer: `EXOBIO is safe for acne-prone skin!

🎯 **Recommended products**
- **EXOSOME 7**: Soothing & Regeneration
- **RED 7**: Daily care

✨ **Expected effects**
- Acne soothing
- Quick recovery
- Strengthened skin barrier
- Improved acne marks`,
      relatedQuestions: ['Trouble', 'Acne Scars'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['skin trouble', 'inflammation', 'redness'],
      category: 'Acne/Trouble',
      question: 'Trouble',
      answer: `We recommend **EXOSOME 7** + **RED 7** dual care.

💡 **How to use**:
- EXOSOME 7: 3-4 times/week, focus on trouble areas
- RED 7: Daily use
- Effect: Quick soothing, prevents recurrence`,
      relatedQuestions: ['Acne', 'Acne Scars', 'Sensitive'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['acne scars', 'acne marks', 'scars', 'pitted scars'],
      category: 'Acne/Trouble',
      question: 'Acne Scars',
      answer: `We recommend **EXOSOME 3** for improving acne scars.

Pigmentation improvement (whitening) + Soothing + Regeneration

✅ EXOBIO is safe and can be used even on acne-prone skin`,
      relatedQuestions: ['Acne', 'Trouble', 'Whitening'],
      productTags: ['EXOSOME 3', 'EXOSOME 7']
    },

    // ============================================================
    // Pores - 2 items
    // ============================================================
    {
      id: 'pores-01',
      keywords: ['pores', 'pore minimizer', 'pore care'],
      category: 'Pores',
      question: 'Pores',
      answer: `We recommend **EXOSOME 5** for pore minimizing care.

💡 **How to use**:
- First step after cleansing, morning and evening
- Focus on pore areas`,
      relatedQuestions: ['Sebum', 'Wrinkles'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'pores-02',
      keywords: ['sebum', 'oiliness', 'oily skin'],
      category: 'Pores',
      question: 'Sebum',
      answer: `We recommend **RED 7** for sebum control.

💡 **How to use**: Daily morning/evening after cleansing
⚠️ **Note**: Avoid combining with other oily products`,
      relatedQuestions: ['Pores', 'Acne'],
      productTags: ['RED 7', 'EXOSOME 7']
    },

    // ============================================================
    // Elasticity/Lifting - 2 items
    // ============================================================
    {
      id: 'elasticity-01',
      keywords: ['elasticity', 'skin firmness', 'sagging', 'lifting'],
      category: 'Elasticity/Lifting',
      question: 'Elasticity',
      answer: `We recommend **EXOSOME 5** for enhancing skin elasticity.

Salmon PDRN 10,000 PPM ingredients promote collagen production and firm skin.

💡 **How to use**: Apply 3-4 times a week, massage upward`,
      relatedQuestions: ['Wrinkles', 'Sagging', 'Lifting'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['facial sagging', 'facial contour', 'V-line'],
      category: 'Elasticity/Lifting',
      question: 'Facial Sagging',
      answer: `We recommend **EXOSOME 5** + **RED 5** dual care.

💡 **Dual care method**:
- EXOSOME 5: 3-4 times/week (Intensive care)
- RED 5: Daily use (Daily care)
- Massage upward and outward`,
      relatedQuestions: ['Elasticity', 'Wrinkles'],
      productTags: ['EXOSOME 5', 'RED 5']
    },

    // ============================================================
    // Hydration - 2 items
    // ============================================================
    {
      id: 'hydration-01',
      keywords: ['hydration', 'moisture', 'dryness', 'moisturizing'],
      category: 'Hydration',
      question: 'Hydration',
      answer: `We recommend **RED 7** for dry skin.

💡 **How to use**: Daily use, first step after cleansing
💧 **Tip**: Apply immediately after cleansing for enhanced effect`,
      relatedQuestions: ['Dry Skin', 'Sensitive'],
      productTags: ['RED 5', 'RED 7']
    },
    {
      id: 'hydration-02',
      keywords: ['dry skin', 'flaking', 'tightness'],
      category: 'Hydration',
      question: 'Dry Skin',
      answer: `We recommend **EXOSOME 5** + **EXOSOME 7** premium dual care.

💡 **Barrier strengthening effect**:
- Deep hydration + Barrier strengthening
- Use together daily
- Drink plenty of water!`,
      relatedQuestions: ['Hydration', 'Sensitive', 'Skin Barrier'],
      productTags: ['EXOSOME 5', 'EXOSOME 7', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Soothing/Sensitive - 2 items
    // ============================================================
    {
      id: 'soothing-01',
      keywords: ['sensitive', 'sensitive skin', 'irritation', 'reactive'],
      category: 'Soothing/Sensitive',
      question: 'Soothing',
      answer: `We recommend **RED 7** for sensitive skin.

Provides soothing effects with gentle ingredients without irritation.

✨ **EXOBIO is a 3-FREE product!**
- Fragrance-Free
- Color-Free
- Alcohol-Free`,
      relatedQuestions: ['Sensitive', 'Trouble', 'Skin Barrier'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'soothing-02',
      keywords: ['soothing', 'redness', 'rosacea'],
      category: 'Soothing/Sensitive',
      question: 'Sensitive',
      answer: `We recommend **EXOSOME 7** for sensitive skin.

🌿 **CICA 760,000 PPM ingredients**:
- Instant soothing
- Strengthened skin barrier
- Reduced redness

💡 **Safe use**: 3-FREE system (Fragrance-free/Color-free/Alcohol-free)`,
      relatedQuestions: ['Soothing', 'Trouble', 'Skin Barrier'],
      productTags: ['EXOSOME 7', 'RED 7']
    },

    // ============================================================
    // Usage - 3 items
    // ============================================================
    {
      id: 'usage-01',
      keywords: ['how to use', 'usage', 'application method', 'usage order'],
      category: 'Usage',
      question: 'How to Use',
      answer: `EXOBIO - Basic Usage Guide

💡 **Usage order**:
1. Cleansing
2. **EXOBIO Serum** (First step!)
3. Your products (Toner, Serum, Cream)

✅ **Important notes**:
- EXOBIO serum has viscosity, apply directly
- EXOSOME: 3-4 times/week
- RED: Daily use

💡 **Tip**: Use after cleansing for enhanced effect!

✨ **Add to your existing routine**
- No need to replace existing products
- Just add EXOBIO as first step
- Enhanced effect⬆️

🌟 **Safe for sensitive skin with 3-FREE**
- Fragrance-free ❌
- Color-free ❌
- Alcohol-free ❌`,
      relatedQuestions: ['Amount', 'Combination'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-02',
      keywords: ['amount', 'dosage', 'quantity', 'how much'],
      category: 'Usage',
      question: 'Amount',
      answer: `Appropriate EXOBIO usage amount

💡 **Amount per use**:
- Apply 2 times on target area

📦 **Usage period per set**:
- EXOSOME 1 SET (5ml × 5): About 3-4 weeks (3-4 times/week)
- RED 1 SET (15ml × 2): About 3-4 weeks (Daily)`,
      relatedQuestions: ['How to Use', 'Combination'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-03',
      keywords: ['combination', 'together', 'mixing', 'pairing'],
      category: 'Usage',
      question: 'Combination Use',
      answer: `Yes! Can be used together

💡 **Recommended combinations**:

**1️⃣ Wrinkles + Whitening**
- EXOSOME 5 or 3: Alternate 2-3 times/week

**2️⃣ Intensive + Daily**
- EXOSOME (3-4 times/week) + RED (Daily)
- Same number recommended (3, 5, or 7)

**3️⃣ Multiple concerns**
- RED (Daytime) + EXOSOME (Nighttime)

✅ Multiple EXOBIO products can be used together!`,
      relatedQuestions: ['How to Use', 'Amount'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'usage-04',
      keywords: ['MTS', 'dermaroller', 'microneedling', 'MTS usage'],
      category: 'Usage',
      question: 'MTS Usage',
      answer: `🔬 **MTS (Dermaroller) Usage**

📋 **How to Use**:
**01.** Before use, soak the dermaroller (MTS) in ethanol for 5-10 minutes to sterilize thoroughly.

**02.** Cleanse your face thoroughly and prepare your skin.

**03.** Apply EXOBIO Exosome Ampoule generously on your skin.

**04.** Roll the dermaroller gently over the desired area with consistent pressure. Repeat until you feel a slight stimulation on your skin.

**05.** Pat in the remaining ampoule and finish with a soothing cream on reddened skin.

⚠️ **Usage Guidelines**:
• MTS is in principle a single-use product, with a maximum of 3 uses.
• If reusing, be sure to sterilize thoroughly before each use.
• Recommended to use once every 3-4 weeks.

💡 **Effect**: When used with Exosome Ampoule, skin absorption increases for better results!`,
      relatedQuestions: ['How to Use', 'Combination Use'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },

    // ============================================================
    // Product Info - 10 items
    // ============================================================
    {
      id: 'product-01',
      keywords: ['difference', 'comparison', 'EXOSOME', 'RED', 'vs'],
      category: 'Product Info',
      question: 'EXOSOME vs RED Difference',
      answer: `EXOSOME vs RED - Differences

🔬 **EXOSOME (Intensive Care)**
- High exosome concentration
- Use 3-4 times/week
- Fast improvement
- For severe skin issues

💚 **RED (Daily Care)**
- Balanced formula
- Daily use
- Gentle ingredients
- Suitable for everyday use

💡 **Selection guide**:
- Severe issues → EXOSOME
- Daily care → RED
- Best results → Combine both!`,
      relatedQuestions: ['Product Recommendation', '3·5·7 Meaning'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-02',
      keywords: ['357', 'number', 'meaning', 'numbering system'],
      category: 'Product Info',
      question: '3, 5, 7 Number Meaning',
      answer: `EXOBIO's 3️⃣5️⃣7️⃣ Number Meaning

**3️⃣ EXOSOME/RED 3 - Whitening/Pigmentation**
💎 VITA 620,000 PPM ingredients
- Improves melasma, spots
- Brightens skin tone

**5️⃣ EXOSOME/RED 5 - Wrinkles/Elasticity**
✨ Salmon PDRN 10,000 PPM
- Improves wrinkles
- Enhances elasticity

**7️⃣ EXOSOME/RED 7 - Soothing, Hydration, Barrier**
🌿 CICA + EXOSOME 760,000 PPM
- Soothing, Sensitive skin
- Hydration, Skin barrier strengthening

💡 **Selection guide**:
- Single concern → Choose 1 number
- Multiple concerns → Combine 2-3 numbers!`,
      relatedQuestions: ['Product Recommendation', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['recommendation', 'which', 'selection', 'suggest', 'product recommendation'],
      category: 'Product Info',
      question: 'Product Recommendation',
      answer: `🎯 **AI Skin Diagnosis - Personalized Recommendations**

Analyzes 10 skin indicators in 30 seconds
→ Recommends the most suitable products for you!

👉 **https://curetembio.xyz**

💡 **Quick selection by concern**:
- Wrinkles → EXOSOME 5
- Whitening → EXOSOME 3
- Hydration/Soothing/Barrier → EXOSOME 7
- Daily care → RED line`,
      relatedQuestions: ['EXOSOME vs RED', '3·5·7 Meaning'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-04',
      keywords: ['what is EXOBIO', 'about EXOBIO', 'product introduction', 'brand', 'trust', 'clinic', 'dermatology', 'background', 'repurchase rate', 'concentration'],
      category: 'Product Info',
      question: 'About EXOBIO',
      answer: `EXOBIO - Brand Introduction

🏥 **Home Care Serum from Professional Dermatology Equipment**

**What is EXOBIO?**
Exosome serum actually used in professional dermatology equipment

🔬 **From professional dermatology equipment**
- **LDM Care**: Ultrasonic skin regeneration
- **SONO Care**: Deep ingredient delivery

→ EXOBIO serum used as core ingredient

💡 **Who should use**:
- Age 30s: Early signs of aging
- Age 40s: Full anti-aging care
- Postpartum: Damaged skin recovery
- Issues: Wrinkles, Melasma, etc.

📊 **Credibility**:
- Recognized by dermatologists
- 61% repurchase rate
- High-concentration serum`,
      relatedQuestions: ['Efficacy', 'LDM Care', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-05',
      keywords: ['LDM', 'LDM care', 'ultrasonic', 'clinic treatment'],
      category: 'Product Info',
      question: 'LDM Care',
      answer: `🏥 **What is LDM Care?**

**LDM (Local Dynamic Micro-massage)**
- Ultrasound-based skin regeneration equipment
- Delivers ingredients deep into skin
- Used in dermatology clinics

💡 **EXOBIO Serum**
→ Core ingredient used in LDM Care treatment!

✨ **Home care possible**
Now you can experience the same serum at home`,
      relatedQuestions: ['SONO Care', 'About EXOBIO'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-06',
      keywords: ['SONO', 'SONO care', 'clinic treatment', 'dermatology treatment'],
      category: 'Product Info',
      question: 'SONO Care',
      answer: `🏥 **What is SONO Care?**

**Deep treatment using EXOBIO serum**
- Delivers active ingredients deep into skin
- Used in dermatology clinics
- Home care possible

💡 **Home care**
Use with MTS roller (0.25mm) to enhance EXOBIO absorption`,
      relatedQuestions: ['LDM Care', 'MTS Roller'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'exosome 3'],
      category: 'Product Info',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - Whitening Intensive Care**

✨ **BIO 357™ EXOSOME** is an upgraded premium Exosome357 serum that started from dermatology clinics and recognized by pharmacies, elevating skincare effects to the next level.

🎯 **Core ingredients**
- **VITA 620,000 PPM** (Ultra-high concentration vitamin)
- **EXOSOME 5,000 PPM** (High-concentration exosome)
- Whitening functional certified ingredients

💡 **Main effects**
- Improves melasma
- Improves spots
- Improves hyperpigmentation
- Evens skin tone
- Brightens skin

📅 **How to use**
- **Frequency**: 3-4 times/week
- **Timing**: First step after cleansing

💰 **Price**: $80 (5ml × 5)

💚 **Daily care?** RED 3 recommended (Daily use)`,
      relatedQuestions: ['RED 3', 'Whitening', 'Melasma'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'exosome 5'],
      category: 'Product Info',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - Elasticity Intensive Care**

✨ **BIO 357™ EXOSOME** is an upgraded premium Exosome357 serum that started from dermatology clinics and recognized by pharmacies, elevating skincare effects to the next level.

🎯 **Core ingredients**
- **Salmon PDRN 10,000 PPM** (Salmon DNA)
- **EXOSOME 5,000 PPM** (High-concentration exosome)
- Wrinkle improvement functional certified ingredients

💡 **Main effects**
- Improves deep wrinkles
- Restores skin elasticity
- Anti-aging
- Enhances firmness
- Lifting effect

📅 **How to use**
- **Frequency**: 3-4 times/week
- **Timing**: First step after cleansing

💰 **Price**: $80 (5ml × 5)

💚 **Daily care?** RED 5 recommended (Daily use)`,
      relatedQuestions: ['RED 5', 'Wrinkles', 'Elasticity'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'exosome 7'],
      category: 'Product Info',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - Soothing Intensive Care**

✨ **BIO 357™ EXOSOME** is an upgraded premium Exosome357 serum that started from dermatology clinics and recognized by pharmacies, elevating skincare effects to the next level.

🎯 **Core ingredients**
- **CICA (Centella asiatica extract)**
- **EXOSOME 760,000 PPM** (Ultra-high concentration exosome)
- Skin soothing ingredients

💡 **Main effects**
- Provides hydration
- Soothing effect
- Soothes acne, trouble
- Reduces redness
- Improves sensitive skin
- Strengthens skin barrier
- Promotes skin regeneration

📅 **How to use**
- **Frequency**: 3-4 times/week
- **Timing**: First step after cleansing

⚡ **Features**
- Safe for sensitive skin
- Troubled skin care
- Instant soothing sensation

💰 **Price**: $80 (5ml × 5)

💚 **Daily care?** RED 7 recommended (Daily use)`,
      relatedQuestions: ['RED 7', 'Soothing', 'Sensitive'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'red 3'],
      category: 'Product Info',
      question: 'RED 3',
      answer: `💚 **RED 3 - Whitening Daily Care**

✨ **BIO 357™ RED** is a daily 357 serum that started from dermatology clinics and recognized by pharmacies, designed for everyday use without burden as the first step in skincare.

🎯 **Core ingredients**
- **VITA 620,000 PPM** (Ultra-high concentration vitamin)
- Whitening functional certified ingredients
- Daily use optimized formula

💡 **Main effects**
- Prevents melasma and spots
- Brightens skin tone
- Improves dullness
- Daily use for enhanced skin transparency

📅 **How to use**
- **Frequency**: Daily (morning/evening)
- **Timing**: First step after cleansing

💡 **Daily care + Intensive care**
- **RED 3** (Daily) + **EXOSOME 3** (3-4 times/week) combination recommended
- Maximizes intensive care effects

💰 **Price**: $33 (15ml × 2)

🔬 **Intensive care?** EXOSOME 3 recommended (3-4 times/week)`,
      relatedQuestions: ['EXOSOME 3', 'Whitening', 'Melasma'],
      productTags: ['RED 3', 'EXOSOME 3']
    },
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'red 5'],
      category: 'Product Info',
      question: 'RED 5',
      answer: `💚 **RED 5 - Elasticity Daily Care**

✨ **BIO 357™ RED** is a daily 357 serum that started from dermatology clinics and recognized by pharmacies, designed for everyday use without burden as the first step in skincare.

🎯 **Core ingredients**
- **Salmon PDRN 10,000 PPM** (Salmon DNA)
- Wrinkle improvement functional certified ingredients
- Daily use optimized formula

💡 **Main effects**
- Prevents fine lines
- Maintains skin elasticity
- Anti-aging
- Daily use for enhanced skin elasticity

📅 **How to use**
- **Frequency**: Daily (morning/evening)
- **Timing**: First step after cleansing

💡 **Daily care + Intensive care**
- **RED 5** (Daily) + **EXOSOME 5** (3-4 times/week) combination recommended
- Intensive care for deep wrinkles

💰 **Price**: $37 (15ml × 2)

🔬 **Intensive care?** EXOSOME 5 recommended (3-4 times/week)`,
      relatedQuestions: ['EXOSOME 5', 'Wrinkles', 'Elasticity'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'red 7'],
      category: 'Product Info',
      question: 'RED 7',
      answer: `💚 **RED 7 - Soothing Daily Care**

✨ **BIO 357™ RED** is a daily 357 serum that started from dermatology clinics and recognized by pharmacies, designed for everyday use without burden as the first step in skincare.

🎯 **Core ingredients**
- **CICA 7,600 PPM** (Centella asiatica extract)
- Skin soothing ingredients
- Daily use optimized formula

💡 **Main effects**
- Provides hydration
- Soothing effect
- Prevents acne and trouble
- Reduces redness
- Manages sensitive skin
- Daily use strengthens skin barrier

📅 **How to use**
- **Frequency**: Daily (morning/evening)
- **Timing**: First step after cleansing

💡 **Daily care + Intensive care**
- **RED 7** (Daily) + **EXOSOME 7** (3-4 times/week) combination recommended
- Intensive care for troubled skin

💰 **Price**: $32 (15ml × 2)

🔬 **Intensive care?** EXOSOME 7 recommended (3-4 times/week)`,
      relatedQuestions: ['EXOSOME 7', 'Soothing', 'Sensitive'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'effect-01',
      keywords: ['efficacy', 'effects', 'results', 'when', 'improvement', 'changes'],
      category: 'Product Info',
      question: 'EXOBIO Efficacy',
      answer: `EXOBIO Product Efficacy and Usage Guide

🏥 **Home Care Version of Professional Dermatology Serum**

EXOBIO is a serum actually used in professional equipment treatments like **LDM Care** and **SONO Care** in dermatology clinics. The clinically verified ingredients are now available for home care.

💡 **Usage - First Step After Cleansing!**

✨ **Keep Your Existing Products**
- Add EXOBIO product as **first step** after cleansing
- Continue using existing toner, serum, cream
- Enhanced effect without changing routine! ⬆️

📅 **When to Expect Results**

⏰ **Noticeable skin changes after 4 weeks**
- **1-2 weeks**: Improved skin texture, increased moisture
- **3-4 weeks**: Brightened skin tone, restored elasticity
- **After 4 weeks**: Full transformation - stabilized skin balance
- **8-12 weeks**: Intensive improvement of wrinkles, melasma confirmed

✨ **Stabilized Skin Balance**
- Strengthened skin barrier, more resistant to external irritants
- Balanced moisture-oil levels
- Restored natural skin strength

🎯 **Choose Your Perfect Product**

**Method 1️⃣: By Concern**
- **3**: Whitening, melasma, dullness
- **5**: Wrinkles, elasticity, lifting
- **7**: Soothing, trouble, sensitivity, hydration, skin barrier

**Method 2️⃣: AI Skin Diagnosis (Recommended!)** 🎯
- Analyzes 10 skin indicators in 30 seconds
- Personalized product recommendations
- More efficient skin care
- 👉 https://curetembio.xyz

💚 **Intensive Care vs Daily Care**

**EXOSOME Line** (Intensive Care)
- Use 3-4 times/week
- Fast improvement with high-concentration ingredients
- Solves severe skin concerns

**RED Line** (Daily Care)
- Daily use possible
- Continuous care at affordable price
- Maintains skin balance

💡 **Most Effective Method**
→ **EXOSOME + RED Dual Care**
→ Best results with intensive care + daily management!

🌟 **EXOBIO's Advantages**
✅ Professional clinic treatment ingredients
✅ Enhanced effects while maintaining existing routine
✅ Clear changes after 4 weeks
✅ Recognized by dermatologists
✅ 61% repurchase rate (Customer satisfaction proven)`,
      relatedQuestions: ['About EXOBIO', 'Product Recommendation'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },

    // ============================================================
    // Safety - 4 items
    // ============================================================
    {
      id: 'mts-01',
      keywords: ['MTS', 'derma roller', 'microneedle', 'roller'],
      category: 'Usage',
      question: 'MTS Roller',
      answer: `MTS Derma Roller Home Care Available!

🔬 **How to use**:
- 0.25mm microneedle recommended
- 1-2 times per month
- Apply EXOBIO product after MTS use

✨ **Effects**:
- Significantly increased EXOBIO absorption
- Promoted skin regeneration
- Faster visible results

⚠️ **Precautions**:
- Must use 0.25mm or less
- Avoid excessive use
- Use only when skin is in good condition
- Avoid when sensitive or troubled

💡 **MTS Usage Order**:
1. Cleansing
2. MTS roller (0.25mm)
3. Immediately apply EXOBIO product
4. Cream after absorption`,
      relatedQuestions: ['How to Use', 'SONO Care'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'safety-02',
      keywords: ['side effects', 'adverse reactions', 'allergies'],
      category: 'Safety',
      question: 'Side Effects',
      answer: `Side Effects and Adverse Reactions

✅ **EXOBIO is a Safe Product**

⚠️ **Rarely possible reactions**:
- Temporary redness
- Mild tingling
- Skin flaking (Normal regeneration process)

🚨 **When to discontinue and consult professional**:
- Severe itching or redness
- Rash or hives
- Swelling

💡 **Prevention**:
- Start with small amount
- Monitor skin condition`,
      relatedQuestions: ['Product Stability', 'Sensitive'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'safety-03',
      keywords: ['stability', 'safety', 'safe', 'verification', 'assurance'],
      category: 'Safety',
      question: 'Product Stability',
      answer: `EXOBIO Product Stability

✅ **Dermatology & Pharmacy Verified**
EXOBIO is a high-concentration serum used in professional treatments like LDM Care and SONO Care in dermatology clinics.
It's a trustworthy product verified by pharmacies, recognized for its stability by skin professionals.

🔬 **3-FREE System (Safe Ingredients)**
- ❌ Fragrance-Free
- ❌ Alcohol-Free
- ❌ Artificial Color-Free

→ Can be used without burden on sensitive skin!

💡 **First Step After Cleansing Usage**
Using EXOBIO as the first step after cleansing maximizes skin absorption and enhances the effects of existing products.
Simply add EXOBIO as the first step without changing your routine for definitely enhanced skincare effects⬆️!

📊 **Verified Credibility**
- Clinic treatment serum → Home care conversion
- Pharmacy distribution verification
- 61% customer repurchase rate
- Safety secured with 3-FREE ingredients

🎯 **Recommended For**
- Those with sensitive skin
- Those who prefer safe ingredients
- Those wanting home care after dermatology treatments
- Those wanting enhanced effects without changing existing routine

📞 **Contact**: curetembio@gmail.com`,
      relatedQuestions: ['Side Effects', 'Sensitive'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-07',
      keywords: ['357', 'number 3', 'number 5', 'number 7', 'numbers', 'meaning'],
      category: 'Product Info',
      question: '3·5·7 Number Meaning',
      answer: `EXOSOME 357 System Explanation

🔢 **What is 357?**
EXOBIO's core system, each number focuses on specific skin concerns!

**Number 3 - Whitening·Melasma Focus**
💎 EXOSOME 3 / RED 3
- Improves skin pigmentation
- Bright and clear skin
- Main ingredient: VITA 620,000 PPM

**Number 5 - Wrinkles·Elasticity Focus**
✨ EXOSOME 5 / RED 5
- Improves deep wrinkles
- Restores elasticity
- Main ingredient: Salmon PDRN 10,000 PPM

**Number 7 - Soothing·Hydration·Barrier Focus**
🌿 EXOSOME 7 / RED 7
- Soothing, trouble, sensitivity
- Hydration, skin barrier
- Main ingredients: CICA + EXOSOME 760,000 PPM

💡 **Selection guide**:
- Pigmentation concerns → Number 3
- Aging concerns → Number 5
- Sensitivity·Trouble → Number 7
- Multiple concerns → 2-3 combinations possible!`,
      relatedQuestions: ['3, 5, 7 Number Meaning', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-08',
      keywords: ['price', 'cost', 'how much', 'pricing', 'retail price'],
      category: 'Product Info',
      question: 'Product Price',
      answer: `EXOBIO Product Price Information

💰 **EXOSOME Premium Line (High Concentration)**

**EXOSOME 3 (Whitening·Melasma)**
- 5ml × 5: **$80**

**EXOSOME 5 (Wrinkles·Elasticity)**
- 5ml × 5: **$80**

**EXOSOME 7 (Soothing·Barrier)**
- 5ml × 5: **$80**

💚 **RED Daily Line (Daily Use)**

**RED 3 (Whitening)**
- 15ml × 2: **$33**

**RED 5 (Wrinkles)**
- 15ml × 2: **$37**

**RED 7 (Soothing)**
- 15ml × 2: **$32**

📦 **Usage Period**:
- EXOSOME: About 3-4 weeks when used 3-4 times/week
- RED: About 3-4 weeks when used daily

💡 **Price Comparison**:
- EXOSOME: High-concentration intensive care ($80)
- RED: Affordable daily care price ($32-37)

🎁 **Additional Benefits**:
- AI Skin Diagnosis: Free (https://curetembio.xyz)
- Inquiry: curetembio@gmail.com`,
      relatedQuestions: ['How to Purchase', 'EXOSOME vs RED'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-09',
      keywords: ['purchase', 'how to buy', 'buy product', 'where to buy', 'shopping', 'pharmacy', 'online'],
      category: 'Product Info',
      question: 'How to Purchase',
      answer: `EXOBIO Product Purchase Methods

🏪 **Offline Purchase**

**Seoul**
- Apgujeong DM Dermatology Clinic
- Major 4 shopping districts pharmacies
  · Myeongdong
  · Hongdae
  · Gangnam
  · Seongsu
  · Konkuk University

**Busan**
- Nampo-dong major locations
- Bujeon Station major locations

📍 **Detailed Location Information**
→ https://www.exobio.net/ > PHARMACY

💻 **Online Purchase**

**Official Stores**
🌐 Japan: https://www.exobio.net/
🇰🇷 Korea: https://kr.exobio.net/
🌎 English: https://en.exobio.net/

**International Shopping Malls**
🇯🇵 Q100 JAPAN: https://www.qoo10.jp/shop/EXOBIO (Japanese)
🇨🇳 Official Site(CN): https://cn.curetembio.com/ (Chinese, USD payment available in SHOP)

💬 **China Product Purchase Inquiry**
🇨🇳 WeChat: lele620918

💡 **Purchase Inquiry**
📧 Email: curetembio@gmail.com
🌐 Official Website: https://www.exobio.net/`,
      relatedQuestions: ['Product Price'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-ingredients',
      keywords: ['ingredients', 'components', 'materials', 'concentration', 'high concentration'],
      category: 'Safety',
      question: 'Main Ingredients',
      answer: `EXOBIO Main Ingredients Information

🧪 **Ultra-High Concentration Core Ingredients**

**EXOSOME 3 / RED 3 (Whitening)**
💎 VITA ingredients
- EXOSOME 3: 620,000 PPM (High concentration) + EXOSOME 5,000 PPM
- RED 3: 620,000 PPM (Daily)
- Effects: Improves hyperpigmentation, brightens skin tone

**EXOSOME 5 / RED 5 (Wrinkles)**
✨ Salmon PDRN (Polydeoxyribonucleotide)
- EXOSOME 5: 10,000 PPM (High concentration) + EXOSOME 5,000 PPM
- RED 5: 10,000 PPM (Daily)
- Effects: Skin regeneration, wrinkle improvement, elasticity strengthening

**EXOSOME 7 / RED 7 (Soothing)**
🌿 CICA (Centella asiatica extract)
- EXOSOME 7: CICA + EXOSOME 760,000 PPM (High concentration)
- RED 7: 7,600 PPM (Daily)
- Effects: Redness soothing, skin barrier strengthening, hydration

🌟 **3-FREE (Three-Free) Product**
❌ Fragrance-Free
❌ Color-Free
❌ Alcohol-Free
→ Safe for sensitive skin!

✅ **Safety Certification**
- Verified by dermatologists
- Ingredients used in clinic treatments (LDM, SONO Care)
- High-quality raw materials used

💡 **Understanding Concentration Differences**:
- EXOSOME: 3-4 times/week intensive care
- RED: Daily consistent care
- Choose or combine according to purpose!`,
      relatedQuestions: ['Product Stability', 'Side Effects'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-10',
      keywords: ['skin barrier', 'barrier', 'protective barrier', 'shield'],
      category: 'Soothing/Sensitive',
      question: 'Skin Barrier',
      answer: `Skin Barrier Strengthening - EXOSOME 7

🛡️ **What is Skin Barrier?**
A protective layer on the skin surface that protects against external irritants and prevents moisture loss.

**Weakened Barrier Symptoms**:
- Easily stings and irritated
- Dry and tight
- Frequent redness
- Cosmetics don't work well

🌿 **Recommended Products: EXOSOME 7 / RED 7**

**EXOSOME 7 (Intensive Care)**
- CICA 760,000 PPM high concentration
- Use 3-4 times/week
- Fast recovery of damaged barrier

**RED 7 (Daily Care)**
- CICA 7,600 PPM
- Daily use possible
- Consistent barrier strengthening

💪 **Barrier Strengthening Effects**:
1. Blocks external irritants (fine dust, pollution)
2. Increased moisture retention
3. Reduced redness·sensitivity
4. Prevents trouble

📖 **How to Use**:
1. Apply EXOBIO serum after cleansing
2. Finish with cream

✨ **Expected Effects**:
- 2 weeks: Reduced irritation, increased moisture
- 4 weeks: Improved redness, recovered barrier
- 8 weeks: Complete strong skin barrier

🎯 **Recommended For**:
- Sensitive skin
- Frequent redness
- Dry and tight skin
- Frequent cosmetic irritation

💡 **TIP**: EXOSOME 7 (3-4 times/week) + RED 7 (daily) combination for faster results!`,
      relatedQuestions: ['Sensitive', 'Soothing', 'EXOSOME 7', 'RED 7'],
      productTags: ['EXOSOME 7', 'RED 7']
    }
  ],
  
  // 🔥 43 Quick Reply Keywords (Covers All Q&A)
  quickReplyKeywords: [
    // 🛒 Purchase (Top Priority)
    { label: '🛒 How to Buy', query: 'purchase' },
    
    // Skin Concerns - Wrinkles/Aging (5)
    { label: '💫 Wrinkles', query: 'wrinkles' },
    { label: '💫 Fine Lines', query: 'fine lines' },
    { label: '💫 Deep Wrinkles', query: 'deep wrinkles' },
    { label: '💫 Eye Wrinkles', query: 'eye wrinkles' },
    { label: '💫 Nasolabial Folds', query: 'nasolabial folds' },
    
    // Skin Concerns - Whitening/Pigmentation (4)
    { label: '💎 Whitening', query: 'whitening' },
    { label: '✨ Melasma', query: 'melasma' },
    { label: '💎 Hyperpigmentation', query: 'hyperpigmentation' },
    { label: '💎 Dullness', query: 'dullness' },
    
    // Skin Concerns - Acne/Trouble (5)
    { label: '🔴 Acne', query: 'acne' },
    { label: '🔴 Pimples', query: 'pimples' },
    { label: '🔴 Trouble', query: 'trouble' },
    { label: '🔴 Scars', query: 'acne scars' },
    { label: '⭕ Pores', query: 'pores' },
    
    // Skin Concerns - Soothing/Sensitive (5)
    { label: '🌸 Rosacea', query: 'rosacea' },
    { label: '🌿 Soothing', query: 'soothing' },
    { label: '🌸 Sensitive', query: 'sensitive' },
    { label: '🛡️ Barrier', query: 'skin barrier' },
    { label: '🛡️ Barrier Care', query: 'barrier strengthening' },
    
    // Skin Concerns - Elasticity/Sagging (3)
    { label: '🌟 Elasticity', query: 'elasticity' },
    { label: '🌟 Sagging', query: 'sagging' },
    { label: '🌟 Lifting', query: 'lifting' },
    
    // Skin Concerns - Hydration/Moisture (3)
    { label: '💧 Hydration', query: 'hydration' },
    { label: '💧 Dry Skin', query: 'dry skin' },
    { label: '💧 Moisture', query: 'moisture' },
    
    // Usage (4)
    { label: '📖 How to Use', query: 'how to use' },
    { label: '📖 Amount', query: 'amount' },
    { label: '📖 Combination', query: 'combination' },
    { label: '🔬 MTS Usage', query: 'MTS usage' },
    
    // Product Information (7)
    { label: '🎯 Recommendation', query: 'recommendation' },
    { label: '🔄 Difference', query: 'difference' },
    { label: '💡 About EXOBIO', query: 'EXOBIO' },
    { label: '✅ Efficacy', query: 'efficacy' },
    { label: '🔢 Number Meaning', query: '357' },
    { label: '💰 Price', query: 'price' },
    { label: '🧪 Ingredients', query: 'ingredients' },
    
    // EXOSOME Products (3)
    { label: 'EXOSOME 3', query: 'EXOSOME 3' },
    { label: 'EXOSOME 5', query: 'EXOSOME 5' },
    { label: 'EXOSOME 7', query: 'EXOSOME 7' },
    
    // Safety (2)
    { label: '⚠️ Side Effects', query: 'side effects' },
    { label: '✅ Safety', query: 'safety' },
    
    // RED Products (3)
    { label: '💚 RED 3', query: 'RED 3' },
    { label: '💚 RED 5', query: 'RED 5' },
    { label: '💚 RED 7', query: 'RED 7' }
  ],
  
  // ❓ Fallback response (not found)
  fallbackResponse: `Sorry, I couldn't find information related to your question. 😥

Below are the available topics. Please select from the quick reply buttons below or enter the following keywords:

🔍 **Skin Concerns** (10 items)
• Whitening (EXOSOME 3) • Melasma (EXOSOME 3) • Wrinkles (EXOSOME 5)
• Elasticity (EXOSOME 5) • Rosacea (EXOSOME 7) • Soothing (EXOSOME 7)
• Barrier (EXOSOME 7) • Hydration (EXOSOME 7) • Acne (EXOSOME 7) • Pores (EXOSOME 3/5)

📦 **Product Information** (8 items)
• Product Recommendation (AI Diagnosis) • EXOSOME vs RED (Differences)
• About EXOBIO (Brand Introduction) • Efficacy (Product Effects & Usage)
• How to Use (Usage Guide) • Number 3·5·7 (Number Meaning) • Price (Product Pricing)

🔬 **Safety** (2 items)
• Side Effects (Safety Information) • Ingredients (Main Components)

💡 Please click the quick reply buttons to view detailed information!`
};

// Node.js module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHATBOT_DATA;
}
