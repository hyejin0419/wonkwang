const appData = {
    // 진료 과목 데이터
    departments: [
        { id: 'internal', name: { ko: '내과', en: 'Internal Medicine' } },
        { id: 'ent', name: { ko: '이비인후과', en: 'Otolaryngology (ENT)' } },
        { id: 'orthopedics', name: { ko: '정형외과', en: 'Orthopedics' } },
        { id: 'dermatology', name: { ko: '피부과', en: 'Dermatology' } },
        { id: 'dentistry', name: { ko: '치과', en: 'Dentistry' } },
        { id: 'ophthalmology', name: { ko: '안과', en: 'Ophthalmology' } }
    ],

    // 증상 데이터
    symptoms: [
        { id: 'fever', icon: '🌡️', name: { ko: '발열 / 몸살', en: 'Fever / Body Ache' }, departmentId: 'internal' },
        { id: 'cough', icon: '🤧', name: { ko: '기침 / 목 아픔', en: 'Cough / Sore Throat' }, departmentId: 'ent' },
        { id: 'stomach', icon: '🤢', name: { ko: '복통 / 소화불량', en: 'Stomachache / Indigestion' }, departmentId: 'internal' },
        { id: 'bone', icon: '🦴', name: { ko: '뼈/관절 통증', en: 'Bone / Joint Pain' }, departmentId: 'orthopedics' },
        { id: 'skin', icon: '🧴', name: { ko: '피부 발진 / 가려움', en: 'Skin Rash / Itching' }, departmentId: 'dermatology' },
        { id: 'tooth', icon: '🦷', name: { ko: '치통', en: 'Toothache' }, departmentId: 'dentistry' },
        { id: 'eye', icon: '👁️', name: { ko: '눈 통증 / 충혈', en: 'Eye Pain / Redness' }, departmentId: 'ophthalmology' }
    ],

    // 병원 더미 데이터 (예: 서울 신촌 지역 가정)
    hospitals: [
        {
            id: 'h1',
            name: { ko: '신촌 연세내과', en: 'Sinchon Yonsei Internal Medicine' },
            departmentId: 'internal',
            address: { ko: '서울 서대문구 신촌로 123', en: '123 Sinchon-ro, Seodaemun-gu, Seoul' },
            phone: '02-123-4567',
            hours: { ko: '평일 09:00 - 18:00 (토, 일 휴무)', en: 'Mon-Fri 09:00 - 18:00 (Closed on Weekends)' },
            englishAvailable: true
        },
        {
            id: 'h2',
            name: { ko: '이화 편안한 내과', en: 'Ewha Comfortable Internal Med' },
            departmentId: 'internal',
            address: { ko: '서울 서대문구 이화여대길 45', en: '45 Ewhayeodae-gil, Seodaemun-gu' },
            phone: '02-987-6543',
            hours: { ko: '평일 09:00 - 19:00, 토 09:00 - 13:00', en: 'Mon-Fri 09:00 - 19:00, Sat 09:00 - 13:00' },
            englishAvailable: false
        },
        {
            id: 'h3',
            name: { ko: '맑은소리 이비인후과', en: 'Clear Sound ENT Clinic' },
            departmentId: 'ent',
            address: { ko: '서울 마포구 신촌로 88', en: '88 Sinchon-ro, Mapo-gu, Seoul' },
            phone: '02-333-2222',
            hours: { ko: '평일 09:30 - 18:30', en: 'Mon-Fri 09:30 - 18:30' },
            englishAvailable: true
        },
        {
            id: 'h4',
            name: { ko: '튼튼 정형외과', en: 'Teunteun Orthopedics' },
            departmentId: 'orthopedics',
            address: { ko: '서울 서대문구 연세로 12', en: '12 Yonsei-ro, Seodaemun-gu' },
            phone: '02-444-5555',
            hours: { ko: '평일 09:00 - 18:00', en: 'Mon-Fri 09:00 - 18:00' },
            englishAvailable: false
        },
        {
            id: 'h5',
            name: { ko: '고운 피부과', en: 'Goun Dermatology' },
            departmentId: 'dermatology',
            address: { ko: '서울 마포구 백범로 5', en: '5 Baekbeom-ro, Mapo-gu' },
            phone: '02-555-6666',
            hours: { ko: '평일 10:00 - 19:00', en: 'Mon-Fri 10:00 - 19:00' },
            englishAvailable: true
        }
    ],

    // 병원 이용 가이드 데이터
    guides: [
        {
            step: 1,
            title: { ko: '접수하기', en: 'Reception' },
            desc: { 
                ko: '병원에 도착하면 접수처(데스크)로 가서 외국인 등록증이나 여권, 건강보험증을 제시하고 처음 왔다고 말합니다. 초진 기록지를 작성해야 할 수도 있습니다.', 
                en: 'Upon arrival, go to the reception desk. Present your Alien Registration Card, Passport, or National Health Insurance Card. Say it is your first time. You might need to fill out a medical history form.' 
            }
        },
        {
            step: 2,
            title: { ko: '대기하기', en: 'Waiting' },
            desc: { 
                ko: '접수 후 대기실에서 기다립니다. 화면이나 간호사가 이름을 부르면 진료실로 들어갑니다.', 
                en: 'Wait in the waiting area after reception. Enter the doctor\'s office when your name is called or appears on the screen.' 
            }
        },
        {
            step: 3,
            title: { ko: '진료받기', en: 'Consultation' },
            desc: { 
                ko: '의사에게 증상을 자세히 설명합니다. 언제부터 아팠는지, 어디가 아픈지 정확히 말하는 것이 중요합니다.', 
                en: 'Explain your symptoms to the doctor in detail. It is important to say when the pain started and exactly where it hurts.' 
            }
        },
        {
            step: 4,
            title: { ko: '수납 및 처방전 받기', en: 'Payment & Prescription' },
            desc: { 
                ko: '진료가 끝나면 다시 접수처로 가서 진료비를 결제(수납)합니다. 약이 필요한 경우 처방전(Prescription)을 받습니다.', 
                en: 'After consultation, go back to the reception to pay the medical bill. If you need medication, you will receive a prescription.' 
            }
        },
        {
            step: 5,
            title: { ko: '약국 가기', en: 'Pharmacy' },
            desc: { 
                ko: '병원 주변에 있는 약국(Pharmacy)에 가서 처방전을 제출하고 약을 구입합니다. 약사의 복약 지도를 잘 듣습니다.', 
                en: 'Go to a nearby pharmacy and submit your prescription to buy medicine. Listen carefully to the pharmacist\'s instructions on how to take the medicine.' 
            }
        }
    ],

    // 상황별 회화 표현 데이터
    conversations: [
        {
            category: { ko: '접수할 때', en: 'At Reception' },
            phrases: [
                { ko: "처음 왔어요.", en: "It's my first time here." },
                { ko: "예약했습니다.", en: "I have an appointment." },
                { ko: "건강보험 적용이 되나요?", en: "Does National Health Insurance cover this?" }
            ]
        },
        {
            category: { ko: '증상을 설명할 때', en: 'Explaining Symptoms' },
            phrases: [
                { ko: "머리가 아파요.", en: "I have a headache." },
                { ko: "열이 나고 목이 아파요.", en: "I have a fever and a sore throat." },
                { ko: "어제부터 속이 안 좋아요.", en: "I've had an upset stomach since yesterday." },
                { ko: "여기가 아파요.", en: "It hurts right here. (Pointing)" }
            ]
        },
        {
            category: { ko: '약국에서', en: 'At the Pharmacy' },
            phrases: [
                { ko: "이 처방전대로 약 지어주세요.", en: "Please fill this prescription." },
                { ko: "식후에 먹나요?", en: "Do I take this after meals?" },
                { ko: "부작용이 있나요?", en: "Are there any side effects?" }
            ]
        }
    ],

    // 응급 상황 데이터
    emergency: {
        number: '119',
        desc: {
            ko: '생명이 위급한 상황이거나 거동이 불가능할 경우 즉시 119로 전화하세요. 119는 외국어 통역 서비스를 지원합니다.',
            en: 'In case of a life-threatening emergency or if you cannot move, call 119 immediately. 119 provides foreign language interpretation services.'
        },
        erInfo: {
            ko: '야간이나 주말에 급히 진료가 필요한 경우 대학병원 등의 응급실(Emergency Room)을 이용할 수 있습니다. 단, 일반 진료보다 비용이 비쌉니다.',
            en: 'If you urgently need medical care at night or on weekends, you can use the Emergency Room at a university hospital. However, it is more expensive than regular care.'
        }
    },
    
    // 외부 앱 추천 (선택적)
    pharmacyApps: [
        {
            name: 'Goodoc (굿닥)',
            desc: { ko: '내 주변 병원, 약국 찾기 앱', en: 'App for finding nearby clinics and pharmacies' }
        },
        {
            name: 'Papago (파파고)',
            desc: { ko: '정확한 의료 통역을 위한 번역 앱', en: 'Translation app for accurate medical interpretation' }
        }
    ]
};
