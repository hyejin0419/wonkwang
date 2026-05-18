// Global State
let currentLang = 'ko'; // 'ko' or 'en'
let currentScreen = 'splash-screen';
let selectedDepartmentId = null;
let selectedHospitalId = null;

// UI Text Dictionary
const uiText = {
    'txt-home-title': { ko: '증상 선택', en: 'Select Symptom' },
    'txt-greeting': { ko: '어디가 아프신가요?', en: 'Where does it hurt?' },
    'txt-instruction': { ko: '증상을 선택하면 적절한 진료 과목을 안내해 드립니다.', en: 'Select your symptom to find the right medical department.' },
    'txt-guide-btn': { ko: '병원 이용 가이드', en: 'How to use hospital' },
    'txt-guide-desc': { ko: '접수부터 약국까지 전체 과정 안내', en: 'Step-by-step procedure guide' },
    'txt-conv-btn': { ko: '상황별 회화', en: 'Medical Phrases' },
    'txt-conv-desc': { ko: '진료 시 유용한 한국어 표현', en: 'Useful Korean medical phrases' },
    'txt-emergency-btn': { ko: '응급 상황 (119)', en: 'Emergency (119)' },
    'txt-result-title': { ko: '추천 진료과', en: 'Recommended' },
    'txt-rec-dept': { ko: '추천 진료과', en: 'Recommended Department' },
    'txt-nearby': { ko: '내 주변 추천 병원', en: 'Nearby Hospitals' },
    'txt-detail-title': { ko: '병원 상세', en: 'Hospital Detail' },
    'txt-get-directions': { ko: '길찾기 (지도 앱 연결)', en: 'Get Directions' },
    'txt-guide-title': { ko: '이용 절차 안내', en: 'Procedure Guide' },
    'txt-conv-title': { ko: '상황별 의료 회화', en: 'Medical Phrases' },
    'txt-emerg-title': { ko: '응급 상황 대처', en: 'Emergency Guide' },
    'txt-call-now': { ko: '지금 전화하기', en: 'Call Now' },
    'txt-er-title': { ko: '<i class="fa-solid fa-hospital-user"></i> 응급실 이용 안내', en: '<i class="fa-solid fa-hospital-user"></i> Emergency Room Info' },
    'txt-nav-home': { ko: '홈', en: 'Home' },
    'txt-nav-guide': { ko: '가이드', en: 'Guide' },
    'txt-nav-conv': { ko: '회화', en: 'Phrases' }
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial data load is ready
});

// Set Language
function setLanguage(lang) {
    currentLang = lang;
    
    // Update all static UI texts
    for (const [id, texts] of Object.entries(uiText)) {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = texts[lang];
        }
    }

    // Load dynamic data based on language
    renderSymptoms();
    renderGuides();
    renderConversations();
    renderEmergency();

    // Show Home screen and Bottom Nav
    document.getElementById('bottom-nav').style.display = 'flex';
    navigate('home-screen');
}

// Navigation Logic
function navigate(screenId) {
    // Hide current screen
    const current = document.getElementById(currentScreen);
    if (current) current.classList.remove('active');

    // Show new screen
    const next = document.getElementById(screenId);
    if (next) {
        // Reset scroll position
        next.scrollTop = 0;
        next.classList.add('active');
        currentScreen = screenId;
    }

    // Update bottom nav active state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if (screenId === 'home-screen') document.getElementById('nav-home').classList.add('active');
    if (screenId === 'guide-screen') document.getElementById('nav-guide').classList.add('active');
    if (screenId === 'conversation-screen') document.getElementById('nav-conv').classList.add('active');
}

// Render Functions
function renderSymptoms() {
    const container = document.getElementById('symptoms-container');
    container.innerHTML = '';

    appData.symptoms.forEach(symptom => {
        const div = document.createElement('div');
        div.className = 'glass symptom-card';
        div.onclick = () => selectSymptom(symptom);
        
        div.innerHTML = `
            <div class="symptom-icon">${symptom.icon}</div>
            <div class="symptom-name">${symptom.name[currentLang]}</div>
        `;
        container.appendChild(div);
    });
}

function selectSymptom(symptom) {
    selectedDepartmentId = symptom.departmentId;
    
    // Find department name
    const dept = appData.departments.find(d => d.id === selectedDepartmentId);
    document.getElementById('result-dept-name').innerText = dept.name[currentLang];

    renderHospitalList(selectedDepartmentId);
    navigate('result-screen');
}

function renderHospitalList(deptId) {
    const container = document.getElementById('hospital-list-container');
    container.innerHTML = '';

    const filtered = appData.hospitals.filter(h => h.departmentId === deptId);

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; color: var(--text-muted);">${currentLang === 'ko' ? '주변에 해당하는 병원이 없습니다.' : 'No hospitals found nearby.'}</p>`;
        return;
    }

    filtered.forEach(h => {
        const div = document.createElement('div');
        div.className = 'glass hospital-card';
        div.onclick = () => openHospitalDetail(h);
        
        const engTag = h.englishAvailable 
            ? `<span class="tag" style="margin-top:0;">${currentLang === 'ko' ? '영어 가능' : 'English Available'}</span>` 
            : '';

        div.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <div class="hospital-name">${h.name[currentLang]}</div>
                ${engTag}
            </div>
            <div class="hospital-info"><i class="fa-solid fa-location-dot"></i> ${h.address[currentLang]}</div>
            <div class="hospital-info"><i class="fa-regular fa-clock"></i> ${h.hours[currentLang]}</div>
        `;
        container.appendChild(div);
    });
}

function openHospitalDetail(hospital) {
    selectedHospitalId = hospital.id;
    
    document.getElementById('detail-name').innerText = hospital.name[currentLang];
    document.getElementById('detail-address').innerText = hospital.address[currentLang];
    document.getElementById('detail-phone').innerText = hospital.phone;
    document.getElementById('detail-hours').innerText = hospital.hours[currentLang];
    
    const engTag = document.getElementById('detail-english');
    if (hospital.englishAvailable) {
        engTag.style.display = 'inline-block';
        engTag.innerText = currentLang === 'ko' ? '영어 가능' : 'English Available';
    } else {
        engTag.style.display = 'none';
    }

    navigate('detail-screen');
}

function renderGuides() {
    const container = document.getElementById('guide-container');
    container.innerHTML = '';

    appData.guides.forEach(g => {
        const div = document.createElement('div');
        div.className = 'guide-step';
        div.innerHTML = `
            <div class="step-number">${g.step}</div>
            <div class="step-content glass">
                <h4>${g.title[currentLang]}</h4>
                <p>${g.desc[currentLang]}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderConversations() {
    const container = document.getElementById('conversation-container');
    container.innerHTML = '';

    appData.conversations.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.className = 'conv-category';
        
        const title = document.createElement('div');
        title.className = 'conv-category-title';
        title.innerText = cat.category[currentLang];
        catDiv.appendChild(title);

        cat.phrases.forEach(phrase => {
            const card = document.createElement('div');
            card.className = 'glass phrase-card';
            
            // Define main and sub based on selected language.
            // If English is selected, show English prominently, but always show Korean.
            // Since it's about learning/using Korean, we should probably always show both.
            const mainText = phrase.ko;
            const subText = phrase.en;

            card.innerHTML = `
                <div class="phrase-text">
                    <div class="ko">${mainText}</div>
                    <div class="en">${subText}</div>
                </div>
                <button class="speak-btn" onclick="speakKorean('${mainText.replace(/'/g, "\\'")}')">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            `;
            catDiv.appendChild(card);
        });

        container.appendChild(catDiv);
    });
}

function renderEmergency() {
    document.getElementById('emerg-desc').innerText = appData.emergency.desc[currentLang];
    document.getElementById('er-info').innerText = appData.emergency.erInfo[currentLang];
}

// Text-to-Speech for Korean phrases
function speakKorean(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9; // slightly slower for clarity
        window.speechSynthesis.speak(utterance);
    } else {
        alert(currentLang === 'ko' ? 'TTS 기능을 지원하지 않는 브라우저입니다.' : 'TTS is not supported in your browser.');
    }
}
