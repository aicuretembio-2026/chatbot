# EXOBIO AI 피부상담사 - 다국어 챗봇

> **최종 업데이트**: 2026-02-21  
> **버전**: 3.0.0 (다국어 키워드 버튼 완전 지원)  
> **상태**: ✅ 배포 준비 완료

---

## 🎯 프로젝트 개요

EXOBIO AI 피부상담사는 **10개 언어**를 지원하는 다국어 챗봇입니다.  
사용자의 피부 고민(주름, 미백, 여드름, 탄력 등)에 대해 **43개의 키워드 버튼**으로 빠른 답변을 제공합니다.

---

## ✅ 주요 수정 사항 (2026-02-21)

### 🔧 해결된 문제

1. **키워드 버튼이 표시되지 않는 문제**
   - ❌ 이전: HTML에 하드코딩된 한국어 버튼만 표시
   - ✅ 해결: 동적 생성으로 변경, 모든 언어 지원

2. **언어 전환 시 키워드가 번역되지 않는 문제**
   - ❌ 이전: 언어를 바꿔도 한국어 버튼만 표시
   - ✅ 해결: 언어별 `quickReplyKeywords` 배열 추가, 자동 번역

3. **중국어 언어 코드 불일치**
   - ❌ 이전: `zh` 폴더가 없어 중국어 로드 실패
   - ✅ 해결: `zh-TW`로 수정 (繁體中文)

---

## 📁 파일 구조

```
프로젝트 루트/
│
├── index.html                      ✅ 메인 HTML (다국어 지원)
├── chatbot-data.js                 ✅ 한국어 Q&A 데이터 (43 키워드)
├── chatbot-avatar-lineart.png      ✅ 챗봇 아바타 이미지
│
├── translations/                   ✅ 다국어 번역 폴더
│   ├── en/chatbot-data.js          🇺🇸 영어 (43 keywords)
│   ├── ja/chatbot-data.js          🇯🇵 일본어 (43 keywords)
│   ├── zh-TW/chatbot-data.js       🇹🇼 중국어 번체 (43 keywords)
│   ├── es/chatbot-data.js          🇪🇸 스페인어 (43 keywords)
│   ├── fr/chatbot-data.js          🇫🇷 프랑스어 (43 keywords)
│   ├── th/chatbot-data.js          🇹🇭 태국어 (43 keywords)
│   ├── vi/chatbot-data.js          🇻🇳 베트남어 (43 keywords)
│   ├── id/chatbot-data.js          🇮🇩 인도네시아어 (43 keywords)
│   └── ms/chatbot-data.js          🇲🇾 말레이어 (43 keywords)
│
├── test-keywords-ko.html           🧪 한국어 키워드 테스트
└── test-multilingual.html          🧪 다국어 전환 테스트
```

---

## 🌐 지원 언어

| 언어 | 코드 | 키워드 | Q&A | 상태 |
|------|------|--------|-----|------|
| 🇰🇷 한국어 | `ko` | 43개 | 32개 | ✅ |
| 🇺🇸 English | `en` | 43개 | 32개 | ✅ |
| 🇯🇵 日本語 | `ja` | 43개 | 32개 | ✅ |
| 🇹🇼 繁體中文 | `zh-TW` | 43개 | 32개 | ✅ |
| 🇪🇸 Español | `es` | 43개 | 32개 | ✅ |
| 🇫🇷 Français | `fr` | 43개 | 32개 | ✅ |
| 🇹🇭 ภาษาไทย | `th` | 43개 | 32개 | ✅ |
| 🇻🇳 Tiếng Việt | `vi` | 43개 | 32개 | ✅ |
| 🇮🇩 Indonesia | `id` | 43개 | 32개 | ✅ |
| 🇲🇾 Melayu | `ms` | 43개 | 32개 | ✅ |

**총 번역량**: 
- 키워드: 430개 (43 × 10개 언어)
- Q&A: 320개 (32 × 10개 언어)
- **합계: 750개 항목**

---

## 🔧 기술 구현

### 1. 동적 키워드 버튼 생성

