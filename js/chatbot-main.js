// ========================================
// EXOBIO AI Chatbot - Main Script
// 언어 변경 시 모든 UI 요소를 동적으로 번역
// ========================================

let currentLanguage = 'ko'; // 기본 언어
let currentChatbotData = null; // 현재 로드된 챗봇 데이터

// ========================================
// 1. 언어별 챗봇 데이터 로드
// ========================================
async function loadChatbotData(lang) {
    try {
        // 한국어는 루트의 chatbot-data.js를 사용
        const dataPath = lang === 'ko' 
            ? 'chatbot-data.js' 
            : `translations/${lang}/chatbot-data.js`;
        
        // 동적으로 스크립트 로드
        const response = await fetch(dataPath);
        const scriptContent = await response.text();
        
        // eval로 CHATBOT_DATA 객체 생성
        eval(scriptContent);
        currentChatbotData = CHATBOT_DATA;
        
        console.log(`✅ ${lang} 챗봇 데이터 로드 완료:`, currentChatbotData);
        return currentChatbotData;
    } catch (error) {
        console.error(`❌ ${lang} 챗봇 데이터 로드 실패:`, error);
        return null;
    }
}

// ========================================
// 2. 페이지 메타 태그 업데이트
// ========================================
function updatePageMeta(lang) {
    const meta = CHATBOT_I18N[lang].meta;
    
    // Title
    document.title = meta.title;
    
    // Description
    document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
    
    // Keywords
    document.querySelector('meta[name="keywords"]').setAttribute('content', meta.keywords);
    
    // Open Graph
    document.querySelector('meta[property="og:title"]').setAttribute('content', meta.og_title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', meta.og_description);
    
    // Twitter Card
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', meta.twitter_title);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', meta.twitter_description);
    
    // HTML lang 속성
    document.documentElement.lang = lang;
    
    console.log(`✅ 페이지 메타 태그 업데이트: ${lang}`);
}

// ========================================
// 3. 모든 data-i18n 요소 번역
// ========================================
function translateAllElements(lang) {
    const uiData = CHATBOT_I18N[lang].ui;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (uiData[key]) {
            // HTML 태그 포함된 텍스트 처리
            if (key.includes('subtitle') || key.includes('footer')) {
                element.innerHTML = uiData[key];
            } else {
                element.textContent = uiData[key];
            }
        }
    });
    
    console.log(`✅ UI 텍스트 번역 완료: ${lang}`);
}

// ========================================
// 4. 키워드 버튼 그룹 생성
// ========================================
function generateKeywordButtons(lang) {
    const uiData = CHATBOT_I18N[lang].ui;
    const keywordsContainer = document.getElementById('keywordsContainer');
    
    if (!keywordsContainer) return;
    
    // 키워드 그룹 정의 (한국어 기준 ID)
    const keywordGroups = [
        {
            id: 'purchase',
            label: uiData.keyword_purchase || '구매방법',
            items: [uiData.keyword_purchase || '구매방법']
        },
        {
            id: 'wrinkles',
            label: uiData.keyword_wrinkles || '주름',
            items: (uiData.keyword_wrinkles_list || '주름, 잔주름, 눈가주름, 팔자주름').split(', ')
        },
        {
            id: 'whitening',
            label: uiData.keyword_whitening || '미백',
            items: (uiData.keyword_whitening_list || '미백, 기미, 색소침착, 칙칙함').split(', ')
        },
        {
            id: 'acne',
            label: uiData.keyword_acne || '여드름/트러블',
            items: (uiData.keyword_acne_list || '여드름, 뾰루지, 트러블, 흉터, 모공').split(', ')
        },
        {
            id: 'soothing',
            label: uiData.keyword_soothing || '진정/민감성',
            items: (uiData.keyword_soothing_list || '홍조, 진정, 민감성, 피부장벽, 장벽 강화').split(', ')
        },
        {
            id: 'elasticity',
            label: uiData.keyword_elasticity || '탄력/처짐',
            items: (uiData.keyword_elasticity_list || '탄력, 처짐, 리프팅').split(', ')
        },
        {
            id: 'hydration',
            label: uiData.keyword_hydration || '수분/보습',
            items: (uiData.keyword_hydration_list || '수분, 건성피부, 보습').split(', ')
        },
        {
            id: 'usage',
            label: uiData.keyword_usage || '사용법',
            items: (uiData.keyword_usage_list || '사용법, 용량, 병용').split(', ')
        },
        {
            id: 'product',
            label: uiData.keyword_product || '제품 정보',
            items: (uiData.keyword_product_list || '추천, 차이, EXOBIO란, 효능, 번호 의미, 가격, 성분, EXOSOME 3, EXOSOME 5, EXOSOME 7').split(', ')
        },
        {
            id: 'safety',
            label: uiData.keyword_safety || '안전성',
            items: (uiData.keyword_safety_list || '부작용, 안전성').split(', ')
        },
        {
            id: 'red',
            label: uiData.keyword_red || 'RED 라인',
            items: (uiData.keyword_red_list || 'RED 3, RED 5, RED 7').split(', ')
        }
    ];
    
    // HTML 생성
    keywordsContainer.innerHTML = keywordGroups.map(group => `
        <div class="keyword-group">
            <div class="keyword-group-title">${group.label}</div>
            ${group.items.map(item => `
                <button class="keyword-btn" onclick="handleKeywordClick('${item.trim()}')">${item.trim()}</button>
            `).join('')}
        </div>
    `).join('');
    
    console.log(`✅ 키워드 버튼 생성 완료: ${lang}`);
}

