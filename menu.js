const menuData = {
  /* ===================== SOUPS ===================== */
  pho_soups: [
    {
      key: "pho_ga",
      price: 230,
      weight: 550,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Суп Фо с курицей",
        ua: "Суп Фо з куркою",
        en: "Pho Soup with Chicken",
        vn: "Phở gà",
        pl: "Zupa Pho z kurczakiem",
        de: "Pho-Suppe mit Huhn",
        zh: "鸡肉河粉汤"
      },
      short: "Ароматный бульон, рисовая лапша и курица. Классика Вьетнама."
    },
    {
      key: "pho_bo",
      price: 250,
      weight: 550,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Суп Фо с говядиной",
        ua: "Суп Фо з яловичиною",
        en: "Pho Soup with Beef",
        vn: "Phở bò",
        pl: "Zupa Pho z wołowiną",
        de: "Pho-Suppe mit Rind",
        zh: "牛肉河粉汤"
      },
      short: "Насыщенный говяжий бульон, рисовая лапша и тонкие ломтики мяса."
    },
    {
      key: "pho_heo",
      price: 240,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Фо со свининой",
        ua: "Суп Фо зі свининою",
        en: "Pho Soup with Pork",
        vn: "Phở heo",
        pl: "Zupa Pho z wieprzowiną",
        de: "Pho-Suppe mit Schwein",
        zh: "猪肉河粉汤"
      },
      short: "Лёгкий бульон, рисовая лапша и свинина — с зеленью и лаймом."
    },
    {
      key: "pho_tom",
      price: 260,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Фо с креветками",
        ua: "Суп Фо з креветками",
        en: "Pho Soup with Shrimp",
        vn: "Phở tôm",
        pl: "Zupa Pho z krewetkami",
        de: "Pho-Suppe mit Garnelen",
        zh: "虾河粉汤"
      },
      short: "Ароматный бульон и креветки — морской вариант Фо."
    },
    {
      key: "pho_tofu",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["veg"],
      translations: {
        ru: "Суп Фо с тофу",
        ua: "Суп Фо з тофу",
        en: "Pho Soup with Tofu",
        vn: "Phở đậu hũ",
        pl: "Zupa Pho z tofu",
        de: "Pho-Suppe mit Tofu",
        zh: "豆腐河粉汤"
      },
      short: "Овощной бульон, рисовая лапша и тофу — лёгко и сытно."
    },
    {
      key: "pho_rau",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["vegan"],
      translations: {
        ru: "Суп Фо с овощами",
        ua: "Суп Фо з овочами",
        en: "Pho Soup with Vegetables",
        vn: "Phở rau",
        pl: "Zupa Pho z warzywami",
        de: "Pho-Suppe mit Gemüse",
        zh: "蔬菜河粉汤"
      },
      short: "Овощной бульон, рисовая лапша и сезонные овощи."
    },
    {
      key: "pho_mix",
      price: 260,
      weight: 600,
      spicy: 0,
      tags: ["chef"],
      translations: {
        ru: "Суп Фо MIX",
        ua: "Суп Фо MIX",
        en: "Pho Soup MIX",
        vn: "Phở mix",
        pl: "Zupa Pho MIX",
        de: "Pho-Suppe MIX",
        zh: "河粉汤 MIX"
      },
      short: "Микс — это 2 вида начинки в одной порции (например курица + говядина)."
    }
  ],

  bun_soups: [
    {
      key: "bun_ga",
      price: 230,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Бун с курицей",
        ua: "Суп Бун з куркою",
        en: "Bun Soup with Chicken",
        vn: "Bún gà",
        pl: "Zupa Bun z kurczakiem",
        de: "Bun-Suppe mit Huhn",
        zh: "鸡肉米粉汤"
      },
      short: "Лёгкий бульон и рисовая вермишель (bún) с курицей."
    },
    {
      key: "bun_bo",
      price: 250,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Бун с говядиной",
        ua: "Суп Бун з яловичиною",
        en: "Bun Soup with Beef",
        vn: "Bún bò",
        pl: "Zupa Bun z wołowiną",
        de: "Bun-Suppe mit Rind",
        zh: "牛肉米粉汤"
      },
      short: "Рисовая вермишель и говядина в ароматном бульоне."
    },
    {
      key: "bun_heo",
      price: 240,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Бун со свининой",
        ua: "Суп Бун зі свининою",
        en: "Bun Soup with Pork",
        vn: "Bún heo",
        pl: "Zupa Bun z wieprzowiną",
        de: "Bun-Suppe mit Schwein",
        zh: "猪肉米粉汤"
      },
      short: "Рисовая вермишель, свинина и зелень — лёгкий азиатский суп."
    },
    {
      key: "bun_tom",
      price: 260,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Бун с креветками",
        ua: "Суп Бун з креветками",
        en: "Bun Soup with Shrimp",
        vn: "Bún tôm",
        pl: "Zupa Bun z krewetkami",
        de: "Bun-Suppe mit Garnelen",
        zh: "虾米粉汤"
      },
      short: "Нежный бульон, рисовая вермишель и креветки."
    },
    {
      key: "bun_rau",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["vegan"],
      translations: {
        ru: "Суп Бун с овощами",
        ua: "Суп Бун з овочами",
        en: "Bun Soup with Vegetables",
        vn: "Bún rau",
        pl: "Zupa Bun z warzywami",
        de: "Bun-Suppe mit Gemüse",
        zh: "蔬菜米粉汤"
      },
      short: "Овощной бульон и рисовая вермишель — легко, без мяса."
    },
    {
      key: "bun_tofu",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["veg"],
      translations: {
        ru: "Суп Бун с тофу",
        ua: "Суп Бун з тофу",
        en: "Bun Soup with Tofu",
        vn: "Bún đậu hũ",
        pl: "Zupa Bun z tofu",
        de: "Bun-Suppe mit Tofu",
        zh: "豆腐米粉汤"
      },
      short: "Рисовая вермишель с тофу в лёгком бульоне."
    },
    {
      key: "bun_mix",
      price: 260,
      weight: 600,
      spicy: 0,
      tags: ["chef"],
      translations: {
        ru: "Суп Бун MIX",
        ua: "Суп Бун MIX",
        en: "Bun Soup MIX",
        vn: "Bún mix",
        pl: "Zupa Bun MIX",
        de: "Bun-Suppe MIX",
        zh: "米粉汤 MIX"
      },
      short: "Микс — 2 вида начинки в одной порции (например свинина + креветки)."
    }
  ],

  cold_bun: [
    {
      key: "bun_nam_bo_ga",
      price: 260,
      weight: 520,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Холодный Бун с курицей (салат-лапша)",
        ua: "Холодний Бун з куркою (салат-локшина)",
        en: "Cold Bun Noodles with Chicken",
        vn: "Bún Nam Bộ gà",
        pl: "Bun na zimno z kurczakiem",
        de: "Kalter Bun mit Huhn",
        zh: "冷拌鸡肉米粉"
      },
      short: "Холодная рисовая лапша с овощами, соусом и курицей. Без бульона."
    },
    {
      key: "bun_nam_bo_bo",
      price: 280,
      weight: 520,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Холодный Бун с говядиной (салат-лапша)",
        ua: "Холодний Бун з яловичиною (салат-локшина)",
        en: "Cold Bun Noodles with Beef",
        vn: "Bún Nam Bộ bò",
        pl: "Bun na zimno z wołowiną",
        de: "Kalter Bun mit Rind",
        zh: "冷拌牛肉米粉"
      },
      short: "Холодная лапша, свежие овощи и говядина — ярко и сытно."
    },
    {
      key: "bun_nam_bo_tom",
      price: 300,
      weight: 520,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Холодный Бун с креветками (салат-лапша)",
        ua: "Холодний Бун з креветками (салат-локшина)",
        en: "Cold Bun Noodles with Shrimp",
        vn: "Bún Nam Bộ tôm",
        pl: "Bun na zimno z krewetkami",
        de: "Kalter Bun mit Garnelen",
        zh: "冷拌虾米粉"
      },
      short: "Холодная лапша с овощами и креветками. Освежает."
    },
    {
      key: "bun_nam_bo_heo",
      price: 270,
      weight: 520,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Холодный Бун со свининой (салат-лапша)",
        ua: "Холодний Бун зі свининою (салат-локшина)",
        en: "Cold Bun Noodles with Pork",
        vn: "Bún Nam Bộ heo",
        pl: "Bun na zimno z wieprzowiną",
        de: "Kalter Bun mit Schwein",
        zh: "冷拌猪肉米粉"
      },
      short: "Холодная рисовая лапша, свинина, овощи и соус."
    },
    {
      key: "bun_nam_bo_tofu",
      price: 250,
      weight: 520,
      spicy: 0,
      tags: ["veg"],
      translations: {
        ru: "Холодный Бун с тофу (салат-лапша)",
        ua: "Холодний Бун з тофу (салат-локшина)",
        en: "Cold Bun Noodles with Tofu",
        vn: "Bún Nam Bộ đậu hũ",
        pl: "Bun na zimno z tofu",
        de: "Kalter Bun mit Tofu",
        zh: "冷拌豆腐米粉"
      },
      short: "Холодная лапша с овощами и тофу — лёгкий вариант."
    },
    {
      key: "bun_nam_bo_nem",
      price: 280,
      weight: 520,
      spicy: 0,
      tags: ["chef"],
      translations: {
        ru: "Холодный Бун с нем (спринг-ролл)",
        ua: "Холодний Бун з нем (спрінг-рол)",
        en: "Cold Bun Noodles with Nem (Spring Roll)",
        vn: "Bún Nam Bộ nem",
        pl: "Bun na zimno z nem (spring roll)",
        de: "Kalter Bun mit Nem (Frühlingsrolle)",
        zh: "冷拌米粉配春卷"
      },
      short: "Холодная лапша с овощами + хрустящий нем (спринг-ролл)."
    }
  ],

  bun_cha_ca: [
    {
      key: "bun_cha_ca",
      price: 260,
      weight: 550,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Бун Ча Ка (суп с рыбой)",
        ua: "Бун Ча Ка (суп з рибою)",
        en: "Bun Cha Ca (Fish Soup)",
        vn: "Bún chả cá",
        pl: "Bun Cha Ca (zupa rybna)",
        de: "Bun Cha Ca (Fischsuppe)",
        zh: "鱼丸米粉汤"
      },
      short: "Суп с рисовой вермишелью и рыбными котлетками/фрикадельками."
    }
  ],

  bun_bo_hue: [
    {
      key: "bun_bo_hue",
      price: 270,
      weight: 580,
      spicy: 2,
      tags: ["popular"],
      translations: {
        ru: "Бун Бо Хюэ (острый суп)",
        ua: "Бун Бо Хює (гострий суп)",
        en: "Bun Bo Hue (Spicy Soup)",
        vn: "Bún bò Huế",
        pl: "Bun Bo Hue (ostra zupa)",
        de: "Bun Bo Hue (scharfe Suppe)",
        zh: "顺化辣牛肉粉"
      },
      short: "Легендарный острый суп: насыщенный бульон и рисовая лапша. 🌶🌶"
    }
  ],

  mien_soups: [
    {
      key: "mien_ga",
      price: 230,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Миен с курицей (стеклянная лапша)",
        ua: "Суп Мієн з куркою (скляна локшина)",
        en: "Mien Soup with Chicken (Glass Noodles)",
        vn: "Miến gà",
        pl: "Zupa Mien z kurczakiem (makaron szklany)",
        de: "Mien-Suppe mit Huhn (Glasnudeln)",
        zh: "鸡肉粉丝汤"
      },
      short: "Прозрачная (стеклянная) лапша, курица и лёгкий бульон."
    },
    {
      key: "mien_bo",
      price: 250,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Миен с говядиной (стеклянная лапша)",
        ua: "Суп Мієн з яловичиною (скляна локшина)",
        en: "Mien Soup with Beef (Glass Noodles)",
        vn: "Miến bò",
        pl: "Zupa Mien z wołowiną (makaron szklany)",
        de: "Mien-Suppe mit Rind (Glasnudeln)",
        zh: "牛肉粉丝汤"
      },
      short: "Стеклянная лапша и говядина — нежно и сытно."
    },
    {
      key: "mien_tofu",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["veg"],
      translations: {
        ru: "Суп Миен с тофу (стеклянная лапша)",
        ua: "Суп Мієн з тофу (скляна локшина)",
        en: "Mien Soup with Tofu (Glass Noodles)",
        vn: "Miến đậu hũ",
        pl: "Zupa Mien z tofu (makaron szklany)",
        de: "Mien-Suppe mit Tofu (Glasnudeln)",
        zh: "豆腐粉丝汤"
      },
      short: "Овощной бульон, стеклянная лапша и тофу."
    },
    {
      key: "mien_tom",
      price: 260,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Миен с креветками (стеклянная лапша)",
        ua: "Суп Мієн з креветками (скляна локшина)",
        en: "Mien Soup with Shrimp (Glass Noodles)",
        vn: "Miến tôm",
        pl: "Zupa Mien z krewetkami (makaron szklany)",
        de: "Mien-Suppe mit Garnelen (Glasnudeln)",
        zh: "虾粉丝汤"
      },
      short: "Стеклянная лапша, креветки и ароматный бульон."
    },
    {
      key: "mien_heo",
      price: 240,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Миен со свининой (стеклянная лапша)",
        ua: "Суп Мієн зі свининою (скляна локшина)",
        en: "Mien Soup with Pork (Glass Noodles)",
        vn: "Miến heo",
        pl: "Zupa Mien z wieprzowiną (makaron szklany)",
        de: "Mien-Suppe mit Schwein (Glasnudeln)",
        zh: "猪肉粉丝汤"
      },
      short: "Стеклянная лапша со свининой и зеленью."
    },
    {
      key: "mien_rau",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["vegan"],
      translations: {
        ru: "Суп Миен с овощами (стеклянная лапша)",
        ua: "Суп Мієн з овочами (скляна локшина)",
        en: "Mien Soup with Vegetables (Glass Noodles)",
        vn: "Miến rau",
        pl: "Zupa Mien z warzywami (makaron szklany)",
        de: "Mien-Suppe mit Gemüse (Glasnudeln)",
        zh: "蔬菜粉丝汤"
      },
      short: "Овощной бульон, стеклянная лапша и овощи."
    },
    {
      key: "mien_mix",
      price: 260,
      weight: 600,
      spicy: 0,
      tags: ["chef"],
      translations: {
        ru: "Суп Миен MIX (стеклянная лапша)",
        ua: "Суп Мієн MIX (скляна локшина)",
        en: "Mien Soup MIX (Glass Noodles)",
        vn: "Miến mix",
        pl: "Zupa Mien MIX (makaron szklany)",
        de: "Mien-Suppe MIX (Glasnudeln)",
        zh: "粉丝汤 MIX"
      },
      short: "Микс — 2 вида начинки в одной порции (например курица + креветки)."
    }
  ],

  mi_soups: [
    {
      key: "mi_tau_ga",
      price: 230,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Ми (яичная лапша) с курицей",
        ua: "Суп Мі (яєчна локшина) з куркою",
        en: "Noodle Soup with Chicken (Egg Noodles)",
        vn: "Mì Tàu gà",
        pl: "Zupa z makaronem jajecznym i kurczakiem",
        de: "Nudelsuppe mit Huhn (Eiernudeln)",
        zh: "鸡肉蛋面汤"
      },
      short: "Суп на яичной лапше: курица, зелень и ароматный бульон."
    },
    {
      key: "mi_tau_bo",
      price: 250,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Ми (яичная лапша) с говядиной",
        ua: "Суп Мі (яєчна локшина) з яловичиною",
        en: "Noodle Soup with Beef (Egg Noodles)",
        vn: "Mì Tàu bò",
        pl: "Zupa z makaronem jajecznym i wołowiną",
        de: "Nudelsuppe mit Rind (Eiernudeln)",
        zh: "牛肉蛋面汤"
      },
      short: "Яичная лапша в бульоне с говядиной — сытно и по-домашнему."
    },
    {
      key: "mi_tau_heo",
      price: 240,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Ми (яичная лапша) со свининой",
        ua: "Суп Мі (яєчна локшина) зі свининою",
        en: "Noodle Soup with Pork (Egg Noodles)",
        vn: "Mì Tàu heo",
        pl: "Zupa z makaronem jajecznym i wieprzowiną",
        de: "Nudelsuppe mit Schwein (Eiernudeln)",
        zh: "猪肉蛋面汤"
      },
      short: "Яичная лапша, свинина, зелень — мягкий вкус."
    },
    {
      key: "mi_tau_tom",
      price: 260,
      weight: 550,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Суп Ми (яичная лапша) с креветками",
        ua: "Суп Мі (яєчна локшина) з креветками",
        en: "Noodle Soup with Shrimp (Egg Noodles)",
        vn: "Mì Tàu tôm",
        pl: "Zupa z makaronem jajecznym i krewetkami",
        de: "Nudelsuppe mit Garnelen (Eiernudeln)",
        zh: "虾蛋面汤"
      },
      short: "Яичная лапша с креветками в ароматном бульоне."
    },
    {
      key: "mi_tau_rau",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["vegan"],
      translations: {
        ru: "Суп Ми (яичная лапша) с овощами",
        ua: "Суп Мі (локшина) з овочами",
        en: "Noodle Soup with Vegetables",
        vn: "Mì Tàu rau",
        pl: "Zupa z makaronem i warzywami",
        de: "Nudelsuppe mit Gemüse",
        zh: "蔬菜面汤"
      },
      short: "Лапша и овощи в лёгком бульоне — просто и вкусно."
    },
    {
      key: "mi_tau_tofu",
      price: 220,
      weight: 550,
      spicy: 0,
      tags: ["veg"],
      translations: {
        ru: "Суп Ми (лапша) с тофу",
        ua: "Суп Мі (локшина) з тофу",
        en: "Noodle Soup with Tofu",
        vn: "Mì Tàu đậu hũ",
        pl: "Zupa z makaronem i tofu",
        de: "Nudelsuppe mit Tofu",
        zh: "豆腐面汤"
      },
      short: "Лапша с тофу и зеленью — лёгкий вариант."
    },
    {
      key: "mi_tau_mix",
      price: 260,
      weight: 600,
      spicy: 0,
      tags: ["chef"],
      translations: {
        ru: "Суп Ми MIX (лапша)",
        ua: "Суп Мі MIX (локшина)",
        en: "Noodle Soup MIX",
        vn: "Mì Tàu mix",
        pl: "Zupa z makaronem MIX",
        de: "Nudelsuppe MIX",
        zh: "面汤 MIX"
      },
      short: "Микс — 2 вида начинки в одной порции (например говядина + свинина)."
    }
  ],

  /* ===================== WOK ===================== */
  wok_fried_pho: [
    {
      key: "pho_xao_ga",
      price: 280,
      weight: 450,
      spicy: 1,
      tags: ["popular"],
      translations: {
        ru: "Жареная рисовая лапша Фо с курицей (ВОК)",
        ua: "Смажена рисова локшина Фо з куркою (ВОК)",
        en: "WOK Fried Pho Noodles with Chicken",
        vn: "Phở xào gà",
        pl: "WOK: Pho smażone z kurczakiem",
        de: "WOK: Gebratene Pho mit Huhn",
        zh: "鸡肉炒河粉"
      },
      short: "Рисовая лапша, овощи и курица, быстро обжарено в воке."
    },
    {
      key: "pho_xao_bo",
      price: 310,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная рисовая лапша Фо с говядиной (ВОК)",
        ua: "Смажена рисова локшина Фо з яловичиною (ВОК)",
        en: "WOK Fried Pho Noodles with Beef",
        vn: "Phở xào bò",
        pl: "WOK: Pho smażone z wołowiną",
        de: "WOK: Gebratene Pho mit Rind",
        zh: "牛肉炒河粉"
      },
      short: "Рисовая лапша Фо, овощи и говядина — насыщенно и сытно."
    },
    {
      key: "pho_xao_heo",
      price: 300,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная рисовая лапша Фо со свининой (ВОК)",
        ua: "Смажена рисова локшина Фо зі свининою (ВОК)",
        en: "WOK Fried Pho Noodles with Pork",
        vn: "Phở xào heo",
        pl: "WOK: Pho smażone z wieprzowiną",
        de: "WOK: Gebratene Pho mit Schwein",
        zh: "猪肉炒河粉"
      },
      short: "Обжаренная лапша Фо со свининой и овощами."
    },
    {
      key: "pho_xao_tom",
      price: 320,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная рисовая лапша Фо с креветками (ВОК)",
        ua: "Смажена рисова локшина Фо з креветками (ВОК)",
        en: "WOK Fried Pho Noodles with Shrimp",
        vn: "Phở xào tôm",
        pl: "WOK: Pho smażone z krewetkami",
        de: "WOK: Gebratene Pho mit Garnelen",
        zh: "虾炒河粉"
      },
      short: "Рисовая лапша, овощи и креветки — морской вок."
    },
    {
      key: "pho_xao_tofu",
      price: 270,
      weight: 450,
      spicy: 1,
      tags: ["veg"],
      translations: {
        ru: "Жареная рисовая лапша Фо с тофу (ВОК)",
        ua: "Смажена рисова локшина Фо з тофу (ВОК)",
        en: "WOK Fried Pho Noodles with Tofu",
        vn: "Phở xào đậu hũ",
        pl: "WOK: Pho smażone z tofu",
        de: "WOK: Gebratene Pho mit Tofu",
        zh: "豆腐炒河粉"
      },
      short: "Лапша Фо, овощи и тофу — лёгко и вкусно."
    },
    {
      key: "pho_xao_rau",
      price: 260,
      weight: 450,
      spicy: 1,
      tags: ["vegan"],
      translations: {
        ru: "Жареная рисовая лапша Фо с овощами (ВОК)",
        ua: "Смажена рисова локшина Фо з овочами (ВОК)",
        en: "WOK Fried Pho Noodles with Vegetables",
        vn: "Phở xào rau",
        pl: "WOK: Pho smażone z warzywami",
        de: "WOK: Gebratene Pho mit Gemüse",
        zh: "蔬菜炒河粉"
      },
      short: "Рисовая лапша и овощи, быстро обжарено в воке."
    },
    {
      key: "pho_xao_mix",
      price: 320,
      weight: 480,
      spicy: 1,
      tags: ["chef"],
      translations: {
        ru: "Жареная рисовая лапша Фо MIX (ВОК)",
        ua: "Смажена рисова локшина Фо MIX (ВОК)",
        en: "WOK Fried Pho Noodles MIX",
        vn: "Phở xào mix",
        pl: "WOK: Pho smażone MIX",
        de: "WOK: Gebratene Pho MIX",
        zh: "炒河粉 MIX"
      },
      short: "Микс — 2 вида начинки в одной порции (например курица + креветки)."
    }
  ],

  wok_fried_mien: [
    {
      key: "mien_xao_ga",
      price: 280,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная стеклянная лапша Миен с курицей (ВОК)",
        ua: "Смажена скляна локшина Мієн з куркою (ВОК)",
        en: "WOK Fried Mien (Glass Noodles) with Chicken",
        vn: "Miến xào gà",
        pl: "WOK: Mien smażone z kurczakiem (makaron szklany)",
        de: "WOK: Gebratene Mien mit Huhn (Glasnudeln)",
        zh: "鸡肉炒粉丝"
      },
      short: "Стеклянная лапша, овощи и курица, обжарено в воке."
    },
    {
      key: "mien_xao_bo",
      price: 310,
      weight: 450,
      spicy: 1,
      tags: ["popular"],
      translations: {
        ru: "Жареная стеклянная лапша Миен с говядиной (ВОК)",
        ua: "Смажена скляна локшина Мієн з яловичиною (ВОК)",
        en: "WOK Fried Mien (Glass Noodles) with Beef",
        vn: "Miến xào bò",
        pl: "WOK: Mien smażone z wołowiną (makaron szklany)",
        de: "WOK: Gebratene Mien mit Rind (Glasnudeln)",
        zh: "牛肉炒粉丝"
      },
      short: "Стеклянная лапша Миен, овощи и говядина — насыщенно."
    },
    {
      key: "mien_xao_heo",
      price: 300,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная стеклянная лапша Миен со свининой (ВОК)",
        ua: "Смажена скляна локшина Мієн зі свининою (ВОК)",
        en: "WOK Fried Mien (Glass Noodles) with Pork",
        vn: "Miến xào heo",
        pl: "WOK: Mien smażone z wieprzowiną (makaron szklany)",
        de: "WOK: Gebratene Mien mit Schwein (Glasnudeln)",
        zh: "猪肉炒粉丝"
      },
      short: "Стеклянная лапша со свининой и овощами, обжарено в воке."
    },
    {
      key: "mien_xao_tom",
      price: 320,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная стеклянная лапша Миен с креветками (ВОК)",
        ua: "Смажена скляна локшина Мієн з креветками (ВОК)",
        en: "WOK Fried Mien (Glass Noodles) with Shrimp",
        vn: "Miến xào tôm",
        pl: "WOK: Mien smażone z krewetkami (makaron szklany)",
        de: "WOK: Gebratene Mien mit Garnelen (Glasnudeln)",
        zh: "虾炒粉丝"
      },
      short: "Стеклянная лапша, овощи и креветки — быстрый вок."
    },
    {
      key: "mien_xao_tofu",
      price: 270,
      weight: 450,
      spicy: 1,
      tags: ["veg"],
      translations: {
        ru: "Жареная стеклянная лапша Миен с тофу (ВОК)",
        ua: "Смажена скляна локшина Мієн з тофу (ВОК)",
        en: "WOK Fried Mien (Glass Noodles) with Tofu",
        vn: "Miến xào đậu hũ",
        pl: "WOK: Mien smażone z tofu (makaron szklany)",
        de: "WOK: Gebratene Mien mit Tofu (Glasnudeln)",
        zh: "豆腐炒粉丝"
      },
      short: "Стеклянная лапша Миен с тофу и овощами — лёгко."
    },
    {
      key: "mien_xao_rau",
      price: 260,
      weight: 450,
      spicy: 1,
      tags: ["vegan"],
      translations: {
        ru: "Жареная стеклянная лапша Миен с овощами (ВОК)",
        ua: "Смажена скляна локшина Мієн з овочами (ВОК)",
        en: "WOK Fried Mien (Glass Noodles) with Vegetables",
        vn: "Miến xào rau",
        pl: "WOK: Mien smażone z warzywami (makaron szklany)",
        de: "WOK: Gebratene Mien mit Gemüse (Glasnudeln)",
        zh: "蔬菜炒粉丝"
      },
      short: "Стеклянная лапша и овощи — обжарено в воке."
    },
    {
      key: "mien_xao_mix",
      price: 320,
      weight: 480,
      spicy: 1,
      tags: ["chef"],
      translations: {
        ru: "Жареная стеклянная лапша Миен MIX (ВОК)",
        ua: "Смажена скляна локшина Мієн MIX (ВОК)",
        en: "WOK Fried Mien (Glass Noodles) MIX",
        vn: "Miến xào mix",
        pl: "WOK: Mien smażone MIX (makaron szklany)",
        de: "WOK: Gebratene Mien MIX (Glasnudeln)",
        zh: "炒粉丝 MIX"
      },
      short: "Микс — 2 вида начинки в одной порции (например говядина + креветки)."
    }
  ],

  wok_fried_mi: [
    {
      key: "mi_xao_ga",
      price: 270,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная лапша Ми с курицей (ВОК)",
        ua: "Смажена локшина Мі з куркою (ВОК)",
        en: "WOK Fried Noodles with Chicken",
        vn: "Mì xào gà",
        pl: "WOK: Makaron smażony z kurczakiem",
        de: "WOK: Gebratene Nudeln mit Huhn",
        zh: "鸡肉炒面"
      },
      short: "Яичная лапша, овощи и курица — быстро и сытно."
    },
    {
      key: "mi_xao_bo",
      price: 300,
      weight: 450,
      spicy: 1,
      tags: ["popular"],
      translations: {
        ru: "Жареная лапша Ми с говядиной (ВОК)",
        ua: "Смажена локшина Мі з яловичиною (ВОК)",
        en: "WOK Fried Noodles with Beef",
        vn: "Mì xào bò",
        pl: "WOK: Makaron smażony z wołowiną",
        de: "WOK: Gebratene Nudeln mit Rind",
        zh: "牛肉炒面"
      },
      short: "Лапша, овощи и говядина — насыщенный вкус вок."
    },
    {
      key: "mi_xao_heo",
      price: 290,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная лапша Ми со свининой (ВОК)",
        ua: "Смажена локшина Мі зі свининою (ВОК)",
        en: "WOK Fried Noodles with Pork",
        vn: "Mì xào heo",
        pl: "WOK: Makaron smażony z wieprzowiną",
        de: "WOK: Gebratene Nudeln mit Schwein",
        zh: "猪肉炒面"
      },
      short: "Лапша, овощи и свинина — быстро обжарено в воке."
    },
    {
      key: "mi_xao_tom",
      price: 320,
      weight: 450,
      spicy: 1,
      tags: [],
      translations: {
        ru: "Жареная лапша Ми с креветками (ВОК)",
        ua: "Смажена локшина Мі з креветками (ВОК)",
        en: "WOK Fried Noodles with Shrimp",
        vn: "Mì xào tôm",
        pl: "WOK: Makaron smażony z krewetkami",
        de: "WOK: Gebratene Nudeln mit Garnelen",
        zh: "虾炒面"
      },
      short: "Лапша с креветками и овощами — морской вок."
    },
    {
      key: "mi_xao_tofu",
      price: 260,
      weight: 450,
      spicy: 1,
      tags: ["veg"],
      translations: {
        ru: "Жареная лапша Ми с тофу (ВОК)",
        ua: "Смажена локшина Мі з тофу (ВОК)",
        en: "WOK Fried Noodles with Tofu",
        vn: "Mì xào đậu hũ",
        pl: "WOK: Makaron smażony z tofu",
        de: "WOK: Gebratene Nudeln mit Tofu",
        zh: "豆腐炒面"
      },
      short: "Лапша, овощи и тофу — лёгкий вариант."
    },
    {
      key: "mi_xao_rau",
      price: 250,
      weight: 450,
      spicy: 1,
      tags: ["vegan"],
      translations: {
        ru: "Жареная лапша Ми с овощами (ВОК)",
        ua: "Смажена локшина Мі з овочами (ВОК)",
        en: "WOK Fried Noodles with Vegetables",
        vn: "Mì xào rau",
        pl: "WOK: Makaron smażony z warzywami",
        de: "WOK: Gebratene Nudeln mit Gemüse",
        zh: "蔬菜炒面"
      },
      short: "Лапша и овощи, обжарено в воке — просто и вкусно."
    },
    {
      key: "mi_xao_mix",
      price: 320,
      weight: 480,
      spicy: 1,
      tags: ["chef"],
      translations: {
        ru: "Жареная лапша Ми MIX (ВОК)",
        ua: "Смажена локшина Мі MIX (ВОК)",
        en: "WOK Fried Noodles MIX",
        vn: "Mì xào mix",
        pl: "WOK: Makaron smażony MIX",
        de: "WOK: Gebratene Nudeln MIX",
        zh: "炒面 MIX"
      },
      short: "Микс — 2 вида начинки в одной порции (например курица + говядина)."
    }
  ],

  /* ===================== RICE ===================== */
  rice_braised: [
    {
      key: "com_thit_ga_kho",
      price: 260,
      weight: 520,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Рис с тушёной курицей (ком)",
        ua: "Рис з тушкованою куркою (cơm)",
        en: "Rice with Braised Chicken",
        vn: "Cơm thịt gà kho",
        pl: "Ryż z duszonym kurczakiem",
        de: "Reis mit geschmortem Huhn",
        zh: "卤鸡饭"
      },
      short: "Рис + тушёная курица в соусе. Домашний вьетнамский вкус."
    },
    {
      key: "com_thit_bo_kho",
      price: 290,
      weight: 520,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Рис с тушёной говядиной (ком)",
        ua: "Рис з тушкованою яловичиною (cơm)",
        en: "Rice with Braised Beef",
        vn: "Cơm thịt bò kho",
        pl: "Ryż z duszoną wołowiną",
        de: "Reis mit geschmortem Rind",
        zh: "卤牛肉饭"
      },
      short: "Рис с говядиной, тушёной в ароматных специях."
    },
    {
      key: "com_thit_heo_kho",
      price: 270,
      weight: 520,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Рис с тушёной свининой (ком)",
        ua: "Рис з тушкованою свининою (cơm)",
        en: "Rice with Braised Pork",
        vn: "Cơm thịt heo kho",
        pl: "Ryż z duszoną wieprzowiną",
        de: "Reis mit geschmortem Schwein",
        zh: "卤猪肉饭"
      },
      short: "Рис и тушёная свинина — сытно и по-домашнему."
    },
    {
      key: "com_thit_tom_kho",
      price: 300,
      weight: 520,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Рис с тушёными креветками (ком)",
        ua: "Рис з тушкованими креветками (cơm)",
        en: "Rice with Braised Shrimp",
        vn: "Cơm tôm kho",
        pl: "Ryż z duszonymi krewetkami",
        de: "Reis mit geschmorten Garnelen",
        zh: "卤虾饭"
      },
      short: "Рис и креветки в соусе — морской вариант."
    },
    {
      key: "com_chay",
      price: 240,
      weight: 520,
      spicy: 0,
      tags: ["vegan"],
      translations: {
        ru: "Рис с овощами (вегетарианский)",
        ua: "Рис з овочами (вегетаріанський)",
        en: "Vegetarian Rice with Vegetables",
        vn: "Cơm chay",
        pl: "Ryż wegetariański z warzywami",
        de: "Vegetarischer Reis mit Gemüse",
        zh: "素饭"
      },
      short: "Рис, овощи и лёгкий соус — без мяса."
    },
    {
      key: "com_nem",
      price: 260,
      weight: 520,
      spicy: 0,
      tags: ["chef"],
      translations: {
        ru: "Рис с нем (спринг-ролл)",
        ua: "Рис з нем (спрінг-рол)",
        en: "Rice with Nem (Spring Roll)",
        vn: "Cơm nem",
        pl: "Ryż z nem (spring roll)",
        de: "Reis mit Nem (Frühlingsrolle)",
        zh: "春卷饭"
      },
      short: "Рис + хрустящий нем. Просто, понятно, вкусно."
    }
  ],

  fried_rice: [
    {
      key: "com_rang_ga",
      price: 260,
      weight: 480,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Жареный рис с курицей",
        ua: "Смажений рис з куркою",
        en: "Fried Rice with Chicken",
        vn: "Cơm rang gà",
        pl: "Ryż smażony z kurczakiem",
        de: "Gebratener Reis mit Huhn",
        zh: "鸡肉炒饭"
      },
      short: "Обжаренный рис с овощами и курицей."
    },
    {
      key: "com_rang_bo",
      price: 290,
      weight: 480,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Жареный рис с говядиной",
        ua: "Смажений рис з яловичиною",
        en: "Fried Rice with Beef",
        vn: "Cơm rang bò",
        pl: "Ryż smażony z wołowiną",
        de: "Gebratener Reis mit Rind",
        zh: "牛肉炒饭"
      },
      short: "Жареный рис, овощи и говядина — сытно."
    },
    {
      key: "com_rang_tom",
      price: 300,
      weight: 480,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Жареный рис с креветками",
        ua: "Смажений рис з креветками",
        en: "Fried Rice with Shrimp",
        vn: "Cơm rang tôm",
        pl: "Ryż smażony z krewetkami",
        de: "Gebratener Reis mit Garnelen",
        zh: "虾仁炒饭"
      },
      short: "Жареный рис с креветками и овощами."
    },
    {
      key: "com_rang_heo",
      price: 270,
      weight: 480,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Жареный рис со свининой",
        ua: "Смажений рис зі свининою",
        en: "Fried Rice with Pork",
        vn: "Cơm rang heo",
        pl: "Ryż smażony z wieprzowiną",
        de: "Gebratener Reis mit Schwein",
        zh: "猪肉炒饭"
      },
      short: "Жареный рис со свининой — классика."
    },
    {
      key: "com_rang_tofu",
      price: 250,
      weight: 480,
      spicy: 0,
      tags: ["veg"],
      translations: {
        ru: "Жареный рис с тофу",
        ua: "Смажений рис з тофу",
        en: "Fried Rice with Tofu",
        vn: "Cơm rang đậu hũ",
        pl: "Ryż smażony z tofu",
        de: "Gebratener Reis mit Tofu",
        zh: "豆腐炒饭"
      },
      short: "Жареный рис с овощами и тофу."
    },
    {
      key: "com_rang_rau",
      price: 240,
      weight: 480,
      spicy: 0,
      tags: ["vegan"],
      translations: {
        ru: "Жареный рис с овощами",
        ua: "Смажений рис з овочами",
        en: "Fried Rice with Vegetables",
        vn: "Cơm rang rau",
        pl: "Ryż smażony z warzywami",
        de: "Gebratener Reis mit Gemüse",
        zh: "蔬菜炒饭"
      },
      short: "Жареный рис и овощи — без мяса."
    },
    {
      key: "com_rang_mix",
      price: 300,
      weight: 520,
      spicy: 0,
      tags: ["chef"],
      translations: {
        ru: "Жареный рис MIX",
        ua: "Смажений рис MIX",
        en: "Fried Rice MIX",
        vn: "Cơm rang mix",
        pl: "Ryż smażony MIX",
        de: "Gebratener Reis MIX",
        zh: "炒饭 MIX"
      },
      short: "Микс — 2 вида начинки в одной порции (например курица + креветки)."
    }
  ],

  /* ===================== APPETIZERS ===================== */
  appetizers: [
    {
      key: "nem_ran",
      price: 190,
      weight: 180,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Нэм жареный (спринг-роллы)",
        ua: "Нем смажений (спрінг-роли)",
        en: "Fried Nem (Spring Rolls)",
        vn: "Nem rán",
        pl: "Smażone nem (spring rolls)",
        de: "Frittierte Nem (Frühlingsrollen)",
        zh: "炸春卷"
      },
      short: "Хрустящие рулетики с начинкой, подаются с соусом."
    },
    {
      key: "spring_rolls",
      price: 170,
      weight: 160,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Спринг-роллы (свежие)",
        ua: "Спрінг-роли (свіжі)",
        en: "Fresh Spring Rolls",
        vn: "Gỏi cuốn",
        pl: "Świeże spring rollsy",
        de: "Frische Sommerrollen",
        zh: "越南春卷（生）"
      },
      short: "Свежие роллы с овощами (и начинкой по выбору), лёгкие и сочные."
    }
  ],

  /* ===================== DRINKS ===================== */
  drinks: [
    {
      key: "caphe_viet",
      price: 90,
      weight: 250,
      spicy: 0,
      tags: ["popular"],
      translations: {
        ru: "Вьетнамский кофе",
        ua: "В’єтнамська кава",
        en: "Vietnamese Coffee",
        vn: "Cà phê Việt",
        pl: "Kawa wietnamska",
        de: "Vietnamesischer Kaffee",
        zh: "越南咖啡"
      },
      short: "Крепкий кофе со сгущённым молоком (по желанию)."
    },
    {
      key: "nuoc_chanh",
      price: 70,
      weight: 300,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Лимонад (лайм/лимон)",
        ua: "Лимонад (лайм/лимон)",
        en: "Lemon/Lime Lemonade",
        vn: "Nước chanh",
        pl: "Lemoniada (cytryna/limonka)",
        de: "Limonade (Zitrone/Limette)",
        zh: "柠檬/青柠水"
      },
      short: "Освежающий напиток с цитрусом."
    },
    {
      key: "bo_huc",
      price: 80,
      weight: 250,
      spicy: 0,
      tags: [],
      translations: {
        ru: "Энергетик (Bò Húc)",
        ua: "Енергетик (Bò Húc)",
        en: "Energy Drink (Bò Húc)",
        vn: "Nước bò húc",
        pl: "Napój energetyczny (Bò Húc)",
        de: "Energy-Drink (Bò Húc)",
        zh: "能量饮料（Bò Húc）"
      },
      short: "Вьетнамский энергетик. Бодрит сильнее, чем мысли о дедлайне."
    }
  ]
};

