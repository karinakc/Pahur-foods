import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, Menu, Phone, X } from 'lucide-react';
import { locations, products } from './content';
import logo from './assets/logo.png';
import combo from './assets/combo.webp';

import achar from './assets/achar.webp';
import hero from './assets/hero.webp';
import pahurBags from './assets/pahurbags.webp';
import choila from './assets/choila.webp';
import najir from './assets/celebrities/najir.webp';
import vek from './assets/celebrities/vek.webp';
import sisan from './assets/celebrities/sisan.webp';
import jiffyLogo from './assets/jiffylogo.webp';
import './styles.css';

const images = { logo, combo, achar, hero, pahurbags: pahurBags, choila };
const asset = (name) => images[name.replace(/\.(png|webp)$/, '')];
const tastedFaces = [
  { name: 'Najir', image: najir, href: 'https://www.tiktok.com/@pahur.foods/video/7680518672229666068' },
  { name: 'VEK', image: vek, href: 'https://www.tiktok.com/@pahur.foods/video/7683477785146297620' },
  { name: 'Sisan', image: sisan, href: 'https://www.tiktok.com/@pahur.foods/video/7672429754460720404' },
];

function FacebookIcon() {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5V7c0-1.1.7-1.5 1.7-1.5H18V2h-3.2C11.7 2 10 3.9 10 6.7v1.8H7V12h3v10h4V12h3.2l.5-3.5H14Z" /></svg>;
}

function InstagramIcon() {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" /></svg>;
}

function TikTokIcon() {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.3 3c.35 2.15 1.55 3.45 3.7 3.65v3.1a7.2 7.2 0 0 1-3.65-1.1v6.05a6 6 0 1 1-5.2-5.95v3.15a2.9 2.9 0 1 0 2.05 2.8V3h3.1Z" /></svg>;
}

function Logo() {
  return <img className="logo" src={asset('logo.png')} alt="Pahur Foods" />;
}

function Preloader() {
  return <div className="preloader" role="status" aria-label="Loading Pahur Foods">
    <div className="preloader-panel">
      <span className="preloader-nepali" aria-hidden="true">पाहुर</span>
      <img src={asset('logo.png')} alt="" />
      <div className="preloader-words" aria-hidden="true"><span>Open.</span><span>Taste.</span><span>Enjoy.</span></div>
      <div className="preloader-spices" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="preloader-line" aria-hidden="true"><span /></div>
    </div>
  </div>;
}

const legalCopy = {
  terms: {
    eyebrow: 'Website terms',
    title: 'TERMS & CONDITIONS.',
    intro: 'These terms explain how this Pahur Foods website may be used and how product enquiries are handled.',
    sections: [
      ['About this website', 'This website introduces Pahur Foods, its product range, shop locations and ways to enquire. It does not currently provide an on-site checkout or payment system.'],
      ['Products & availability', 'Product photographs and descriptions are provided for general information. Packaging, selection and availability may change, so please confirm current details before ordering.'],
      ['Orders & third parties', 'Orders started through Jiffy Services, Facebook, Instagram, TikTok or another external service may also be subject to that provider’s terms, delivery areas and payment process.'],
      ['Acceptable use', 'Please use the website lawfully and do not attempt to interfere with its operation, security or availability. Website content should not be copied or presented as another business’s material.'],
      ['Brand content', 'The Pahur Foods name, logo, product photography and visual material displayed here are brand content. Please contact Pahur Foods before reusing them commercially.'],
      ['Updates & questions', 'These website terms may be updated when ordering features or business details change. Contact Pahur Foods if you need clarification before placing an order.'],
    ],
  },
  privacy: {
    eyebrow: 'Your information',
    title: 'PRIVACY POLICY.',
    intro: 'This notice describes the information connected with this website and the choices available to visitors.',
    sections: [
      ['Information you provide', 'The contact form asks for a name, email address, enquiry type and message. At present, the form is a front-end demonstration and does not transmit or store submissions.'],
      ['Technical information', 'The website host and your browser may process standard technical information needed to deliver the site, such as an IP address, browser type, device details and request time.'],
      ['Cookies', 'The current website does not intentionally set advertising or profiling cookies. Services reached through external links may use their own cookies under their own policies.'],
      ['External services', 'Links to Jiffy Services, Facebook, Instagram and TikTok take you to third-party websites. Information shared there is handled according to each service’s privacy practices.'],
      ['Your choices', 'You can choose not to use the contact form or external social links. For a privacy question or a request concerning information shared directly with Pahur Foods, please contact the business.'],
      ['Policy updates', 'This notice should be reviewed whenever the contact form, analytics, online ordering or other data-handling features are added or changed.'],
    ],
  },
};

