import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const menuData = {
  "MILKTEA": [
    { name: "Brown Sugar", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Bubble Tea", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Chocolate", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Cookies & Cream", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Mocha", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Strawberry", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Taro", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Vanilla", sizes: "R 20 M 30 L 40 B1T1 38" },
    { name: "Wintermelon", sizes: "R 20 M 30 L 40 B1T1 38" }
  ],
  "MILKTEA (PREMIUM)": [
    { name: "Avocado", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Banana", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Black Forest", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Blueberry", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Buko Pandan", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Choco Mousse", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Choco Nutella", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Dark Chocolate", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Mango", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Matcha", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Okinawa", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Red Velvet", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Rocky Road", sizes: "R 25 M 35 L 45 B1T1 48" },
    { name: "Salted Caramel", sizes: "R 25 M 35 L 45 B1T1 48" }
  ],
  "FRUIT TEA": [
    { name: "Blueberry", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Grapes", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Green Apple", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Honey Peach", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Kiwi", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Lemon", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Lychee", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Mango", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Passion Fruit", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Pineapple", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Strawberry", sizes: "R 20 M 35 L 45 B1T1 38" },
    { name: "Watermelon", sizes: "R 20 M 35 L 45 B1T1 38" }
  ],
  "YOGURT": [
    { name: "Blueberry", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Grapes", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Green Apple", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Honey Peach", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Kiwi", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Lemon", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Lychee", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Mango", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Passion Fruit", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Pineapple", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Strawberry", sizes: "R 30 M 45 L 55 B1T1 58" },
    { name: "Watermelon", sizes: "R 30 M 45 L 55 B1T1 58" }
  ],
  "FRAPPE": [
    { name: "Avocado", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Banana Split", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Black Forest", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Blueberry Oreo", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Caramel Vanilla", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Cheese Cake", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Chocolate", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Choco Nutella", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Cookies & Cream", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Dark Chocolate", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Mango Graham", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Matcha", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Red Velvet", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Rocky Road", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Strawberry", sizes: "R 60 M 75 L 85 B1T1 118" },
    { name: "Ube Taro", sizes: "R 60 M 75 L 85 B1T1 118" }
  ],
  "COFFEE FRAPPE": [
    { name: "Cafe Macchiato", sizes: "R 70 M 85 L 95 B1T1 138" },
    { name: "Caramel Macchiato", sizes: "R 70 M 85 L 95 B1T1 138" },
    { name: "French Vanilla", sizes: "R 70 M 85 L 95 B1T1 138" },
    { name: "Mocha", sizes: "R 70 M 85 L 95 B1T1 138" },
    { name: "Salted Caramel", sizes: "R 70 M 85 L 95 B1T1 138" }
  ],
  "ICE COFFEE": [
    { name: "Cafe Americano", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "Cafe Macchiato", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "Caramel Macchiato", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "French Vanilla", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "Iced Mocha", sizes: "R 30 M 40 L 50 B1T1 58" }
  ],
  "ICE LATTE": [
    { name: "Choco", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "Matcha", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "Strawberry", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "Taro", sizes: "R 30 M 40 L 50 B1T1 58" },
    { name: "Red Velvet", sizes: "R 30 M 40 L 50 B1T1 58" }
  ],
  "HOT COFFEE": [
    { name: "Cafe Americano", sizes: "30" },
    { name: "Cafe Macchiato", sizes: "30" },
    { name: "Hazelnut Macchiato", sizes: "30" },
    { name: "Mochaccino", sizes: "30" }
  ],
  "HOT CHOCO": [
    { name: "Chocolate", sizes: "30" },
    { name: "Choco Mousse", sizes: "30" },
    { name: "Dark Chocolate", sizes: "30" }
  ],
  "HOT TEA": [
    { name: "Black Tea", sizes: "30" },
    { name: "Honey Peach", sizes: "30" },
    { name: "Lemon", sizes: "30" },
    { name: "Matcha", sizes: "30" }
  ],
  "ADD ONS": [
    { name: "Cashew Nuts", sizes: "10" },
    { name: "Coffee Jelly", sizes: "10" },
    { name: "Fruit Jelly", sizes: "10" },
    { name: "Nata", sizes: "10" },
    { name: "Tapioca Pearl", sizes: "10" },
    { name: "Popping Bobba", sizes: "10" },
    { name: "Candy Toppings", sizes: "15" },
    { name: "Cheesecake", sizes: "15" },
    { name: "Cream Cheese", sizes: "15" },
    { name: "Crushed Oreo", sizes: "15" },
    { name: "Espresso", sizes: "15" },
    { name: "Marshmallows", sizes: "15" },
    { name: "Cream Puff", sizes: "15" }
  ],
  "NEW FRUITY MELON": [
    { name: "Melon (MILKTEA)", sizes: "M 40 L 50" },
    { name: "Melon (FRAPPE)", sizes: "M 80 L 90" }
  ],
  "SIDES": [
    { name: "FRENCH FRIES", sizes: "M 50 L 100" },
    { name: "CHEESE STICKS - ₱25 / 10 PCS - ₱50 / 20 PCS", sizes: "" }
  ]
};

// helper to extract size prices (R/M/L) or fallback to last numeric token
function parseSizes(sizesStr) {
  if (!sizesStr) return {};
  const res = {};
  const r = /R\s*(\d+)/i.exec(sizesStr);
  const m = /M\s*(\d+)/i.exec(sizesStr);
  const l = /L\s*(\d+)/i.exec(sizesStr);
  if (r) res.R = r[1];
  if (m) res.M = m[1];
  if (l) res.L = l[1];
  if (!res.R && !res.M && !res.L) {
    const all = (sizesStr.match(/\d+/g) || []).map(Number);
    if (all.length) res.single = String(all[all.length - 1]);
  }
  return res;
}

// format sizes by inserting '=' between size token and number: "L 40" -> "L= 40"
function formatSizesWithEquals(sizesStr) {
  if (!sizesStr) return '';
  // replace occurrences like 'R 20' or 'B1T1 38' with 'R= 20' and 'B1T1= 38'
  return sizesStr.replace(/(\b[A-Za-z0-9\-]+)\s+(\d+)/g, '$1= $2');
}

// split sizes like "R 20 M 30 L 40" into array ['R= 20','M= 30','L= 40']
function splitSizePairs(sizesStr) {
  if (!sizesStr) return [];
  const pairs = [];
  // First, match tokens that start with a letter (e.g. R 20, M 30, B1T1 38)
  const re = /([A-Za-z][A-Za-z0-9\-]*)\s*(\d+)/g;
  let m;
  while ((m = re.exec(sizesStr)) !== null) {
    // include peso sign before numeric price
    pairs.push(`${m[1]}= ₱${m[2]}`);
  }

  // If we didn't find letter-prefixed tokens, try to recover numeric-only prices
  if (pairs.length === 0) {
    const nums = (sizesStr.match(/\d+/g) || []).map(s => s.trim());
    if (nums.length === 1) {
      pairs.push(`₱${nums[0]}`);
    } else if (nums.length > 1) {
      // join scattered numeric tokens into a single number (e.g. ['3','0'] -> '30')
      pairs.push(`₱${nums.join('')}`);
    } else if (sizesStr.trim()) {
      // final fallback: return the raw trimmed string
      pairs.push(sizesStr.trim());
    }
  }

  return pairs;
}

// parse prices embedded in the name, e.g.
// "CHEESE STICKS - ₱25 / 10 PCS - ₱50 / 20 PCS"
// returns { name: 'CHEESE STICKS', pairs: ['10PCS= 25','20PCS= 50'] }
function parseNamePrices(nameStr) {
  if (!nameStr) return { name: '', pairs: [] };
  const raw = nameStr.trim();
  const pairs = [];

  // Split the name into segments by '-' which commonly separate price groups
  const segments = raw.split(/\s*-\s*/);
  for (const seg of segments) {
    // try to find a price and a pcs token within the same segment
    const priceMatch = /₱?\s*(\d+)/.exec(seg);
    const pcsMatch = /(\d+\s*PCS)/i.exec(seg);
    if (priceMatch && pcsMatch) {
      const price = priceMatch[1].trim();
      const pcs = pcsMatch[1].replace(/\s+/g, '').toUpperCase();
      const token = `${pcs}= ${price}`;
      if (!pairs.includes(token)) pairs.push(token);
    }
  }

  // If no segment pairs were found, fall back to the previous token-based pairing
  if (pairs.length === 0) {
    const tokens = [];
    const tokenRe = /(₱?\s*\d+)|(\d+\s*PCS)/ig;
    let m;
    while ((m = tokenRe.exec(raw)) !== null) {
      if (m[1]) {
        const price = m[1].replace(/₱|\s+/g, '');
        tokens.push({ type: 'price', val: price });
      } else if (m[2]) {
        const pcs = m[2].replace(/\s+/g, '').toUpperCase();
        tokens.push({ type: 'pcs', val: pcs });
      }
    }
    for (let i = 0; i < tokens.length; i++) {
      const a = tokens[i];
      const b = tokens[i + 1];
      if (!b) break;
      if (a.type === 'price' && b.type === 'pcs') {
        const token = `${b.val}= ${a.val}`;
        if (!pairs.includes(token)) pairs.push(token);
        i++;
      } else if (a.type === 'pcs' && b.type === 'price') {
        const token = `${a.val}= ${b.val}`;
        if (!pairs.includes(token)) pairs.push(token);
        i++;
      }
    }
  }

  // Fallback: if still no pairs, but a single number exists, use it as single price
  if (pairs.length === 0) {
    const nums = (raw.match(/\d+/g) || []).map(s => s.trim());
    if (nums.length === 1) pairs.push(`₱${nums[0]}`);
  }

  // Clean name by removing price/pcs fragments
  let cleanName = raw;
  if (pairs.length) {
    cleanName = cleanName.replace(/₱\s*\d+/g, '');
    cleanName = cleanName.replace(/\d+\s*PCS/ig, '');
    cleanName = cleanName.replace(/[\-\/\=]+/g, ' ');
    cleanName = cleanName.replace(/\s{2,}/g, ' ').trim();
  }

  return { name: cleanName || raw, pairs };
}

const featured = {
  MILKTEA: '/images/brown-sugar-milk-tea-in-clear-cup-with-tapioca-pea.jpg',
  FRAPPE: '/images/chocolate-frappe-with-whipped-cream-and-chocolate-.jpg',
  'FRUIT TEA': '/images/green-fruit-tea-with-fresh-fruit-slices-and-ice.jpg',
  // sample user-provided icon image (can replace manually)
  TARO_SAMPLE: '/ICON/6735a65673e173705caf2f03_5 - Fresh Taro Milk 2x.webp'
};

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const Menu = () => {
  // ensure ADD ONS appears last in the category nav
  const rawSections = Object.keys(menuData);
  const sections = rawSections.filter(s => s !== 'ADD ONS');
  if (rawSections.includes('ADD ONS')) sections.push('ADD ONS');
  // On mobile (<=768px) default to MILKTEA if it exists so mobile users see milktea category
  const [active, setActive] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const preferred = rawSections.includes('MILKTEA') ? 'MILKTEA' : (sections[0] || '');
      return slugify(preferred);
    }
    return slugify(sections[0] || '');
  });
  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return rawSections.includes('MILKTEA') ? 'MILKTEA' : '';
    }
    return '';
  });
  const [pages, setPages] = useState(() => {
    const initial = {};
    sections.forEach((s) => { initial[slugify(s)] = 0; });
    return initial;
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  // featured sizes (not used heavily here but kept for future)
  const featuredRawSizes = {};
  Object.keys(featured).forEach((key) => {
    const items = menuData[key];
    if (items && items.length) featuredRawSizes[key] = items[0].sizes || '';
  });

  // compute panel items and paging
  const currentSectionName = selectedCategory || 'All';
  let panelItems = [];
  if (currentSectionName === 'All') {
    Object.keys(menuData).forEach(k => { panelItems = panelItems.concat(menuData[k] || []); });
  } else {
    panelItems = menuData[currentSectionName] || [];
  }
  const perPage = 6;
  const panelSlug = slugify(currentSectionName);
  const panelPageCount = Math.max(1, Math.ceil(panelItems.length / perPage));
  const panelCurrentPage = pages[panelSlug] || 0;
  const panelPageItems = panelItems.slice(panelCurrentPage * perPage, panelCurrentPage * perPage + perPage);

  // small helper: produce a short description for products without explicit description
  function shortDescFor(item) {
    if (item.description) return item.description;
    // make a compact, natural-sounding description
    const base = String(item.name || '').replace(/\s{2,}/g, ' ').trim();
    if (!base) return 'Fresh and delicious.';
    return `Freshly prepared ${base}.`;
  }

  return (
    <div className={`menu-container ${mobileCatOpen ? 'mobile-cat-open' : ''}`}>
      <div className="menu-layout">
        <nav className="category-nav" aria-label="Menu categories">
          <ul>
            <li key="all" className="nav-all">
              <a
                href="#all"
                className={`hide-on-mobile ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActive('all'); setSelectedCategory('All'); }}
              >All</a>
            </li>
            {sections.map((sec) => {
              const slug = slugify(sec);
              return (
                <li key={sec}>
                  <a
                    href={`#${slug}`}
                    className={active === slug ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(slug);
                      setSelectedCategory(sec);
                      const el = document.getElementById(slug);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {sec}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="menu-main">
          <div className="category-panel">
            <h3
              className="category-panel-title"
              onClick={() => setMobileCatOpen((s) => !s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMobileCatOpen((s) => !s); }}
            >{currentSectionName}</h3>
            {/* Mobile dropdown: visible only on small viewports via CSS */}
            <div className={`mobile-category-dropdown ${mobileCatOpen ? 'open' : ''}`} aria-hidden={!mobileCatOpen}>
              <ul>
                <li className="nav-all">
                  <a href="#all" className="hide-on-mobile" onClick={(e) => { e.preventDefault(); setActive('all'); setSelectedCategory('All'); setMobileCatOpen(false); const el = document.getElementById('all'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>All</a>
                </li>
                {sections.map((sec) => {
                  const slug = slugify(sec);
                  return (
                    <li key={sec}>
                      <a href={`#${slug}`} onClick={(e) => { e.preventDefault(); setActive(slug); setSelectedCategory(sec); setMobileCatOpen(false); const el = document.getElementById(slug); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>{sec}</a>
                    </li>
                  );
                })}
              </ul>
    </div>
  {/* Backdrop to catch outside clicks on mobile when dropdown is open */}
      <div
        className={`mobile-cat-backdrop ${mobileCatOpen ? 'open' : ''}`}
        onClick={() => setMobileCatOpen(false)}
        aria-hidden={!mobileCatOpen}
      />
            <div className={`product-grid ${currentSectionName === 'All' ? 'panel-all' : ''}`}>
              {panelPageItems.map((item, idx) => {
                const image = '/ICON/6735a65673e173705caf2f03_5 - Fresh Taro Milk 2x.webp';
                let pairs = [];
                let displayName = item.name;
                if (item.sizes && item.sizes.trim()) {
                  pairs = splitSizePairs(item.sizes);
                } else {
                  const parsed = parseNamePrices(item.name);
                  if (parsed.pairs && parsed.pairs.length) {
                    pairs = parsed.pairs;
                    displayName = parsed.name;
                  }
                }

                const isSingle = pairs.length === 1;

                return (
                  <div className="product-card" key={idx}>
                        <div className="product-image" onClick={() => setSelectedProduct({ ...item, displayName, description: shortDescFor(item) })} style={{cursor: 'pointer'}}>
                          <img src={image} alt={displayName} />
                        </div>
                        <div className="product-info">
                        {/* Render single-price items as a horizontal row: name left, price right */}
                        {isSingle ? (
                          <div className="item single-price">
                            <span>
                              {displayName}
                              <span className="product-desc">{shortDescFor(item)}</span>
                            </span>
                            <span><span className="price-badge">{pairs[0]}</span></span>
                          </div>
                        ) : (
                          <div className="item">
                            <span>
                              {displayName}
                              <span className="product-desc">{shortDescFor(item)}</span>
                            </span>
                            <span>
                              {pairs.length ? pairs.map((p, i) => (
                                <span className="price-badge" key={i}>{p}</span>
                              )) : <span className="price-badge">N/A</span>}
                            </span>
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
            </div>

            {panelPageCount > 1 && (
              <div className="pager">
                <button
                  className="pager-btn"
                  onClick={() => setPages(prev => ({ ...prev, [panelSlug]: Math.max(0, (prev[panelSlug] || 0) - 1) }))}
                  disabled={panelCurrentPage === 0}
                >
                  Prev
                </button>

                <div className="pager-dots">
                  {Array.from({ length: panelPageCount }).map((_, i) => (
                    <button
                      key={i}
                      className={`pager-dot ${i === panelCurrentPage ? 'active' : ''}`}
                      onClick={() => setPages(prev => ({ ...prev, [panelSlug]: i }))}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  className="pager-btn"
                  onClick={() => setPages(prev => ({ ...prev, [panelSlug]: Math.min(panelPageCount - 1, (prev[panelSlug] || 0) + 1) }))}
                  disabled={panelCurrentPage === panelPageCount - 1}
                >
                  Next
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <div className="footer">© 2025 TEACUP - All rights reserved</div>
    </div>
  );
};

export default Menu;
