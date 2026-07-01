const products = [
  {
    id: 1,
    image: "assets/product1-purerest-sofa.png",
    page: "product1.html",
    category: { zh: "客厅", en: "Living Room" },
    name: { zh: "Oral B Clean PureRest Sofa", en: "Oral B Clean PureRest Sofa" },
    price: "$899.00",
    short: {
      zh: "可拆洗模块沙发，适合有孩子、宠物和高频会客的家庭。",
      en: "A washable modular sofa for families with kids, pets, and frequent guests."
    },
    desc: {
      zh: "PureRest Sofa 使用可拆洗外套、隐藏式防污衬层和可替换坐垫模块，让客厅家具更容易保持干净清爽。",
      en: "PureRest Sofa uses removable covers, a hidden stain barrier, and replaceable cushion modules to keep living rooms fresher with less effort."
    },
    specs: [
      { zh: "可拆洗防污面料", en: "Removable stain-resistant covers" },
      { zh: "模块化坐垫与扶手", en: "Modular cushions and arms" },
      { zh: "防潮抬高底座", en: "Raised moisture-resistant base" },
      { zh: "OBC 原创织唛标识", en: "Original OBC woven identity mark" }
    ]
  },
  {
    id: 2,
    image: "assets/product2-halocabinet.png",
    page: "product2.html",
    category: { zh: "收纳", en: "Storage" },
    name: { zh: "Oral B Clean HaloCabinet", en: "Oral B Clean HaloCabinet" },
    price: "$499.00",
    short: {
      zh: "带柔和卫生光与通风层架的高柜，用于毛巾、玩具和日常小物。",
      en: "A soft-light ventilated cabinet for towels, toys, and everyday essentials."
    },
    desc: {
      zh: "HaloCabinet 把玻璃门展示、分区层架、柔和卫生光和低噪通风整合在一起，适合玄关、家政区或浴室外侧。",
      en: "HaloCabinet combines glass display doors, divided shelves, soft hygiene lighting, and quiet airflow for entryways, utility zones, or near-bath storage."
    },
    specs: [
      { zh: "柔和卫生光层架", en: "Soft hygiene-light shelves" },
      { zh: "低噪通风循环", en: "Quiet airflow circulation" },
      { zh: "防潮玻璃门", en: "Moisture-resistant glass doors" },
      { zh: "分区收纳托盘", en: "Divided storage trays" }
    ]
  },
  {
    id: 3,
    image: "assets/product3-airnest-table.png",
    page: "product3.html",
    category: { zh: "净味", en: "Air Freshening" },
    name: { zh: "Oral B Clean AirNest Table", en: "Oral B Clean AirNest Table" },
    price: "$299.00",
    short: {
      zh: "兼具边桌和空气净味功能，适合沙发旁与卧室角落。",
      en: "A side table with odor-control airflow for sofa corners and bedrooms."
    },
    desc: {
      zh: "AirNest Table 将圆形边桌、织物滤芯外壳和底部进风结构结合，为小空间提供安静的净味辅助。",
      en: "AirNest Table pairs a round side table, fabric filter body, and lower intake structure to quietly support fresher small spaces."
    },
    specs: [
      { zh: "可替换净味滤芯", en: "Replaceable odor-control filter" },
      { zh: "实木质感桌面", en: "Wood-finish tabletop" },
      { zh: "低亮度状态灯", en: "Low-brightness status light" },
      { zh: "织物可拆清洁外罩", en: "Removable cleanable fabric sleeve" }
    ]
  },
  {
    id: 4,
    image: "assets/product4-freshwardrobe.png",
    page: "product4.html",
    category: { zh: "卧室", en: "Bedroom" },
    name: { zh: "Oral B Clean FreshWardrobe", en: "Oral B Clean FreshWardrobe" },
    price: "$749.00",
    short: {
      zh: "带通风、防潮和净味模块的衣柜，让衣物长期保持清爽。",
      en: "A ventilated wardrobe with moisture and odor control for fresher clothing."
    },
    desc: {
      zh: "FreshWardrobe 为挂衣区、抽屉和底部通风口设计独立气流路径，减少潮气滞留，让衣柜内部更稳定。",
      en: "FreshWardrobe creates separate airflow paths for hanging zones, drawers, and lower vents to reduce trapped moisture inside the wardrobe."
    },
    specs: [
      { zh: "衣物区独立通风", en: "Independent clothing-zone airflow" },
      { zh: "柔光内照明", en: "Soft interior lighting" },
      { zh: "底部防潮抽屉", en: "Moisture-conscious lower drawer" },
      { zh: "可拆洗防尘挂帘", en: "Removable dust-control curtain" }
    ]
  },
  {
    id: 5,
    image: "assets/product5-drainbench.png",
    page: "product5.html",
    category: { zh: "玄关", en: "Entryway" },
    name: { zh: "Oral B Clean DrainBench", en: "Oral B Clean DrainBench" },
    price: "$249.00",
    short: {
      zh: "自排水玄关换鞋凳，管理雨天鞋底、水滴和泥沙。",
      en: "A self-draining entry bench for wet shoes, drips, and outdoor residue."
    },
    desc: {
      zh: "DrainBench 将可洗坐垫、倾斜鞋托和隐藏接水抽屉做成一体，减少玄关地面的清洁压力。",
      en: "DrainBench combines a washable cushion, angled shoe tray, and hidden drip drawer to reduce entryway cleaning effort."
    },
    specs: [
      { zh: "可抽出接水托盘", en: "Pull-out drip tray" },
      { zh: "可洗坐垫面料", en: "Washable seat cushion" },
      { zh: "开放式通风鞋层", en: "Open ventilated shoe shelf" },
      { zh: "防潮木纹侧板", en: "Moisture-resistant wood side panels" }
    ]
  },
  {
    id: 6,
    image: "assets/product6-shield-chair.png",
    page: "product6.html",
    category: { zh: "餐厅", en: "Dining" },
    name: { zh: "Oral B Clean Shield Chair", en: "Oral B Clean Shield Chair" },
    price: "$159.00",
    short: {
      zh: "易擦抗污餐椅，适合餐桌、儿童学习区和家庭聚餐。",
      en: "An easy-wipe dining chair for tables, study corners, and family meals."
    },
    desc: {
      zh: "Shield Chair 用一体成型椅背、可拆洗坐垫和圆润边角，降低食物污渍和日常灰尘的清理难度。",
      en: "Shield Chair uses a molded back, washable seat pad, and rounded edges to make food marks and daily dust easier to manage."
    },
    specs: [
      { zh: "一体成型易擦椅背", en: "One-piece easy-wipe backrest" },
      { zh: "可拆洗坐垫", en: "Removable washable seat pad" },
      { zh: "防滑木质椅脚", en: "Non-slip wood legs" },
      { zh: "圆角家庭友好设计", en: "Family-friendly rounded corners" }
    ]
  },
  {
    id: 7,
    image: "assets/product7-linentower.png",
    page: "product7.html",
    category: { zh: "洗衣房", en: "Laundry" },
    name: { zh: "Oral B Clean LinenTower", en: "Oral B Clean LinenTower" },
    price: "$399.00",
    short: {
      zh: "分拣脏衣、收纳毛巾与保持织物通风的一体式洗衣塔。",
      en: "An integrated laundry tower for sorting clothes, storing towels, and ventilating linens."
    },
    desc: {
      zh: "LinenTower 用三层抽拉布篮、顶部通风柜和窄体框架，把洗衣房里的散乱织物集中管理。",
      en: "LinenTower uses three pull-out fabric bins, an upper ventilated cabinet, and a narrow frame to organize laundry-room textiles."
    },
    specs: [
      { zh: "三只可拆洗布篮", en: "Three removable washable fabric bins" },
      { zh: "顶部通风储物柜", en: "Upper ventilated storage cabinet" },
      { zh: "窄体靠墙结构", en: "Slim wall-friendly structure" },
      { zh: "分类图标提示", en: "Category icon guidance" }
    ]
  },
  {
    id: 8,
    image: "assets/product8-tidybox.png",
    page: "product8.html",
    category: { zh: "儿童空间", en: "Kids Room" },
    name: { zh: "Oral B Clean TidyBox", en: "Oral B Clean TidyBox" },
    price: "$229.00",
    short: {
      zh: "封闭式玩具收纳柜，内衬可擦洗，适合家庭公共空间。",
      en: "A sealed toy storage cabinet with wipe-clean liners for shared family spaces."
    },
    desc: {
      zh: "TidyBox 以圆角柜体、滑门和可抽出收纳篮，帮助玩具、积木和毛绒物品保持整齐，也更方便清洁。",
      en: "TidyBox uses rounded corners, sliding doors, and pull-out bins to keep toys, blocks, and soft items tidy and easier to clean."
    },
    specs: [
      { zh: "圆角低重心柜体", en: "Low rounded cabinet body" },
      { zh: "可擦洗内衬", en: "Wipe-clean interior liner" },
      { zh: "滑门防尘收纳", en: "Dust-reducing sliding doors" },
      { zh: "平顺移动脚轮", en: "Smooth rolling casters" }
    ]
  }
];

