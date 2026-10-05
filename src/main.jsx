import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, Menu, X } from 'lucide-react';
import { locations, products } from './content';
import logo from './assets/logo.png';
import combo from './assets/combo.webp';

import achar from './assets/achar.webp';
import hero from './assets/hero.webp';
import pahurBags from './assets/pahurbags.webp';
import './styles.css';

const images = { logo, combo, achar, hero, pahurbags: pahurBags };
const asset = (name) => images[name.replace(/\.(png|webp)$/, '')];

function FacebookIcon() {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5V7c0-1.1.7-1.5 1.7-1.5H18V2h-3.2C11.7 2 10 3.9 10 6.7v1.8H7V12h3v10h4V12h3.2l.5-3.5H14Z" /></svg>;
}

function InstagramIcon() {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" /></svg>;
}

function Logo() {
  return <img className="logo" src={asset('logo.png')} alt="Pahur Foods" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
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
  return (
    <footer className="footer">
      <div><Logo /><p>Uplifting your meal.</p></div>
      <div className="footer-links">
        <Link to="/products">Products</Link><Link to="/our-story">Our Story</Link><Link to="/contact">Contact</Link>
      </div>
      <div className="footer-socials">
        <a href="https://www.facebook.com/aayokhana/" target="_blank" rel="noreferrer"><FacebookIcon /> Facebook</a>
        <a href="https://www.instagram.com/pahur.foods/" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Pahur Foods<br />Pokhara, Nepal</p>
    </footer>
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
        <h1>SMALL JAR.<br /><em>BIG</em> FLAVOUR.</h1>
        <p className="hero-intro">A little Pahur. A lot of flavour. Bring your everyday meals to life.</p>
        <div className="hero-actions">
          <Link className="hero-primary" to="/products">Explore Our Achar</Link>
          <Link className="hero-secondary" to="/#where">Where to Buy <ArrowRight size={18} /></Link>
        </div>
      </div>
      <div className="hero-visual reveal">
        <img className="hero-store-img" src={asset('hero.webp')} alt="Inside the Pahur Foods shop in Pokhara" />
        <div className="hero-products" aria-hidden="true">
          <img src={products[4].image} alt="" />
          <img src={products[2].image} alt="" />
        </div>
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

function ProductTile({ product, index }) {
  return (
    <article className={`product-tile ${product.tone} reveal`}>
      <div className="tile-image">
        <img src={product.image} alt={product.name} />
        <span>0{index + 1}</span>
      </div>
      <div className="tile-copy">
        <div><p className="kicker">{product.eyebrow}</p><h2>{product.name}</h2></div>
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

function Home() {
  return <>
    <Hero />
    <div className="ticker"><div>A LITTLE PAHUR WITH EVERY MEAL. ✦ A LITTLE PAHUR WITH EVERY MEAL. ✦ A LITTLE PAHUR WITH EVERY MEAL.</div></div>
    <section className="products-intro section-pad reveal">
      <p className="kicker">Made to go with everything</p>
      <h2>MEET THE<br /><em>PAHUR PANTRY.</em></h2>
      <p className="intro-note">Everyday Nepali favourites, packed and ready for the table.</p>
    </section>
    <section className="product-stack">{products.slice(0, 3).map((p, i) => <ProductFeature product={p} index={i} key={p.name} />)}</section>
    <section className="story-preview section-pad">
      <div className="story-photo reveal"><img src={asset('pahurbags.webp')} alt="Customers holding Pahur combo bags outside the Pahur shop" /><span>पोखरा • नेपाल</span></div>
      <div className="story-copy reveal"><p className="kicker">The Pahur story</p><h2>FROM OUR<br />SHOP TO<br /><em>YOUR TABLE.</em></h2><p>Pahur is rooted in the flavours people know and love. We make food that belongs beside the everyday meal—and makes it hit differently.</p><ArrowLink to="/our-story">Read our story</ArrowLink></div>
    </section>
    <section className="meal-banner reveal">
      <img src={asset('achar.webp')} alt="Pahur chicken timur achar jars with a serving bowl" />
      <div><p className="kicker">One spoon changes everything</p><h2>Your everyday meal,<br /><em>uplifted.</em></h2></div>
    </section>
    <WhereToBuy />
    <Wholesale />
  </>;
}

function PageHero({ eyebrow, title, children }) {
  return <section className="page-hero"><p className="kicker">{eyebrow}</p><h1>{title}</h1>{children}</section>;
}

function ProductsPage() {
  return <div className="products-page">
    <section className="products-hero">
      <div className="products-hero-copy reveal">
        <p className="kicker">The Pahur pantry</p>
        <h1>ONE TABLE.<br /><em>MANY FLAVOURS.</em></h1>
        <p>Explore the full Pahur range—from garlic and timur to fish, buff, chicken and mango.</p>
      </div>
      <div className="products-hero-images reveal">
        <img src={products[0].image} alt={products[0].name} />
        <img src={products[1].image} alt={products[1].name} />
        <img src={products[2].image} alt={products[2].name} />
        <span>08 products · one bold pantry</span>
      </div>
    </section>
    <section className="product-catalog section-pad">{products.map((p, i) => <ProductTile product={p} index={i} key={p.name} />)}</section>
    <section className="combo-feature section-pad reveal">
      <div><p className="kicker">Better together</p><h2>THE NON-VEG<br /><em>COMBO.</em></h2><p>A selection of Pahur favourites packed together for gifting, sharing or stocking the pantry.</p><ArrowLink to="/contact?subject=order">Ask about the combo</ArrowLink></div>
      <img src={asset('combo.webp')} alt="Pahur Non Veg Combo pack" />
    </section>
    <Wholesale />
  </div>;
}

function StoryPage() {
  return <>
    <section className="story-hero">
      <div className="story-hero-copy reveal">
        <p className="kicker">Our Story</p>
        <h1>MADE FOR<br />THE <em>EVERYDAY.</em></h1>
        <p>Pahur is rooted in the flavours people know and love—and in the simple idea that an everyday meal can always use a little lift.</p>
      </div>
      <div className="story-hero-image reveal">
        <img src={asset('pahurbags.webp')} alt="Customers holding Pahur combo bags outside the shop" />
        <span>पाहुर · Our story</span>
      </div>
    </section>
    <section className="story-chapters">
      <article className="story-chapter chapter-meal reveal">
        <div className="chapter-image chapter-bag"><img src={asset('combo.webp')} alt="Complete Pahur Non Veg Combo bag outside the shop" /></div>
        <div className="chapter-copy"><p className="kicker">Chapter 01 · At the table</p><h2>EVERYDAY FOOD,<br /><em>TURNED UP.</em></h2><p>Pahur belongs beside the meals people already know and love—a simple addition that gives the everyday plate a bolder character.</p></div>
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
        <div><p className="kicker">Say namaste</p><h1>LET’S TALK<br /><em>FOOD.</em></h1><p>Orders, stockist questions, wholesale or collaborations—send us a note.</p></div>
        <div className="contact-shop"><img src={asset('hero.webp')} alt="Inside the Pahur shop" /><p><strong>Pahur Shop</strong><br />Pokhara, Nepal<br />Contact us for current address and hours.</p></div>
        <div className="contact-socials">
          <a href="https://www.facebook.com/aayokhana/" target="_blank" rel="noreferrer"><FacebookIcon /><span>Facebook</span><ArrowRight size={17} /></a>
          <a href="https://www.instagram.com/pahur.foods/" target="_blank" rel="noreferrer"><InstagramIcon /><span>Instagram</span><ArrowRight size={17} /></a>
        </div>
      </div>
      <div className="contact-form-wrap reveal">
        <p className="kicker">Send an enquiry</p>
        <h2>WHAT CAN WE<br />HELP WITH?</h2>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <label>Name<input required name="name" autoComplete="name" /></label>
        <label>Email<input required type="email" name="email" autoComplete="email" /></label>
        <label>I’m asking about<select name="subject" defaultValue={subject}><option value="general">Something else</option><option value="order">Placing an order</option><option value="wholesale">Wholesale</option><option value="stockist">Becoming a stockist</option></select></label>
        <label>Message<textarea required name="message" rows="5" /></label>
        <button className="submit-button" type="submit">Send enquiry <ArrowRight /></button>
        {sent && <p className="form-note" role="status">Thanks! This demo form is ready to connect to your preferred email or form service.</p>}
        </form>
      </div>
    </section>
  </>;
}

function App() {
  return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/products" element={<ProductsPage />} /><Route path="/our-story" element={<StoryPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<Home />} /></Routes></Layout>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>);