function LegalModal({ type, onClose }) {
  const copy = legalCopy[type];
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKey = (event) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return <div className="legal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="legal-modal" role="dialog" aria-modal="true" aria-labelledby={`legal-${type}-title`}>
      <header className="legal-modal-header">
        <div><p className="kicker">{copy.eyebrow}</p><h2 id={`legal-${type}-title`}>{copy.title}</h2></div>
        <button type="button" className="legal-close" onClick={onClose} aria-label="Close legal information" autoFocus><X /></button>
      </header>
      <div className="legal-modal-scroll">
        <p className="legal-intro">{copy.intro}</p>
        <div className="legal-sections">
          {copy.sections.map(([heading, body], index) => <article key={heading}><span>0{index + 1}</span><h3>{heading}</h3><p>{body}</p></article>)}
        </div>
        <div className="legal-modal-action"><p>Need more information?</p><Link to="/contact" onClick={onClose}>Contact Pahur Foods <ArrowRight size={18} /></Link></div>
      </div>
    </section>
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return (
    <header className="site-header">
      <Link to="/" aria-label="Pahur Foods home"><Logo /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/our-story">Our Story</NavLink>
        <Link to="/#where">Where to Buy</Link>
        <NavLink className="nav-cta" to="/contact">Get in touch</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  const [legalOpen, setLegalOpen] = useState(null);
  return (
    <><footer className="footer">
      <div><Logo /><p>Uplifting your meal.</p></div>
      <div className="footer-links">
        <Link to="/products">Products</Link><Link to="/our-story">Our Story</Link><Link to="/contact">Contact</Link><button type="button" onClick={() => setLegalOpen('terms')}>Terms</button><button type="button" onClick={() => setLegalOpen('privacy')}>Privacy</button>
      </div>
      <div className="footer-socials">
        <a href="https://www.facebook.com/aayokhana/" target="_blank" rel="noreferrer"><FacebookIcon /> Facebook</a>
        <a href="https://www.instagram.com/pahur.foods/" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
        <a href="https://www.tiktok.com/@pahur.foods" target="_blank" rel="noreferrer"><TikTokIcon /> TikTok</a>
        <a href="tel:9708678835"><Phone size={20} /> 970-8678835</a>
        <a className="footer-jiffy" href="https://www.jiffy-services.com/" target="_blank" rel="noreferrer" aria-label="Order Pahur from Jiffy"><span>Order from</span><img src={jiffyLogo} alt="Jiffy" /></a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Pahur Foods<br />Pokhara &amp; Butwal, Nepal</p>
    </footer>{legalOpen && <LegalModal type={legalOpen} onClose={() => setLegalOpen(null)} />}</>
  );
}

function Layout({ children }) {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'));
    }, { threshold: .12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [location.pathname, location.hash]);
  return <><Header /><main>{children}</main><Footer /></>;
}

function ArrowLink({ to, children, className = '' }) {
  return <Link className={`arrow-link ${className}`} to={to}>{children}<ArrowDownRight size={20} /></Link>;
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy reveal">
        <p className="kicker">Uplifting Your Meal.</p>
        <h1>NEPALI FOOD.<br /><em>BIG</em> FLAVOUR.</h1>
        <p className="hero-intro">Achar, packaged choila and bold Nepali favourites for the everyday table.</p>
        <div className="hero-actions">
          <Link className="hero-primary" to="/products">Explore Our Foods</Link>
          <Link className="hero-secondary" to="/#where">Where to Buy <ArrowRight size={18} /></Link>
        </div>
        <div className="hero-stats" aria-label="Pahur Foods highlights">
          <div className="hero-stat"><strong>8+ Countries</strong><span>Export destinations</span></div>
          <a className="hero-stat hero-stat-jiffy" href="https://www.jiffy-services.com/" target="_blank" rel="noreferrer" aria-label="Order Pahur online from Jiffy"><strong>Available on <img src={jiffyLogo} alt="Jiffy" /></strong><span>Order online</span></a>
          <div className="hero-stat"><strong>Since 2024</strong><span>Established</span></div>
        </div>
      </div>
      <div className="hero-visual reveal">
        <img className="hero-store-img" src={asset('hero.webp')} alt="Inside a Pahur Foods shop" />

        <div className="hero-products" aria-hidden="true">
          <img className="choila-pack" src={asset('choila.png')} alt="" />
          <img src={products[2].image} alt="" />
        </div>
        <div className="hero-visual-caption"><strong>From our shelves</strong><span>to your table.</span></div>
      </div>
    </section>
  );
}

