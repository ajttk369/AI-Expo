const techDetails = {
  medical: {
    image: "images/tech-medical-real.jpg",
    alt: "AI medical technology",
    href: "tech-ai-medical.html",
    eyebrow: "AI MEDICAL",
    related: ["cyber", "device", "robotics"],
    thumbnail: "images/video-thumb-medical.png",
    videos: {
      ko: "videos/medical-ko.mp4",
      en: "videos/medical-en.mp4"
    },
    ko: {
      title: "미래 병원을 바꾸는 AI 진단과 케어",
      desc: "AI 영상 판독, 스마트 헬스케어, 병원 운영 자동화까지 의료 현장에서 쓰이는 기술 흐름을 한눈에 확인합니다.",
      location: "HALL A1 / AI Medical Zone",
      favoriteOn: "관심 기술 저장됨",
      favoriteOff: "관심 기술 추가",
      cards: [["AI Diagnostics", "의료 이미지와 환자 데이터를 분석해 진단 속도와 정확도를 높이는 기술을 소개합니다."], ["Smart Healthcare", "웨어러블, 원격 모니터링, 개인 맞춤 건강 관리 솔루션을 체험합니다."], ["Future Hospital", "접수, 병상, 물류, 환자 동선을 AI로 최적화하는 미래 병원 시스템을 살펴봅니다."]],
      scenario: ["AI 진단 데모 확인", "환자 데이터 흐름 이해", "미래 병원 운영 시뮬레이션"],
      programs: ["Opening Keynote: Next AI World", "Future Technology Guided Tour"],
      applications: ["병원", "원격진료", "보험/헬스케어"]
    },
    en: {
      title: "Intelligent Diagnostics and Care for Future Hospitals",
      desc: "Explore applied medical AI, from image reading and smart healthcare to hospital operation automation.",
      location: "HALL A1 / AI Medical Zone",
      favoriteOn: "Saved to Interests",
      favoriteOff: "Add to Interests",
      cards: [["AI Diagnostics", "See how AI analyzes medical images and patient data to improve diagnostic speed and accuracy."], ["Smart Healthcare", "Experience wearables, remote monitoring, and personalized health management solutions."], ["Future Hospital", "Explore AI systems that optimize reception, beds, logistics, and patient journeys."]],
      scenario: ["Check AI diagnosis demos", "Read patient data flow", "Tour future hospital operations"],
      programs: ["Opening Keynote: Next AI World", "Future Technology Guided Tour"],
      applications: ["Hospitals", "Telehealth", "Insurance / Healthcare"]
    }
  },
  robotics: {
    image: "images/tech-robotics-real.jpg",
    alt: "Robotics exhibition",
    href: "tech-robotics.html",
    eyebrow: "ROBOTICS",
    related: ["mobility", "device", "city"],
    thumbnail: "images/video-thumb-robotics.png",
    videos: {
      ko: "videos/robotics-ko.mp4",
      en: "videos/robotics-en.mp4"
    },
    ko: {
      title: "사람과 함께 일하는 차세대 로봇 기술",
      desc: "제조, 서비스, 물류 현장에서 실제로 움직이는 로봇과 AI 자동화 기술을 가까이에서 확인합니다.",
      location: "HALL A2 / Robotics Lab",
      favoriteOn: "관심 기술 저장됨",
      favoriteOff: "관심 기술 추가",
      cards: [["Collaborative Robots", "사람과 같은 공간에서 안전하게 작업하는 협동 로봇의 활용 가능성을 보여줍니다."], ["AI Automation", "비전 인식, 경로 계획, 작업 자동화가 결합된 지능형 자동화 시스템을 소개합니다."], ["Service Robotics", "안내, 배송, 케어, 리테일 등 일상 공간으로 확장되는 서비스 로봇을 다룹니다."]],
      scenario: ["협동 로봇 안전 데모", "피지컬 AI 동작 분석", "서비스 로봇 사용 흐름 체험"],
      programs: ["Robotics Experience Lab", "Future Technology Guided Tour"],
      applications: ["제조", "물류", "서비스/케어"]
    },
    en: {
      title: "Next-Generation Robots Built to Work with People",
      desc: "Get close to robots and AI automation moving across manufacturing, service, and logistics sites.",
      location: "HALL A2 / Robotics Lab",
      favoriteOn: "Saved to Interests",
      favoriteOff: "Add to Interests",
      cards: [["Collaborative Robots", "Discover robots designed to work safely beside people in shared spaces."], ["AI Automation", "Explore intelligent automation combining vision, path planning, and task control."], ["Service Robotics", "Meet robots expanding into guidance, delivery, care, and retail environments."]],
      scenario: ["Watch collaborative robot safety demos", "Analyze physical AI movement", "Try service robot workflows"],
      programs: ["Robotics Experience Lab", "Future Technology Guided Tour"],
      applications: ["Manufacturing", "Logistics", "Service / Care"]
    }
  },
  city: {
    image: "images/tech-city-real.jpg",
    alt: "Smart city technology",
    href: "tech-smart-city.html",
    eyebrow: "SMART CITY",
    related: ["mobility", "cyber", "medical"],
    thumbnail: "images/video-thumb-smart-city.png",
    videos: {
      ko: "videos/smart-city-ko.mp4",
      en: "videos/smart-city-en.mp4"
    },
    ko: {
      title: "도시 전체가 연결되는 AI 인프라",
      desc: "교통, 에너지, 안전, 행정 데이터를 연결해 도시 운영을 더 똑똑하게 만드는 스마트시티 기술 구역입니다.",
      location: "HALL B1 / Smart City Control Room",
      favoriteOn: "관심 기술 저장됨",
      favoriteOff: "관심 기술 추가",
      cards: [["Urban Data Platform", "도시 데이터를 통합하고 분석하는 AI 기반 운영 플랫폼을 소개합니다."], ["Smart Mobility", "교통 흐름 예측, 신호 최적화, 대중교통 연계 기술을 살펴봅니다."], ["Safety Intelligence", "재난, 범죄, 시설 이상 징후를 감지하는 도시 안전 AI를 다룹니다."]],
      scenario: ["도시 데이터 대시보드 확인", "교통/에너지 시나리오 비교", "안전 관제 흐름 체험"],
      programs: ["Smart City Control Room", "Industrial AI Case Forum"],
      applications: ["교통", "에너지", "도시 안전"]
    },
    en: {
      title: "AI Infrastructure for Connected Cities",
      desc: "Explore smart city systems that connect traffic, energy, safety, and public data into intelligent operations.",
      location: "HALL B1 / Smart City Control Room",
      favoriteOn: "Saved to Interests",
      favoriteOff: "Add to Interests",
      cards: [["Urban Data Platform", "See AI-powered platforms that integrate and analyze city data."], ["Smart Mobility", "Explore traffic prediction, signal optimization, and public transit intelligence."], ["Safety Intelligence", "Review AI that detects urban risk signals across safety and infrastructure."]],
      scenario: ["Check city data dashboards", "Compare traffic and energy scenarios", "Experience safety control flows"],
      programs: ["Smart City Control Room", "Industrial AI Case Forum"],
      applications: ["Traffic", "Energy", "Urban Safety"]
    }
  },
  device: {
    image: "images/tech-device-real.jpg",
    alt: "Future AI device",
    href: "tech-future-device.html",
    eyebrow: "FUTURE DEVICE",
    related: ["medical", "robotics", "cyber"],
    thumbnail: "images/video-thumb-future-device.png",
    videos: {
      ko: "videos/future-device-ko.mp4",
      en: "videos/future-device-en.mp4"
    },
    ko: {
      title: "몸에 가까워지는 차세대 AI 디바이스",
      desc: "웨어러블, 온디바이스 AI, 차세대 인터페이스가 생활과 산업 경험을 어떻게 바꾸는지 보여줍니다.",
      location: "HALL C2 / Future Device Studio",
      favoriteOn: "관심 기술 저장됨",
      favoriteOff: "관심 기술 추가",
      cards: [["Wearable AI", "건강, 생산성, 안전을 보조하는 착용형 AI 기기를 소개합니다."], ["On-device Intelligence", "클라우드 없이 빠르게 판단하는 온디바이스 AI 흐름을 살펴봅니다."], ["Next Interface", "음성, 제스처, 센서 기반의 새로운 인터페이스 경험을 다룹니다."]],
      scenario: ["웨어러블 착용 시나리오", "온디바이스 AI 반응 확인", "차세대 인터페이스 체험"],
      programs: ["Future Device Lab", "Creator Device Demo"],
      applications: ["웨어러블", "스마트홈", "산업 안전"]
    },
    en: {
      title: "Next AI Devices That Move Closer to the Body",
      desc: "See how wearables, on-device AI, and next interfaces reshape daily life and industrial experiences.",
      location: "HALL C2 / Future Device Studio",
      favoriteOn: "Saved to Interests",
      favoriteOff: "Add to Interests",
      cards: [["Wearable AI", "Meet wearable AI devices supporting health, productivity, and safety."], ["On-device Intelligence", "Review fast local AI workflows that do not depend on the cloud."], ["Next Interface", "Try voice, gesture, and sensor-based interaction concepts."]],
      scenario: ["Wearable usage scenario", "On-device AI response check", "Next interface experience"],
      programs: ["Future Device Lab", "Creator Device Demo"],
      applications: ["Wearables", "Smart Home", "Industrial Safety"]
    }
  },
  mobility: {
    image: "images/tech-mobility-real.jpg",
    alt: "Future mobility technology",
    href: "tech-mobility.html",
    eyebrow: "MOBILITY",
    related: ["city", "robotics", "cyber"],
    thumbnail: "images/video-thumb-mobility.png",
    videos: {
      ko: "videos/mobility-ko.mp4",
      en: "videos/mobility-en.mp4"
    },
    ko: {
      title: "자율주행과 연결 교통의 새로운 패러다임",
      desc: "자율주행, 커넥티드 교통, 미래 물류까지 AI가 이동 경험을 어떻게 바꾸는지 확인합니다.",
      location: "HALL B2 / Mobility Theater",
      favoriteOn: "관심 기술 저장됨",
      favoriteOff: "관심 기술 추가",
      cards: [["Autonomous Driving", "센서와 AI 판단이 결합된 자율주행 기술을 집중적으로 살펴봅니다."], ["Connected Mobility", "차량, 도로, 도시 데이터가 연결되는 교통 시스템을 소개합니다."], ["Future Logistics", "배송, 창고, 라스트마일 이동을 바꾸는 AI 물류 기술을 다룹니다."]],
      scenario: ["자율주행 판단 흐름 보기", "연결 교통 데이터 확인", "미래 물류 동선 비교"],
      programs: ["Mobility AI Theater", "Industrial AI Case Forum"],
      applications: ["자율주행", "대중교통", "물류"]
    },
    en: {
      title: "A New Paradigm for Autonomous and Connected Transport",
      desc: "See how AI changes movement through autonomous driving, connected transport, and future logistics.",
      location: "HALL B2 / Mobility Theater",
      favoriteOn: "Saved to Interests",
      favoriteOff: "Add to Interests",
      cards: [["Autonomous Driving", "Explore autonomous driving technologies combining sensors and AI decision-making."], ["Connected Mobility", "Understand transport systems connecting vehicles, roads, and city data."], ["Future Logistics", "Review AI logistics that reshape delivery, warehouses, and last-mile movement."]],
      scenario: ["View autonomous decision flows", "Check connected transport data", "Compare future logistics routes"],
      programs: ["Mobility AI Theater", "Industrial AI Case Forum"],
      applications: ["Autonomous Driving", "Public Transport", "Logistics"]
    }
  },
  cyber: {
    image: "images/tech-cyber-real.jpg",
    alt: "Cyber AI security",
    href: "tech-cyber-ai.html",
    eyebrow: "CYBER AI",
    related: ["city", "medical", "device"],
    thumbnail: "images/video-thumb-cyber-ai.png",
    videos: {
      ko: "videos/cyber-ai-ko.mp4",
      en: "videos/cyber-ai-en.mp4"
    },
    ko: {
      title: "생성형 AI 시대의 보안과 데이터 신뢰",
      desc: "데이터 보호, 위협 탐지, 생성형 AI 거버넌스까지 미래 디지털 신뢰를 위한 기술을 탐색합니다.",
      location: "HALL C1 / Cyber AI Trust Zone",
      favoriteOn: "관심 기술 저장됨",
      favoriteOff: "관심 기술 추가",
      cards: [["Threat Detection", "비정상 패턴과 사이버 위협을 빠르게 감지하는 AI 보안을 소개합니다."], ["Data Governance", "민감 데이터 관리와 책임 있는 AI 운영 방식을 살펴봅니다."], ["Generative Defense", "생성형 AI 환경에서 필요한 방어 전략과 검증 기술을 다룹니다."]],
      scenario: ["위협 탐지 데모 확인", "데이터 거버넌스 흐름 보기", "생성형 AI 방어 전략 비교"],
      programs: ["AI Security Briefing", "Data Trust Workshop"],
      applications: ["보안 관제", "데이터 거버넌스", "생성형 AI 검증"]
    },
    en: {
      title: "Security and Data Trust for the Generative AI Era",
      desc: "Explore technologies for future digital trust, from data protection and threat detection to generative AI governance.",
      location: "HALL C1 / Cyber AI Trust Zone",
      favoriteOn: "Saved to Interests",
      favoriteOff: "Add to Interests",
      cards: [["Threat Detection", "Meet AI security that detects abnormal patterns and cyber threats quickly."], ["Data Governance", "Review sensitive data management and responsible AI operations."], ["Generative Defense", "Compare defense strategies and verification methods for generative AI environments."]],
      scenario: ["Check threat detection demos", "View data governance flows", "Compare generative AI defense strategies"],
      programs: ["AI Security Briefing", "Data Trust Workshop"],
      applications: ["Security Operations", "Data Governance", "Generative AI Verification"]
    }
  }
};

