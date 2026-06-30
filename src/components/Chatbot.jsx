import React, { useState, useEffect, useRef } from 'react';

const QA = [
  {
    q: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    a: "👋 Hello! Welcome to Westmark Global Industries. I'm here to help with questions about our products, services, pricing, and more. What can I assist you with today?",
    tags: ["Products", "Services", "Get a Quote", "Contact Us", "About Us"]
  },
  {
    q: ["product", "what do you sell", "trade", "commodity", "commodities", "goods"],
    a: "🌾 We trade a wide range of premium commodities:\n\n• **Rice** – Basmati & Non-Basmati\n• **Sugar** – Refined & Raw (ICUMSA grades)\n• **Pulses** – Lentils, Green Gram, Black Gram\n• **Spices** – Turmeric, Cumin, Cardamom, Pepper\n• **Chickpeas** – Kabuli & Desi varieties\n• **Edible Oils** – Sunflower, Soybean, Palm\n• **Animal Feed** – Poultry, Cattle, Aquaculture\n• **Textiles & Yarn** – Cotton, Polyester, Blends\n• **Carpets** – Handmade, woven, and machine-made carpets\n• **Packaging Materials** – Cartons, boxes, wraps, tapes, labels, protective packaging\n• **PPE Products** – Masks, gloves, scrubs\n• **Hygiene Products** – Sanitizers, disinfectants, cleansers\n• **Agricultural Equipment** – Tractors, Harvesters\n\nWould you like details on any specific product?",
    tags: ["Rice", "Spices", "Carpets", "Packaging", "PPE Products", "Hygiene Products", "Get a Quote"]
  },
  {
    q: ["rice", "basmati", "non-basmati", "grain", "cereal"],
    a: "🍚 We supply two categories of premium rice:\n\n**Basmati Rice**\n• Long-grain, aromatic variety\n• Sourced from northern India & Pakistan\n• Available in aged & fresh grades\n\n**Non-Basmati Rice**\n• Sona Masoori, IR64, Swarna varieties\n• Available in bulk for processors & distributors\n• Origin: South India\n\nBoth are available in custom packaging and bulk quantities. Shall I connect you with our sales team?",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["spice", "turmeric", "cumin", "cardamom", "pepper", "coriander", "chilli"],
    a: "🌶️ Our spice portfolio includes:\n\n• **Turmeric** – High curcumin content, polished\n• **Cumin (Jeera)** – Machine-cleaned, high purity\n• **Coriander Seeds** – Whole & split\n• **Black Pepper** – Malabar & Tellicherry grades\n• **Green Cardamom** – Bold & green varieties\n• **Red Chillies** – Guntur, Teja, Byadgi varieties\n\n📍 Sourced directly from Kerala, Gujarat & Andhra Pradesh.\n\nAll spices are lab-tested and export-quality certified.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["packaging", "packaging materials", "packing materials", "carton", "cartons", "boxes", "box", "wrap", "wraps", "tape", "tapes", "labels", "protective packaging"],
    a: "Our packaging materials include:\n\n• **Cartons & Boxes** - Shipping and storage packaging\n• **Wraps & Protective Packaging** - Protective wraps, cushioning, and packing support\n• **Tapes & Labels** - Sealing, identification, and logistics labelling materials\n\n✅ Suitable for exporters, warehouses, retailers, and logistics operations\n✅ Available for bulk supply and project requirements\n✅ Export-ready sourcing and documentation support\n\nFor sizes, quantities, or custom requirements, please contact our team.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["ppe", "mask", "masks", "glove", "gloves", "scrub", "scrubs", "healthcare"],
    a: "Our PPE product exports include:\n\n• **Masks** - Protective face masks\n• **Gloves** - Disposable and protective gloves\n• **Scrubs** - Medical and institutional scrubs\n\n✅ Available for bulk trade and export\n✅ Suitable for healthcare, workplace, and institutional use\n✅ Quality-focused sourcing and documentation support\n\nFor specific quantities or product specs, please contact our team.",
    tags: ["Get a Quote", "Hygiene Products", "Contact Us"]
  },
  {
    q: ["hygiene", "sanitizer", "sanitizers", "disinfectant", "disinfectants", "cleanser", "cleansers"],
    a: "Our hygiene product exports include:\n\n• **Sanitizers** - Hand and surface sanitizing products\n• **Disinfectants** - Facility and surface disinfectants\n• **Cleansers** - Cleaning and hygiene cleansers\n\n✅ Available for bulk trade and export\n✅ Suitable for commercial, healthcare, and facility hygiene needs\n✅ Quality-focused sourcing and documentation support\n\nFor specific quantities or product specs, please contact our team.",
    tags: ["Get a Quote", "PPE Products", "Contact Us"]
  },
  {
    q: ["carpet", "carpets", "rug", "rugs", "floor covering", "floor coverings"],
    a: "Our carpet range includes:\n\n• **Handmade Carpets** - Crafted designs for premium interiors\n• **Woven Carpets** - Durable options for residential and commercial use\n• **Machine-Made Carpets** - Scalable supply for bulk projects\n\n✅ Suitable for homes, offices, hotels, and large projects\n✅ Available in multiple sizes, materials, and designs\n✅ Export-ready sourcing and logistics support\n\nFor catalogues, quantities, or custom requirements, please contact our team.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["textile", "fabric", "yarn", "cotton", "polyester", "cloth", "garment"],
    a: "🧵 Our textile range covers:\n\n**Fabrics**\n• Woven & knitted cotton\n• Polyester & blended fabrics\n• Supplied to fashion brands & garment manufacturers\n\n**Yarn**\n• Cotton, synthetic & blended yarns\n• For weaving, knitting & industrial use\n• Consistent quality, competitive pricing\n\n📍 Sourced from India & Bangladesh.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["service", "logistics", "shipping", "freight", "supply chain", "what services"],
    a: "🚢 Our comprehensive logistics services include:\n\n• **Freight Forwarding** – Air, sea & land\n• **Customs Clearance** – Documentation & compliance\n• **Transportation** – Temperature-controlled & bulk\n• **Warehousing** – Secure, climate-controlled storage\n• **Packing & Unpacking** – Industrial to fragile items\n• **Valuable Moves** – High-value cargo with insurance\n• **Supply Chain Optimization** – End-to-end analysis\n• **International Relocation** – Corporate & residential\n\nWhich service do you need help with?",
    tags: ["Services", "Get a Quote", "Contact Us"]
  },
  {
    q: ["freight", "shipping", "air", "sea", "land", "ocean", "cargo"],
    a: "✈️🚢🚛 Our freight forwarding covers all modes:\n\n**Sea Freight** – FCL & LCL containers, bulk cargo\n**Air Freight** – Express & standard options\n**Land Freight** – Cross-border road transport\n\n🌍 We operate across **50+ trade corridors** with:\n• Real-time shipment tracking\n• Competitive freight rates\n• On-time delivery guarantee\n• Insurance & documentation support\n\nWould you like a freight quote?",
    tags: ["Get a Quote", "Services", "Contact Us"]
  },
  {
    q: ["custom", "customs clearance", "documentation", "import", "export", "duty", "hs code"],
    a: "📋 Our customs clearance experts handle:\n\n• **HS Code Classification** – Accurate tariff mapping\n• **Import/Export Documentation** – Bills of lading, certificates\n• **Duty & Tax Management** – Minimise costs legally\n• **Port Authority Liaison** – Smooth clearance\n• **Trade Compliance** – International regulations\n\nWe serve customers in 50+ countries with zero-delay clearance expertise. Contact us for a consultation.",
    tags: ["Get a Quote", "Services", "Contact Us"]
  },
  {
    q: ["relocation", "move", "moving", "household", "corporate relocation", "shifting"],
    a: "🏠 Our relocation services include:\n\n**Residential Relocation**\n• Free pre-move survey\n• Professional packing & loading\n• Secure transit with tracking\n• Unpacking & setup at destination\n\n**Corporate Relocation**\n• Office moves & asset management\n• Employee relocation programs\n• Minimal business downtime\n\n**International Relocation**\n• Door-to-door across 50+ countries\n• Customs clearance included\n• Storage solutions available\n\nReady to plan your move?",
    tags: ["Get a Quote", "Contact Us", "Services"]
  },
  {
    q: ["warehouse", "storage", "cold storage", "climate", "facility"],
    a: "🏭 Our warehousing solutions:\n\n• **Climate-Controlled Storage** – For temperature-sensitive goods\n• **Bulk Dry Storage** – Commodities & industrial goods\n• **Bonded Warehouses** – Duty-deferred storage\n• **Short & Long-Term Options** – Flexible contracts\n• **Strategic Locations** – Key transit hubs globally\n• **24/7 Security & Monitoring**\n\nIdeal for importers, exporters, and e-commerce businesses.",
    tags: ["Get a Quote", "Services", "Contact Us"]
  },
  {
    q: ["quote", "price", "pricing", "cost", "rate", "enquire", "inquiry", "how much"],
    a: "💰 To get a personalised quote:\n\n1. **Visit our Contact page**\n2. **WhatsApp** us at +91 7299078516\n3. **Submit the Contact Form** on our website\n\nOur team will respond within **24 hours** with a detailed quotation tailored to your requirements.\n\n📝 Please have ready:\n• Product name & quantity\n• Destination country/city\n• Required delivery timeline\n• Any special requirements",
    tags: ["Contact Us", "Services", "Products"]
  },
  {
    q: ["contact", "phone", "email", "address", "reach", "call", "whatsapp"],
    a: "📞 Get in touch with Westmark:\n\n**WhatsApp:** +91 7299078516\n**Email:** admin@westmarkglobal.org\n\n🌐 We operate in **50+ countries** with regional offices and local partners worldwide.\n\n⏰ Our team responds within **24 hours** on business days.\n\nYou can also fill out the **Contact Form** on our Contact page for a detailed inquiry.",
    tags: ["Contact Us", "Get a Quote", "Services"]
  },
  {
    q: ["about", "who are you", "company", "westmark", "history", "founded", "background"],
    a: "🏢 **About Westmark Global Industries**\n\n• Founded with a vision to bridge global markets\n• **15+ years** of international trade experience\n• Operations in **50+ countries**\n• **1000+ satisfied clients** worldwide\n\n**What we do:**\n✅ Premium commodity trading\n✅ End-to-end logistics solutions\n✅ International relocation services\n\n**Our promise:** Reliability, transparency, and quality in every shipment.\n\n*\"Connecting markets, delivering trust — one shipment at a time.\"*",
    tags: ["Products", "Services", "Contact Us"]
  },
  {
    q: ["country", "countries", "global", "international", "where", "operate", "region", "export to"],
    a: "🌍 Westmark operates in **50+ countries** across:\n\n• **Asia** – India, Pakistan, Bangladesh, UAE, Saudi Arabia\n• **Africa** – Nigeria, Kenya, Ghana, South Africa, Egypt\n• **Europe** – UK, Germany, Netherlands, France\n• **Americas** – USA, Canada, Brazil, Mexico\n• **Oceania** – Australia, New Zealand\n\nWe have a strong network of verified partners and agents in each region to ensure smooth operations.",
    tags: ["Services", "Products", "Contact Us"]
  },
  {
    q: ["minimum order", "moq", "bulk", "quantity", "how much minimum", "order size"],
    a: "📦 Our minimum order quantities vary by product:\n\n• **Rice & Grains** – 20 MT (metric tonnes) minimum\n• **Spices** – 500 kg minimum\n• **Sugar** – 25 MT minimum\n• **Pulses** – 10 MT minimum\n• **Edible Oils** – 5,000 litres minimum\n• **PPE Products** – As per product and quantity\n• **Hygiene Products** – As per product and quantity\n• **Textiles** – 500 metres minimum\n• **Carpets** – As per design and quantity\n• **Packaging Materials** – As per item and quantity\n\n💡 Smaller quantities may be available — contact us to discuss your specific needs.",
    tags: ["Get a Quote", "Contact Us", "Products"]
  },
  {
    q: ["certification", "certified", "quality", "standard", "iso", "who", "gmp", "haccp", "organic"],
    a: "🏆 Westmark adheres to strict quality standards:\n\n**Food Products:**\n• HACCP Certified\n• FSSAI Compliant (India)\n• Phytosanitary Certified\n• ISO 22000 Food Safety\n\n**PPE Products:**\n• Quality compliance documentation\n• Standards verification\n\n**Hygiene Products:**\n• Quality compliance documentation\n• Standards verification\n\n**Operations:**\n• ISO 9001:2015 (Quality Management)\n• AEO (Authorised Economic Operator) Status\n\nAll products come with full documentation, COA (Certificate of Analysis), and lab test reports.",
    tags: ["Products", "Get a Quote", "Contact Us"]
  },
  {
    q: ["payment", "terms", "lc", "letter of credit", "tt", "wire transfer", "advance"],
    a: "💳 We offer flexible payment terms:\n\n• **Letter of Credit (L/C)** – Most common for international trade\n• **Telegraphic Transfer (T/T)** – Wire transfer\n• **Documents Against Payment (D/P)**\n• **Open Account** – For established long-term clients\n\nPayment terms are negotiated based on order value, relationship history, and destination country.",
    tags: ["Get a Quote", "Contact Us", "Services"]
  },
  {
    q: ["delivery", "lead time", "how long", "days", "weeks", "shipment time", "eta"],
    a: "⏱️ Typical lead times:\n\n• **Agricultural Commodities:** 7–21 days from order confirmation\n• **PPE/Hygiene Products:** 10–30 days\n• **Textiles & Yarn:** 14–28 days\n• **Equipment:** 30–60 days\n\n**Transit Times:**\n• Intra-Asia: 5–15 days sea freight\n• Asia to Europe: 18–25 days\n• Asia to USA/Canada: 20–30 days\n• Air freight: 2–5 days globally\n\n⚡ Express options available on request.",
    tags: ["Get a Quote", "Services", "Contact Us"]
  },
  {
    q: ["animal feed", "cattle", "poultry", "livestock", "aquaculture", "feed"],
    a: "🐄 Our animal feed solutions:\n\n• **Poultry Feed** – Layer & broiler formulations\n• **Cattle Feed** – Dairy & beef nutrition\n• **Aquaculture Feed** – Fish & shrimp varieties\n• **Swine & Sheep Feed** – Balanced nutrition\n\n✅ Nutritionally balanced as per international standards\n✅ Strict quality & safety controls\nSourced from global supply chains with traceable origin.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["edible oil", "cooking oil", "sunflower", "soybean", "palm", "groundnut", "vegetable oil"],
    a: "🫒 Our edible oil range:\n\n• **Refined Sunflower Oil** – Premium grade\n• **Soybean Oil** – Non-GMO available\n• **Palm Oil (RBD)** – Refined, Bleached & Deodorised\n• **Groundnut Oil** – Cold-pressed & refined\n\n📦 Available in bulk tankers, 1000L IBCs, or 1L-20L consumer packs.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["agricultural equipment", "tractor", "harvester", "irrigation", "machinery", "farm equipment"],
    a: "🚜 Agricultural equipment we supply:\n\n• **Tractors** – 20–120 HP range, multiple brands\n• **Combine Harvesters** – Wheat, rice & corn\n• **Irrigation Systems** – Drip, sprinkler & pivot\n• **Precision Agriculture Tools** – GPS-guided equipment\n\n🌍 Sourced from Europe & USA from trusted manufacturers.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["sugar", "icumsa", "refined sugar", "raw sugar", "white sugar", "brown sugar"],
    a: "🍬 We supply sugar in multiple grades:\n\n**White Refined Sugar**\n• ICUMSA 45 – Sparkling white, food-grade\n• ICUMSA 100 – Premium refined\n\n**Raw & Brown Sugar**\n• ICUMSA 600–1200 / Demerara grades\n\n📦 Available in 25kg, 50kg bags or bulk shipping from Brazil, India, Thailand.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["pulses", "lentil", "dal", "chickpea", "moong", "urad", "chana", "pigeon pea", "toor"],
    a: "🫘 Our pulses portfolio:\n\n• **Red Lentils (Masoor Dal)** – Whole & split\n• **Green Gram (Moong Dal)** – Whole & split\n• **Black Gram (Urad Dal)** – Whole & split\n• **Pigeon Pea (Toor Dal)** – Bold & medium grade\n• **Kabuli & Desi Chickpeas** – Whole, split, and flour form\n\n✅ Cleaned, sorted & graded for consistent quality.",
    tags: ["Get a Quote", "Products", "Contact Us"]
  },
  {
    q: ["help", "what can you do", "options", "menu", "topics", "tell me more"],
    a: "🤖 I can help you with information about:\n\n• 🌾 **Products** – Our full commodity range\n• 🚢 **Logistics Services** – Freight, customs, storage\n• 🏠 **Relocation** – Residential & corporate moves\n• 💰 **Pricing & Quotes** – How to get a quote\n• 📋 **Quality & Certifications** – Our standards\n• 💳 **Payment Terms** – Available options\n• ⏱️ **Lead Times** – Delivery timelines\n• 🌍 **Countries We Serve** – Our global reach\n• 📞 **Contact** – How to reach our team\n\nJust type your question or tap a topic below!",
    tags: ["Products", "Services", "Contact Us", "Get a Quote"]
  }
];

