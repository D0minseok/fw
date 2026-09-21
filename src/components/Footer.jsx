import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          본 콘텐츠는 운동을 처음 접하는 분들을 위한 일반적인 정보 제공을 목적으로 하며, 전문가의 운동 지도나 의학적
          조언을 대체하지 않습니다. 몸에 무리가 느껴지면 즉시 운동을 멈추고 전문가와 상담하세요.
        </p>
        <p className="footer__credit">FW (First Workout) · 개인 프로젝트</p>
      </div>
    </footer>
  )
}

export default Footer