/* Optional: if you want fixed order of categories on page */
(function orderKeys(){
  const order = [
    "pho_soups",
    "bun_soups",
    "cold_bun",
    "bun_bo_hue",
    "bun_cha_ca",
    "mien_soups",
    "mi_soups",
    "wok_fried_pho",
    "wok_fried_mien",
    "wok_fried_mi",
    "rice_braised",
    "fried_rice",
    "appetizers",
    "drinks"
  ];
  const out = {};
  order.forEach(k => { if (menuData[k]) out[k] = menuData[k]; });
  Object.keys(menuData).forEach(k => { if (!out[k]) out[k] = menuData[k]; });
  // replace object in-place
  for (const k of Object.keys(menuData)) delete menuData[k];
  for (const k of Object.keys(out)) menuData[k] = out[k];
})();

/* =========================================================
   ✅ GLOBAL INGREDIENT OPTIONS + CUSTOM BASE FOR "Собери сам"
   - Protein REQUIRED, max 2
   - Sauces REQUIRED, max 2
   - Veggies optional, max 4
   - Addons optional, max 3
   - Coffee options for drinks (ice / condensed milk / sugar)
   - "Собери сам" gets: is_custom_builder=true, custom_base=<category>
   ========================================================= */
(function(){
  const CAT_BASE_RU = {
    pho_soups: "Фо (суп)",
    bun_soups: "Бун (суп)",
    cold_bun: "Холодный Бун",
    bun_bo_hue: "Бун Бо Хюэ",
    bun_cha_ca: "Бун Ча Ка",
    mien_soups: "Миен (суп)",
    mi_soups: "Ми (суп)",
    wok_fried_pho: "ВОК: жареный Фо",
    wok_fried_mien: "ВОК: жареный Миен",
    wok_fried_mi: "ВОК: жареная лапша",
    rice_braised: "Рис: тушёные",
    fried_rice: "Рис: жареный",
    appetizers: "Закуски",
    drinks: "Напитки",
    top: "TOP"
  };

  const FOOD_INGREDIENTS = [
    {
      id: "protein",
      title: { ru:"Белок", ua:"Білок", en:"Protein", vn:"Đạm", pl:"Białko", de:"Protein", zh:"蛋白" },
      required: true,
      multi: true,
      max: 2,
      items: [
        { id:"chicken_50",  label:{ru:"Курица 50г",  vn:"Gà 50g"},  price_delta: 7 },
        { id:"chicken_100", label:{ru:"Курица 100г", vn:"Gà 100g"}, price_delta: 14 },
        { id:"chicken_150", label:{ru:"Курица 150г", vn:"Gà 150g"}, price_delta: 21 },

        { id:"pork_50",  label:{ru:"Свинина 50г",  vn:"Heo 50g"},  price_delta: 7 },
        { id:"pork_100", label:{ru:"Свинина 100г", vn:"Heo 100g"}, price_delta: 14 },
        { id:"pork_150", label:{ru:"Свинина 150г", vn:"Heo 150g"}, price_delta: 21 },

        { id:"beef_50",  label:{ru:"Говядина 50г",  vn:"Bò 50g"},  price_delta: 8 },
        { id:"beef_100", label:{ru:"Говядина 100г", vn:"Bò 100g"}, price_delta: 16 },
        { id:"beef_150", label:{ru:"Говядина 150г", vn:"Bò 150g"}, price_delta: 24 },

        { id:"tofu_50",  label:{ru:"Тофу 50г",  vn:"Đậu phụ 50g"},  price_delta: 6 },
        { id:"tofu_100", label:{ru:"Тофу 100г", vn:"Đậu phụ 100g"}, price_delta: 12 },
        { id:"tofu_150", label:{ru:"Тофу 150г", vn:"Đậu phụ 150g"}, price_delta: 18 },

        { id:"shrimp_1", label:{ru:"1 креветка (30г)", vn:"1 con tôm (30g)"}, price_delta: 6 },
        { id:"shrimp_2", label:{ru:"2 креветки (60г)", vn:"2 con tôm (60g)"}, price_delta: 12 },
        { id:"shrimp_4", label:{ru:"4 креветки (120г)", vn:"4 con tôm (120g)"}, price_delta: 24 },
        { id:"shrimp_6", label:{ru:"6 креветок (180г)", vn:"6 con tôm (180g)"}, price_delta: 36 }
      ]
    },
    {
      id: "veggies",
      title: { ru:"Овощи", ua:"Овочі", en:"Veggies", vn:"Rau", pl:"Warzywa", de:"Gemüse", zh:"蔬菜" },
      required: false,
      multi: true,
      max: 4,
      items: [
        { id:"wok_veg", label:{ru:"овощи wok", vn:"rau xào"}, price_delta: 6 },
        { id:"corn",    label:{ru:"кукуруза", vn:"hạt ngô"}, price_delta: 4 },
        { id:"sprouts", label:{ru:"ростки", vn:"hạt đỗ"}, price_delta: 4 },
        { id:"carrot",  label:{ru:"морковь", vn:"cà rốt"}, price_delta: 3 },
        { id:"scall",   label:{ru:"зелёный лук", vn:"hành lá"}, price_delta: 3 }
      ]
    },
    {
      id: "addons",
      title: { ru:"Добавки", ua:"Додатки", en:"Add-ons", vn:"Topping", pl:"Dodatki", de:"Extras", zh:"加料" },
      required: false,
      multi: true,
      max: 3,
      items: [
        { id:"onion",       label:{ru:"лук", vn:"hành củ"}, price_delta: 3 },
        { id:"fried_onion", label:{ru:"жареный лук", vn:"hành khô"}, price_delta: 4 },
        { id:"peanut",      label:{ru:"арахис", vn:"hạt lạc"}, price_delta: 5 }
      ]
    },
    {
      id: "sauces",
      title: { ru:"Соусы", ua:"Соуси", en:"Sauces", vn:"Nước chấm", pl:"Sosy", de:"Saucen", zh:"酱汁" },
      required: true,
      multi: true,
      max: 2,
      items: [
        { id:"sweet_sour", label:{ru:"кисло-сладкий", vn:"chua ngọt"}, price_delta: 3 },
        { id:"fish",       label:{ru:"рыбный соус", vn:"nước mắm"}, price_delta: 3 },
        { id:"soy",        label:{ru:"соевый соус", vn:"xì dầu"}, price_delta: 2 },
        { id:"chili",      label:{ru:"острый перец", vn:"ớt cay"}, price_delta: 2 },
        { id:"nem",        label:{ru:"соус для nem", vn:"nước mắm nem"}, price_delta: 3 }
      ]
    }
  ];

  const COFFEE_OPTIONS = [
    {
      id: "ice",
      title: { ru:"Лёд", ua:"Лід", en:"Ice", vn:"Đá", pl:"Lód", de:"Eis", zh:"冰" },
      required: false,
      multi: false,
      items: [
        { id:"no_ice", label:{ru:"Без льда", vn:"Không đá"}, price_delta: 0 },
        { id:"ice",    label:{ru:"Со льдом", vn:"Có đá"}, price_delta: 0 }
      ]
    },
    {
      id: "milk",
      title: { ru:"Молоко", ua:"Молоко", en:"Milk", vn:"Sữa", pl:"Mleko", de:"Milch", zh:"奶" },
      required: false,
      multi: false,
      items: [
        { id:"no_milk", label:{ru:"Без", vn:"Không"}, price_delta: 0 },
        { id:"cond",    label:{ru:"Сгущённое", vn:"Sữa đặc"}, price_delta: 5 }
      ]
    },
    {
      id: "sugar",
      title: { ru:"Сахар", ua:"Цукор", en:"Sugar", vn:"Đường", pl:"Cukier", de:"Zucker", zh:"糖" },
      required: false,
      multi: false,
      items: [
        { id:"0", label:{ru:"0%", vn:"0%"}, price_delta: 0 },
        { id:"25", label:{ru:"25%", vn:"25%"}, price_delta: 0 },
        { id:"50", label:{ru:"50%", vn:"50%"}, price_delta: 0 },
        { id:"75", label:{ru:"75%", vn:"75%"}, price_delta: 0 },
        { id:"100", label:{ru:"100%", vn:"100%"}, price_delta: 0 }
      ]
    }
  ];

  const deepClone = (o) => JSON.parse(JSON.stringify(o));

  function ensureOptionGroup(item, group){
    if (!item.options) item.options = [];
    const exists = item.options.some(g => g && g.id === group.id);
    if (!exists) item.options.push(deepClone(group));
  }

  function applyFoodIngredientsToItem(item){
    FOOD_INGREDIENTS.forEach(g => ensureOptionGroup(item, g));
  }

  function applyCoffeeOptionsToItem(item){
    if (!item.options) item.options = [];
    COFFEE_OPTIONS.forEach(g => ensureOptionGroup(item, g));
  }

  function makeBuilderItem(catKey){
    const base = CAT_BASE_RU[catKey] || catKey;

    const META = {
      pho_soups:   {
      name: "Собери сам Фо (супы)", id:"custom_pho_soups",   key:"build_pho_soup",   name_ru:"Собери сам Фо (супы)",        image: "images/build_pho_soup.png" },
      bun_soups:   {
      name: "Собери сам Бун (супы)", id:"custom_bun_soups",   key:"build_bun_soup",   name_ru:"Собери сам Бун (супы)",       image: "images/build_bun_soup.png" },
      cold_bun:    {
      name: "Собери сам Холодный Бун", id:"custom_cold_bun",    key:"build_cold_bun",    name_ru:"Собери сам Холодный Бун",     image: "images/build_cold_bun.png" },
      bun_bo_hue:  {
      name: "Собери сам Бун Бо Хюэ", id:"custom_bun_bo_hue",  key:"build_bun_bo_hue",  name_ru:"Собери сам Бун Бо Хюэ",       image: "images/build_bun_bo_hue.png" },
      bun_cha_ca:  {
      name: "Собери сам Бун Ча Ка", id:"custom_bun_cha_ca",  key:"build_bun_cha_ca",  name_ru:"Собери сам Бун Ча Ка",        image: "images/build_bun_cha_ca.png" },
      mien_soups:  {
      name: "Собери сам Миен (супы)", id:"custom_mien_soups",  key:"build_mien_soup",  name_ru:"Собери сам Миен (супы)",      image: "images/build_mien_soup.png" },
      mi_soups:    {
      name: "Собери сам Ми (супы)", id:"custom_mi_soups",    key:"build_mi_soup",    name_ru:"Собери сам Ми (супы)",        image: "images/build_mi_soup.png" },
      wok_fried_pho:{
      name: "Собери сам ВОК: жареный Фо",id:"custom_wok_pho",     key:"build_wok_pho",     name_ru:"Собери сам ВОК: жареный Фо",   image: "images/build_wok_pho.png" },
      wok_fried_mien:{
      name: "Собери сам ВОК: жареный Миен",id:"custom_wok_mien",   key:"build_wok_mien",    name_ru:"Собери сам ВОК: жареный Миен", image: "images/build_wok_mien.png" },
      wok_fried_mi:{
      name: "Собери сам ВОК: жареная лапша", id:"custom_wok_mi",      key:"build_wok_mi",      name_ru:"Собери сам ВОК: жареная лапша",image: "images/build_wok_mi.png" },
      rice_braised:{
      name: "Собери сам Рис: тушёные", id:"custom_rice_braised",key:"build_rice_braised",name_ru:"Собери сам Рис: тушёные",      image: "images/build_rice_braised.png" },
      fried_rice:  {
      name: "Собери сам Рис: жареный", id:"custom_fried_rice",  key:"build_fried_rice",  name_ru:"Собери сам Рис: жареный",      image: "images/build_fried_rice.png" },
      appetizers:  {
      name: "Собери сам spring roll", id:"custom_spring_roll", key:"build_spring_roll", name_ru:"Собери сам spring roll",       image: "images/build_spring_roll.png",
      price: 120, base_override:"Spring roll" }
    };

    const meta = META[catKey] || { id:`custom_${catKey}`, key:`custom_${catKey}`, name_ru:"Собери сам", image:"images/build/build_custom.png" };
    const baseForThis = meta.base_override || base;

    return {
      id: meta.id,
      key: meta.key,
      name: meta.name_ru,
      image: meta.image,
      price: (meta.price ?? 120),
      weight: 0,
      spicy: 0,
      tags: ["custom","featured"],
      custom: true,
      is_custom_builder: true,
      custom_base: baseForThis,
      base: baseForThis,
      translations: {
        ru: meta.name_ru,
        ua: meta.name_ru,   // если захочешь — позже добавим нормальные переводы
        en: "Build your own",
        vn: "Tự chọn",
        pl: "Złóż sam",
        de: "Stell dir zusammen",
        zh: "自选"
      },
      short: `База: ${baseForThis}`
    };
  }

  function ensureTopCategory(){
    if (menuData.top) return;
    // Try to find Vietnamese coffee in drinks
    let coffee = null;
    try{
      const d = menuData.drinks || [];
      coffee = d.find(x => (x.key && String(x.key).toLowerCase().includes("caphe")) ||
                           (x.image && String(x.image).toLowerCase().includes("caphe")) ||
                           (x.translations && x.translations.ru && String(x.translations.ru).toLowerCase().includes("кава")));
    }catch(_){}
    menuData.top = [];
    if (coffee) menuData.top.push(coffee);
  }

  function injectBuildersPerCategory(){
    const foodCats = Object.keys(menuData).filter(k => k !== "drinks" && k !== "top");
    foodCats.forEach(k => {
      const arr = menuData[k];
      if (!Array.isArray(arr) || arr.length === 0) return;

      // if first already builder, ensure fields and base
      const first = arr[0];
      if (first && first.is_custom_builder){
        first.custom_base = first.custom_base || (CAT_BASE_RU[k] || k);
        return;
      }
      const builder = makeBuilderItem(k);
      // add ingredient groups to builder too
      applyFoodIngredientsToItem(builder);
      arr.unshift(builder);
    });
  }

  function applyIngredientsEverywhere(){
    for (const [catKey, arr] of Object.entries(menuData)){
      if (!Array.isArray(arr)) continue;

      arr.forEach(item => {
        if (!item || typeof item !== "object") return;

        // Mark builder items with base
        if (item.is_custom_builder){
          item.custom_base = item.custom_base || (CAT_BASE_RU[catKey] || catKey);
        }

        if (catKey === "drinks" || (item.tags || []).includes("drink")){
          applyCoffeeOptionsToItem(item);
        } else {
          applyFoodIngredientsToItem(item);
        }
      });
    }
  }

  // Do it
  ensureTopCategory();
  injectBuildersPerCategory();
  applyIngredientsEverywhere();
})();
