import React from 'react';

// Small helper to split sizes like "M 170 L 190" into ['M= 170','L= 190']
function splitSizePairs(sizesStr) {
  if (!sizesStr) return [];
  const pairs = [];
  const re = /([A-Za-z][A-Za-z0-9\-]*)\s*(\d+)/g;
  let m;
  while ((m = re.exec(sizesStr)) !== null) {
    pairs.push(`${m[1]}= ${m[2]}`);
  }
  if (pairs.length === 0) {
    const nums = (sizesStr.match(/\d+/g) || []).map(s => s.trim());
    if (nums.length === 1) pairs.push(nums[0]);
    else if (nums.length > 1) pairs.push(nums.join(''));
  }
  return pairs;
}

const ProductDetail = ({ product, onClose }) => {
  if (!product) return null;

  const image = product.image || product.img || '/ICON/6735a65673e173705caf2f03_5 - Fresh Taro Milk 2x.webp';
  const sizesRaw = product.sizes || '';
  const pairs = sizesRaw.trim() ? splitSizePairs(sizesRaw) : (product.pairs || []);

  return (
    <div className="product-detail-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="product-detail-panel" onClick={(e) => e.stopPropagation()}>
        <button className="product-detail-close" onClick={onClose} aria-label="Close">×</button>
        <div className="product-detail-grid">
          <div className="product-detail-image">
            <img src={image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            {/* decorative beans removed - product image should be plain */}
            <h2 className="product-detail-title">{product.displayName || product.name}</h2>
            <p className="product-detail-desc">{product.description || '100% fresh ingredients and expertly prepared. Enjoy our signature drink.'}</p>
            <div className="product-detail-sizes">
              {pairs.length ? pairs.map((p, i) => (<span key={i} className="price-badge">{p}</span>)) : <span className="price-badge">N/A</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