**이전 방식 (하드코딩)**:
```html
<!-- ❌ 문제: 한국어만 지원, 번역 불가 -->
<button class="quick-reply" data-query="주름">💫 주름</button>
<button class="quick-reply" data-query="미백">💎 미백</button>
```

**새로운 방식 (동적 생성)**:
```javascript
// ✅ 해결: 언어별 자동 생성
function updateKeywordButtons() {
    const currentData = window.CHATBOT_DATA;
    const container = document.getElementById('keywordsContainer');
    
    // 기존 버튼 제거
    container.innerHTML = '';
    
    // 새 버튼 생성
    currentData.quickReplyKeywords.forEach(keyword => {
        const button = document.createElement('button');
        button.className = 'quick-reply';
        button.setAttribute('data-query', keyword.query);
        button.textContent = keyword.label;
        container.appendChild(button);
    });
}
```

### 2. quickReplyKeywords 배열 구조

**각 언어 파일 (chatbot-data.js)**:
```javascript
const CHATBOT_DATA = {
    version: '1.0.0',
    language: 'ko', // 또는 'en', 'ja', 'zh-TW' 등
    
    // Q&A 데이터
    qaList: [ ... ],
    
    // 🔥 43개 키워드 버튼 (NEW!)
    quickReplyKeywords: [
        { label: '구매방법', query: '구매방법' },
        { label: '주름', query: '주름' },
        { label: '미백', query: '미백' },
        // ... (총 43개)
    ]
};
```

### 3. 언어 전환 플로우

```
1. 사용자가 언어 선택 (예: English)
   ↓
2. loadLanguageData('en') 실행
   ↓
3. translations/en/chatbot-data.js 로드
   ↓
4. CHATBOT_DATA 교체
   ↓
5. updateKeywordButtons() 호출
   ↓
6. 영어 키워드 버튼 43개 생성 ✅
```

---

## 🧪 테스트 방법

### 로컬 테스트

1. **한국어 키워드 테스트**:
   ```bash
   open test-keywords-ko.html
   ```
   - ✅ 43개 키워드 버튼 생성 확인
   - ✅ 각 버튼 클릭 시 label/query 확인

2. **다국어 전환 테스트**:
   ```bash
   open test-multilingual.html
   ```
   - ✅ 10개 언어 전환 확인
   - ✅ 각 언어별 43개 키워드 확인
   - ✅ 버튼 텍스트 번역 확인

### 배포 후 테스트

1. **https://chatbot.curetembio.xyz/** 접속
2. **한국어 (기본)**:
   - ✅ 페이지 로드 시 43개 한국어 키워드 표시
   - ✅ "주름" 클릭 → EXOSOME 5 답변
   - ✅ "구매방법" 클릭 → WeChat ID 답변

3. **English (영어 전환)**:
   - ✅ 언어 드롭다운 → English 선택
   - ✅ 43개 영어 키워드로 변경 (Wrinkles, Whitening 등)
   - ✅ "Wrinkles" 클릭 → 영어 답변 표시
   - ✅ 콘솔: "✅ en language data loading done"

4. **繁體中文 (중국어 번체)**:
   - ✅ 언어 드롭다운 → 繁體中文 선택
   - ✅ 43개 중국어 키워드로 변경
   - ✅ "皺紋" 클릭 → 중국어 답변 표시

---

## 📊 43개 키워드 구성

| 카테고리 | 개수 | 예시 |
|----------|------|------|
| **구매방법** | 1 | 구매방법 |
| **주름/노화** | 5 | 주름, 잔주름, 깊은주름, 눈가주름, 팔자주름 |
| **미백/색소** | 4 | 미백, 기미, 색소침착, 칙칙함 |
| **여드름/트러블** | 5 | 여드름, 뾰루지, 트러블, 흉터, 모공 |
| **진정/민감성** | 5 | 홍조, 진정, 민감성, 피부장벽, 장벽강화 |
| **탄력/처짐** | 3 | 탄력, 처짐, 리프팅 |
| **수분/보습** | 3 | 수분, 건성피부, 보습 |
| **사용법** | 3 | 사용법, 용량, 병용 |
| **제품 정보** | 7 | 추천, 차이, EXOBIO란, 효능, 번호의미, 가격, 성분 |
| **EXOSOME 제품** | 3 | EXOSOME 3, EXOSOME 5, EXOSOME 7 |
| **안전성** | 2 | 부작용, 안전성 |
| **RED 제품** | 3 | RED 3, RED 5, RED 7 |
| **합계** | **43** | |