function ProductFeature({ product, index }) {
  return (
    <article className={`product-feature ${product.tone} reveal`}>
      <div className="product-index">0{index + 1}</div>
      <div className={`product-shot ${product.focus ? `focus-${product.focus}` : ''}`}>
        <span className="product-photo-backdrop" style={{ backgroundImage: `url(${product.image})` }} aria-hidden="true" />
        <img className="product-art" src={product.image} alt={product.name} />
      </div>
      <div className="product-copy">
        <p className="kicker">{product.eyebrow}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link to="/products" className="text-link">View all products <ArrowRight size={18} /></Link>
      </div>
    </article>
  );
}

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKey = (event) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const isChoila = product.tone === 'choila';
  return <div className="product-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className={`product-modal ${product.tone}`} role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
      <button className="product-modal-close" type="button" onClick={onClose} aria-label="Close product details" autoFocus><X /></button>
      <div className="product-modal-image"><img src={product.image} alt={product.name} /></div>
      <div className="product-modal-copy">
        <p className="kicker">{product.eyebrow}</p>
        <h2 id="product-modal-title">{product.name}</h2>
        <p className="product-modal-description">{product.description}</p>
        <dl className="product-facts">
          <div><dt>Format</dt><dd>{isChoila ? 'Packaged choila' : 'Achar jar'}</dd></div>
          <div><dt>Made for</dt><dd>The everyday Nepali table</dd></div>
          <div><dt>Availability</dt><dd>Contact us for current stock</dd></div>
        </dl>
        <div className="product-modal-actions">
          <Link className="hero-primary product-modal-cta" to="/contact?subject=order" onClick={onClose}>Ask about this product</Link>
          <a className="product-modal-jiffy" href="https://www.jiffy-services.com/" target="_blank" rel="noreferrer">
            <span>Order from</span><img src={jiffyLogo} alt="Jiffy" /><ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  </div>;
}

function ProductTile({ product, index, onOpen }) {
  const isChoila = product.tone === 'choila';
  return (
    <article className={`product-tile ${product.tone} reveal`} onClick={() => onOpen(product)}>
      <div className="tile-image">
        <img src={product.image} alt={product.name} />
        <span>0{index + 1}</span>
      </div>
      <div className="tile-copy">
        <div>
          <p className="kicker">{product.eyebrow}</p>
          <h2>{product.name}</h2>
          {isChoila && <><p className="tile-statement">PACKAGED NEPALI FLAVOUR.</p><p className="tile-description">{product.description}</p></>}
          <button type="button" className="tile-details" onClick={(event) => { event.stopPropagation(); onOpen(product); }}>View details <ArrowRight size={17} /></button>
        </div>
      </div>
    </article>
  );
}

function WhereToBuy() {
  return (
    <section className="where section-pad" id="where">
      <div className="section-heading reveal"><p className="kicker">Find your flavour</p><h2>WHERE TO<br /><em>BUY.</em></h2></div>
      <div className="location-list reveal">
        {locations.map((location) => (
          location.external ?
            <a href={location.href} target="_blank" rel="noreferrer" className="location-row" key={location.number}>
              <span>{location.number}</span><div><h3>{location.title}</h3><p>{location.detail}</p></div><strong>{location.action}</strong><ArrowDownRight />
            </a> :
            <Link to={location.href} className="location-row" key={location.number}>
              <span>{location.number}</span><div><h3>{location.title}</h3><p>{location.detail}</p></div><strong>{location.action}</strong><ArrowDownRight />
            </Link>
        ))}
      </div>
    </section>
  );
}

function Wholesale() {
  return (
    <section className="wholesale reveal">
      <p className="kicker">For shelves, kitchens & good hosts</p>
      <h2>BRING PAHUR<br />TO YOUR PEOPLE.</h2>
      <ArrowLink to="/contact?subject=wholesale" className="light">Wholesale enquiries</ArrowLink>
    </section>
  );
}

