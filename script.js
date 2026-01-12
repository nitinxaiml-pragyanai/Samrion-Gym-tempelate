:root {
    --primary: #E0435A;
    --primary-dark: #c23348;
    --bg-dark: #0B0F1A;
    --bg-card: #151A26;
    --bg-light: #0e121d;
    --text-white: #ffffff;
    --text-gray: #A0A6B1;
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Inter', sans-serif;
    --nav-height: 80px;
    --transition: all 0.3s ease;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: var(--nav-height); }
body { font-family: var(--font-body); background-color: var(--bg-dark); color: var(--text-gray); line-height: 1.6; overflow-x: hidden; }
h1, h2, h3, h4 { font-family: var(--font-heading); color: var(--text-white); }
ul { list-style: none; }
a { text-decoration: none; color: inherit; transition: var(--transition); }
img { max-width: 100%; display: block; }

/* Utilities */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.text-primary { color: var(--primary); }
.bg-light { background-color: var(--bg-light); }
.full-width { width: 100%; display: block; text-align: center; }
.section { padding: 80px 0; }
.section-header { text-align: center; margin-bottom: 50px; }
.section-header h2 { font-size: 2.5rem; margin-bottom: 10px; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px; }

/* Placeholders for images */
.gradient-1 { background: linear-gradient(45deg, #E0435A, #0B0F1A); }
.gradient-2 { background: linear-gradient(45deg, #151A26, #444); }
.gradient-3 { background: linear-gradient(45deg, #333, #000); }
.bg-gray { background-color: #333; }

/* Buttons */
.btn { display: inline-block; padding: 12px 30px; font-weight: 600; text-transform: uppercase; border-radius: 5px; font-size: 0.9rem; border: 2px solid transparent; }
.btn-primary { background-color: var(--primary); color: white; }
.btn-primary:hover { background-color: var(--primary-dark); transform: translateY(-2px); }
.btn-outline { border-color: white; color: white; }
.btn-outline:hover { background: white; color: var(--bg-dark); }

/* Navbar */
.navbar { height: var(--nav-height); background: rgba(11, 15, 26, 0.95); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid rgba(255,255,255,0.05); }
.nav-container { height: 100%; display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 1.5rem; font-weight: 800; color: white; text-transform: uppercase; }
.logo span { color: var(--primary); }
.nav-links { display: flex; gap: 30px; }
.nav-links a.active { color: var(--primary); }
.btn-nav { background: var(--primary); padding: 8px 20px; border-radius: 4px; color: white !important; }
.hamburger { display: none; cursor: pointer; }
.hamburger span { display: block; width: 25px; height: 3px; background: white; margin: 5px 0; transition: 0.3s; }

/* Hero */
.hero { height: 100vh; min-height: 600px; display: flex; align-items: center; position: relative; background: linear-gradient(135deg, rgba(11,15,26,0.9), rgba(11,15,26,0.6)), linear-gradient(to right, #0B0F1A, #2a0b12); margin-top: -80px; padding-top: 80px; }
.hero-content { position: relative; z-index: 2; max-width: 800px; }
.hero h1 { font-size: 3.5rem; margin-bottom: 20px; line-height: 1.1; font-weight: 800; }
.hero p { font-size: 1.2rem; margin-bottom: 30px; max-width: 600px; }
.hero-btns { display: flex; gap: 15px; margin-bottom: 50px; }
.stats-row { display: flex; gap: 60px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; }
.stat-item h3 { font-size: 2.5rem; color: var(--primary); }

/* Cards */
.card { background: var(--bg-card); border-radius: 10px; overflow: hidden; transition: var(--transition); border: 1px solid transparent; }
.card:hover { transform: translateY(-5px); border-color: var(--primary); }
.feature-card, .pricing-card { padding: 40px 30px; }
.icon-box { width: 60px; height: 60px; background: rgba(224,67,90,0.1); color: var(--primary); display: flex; justify-content: center; align-items: center; border-radius: 50%; margin-bottom: 20px; }
.icon-box svg { width: 30px; height: 30px; }

/* Programs */
.program-img { height: 200px; width: 100%; }
.program-content { padding: 25px; }

/* Pricing */
.pricing-card.popular { border-color: var(--primary); transform: scale(1.05); background: linear-gradient(180deg, var(--bg-card), rgba(224,67,90,0.1)); }
.price { font-size: 3rem; font-weight: 700; color: white; margin: 20px 0; }
.price span { font-size: 1rem; color: var(--text-gray); font-weight: 400; }
.pricing-card ul { margin-bottom: 30px; text-align: left; }
.pricing-card li { margin-bottom: 10px; }
.check { color: var(--primary); margin-right: 10px; }
.disabled { opacity: 0.5; text-decoration: line-through; }
.badge { background: var(--primary); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; display: inline-block; margin-bottom: 10px; }

/* Trainers & Transformations */
.trainer-img { height: 300px; width: 100%; }
.trainer-info { padding: 20px; text-align: center; }
.transform-img-box { height: 250px; display: flex; }
.transform-img-box div { width: 50%; display: flex; justify-content: center; align-items: center; font-weight: 700; color: rgba(255,255,255,0.5); }
.transform-img-box .before { background: #333; }
.transform-img-box .after { background: var(--primary); color: white; }
.transform-text { padding: 20px; }

/* Testimonials */
.testimonial-slider { max-width: 800px; margin: 0 auto; overflow: hidden; position: relative; }
.slider-track { display: flex; transition: transform 0.5s ease; }
.slide { min-width: 100%; padding: 40px; background: var(--bg-card); border-radius: 10px; text-align: center; }
.slider-nav { display: flex; justify-content: center; gap: 20px; margin-top: 20px; }
.prev-btn, .next-btn { background: transparent; border: 1px solid white; color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; }
.prev-btn:hover, .next-btn:hover { background: var(--primary); border-color: var(--primary); }
.dots { display: flex; gap: 10px; align-items: center; }
.dot { width: 10px; height: 10px; background: #555; border-radius: 50%; cursor: pointer; }
.dot.active { background: var(--primary); }

/* FAQ */
.accordion { max-width: 800px; margin: 0 auto; }
.accordion-item { background: var(--bg-card); margin-bottom: 15px; border-radius: 5px; }
.accordion-header { width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; }
.accordion-body { max-height: 0; overflow: hidden; padding: 0 20px; transition: 0.3s; background: rgba(0,0,0,0.2); }
.accordion-item.active .accordion-body { padding: 20px; max-height: 200px; }

/* Contact & Footer */
.contact-form-wrapper { background: var(--bg-card); padding: 40px; border-radius: 10px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; margin-bottom: 8px; font-size: 0.9rem; }
.form-group input, .form-group select { width: 100%; padding: 12px; background: var(--bg-dark); border: 1px solid #333; color: white; border-radius: 5px; }
.map-placeholder { width: 100%; height: 200px; background: #222; display: flex; justify-content: center; align-items: center; border-radius: 10px; margin-top: 20px; border: 2px dashed #444; }
footer { background: #05070a; padding: 60px 0 20px; border-top: 1px solid #222; margin-top: 50px; }
.footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
.copyright { text-align: center; border-top: 1px solid #222; padding-top: 20px; font-size: 0.9rem; }

/* Floating WhatsApp */
.whatsapp-float { position: fixed; bottom: 30px; right: 30px; background-color: #25d366; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 9999; animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); } 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); } }

/* Scroll Reveal */
.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

/* Mobile */
@media (max-width: 992px) { .hero h1 { font-size: 3rem; } .footer-grid { grid-template-columns: 1fr; text-align: center; } }
@media (max-width: 768px) {
    .nav-links { position: absolute; top: 80px; right: 0; width: 100%; height: 0; background: var(--bg-dark); flex-direction: column; overflow: hidden; transition: 0.4s; border-bottom: 1px solid #222; align-items: center; padding: 0; }
    .nav-links.nav-active { height: 350px; padding: 20px 0; }
    .hamburger { display: block; }
    .hero h1 { font-size: 2.2rem; }
    .stats-row { flex-wrap: wrap; justify-content: center; gap: 30px; }
}
