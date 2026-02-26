// EXOBIO Chatbot Q&A Données - Version française complète
// Fichier fusionné des parties 1-4
const CHATBOT_DATA = {
  version: '1.0.0',
  lastUpdated: '2026-02-20',
  language: 'fr',
  
  // Toutes les données Q&A
  qaList: [
    // Part 1: Rides, Éclaircissement, Acné, Pores, Élasticité, Hydratation, Apaisement, Usage
    {
      id: 'wrinkles-01',
      keywords: ['rides', 'amélioration rides', 'élimination rides', 'réduction rides', 'vieillissement'],
      category: 'Rides/Vieillissement',
      question: 'Rides',
      answer: `Pour l'amélioration des rides, nous recommandons **EXOSOME 5**.

La technologie exosome 357™ restaure l'élasticité de la peau et traite des ridules aux rides profondes.

💡 **Mode d'emploi** : Première étape après le nettoyage matin et soir`,
      relatedQuestions: ['wrinkles-02', 'wrinkles-04', 'elasticity-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['ridules', 'fines rides', 'rides superficielles'],
      category: 'Rides/Vieillissement',
      question: 'Ridules',
      answer: `Pour les ridules précoces, commencez avec **RED 5**.

Un produit de soin quotidien qui peut être utilisé tous les jours.

💡 **Mode d'emploi** : Tous les matins/soirs, première étape après le nettoyage

Besoin d'un soin plus intensif ?
→ **EXOSOME 5** (Première étape après le nettoyage matin et soir)`,
      relatedQuestions: ['wrinkles-01', 'elasticity-01'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['rides contour des yeux', 'rides sous les yeux', 'rides coin des yeux', 'rides front'],
      category: 'Rides/Vieillissement',
      question: 'Rides contour des yeux',
      answer: `Pour les rides sensibles du contour des yeux, nous recommandons **EXOSOME 5** !

🎯 **Conseils d'utilisation** :
- Utiliser une petite quantité sur le contour des yeux
- Tapoter légèrement pour absorption
- 1 fois seulement matin/soir

⚠️ **Attention** : Éviter le contact avec les yeux`,
      relatedQuestions: ['wrinkles-01', 'elasticity-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['rides nasogéniennes', 'sillons nasogéniens', 'rides du sourire'],
      category: 'Rides/Vieillissement',
      question: 'Rides nasogéniennes',
      answer: `Pour les rides nasogéniennes, le **Soin Dual EXOSOME 5 + RED 5** est efficace.

🎯 **Mode d'emploi** :
- Application concentrée sur la zone des rides nasogéniennes
- Masser de l'intérieur vers l'extérieur
- **EXOSOME 5** : 3-4 fois par semaine
- **RED 5** : Tous les jours`,
      relatedQuestions: ['wrinkles-01', 'elasticity-02'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'whitening-01',
      keywords: ['éclaircissement', 'blanchiment', 'éclaircissant', 'luminosité', 'blanc'],
      category: 'Éclaircissement/Pigmentation',
      question: 'Éclaircissement',
      answer: `Pour l'éclaircissement de la peau, nous recommandons **EXOSOME 3**.

La technologie exosome 357™ inhibe la production de mélanine et améliore la luminosité du teint.

💡 **Mode d'emploi** : Première étape après le nettoyage matin et soir`,
      relatedQuestions: ['whitening-02', 'whitening-03'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'whitening-02',
      keywords: ['taches brunes', 'élimination taches', 'réduction taches'],
      category: 'Éclaircissement/Pigmentation',
      question: 'Taches brunes',
      answer: `Pour l'amélioration des taches brunes, nous recommandons le **Soin Dual EXOSOME 3 + RED 3**.

🎯 **Mode d'emploi** :
- **EXOSOME 3** : 3-4 fois par semaine (soin intensif)
- **RED 3** : Tous les jours (soin quotidien)
- Protection solaire indispensable !`,
      relatedQuestions: ['whitening-01', 'whitening-03'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['taches', 'points', 'taches pigmentaires', 'pigments'],
      category: 'Éclaircissement/Pigmentation',
      question: 'Taches',
      answer: `Pour l'amélioration des taches, **EXOSOME 3** est efficace.

💡 **Mode d'emploi** :
- Application concentrée sur les zones tachées
- Utiliser 3-4 fois par semaine
- Protection UV obligatoire pendant la journée

💡 **Conseil** : Une utilisation régulière est importante`,
      relatedQuestions: ['whitening-01', 'whitening-02'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'whitening-04',
      keywords: ['hyperpigmentation', 'pigments', 'mélanine', 'teint terne'],
      category: 'Éclaircissement/Pigmentation',
      question: 'Hyperpigmentation',
      answer: `Pour l'amélioration de l'hyperpigmentation, nous recommandons **EXOSOME 3**.

Les composants exosomes inhibent la production de mélanine et améliorent l'hyperpigmentation.

💡 **Mode d'emploi** : 3-4 fois par semaine, application concentrée sur les zones pigmentées
⚠️ **Attention** : Utilisation obligatoire d'une protection solaire`,
      relatedQuestions: ['whitening-01', 'whitening-02', 'whitening-03'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'acne-01',
      keywords: ['acné', 'boutons', 'acné', 'problèmes'],
      category: 'Problèmes cutanés/Acné',
      question: 'Acné',
      answer: `Oui, EXOBIO peut être utilisé en toute sécurité sur une peau acnéique.

**EXOSOME 7** et **RED 7** aident à apaiser et régénérer la peau, permettant une récupération rapide de la peau endommagée par l'acné.

🎯 **Produits recommandés** :
- **EXOSOME 7** (Apaisement de la peau + Réduction de l'inflammation)
- **RED 7** (Soin quotidien)

✨ **Effets attendus** :
- Apaisement de l'acné et récupération rapide
- Prévention des récidives par renforcement de la barrière cutanée
- Amélioration des marques et cicatrices`,
      relatedQuestions: ['acne-02', 'acne-03', 'soothing-02'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['problèmes cutanés', 'inflammation', 'rougeurs'],
      category: 'Problèmes cutanés/Acné',
      question: 'Problèmes cutanés',
      answer: `Pour les problèmes cutanés, nous recommandons le **Soin Dual EXOSOME 7 + RED 7**.

💡 **Mode d'emploi** :
- **EXOSOME 7** : 3-4 fois par semaine (apaisement intensif)
- **RED 7** : Tous les jours (soin quotidien)
- Soin concentré sur les zones à problèmes

✨ **Effets attendus** : Apaisement rapide, prévention des récidives`,
      relatedQuestions: ['acne-01', 'soothing-02'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['marques acné', 'cicatrices acné', 'cicatrices', 'creux'],
      category: 'Problèmes cutanés/Acné',
      question: 'Marques acné',
      answer: `Oui, EXOBIO peut être utilisé en toute sécurité sur les cicatrices d'acné.

**EXOSOME 3** aide aux cicatrices d'acné avec l'eau d'argousier vitaminée et les exosomes pour créer une peau propre.

🎯 **Produit recommandé** : EXOSOME 3 (Amélioration pigmentation + Éclaircissement)`,
      relatedQuestions: ['acne-01', 'whitening-03'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'pores-01',
      keywords: ['pores', 'resserrement pores', 'amélioration pores'],
      category: 'Pores',
      question: 'Pores',
      answer: `Pour le resserrement des pores, nous recommandons le **Soin EXOSOME 5**.

🎯 **Mode d'emploi** :
- **EXOSOME 5** : Première étape après le nettoyage matin et soir
- Soin concentré sur les zones avec pores`,
      relatedQuestions: ['pores-02', 'elasticity-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'pores-02',
      keywords: ['sébum', 'peau grasse', 'peau grasse'],
      category: 'Pores',
      question: 'Sébum',
      answer: `Pour une sécrétion excessive de sébum, nous recommandons **RED 7**.

Un produit utilisable quotidiennement qui équilibre la peau.

💡 **Mode d'emploi** : Tous les matins/soirs, après le nettoyage
💡 **Conseil** : Attention à l'utilisation avec d'autres produits riches en huiles`,
      relatedQuestions: ['pores-01', 'soothing-01'],
      productTags: ['RED 7']
    },
    {
      id: 'elasticity-01',
      keywords: ['élasticité', 'élasticité cutanée', 'affaissement', 'lifting'],
      category: 'Élasticité/Lifting',
      question: 'Élasticité',
      answer: `Pour l'amélioration de l'élasticité cutanée, nous recommandons **EXOSOME 5**.

La technologie exosome 357™ stimule la production de collagène et restaure l'élasticité de la peau.

💡 **Mode d'emploi** : 3-4 fois par semaine, masser de bas en haut`,
      relatedQuestions: ['elasticity-02', 'wrinkles-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['affaissement visage', 'contour', 'ligne V'],
      category: 'Élasticité/Lifting',
      question: 'Affaissement visage',
      answer: `Pour l'amélioration de l'affaissement du visage, nous recommandons le **Soin Dual EXOSOME 5 + RED 5**.

🎯 **Mode d'emploi** :
- **EXOSOME 5** : 3-4 fois par semaine (lifting intensif)
- **RED 5** : Tous les jours (soin quotidien)
- Masser de bas en haut, de l'intérieur vers l'extérieur`,
      relatedQuestions: ['elasticity-01', 'wrinkles-05'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'hydration-01',
      keywords: ['hydratation', 'humidité', 'sécheresse', 'hydraté'],
      category: 'Hydratation/Humidité',
      question: 'Hydratation',
      answer: `Pour une peau sèche, nous recommandons **RED 7**.

Un produit utilisable quotidiennement qui fournit une hydratation suffisante à la peau.

💡 **Mode d'emploi** : Tous les matins/soirs, première étape après le nettoyage
💡 **Conseil** : Plus efficace si utilisé en première étape après le nettoyage`,
      relatedQuestions: ['hydration-02', 'soothing-01'],
      productTags: ['RED 5']
    },
    {
      id: 'hydration-02',
      keywords: ['peau sèche', 'desquamation', 'tiraillements'],
      category: 'Hydratation/Humidité',
      question: 'Peau sèche',
      answer: `Pour une peau sèche, nous recommandons le **Soin Dual Premium EXOSOME 5 + EXOSOME 7 (Renforcement barrière cutanée)**.

🎯 **Mode d'emploi** :
- **EXOSOME 5** : Tous les jours (apport hydratation)
- **EXOSOME 7** : Tous les jours (renforcement barrière cutanée)
- Utilisation simultanée possible

💡 **Conseil** : Hydratation suffisante`,
      relatedQuestions: ['hydration-01', 'soothing-01'],
      productTags: ['EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'soothing-01',
      keywords: ['sensible', 'peau sensible', 'fragile', 'irritation'],
      category: 'Apaisement/Sensible',
      question: 'Sensible',
      answer: `Pour une peau sensible, nous recommandons **RED 7**.

Des ingrédients doux offrent un effet apaisant sans irritation cutanée.

✨ **EXOBIO est un produit 3-Free !**
- Sans parfum (Fragrance-Free)
- Sans colorant (Color-Free)
- Sans alcool (Alcohol-Free)

💡 **Mode d'emploi** : Utilisation quotidienne possible, commencer par petite quantité

💚 **Pas besoin de remplacer vos produits existants !**
→ Ajoutez simplement en première étape après le nettoyage pour effet UP !`,
      relatedQuestions: ['soothing-02', 'hydration-01'],
      productTags: ['RED 7']
    },
    {
      id: 'soothing-02',
      keywords: ['apaisement', 'rougeurs', 'couperose'],
      category: 'Apaisement/Sensible',
      question: 'Apaisement',
      answer: `Pour l'apaisement de la peau, nous recommandons **EXOSOME 7 + RED 7**.

🎯 **Mode d'emploi** :
- **EXOSOME 7** : 3-4 fois par semaine (apaisement intensif)
- **RED 7** : Tous les jours (soin quotidien)

💡 **Conseil** : Plus efficace si utilisé après un nettoyage à l'eau froide`,
      relatedQuestions: ['soothing-01', 'acne-02'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'usage-01',
      keywords: ['mode emploi', 'comment utiliser', 'comment', 'utilisation', 'ordre utilisation'],
      category: 'Mode d\'emploi',
      question: 'Mode d\'emploi',
      answer: `Mode d'emploi des produits EXOBIO

🧴 **Ordre d'utilisation de base** :
1. Nettoyage
2. **Ampoule EXOBIO** ← Ici ! (Première étape = Effet UP ⬆️)
3. Continuer selon préférence personnelle

💡 **Mode d'emploi** :
- Sachez que les numéros 3 et 7 ont une viscosité et 5 a moins de viscosité
- Appliquer une quantité appropriée directement sur le visage et étaler uniformément là où vous souhaitez traiter
- **EXOSOME** : 3-4 fois par semaine
- **RED** : Utilisation quotidienne possible

✨ **Conseils pour augmenter l'efficacité** :
- Effet UP si utilisé en première étape après le nettoyage !
- Pas besoin de remplacer les produits existants (ajoutez simplement à votre routine !)
- Produit 3-Free, utilisation sûre même pour les peaux sensibles`,
      relatedQuestions: ['usage-02', 'usage-03', 'product-01'],
      productTags: ['EXOSOME', 'RED']
    },
    {
      id: 'usage-02',
      keywords: ['combien', 'volume', 'quantité', 'dosage'],
      category: 'Mode d\'emploi',
      question: 'Quantité',
      answer: `Quantité d'utilisation appropriée

💧 **EXOSOME (5ml×5)** :
- 1 fois ≈ 1-2 gouttes (suffisant pour tout le visage)
- 3-4 fois par semaine
- 1 set ≈ Environ 3-4 semaines

💧 **RED (15ml×2)** :
- 1 fois ≈ 2-3 gouttes
- Utilisation quotidienne (matin/soir)
- 1 set ≈ Environ 3-4 semaines`,
      relatedQuestions: ['usage-01', 'usage-03'],
      productTags: ['EXOSOME', 'RED']
    },
    // Part 2: Utilisation combinée, Product info, Détails produits EXOSOME
    {
      id: 'usage-03',
      keywords: ['ensemble', 'combinaison', 'utilisation combinée'],
      category: 'Mode d\'emploi',
      question: 'Utilisation combinée',
      answer: `Mode d'emploi des combinaisons de produits EXOBIO

✅ **Combinaisons recommandées** :

**1. Rides + Éclaircissement**
- EXOSOME 5 (2-3 fois par semaine)
- EXOSOME 3 (2-3 fois par semaine)
- Utilisation alternée

**2. Soin intensif + Soin quotidien**
- EXOSOME (3-4 fois par semaine)
- RED (tous les jours)
- Même numéro recommandé (ex : EXOSOME 5 + RED 5)

**3. Préoccupations multiples**
- Jour : RED (soin quotidien)
- Nuit : EXOSOME (soin intensif)

💡 **Note** : Vous pouvez utiliser plusieurs produits EXOBIO ensemble !`,
      relatedQuestions: ['usage-01', 'usage-02', 'product-01'],
      productTags: ['EXOSOME', 'RED']
    },
    {
      id: 'usage-04',
      keywords: ['utilisation MTS', 'MTS', 'dermaroller', 'rouleau microaiguilles'],
      category: 'Mode d\'emploi',
      question: 'Utilisation de MTS',
      answer: `🔬 **Mode d'emploi MTS (Dermaroller)**

📋 **Mode d'emploi** :
**01.** Avant utilisation, trempez le dermaroller (MTS) dans de l'éthanol désinfectant pendant 5 à 10 minutes pour bien le désinfecter.

**02.** Après avoir nettoyé votre visage avec un nettoyant, préparez votre peau.

**03.** Appliquez généreusement l'ampoule d'exosomes EXOBIO sur votre peau.

**04.** Roulez doucement le dermaroller sur la zone souhaitée avec une pression constante. Répétez jusqu'à sentir une légère stimulation sur la peau.

**05.** Tapotez doucement l'ampoule restante pour l'absorber, puis terminez avec une crème apaisante sur la peau rougie.

⚠️ **Instructions d'utilisation** :
• Le MTS est en principe un produit à usage unique, avec un maximum de 3 utilisations.
• En cas de réutilisation, assurez-vous de bien désinfecter à chaque fois avant utilisation.
• Il est recommandé d'utiliser une fois toutes les 3 à 4 semaines.

💡 **Effet** : Utilisé avec l'ampoule d'exosomes, le taux d'absorption de la peau augmente pour de meilleurs résultats !`,
      relatedQuestions: ['usage-01', 'usage-03', 'product-01'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    {
      id: 'product-01',
      keywords: ['différence', 'comparaison', 'EXOSOME vs RED'],
      category: 'Informations produit',
      question: 'Différence EXOSOME vs RED',
      answer: `Différences entre EXOSOME et RED

🔬 **EXOSOME (Soin intensif)**
- Haute concentration d'exosomes
- Utilisation 3-4 fois par semaine
- Amélioration intensive de la peau
- Effets plus rapides

💚 **RED (Soin quotidien)**
- Formule idéale avec concentration optimale d'ingrédients
- Utilisation quotidienne possible
- Soin quotidien de la peau
- Stimulation douce

💡 **Guide de sélection** :
- Pour une amélioration rapide → EXOSOME
- Pour un soin quotidien → RED
- Utilisation des deux → Meilleur effet !`,
      relatedQuestions: ['product-02', 'product-03', 'usage-03'],
      productTags: ['EXOSOME', 'RED']
    },
    {
      id: 'product-02',
      keywords: ['357', 'numéros', 'chiffres', 'signification'],
      category: 'Informations produit',
      question: 'Signification numéros 3, 5, 7',
      answer: `Signification des numéros de produits EXOBIO

3️⃣ **EXOSOME 3 / RED 3**
- Éclaircissement / Amélioration pigmentation
- Taches brunes, taches, teint terne

5️⃣ **EXOSOME 5 / RED 5**
- Amélioration rides / élasticité
- Anti-âge, lifting

7️⃣ **EXOSOME 7 / RED 7**
- Concentration apaisement·hydratation·barrière
- Acné, problèmes, sensibilité, hydratation, barrière cutanée

💡 **Guide de sélection** :
- Une préoccupation → Choisir le numéro correspondant
- Plusieurs préoccupations → Utilisation combinée
- Pas sûr ? → Faites le diagnostic IA !`,
      relatedQuestions: ['product-01', 'product-03'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['recommandation', 'quel', 'choix', 'recommandation produit'],
      category: 'Informations produit',
      question: 'Recommandation produit',
      answer: `Trouver le produit adapté pour vous

🎯 **Nous recommandons le diagnostic cutané IA !**

👉 **Diagnostic immédiat** : https://curetembio.xyz/

Analysez 10 indicateurs cutanés en 30 secondes
et recevez des recommandations de produits personnalisés.

💡 **Guide de sélection rapide** :
- Préoccupation rides → EXOSOME 5
- Préoccupation éclaircissement → EXOSOME 3
- Préoccupation hydratation·apaisement·barrière cutanée → EXOSOME 7
- Soin quotidien → Série RED

📲 **Lien diagnostic IA** : https://curetembio.xyz/`,
      relatedQuestions: ['product-01', 'product-02'],
      productTags: ['EXOSOME', 'RED']
    },
    {
      id: 'product-04',
      keywords: ['EXOBIO', 'présentation produit', 'fiabilité', 'hôpital', 'dermatologie', 'contexte', 'taux rachat', 'concentration'],
      category: 'Informations produit',
      question: 'Contexte produit EXOBIO',
      answer: `EXOBIO est une solution de soin à domicile née d'équipements dermatologiques professionnels !

🏥 **Produit utilisé dans équipements dermatologiques professionnels**
- **Soin LDM** (Soin régénération cutanée par ultrasons)
- **Soin Sono** (Livraison ingrédients actifs en profondeur)
- Ampoule **EXO BIO357** utilisée dans ces traitements, développée pour soin à domicile

🎯 **Recommandé pour** :
- Signes précoces de vieillissement après 30 ans
- Anti-âge complet après 40 ans
- Effondrement cutané post-grossesse/accouchement
- Préoccupations intensifiées : rides profondes, taches brunes, etc.

✨ **Fiabilité EXOBIO**
- Ingrédients reconnus par dermatologues
- Ampoule haute qualité utilisée dans traitements hospitaliers
- ⭐ **Taux de rachat 61%** (Satisfaction client prouvée !)
- Ampoule haute concentration·haute fonctionnalité niveau expert dermato

🔬 **Concentrations élevées (par produit)**
- **EXOSOME 3** : VITA 620,000 PPM + EXOSOME 5,000 PPM (éclaircissement)
- **EXOSOME 5** : Salmon PDRN 10,000 PPM + EXOSOME 5,000 PPM (élasticité)
- **EXOSOME 7** : CICA + EXOSOME 760,000 PPM (hydratation·apaisement/barrière)
- **RED 3** : VITA 620,000 PPM (éclaircissement quotidien)
- **RED 5** : Salmon PDRN 10,000 PPM (élasticité quotidien)
- **RED 7** : CICA 7,600 PPM (hydratation·apaisement quotidien)

🌿 **Produit 3-Free**
- Sans parfum, sans colorant, sans alcool
→ Utilisation sûre même pour peaux sensibles

💚 **Utilisation simple**
- Pas besoin de remplacer produits existants
- Ajoutez simplement en première étape après nettoyage pour effet UP !`,
      relatedQuestions: ['product-05', 'product-06', 'safety-01'],
      productTags: ['EXOBIO']
    },
    {
      id: 'product-05',
      keywords: ['LDM', 'soin LDM', 'ultrasons', 'soin hôpital'],
      category: 'Informations produit',
      question: 'Soin LDM',
      answer: `EXOBIO est l'ampoule utilisée dans les soins LDM !

🏥 **Qu'est-ce que le soin LDM ?**
- Équipement de régénération cutanée par ultrasons
- Équipement professionnel utilisé en dermatologie
- Livraison d'ingrédients actifs en profondeur dans la peau

💡 **EXOBIO et soin LDM**
- Utilisation de l'ampoule **EXO BIO357** lors des soins LDM
- Ingrédients haute qualité validés en hôpital
- Développé pour soin à domicile, utilisable chez soi

✨ **Soin niveau dermatologique à domicile**
- Ces ingrédients utilisés dans traitements hospitaliers
- Efficacité reconnue par professionnels
- Produit sûr et validé`,
      relatedQuestions: ['product-04', 'product-06'],
      productTags: ['EXOBIO']
    },
    {
      id: 'product-06',
      keywords: ['Sono', 'soin Sono', 'soin hôpital', 'traitement dermato'],
      category: 'Informations produit',
      question: 'Soin Sono',
      answer: `EXOBIO est l'ampoule utilisée dans les soins Sono !

🏥 **Qu'est-ce que le soin Sono ?**
- Équipement professionnel livrant ingrédients actifs en profondeur
- Équipement de soin utilisé en dermatologie
- Traitement augmentant le taux d'absorption cutanée

💡 **EXOBIO et soin Sono**
- Utilisation de l'ampoule **EXO BIO357** lors des soins Sono
- Ingrédients haute qualité validés en hôpital
- Développé pour soin à domicile, utilisable chez soi

✨ **Soin niveau dermatologique à domicile**
- Ces ingrédients utilisés dans traitements hospitaliers
- Efficacité reconnue par professionnels
- Produit sûr et validé

💡 **Avec rouleau MTS ?**
- Effet similaire aux traitements dermatologiques
- Augmentation importante du taux d'absorption
- Effets plus rapides ressentis`,
      relatedQuestions: ['product-04', 'product-05'],
      productTags: ['EXOBIO']
    },
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'exosome 3'],
      category: 'Informations produit',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - Soin intensif éclaircissant**

✨ **BIO 357™ EXOSOME** est une ampoule premium exosome357 améliorée qui commence en dermatologie, reconnue par les pharmacies, élevant l'efficacité des soins cutanés d'un niveau.

🎯 **Ingrédients clés**
- **VITA 620,000 PPM** (vitamine ultra-concentrée)
- **EXOSOME 5,000 PPM** (exosomes)
- Ingrédients certifiés fonctionnels éclaircissants

💡 **Effets principaux**
- Amélioration taches brunes, taches, hyperpigmentation
- Uniformisation du teint
- Amélioration teint terne
- Illumination de la peau

📅 **Mode d'emploi**
- **Fréquence** : 3-4 fois par semaine
- **Moment** : Première étape après nettoyage

💰 **Prix** : 80,000 KRW (5ml × 5ea)

💚 **Pour soin quotidien ?** RED 3 recommandé (utilisation quotidienne possible)`,
      relatedQuestions: ['product-exosome5', 'product-exosome7', 'product-red3'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'exosome 5'],
      category: 'Informations produit',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - Soin intensif élasticité**

✨ **BIO 357™ EXOSOME** est une ampoule premium exosome357 améliorée qui commence en dermatologie, reconnue par les pharmacies, élevant l'efficacité des soins cutanés d'un niveau.

🎯 **Ingrédients clés**
- **Salmon PDRN 10,000 PPM** (ADN de saumon)
- **EXOSOME 5,000 PPM** (exosomes)
- Ingrédients certifiés fonctionnels amélioration rides

💡 **Effets principaux**
- Amélioration rides, ridules
- Restauration élasticité cutanée
- Anti-âge
- Effet lifting

📅 **Mode d'emploi**
- **Fréquence** : 3-4 fois par semaine
- **Moment** : Première étape après nettoyage

💰 **Prix** : 80,000 KRW (5ml × 5ea)

💚 **Pour soin quotidien ?** RED 5 recommandé (utilisation quotidienne possible)`,
      relatedQuestions: ['product-exosome3', 'product-exosome7', 'product-red5'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'exosome 7'],
      category: 'Informations produit',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - Soin intensif apaisant**

✨ **BIO 357™ EXOSOME** est une ampoule premium exosome357 améliorée qui commence en dermatologie, reconnue par les pharmacies, élevant l'efficacité des soins cutanés d'un niveau.

🎯 **Ingrédients clés**
- **CICA (extrait de centella)**
- **EXOSOME 760,000 PPM** (exosomes ultra-concentrés)
- Ingrédients apaisants cutanés

💡 **Effets principaux**
- Apport hydratation
- Effet apaisant
- Apaisement acné, problèmes
- Réduction rougeurs
- Amélioration peau sensible
- Renforcement barrière cutanée
- Promotion régénération cutanée

📅 **Mode d'emploi**
- **Fréquence** : 3-4 fois par semaine
- **Moment** : Première étape après nettoyage

⚡ **Caractéristiques**
- Sûr pour peaux sensibles
- Soin peaux à problèmes
- Sensation immédiate d'apaisement

💰 **Prix** : 80,000 KRW (5ml × 5ea)

💚 **Pour soin quotidien ?** RED 7 recommandé (utilisation quotidienne possible)`,
      relatedQuestions: ['product-exosome3', 'product-exosome5', 'product-red7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'red 3'],
      category: 'Informations produit',
      question: 'RED 3',
      answer: `💚 **RED 3 - Soin quotidien éclaircissant**

✨ **BIO 357™ RED** est une ampoule quotidienne 357 qui commence en dermatologie, reconnue par les pharmacies, conçue pour utilisation quotidienne facile, commençant sans contrainte en première étape des soins.

🎯 **Ingrédients clés**
- **VITA 620,000 PPM** (vitamine ultra-concentrée)
- Ingrédients certifiés fonctionnels éclaircissants
- Formule optimisée pour usage quotidien

💡 **Effets principaux**
- Prévention taches brunes et taches
- Éclaircissement du teint
- Amélioration teint terne

💡 **Mode d'emploi**
- Utilisation quotidienne possible (matin/soir)
- Première étape après nettoyage

💰 **Prix** : 33,000 KRW (15ml × 2ea)

🎯 **Recommandation** : Utiliser avec EXOSOME 3 (3-4 fois par semaine)`,
      relatedQuestions: ['product-exosome3', 'product-red5', 'product-red7'],
      productTags: ['RED 3', 'EXOSOME 3']
    },
    // Part 3: RED 5/7, Effects, MTS, Safety, Product 07/08
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'red 5'],
      category: 'Informations produit',
      question: 'RED 5',
      answer: `💚 **RED 5 - Soin quotidien élasticité**

✨ **BIO 357™ RED** est une ampoule quotidienne 357 qui commence en dermatologie, reconnue par les pharmacies, conçue pour utilisation quotidienne facile, commençant sans contrainte en première étape des soins.

🎯 **Ingrédients clés**
- **Salmon PDRN 10,000 PPM** (ADN de saumon)
- Ingrédients certifiés fonctionnels amélioration rides
- Formule optimisée pour usage quotidien

💡 **Effets principaux**
- Prévention ridules
- Maintien élasticité cutanée
- Anti-âge
- Élasticité UP par usage quotidien

📅 **Mode d'emploi**
- **Fréquence** : Tous les jours (matin/soir)
- **Moment** : Première étape après nettoyage

💡 **Soin quotidien + Soin intensif**
- **RED 5** (tous les jours) + **EXOSOME 5** (3-4 fois/semaine) combinaison recommandée
- Soin intensif même rides profondes

💰 **Prix** : 37,000 KRW (15ml × 2ea)

🔬 **Pour soin intensif ?** EXOSOME 5 recommandé (3-4 fois par semaine)`,
      relatedQuestions: ['product-red3', 'product-exosome5', 'product-red7'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'red 7'],
      category: 'Informations produit',
      question: 'RED 7',
      answer: `💚 **RED 7 - Soin quotidien apaisant**

✨ **BIO 357™ RED** est une ampoule quotidienne 357 qui commence en dermatologie, reconnue par les pharmacies, conçue pour utilisation quotidienne facile, commençant sans contrainte en première étape des soins.

🎯 **Ingrédients clés**
- **CICA 7,600 PPM** (extrait de centella)
- Ingrédients apaisants cutanés
- Formule optimisée pour usage quotidien

💡 **Effets principaux**
- Apport hydratation
- Effet apaisant
- Prévention acné, problèmes
- Réduction rougeurs
- Soin peaux sensibles
- Renforcement barrière cutanée par usage quotidien

📅 **Mode d'emploi**
- **Fréquence** : Tous les jours (matin/soir)
- **Moment** : Première étape après nettoyage

💡 **Soin quotidien + Soin intensif**
- **RED 7** (tous les jours) + **EXOSOME 7** (3-4 fois/semaine) combinaison recommandée
- Soin intensif peaux à problèmes

💰 **Prix** : 32,000 KRW (15ml × 2ea)

🔬 **Pour soin intensif ?** EXOSOME 7 recommandé (3-4 fois par semaine)`,
      relatedQuestions: ['product-red3', 'product-red5', 'product-exosome7'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'effect-01',
      keywords: ['efficacité', 'effets', 'quand', 'amélioration', 'changement', 'résultats'],
      category: 'Informations produit',
      question: 'Efficacité EXOBIO',
      answer: `Guide d'efficacité et d'utilisation des produits EXOBIO

🏥 **Version domicile d'ampoule dermatologique professionnelle**

EXOBIO est une ampoule réellement utilisée dans les traitements avec équipements professionnels comme **soin LDM**, **soin SONO** en dermatologie. Développé pour soin à domicile pour utiliser chez soi ces ingrédients validés en hôpital.

💡 **Mode d'emploi - Première étape après nettoyage !**

✨ **Gardez vos produits existants**
- Ajoutez simplement produits EXOBIO en **première étape** après nettoyage
- Continuez à utiliser toner, sérum, crème habituels
- Effet UP sans changer routine ! ⬆️

📅 **Période pour ressentir les effets**

⏰ **Changements cutanés ressentis après 4 semaines**
- **1-2 semaines** : Amélioration texture cutanée, augmentation hydratation
- **3-4 semaines** : Éclaircissement teint, récupération élasticité
- **Après 4 semaines** : Changements significatifs - Stabilisation équilibre cutané
- **8-12 semaines** : Confirmation amélioration intensive rides, taches brunes, etc.

✨ **Stabilisation équilibre cutané**
- Résistance accrue aux irritations externes par renforcement barrière cutanée
- Régulation équilibre hydratation-sébum
- Récupération force naturelle de la peau

🎯 **Choisir produit adapté pour vous**

**Méthode 1️⃣ : Choix selon préoccupation**
- **Numéro 3** : Éclaircissement, taches brunes, teint terne
- **Numéro 5** : Rides, élasticité, lifting
- **Numéro 7** : Apaisement, problèmes, sensibilité, hydratation, barrière cutanée

**Méthode 2️⃣ : Diagnostic cutané IA (Recommandé !)** 🎯
- Analyse 10 indicateurs cutanés en 30 secondes
- Recommandation produits personnalisés
- Soin cutané plus efficace possible
- 👉 https://curetembio.xyz

💚 **Soin intensif vs Soin quotidien**

**Ligne EXOSOME** (Soin intensif)
- Utilisation 3-4 fois par semaine
- Amélioration rapide avec ingrédients haute concentration
- Résolution préoccupations cutanées intensifiées

**Ligne RED** (Soin quotidien)
- Utilisation quotidienne possible
- Maintien continu à prix accessible
- Maintien équilibre cutané

💡 **Méthode la plus efficace**
→ **Soin Dual EXOSOME + RED**
→ Meilleurs résultats avec soin intensif + soin quotidien !

🌟 **Points distinctifs EXOBIO**
✅ Ingrédients pour traitements équipements dermatologiques professionnels
✅ Effet ajouté tout en maintenant routine existante
✅ Changements certains après 4 semaines
✅ Ingrédients reconnus par dermatologues
✅ Taux de rachat 61% (Satisfaction client prouvée)`,
      relatedQuestions: ['product-04', 'usage-01', 'safety-03'],
      productTags: ['EXOBIO']
    },
    {
      id: 'mts-01',
      keywords: ['MTS', 'dermaroller', 'micro-aiguilles', 'rouleau'],
      category: 'Mode d\'emploi',
      question: 'Rouleau MTS',
      answer: `Soin à domicile avec rouleau derma MTS possible !

🔬 **Mode d'emploi** :
- Utilisation de micro-aiguilles 0,25mm recommandée
- Environ 1-2 fois par mois
- Appliquer produits EXOBIO après utilisation MTS

✨ **Effets** :
- Augmentation importante du taux d'absorption produits EXOBIO
- Promotion régénération cutanée
- Effets plus rapides ressentis

⚠️ **Précautions** :
- Utiliser obligatoirement 0,25mm ou moins
- Interdiction d'usage excessif
- Utiliser seulement quand état cutané est bon
- Éviter si peau sensible ou à problèmes

💡 **Ordre d'utilisation MTS** :
1. Nettoyage
2. Rouleau MTS (0,25mm)
3. Application immédiate produit EXOBIO
4. Crème après absorption`,
      relatedQuestions: ['usage-01', 'product-06'],
      productTags: ['EXOBIO']
    },
    {
      id: 'safety-02',
      keywords: ['effets secondaires', 'réaction anormale', 'allergie'],
      category: 'Sécurité',
      question: 'Effets secondaires',
      answer: `Effets secondaires et réactions anormales

✅ **EXOBIO est un produit sûr**

⚠️ **Réactions pouvant rarement apparaître** :
- Rougeur temporaire
- Léger picotement
- Desquamation cutanée (processus régénération normal)

🚨 **Cas nécessitant arrêt d'utilisation et consultation spécialiste** :
- Démangeaison sévère ou rougeur
- Éruption ou urticaire
- Gonflement

💡 **Méthode de prévention** :
- Commencer par petite quantité
- Observer état cutané`,
      relatedQuestions: ['safety-03', 'soothing-01'],
      productTags: ['EXOBIO']
    },
    {
      id: 'safety-03',
      keywords: ['stabilité', 'sécurité', 'sûr', 'validation', 'tranquillité'],
      category: 'Sécurité',
      question: 'Stabilité produit',
      answer: `Stabilité des produits EXOBIO

✅ **Validation dermatologie & pharmacie complète**
EXOBIO est une ampoule haute concentration utilisée dans traitements professionnels comme soin LDM, soin SONO en dermatologie.
Produit fiable également validé en pharmacie, se vantant d'une stabilité reconnue par experts cutanés.

🔬 **Système 3-Free (Ingrédients sûrs)**
- ❌ Sans parfum (No Fragrance)
- ❌ Sans alcool (No Alcohol)
- ❌ Sans colorant (No Artificial Color)

→ Utilisation sans contrainte même sur peaux sensibles !

💡 **Méthode d'utilisation première étape après nettoyage**
Si vous utilisez EXOBIO en tout premier après nettoyage, le taux d'absorption cutanée est maximisé et l'effet des produits utilisés habituellement augmente également.
Sans changer routine, en ajoutant simplement EXOBIO en première étape, l'effet du soin cutané augmente certainement UP⬆️ !

📊 **Fiabilité validée**
- Ampoule pour traitements dermatologiques → Conversion soin domicile
- Validation distribution pharmacie
- Taux de rachat client 61%
- Sécurité garantie par ingrédients 3-Free

🎯 **Recommandé pour**
- Personnes avec peau sensible
- Personnes préférant ingrédients sûrs
- Personnes voulant soin domicile après traitements dermatologiques
- Personnes voulant augmenter effets sans changer routine existante

📞 **Contact** : curetembio@gmail.com`,
      relatedQuestions: ['safety-02', 'product-04'],
      productTags: ['EXOBIO']
    },
    {
      id: 'product-07',
      keywords: ['357', 'numéro 3', 'numéro 5', 'numéro 7', 'numéros', 'chiffres', 'signification'],
      category: 'Informations produit',
      question: 'Signification numéros 3·5·7',
      answer: `Explication du système EXOSOME 357

🔢 **Qu'est-ce que 357 ?**
Système central d'EXOBIO, chaque numéro cible une préoccupation cutanée spécifique !

**Numéro 3 - Concentration éclaircissement·taches**
💎 EXOSOME 3 / RED 3
- Amélioration hyperpigmentation
- Peau lumineuse et claire
- Ingrédient principal : VITA 620,000 PPM

**Numéro 5 - Concentration rides·élasticité**
✨ EXOSOME 5 / RED 5
- Amélioration rides profondes
- Récupération élasticité
- Ingrédient principal : Salmon PDRN 10,000 PPM

**Numéro 7 - Concentration apaisement·hydratation·barrière**
🌿 EXOSOME 7 / RED 7
- Apaisement, problèmes, sensibilité
- Hydratation, barrière cutanée
- Ingrédient principal : CICA + EXOSOME 760,000 PPM

💡 **Guide de sélection** :
- Préoccupation pigmentation → Numéro 3
- Préoccupation vieillissement → Numéro 5
- Sensibilité·Problèmes → Numéro 7
- Préoccupations multiples → Utilisation combinée de 2-3 possibles !`,
      relatedQuestions: ['product-02', 'product-03'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-08',
      keywords: ['prix', 'combien', 'coût', 'montant', 'prix vente', 'prix consommateur'],
      category: 'Informations produit',
      question: 'Prix produits',
      answer: `Guide des prix produits EXOBIO

💰 **Ligne Premium EXOSOME (Haute concentration)**

**EXOSOME 3 (Éclaircissement·Taches)**
- 5ml × 5ea : **80,000 KRW**

**EXOSOME 5 (Rides·Élasticité)**
- 5ml × 5ea : **80,000 KRW**

**EXOSOME 7 (Apaisement·Barrière)**
- 5ml × 5ea : **80,000 KRW**

💚 **Ligne Quotidienne RED (Usage quotidien)**

**RED 3 (Éclaircissement)**
- 15ml × 2ea : **33,000 KRW**

**RED 5 (Rides)**
- 15ml × 2ea : **37,000 KRW**

**RED 7 (Apaisement)**
- 15ml × 2ea : **32,000 KRW**

⏱️ **Période d'utilisation 1 SET**
- EXOSOME : Environ 3-4 semaines (3-4 fois/semaine)
- RED : Environ 3-4 semaines (usage quotidien)

💡 **Avantages supplémentaires**
- Diagnostic cutané IA gratuit
- Contact : curetembio@gmail.com`,
      relatedQuestions: ['price-01', 'price-02'],
      productTags: ['EXOSOME', 'RED']
    },
    // Part 4: Product 09 (Purchase), Safety 04 (Ingredients), Product 10 (Barrier), Quick Replies, Fallback
    {
      id: 'product-09',
      keywords: ['achat', 'méthode achat', 'achat produit', 'acheter', 'où', 'vente', 'boutique', 'pharmacie', 'en ligne'],
      category: 'Informations produit',
      question: 'Méthode d\'achat produits',
      answer: `Méthode d'achat produits EXOBIO

🏪 **Achat hors ligne**

**Séoul**
- Dermatologie Apgujeong DM
- Pharmacies principales 4 quartiers
  · Myeong-dong
  · Hong-dae
  · Gang-nam
  · Seongsu
  · Konkuk University area

**Busan**
- Points principaux Nampo-dong
- Points principaux Station Bujeon

📍 **Informations détaillées localisation**
→ https://www.exobio.net/ > PHARMACY

💻 **Achat en ligne**

**Sites officiels**
🌐 Japon : https://www.exobio.net/
🇰🇷 Corée : https://kr.exobio.net/
🌎 Anglais : https://en.exobio.net/

**Boutiques internationales**
🇯🇵 Qoo10 JAPAN : https://www.qoo10.jp/shop/EXOBIO (japonais)
🇨🇳 Site officiel (CN) : https://cn.curetembio.com/ (chinois, paiement dollar possible dans SHOP)

💬 **Demande achat produits Chine**
🇨🇳 WeChat : lele620918

💡 **Demande achat**
📧 Email : curetembio@gmail.com
🌐 Site officiel : https://www.exobio.net/`,
      relatedQuestions: ['product-08', 'product-01'],
      productTags: ['EXOBIO']
    },
    {
      id: 'safety-04',
      keywords: ['ingrédients', 'matériaux', 'matières premières', 'concentration', 'haute concentration'],
      category: 'Sécurité',
      question: 'Ingrédients principaux',
      answer: `Informations ingrédients principaux EXOBIO

🧪 **Ingrédients clés ultra-concentrés**

**EXOSOME 3 / RED 3 (Éclaircissement)**
💎 Ingrédient VITA
- EXOSOME 3 : 620,000 PPM (haute concentration) + EXOSOME 5,000 PPM
- RED 3 : 620,000 PPM (quotidien)
- Effet : Amélioration hyperpigmentation, éclaircissement teint

**EXOSOME 5 / RED 5 (Rides)**
✨ Salmon PDRN (Polydésoxyribonucléotide)
- EXOSOME 5 : 10,000 PPM (haute concentration) + EXOSOME 5,000 PPM
- RED 5 : 10,000 PPM (quotidien)
- Effet : Régénération cutanée, amélioration rides, renforcement élasticité

**EXOSOME 7 / RED 7 (Apaisement)**
🌿 CICA (Extrait de centella)
- EXOSOME 7 : CICA + EXOSOME 760,000 PPM (haute concentration)
- RED 7 : 7,600 PPM (quotidien)
- Effet : Apaisement rougeurs, renforcement barrière cutanée, apport hydratation

🌟 **Produit 3-Free**
❌ Sans parfum (No Fragrance)
❌ Sans colorant (No Color)
❌ Sans alcool (No Alcohol)
→ Tranquillité d'esprit même pour peaux sensibles !

✅ **Certification sécurité**
- Validation dermatologues
- Ingrédients utilisés dans traitements hospitaliers (LDM, soin Sono)
- Utilisation matières premières haute qualité

💡 **Comprendre différences concentration** :
- EXOSOME : Soin intensif 3-4 fois par semaine
- RED : Soin quotidien régulier tous les jours
- Choix selon objectif ou utilisation combinée possible !`,
      relatedQuestions: ['safety-02', 'safety-03', 'product-04'],
      productTags: ['EXOSOME', 'RED']
    },
    {
      id: 'product-10',
      keywords: ['barrière cutanée', 'barrière', 'barrier', 'film protecteur'],
      category: 'Problèmes/Apaisement',
      question: 'Barrière cutanée',
      answer: `Renforcement barrière cutanée - EXOSOME 7

🛡️ **Qu'est-ce que la barrière cutanée ?**
Film protecteur surface cutanée, joue rôle important en protégeant peau des irritations externes et empêchant perte hydratation.

**Symptômes barrière affaiblie** :
- Facilement irrité et stimulé
- Sec et tiraillé
- Rougeurs fréquentes
- Produits cosmétiques ne conviennent pas

🌿 **Produits recommandés : EXOSOME 7 / RED 7**

**EXOSOME 7 (Soin intensif)**
- CICA 760,000 PPM haute concentration
- Utilisation 3-4 fois par semaine
- Récupération rapide barrière endommagée

**RED 7 (Soin quotidien)**
- CICA 7,600 PPM
- Utilisation quotidienne possible
- Renforcement barrière régulier

💪 **Effets renforcement barrière** :
1. Blocage irritations externes (poussières fines, pollution environnementale)
2. Augmentation rétention hydratation
3. Réduction rougeurs·sensibilité
4. Prévention problèmes

📖 **Mode d'emploi** :
1. Appliquer ampoule EXOBIO après nettoyage
2. Finir avec crème dans ordre

✨ **Effets attendus** :
- 2 semaines : Réduction irritation, augmentation hydratation
- 4 semaines : Amélioration rougeurs, récupération barrière
- 8 semaines : Barrière cutanée solide complétée

🎯 **Recommandé pour** :
- Peau sensible
- Rougeurs fréquentes
- Peau sèche et tiraillée
- Peau fréquemment irritée par cosmétiques

💡 **ASTUCE** : Utilisation combinée EXOSOME 7 (3-4 fois/semaine) + RED 7 (tous les jours) pour effets plus rapides !`,
      relatedQuestions: ['soothing-01', 'soothing-02', 'product-exosome7'],
      productTags: ['EXOSOME 7', 'RED 7']
    }
  ],
  
  // 🔥 43 mots-clés réponses rapides (couvrant tous Q&A)
  quickReplies: [
    { text: '🛒 Achat', query: 'méthode achat produit' },
    { text: '💫 Rides', query: 'rides' },
    { text: '💫 Ridules', query: 'ridules' },
    { text: '💫 Rides yeux', query: 'rides contour yeux' },
    { text: '💫 Rides nasogéniennes', query: 'rides nasogéniennes' },
    { text: '💎 Éclaircissement', query: 'éclaircissement' },
    { text: '✨ Taches brunes', query: 'taches brunes' },
    { text: '💎 Hyperpigmentation', query: 'hyperpigmentation' },
    { text: '💎 Teint terne', query: 'teint terne' },
    { text: '🔴 Acné', query: 'acné' },
    { text: '🔴 Boutons', query: 'boutons' },
    { text: '🔴 Problèmes', query: 'problèmes cutanés' },
    { text: '🔴 Cicatrices', query: 'cicatrices acné' },
    { text: '🌸 Rougeurs', query: 'couperose' },
    { text: '🌿 Apaisement', query: 'apaisement' },
    { text: '🌸 Sensibilité', query: 'sensible' },
    { text: '🛡️ Barrière', query: 'barrière cutanée' },
    { text: '🛡️ Renforcement', query: 'renforcement barrière' },
    { text: '🌟 Élasticité', query: 'élasticité' },
    { text: '🌟 Affaissement', query: 'affaissement' },
    { text: '🌟 Lifting', query: 'lifting' },
    { text: '💧 Hydratation', query: 'hydratation' },
    { text: '💧 Peau sèche', query: 'peau sèche' },
    { text: '💧 Humidité', query: 'humidité' },
    { text: '⭕ Pores', query: 'pores' },
    { text: '📖 Mode emploi', query: 'mode emploi' },
    { text: '📖 Quantité', query: 'quantité' },
    { text: '📖 Combinaison', query: 'combinaison' },
    { text: '🎯 Recommandation', query: 'recommandation' },
    { text: '🔄 Différence', query: 'différence' },
    { text: '💡 Qu\'est-ce EXOBIO?', query: 'EXOBIO' },
    { text: '✅ Efficacité', query: 'efficacité' },
    { text: '🔢 Signification', query: 'signification numéros' },
    { text: '💰 Prix', query: 'prix' },
    { text: '🧪 Ingrédients', query: 'ingrédients' },
    { text: '🔢 EXOSOME 3', query: 'EXOSOME 3' },
    { text: '🔢 EXOSOME 5', query: 'EXOSOME 5' },
    { text: '🔢 EXOSOME 7', query: 'EXOSOME 7' },
    { text: '⚠️ Effets secondaires', query: 'effets secondaires' },
    { text: '✅ Sécurité', query: 'sécurité' },
    { text: '💚 RED 3', query: 'RED 3' },
    { text: '💚 RED 5', query: 'RED 5' },
    { text: '💚 RED 7', query: 'RED 7' }
  ],
  
  // Réponse par défaut (en cas d'échec correspondance)
  fallbackResponse: `Désolé, je n'ai pas compris votre question. 😅

💡 **Veuillez consulter les mots-clés ci-dessous** :

**Préoccupations cutanées (10)**
1. 💎 Éclaircissement - EXOSOME 3
2. ✨ Taches brunes - EXOSOME 3
3. 💫 Rides - EXOSOME 5
4. 🌟 Élasticité - EXOSOME 5
5. 🌸 Rougeurs - EXOSOME 7
6. 🌿 Apaisement - EXOSOME 7
7. 🛡️ Barrière - EXOSOME 7
8. 💧 Hydratation - EXOSOME 7
9. 🔴 Acné - EXOSOME 7
10. ⭕ Pores - EXOSOME 3/5

**Informations produit (8)**
11. 🎯 Recommandation produit - Diagnostic IA
12. 🔄 EXOSOME vs RED - Différences
13. 💡 Qu'est-ce EXOBIO? - Présentation marque
14. ✅ Efficacité - Effets produit et mode d'emploi
15. 📖 Mode d'emploi - Guide utilisation
16. 🔢 Numéros 3·5·7 - Signification numéros
17. 💰 Prix - Prix produits

**Sécurité (2)**
18. ⚠️ Effets secondaires - Informations sécurité
19. 🧪 Ingrédients - Ingrédients principaux

Veuillez cliquer sur les boutons de réponse rapide ci-dessous pour plus de facilité ! 👇`,

  // 43 mots-clés de réponse rapide
  quickReplyKeywords: [
    // Méthode d'achat
    { label: '🛒 Comment acheter', query: 'achat' },
    
    // Rides/Vieillissement
    { label: '💫 Rides', query: 'rides' },
    { label: '💫 Ridules', query: 'ridules' },
    { label: '💫 Rides profondes', query: 'rides profondes' },
    { label: '💫 Rides yeux', query: 'rides yeux' },
    { label: '💫 Sillons nasogéniens', query: 'sillons nasogéniens' },
    
    // Blanchiment/Pigmentation
    { label: '💎 Blanchiment', query: 'blanchiment' },
    { label: '✨ Mélasma', query: 'mélasma' },
    { label: '💎 Hyperpigmentation', query: 'hyperpigmentation' },
    { label: '💎 Teint terne', query: 'teint terne' },
    
    // Acné/Problèmes
    { label: '🔴 Acné', query: 'acné' },
    { label: '🔴 Boutons', query: 'boutons' },
    { label: '🔴 Problèmes', query: 'problèmes' },
    { label: '🔴 Cicatrices', query: 'cicatrices' },
    { label: '⭕ Pores', query: 'pores' },
    
    // Apaisant/Sensible
    { label: '🌸 Rosacée', query: 'rosacée' },
    { label: '🌿 Apaisant', query: 'apaisant' },
    { label: '🌸 Sensible', query: 'sensible' },
    { label: '🛡️ Barrière', query: 'barrière cutanée' },
    { label: '🛡️ Renforcement', query: 'renforcement barrière' },
    
    // Élasticité/Relâchement
    { label: '🌟 Élasticité', query: 'élasticité' },
    { label: '🌟 Relâchement', query: 'relâchement' },
    { label: '🌟 Lifting', query: 'lifting' },
    
    // Hydratation/Humidité
    { label: '💧 Hydratation', query: 'hydratation' },
    { label: '💧 Peau sèche', query: 'peau sèche' },
    { label: '💧 Humidité', query: 'humidité' },
    
    // Mode d\'emploi
    { label: '📖 Mode d\'emploi', query: 'mode d\'emploi' },
    { label: '📖 Quantité', query: 'quantité' },
    { label: '📖 Combinaison', query: 'combinaison' },
    { label: '🔬 Utilisation MTS', query: 'utilisation MTS' },
    
    // Informations produit
    { label: '🎯 Recommandation', query: 'recommandation' },
    { label: '🔄 Différence', query: 'différence' },
    { label: '💡 Qu\'est-ce EXOBIO', query: 'EXOBIO' },
    { label: '✅ Efficacité', query: 'efficacité' },
    { label: '🔢 Signification numéros', query: '357' },
    { label: '💰 Prix', query: 'prix' },
    { label: '🧪 Ingrédients', query: 'ingrédients' },
    
    // Produits EXOSOME
    { label: 'EXOSOME 3', query: 'EXOSOME 3' },
    { label: 'EXOSOME 5', query: 'EXOSOME 5' },
    { label: 'EXOSOME 7', query: 'EXOSOME 7' },
    
    // Sécurité
    { label: '⚠️ Effets secondaires', query: 'effets secondaires' },
    { label: '✅ Sécurité', query: 'sécurité' },
    
    // Produits RED
    { label: '💚 RED 3', query: 'RED 3' },
    { label: '💚 RED 5', query: 'RED 5' },
    { label: '💚 RED 7', query: 'RED 7' }
  ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHATBOT_DATA;
}