const uiCopy = {
  ko: {
    brand: "AI Future Expo",
    back: "기술 목록",
    ticket: "티켓 예매",
    visitInfo: "관람 정보",
    videoPreview: "기술 프리뷰 영상",
    videoDesc: "현재 선택한 언어에 맞는 기술 소개 영상이 재생됩니다.",
    location: "전시장 위치",
    demos: "체험 가능 항목",
    scenario: "체험 시나리오",
    programs: "관련 프로그램",
    applications: "적용 분야",
    faq: "자주 묻는 질문",
    nextAction: "다음 단계",
    related: "같이 보면 좋은 기술",
    duration: "예상 소요",
    audience: "추천 대상",
    reservation: "예약",
    reservationValue: "일부 데모는 현장 대기 또는 프로그램 일정에 따라 운영됩니다.",
    durationValue: "20-30분",
    audienceValue: {
      medical: "의료 관계자 / 병원 운영자 / 헬스케어 스타트업",
      robotics: "제조 담당자 / 물류 운영자 / 로봇 개발자",
      city: "공공기관 / 도시 인프라 담당자 / 데이터 기획자",
      device: "일반 관람객 / 제품 기획자 / 웨어러블 관심 방문객",
      mobility: "모빌리티 기업 / 물류 담당자 / 교통 기술 담당자",
      cyber: "보안 담당자 / 데이터 거버넌스팀 / AI 서비스 운영자"
    },
    faqItems: [["현장 예약이 필요한가요?", "일반 관람은 예약 없이 가능하며, 일부 데모는 현장 대기 또는 세션 일정에 따라 운영됩니다."], ["비즈니스 상담도 가능한가요?", "가능합니다. 관심 기술을 저장하고 티켓 페이지에서 방문 목적을 선택해 일정을 준비하세요."], ["영어 안내가 제공되나요?", "주요 안내와 프로그램 정보는 한국어와 영어 전환을 지원합니다."]],
    ctaTicket: "티켓 예매",
    ctaProgram: "전체 프로그램 보기"
  },
  en: {
    brand: "AI Future Expo",
    back: "Tech List",
    ticket: "Buy Tickets",
    visitInfo: "Visit Info",
    videoPreview: "Technology Preview Video",
    videoDesc: "The preview video switches based on the selected language.",
    location: "Location",
    demos: "Available Experiences",
    scenario: "Experience Scenario",
    programs: "Related Programs",
    applications: "Applications",
    faq: "FAQ",
    nextAction: "Next Action",
    related: "Related Technologies",
    duration: "Duration",
    audience: "Recommended For",
    reservation: "Reservation",
    reservationValue: "Selected demos may run by queue or program schedule.",
    durationValue: "20-30 min",
    audienceValue: {
      medical: "Healthcare teams / hospital operators / healthtech startups",
      robotics: "Manufacturing teams / logistics operators / robot developers",
      city: "Public sector / city infrastructure teams / data planners",
      device: "General visitors / product planners / wearable enthusiasts",
      mobility: "Mobility companies / logistics teams / transport technology teams",
      cyber: "Security teams / data governance teams / AI service operators"
    },
    faqItems: [["Do I need an on-site reservation?", "General viewing is open, while selected demos may run by queue or session schedule."], ["Can I request business consultation?", "Yes. Save your interest and use the ticket page to plan the right visit purpose."], ["Is English guidance available?", "Core page guidance and program information support Korean and English switching."]],
    ctaTicket: "Buy Tickets",
    ctaProgram: "View Full Program"
  }
};