// ========================================
// 5. 빠른 답변 버튼 생성
// ========================================
function generateQuickReplies(lang) {
    if (!currentChatbotData || !currentChatbotData.quickReplies) {
        console.warn('⚠️ 챗봇 데이터 또는 quickReplies가 없습니다.');
        return;
    }
    
    const quickRepliesContainer = document.getElementById('quickRepliesContainer');
    if (!quickRepliesContainer) return;
    
    // 빠른 답변 버튼 생성
    quickRepliesContainer.innerHTML = currentChatbotData.quickReplies.map(reply => `
        <button class="quick-reply" onclick="handleQuickReply('${reply}')">${reply}</button>
    `).join('');
    
    console.log(`✅ 빠른 답변 버튼 생성 완료: ${lang}`);
}

// ========================================
// 6. 챗봇 초기 인사말 업데이트
// ========================================
function updateInitialGreeting(lang) {
    const uiData = CHATBOT_I18N[lang].ui;
    const messagesContainer = document.getElementById('chatbotMessages');
    
    if (!messagesContainer) return;
    
    // 기존 메시지 클리어
    messagesContainer.innerHTML = `
        <div class="message">
            <div class="message-avatar">
                <img src="chatbot-avatar-lineart.png" alt="CURETEMBIO">
            </div>
            <div class="message-content">
                <p>${uiData.greeting_1 || '안녕하세요! EXOBIO AI 상담사입니다. 😊'}</p>
                <p>${uiData.greeting_2 || '아래 키워드 버튼을 클릭해서 궁금하신 점을 질문해주세요!'}</p>
            </div>
        </div>
    `;
    
    console.log(`✅ 초기 인사말 업데이트: ${lang}`);
}

// ========================================
// 7. 언어 변경 메인 함수
// ========================================
async function changeLanguage(lang) {
    console.log(`🌐 언어 변경 시작: ${currentLanguage} → ${lang}`);
    
    // 1. 챗봇 데이터 로드
    const chatbotData = await loadChatbotData(lang);
    if (!chatbotData) {
        alert('챗봇 데이터를 불러올 수 없습니다.');
        return;
    }
    
    // 2. 현재 언어 업데이트
    currentLanguage = lang;
    
    // 3. 페이지 메타 태그 업데이트
    updatePageMeta(lang);
    
    // 4. 모든 UI 텍스트 번역
    translateAllElements(lang);
    
    // 5. 키워드 버튼 재생성
    generateKeywordButtons(lang);
    
    // 6. 빠른 답변 버튼 재생성
    generateQuickReplies(lang);
    
    // 7. 초기 인사말 업데이트
    updateInitialGreeting(lang);
    
    // 8. 언어 선택 버튼 텍스트 업데이트
    const languageNames = {
        'ko': '한국어',
        'en': 'English',
        'ja': '日本語',
        'zh-TW': '繁體中文',
        'th': 'ภาษาไทย',
        'vi': 'Tiếng Việt',
        'id': 'Bahasa Indonesia',
        'ms': 'Bahasa Melayu',
        'es': 'Español',
        'fr': 'Français'
    };
    document.getElementById('currentLanguage').textContent = languageNames[lang];
    
    // 9. 언어 선택 활성화 표시
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // 10. 로컬 스토리지에 언어 설정 저장
    localStorage.setItem('exobio_language', lang);
    
    console.log(`✅ 언어 변경 완료: ${lang}`);
}

