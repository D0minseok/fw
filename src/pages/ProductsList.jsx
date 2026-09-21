import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import FilterBar from '../components/FilterBar.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { products } from '../data/products.js'
import { PRODUCT_CATEGORIES } from '../data/constants.js'
import './ProductsList.css'

function ProductsList() {
  const [category, setCategory] = useState(null)

  const filtered = useMemo(
    () => products.filter((product) => category === null || product.category === category),
    [category],
  )

  return (
    <div className="page">
      <h1>운동 용품 추천</h1>
      <p className="muted">
        운동 종류에 따라 도움이 되는 용품을 큐레이션했습니다. 현재는 구매 링크 없이 정보만 제공하고 있어요.
      </p>

      <div className="products-filters">
        <FilterBar label="카테고리" options={PRODUCT_CATEGORIES} activeValue={category} onChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState message="선택한 카테고리에 맞는 용품이 없습니다." />
      ) : (
        <div className="product-list">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsList
