// EXOBIO AI Skin Consultation Chatbot Data - Spanish Version
// Versión en Español del Chatbot
// Version: 1.0.0
// Last Updated: 2026-02-20
// Language: es (Español)

const CHATBOT_DATA = {
  version: '1.0.0',
  lastUpdated: '2026-02-20',
  language: 'es',
  
  qaList: [
    // ========================================
    // Arrugas/Envejecimiento
    // ========================================
    {
      id: 'wrinkles-01',
      keywords: ['arrugas', 'mejora de arrugas', 'eliminación de arrugas', 'reducción de arrugas', 'envejecimiento'],
      category: 'Arrugas/Envejecimiento',
      question: 'Arrugas',
      answer: `Para mejorar las arrugas, recomendamos **EXOSOME 5**.

La tecnología Exosoma 357™ recupera la elasticidad de la piel y trata desde líneas finas hasta arrugas profundas.

💡 **Modo de uso**: Primer paso después de la limpieza facial por la mañana y por la noche`,
      relatedQuestions: ['wrinkles-02', 'wrinkles-04', 'product-exosome5'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'wrinkles-02',
      keywords: ['líneas finas', 'arrugas finas', 'arrugas superficiales'],
      category: 'Arrugas/Envejecimiento',
      question: 'Líneas finas',
      answer: `Para líneas finas iniciales, comience con **RED 5**.

Es un producto de cuidado diario que puede usar todos los días.

💡 **Modo de uso**: Todos los días por la mañana/noche, primer paso después de la limpieza

¿Necesita un cuidado más intensivo?
→ **EXOSOME 5** (por la mañana y por la noche después de la limpieza, primer paso)`,
      relatedQuestions: ['wrinkles-01', 'product-red5', 'product-exosome5'],
      productTags: ['RED 5', 'EXOSOME 5']
    },
    {
      id: 'wrinkles-04',
      keywords: ['arrugas de los ojos', 'arrugas debajo de los ojos', 'patas de gallo', 'arrugas del entrecejo'],
      category: 'Arrugas/Envejecimiento',
      question: 'Arrugas de los ojos',
      answer: `Para las sensibles arrugas de los ojos, recomendamos **EXOSOME 5**!

🎯 **Consejos de uso**:
- Use solo una pequeña cantidad en el área de los ojos
- Aplique con toques suaves para la absorción
- Solo 1 vez al día (mañana o noche)

⚠️ **Precaución**: Evite el contacto con los ojos`,
      relatedQuestions: ['wrinkles-01', 'product-exosome5', 'usage-02'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'wrinkles-05',
      keywords: ['surcos nasogenianos', 'líneas de expresión', 'arrugas de la sonrisa'],
      category: 'Arrugas/Envejecimiento',
      question: 'Surcos nasogenianos',
      answer: `Para los surcos nasogenianos, el **Cuidado Dual EXOSOME 5 + RED 5** es efectivo.

🎯 **Modo de uso**:
- Aplique concentradamente en el área de los surcos
- Masajee de adentro hacia afuera
- **EXOSOME 5**: 3-4 veces por semana
- **RED 5**: Todos los días`,
      relatedQuestions: ['wrinkles-01', 'product-exosome5', 'product-red5'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    
    // ========================================
    // Blanqueamiento/Pigmentación
    // ========================================
    {
      id: 'whitening-01',
      keywords: ['blanqueamiento', 'aclarar', 'iluminar', 'brillo', 'blanco'],
      category: 'Blanqueamiento/Pigmentación',
      question: 'Blanqueamiento',
      answer: `Para el blanqueamiento de la piel, recomendamos **EXOSOME 3**.

La tecnología Exosoma 357™ inhibe la producción de melanina y mejora el tono de la piel.

💡 **Modo de uso**: Primer paso después de la limpieza facial por la mañana y por la noche`,
      relatedQuestions: ['whitening-02', 'whitening-03', 'product-exosome3'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-02',
      keywords: ['manchas', 'melasma', 'eliminación de manchas', 'reducción de manchas'],
      category: 'Blanqueamiento/Pigmentación',
      question: 'Manchas',
      answer: `Para mejorar las manchas, recomendamos el **Cuidado Dual EXOSOME 3 + RED 3**.

🎯 **Modo de uso**:
- **EXOSOME 3**: 3-4 veces por semana (cuidado intensivo)
- **RED 3**: Todos los días (cuidado diario)
- ¡Protector solar obligatorio!`,
      relatedQuestions: ['whitening-01', 'product-exosome3', 'product-red3'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    {
      id: 'whitening-03',
      keywords: ['pecas', 'manchas', 'máculas', 'pigmento'],
      category: 'Blanqueamiento/Pigmentación',
      question: 'Pecas',
      answer: `Para mejorar las pecas, **EXOSOME 3** es efectivo.

💡 **Modo de uso**:
- Aplique concentradamente en las áreas con pecas
- Use 3-4 veces por semana
- Protección solar obligatoria durante el día

💡 **Consejo**: El uso constante es importante`,
      relatedQuestions: ['whitening-01', 'whitening-02', 'product-exosome3'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'whitening-04',
      keywords: ['hiperpigmentación', 'pigmento', 'melanina', 'opacidad'],
      category: 'Blanqueamiento/Pigmentación',
      question: 'Hiperpigmentación',
      answer: `Para mejorar la hiperpigmentación, recomendamos **EXOSOME 3**.

Los componentes de exosomas inhiben la producción de melanina y mejoran la hiperpigmentación.

💡 **Modo de uso**: 3-4 veces por semana, aplicación concentrada en áreas pigmentadas
⚠️ **Precaución**: Uso obligatorio de protector solar`,
      relatedQuestions: ['whitening-01', 'whitening-02', 'product-exosome3'],
      productTags: ['EXOSOME 3', 'RED 3']
    },
    
    // ========================================
    // Problemas/Acné
    // ========================================
    {
      id: 'acne-01',
      keywords: ['acné', 'granos', 'espinillas', 'problemas'],
      category: 'Problemas/Acné',
      question: 'Acné',
      answer: `Sí, EXOBIO se puede usar de forma segura en piel con acné.

**EXOSOME 7** y **RED 7** ayudan a calmar y regenerar la piel, recuperando rápidamente la piel dañada por el acné.

🎯 **Productos recomendados**:
- **EXOSOME 7** (calma la piel + reduce la inflamación)
- **RED 7** (para el cuidado diario)

✨ **Efectos esperados**:
- Calma del acné y recuperación rápida
- Prevención de recurrencias fortaleciendo la barrera cutánea
- Mejora de marcas y cicatrices`,
      relatedQuestions: ['acne-02', 'acne-03', 'product-exosome7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-02',
      keywords: ['problemas de piel', 'inflamación', 'enrojecimiento'],
      category: 'Problemas/Acné',
      question: 'Problemas',
      answer: `Para problemas de la piel, recomendamos el **Cuidado Dual EXOSOME 7 + RED 7**.

💡 **Modo de uso**:
- **EXOSOME 7**: 3-4 veces por semana (calma intensiva)
- **RED 7**: Todos los días (cuidado diario)
- Cuidado concentrado en áreas problemáticas

✨ **Efectos esperados**: Calma rápida, prevención de recurrencias`,
      relatedQuestions: ['acne-01', 'product-exosome7', 'product-red7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    {
      id: 'acne-03',
      keywords: ['marcas de acné', 'cicatrices de acné', 'cicatrices', 'hoyuelos'],
      category: 'Problemas/Acné',
      question: 'Marcas de acné',
      answer: `Sí, EXOBIO se puede usar de forma segura en cicatrices de acné.

**EXOSOME 3** ayuda a las cicatrices de acné y puede crear una piel limpia con agua de espino amarillo y exosomas.

🎯 **Producto recomendado**: EXOSOME 3 (mejora de pigmentación + blanqueamiento)

✨ **Efectos esperados**: Calma rápida, prevención de recurrencias`,
      relatedQuestions: ['acne-01', 'acne-02', 'product-exosome3'],
      productTags: ['EXOSOME 3']
    },
    
    // ========================================
    // Poros
    // ========================================
    {
      id: 'pores-01',
      keywords: ['poros', 'reducción de poros', 'mejora de poros'],
      category: 'Poros',
      question: 'Poros',
      answer: `Para reducir los poros, recomendamos el **Cuidado EXOSOME 5**.

🎯 **Modo de uso**:
- **EXOSOME 5**: Primer paso después de la limpieza facial por la mañana y por la noche
- Cuidado concentrado en áreas con poros`,
      relatedQuestions: ['pores-02', 'product-exosome5', 'usage-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'pores-02',
      keywords: ['sebo', 'grasa', 'piel grasa'],
      category: 'Poros',
      question: 'Sebo',
      answer: `Para la secreción excesiva de sebo, recomendamos **RED 7**.

Es un producto de uso diario que equilibra la piel.

💡 **Modo de uso**: Todos los días por la mañana/noche, después de la limpieza
💡 **Consejo**: Tenga cuidado al usar con otros productos grasos`,
      relatedQuestions: ['pores-01', 'product-red7', 'usage-01'],
      productTags: ['RED 7']
    },
    
    // ========================================
    // Elasticidad/Lifting
    // ========================================
    {
      id: 'elasticity-01',
      keywords: ['elasticidad', 'elasticidad de la piel', 'flacidez', 'lifting'],
      category: 'Elasticidad/Lifting',
      question: 'Elasticidad',
      answer: `Para mejorar la elasticidad de la piel, recomendamos **EXOSOME 5**.

La tecnología Exosoma 357™ promueve la producción de colágeno y recupera la elasticidad de la piel.

💡 **Modo de uso**: 3-4 veces por semana, masajee de abajo hacia arriba`,
      relatedQuestions: ['elasticity-02', 'product-exosome5', 'usage-01'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    {
      id: 'elasticity-02',
      keywords: ['flacidez facial', 'contorno', 'línea V'],
      category: 'Elasticidad/Lifting',
      question: 'Flacidez facial',
      answer: `Para mejorar la flacidez facial, recomendamos el **Cuidado Dual EXOSOME 5 + RED 5**.

🎯 **Modo de uso**:
- **EXOSOME 5**: 3-4 veces por semana (lifting intensivo)
- **RED 5**: Todos los días (cuidado diario)
- Masajee de abajo hacia arriba, de adentro hacia afuera`,
      relatedQuestions: ['elasticity-01', 'product-exosome5', 'product-red5'],
      productTags: ['EXOSOME 5', 'RED 5']
    },
    
    // ========================================
    // Hidratación/Humectación
    // ========================================
    {
      id: 'hydration-01',
      keywords: ['hidratación', 'humectación', 'sequedad', 'suave'],
      category: 'Hidratación/Humectación',
      question: 'Hidratación',
      answer: `Para piel seca, recomendamos **RED 7**.

Es un producto de uso diario que proporciona suficiente hidratación a la piel.

💡 **Modo de uso**: Todos los días por la mañana/noche, primer paso después de la limpieza
💡 **Consejo**: Más efectivo cuando se usa como primer paso después de la limpieza`,
      relatedQuestions: ['hydration-02', 'product-red5', 'product-exosome7'],
      productTags: ['RED 5', 'EXOSOME 7', 'RED 7']
    },
    {
      id: 'hydration-02',
      keywords: ['piel seca', 'descamación', 'tirantez'],
      category: 'Hidratación/Humectación',
      question: 'Piel seca',
      answer: `Para piel seca, recomendamos el **Cuidado Dual Premium EXOSOME 5 + EXOSOME 7 (fortalecimiento de la barrera cutánea)**.

🎯 **Modo de uso**:
- **EXOSOME 5**: Todos los días (suministro de hidratación)
- **EXOSOME 7**: Todos los días (fortalecimiento de la barrera cutánea)
- Se pueden usar juntos

💡 **Consejo**: Suficiente ingesta de agua`,
      relatedQuestions: ['hydration-01', 'product-exosome7', 'product-red7'],
      productTags: ['EXOSOME 5', 'EXOSOME 7', 'RED 7']
    },
    
    // ========================================
    // Calma/Sensibilidad
    // ========================================
    {
      id: 'soothing-01',
      keywords: ['sensible', 'piel sensible', 'delicado', 'irritación'],
      category: 'Calma/Sensibilidad',
      question: 'Sensible',
      answer: `Para piel sensible, recomendamos **RED 7**.

Proporciona efecto calmante sin irritación con ingredientes suaves.

✨ **¡EXOBIO es un producto 3-Free!**
- Sin fragancia (Fragrance-Free)
- Sin color (Color-Free)
- Sin alcohol (Alcohol-Free)

💡 **Modo de uso**: Uso diario posible, comience con una pequeña cantidad

💚 **¡No necesita reemplazar sus productos existentes!**
→ ¡Solo agréguelo como primer paso después de la limpieza para aumentar el efecto!`,
      relatedQuestions: ['soothing-02', 'product-red7', 'product-exosome7'],
      productTags: ['RED 7', 'EXOSOME 7']
    },
    {
      id: 'soothing-02',
      keywords: ['calma', 'enrojecimiento', 'rubor'],
      category: 'Calma/Sensibilidad',
      question: 'Calma',
      answer: `Para calmar la piel, recomendamos **EXOSOME 7 + RED 7**.

🎯 **Modo de uso**:
- **EXOSOME 7**: 3-4 veces por semana (calma intensiva)
- **RED 7**: Todos los días (cuidado diario)

💡 **Consejo**: Más efectivo cuando se usa después de lavar con agua fría`,
      relatedQuestions: ['soothing-01', 'product-exosome7', 'product-red7'],
      productTags: ['EXOSOME 7', 'RED 7']
    },
    
    // ========================================
    // Uso
    // ========================================
    {
      id: 'usage-01',
      keywords: ['uso', 'modo de uso', 'cómo', 'forma de uso', 'orden de uso'],
      category: 'Uso',
      question: 'Modo de uso',
      answer: `Modo de uso de productos EXOBIO

🧴 **Orden de uso básico**:
1. Limpieza facial
2. **Ampolla EXOBIO** ← ¡Aquí! (Primer paso = efecto UP ⬆️)
3. Continue con productos según preferencia personal

💡 **Modo de uso**:
- Sepa que el número 3 y 7 tienen viscosidad y el 5 tiene menos viscosidad
- Aplique la cantidad adecuada directamente en el rostro y extienda uniformemente en el área que desea tratar
- **EXOSOME**: 3-4 veces por semana
- **RED**: Uso diario posible

✨ **Consejos para aumentar el efecto**:
- ¡Efecto UP cuando se usa como primer paso después de la limpieza!
- No necesita reemplazar productos existentes (¡solo agrégalo a tu rutina!)
- Producto 3-Free seguro para pieles sensibles`,
      relatedQuestions: ['usage-02', 'usage-03', 'product-01'],
      productTags: []
    },
    {
      id: 'usage-02',
      keywords: ['cuánto', 'cantidad', 'dosis', 'cantidad de uso'],
      category: 'Uso',
      question: 'Cantidad',
      answer: `Cantidad de uso adecuada

💧 **Cantidad por uso**: Cantidad adecuada
- Área a tratar: 2 veces

📊 **Período de uso de 1 SET**:
- **EXOSOME 1SET** (uso 3-4 veces por semana): Aproximadamente 3-4 semanas
- **RED** (uso diario): Aproximadamente 3-4 semanas`,
      relatedQuestions: ['usage-01', 'usage-03', 'product-08'],
      productTags: []
    },
    {
      id: 'usage-03',
      keywords: ['juntos', 'combinación', 'uso combinado', 'usar juntos'],
      category: 'Uso',
      question: 'Uso combinado',
      answer: `Modo de uso combinado de productos EXOBIO

✅ **Combinaciones recomendadas**:

**1. Arrugas + Blanqueamiento**
- EXOSOME 5 (2-3 veces por semana)
- EXOSOME 3 (2-3 veces por semana)
- Uso alternado

**2. Cuidado intensivo + Cuidado diario**
- EXOSOME (3-4 veces por semana)
- RED (todos los días)
- Se recomienda el mismo número (ej: EXOSOME 5 + RED 5)

**3. Preocupaciones múltiples**
- Día: RED (cuidado diario)
- Noche: EXOSOME (cuidado intensivo)

💡 **Nota**: ¡Puedes usar varios productos EXOBIO juntos!`,
      relatedQuestions: ['usage-01', 'usage-02', 'product-01'],
      productTags: []
    },
    {
      id: 'usage-04',
      keywords: ['uso de MTS', 'MTS', 'dermaroller', 'rodillo de microagujas'],
      category: 'Uso',
      question: 'Uso de MTS',
      answer: `🔬 **Método de uso de MTS (Dermaroller)**

📋 **Cómo usar**:
**01.** Antes de usar, sumerja el dermaroller (MTS) en etanol desinfectante durante 5-10 minutos para desinfectarlo completamente.

**02.** Después de limpiar bien con limpiador facial, prepare su piel.

**03.** Aplique generosamente la ampolla de exosomas EXOBIO en su piel.

**04.** Ruede el dermaroller suavemente sobre el área deseada con presión constante. Repita hasta sentir una estimulación suave en la piel.

**05.** Masajee suavemente la ampolla restante para su absorción y termine con una crema calmante en la piel enrojecida.

⚠️ **Instrucciones de uso**:
• MTS es en principio un producto de un solo uso, con un máximo de 3 usos.
• Si lo reutiliza, asegúrese de desinfectarlo completamente cada vez antes de usarlo.
• Se recomienda usar una vez cada 3-4 semanas.

💡 **Efecto**: ¡Cuando se usa con la ampolla de exosomas, aumenta la tasa de absorción de la piel para mejores resultados!`,
      relatedQuestions: ['usage-01', 'usage-03', 'product-01'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7']
    },
    
    // ========================================
    // Información de productos
    // ========================================
    {
      id: 'product-01',
      keywords: ['diferencia', 'distinción', 'comparación', 'EXOSOME', 'RED'],
      category: 'Información de productos',
      question: 'Diferencia EXOSOME vs RED',
      answer: `Diferencias entre EXOSOME y RED

🔬 **EXOSOME (Cuidado intensivo)**
- Contiene exosomas de alta concentración
- Uso 3-4 veces por semana
- Mejora intensiva de la piel
- Efectos más rápidos

💚 **RED (Cuidado diario)**
- Combinación de fórmula ideal con ingredientes de concentración adecuada
- Uso diario posible
- Cuidado diario de la piel
- Estimulación suave

💡 **Guía de selección**:
- Cuando se desea mejoría rápida → EXOSOME
- Cuando se quiere cuidado diario → RED
- Usar ambos → ¡El mejor efecto!`,
      relatedQuestions: ['product-02', 'product-03', 'product-04'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-02',
      keywords: ['357', 'número', 'significado'],
      category: 'Información de productos',
      question: 'Significado de los números 3, 5, 7',
      answer: `Significado de los números de productos EXOBIO

3️⃣ **EXOSOME 3 / RED 3**
- Blanqueamiento / Mejora de pigmentación
- Manchas, pecas, opacidad

5️⃣ **EXOSOME 5 / RED 5**
- Arrugas / Mejora de elasticidad
- Antienvejecimiento, lifting

7️⃣ **EXOSOME 7 / RED 7**
- Calma·Hidratación·Barrera concentrada
- Acné, problemas, sensibilidad, hidratación, barrera cutánea

💡 **Guía de selección**:
- Una preocupación → Seleccione el número correspondiente
- Varias preocupaciones → Uso combinado
- Si no está seguro → ¡Haga el diagnóstico AI!`,
      relatedQuestions: ['product-01', 'product-03', 'product-07'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'product-03',
      keywords: ['recomendación', 'cuál', 'selección', 'qué', 'recomendación de producto'],
      category: 'Información de productos',
      question: 'Recomendación de producto',
      answer: `Encuentra el producto adecuado para ti

🎯 **¡Recomendamos el diagnóstico de piel AI!**

👉 **Reciba el diagnóstico ahora**: https://curetembio.xyz/

Analiza 10 indicadores de piel en 30 segundos
y recomienda productos personalizados.

💡 **Guía de selección rápida**:
- Preocupación de arrugas → EXOSOME 5
- Preocupación de blanqueamiento → EXOSOME 3
- Preocupación de hidratación calma barrera cutánea → EXOSOME 7
- Cuidado diario → Serie RED

📲 **Enlace de diagnóstico AI**: https://curetembio.xyz/`,
      relatedQuestions: ['product-01', 'product-02', 'product-04'],
      productTags: []
    },
    {
      id: 'product-04',
      keywords: ['Qué es EXOBIO', 'introducción EXOBIO', 'introducción de producto', 'qué producto', 'confianza', 'hospital', 'dermatología', 'antecedentes', 'tasa de recompra', 'contenido'],
      category: 'Información de productos',
      question: 'Antecedentes del producto EXOBIO',
      answer: `¡EXOBIO es una solución de cuidado en casa nacida de equipos especializados de dermatología!

🏥 **Producto utilizado en equipos especializados de dermatología**
- **Cuidado LDM** (gestión de regeneración cutánea con ultrasonido)
- **Cuidado Sono** (entrega de ingredientes activos profundamente en la piel)
- **Ampolla EXO BIO357** utilizada en procedimientos de estos equipos desarrollada para cuidado en casa

✨ **Confiabilidad de EXOBIO**
- Ingredientes reconocidos por dermatólogos especializados
- Ampolla de alta calidad utilizada en procedimientos de equipos hospitalarios
- ⭐ **Tasa de recompra 61%** (¡satisfacción del cliente comprobada!)

🔬 **Contenido de alta concentración (por producto)**
- **EXOSOME 3**: VITA 620,000 PPM + EXOSOME 5,000 PPM (blanqueamiento)
- **EXOSOME 5**: Salmon PDRN 10,000 PPM + EXOSOME 5,000 PPM (elasticidad)
- **EXOSOME 7**: CICA + EXOSOME 760,000 PPM (hidratación calma/barrera cutánea)
- **RED 3**: VITA 620,000 PPM (blanqueamiento diario)
- **RED 5**: Salmon PDRN 10,000 PPM (elasticidad diaria)
- **RED 7**: CICA 7,600 PPM (hidratación calma diaria)

💚 **Es fácil de usar**
- No necesita reemplazar productos existentes
- ¡Solo agregue como primer paso después de la limpieza para aumentar el efecto!`,
      relatedQuestions: ['product-01', 'product-05', 'product-06'],
      productTags: []
    },
    
    // Productos EXOSOME individuales
    {
      id: 'product-exosome3',
      keywords: ['EXOSOME 3', 'EXOSOME3', 'exosoma 3'],
      category: 'Información de productos',
      question: 'EXOSOME 3',
      answer: `🔢 **EXOSOME 3 - Cuidado intensivo de blanqueamiento**

✨ **BIO 357™ EXOSOME** es una ampolla premium de exosoma 357 que comenzó en dermatología y fue reconocida por farmacias.

🎯 **Ingredientes principales**
- **VITA 620,000 PPM** (vitamina de ultra alta concentración)
- **EXOSOME 5,000 PPM** (exosomas)
- Ingredientes certificados funcionales para blanqueamiento

💡 **Efectos principales**
- Mejora de manchas, pecas, hiperpigmentación
- Uniformización del tono de piel
- Mejora de opacidad
- Iluminación de la piel

📅 **Modo de uso**
- **Frecuencia de uso**: 3-4 veces por semana
- **Momento de uso**: Primer paso después de la limpieza

💰 **Precio**: 80,000 won (5ml × 5ea)

💚 **¿Cuidado diario?** RED 3 recomendado (uso diario posible)`,
      relatedQuestions: ['whitening-01', 'product-red3', 'product-01'],
      productTags: ['EXOSOME 3']
    },
    {
      id: 'product-exosome5',
      keywords: ['EXOSOME 5', 'EXOSOME5', 'exosoma 5'],
      category: 'Información de productos',
      question: 'EXOSOME 5',
      answer: `🔢 **EXOSOME 5 - Cuidado intensivo de elasticidad**

✨ **BIO 357™ EXOSOME** es una ampolla premium de exosoma 357 que comenzó en dermatología y fue reconocida por farmacias.

🎯 **Ingredientes principales**
- **Salmon PDRN 10,000 PPM** (ADN de salmón)
- **EXOSOME 5,000 PPM** (exosomas)
- Ingredientes certificados funcionales para mejora de arrugas

💡 **Efectos principales**
- Mejora de arrugas y líneas finas
- Recuperación de elasticidad de la piel
- Antienvejecimiento
- Efecto lifting

📅 **Modo de uso**
- **Frecuencia de uso**: 3-4 veces por semana
- **Momento de uso**: Primer paso después de la limpieza

💰 **Precio**: 80,000 won (5ml × 5ea)

💚 **¿Cuidado diario?** RED 5 recomendado (uso diario posible)`,
      relatedQuestions: ['wrinkles-01', 'product-red5', 'product-01'],
      productTags: ['EXOSOME 5']
    },
    {
      id: 'product-exosome7',
      keywords: ['EXOSOME 7', 'EXOSOME7', 'exosoma 7'],
      category: 'Información de productos',
      question: 'EXOSOME 7',
      answer: `🔢 **EXOSOME 7 - Cuidado intensivo calmante**

✨ **BIO 357™ EXOSOME** es una ampolla premium de exosoma 357 que comenzó en dermatología y fue reconocida por farmacias.

🎯 **Ingredientes principales**
- **CICA (extracto de centella asiática)**
- **EXOSOME 760,000 PPM** (exosomas de ultra alta concentración)
- Ingredientes calmantes para la piel

💡 **Efectos principales**
- Suministro de hidratación
- Efecto calmante
- Calma de acné y problemas
- Alivio del rubor
- Mejora de piel sensible
- Fortalecimiento de la barrera cutánea

📅 **Modo de uso**
- **Frecuencia de uso**: 3-4 veces por semana
- **Momento de uso**: Primer paso después de la limpieza

💰 **Precio**: 80,000 won (5ml × 5ea)

💚 **¿Cuidado diario?** RED 7 recomendado (uso diario posible)`,
      relatedQuestions: ['acne-01', 'product-red7', 'product-01'],
      productTags: ['EXOSOME 7']
    },
    {
      id: 'product-red3',
      keywords: ['RED 3', 'RED3', 'rojo 3'],
      category: 'Información de productos',
      question: 'RED 3',
      answer: `💚 **RED 3 - Cuidado diario de blanqueamiento**

✨ **BIO 357™ RED** es una ampolla diaria 357 diseñada para uso diario fácil.

🎯 **Ingredientes principales**
- **VITA 620,000 PPM** (vitamina de ultra alta concentración)
- Ingredientes certificados funcionales para blanqueamiento
- Fórmula optimizada para uso diario

💰 **Precio**: 33,000 won (15ml × 2ea)

🔬 **¿Cuidado intensivo?** EXOSOME 3 recomendado (3-4 veces por semana)`,
      relatedQuestions: ['whitening-01', 'product-exosome3', 'product-01'],
      productTags: ['RED 3']
    },
    {
      id: 'product-red5',
      keywords: ['RED 5', 'RED5', 'rojo 5'],
      category: 'Información de productos',
      question: 'RED 5',
      answer: `💚 **RED 5 - Cuidado diario de elasticidad**

✨ **BIO 357™ RED** es una ampolla diaria 357 diseñada para uso diario fácil.

🎯 **Ingredientes principales**
- **Salmon PDRN 10,000 PPM** (ADN de salmón)
- Ingredientes certificados funcionales para mejora de arrugas
- Fórmula optimizada para uso diario

💰 **Precio**: 37,000 won (15ml × 2ea)`,
      relatedQuestions: ['wrinkles-02', 'product-exosome5', 'product-01'],
      productTags: ['RED 5']
    },
    {
      id: 'product-red7',
      keywords: ['RED 7', 'RED7', 'rojo 7'],
      category: 'Información de productos',
      question: 'RED 7',
      answer: `💚 **RED 7 - Cuidado diario calmante**

✨ **BIO 357™ RED** es una ampolla diaria 357 diseñada para uso diario fácil.

🎯 **Ingredientes principales**
- **CICA 7,600 PPM** (extracto de centella asiática)
- Ingredientes calmantes para la piel
- Fórmula optimizada para uso diario

💰 **Precio**: 32,000 won (15ml × 2ea)`,
      relatedQuestions: ['soothing-01', 'product-exosome7', 'product-01'],
      productTags: ['RED 7']
    },
    
    // ========================================
    // Precio/Compra
    // ========================================
    {
      id: 'product-08',
      keywords: ['precio', 'cuánto', 'costo', 'importe'],
      category: 'Información de productos',
      question: 'Precio',
      answer: `Guía de precios de productos EXOBIO

💰 **Línea premium EXOSOME (alta concentración)**
- EXOSOME 3/5/7: **80,000 won** (5ml × 5ea)

💚 **Línea diaria RED (uso diario)**
- RED 3: **33,000 won** (15ml × 2ea)
- RED 5: **37,000 won** (15ml × 2ea)
- RED 7: **32,000 won** (15ml × 2ea)

📦 **Período de uso**:
- EXOSOME: Aproximadamente 3-4 semanas (uso 3-4 veces/semana)
- RED: Aproximadamente 3-4 semanas (uso diario)

🎁 **Beneficios adicionales**:
- Diagnóstico de piel AI: Gratis (https://curetembio.xyz)
- Consultas: curetembio@gmail.com`,
      relatedQuestions: ['purchase-01', 'product-01', 'usage-04'],
      productTags: ['EXOSOME 3', 'EXOSOME 5', 'EXOSOME 7', 'RED 3', 'RED 5', 'RED 7']
    },
    {
      id: 'purchase-01',
      keywords: ['compra', 'método de compra', 'comprar', 'dónde', 'venta'],
      category: 'Compra',
      question: 'Método de compra',
      answer: `Método de compra de productos EXOBIO

💬 **Consulta de compra en China**
🇨🇳 WeChat: lele620918

💻 **Compra online**
🌐 Página oficial: https://www.exobio.net/
🇰🇷 Corea: https://kr.exobio.net/
🌎 Inglés: https://en.exobio.net/

💡 **Consulta**
📧 Email: curetembio@gmail.com`,
      relatedQuestions: ['product-01', 'product-08', 'usage-01'],
      productTags: []
    }
  ],
  
  // ========================================
  // Respuestas rápidas
  // ========================================
  quickReplies: [
    { text: '🛒 Compra', query: 'compra' },
    { text: '💫 Arrugas', query: 'arrugas' },
    { text: '💎 Blanqueamiento', query: 'blanqueamiento' },
    { text: '🔴 Acné', query: 'acné' },
    { text: '🔴 Cicatrices', query: 'marcas de acné' },
    { text: '⭕ Poros', query: 'poros' },
    { text: '🌟 Elasticidad', query: 'elasticidad' },
    { text: '💧 Hidratación', query: 'hidratación' },
    { text: '🌸 Sensible', query: 'sensible' },
    { text: '📖 Uso', query: 'modo de uso' },
    { text: '💡 EXOSOME 3', query: 'EXOSOME 3' },
    { text: '💡 EXOSOME 5', query: 'EXOSOME 5' },
    { text: '💡 EXOSOME 7', query: 'EXOSOME 7' },
    { text: '💚 RED 3', query: 'RED 3' },
    { text: '💚 RED 5', query: 'RED 5' },
    { text: '💚 RED 7', query: 'RED 7' }
  ],
  
  // ========================================
  // Respuesta predeterminada
  // ========================================
  fallbackResponse: `Lo siento. No pude entender la pregunta. 😅

💡 **Por favor consulte las siguientes palabras clave**:

**Preocupaciones cutáneas**
- 💎 Blanqueamiento - EXOSOME 3
- 💫 Arrugas - EXOSOME 5
- 🔴 Acné - EXOSOME 7
- 🌸 Sensible - RED 7
- ⭕ Poros - EXOSOME 5

**Información de productos**
- 🎯 Recomendación - AI diagnóstico
- 💰 Precio - Guía de precios
- 🛒 Compra - Método de compra

¡Haga clic en los botones de respuesta rápida! 👇`,

  // 43 palabras clave de respuesta rápida
  quickReplyKeywords: [
    // Método de compra
    { label: '🛒 Cómo comprar', query: 'compra' },
    
    // Arrugas/Envejecimiento
    { label: '💫 Arrugas', query: 'arrugas' },
    { label: '💫 Líneas finas', query: 'líneas finas' },
    { label: '💫 Arrugas profundas', query: 'arrugas profundas' },
    { label: '💫 Arrugas oculares', query: 'arrugas oculares' },
    { label: '💫 Pliegues nasolabiales', query: 'pliegues nasolabiales' },
    
    // Blanqueamiento/Pigmentación
    { label: '💎 Blanqueamiento', query: 'blanqueamiento' },
    { label: '✨ Melasma', query: 'melasma' },
    { label: '💎 Hiperpigmentación', query: 'hiperpigmentación' },
    { label: '💎 Opacidad', query: 'opacidad' },
    
    // Acné/Problemas
    { label: '🔴 Acné', query: 'acné' },
    { label: '🔴 Granos', query: 'granos' },
    { label: '🔴 Problemas', query: 'problemas' },
    { label: '🔴 Cicatrices', query: 'cicatrices' },
    { label: '⭕ Poros', query: 'poros' },
    
    // Calmante/Sensible
    { label: '🌸 Rosácea', query: 'rosácea' },
    { label: '🌿 Calmante', query: 'calmante' },
    { label: '🌸 Sensible', query: 'sensible' },
    { label: '🛡️ Barrera', query: 'barrera cutánea' },
    { label: '🛡️ Fortalecimiento', query: 'fortalecimiento barrera' },
    
    // Elasticidad/Flacidez
    { label: '🌟 Elasticidad', query: 'elasticidad' },
    { label: '🌟 Flacidez', query: 'flacidez' },
    { label: '🌟 Lifting', query: 'lifting' },
    
    // Hidratación/Humedad
    { label: '💧 Hidratación', query: 'hidratación' },
    { label: '💧 Piel seca', query: 'piel seca' },
    { label: '💧 Humedad', query: 'humedad' },
    
    // Modo de uso
    { label: '📖 Modo de uso', query: 'modo de uso' },
    { label: '📖 Cantidad', query: 'cantidad' },
    { label: '📖 Combinación', query: 'combinación' },
    { label: '🔬 Uso de MTS', query: 'uso de MTS' },
    
    // Información del producto
    { label: '🎯 Recomendación', query: 'recomendación' },
    { label: '🔄 Diferencia', query: 'diferencia' },
    { label: '💡 Qué es EXOBIO', query: 'EXOBIO' },
    { label: '✅ Eficacia', query: 'eficacia' },
    { label: '🔢 Significado números', query: '357' },
    { label: '💰 Precio', query: 'precio' },
    { label: '🧪 Ingredientes', query: 'ingredientes' },
    
    // Productos EXOSOME
    { label: 'EXOSOME 3', query: 'EXOSOME 3' },
    { label: 'EXOSOME 5', query: 'EXOSOME 5' },
    { label: 'EXOSOME 7', query: 'EXOSOME 7' },
    
    // Seguridad
    { label: '⚠️ Efectos secundarios', query: 'efectos secundarios' },
    { label: '✅ Seguridad', query: 'seguridad' },
    
    // Productos RED
    { label: '💚 RED 3', query: 'RED 3' },
    { label: '💚 RED 5', query: 'RED 5' },
    { label: '💚 RED 7', query: 'RED 7' }
  ]
};