function ReviewsSection() {
  return <section className="reviews-section reveal">
    <div className="reviews-heading">
      <div><p className="kicker">From our customers</p><h2>PAHUR ON<br /><em>THEIR TABLES.</em></h2></div>
      <p>Notes from people who have tasted Pahur.</p>
    </div>
    <div className="reviews-grid">
      <article className="review-item">
        <div className="review-person"><span>SS</span><div><h3>Suhan Shrestha (Scuba)</h3><small>4 reviews</small></div></div>
        <div className="review-meta"><strong aria-label="5 out of 5 stars">★★★★★</strong><span>A year ago</span></div>
        <p>Best <b>achar</b> in B-town. The quality of the products were very fresh and tasted fabulous. The owner and staff at the outlet were very friendly as well. Loved it!!</p>
      </article>
      <article className="review-item">
        <div className="review-person"><span>F</span><div><h3>Fifty</h3><small>2 reviews</small></div></div>
        <div className="review-meta"><strong aria-label="5 out of 5 stars">★★★★★</strong><span>A year ago</span></div>
        <p>Best <b>achar</b> tasted till now, better than any other brand.</p>
      </article>
      <article className="review-item">
        <div className="review-person"><span>AM</span><div><h3>Ashish Mishra</h3><small>1 review</small></div></div>
        <div className="review-meta"><strong aria-label="5 out of 5 stars">★★★★★</strong><span>A year ago</span></div>
        <p>One of the best <b>achar</b> in Nepal. Review from USA 💗</p>
      </article>
    </div>
    <div className="reviews-footer"><a href="https://www.google.com/maps/place/Pahur+achar-Nepal%E2%80%99s+best+achar/@27.6803062,83.46196,17z/data=!3m1!4b1!4m6!3m5!1s0x39968748927e6a61:0xdee1b0ae0e98291e!8m2!3d27.6803062!4d83.46196!16s%2Fg%2F11wj5c83r4!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">View all reviews <ArrowRight size={18} /></a></div>
  </section>;
}

function Home() {
  const homeProducts = [
    products.find((product) => product.name === 'Buff Choila'),
    ...products.slice(1, 3),
  ];
  return <>
    <Hero />
    <div className="ticker" aria-label="Achar, choila and more. A little Pahur with every meal."><div aria-hidden="true">{('ACHAR, CHOILA & MORE. ✦ A LITTLE PAHUR WITH EVERY MEAL. ✦ ').repeat(9)}</div></div>
    <section className="tasted-section">
      <div className="tasted-heading reveal">
        <div><p className="kicker">Spotted with Pahur</p><h2>FAMILIAR FACES.<br /><em>BOLD BITES.</em></h2></div>
        <p>See Najir, VEK and Sisan taste Pahur and watch each moment on TikTok.</p>
      </div>
      <div className="tasted-grid">
        {tastedFaces.map((person, index) => <a className="tasted-person reveal" href={person.href} target="_blank" rel="noreferrer" key={person.name}>
          <div className="tasted-image"><img src={person.image} alt={`${person.name} tasting Pahur food`} loading="lazy" decoding="async" /></div>
          <div className="tasted-caption"><span><small>0{index + 1}</small>{person.name}</span><strong><TikTokIcon /> Watch on TikTok <ArrowRight size={17} /></strong></div>
        </a>)}
      </div>
    </section>
    <section className="products-intro section-pad reveal">
      <p className="kicker">Made to go with everything</p>
      <h2>MEET THE<br /><em>PAHUR PANTRY.</em></h2>
      <p className="intro-note">From achar jars to packaged choila everyday Nepali favourites, ready for the table.</p>
    </section>
    <section className="product-stack">{homeProducts.map((p, i) => <ProductFeature product={p} index={i} key={p.name} />)}</section>

    <section className="story-preview section-pad">
      <div className="story-photo reveal"><img src={asset('pahurbags.webp')} alt="Customers holding Pahur combo bags outside the Pahur shop" /><span>पोखरा • बुटवल</span></div>
      <div className="story-copy reveal"><p className="kicker">The Pahur story</p><h2>FROM OUR<br />SHOP TO<br /><em>YOUR TABLE.</em></h2><p>Pahur is rooted in the flavours people know and love. We make food that belongs beside the everyday meal and makes it hit differently.</p><ArrowLink to="/our-story">Read our story</ArrowLink></div>
    </section>
    <ReviewsSection />
    <WhereToBuy />
    <Wholesale />
  </>;
}

