import { Link } from 'react-router-dom'
import heroPhoto from '../assets/hero-deadlift.jpg'
import poseSquat from '../assets/pose-squat.jpg'
import poseDeadlift from '../assets/pose-deadlift.jpg'
import poseBenchPress from '../assets/pose-benchpress.jpg'
import ctaPhoto from '../assets/cta-bench.jpg'
import arrowRightIcon from '../assets/icons/arrow-right-orange.svg'
import targetIcon from '../assets/icons/target.svg'
import chevronRightIcon from '../assets/icons/chevron-right.svg'
import shieldAlertIcon from '../assets/icons/shield-alert.svg'
import './Home.css'

const TICKER_ITEMS = [
  'FW. FIRST WORKOUT',
  '제대로 시작하는 웨이트 트레이닝',
  'TRAJECTORY OF STRENGTH',
  '01. SQUAT',
  '02. BENCH PRESS',
  '03. DEADLIFT',
  'SAFE & STEADY PROGRESS',
]

const GUIDE_STEPS = [
  {
    number: '01',
    tag: '필수 선행 조건',
    title: '운동 전 관절 정렬',
    desc: '골반과 척추의 정렬이 무너지면 부상으로 이어집니다. 거울을 보며 고관절의 정지선을 정렬하는 훈련을 우선 수행합니다.',
  },
  {
    number: '02',
    tag: '기초 이론',
    title: '바른 파지법과 바벨 궤적',
    desc: '손바닥에 바벨이 수평으로 얹어져야 손목 관절에 가해지는 모멘트가 최소화됩니다. 바벨은 중력 방향인 수직으로만 통제되어야 안전합니다.',
  },
  {
    number: '03',
    tag: '실전 트레이닝',
    title: '무게가 아닌 정확한 수축',
    desc: '초보자의 뇌는 근육을 연결하는 힘이 약합니다. 빈 바벨로 15회 완벽히 반복하여 타겟 머슬을 인지하는 것부터가 시작입니다.',
  },
]

const ROUTINES = [
  {
    level: 'LEVEL. BEGINNER (초급)',
    title: '전신 무분할 입문 루틴',
    subtitle: '가장 표준적인 복합 관절 운동 구성',
    time: '45분',
    target: '전신 협응력 강화',
  },
  {
    level: 'LEVEL. NOVICE (입문)',
    title: '여성을 위한 기초 웨이트',
    subtitle: '코어 안정성과 하체 활성도 최적화',
    time: '40분',
    target: '둔근 및 척추기립근',
  },
  {
    level: 'LEVEL. INTERMEDIATE (중급 전단계)',
    title: '근비대 볼륨 기초 트랙',
    subtitle: '타겟 근육의 고립 및 펌핑 테크닉',
    time: '55분',
    target: '가슴 및 등 상체 분할',
  },
]

const POSES = [
  {
    photo: poseSquat,
    label: 'BARBELL BACK SQUAT',
    name: '백 스쿼트 (Squat)',
    keyPoint: '바벨은 발등 중앙(Midfoot)의 수직선 위를 왕복해야 균형이 흐트러지지 않습니다.',
    tip: '상체가 무릎보다 과하게 숙여져 허리에 전단력이 실리지 않도록 고관절 각도를 고정하세요.',
    exerciseId: 'squat',
  },
  {
    photo: poseDeadlift,
    label: 'BARBELL DEADLIFT',
    name: '컨벤셔널 데드리프트',
    keyPoint: '바벨이 항상 정강이와 허벅지에 밀착하여 수직 궤적을 그리며 무릎을 수직 통과해야 합니다.',
    tip: '들어올리는 순간 등과 척추가 구부정해지지 않도록 복압을 강하게 유지하고 광배근에 힘을 쥐세요.',
    exerciseId: null,
  },
  {
    photo: poseBenchPress,
    label: 'FLAT BENCH PRESS',
    name: '벤치 프레스',
    keyPoint: '어깨 관절을 지켜내기 위해 수직이 아닌 젖꼭지 하단에서 쇄골 밑까지 비스듬히 기울어진 포물선 궤적으로 미세요.',
    tip: '날개뼈를 벤치에 단단히 고정하고 어깨가 솟아오르지 않게 가슴을 열어 아치를 단단히 만드세요.',
    exerciseId: null,
  },
]