// ========================================
// 8. 키워드 클릭 핸들러
// ========================================
function handleKeywordClick(keyword) {
    console.log(`🔍 키워드 클릭: ${keyword}`);
    
    if (!currentChatbotData) {
        console.error('❌ 챗봇 데이터가 로드되지 않았습니다.');
        return;
    }
    
    // qaList 또는 qa 배열에서 검색
    const qaArray = currentChatbotData.qaList || currentChatbotData.qa || [];
    
    // 키워드로 Q&A 찾기
    const matchedQA = qaArray.find(item => 
        item.keywords && item.keywords.some(kw => 
            kw.toLowerCase().includes(keyword.toLowerCase()) || 
            keyword.toLowerCase().includes(kw.toLowerCase())
        )
    );
    
    if (matchedQA) {
        displayAnswer(keyword, matchedQA);
    } else {
        displayNoAnswer(keyword);
    }
}

// ========================================
// 9. 빠른 답변 클릭 핸들러
// ========================================
function handleQuickReply(keyword) {
    handleKeywordClick(keyword);
}

// ========================================
// 10. 답변 표시
// ========================================
function displayAnswer(keyword, qaData) {
    const messagesContainer = document.getElementById('chatbotMessages');
    
    // 사용자 질문 추가
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `
        <div class="message-content">
            <p>${keyword}</p>
        </div>
    `;
    messagesContainer.appendChild(userMessage);
    
    // 봇 답변 추가
    const botMessage = document.createElement('div');
    botMessage.className = 'message';
    botMessage.innerHTML = `
        <div class="message-avatar">
            <img src="chatbot-avatar-lineart.png" alt="CURETEMBIO">
        </div>
        <div class="message-content">
            <div>${qaData.answer}</div>
        </div>
    `;
    messagesContainer.appendChild(botMessage);
    
    // 스크롤 맨 아래로
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ========================================
// 11. 답변 없음 표시
// ========================================
function displayNoAnswer(keyword) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const uiData = CHATBOT_I18N[currentLanguage].ui;
    
    // 사용자 질문 추가
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `
        <div class="message-content">
            <p>${keyword}</p>
        </div>
    `;
    messagesContainer.appendChild(userMessage);
    
    // 봇 답변 추가
    const botMessage = document.createElement('div');
    botMessage.className = 'message';
    botMessage.innerHTML = `
        <div class="message-avatar">
            <img src="chatbot-avatar-lineart.png" alt="CURETEMBIO">
        </div>
        <div class="message-content">
            <p>${uiData.no_answer || '죄송합니다. 해당 키워드에 대한 답변을 찾을 수 없습니다.'}</p>
        </div>
    `;
    messagesContainer.appendChild(botMessage);
    
    // 스크롤 맨 아래로
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ========================================
// 12. 페이지 로드 시 초기화
// ========================================
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 EXOBIO AI Chatbot 초기화 시작...');
    
    // 1. 저장된 언어 설정 불러오기
    const savedLanguage = localStorage.getItem('exobio_language') || 'ko';
    
    // 2. 언어 변경 (초기 로드)
    await changeLanguage(savedLanguage);
    
    // 3. 언어 선택 버튼 이벤트
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageButton && languageDropdown) {
        languageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
        
        // 언어 옵션 클릭
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                languageDropdown.classList.remove('active');
            });
        });
        
        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', function() {
            languageDropdown.classList.remove('active');
        });
    }
    
    // 4. 로고 클릭 시 초기화
    const headerLogo = document.getElementById('headerLogo');
    if (headerLogo) {
        headerLogo.addEventListener('click', function() {
            updateInitialGreeting(currentLanguage);
            generateQuickReplies(currentLanguage);
        });
    }
    
    console.log('✅ EXOBIO AI Chatbot 초기화 완료!');
});