const pageKey = document.body.dataset.tech || "medical";
const detail = techDetails[pageKey] || techDetails.medical;
const lang = localStorage.getItem("expoLanguage") === "en" ? "en" : "ko";
const copy = detail[lang];
const ui = uiCopy[lang];

function setField(name, value) {
  const el = document.querySelector(`[data-field="${name}"]`);
  if (el) el.textContent = value;
}

setField("brand", ui.brand);
setField("back", ui.back);
setField("ticket", ui.ticket);
setField("eyebrow", detail.eyebrow);
setField("title", copy.title);
setField("desc", copy.desc);
document.title = `${copy.title.replace(/<br\s*\/?>/gi, " ")} | AI Future Expo`;

const heroImage = document.querySelector(".detail-hero img");
if (heroImage) {
  heroImage.src = detail.image;
  heroImage.alt = detail.alt;
}

document.querySelectorAll(".detail-grid article").forEach((article, index) => {
  const card = copy.cards[index];
  if (!card) return;
  article.querySelector("h2").textContent = card[0];
  article.querySelector("p").textContent = card[1];
});

const favoriteKey = "favoriteTech";
const saved = () => JSON.parse(localStorage.getItem(favoriteKey) || "[]");
const isSaved = () => saved().includes(pageKey);
const favoriteButton = document.createElement("button");
favoriteButton.className = `favorite-tech${isSaved() ? " active" : ""}`;
favoriteButton.type = "button";
favoriteButton.textContent = isSaved() ? copy.favoriteOn : copy.favoriteOff;
document.querySelector(".detail-copy")?.appendChild(favoriteButton);
favoriteButton.addEventListener("click", () => {
  const next = isSaved() ? saved().filter((item) => item !== pageKey) : [...new Set([...saved(), pageKey])];
  localStorage.setItem(favoriteKey, JSON.stringify(next));
  favoriteButton.classList.toggle("active", next.includes(pageKey));
  favoriteButton.textContent = next.includes(pageKey) ? copy.favoriteOn : copy.favoriteOff;
});

