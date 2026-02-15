# 🤖 EXOBIO AI 상담사 - 독립 챗봇 페이지

## 🎉 **완성! (2026-02-14)**

---

## 📋 **파일 정보**

**파일명**: `chatbot-standalone.html`  
**배포 URL**: `chatbot.curetembio.xyz`  
**버전**: v5.0.0 (Standalone)

---

## ✨ **주요 특징**

### 1. **독립 페이지**
- 별도 URL로 운영 가능
- 메인 페이지와 분리
- 전체 화면 레이아웃

### 2. **10개 언어 지원**
- 한국어 (기본)
- English
- 日本語
- 中文
- ภาษาไทย
- Tiếng Việt
- Bahasa Indonesia
- Bahasa Melayu
- Español
- Français

### 3. **디자인**
- deploy-v26.0/index.html 스타일 유지
- 네온 핑크 + 블랙 테마
- 로고 네온 테두리 (깜빡임 효과)
- 다이슨 스타일

### 4. **47개 키워드**
- 주름/노화 (5개)
- 미백/기미 (4개)
- 여드름/트러블 (5개)
- 진정/민감성 (5개)
- 탄력/처짐 (3개)
- 수분/보습 (3개)
- 모공 (1개)
- 사용법 (3개)
- 제품 정보 (10개)
- 안전성 (4개)
- RED 라인 (3개)

### 5. **비율**
- **PC**: 대화 70%, 키워드 30%
- **모바일**: 대화 65%, 키워드 35%

### 6. **CURETEMBIO 공식 INFO**
- index.html의 Footer와 동일
- 인스타그램 (4개)
- 공식 채널 (YouTube, X, 小红书, TikTok)
- 공식 사이트 (KR, EN, JP, CN)
- 공식 쇼핑몰 (JP, KR, EN)
- AI 피부진단 사이트
- 연락처

---

## 🚀 **테스트 방법**

### **로컬 테스트**
```bash
cd deploy-v26.0
python -m http.server 8000
```

**확인 URL:**
- http://localhost:8000/chatbot-standalone.html

### **캐시 새로고침**
- Windows/Linux: **Ctrl + Shift + R**
- Mac: **Cmd + Shift + R**

### **확인 사항**
1. ✅ 상단 헤더: 로고 + 타이틀 + 언어 선택
2. ✅ 로고 네온 테두리 (깜빡임)
3. ✅ 언어 버튼 클릭 → 10개 언어 목록
4. ✅ 47개 키워드 버튼 중앙 정렬
5. ✅ 키워드 클릭 → 답변 출력
6. ✅ 대화창 스크롤 (긴 답변)
7. ✅ 하단 CURETEMBIO INFO
8. ✅ 모바일 반응형

---

## 📱 **모바일 최적화**

### **PC (≥769px)**
- 헤더: 좌우 배치
- 챗봇: 1400px 최대 너비
- 대화: 70%
- 키워드: 30%

### **모바일 (≤768px)**
- 헤더: 상하 배치
- 챗봇: 전체 너비
- 대화: 65%
- 키워드: 35%

---

## 🎨 **디자인 요소**

### **컬러**
- 네온 핑크: `#FF1744`
- 네온 청록: `#00BCD4`
- 딥 블랙: `#0a0a0a`
- 매트 블랙: `#1a1a1a`
- 라이트 그레이: `#b0b0b0`

### **폰트**
- 타이틀: 900 weight, 그라데이션
- 본문: -apple-system 계열

### **효과**
- 로고 네온 글로우 (2초 애니메이션)
- 버튼 hover (scale 1.05)
- 메시지 fadeIn 애니메이션
- 타이핑 인디케이터

---

## 🌐 **배포 방법**

### **1. 파일 업로드**
```
chatbot-standalone.html
js/chatbot-data.js
images/chatbot-avatar-new.png
```

### **2. DNS 설정**
```
chatbot.curetembio.xyz → chatbot-standalone.html
```

### **3. 서버 설정 (Nginx 예시)**
```nginx
server {
    listen 80;
    server_name chatbot.curetembio.xyz;
    root /var/www/deploy-v26.0;
    index chatbot-standalone.html;
    
    location / {
        try_files $uri $uri/ /chatbot-standalone.html;
    }
}
```

---

## 📊 **파일 구조**

```
deploy-v26.0/
├── chatbot-standalone.html  (독립 챗봇)
├── js/
│   └── chatbot-data.js      (Q&A 데이터)
└── images/
    └── chatbot-avatar-new.png (로고)
```

---

## 🔧 **커스터마이징**

### **언어 추가**
```html
<div class="language-option" data-lang="de">Deutsch</div>
```

### **비율 변경**
```css
/* PC */
.chatbot-messages { height: 75%; }  /* 대화 */
.chatbot-keywords { height: 25%; }  /* 키워드 */

/* 모바일 */
@media (max-width: 768px) {
    .chatbot-messages { height: 70%; }
    .chatbot-keywords { height: 30%; }
}
```

### **로고 변경**
```html
<img src="images/your-logo.png" alt="LOGO" class="logo">
```

---

## 📈 **버전 히스토리**

- **v5.0.0 (2026-02-14)**: 독립 챗봇 페이지 생성 🎉
  - 10개 언어 선택 추가
  - 전체 화면 레이아웃
  - CURETEMBIO INFO 통합
  - 네온 로고 효과

---

## 🎯 **다음 단계**

1. **✅ 로컬 테스트**
   - 위 URL 접속
   - 모든 기능 확인

2. **✅ 서버 업로드**
   - chatbot-standalone.html
   - js/chatbot-data.js
   - images/chatbot-avatar-new.png

3. **✅ DNS 설정**
   - chatbot.curetembio.xyz

4. **✅ 최종 확인**
   - 실제 URL 접속 테스트

---

## 📧 **연락처**

- 이메일: curetembio@gmail.com
- AI 피부 진단: https://curetembio.xyz/

---

**🎉 EXOBIO AI 상담사 독립 페이지 완성!** 🎉