const GEARS = [
  {
    name: '리프팅 스트랩',
    highlighted: true,
    tagline: '악력 보완 및 전완근 피로 감소',
    desc: '데드리프트나 로우 계열 등 당기는 운동 시 바벨에서 미끄러지지 않도록 도와주어 타겟 부위 고립도를 극대화합니다.',
  },
  {
    name: '평평한 플랫 슈즈',
    highlighted: true,
    tagline: '발바닥 지면 밀착 및 중력 정렬',
    desc: '스쿼트와 같은 하체 운동 시 쿠션이 높은 런닝화는 관절 불안정을 유발하므로 밑창이 단단하고 평평한 신발이 안전합니다.',
  },
  {
    name: '손목 보호대 (스트랩)',
    highlighted: false,
    tagline: '손목 정렬 고정 및 프레스 시 통증 보호',
    desc: '벤치 프레스와 같은 미는 계열 운동에서 손목 관절이 뒤로 꺾여 인대에 불필요한 과부하가 실리는 것을 미연에 방지합니다.',
  },
]

function Home() {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroPhoto})` }}
      >
        <div className="hero__content">
          <span className="hero__badge">FOR WEIGH-LIFTING BEGINNERS</span>
          <h1 className="hero__title">
            처음이라도,
            <br />
            제대로 시작할 수 있게.
          </h1>
          <p className="hero__desc">
            어떤 운동을 어떻게 해야 할지 막막하셨다면, FW에서 흔들림 없는 완벽한 바벨의 궤적과 안전한 웨이트
            트레이닝 기초를 설계해 드립니다.
          </p>
          <div className="hero__actions">
            <Link to="/exercises" className="hero__button hero__button--primary">
              운동 시작하기
              <img src={arrowRightIcon} alt="" />
            </Link>
            <button
              type="button"
              className="hero__button hero__button--secondary"
              onClick={() => document.getElementById('routines')?.scrollIntoView({ behavior: 'smooth' })}
            >
              내게 맞는 루틴 찾기
              <img src={targetIcon} alt="" />
            </button>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker__track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span className="ticker__item" key={index}>
              {item}
              <span className="ticker__dot" />
            </span>
          ))}
        </div>
      </div>

      <section id="guide" className="section">
        <div className="section__header">
          <div>
            <p className="section__eyebrow">01 / BEGINNER GUIDE</p>
            <h2 className="section__title">부상 없이 완벽한 첫 세트를 위한 가이드</h2>
          </div>
          <p className="section__desc">
            웨이트 트레이닝의 정석은 곧 올바른 궤적입니다. 시작 단계에 필요한 안전 수칙과 학습 파이프라인을
            확인하세요.
          </p>
        </div>

        <div className="card-row">
          {GUIDE_STEPS.map((step) => (
            <div className="guide-card" key={step.number}>
              <div className="guide-card__top">
                <span className="guide-card__number">{step.number}</span>
                <span className="guide-card__tag">{step.tag}</span>
              </div>
              <h3 className="guide-card__title">{step.title}</h3>
              <p className="guide-card__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="routines" className="section section--alt">
        <div className="section__header section__header--center">
          <p className="section__eyebrow">02 / TARGET ROUTINES</p>
          <h2 className="section__title">초보자를 위한 목표별 스마트 루틴</h2>
          <p className="section__desc section__desc--center">
            체력 수준과 원하는 목표에 맞춰 과학적으로 설계된 FW 전용 입문 루틴 패키지입니다.
          </p>
        </div>

        <div className="card-row">
          {ROUTINES.map((routine) => (
            <div className="routine-card" key={routine.title}>
              <div>
                <p className="routine-card__level">{routine.level}</p>
                <h3 className="routine-card__title">{routine.title}</h3>
                <p className="routine-card__subtitle">{routine.subtitle}</p>
              </div>
              <div className="routine-card__stats">
                <div className="routine-card__stat">
                  <span>운동 시간</span>
                  <strong>{routine.time}</strong>
                </div>
                <div className="routine-card__stat">
                  <span>주요 타겟</span>
                  <strong>{routine.target}</strong>
                </div>
              </div>
              <Link to="/exercises" className="routine-card__link">
                루틴 상세보기
                <img src={chevronRightIcon} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="poses" className="section">
        <div className="section__header">
          <div>
            <p className="section__eyebrow">03 / TRAJECTORY ANALYSIS</p>
            <h2 className="section__title">움직임의 궤적을 제어하세요</h2>
          </div>
          <p className="section__desc">
            웨이트는 물리 법칙의 적용입니다. 신체 관절의 모멘트 암을 줄이고 부하를 원하는 근육에 정확히 전달하는
            필수 3대 대근육 운동 궤적 정밀 해부.
          </p>
        </div>

        <div className="card-row">
          {POSES.map((pose) => {
            const card = (
              <div className="pose-card">
                <div className="pose-card__photo" style={{ backgroundImage: `url(${pose.photo})` }}>
                  <p className="pose-card__label">{pose.label}</p>
                  <h3 className="pose-card__name">{pose.name}</h3>
                </div>
                <div className="pose-card__body">
                  <p className="pose-card__section-label">핵심 궤적 포인트</p>
                  <p className="pose-card__text">{pose.keyPoint}</p>
                  <div className="pose-card__tip">
                    <p className="pose-card__tip-label">부상 방지 Tip</p>
                    <p className="pose-card__text">{pose.tip}</p>
                  </div>
                </div>
              </div>
            )
            return pose.exerciseId ? (
              <Link to={`/exercises/${pose.exerciseId}`} className="pose-card-slot" key={pose.name}>
                {card}
              </Link>
            ) : (
              <div className="pose-card-slot" key={pose.name}>
                {card}
              </div>
            )
          })}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__header section__header--center">
          <p className="section__eyebrow">04 / ESSENTIAL GEARS</p>
          <h2 className="section__title">초보자를 위한 입문 안전 기어 가이드</h2>
          <p className="section__desc section__desc--center">
            도구를 올바르게 사용하면 장기적으로 부상 빈도가 급감하며 더 곧은 궤적 제어가 가능해집니다.
          </p>
        </div>

        <div className="card-row">
          {GEARS.map((gear) => (
            <div className={`gear-card ${gear.highlighted ? 'gear-card--highlighted' : ''}`} key={gear.name}>
              <div className="gear-card__top">
                <h3 className="gear-card__title">{gear.name}</h3>
                {gear.highlighted && <span className="gear-card__badge">추천 필수템</span>}
              </div>
              <p className="gear-card__tagline">{gear.tagline}</p>
              <p className="gear-card__desc">{gear.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="safety" className="safety-section">
        <div className="safety-section__header">
          <img src={shieldAlertIcon} alt="" />
          <h2>안전 안내 및 의학적 책임 배제 공지</h2>
        </div>
        <ul className="safety-section__list">
          <li>
            본 웹앱에서 제공되는 자세 동영상, 설명 및 루틴 가이드는 건강한 성인의 대중적인 체력 증진을 목적으로
            작성되었으며,{' '}
            <strong>개인의 질환, 손상, 선천적 척추 기형 등 특수한 병력을 고려하지 않습니다.</strong>
          </li>
          <li>
            본 서비스의 정보는 어떠한 경우에도{' '}
            <strong>
              공인된 의학적 소견, 진단, 정형외과 치료 및 일대일 오프라인 맞춤 스포츠 지도자의 자문을 대체하지 않으며
              대체할 수도 없습니다.
            </strong>{' '}
            관절 통증 및 척추에 이상 감각이 발견된다면 즉시 운동을 중단하고 병원을 내원하십시오.
          </li>
          <li>모든 중량 리프팅 시 반드시 적절한 보호 장비를 지참하고 보조자(스포터)를 두거나 안전 세이프티 바를 거치한 환경 내에서 안전하게 수축하십시오.</li>
        </ul>
      </section>

      <section className="final-cta" style={{ backgroundImage: `url(${ctaPhoto})` }}>
        <div className="final-cta__content">
          <p className="final-cta__eyebrow">ARE YOU READY TO START?</p>
          <h2 className="final-cta__title">올바른 철의 궤적으로, 건강을 되찾다</h2>
          <p className="final-cta__desc">
            더이상 고민하며 시간을 낭비하지 마세요. 가장 체계적이고 안전한 첫 세트를 지금 바로 무료로 함께
            시작해보세요.
          </p>
          <div className="final-cta__actions">
            <Link to="/exercises" className="button button--primary">
              지금 즉시 무료 가입
            </Link>
            <Link to="/exercises" className="button button--secondary">
              기초 자가 진단 받기
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