const langSwitch = document.createElement("div");
langSwitch.className = "detail-lang-switch";
langSwitch.setAttribute("aria-label", "Language selector");
langSwitch.innerHTML = `
  <button type="button" data-lang="ko" class="${lang === "ko" ? "active" : ""}">KO</button>
  <button type="button" data-lang="en" class="${lang === "en" ? "active" : ""}">EN</button>
`;
document.querySelector(".detail-links")?.prepend(langSwitch);
langSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (!button) return;
  localStorage.setItem("expoLanguage", button.dataset.lang);
  window.location.reload();
});

function section(title, html) {
  const el = document.createElement("section");
  el.className = "detail-extra";
  el.innerHTML = `<h2>${title}</h2>${html}`;
  return el;
}

const main = document.querySelector("main");
const resolveAsset = (path) => new URL(path, window.location.href).href;
const videoSrc = resolveAsset(detail.videos?.[lang] || detail.videos?.ko);
const thumbnailSrc = resolveAsset(detail.thumbnail);
if (main) {
  main.append(
    section(ui.visitInfo, `<div class="visit-info"><article><strong>${ui.location}</strong><span>${copy.location}</span></article><article><strong>${ui.duration}</strong><span>${ui.durationValue}</span></article><article><strong>${ui.audience}</strong><span>${ui.audienceValue[pageKey]}</span></article></div>`),
    section(ui.videoPreview, `<p class="detail-video-desc">${ui.videoDesc}</p><div class="detail-video" data-video-card><video controls preload="none" playsinline poster="${thumbnailSrc}" aria-label="${ui.videoPreview}"><source src="${videoSrc}" type="video/mp4"></video><button class="video-cover" type="button" aria-label="${ui.videoPreview}" style="--video-thumb:url('${thumbnailSrc}')"><span>${detail.eyebrow}</span><strong>${ui.videoPreview}</strong><em>PLAY</em></button></div>`),
    section(ui.demos, `<div class="demo-list">${copy.cards.map((card, i) => `<article><b>${String(i + 1).padStart(2, "0")}</b><span>${card[0]}</span></article>`).join("")}</div>`),
    section(ui.scenario, `<div class="scenario-list">${copy.scenario.map((item, i) => `<article><strong>${String(i + 1).padStart(2, "0")}</strong><span>${item}</span></article>`).join("")}</div>`),
    section(ui.programs, `<div class="program-links">${copy.programs.map((item) => `<a href="index.html#program">${item}</a>`).join("")}</div>`),
    section(ui.applications, `<div class="application-tags">${copy.applications.map((item) => `<span>${item}</span>`).join("")}</div>`),
    section(ui.faq, `<div class="faq-list">${ui.faqItems.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`),
    section(ui.nextAction, `<div class="detail-actions"><a class="primary" href="ticket.html">${ui.ctaTicket}</a><a href="index.html#program">${ui.ctaProgram}</a></div>`),
    section(ui.related, `<div class="related-grid">${detail.related.map((key) => {
      const item = techDetails[key];
      return `<a href="${item.href}"><img src="${item.image}" alt="${item.alt}"><strong>${item[lang].title}</strong></a>`;
    }).join("")}</div>`)
  );
}

document.querySelectorAll("[data-video-card]").forEach((card) => {
  const video = card.querySelector("video");
  const cover = card.querySelector(".video-cover");
  if (!video || !cover) return;

  cover.addEventListener("click", () => {
    card.classList.add("is-playing");
    video.play().catch(() => {
      video.setAttribute("controls", "controls");
    });
  });
});
