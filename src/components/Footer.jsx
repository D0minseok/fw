import './Footer.css'

const FOOTER_COLUMNS = [
  { title: '프로그램', items: ['자가 진단', '입문 루틴', '자세 해부학', '안전 매뉴얼'] },
  { title: '회사', items: ['회사 소개', '칼럼 및 저널', '인재 채용', '파트너십 문의'] },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo">FW, First Workout</p>
            <p className="footer__desc">
              FW는 과학적인 리프팅 메커니즘을 기반으로 모든 리프터들이 무리 없이 안전하고 정확하게 운동을 배울 수
              있도록 가이드라인을 연구하고 개발합니다.
            </p>
          </div>
          <div className="footer__columns">
            {FOOTER_COLUMNS.map((column) => (
              <div className="footer__column" key={column.title}>
                <p className="footer__column-title">{column.title}</p>
                <ul className="footer__column-list">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 FW, First Workout. All rights reserved.</p>
          <div className="footer__legal">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