function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return <div className="products-page">
    <section className="products-hero">
      <div className="products-hero-copy reveal">
        <p className="kicker">The Pahur pantry</p>
        <h1>ONE TABLE.<br /><em>MANY</em> <span className="products-hero-script">FLAVOURS.</span></h1>
        <p>Explore Pahur achar, packaged choila and Nepali specialties from garlic and timur to fish, buff, chicken and mango.</p>
      </div>
      <div className="products-hero-images reveal">
        <img src={products[0].image} alt={products[0].name} />
        <img className="product-hero-choila" src={asset('choila.png')} alt="Pahur Buff Choila package" />
        <img src={products[2].image} alt={products[2].name} />
        <span>{String(products.length).padStart(2, '0')} products · one bold pantry</span>
      </div>
    </section>
    <section className="product-catalog section-pad">{products.map((p, i) => <ProductTile product={p} index={i} onOpen={setSelectedProduct} key={p.name} />)}</section>
    <section className="combo-feature section-pad reveal">
      <div><p className="kicker">Beyond the jar</p><h2>ACHAR &<br /><em>PACKAGED CHOILA.</em></h2><p>Pahur brings together jarred achar, packaged choila and other Nepali favourites for gifting, sharing or stocking the pantry.</p><ArrowLink to="/contact?subject=order">Ask about the range</ArrowLink></div>
      <img src={asset('combo.webp')} alt="Pahur Non Veg Combo pack" />
    </section>
    <Wholesale />
    {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
  </div>;
}

function StoryPage() {
  return <>
    <section className="story-hero">
      <div className="story-hero-copy reveal">
        <p className="kicker">Our Story</p>
        <h1>MADE FOR<br />THE <em>EVERYDAY.</em></h1>
        <p>Pahur is rooted in the flavours people know and love and in the simple idea that an everyday meal can always use a little lift.</p>
      </div>
      <div className="story-hero-image reveal">
        <img src={asset('pahurbags.webp')} alt="Customers holding Pahur combo bags outside the shop" />
        <span>पाहुर · Our story</span>
      </div>
    </section>
    <section className="story-chapters">
      <article className="story-chapter chapter-meal reveal">
        <div className="chapter-image chapter-bag"><img src={asset('combo.webp')} alt="Complete Pahur Non Veg Combo bag outside the shop" /></div>
        <div className="chapter-copy"><p className="kicker">Chapter 01 · At the table</p><h2>EVERYDAY FOOD,<br /><em>TURNED UP.</em></h2><p>Pahur belongs beside the meals people already know and love a simple addition that gives the everyday plate a bolder character.</p></div>
      </article>
      <article className="story-chapter chapter-place reveal">
        <div className="chapter-copy"><p className="kicker">Chapter 02 · The Pahur shop</p><h2>A PLACE FOR<br /><em>BIG FLAVOUR.</em></h2><p>Our shop brings the Pahur pantry together in one place, ready to move from our shelves into kitchens, lunchboxes and shared meals.</p></div>
        <div className="chapter-image chapter-shop"><img src={asset('hero.webp')} alt="Inside the Pahur Foods shop" /></div>
      </article>
    </section>
    <section className="story-principles section-pad"><p className="kicker">What guides us</p><div><h3>Familiar flavours.</h3><h3>Useful food.</h3><h3>A bolder everyday.</h3></div></section>
    <Wholesale />
  </>;
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const subject = query.get('subject') || 'general';
  return <>
    <section className="contact-shell">
      <div className="contact-editorial reveal">
        <div><p className="kicker">Say namaste</p><h1>LET’S TALK<br /><em>FOOD.</em></h1><p>Orders, stockist questions, wholesale or collaborations send us a note.</p></div>
        <div className="contact-shop"><img src={asset('hero.webp')} alt="Inside a Pahur shop" /><p><strong>Pahur Shops</strong><br />Pokhara &amp; Butwal, Nepal<br /><a className="contact-phone" href="tel:9708678835"><Phone size={15} /> 970-8678835</a><br />Contact us for current addresses and hours.</p></div>
        <div className="contact-socials">
          <a href="https://www.facebook.com/aayokhana/" target="_blank" rel="noreferrer"><FacebookIcon /><span>Facebook</span><ArrowRight size={17} /></a>
          <a href="https://www.instagram.com/pahur.foods/" target="_blank" rel="noreferrer"><InstagramIcon /><span>Instagram</span><ArrowRight size={17} /></a>
          <a href="https://www.tiktok.com/@pahur.foods" target="_blank" rel="noreferrer"><TikTokIcon /><span>TikTok</span><ArrowRight size={17} /></a>
        </div>
        <div className="contact-maps">
          {shopLocations.map((shop) => <article key={shop.city}>
            <iframe src={shop.map} title={`${shop.label} contact map`} loading="lazy" tabIndex="-1" referrerPolicy="no-referrer-when-downgrade" />
            <a href={shop.directions} target="_blank" rel="noreferrer"><strong>{shop.city}</strong><small>Open map</small><ArrowRight size={15} /></a>
          </article>)}
        </div>
      </div>
      <div className="contact-form-wrap reveal">
        <p className="kicker">Send an enquiry</p>
        <h2>WHAT CAN WE<br />HELP WITH?</h2>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <label><span>Name <b className="required-mark" aria-hidden="true">*</b></span><input required name="name" autoComplete="name" /></label>
        <label><span>Email <b className="required-mark" aria-hidden="true">*</b></span><input required type="email" name="email" autoComplete="email" /></label>
        <label><span>Phone number <b className="required-mark" aria-hidden="true">*</b></span><input required type="tel" name="phone" autoComplete="tel" inputMode="tel" /></label>
        <label>I’m asking about<select name="subject" defaultValue={subject}><option value="general">Something else</option><option value="order">Placing an order</option><option value="wholesale">Wholesale</option><option value="stockist">Becoming a stockist</option></select></label>
        <label><span>Message <b className="required-mark" aria-hidden="true">*</b></span><textarea required name="message" rows="5" /></label>
        <button className="submit-button" type="submit">Send enquiry <ArrowRight /></button>
        {sent && <p className="form-note" role="status">Thanks! This demo form is ready to connect to your preferred email or form service.</p>}
        </form>
      </div>
    </section>
  </>;
}

