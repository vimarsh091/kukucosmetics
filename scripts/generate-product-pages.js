const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const menuHtml = `
          <ul id="main-menu">
            <li><a href="index.html">Home</a></li>
            <li onclick="toggleSubmenu(event)">
              <a href="#">Products ▾</a>
              <ul>
                <li onclick="toggleSubmenu(event)">
                  <a href="#">Face Care ▸</a>
                  <ul>
                    <li onclick="toggleSubmenu(event)">
                      <a href="Face Wash.html">Face Wash ▸</a>
                      <ul>
                        <li><a href="waterless face wash.html">Waterless Face Wash</a></li>
                      </ul>
                    </li>
                    <li><a href="Face Serum.html">Face Serum</a></li>
                    <li onclick="toggleSubmenu(event)">
                      <a href="#">Sunscreen Lotion ▸</a>
                      <ul>
                        <li><a href="#">Invisible Sunscreen SPF 50-75</a></li>
                      </ul>
                    </li>
                    <li><a href="Sunscreen lotion.html">Sunscreen Lotion</a></li>
                    <li><a href="Face Cream.html">Face Cream</a></li>
                    <li><a href="Face toner.html">Face Toner</a></li>
                    <li><a href="Face gel.html">Face Gel</a></li>
                    <li><a href="Under eye gel.html">Under Eye Gel</a></li>
                    <li><a href="Face peel.html">Face Peel</a></li>
                  </ul>
                </li>
                <li onclick="toggleSubmenu(event)">
                  <a href="#">Hair Care ▸</a>
                  <ul>
                    <li><a href="Shampoo.html">Shampoo</a></li>
                    <li><a href="Conditioner.html">Conditioner</a></li>
                    <li><a href="Hair Serum.html">Hair Serum</a></li>
                    <li><a href="Hair oil.html">Hair Oil</a></li>
                  </ul>
                </li>
                <li onclick="toggleSubmenu(event)">
                  <a href="#">Intimate Care ▸</a>
                  <ul>
                    <li><a href="Lube Gel.html">Lube Gel</a></li>
                    <li><a href="Menstrual Cup Lubricant.html">Menstrual Cup Lubricant</a></li>
                    <li><a href="Intimate Foam Wash.html">Intimate Foam Wash</a></li>
                    <li><a href="Intimate Gel Wash.html">Intimate Gel Wash</a></li>
                    <li><a href="Menstrual Cup Wash.html">Menstrual Cup Wash</a></li>
                    <li><a href="Intimate Whitening Cream.html">Intimate Whitening Cream</a></li>
                    <li><a href="Breast Tightening Cream.html">Breast Tightening Cream</a></li>
                    <li><a href="Penis Tightening Cream.html">Penis Tightening Cream</a></li>
                    <li><a href="Penis Whitening Cream.html">Penis Whitening Cream</a></li>
                    <li><a href="Vaginal Tightening Cream.html">Vaginal Tightening Cream</a></li>
                    <li><a href="Stretch Mark Cream.html">Stretch Mark Cream</a></li>
                    <li><a href="Stretch Mark Oil.html">Stretch Mark Oil</a></li>
                    <li><a href="Intimate Moisturizing Oil.html">Intimate Moisturizing Oil</a></li>
                    <li><a href="Breast Tightening Oil.html">Breast Tightening Oil</a></li>
                  </ul>
                </li>
                <li onclick="toggleSubmenu(event)">
                  <a href="#">Body Care ▸</a>
                  <ul>
                    <li><a href="Body Wash.html">Body Wash</a></li>
                    <li><a href="Body spray.html">Body Spray</a></li>
                    <li><a href="Body sunscreen spray.html">Body Sunscreen Spray</a></li>
                    <li><a href="Mosquito repellent cream.html">Mosquito Repellent Cream</a></li>
                    <li><a href="Lotion.html">Lotion</a></li>
                  </ul>
                </li>
                <li onclick="toggleSubmenu(event)">
                  <a href="#">Personal Care ▸</a>
                  <ul>
                    <li><a href="Under Arm Roller.html">Underarm Roller</a></li>
                    <li><a href="Underarms Whitening Serum.html">Underarm Whitening Serum</a></li>
                    <li><a href="Foot Crame.html">Foot Cream</a></li>
                    <li><a href="Lip Balm.html">Lip Balm</a></li>
                  </ul>
                </li>
                <li onclick="toggleSubmenu(event)">
                  <a href="#">Men's Grooming ▸</a>
                  <ul>
                    <li><a href="Beard Oil.html">Beard Oil</a></li>
                    <li><a href="Beard Wash.html">Beard Wash</a></li>
                    <li><a href="Beard Wax.html">Beard Wax (Strong Hold)</a></li>
                  </ul>
                </li>
                <li onclick="toggleSubmenu(event)">
                  <a href="#">Baby Care ▸</a>
                  <ul>
                    <li><a href="Baby Cream.html">Baby Cream</a></li>
                    <li><a href="Baby lotion.html">Baby Lotion</a></li>
                    <li><a href="Baby shampoo.html">Baby Shampoo (Sulfate Free)</a></li>
                    <li><a href="Baby face wash.html">Baby Face Wash</a></li>
                    <li><a href="Baby hair oil.html">Baby Hair Oil</a></li>
                    <li><a href="Baby massage oil.html">Baby Massage Oil</a></li>
                    <li><a href="Baby sunscreen.html">Baby Sunscreen</a></li>
                    <li><a href="Baby Lip Balm.html">Baby Lip Balm</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="manufacturing.html">Manufacturing</a></li>
            <li><a href="Quality.html">Quality</a></li>
            <li><a href="privetLable.html">Private Label</a></li>
            <li><a href="contact us.html">Contact</a></li>
          </ul>
`;