const translations = {
  zh: {
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "独立清洁家具品牌",
    "hero.title": "把洁净习惯做进家具",
    "hero.body": "Oral B Clean 面向现代家庭，打造可拆洗、易擦拭、通风净味和整洁收纳一体化的清洁家具系列。",
    "hero.ctaProducts": "探索产品",
    "hero.ctaAbout": "品牌说明",
    "hero.note": "说明：Oral B Clean 是本站创建的独立清洁家具品牌，不隶属于 Oral-B、欧乐B或任何口腔护理品牌，也不销售牙刷、牙膏、牙线或其他口腔护理产品。",
    "intro.kicker": "Clean Furniture System",
    "intro.title": "让家具本身更容易保持清爽",
    "intro.body": "Oral B Clean 将可拆洗织物、通风结构、防潮底座、净味模块和分区收纳放进日常家具，让客厅、卧室、玄关、餐厅和洗衣房都更容易维护。",
    "products.kicker": "Featured Products",
    "products.title": "精选产品",
    "products.body": "8 款首发清洁家具覆盖沙发、收纳柜、边桌、衣柜、换鞋凳、餐椅、织物整理塔和儿童收纳柜。",
    "products.view": "查看详情",
    "about.kicker": "About Oral B Clean",
    "about.title": "一个以家居洁净为核心的独立品牌",
    "about.body": "Oral B Clean 不做口腔护理产品，而是重新设计容易积尘、潮湿或难整理的家具体验。每件产品都围绕可洗、可擦、可通风和可归位展开。",
    "about.statProducts": "款首发产品",
    "about.statIdentity": "原创家具标识",
    "about.statDental": "口腔护理产品",
    "contact.kicker": "Contact",
    "contact.title": "为更干净、更省心的家而设计",
    "contact.body": "如需品牌合作、渠道洽谈或产品资料，请联系 Oral B Clean 清洁家具团队。",
    "contact.cta": "联系品牌团队",
    "footer.copy": "© 2026 Oral B Clean. Independent clean-furniture brand.",
    "footer.note": "Not affiliated with Oral-B, 欧乐B, or any oral-care brand. No toothbrushes, toothpaste, floss, or dental products are represented on this site.",
    "detail.back": "返回首页",
    "detail.overview": "产品概览",
    "detail.specs": "核心规格",
    "detail.next": "下一款产品",
    "detail.contact": "咨询产品",
    "detail.note": "独立清洁家具概念品牌，不代表 Oral-B、欧乐B或任何口腔护理品牌。"
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Independent Clean-Furniture Brand",
    "hero.title": "Clean Habits, Built Into Furniture",
    "hero.body": "Oral B Clean creates washable, easy-wipe, ventilated, odor-control, and storage-friendly furniture for modern homes.",
    "hero.ctaProducts": "Explore Products",
    "hero.ctaAbout": "About Brand",
    "hero.note": "Note: Oral B Clean is an independent clean-furniture concept brand created for this site. It is not affiliated with Oral-B, 欧乐B, or any oral-care brand and does not sell toothbrushes, toothpaste, floss, or dental products.",
    "intro.kicker": "Clean Furniture System",
    "intro.title": "Furniture That Stays Easier To Keep Fresh",
    "intro.body": "Oral B Clean brings washable textiles, airflow structures, moisture-conscious bases, odor-control modules, and organized storage into everyday furniture across the home.",
    "products.kicker": "Featured Products",
    "products.title": "Featured Products",
    "products.body": "Eight launch clean-furniture products across sofas, storage cabinets, side tables, wardrobes, entry benches, dining chairs, linen towers, and kids storage.",
    "products.view": "View Details",
    "about.kicker": "About Oral B Clean",
    "about.title": "An Independent Brand Centered On Home Cleanliness",
    "about.body": "Oral B Clean does not make oral-care products. It redesigns furniture experiences that collect dust, trap moisture, or become hard to organize. Every product is built around washability, wipeability, airflow, and tidy storage.",
    "about.statProducts": "Launch products",
    "about.statIdentity": "Original furniture identity",
    "about.statDental": "Oral-care products",
    "contact.kicker": "Contact",
    "contact.title": "Designed For Cleaner, Easier Homes",
    "contact.body": "For brand partnerships, channel discussions, or product materials, contact the Oral B Clean furniture team.",
    "contact.cta": "Contact Brand Team",
    "footer.copy": "© 2026 Oral B Clean. Independent clean-furniture brand.",
    "footer.note": "Not affiliated with Oral-B, 欧乐B, or any oral-care brand. No toothbrushes, toothpaste, floss, or dental products are represented on this site.",
    "detail.back": "Back Home",
    "detail.overview": "Overview",
    "detail.specs": "Key Specs",
    "detail.next": "Next Product",
    "detail.contact": "Ask About Product",
    "detail.note": "Independent clean-furniture concept brand. Not affiliated with Oral-B, 欧乐B, or any oral-care brand."
  }
};
