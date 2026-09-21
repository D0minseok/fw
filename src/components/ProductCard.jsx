import { useState } from 'react'
import Badge from './Badge.jsx'
import './ProductCard.css'

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="product-card">
      <button
        type="button"
        className="product-card__summary"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        <span className="product-card__visual" aria-hidden="true">
          {product.visual.value}
        </span>
        <span className="product-card__info">
          <span className="product-card__name-row">
            <span className="product-card__name">{product.name}</span>
            <Badge variant="category">{product.category}</Badge>
          </span>
          <span className="product-card__why">{product.whyNeeded}</span>
        </span>
        <span className="product-card__toggle">{expanded ? '접기 ▲' : '더보기 ▼'}</span>
      </button>

      {expanded && (
        <div className="product-card__details">
          <div>
            <h4>선택 팁</h4>
            <ul>
              {product.selectionTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="product-card__price">
            <span className="muted">참고 가격대</span>
            <strong>{product.priceRange}</strong>
          </div>

          {product.link ? (
            <a className="button button--primary" href={product.link} target="_blank" rel="noopener noreferrer">
              {product.linkLabel ?? '자세히 보기'}
            </a>
          ) : (
            <p className="product-card__coming-soon">구매 링크는 준비 중입니다.</p>
          )}

          {product.sponsored && (
            <p className="product-card__sponsored">
              이 링크는 제휴 링크이며, 구매 시 일정 수수료를 제공받을 수 있습니다.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default ProductCard