const footerHtml = `
<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-right">
        <div class="logo-img">
          <a href="index.html"><img src="./image/KUKU COSMETICS (1).svg" alt="logo"></a>
        </div>
        <div class="footer-content">
          <p>328 sahitya industrial park, kujad road bakrol - bujarang - dascroi, Ahmedabad-382430, Gujarat, India.</p>
        </div>
        <div class="social-icon">
          <div class="social-icon-img">
            <a href="https://wa.me/918866915181" target="_blank" rel="noopener noreferrer">
              <img src="./image/whatsapp-brands-solid-full.svg" alt="WhatsApp">
            </a>
          </div>
        </div>
      </div>
      <div class="footer-left">
        <div class="footer-left-menu">
          <h6>Category</h6>
          <ul>
            <li><a href="Face Wash.html">Face care</a></li>
            <li><a href="Hair Care.html">Hair Care</a></li>
            <li><a href="Intimate Gel Wash.html">Intimate Care</a></li>
            <li><a href="Body Care.html">Body Care</a></li>
            <li><a href="Personal Care.html">Personal Care</a></li>
            <li><a href="Mens Grooming.html">Men's Grooming</a></li>
            <li><a href="Baby Cream.html">Baby Care</a></li>
          </ul>
        </div>
        <div class="footer-left-menu">
          <h6>Services</h6>
          <ul>
            <li><a href="privetLable.html">Private Label</a></li>
            <li><a href="manufacturing.html">Manufacturing</a></li>
            <li><a href="Quality.html">Quality</a></li>
          </ul>
        </div>
        <div class="footer-left-menu">
          <h6>Information</h6>
          <div class="location">
            <div class="location-img">
              <img src="./image/fi_542689.png" alt="mail">
            </div>
            <a href="#" onclick="openEmail()">kukucosmetics25@gmail.com</a>
          </div>
          <div class="location phone">
            <div class="location-img">
              <img src="./image/fi_152851.png" alt="phone">
            </div>
            <a href="tel:8866915181">+91 8866915181</a>
          </div>
          <div class="location email">
            <div class="location-img">
              <img src="./image/Group (35).png" alt="location">
            </div>
            <p><a href="https://www.google.com/maps?q=328+sahitya+industrial+park,+kujad+road+bakrol+-+bujarang+-+dascroi,+Ahmedabad" target="_blank" rel="noopener noreferrer">328 sahitya industrial park, kujad road bakrol - bujarang - dascroi, Ahmedabad.</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

const pages = [
  {
    file: "Face Wash.html",
    title: "Face Wash",
    eyebrow: "Face Care Collection",
    image: "./image/face_wash.svg",
    introTitle: "Science-backed cleansing with botanical flexibility",
    intro: "At Kuku Cosmetics, we manufacture a comprehensive range of face washes and facial cleansers developed with a balance of science, safety, and performance. Our formulations are designed for daily use, suitable for multiple skin types, and can be customized based on brand requirements.",
    highlights: ["Sulphate free options", "pH balanced", "Dermatologically tested bases", "Custom actives, fragrance, color and packaging"],
    ranges: [
      { title: "Natural & Herbal Face Wash Range", intro: "Formulated with plant-based extracts for gentle yet effective cleansing.", items: [["Natural Face Wash", "Mild daily cleanser for all skin types"], ["Herbal Face Wash", "Traditional botanical blend"], ["Ayurvedic Face Wash", "Inspired by classical Ayurvedic ingredients"], ["Neem & Basil Face Wash", "Helps control excess oil and breakouts"], ["Aloe Vera Face Wash", "Soothing and hydrating"], ["Turmeric Face Wash", "Supports clear and healthy-looking skin"]] },
      { title: "Active & Dermatological Face Wash Range", intro: "Targeted solutions for specific skin concerns using proven actives.", items: [["Salicylic Acid Face Wash", "Acne-prone and oily skin"], ["Benzoyl Peroxide Face Wash", "Advanced anti-acne care"], ["Glycolic Acid Face Wash", "Mild exfoliation and skin renewal"], ["Niacinamide Face Wash", "Supports barrier repair and oil balance"], ["Vitamin C Face Wash", "Brightening and antioxidant support"], ["Tea Tree Face Wash", "Clarifying and purifying action"]] },
      { title: "Skin Type & Texture Formats", intro: "Balanced formulations aligned with texture preferences and skin goals.", items: [["Face Wash for Oily Skin", "Controls excess sebum"], ["Hydrating Face Wash", "Maintains moisture balance"], ["Face Wash for Sensitive Skin", "Mild and soothing"], ["Foaming Face Wash", "Light foam for deep cleansing"], ["Face Wash Cream", "Rich, creamy cleanser"], ["Waterless Face Wash", "Innovative low-water formulation"]] },
    ],
    ctaTitle: "Customization & manufacturing support",
    ctaItems: ["Active concentration customization", "Texture and fragrance selection", "Color and packaging options", "MOQ flexibility", "Regulatory and quality support"],
  },
  {
    file: "Face Serum.html",
    title: "Face Serum",
    eyebrow: "Face Care Collection",
    image: "./image/face_syrum.svg",
    introTitle: "Advanced, customizable serum solutions",
    intro: "At Kuku Cosmetics, we manufacture a wide range of high-performance face serums formulated with clinically proven actives and modern delivery systems. Our serums are designed for targeted skin concerns, fast absorption, and high stability for private label and contract manufacturing.",
    highlights: ["Lightweight and non-greasy", "High-purity actives", "Custom strengths available", "Dermatologically tested bases"],
    ranges: [
      { title: "Vitamin C Serum Range", intro: "Brightening and antioxidant formulations for radiant, even-toned skin.", items: [["Vitamin C Serum (5%, 10%, 15%)", "Enhances glow and reduces dullness"], ["Vitamin C + Hyaluronic Acid Serum", "Brightening with deep hydration"], ["Vitamin C + Vitamin E Serum", "Antioxidant protection and nourishment"], ["Vitamin C + Niacinamide Serum", "Brightening with barrier support"], ["Vitamin C + Ferulic Acid Serum", "Advanced antioxidant stability"], ["Vitamin C + Alpha Arbutin Serum", "Targets pigmentation and dark spots"]] },
      { title: "Niacinamide Serum Range", intro: "Oil-balancing and barrier-strengthening solutions.", items: [["Niacinamide Serum (5%, 10%, 15%)", "Controls oil and refines pores"], ["Niacinamide + Zinc Serum", "Acne-prone and oily skin care"], ["Niacinamide + Hyaluronic Acid Serum", "Hydration with oil balance"], ["Niacinamide + Alpha Arbutin Serum", "Brightening and tone correction"], ["Niacinamide + Salicylic Acid Serum", "Acne control and pore cleansing"], ["Niacinamide + Acetyl Glucosamine Serum", "Improves skin clarity"]] },
      { title: "Treatment & Targeted Serum Range", intro: "Solutions for specific skin concerns and advanced care routines.", items: [["Night Serum", "Skin repair and renewal support"], ["Retinol Serum", "Anti-aging and skin renewal"], ["Hydrating Serum", "Long-lasting moisture support"], ["Peptide Serum", "Supports skin firmness"], ["Kojic Acid Serum", "Pigmentation and dark spot care"], ["Salicylic Acid / Acne Serum", "Clears pores and controls breakouts"]] },
    ],
    ctaTitle: "End-to-end serum manufacturing",
    ctaItems: ["Active concentration customization", "Texture and absorption profile selection", "Fragrance-free and sensitive-skin options", "Packaging in dropper, pump and airless", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Sunscreen lotion.html",
    title: "Sunscreen Lotion",
    eyebrow: "Sun Care Collection",
    image: "./image/sunscreen_lotion.svg",
    introTitle: "Broad-spectrum sun protection with cosmetic elegance",
    intro: "At Kuku Cosmetics, we manufacture a complete range of broad-spectrum sunscreen products designed to provide effective UVA and UVB protection with superior skin feel. These formulations are developed for modern performance, safety, and cosmetic elegance.",
    highlights: ["Broad-spectrum UVA and UVB protection", "Photostable and skin-friendly filters", "Non-greasy lightweight options", "White-cast-free formulations available"],
    ranges: [
      { title: "Sunscreen Lotion Range", intro: "High-performance sun protection for daily and outdoor use.", items: [["Sunscreen Lotion", "Daily sun protection with a smooth, non-sticky feel"], ["Water-Resistant Sunscreen", "Long-lasting protection during sweat and water exposure"], ["Invisible Sunscreen Lotion", "Lightweight, fast-absorbing and no white cast"], ["Mineral Sunscreen Lotion", "Zinc oxide-based gentle protection"], ["Hybrid Sunscreen Lotion", "Combination of mineral and organic UV filters"]] },
      { title: "Available Sunscreen Formulations", intro: "Multiple delivery formats to suit different brand and consumer preferences.", items: [["Cream Sunscreen", "Rich and moisturizing"], ["Lotion Sunscreen", "Lightweight and spreadable"], ["Stick Sunscreen", "Travel-friendly and mess-free"], ["Gel Sunscreen", "Oil-free matte finish"], ["Spray Sunscreen", "Quick and easy application"]] },
    ],
    ctaTitle: "Sunscreen customization capabilities",
    ctaItems: ["SPF 30, SPF 50 and SPF 50+ options", "PA rating choices from PA++ to PA++++", "Water-resistance testing support", "Mineral, chemical and hybrid filter systems", "Custom packaging and MOQ flexibility"],
  },
  {
    file: "Face Cream.html",
    title: "Face Cream",
    eyebrow: "Face Care Collection",
    image: "./image/face_cream.svg",
    introTitle: "Advanced daily care and targeted treatment creams",
    intro: "At Kuku Cosmetics, we manufacture a complete range of face creams and gels formulated to deliver hydration, nourishment, and visible skin improvement. The bases are designed for excellent spreadability, fast absorption, and long-term skin comfort.",
    highlights: ["Lightweight to rich textures", "Dermatologically tested bases", "Non-greasy skin-friendly options", "Custom actives and strengths"],
    ranges: [
      { title: "Daily Care & Moisturizing Range", intro: "Formulated to maintain skin hydration and softness throughout the day.", items: [["Moisturizing Cream", "Long-lasting hydration and barrier support"], ["Nourishing Face Cream", "Deep nourishment for healthy-looking skin"], ["Aloe Vera Cream", "Soothing and calming hydration"], ["Aloe Vera Gel", "Lightweight, oil-free hydration"], ["Tinted Glow Moisturizer", "Light coverage with natural radiance"]] },
      { title: "Brightening & Night Repair Range", intro: "Designed to enhance skin tone, luminosity, and overnight renewal.", items: [["Brightening Face Cream", "Improves dull and uneven skin tone"], ["Glow Cream", "Enhances natural radiance"], ["Golden Pearl Cream", "Premium glow-boosting formulation"], ["Night Cream", "Overnight nourishment and recovery"], ["Anti-Wrinkle Cream", "Helps reduce the appearance of fine lines"], ["Retinol Cream", "Advanced skin renewal and anti-aging care"]] },
      { title: "Targeted Treatment Cream Range", intro: "Solutions for specific skin concerns and market requirements.", items: [["Skin Tone Correcting Cream", "Supports even skin appearance"], ["Fairness & Glowing Skin Cream", "Enhances brightness and smoothness"], ["Anti-Aging Skin Cream", "Improves skin texture and firmness"]] },
    ],
    ctaTitle: "Complete face cream and gel manufacturing",
    ctaItems: ["Texture customization across gel, lotion and rich cream", "Active ingredient selection and concentration", "Fragrance-free and sensitive-skin options", "Jar, tube and airless pump packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Face toner.html",
    title: "Face Toner",
    eyebrow: "Face Care Collection",
    image: "./image/face_toner.svg",
    introTitle: "Balanced hydration, gentle exfoliation and skin comfort",
    intro: "At Kuku Cosmetics, we manufacture a versatile range of alcohol-free face toners formulated to hydrate, soothe, and rebalance the skin after cleansing. Our toner bases are developed to suit daily use, including sensitive skin.",
    highlights: ["Alcohol-free and skin-friendly", "pH-balancing formulations", "Suitable for sensitive skin", "Lightweight and fast absorbing"],
    ranges: [
      { title: "Hydrating Toner Range", intro: "Designed to replenish moisture and maintain skin balance.", items: [["Hydrating Face Toner", "Restores hydration and freshness"], ["Ceramide Toner", "Supports skin barrier repair"], ["Aloe Vera Toner", "Soothing hydration for daily use"], ["Oat Extract Toner", "Moisture support with calming benefits"]] },
      { title: "Exfoliating & Brightening Toner Range", intro: "Gentle exfoliation for smoother, clearer skin texture.", items: [["Exfoliating Face Toner", "Removes dead skin cells"], ["Vitamin C Face Toner", "Brightening with antioxidant support"], ["Rose Water Toner", "Refreshing and calming"], ["Chamomile Toner", "Reduces skin discomfort"]] },
      { title: "Sensitive Skin & Botanical Support", intro: "Alcohol-free formulations that comfort reactive skin.", items: [["Soothing / Calming Toner", "Ideal for sensitive skin"], ["Ceramides", "Barrier-support ingredient option"], ["Aloe Vera Extract", "Cooling and skin-comforting"], ["Vitamin C Derivatives", "Custom brightening support"]] },
    ],
    ctaTitle: "Complete toner manufacturing solutions",
    ctaItems: ["Alcohol-free and low-irritation bases", "Active and botanical customization", "Fragrance-free options", "Bottle, spray and mist packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Face gel.html",
    title: "Face Gel",
    eyebrow: "Face Care Collection",
    image: "./image/face_gel.svg",
    introTitle: "Lightweight hydration with targeted skin care benefits",
    intro: "At Kuku Cosmetics, we manufacture a range of non-sticky, fast-absorbing face gels designed to deliver instant hydration, soothing care, and targeted skin benefits. These gel formulations are especially suited to oily and acne-prone skin.",
    highlights: ["Oil-free and non-greasy", "Fast-absorbing gel bases", "Suitable for daily use", "Skin-friendly lightweight feel"],
    ranges: [
      { title: "Hydrating & Soothing Gel Range", intro: "Formulated to calm, cool, and moisturize the skin.", items: [["Aloe Vera Face Gel", "Soothes irritation and provides instant hydration"], ["Hyaluronic Acid Gel", "Deep hydration with a plumping effect"]] },
      { title: "Brightening & Clarifying Gel Range", intro: "Designed to enhance glow and support clearer-looking skin.", items: [["Vitamin C Face Gel", "Brightening and antioxidant support"], ["Tea Tree Face Gel", "Helps control breakouts and excess oil"], ["Neem Face Gel", "Purifying and skin-balancing formulation"]] },
      { title: "Fruit-Based Revitalizing Gel Range", intro: "Fresh, lightweight gels enriched with fruit extracts.", items: [["Fruit-Based Face Gel", "Revitalizes dull skin and improves freshness"], ["Multi-Fruit Gel", "Energizing care with natural extracts"]] },
    ],
    ctaTitle: "Complete face gel manufacturing",
    ctaItems: ["Active and botanical customization", "Oil-free, fragrance-free and sensitive-skin options", "Texture and viscosity control", "Jar, tube and pump packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Under eye gel.html",
    title: "Under Eye Gel",
    eyebrow: "Eye Care Collection",
    image: "./image/under_eye_gel.svg",
    introTitle: "Targeted care for bright, refreshed eyes",
    intro: "At Kuku Cosmetics, we manufacture advanced under eye gel formulations designed to address dark circles, puffiness, fine lines, and dehydration. Our lightweight gel bases are non-greasy, fast-absorbing, and suitable for daily use.",
    highlights: ["Lightweight and non-sticky", "Suitable for sensitive under-eye area", "Dermatologically tested bases", "Cooling fast-absorption feel"],
    ranges: [
      { title: "Hydrating & Refreshing Range", intro: "Formulated to replenish moisture and revive tired eyes.", items: [["Hydrating Under Eye Gel", "Provides instant moisture and comfort"], ["Hyaluronic Acid Under Eye Gel", "Deep hydration with plumping effect"]] },
      { title: "Brightening & De-Puffing Range", intro: "Targets dullness, uneven under-eye tone and puffiness.", items: [["Vitamin C Under Eye Gel", "Brightens and improves under-eye appearance"], ["Kojic Acid Under Eye Gel", "Helps reduce the look of dark circles"], ["Caffeine Under Eye Gel", "Helps reduce puffiness and tiredness"], ["Chamomile Under Eye Gel", "Calms and comforts sensitive skin"]] },
      { title: "Anti-Aging Under Eye Range", intro: "Designed to improve firmness and smooth fine lines.", items: [["Anti-Aging Under Eye Gel", "Supports smoother, youthful-looking skin"], ["Peptide Under Eye Gel", "Helps improve skin elasticity"], ["Aloe Vera Under Eye Gel", "Soothing and cooling care"]] },
    ],
    ctaTitle: "Complete under eye gel manufacturing",
    ctaItems: ["Active ingredient customization", "Cooling and de-puffing formulas", "Fragrance-free and sensitive-skin options", "Tube, roll-on and airless packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Face peel.html",
    title: "Face Peel",
    eyebrow: "Exfoliation Collection",
    image: "./image/face_peel.svg",
    introTitle: "Advanced exfoliation for clear, renewed skin",
    intro: "At Kuku Cosmetics, we manufacture a range of professional-grade face peel formulations designed to exfoliate dead skin cells, improve skin texture, and enhance overall radiance. Our peel systems use controlled active concentrations for effective yet skin-friendly performance.",
    highlights: ["Controlled stable active systems", "Dermatologically tested bases", "pH-balanced peel formulations", "Suitable for home-care and professional use"],
    ranges: [
      { title: "AHA & BHA Peel Range", intro: "Targeted exfoliation for texture, clarity and pores.", items: [["Glycolic Acid Face Peel", "Improves texture and skin clarity"], ["Lactic Acid Face Peel", "Gentle exfoliation with hydration support"], ["Mandelic Acid Face Peel", "Mild exfoliation for sensitive skin"], ["Salicylic Acid Face Peel", "Deep pore exfoliation and acne control"], ["AHA + BHA Face Peel", "Improves texture, tone and clarity"]] },
      { title: "Fruit & Brightening Peel Range", intro: "Naturally derived exfoliation with added radiance support.", items: [["Papaya Enzyme Face Peel", "Gentle enzymatic exfoliation"], ["Multi-Fruit Face Peel", "Revitalizing exfoliation with fruit extracts"], ["Vitamin C Face Peel", "Brightening and antioxidant exfoliation"], ["Kojic Acid Face Peel", "Supports pigmentation control"]] },
      { title: "Available Peel Formats", intro: "Flexible delivery systems for brand and user preference.", items: [["Liquid Peels", "Easy-flow professional or retail format"], ["Gel-Based Peels", "Controlled application and comfort"], ["Leave-On Peels", "Extended active contact"], ["Wash-Off Peels", "Quick reset exfoliation"]] },
    ],
    ctaTitle: "Complete face peel manufacturing",
    ctaItems: ["Active type and concentration customization", "pH and exposure-time control", "Home-care and professional-strength options", "Fragrance-free and sensitive-skin formulations", "Dropper bottle, pump and tube packaging"],
  },
  {
    file: "Hair Serum.html",
    title: "Hair Serum",
    eyebrow: "Hair Care Collection",
    image: "./image/Hair_serum.svg",
    introTitle: "Lightweight repair, shine and frizz control",
    intro: "At Kuku Cosmetics, we manufacture a premium range of hair serums formulated to smooth frizz, enhance shine, and protect hair from daily damage. These serum formulations are lightweight, non-sticky, and suitable for all hair types.",
    highlights: ["Non-sticky and fast-absorbing", "Enhances shine and smoothness", "Suitable for all hair types", "Custom actives and variants available"],
    ranges: [
      { title: "Daily Smoothening & Shine Range", intro: "Designed for everyday use and instant hair polish.", items: [["Smoothening Hair Serum", "Controls frizz and adds shine"], ["Anti-Frizz Hair Serum", "Reduces dryness and flyaways"], ["Gloss Hair Serum", "Enhances natural hair shine"]] },
      { title: "Repair & Strengthening Range", intro: "Formulated to support damaged and weak hair.", items: [["Keratin Hair Serum", "Improves smoothness and hair texture"], ["Damage Repair Hair Serum", "Helps protect and restore hair strands"], ["Protein Hair Serum", "Strengthens and conditions hair"]] },
      { title: "Nourishing & Scalp-Friendly Range", intro: "Light nourishment without heaviness.", items: [["Argan Oil Hair Serum", "Softens and improves manageability"], ["Vitamin E Hair Serum", "Nourishes and protects hair"], ["Aloe Vera Hair Serum", "Lightweight hydration and comfort"]] },
    ],
    ctaTitle: "Complete hair serum manufacturing",
    ctaItems: ["Silicone-based and silicone-free options", "Active and oil customization", "Fragrance and texture customization", "Pump, dropper and airless packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Hair oil.html",
    title: "Hair Oil",
    eyebrow: "Hair Care Collection",
    image: "./image/Hair_oil.svg",
    introTitle: "Nourishment, strength and scalp care",
    intro: "At Kuku Cosmetics, we manufacture a wide range of hair oils formulated to nourish the scalp, strengthen hair roots, and improve overall hair health. These blends combine traditional botanical oils with modern actives for daily use and treatment care.",
    highlights: ["Lightweight to rich oil blends", "Scalp-nourishing and hair-strengthening", "Suitable for all hair types", "Custom oils and actives available"],
    ranges: [
      { title: "Daily Nourishing Hair Oil Range", intro: "Designed for regular hair care and scalp nourishment.", items: [["Daily Use Hair Oil", "Maintains scalp health and hair softness"], ["Coconut Hair Oil", "Deep nourishment and moisture retention"], ["Almond Hair Oil", "Improves shine and hair strength"], ["Sesame Hair Oil", "Traditional scalp care and nourishment"]] },
      { title: "Hair Fall & Strengthening Range", intro: "Formulated to support stronger hair and reduce breakage.", items: [["Anti Hair Fall Oil", "Helps reduce hair fall and improve root strength"], ["Onion Hair Oil", "Strengthens roots and supports hair growth"], ["Castor Oil Hair Blend", "Improves hair thickness and strength"]] },
      { title: "Herbal, Ayurvedic & Specialized Range", intro: "Inspired by traditional systems with focused solutions.", items: [["Herbal Hair Oil", "Botanical blend for scalp and hair health"], ["Ayurvedic Hair Oil", "Classical herbs for holistic hair care"], ["Amla Hair Oil", "Improves hair strength and shine"], ["Bhringraj Hair Oil", "Supports scalp nourishment"], ["Cooling Hair Oil", "Refreshing scalp comfort"], ["Non-Sticky Hair Oil", "Lightweight feel with nourishment"]] },
    ],
    ctaTitle: "Complete hair oil manufacturing",
    ctaItems: ["Oil blend customization", "Herbal extract infusion", "Fragrance and sensory customization", "Bottle, pump and dropper packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Shampoo.html",
    title: "Shampoo",
    eyebrow: "Hair Care Collection",
    image: "./image/shampoo.svg",
    introTitle: "Targeted, gentle and performance-driven shampoo solutions",
    intro: "At Kuku Cosmetics, we manufacture a wide range of hair shampoos developed to address scalp health, hair strength, hydration, repair, and protection. Our formulations are designed with mild surfactant systems, skin-friendly pH, and customizable actives.",
    highlights: ["Sulfate-free and mild cleanser options", "Dermatologically tested bases", "Adult, baby and pet care ranges", "Herbal, ayurvedic and active variants"],
    ranges: [
      { title: "Daily Care & Nourishing Shampoo Range", intro: "For regular cleansing and healthy hair maintenance.", items: [["Mild Shampoo", "Gentle daily cleansing"], ["Moisturizing Shampoo", "Hydration for dry hair"], ["Shiny Hair Shampoo", "Improves natural shine"], ["Volumizing Shampoo", "Adds body and lift"], ["Strength Shampoo", "Supports hair strength"], ["Pro-Vitamin Shampoo", "Nourishing daily care"]] },
      { title: "Hair Fall, Repair & Scalp Care Range", intro: "Designed to reduce breakage and improve scalp comfort.", items: [["Anti-Hair Fall Shampoo", "Supports stronger roots"], ["Onion Shampoo / Red Onion Shampoo", "Popular hair fall control format"], ["Keratin Smooth Shampoo", "Smooths stressed hair"], ["Anti-Dandruff Shampoo", "Scalp-focused cleansing and balance"], ["Medicated Shampoo", "Developed as per cosmetic regulations"], ["Apple Cider Vinegar Shampoo", "Clarifying scalp care"]] },
      { title: "Herbal, Baby & Specialty Range", intro: "Flexible collections for multiple consumer segments.", items: [["Herbal Shampoo", "Botanical-inspired cleansing"], ["Ayurvedic Shampoo", "Traditional plant-based care"], ["Baby Shampoo", "Extra-mild for delicate scalp and hair"], ["Softsens Baby Shampoo", "Pediatric-friendly base option"], ["Black Hair Shampoo", "Cosmetic color-deposit shampoo"], ["Hair Colour Shampoo", "Non-permanent color-deposit format"]] },
    ],
    ctaTitle: "Complete shampoo manufacturing",
    ctaItems: ["Sulfate-free, silicone-free and mild cleanser systems", "Active and herbal customization", "Adult, baby and pet-specific bases", "Bottle, pump and sachet packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Conditioner.html",
    title: "Conditioner",
    eyebrow: "Hair Care Collection",
    image: "./image/conditioer.svg",
    introTitle: "Nourishment, repair and manageability solutions",
    intro: "At Kuku Cosmetics, we manufacture a complete range of hair conditioners formulated to smooth, detangle, strengthen, and protect hair. Our conditioner bases are developed with mild conditioning systems suitable for daily use and private label manufacturing.",
    highlights: ["Daily-use conditioning systems", "Repair and strengthening variants", "Herbal and baby care options", "Private label and contract manufacturing ready"],
    ranges: [
      { title: "Daily Care & Nourishing Conditioner Range", intro: "For everyday softness and easy detangling.", items: [["Daily Use Conditioner", "Balanced conditioning for regular use"], ["Mild Conditioner", "Gentle softness and slip"], ["Moisturizing Conditioner", "Supports moisture retention"], ["Nourishing Conditioner", "Helps improve softness and feel"], ["Shiny Hair Conditioner", "Enhances visible gloss"], ["Volumizing Conditioner", "Conditioning without heavy weight"]] },
      { title: "Repair, Strengthening & Smoothening Range", intro: "Designed to reduce breakage and improve manageability.", items: [["Anti Hair Fall Conditioner", "Supports fragile hair care"], ["Protein Conditioner", "Strengthens and conditions"], ["Damage Repair Conditioner", "For stressed and treated hair"], ["Keratin Smooth Conditioner", "Smoothens rough texture"], ["Repair Argan Oil Conditioner", "Nourishing repair support"], ["Anti-Frizz Conditioner", "Polished finish for frizzy hair"]] },
      { title: "Herbal & Baby Care Range", intro: "Inspired by traditional botanical care and extra-mild needs.", items: [["Herbal Conditioner", "Botanical blend for daily softness"], ["Ayurvedic Conditioner", "Classical herb-led positioning"], ["Aloe Vera Conditioner", "Soothing lightweight care"], ["Tea Tree Conditioner", "Clarifying comfort"], ["Baby Conditioner", "Gentle care for delicate hair"], ["Nourishing Baby Conditioner", "Pediatric-friendly softness"]] },
    ],
    ctaTitle: "Complete conditioner manufacturing",
    ctaItems: ["Silicone-free and lightweight options", "Herbal and active customization", "Fragrance and texture control", "Tube, bottle and pump packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Body Wash.html",
    title: "Body Wash",
    eyebrow: "Body Care Collection",
    image: "./image/body_wash.svg",
    introTitle: "Gentle cleansing and skin nourishment",
    intro: "At Kuku Cosmetics, we manufacture a wide range of body washes and shower gels formulated to cleanse, hydrate, and refresh the skin without stripping natural moisture. These formulations use mild surfactant systems and skin-conditioning ingredients for daily use.",
    highlights: ["Sulfate-free options available", "pH-balanced and skin-friendly", "Non-drying formulations", "Custom fragrance and actives"],
    ranges: [
      { title: "Daily Care & Moisturizing Body Wash Range", intro: "Designed for everyday cleansing and hydration.", items: [["Moisturizing Body Wash", "Maintains skin softness and hydration"], ["Hydrating Body Wash", "Supports moisture balance"], ["Creamy Body Wash", "Rich texture with gentle cleansing"], ["Mild Body Wash", "Suitable for daily use"]] },
      { title: "Herbal & Refreshing Body Wash Range", intro: "Infused with botanical extracts for gentle skin care.", items: [["Aloe Vera Body Wash", "Soothing and refreshing"], ["Neem Body Wash", "Purifying and oil-balancing"], ["Tea Tree Body Wash", "Clarifying and refreshing"], ["Herbal Body Wash", "Botanical blend for healthy skin"]] },
      { title: "Brightening & Specialized Body Wash Range", intro: "Targeted solutions for freshness, glow and specific concerns.", items: [["Vitamin C Body Wash", "Brightening and antioxidant care"], ["Coffee Body Wash", "Energizing and refreshing"], ["Charcoal Body Wash", "Deep cleansing and detoxifying"], ["Anti-Acne Body Wash", "Helps control body breakouts"], ["Sensitive Skin Body Wash", "Mild and soothing formulation"]] },
    ],
    ctaTitle: "Complete body wash manufacturing",
    ctaItems: ["Sulfate-free and mild surfactant systems", "Active and botanical customization", "Fragrance and viscosity control", "Bottle, pump and tube packaging", "MOQ flexibility and regulatory support"],
  },
  {
    file: "Lotion.html",
    title: "Body Lotion",
    eyebrow: "Body Care Collection",
    image: "./image/lotion.svg",
    introTitle: "Daily hydration, nourishment and skin comfort",
    intro: "At Kuku Cosmetics, we manufacture a wide range of body lotions formulated to hydrate, soften, and protect the skin. Our lotion formulations are designed with lightweight to rich textures for fast absorption and long-lasting moisture.",
    highlights: ["Lightweight and non-greasy options", "Long-lasting hydration", "Suitable for all skin types", "Custom actives and fragrance options"],
    ranges: [
      { title: "Hydrating & Moisturizing Body Lotion Range", intro: "Designed for daily skin hydration and softness.", items: [["Moisturizing Body Lotion", "Maintains skin hydration"], ["Hydrating Body Lotion", "Supports moisture balance"], ["Deep Nourishing Body Lotion", "Rich care for dry skin"], ["Lightweight Body Lotion", "Fast-absorbing daily use"]] },
      { title: "Herbal & Natural Body Lotion Range", intro: "Infused with botanical ingredients for gentle care.", items: [["Aloe Vera Body Lotion", "Soothing and hydrating"], ["Herbal Body Lotion", "Botanical blend for healthy skin"], ["Coconut Body Lotion", "Deep nourishment and softness"], ["Almond Body Lotion", "Improves smoothness and glow"]] },
      { title: "Brightening & Specialized Body Lotion Range", intro: "Enhances skin radiance and supports specific skin needs.", items: [["Vitamin C Body Lotion", "Brightening and antioxidant care"], ["Glow Body Lotion", "Improves skin radiance"], ["Even Tone Body Lotion", "Supports uniform skin appearance"], ["Sensitive Skin Body Lotion", "Mild and soothing"], ["Men's Body Lotion", "Non-greasy daily hydration"]] },
    ],
    ctaTitle: "Complete body lotion manufacturing",
    ctaItems: ["Texture customization from light to rich lotion", "Active and botanical ingredient selection", "Fragrance and sensory customization", "Bottle, pump and tube packaging", "MOQ flexibility and regulatory support"],
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderRange(range) {
  return `
        <section class="collection-section">
          <div class="container">
            <div class="collection-section-heading">
              <span>${escapeHtml(range.title)}</span>
              <p>${escapeHtml(range.intro)}</p>
            </div>
            <div class="collection-grid">
              ${range.items
                .map(
                  ([name, desc]) => `
                <article class="collection-card">
                  <h3>${escapeHtml(name)}</h3>
                  <p>${escapeHtml(desc)}</p>
                </article>
              `
                )
                .join("")}
            </div>
          </div>
        </section>
  `;
}

function renderPage(page) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(page.title)} | KUKU Cosmetics</title>
  <link rel="icon" type="image/png" href="image/favicon.svg">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />
  <link rel="stylesheet" href="./css/style.css" />
  <link rel="stylesheet" href="./css/responsive.css" />
</head>
<body>
  <div class="header-spacing">
    <header class="header-container">
      <div class="container">
        <div class="top-header">
          <div class="header-content">
            <div class="logo-section">
              <div class="logo">
                <a href="index.html" class="logo">
                  <img src="./image/colored_logo.png" alt="KUKU Cosmetics Logo">
                </a>
              </div>
            </div>
            <div class="company-info">
              <div class="company-tagline">
                <p>Natural Beauty, Bold Confidence Cosmetic Manufacturing &amp; Private Labeling</p>
              </div>
              <p class="company-description">Face care, Body care, Hair care, Personal care &amp; Men's grooming products crafted for quality &amp; confidence.</p>
            </div>
            <div class="action-buttons">
              <a href="contact us.html" class="btn btn-contact">Contact Us</a>
              <a href="https://wa.me/918866915181" class="btn btn-chat" target="_blank" rel="noopener noreferrer">Chat Now</a>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <div class="menu-toggle" id="menu-toggle" onclick="toggleMenu()">☰</div>
${menuHtml}
        </div>
      </nav>
    </header>
  </div>
  <main class="collection-page">
    <section class="collection-hero">
      <div class="container">
        <div class="collection-hero-inner">
          <div class="collection-hero-copy">
            <span class="collection-eyebrow">${escapeHtml(page.eyebrow)}</span>
            <h1>${escapeHtml(page.title)}</h1>
            <h2>${escapeHtml(page.introTitle)}</h2>
            <p>${escapeHtml(page.intro)}</p>
            <ul class="collection-highlight-list">${renderList(page.highlights)}</ul>
            <div class="collection-hero-actions">
              <a href="contact us.html" class="btn">Request Formulation</a>
              <a href="privetLable.html" class="secondary-link">Explore Private Label</a>
            </div>
          </div>
          <div class="collection-hero-visual">
            <div class="collection-image-frame">
              <img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.title)}">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="collection-overview">
      <div class="container">
        <div class="collection-overview-grid">
          <div class="collection-overview-copy">
            <span class="section-label">Overview</span>
            <h2>${escapeHtml(page.title)} manufacturing with structure built in</h2>
            <p>${escapeHtml(page.intro)}</p>
          </div>
          <div class="collection-overview-points">
            ${page.highlights
              .map(
                (item) => `
              <article class="overview-point">
                <strong>${escapeHtml(item)}</strong>
                <p>Aligned for scalable private label and contract manufacturing workflows.</p>
              </article>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
    ${page.ranges.map(renderRange).join("")}
    <section class="collection-cta">
      <div class="container">
        <div class="collection-cta-box">
          <div>
            <span class="section-label">Why KUKU Cosmetics</span>
            <h2>${escapeHtml(page.ctaTitle)}</h2>
            <p>Every range can be adapted around positioning, texture, actives, fragrance profile, packaging, and commercial targets while keeping the current product architecture easy to navigate.</p>
          </div>
          <ul class="collection-cta-list">${renderList(page.ctaItems)}</ul>
        </div>
      </div>
    </section>
  </main>
  ${footerHtml}
  <script src="./js/script.js"></script>
  <script src="./js/jquery.min.js"></script>
  <script type="text/javascript" src="./js/slick.min.js"></script>
</body>
</html>
`;
}

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.file), renderPage(page));
}

console.log(`Generated ${pages.length} product pages.`);