const shopLocations = [
  {
    city: 'Butwal',
    label: 'Pahur Achar — Butwal',
    map: 'https://www.google.com/maps?q=27.6803062,83.46196&z=17&output=embed',
    directions: 'https://www.google.com/maps/place/Pahur+achar-Nepal%E2%80%99s+best+achar/@27.6803062,83.46196,17z/data=!3m1!4b1!4m6!3m5!1s0x39968748927e6a61:0xdee1b0ae0e98291e!8m2!3d27.6803062!4d83.46196!16s%2Fg%2F11wj5c83r4!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    city: 'Pokhara',
    label: 'Pahur Achar — Pokhara',
    map: 'https://www.google.com/maps?q=28.2084504,83.9638844&z=17&output=embed',
    directions: "https://www.google.com/maps/place/Pahur+achar+-+Nepal's+best+achar/@28.2084504,83.9638844,17z/data=!3m1!4b1!4m6!3m5!1s0x3995950072f83897:0xfdf5ec58f48a1559!8m2!3d28.2084504!4d83.9638844!16s%2Fg%2F11nq1qdbqj!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
  },
];

function LocationsPage() {
  return <div className="locations-page">
    <section className="locations-hero reveal">
      <div><p className="kicker">Visit Pahur</p><h1>TWO SHOPS.<br /><em>ONE BOLD PANTRY.</em></h1></div>
      <p>Find Pahur Foods in Butwal and Pokhara. Open either map for directions to the shop.</p>
    </section>
    <section className="shop-map-grid">
      {shopLocations.map((shop, index) => <article className="shop-map reveal" key={shop.city}>
        <div className="shop-map-heading"><span>0{index + 1}</span><div><p className="kicker">Pahur shop</p><h2>{shop.city}</h2></div></div>
        <iframe src={shop.map} title={`${shop.label} map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <a href={shop.directions} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={18} /></a>
      </article>)}
    </section>
    <Wholesale />
  </div>;
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1650);
    return () => window.clearTimeout(timer);
  }, []);

  return <>
    {loading && <Preloader />}
    <Layout><Routes><Route path="/" element={<Home />} /><Route path="/products" element={<ProductsPage />} /><Route path="/our-story" element={<StoryPage />} /><Route path="/locations" element={<LocationsPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<Home />} /></Routes></Layout>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>);