const QUICK_START = ["Products", "Services", "Get a Quote", "Contact Us", "About Us"];

function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [welcomed, setWelcomed] = useState(false);
  const [unread, setUnread] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chips, setChips] = useState(QUICK_START);

  const messagesEndRef = useRef(null);

  // Auto show unread badge after 3 seconds if closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!chatOpen) {
        setUnread(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [chatOpen]);

  // Scroll to bottom whenever messages list or typing state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    const nextState = !chatOpen;
    setChatOpen(nextState);
    if (nextState) {
      setUnread(false);
      if (!welcomed) {
        setWelcomed(true);
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages([
            {
              text: "👋 Hi! I'm the Westmark Assistant. I can answer questions about our products, logistics services, pricing, delivery timelines, and more. How can I help you today?",
              sender: 'bot'
            }
          ]);
          setChips(QUICK_START);
        }, 800);
      }
    }
  };

  const handleSend = (text) => {
    const msg = (text || inputValue).trim();
    if (!msg) return;

    setInputValue('');
    // Append user message
    setMessages((prev) => [...prev, { text: msg, sender: 'user' }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lower = msg.toLowerCase();

      // Normalize common queries
      const chipMap = {
        'products': 'what products do you sell',
        'services': 'what services do you offer',
        'get a quote': 'how to get a quote',
        'contact us': 'how to contact you',
        'about us': 'about westmark',
        'freight': 'freight forwarding services',
        'customs clearance': 'customs clearance services',
        'relocation': 'relocation services',
        'whatsapp us': 'whatsapp contact',
        'other products': 'what products do you sell',
        'rice': 'tell me about rice',
        'spices': 'tell me about spices',
        'ppe': 'PPE products',
        'ppe products': 'PPE products',
        'hygiene': 'hygiene products',
        'hygiene products': 'hygiene products',
        'carpets': 'carpet products',
        'carpet': 'carpet products',
        'rugs': 'carpet products',
        'packaging': 'packaging materials',
        'packaging materials': 'packaging materials',
        'packing materials': 'packaging materials',
        'cartons': 'packaging materials',
        'boxes': 'packaging materials',
        'masks': 'PPE masks',
        'gloves': 'PPE gloves',
        'scrubs': 'medical scrubs',
        'sanitizers': 'sanitizers',
        'disinfectants': 'disinfectants',
        'cleansers': 'cleansers',
        'textiles': 'textile products',
      };

      const mapped = chipMap[lower] || lower;

      let best = null;
      let bestScore = 0;
      for (const item of QA) {
        for (const kw of item.q) {
          if (mapped.includes(kw) || kw.includes(mapped.replace(/\s+/g, ' ').trim())) {
            const score = kw.length;
            if (score > bestScore) {
              bestScore = score;
              best = item;
            }
          }
        }
      }

      if (best) {
        setMessages((prev) => [...prev, { text: best.a, sender: 'bot' }]);
        setChips(best.tags);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: "I'm not sure about that, but our team can help! 😊\n\nYou can:\n• **WhatsApp us** at +91 7299078516\n• **Fill out the Contact Form** on our Contact page\n• **Browse** our Products or Services\n\nOur team responds within 24 hours.",
            sender: 'bot'
          }
        ]);
        setChips(["Get a Quote", "Products", "Services", "Contact Us"]);
      }
    }, 600 + Math.random() * 400);
  };

  const renderText = (text) => {
    // Format bold **text** and linebreaks
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('\n')
      .map((line, idx) => (
        <span key={idx}>
          <span dangerouslySetInnerHTML={{ __html: line }} />
          {idx < text.split('\n').length - 1 && <br />}
        </span>
      ));
    return formatted;
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div
        id="wm-chat-btn"
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '28px',
          zIndex: 9998,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#3a4433',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(58,68,51,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        title="Chat with us"
      >
        {!chatOpen ? (
          <svg
            fill="none"
            height="26"
            stroke="#fde7ad"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        ) : (
          <svg
            fill="none"
            height="22"
            stroke="#fde7ad"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" x2="6" y1="6" y2="18"></line>
            <line x1="6" x2="18" y1="6" y2="18"></line>
          </svg>
        )}

        {/* Unread Badge */}
        {unread && !chatOpen && (
          <span
            id="wm-unread"
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              background: '#c1a260',
              color: '#3a4433',
              fontSize: '11px',
              fontWeight: 700,
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              textAlign: 'center',
              lineHeight: '18px',
            }}
          >
            1
          </span>
        )}
      </div>

      {/* Chat Window Panel */}
      <div
        id="wm-chat-box"
        style={{
          display: chatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '168px',
          right: '28px',
          zIndex: 9997,
          width: '360px',
          maxHeight: '520px',
          background: '#fde7ad',
          border: '1px solid #d4c89e',
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(58,68,51,0.25)',
          fontFamily: "'DM Sans', sans-serif",
          overflow: 'hidden',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ background: '#3a4433', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#c1a260',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg
              fill="none"
              height="20"
              stroke="#3a4433"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"></path>
            </svg>
          </div>
          <div>
            <div style={{ color: '#fde7ad', fontWeight: 700, fontSize: '15px' }}>Westmark Assistant</div>
            <div style={{ color: 'rgba(37,174,195,0.8)', fontSize: '12px' }}>🟢 Online · Typically replies instantly</div>
          </div>
        </div>

        {/* Message Log */}
        <div
          id="wm-messages"
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            minHeight: '280px',
            maxHeight: '320px',
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={
                m.sender === 'user'
                  ? {
                      alignSelf: 'flex-end',
                      background: '#3a4433',
                      color: '#fde7ad',
                      padding: '10px 14px',
                      borderRadius: '16px 16px 4px 16px',
                      maxWidth: '80%',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      wordWrap: 'break-word',
                    }
                  : {
                      alignSelf: 'flex-start',
                      background: '#fff',
                      color: '#3a4433',
                      padding: '10px 14px',
                      borderRadius: '16px 16px 16px 4px',
                      maxWidth: '85%',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      wordWrap: 'break-word',
                      border: '1px solid #e8e0cc',
                    }
              }
            >
              {renderText(m.text)}
            </div>
          ))}

          {/* Simulated Typing Indicator */}
          {isTyping && (
            <div
              style={{
                alignSelf: 'flex-start',
                background: '#fff',
                color: '#8a927f',
                padding: '10px 14px',
                borderRadius: '16px 16px 16px 4px',
                fontSize: '13px',
                border: '1px solid #e8e0cc',
              }}
            >
              <span style={{ animation: 'wm-blink 1s infinite' }}>●</span>{' '}
              <span style={{ animation: 'wm-blink 1s infinite 0.2s' }}>●</span>{' '}
              <span style={{ animation: 'wm-blink 1s infinite 0.4s' }}>●</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies Chips */}
        <div id="wm-quick" style={{ padding: '0 12px 10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {chips.map((c, i) => (
            <button
              key={i}
              onClick={() => handleSend(c)}
              className="wm-chip"
              style={{
                padding: '5px 12px',
                border: '1px solid #c1a260',
                background: '#fde7ad',
                color: '#3a4433',
                borderRadius: '20px',
                fontSize: '12px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.15s',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Text Input Footer */}
        <div style={{ padding: '10px 12px 14px', borderTop: '1px solid #d4c89e', display: 'flex', gap: '8px' }}>
          <input
            id="wm-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Type your question…"
            style={{
              flex: 1,
              padding: '9px 14px',
              border: '1px solid #d4c89e',
              borderRadius: '24px',
              background: '#fff',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: '#3a4433',
              outline: 'none',
            }}
          />
          <button
            onClick={() => handleSend()}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#3a4433',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg
              fill="none"
              height="16"
              stroke="#fde7ad"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="22" x2="11" y1="2" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