---

## 🚀 배포 방법

### 방법 1: Publish 탭 (권장 ✅)

1. **Publish 탭** 클릭
2. **Deploy** 버튼 클릭
3. 1~2분 대기
4. 배포 완료! ✅

### 방법 2: GitHub Pages (수동)

1. **파일 업로드**:
   - `index.html`
   - `chatbot-data.js`
   - `chatbot-avatar-lineart.png`
   - `translations/` 폴더 전체

2. **Commit & Push**:
   ```bash
   git add .
   git commit -m "✅ 다국어 키워드 버튼 완전 지원 (v3.0.0)"
   git push origin main
   ```

3. **GitHub Pages 활성화**:
   - Settings → Pages
   - Source: `main` (root)
   - Save

---

## ⚠️ 주의사항

1. **파일명 정확성**:
   - ❌ `translations/zh/` (없음)
   - ✅ `translations/zh-TW/` (있음)

2. **quickReplyKeywords 필수**:
   - 모든 언어 파일에 `quickReplyKeywords` 배열 필요
   - 각 언어별 43개 키워드 필수

3. **구조 통일**:
   ```javascript
   // ✅ 올바른 구조
   quickReplyKeywords: [
       { label: '표시 텍스트', query: '검색 키워드' }
   ]
   
   // ❌ 잘못된 구조
   quickReplies: [
       { text: '표시 텍스트', query: '검색 키워드' }
   ]
   ```

---

## 📈 프로젝트 진행 상황

### ✅ 완료된 작업

- [x] 한국어 Q&A 데이터 (32개) 완성
- [x] 9개 언어 번역 완료 (en, ja, zh-TW, es, fr, th, vi, id, ms)
- [x] 43개 키워드 버튼 정의 (모든 언어)
- [x] HTML 하드코딩 제거 → 동적 생성 전환
- [x] `quickReplyKeywords` 배열 추가 (10개 언어)
- [x] 언어 전환 시 키워드 자동 번역
- [x] 중국어 언어 코드 수정 (zh → zh-TW)
- [x] 로컬 테스트 파일 생성

### 🎯 다음 단계

- [ ] **배포 테스트** (시크릿 모드)
- [ ] **최종 사용자 테스트**
- [ ] **성능 최적화** (필요 시)

---

## 🔗 관련 링크

- **라이브 사이트**: https://chatbot.curetembio.xyz/
- **GitHub 리포지토리**: https://github.com/aicuretembio-2026/chatbot

---

## 📝 버전 히스토리

### v3.0.0 (2026-02-21) - 현재
- ✅ 다국어 키워드 버튼 완전 지원
- ✅ 동적 키워드 생성 구현
- ✅ 모든 언어 파일에 quickReplyKeywords 추가

### v2.1.0 (2026-02-21)
- Standalone HTML 버전
- 언어 전환 UI 추가

### v2.0.0 (2026-02-19)
- 9개 언어 번역 완료
- 총 320개 Q&A 완성

### v1.0.0 (2026-02-14)
- 한국어 챗봇 기본 기능 완성
- 32개 Q&A 항목

---

## 👨‍💻 개발자 정보

**개발**: AI Assistant  
**프로젝트**: EXOBIO AI 피부상담사 다국어 챗봇  
**마지막 업데이트**: 2026년 2월 21일

---

## 📞 문의

**이메일**: curetembio@gmail.com  
**Instagram**: 
- [@exobio.global](https://www.instagram.com/exobio.global)
- [@exobio.asia.official](https://www.instagram.com/exobio.asia.official)
- [@exobio.jp](https://www.instagram.com/exobio.jp)
- [@exobio.ko](https://www.instagram.com/exobio.ko)

---

**© 2024 CURETEMBIO. All rights reserved.**
