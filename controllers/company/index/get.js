module.exports = (req, res) => {
  const target_users = [
    {
      _id: 'tom',
      image: '/res/images/company/target_users/tom_small.png',
      name: 'Mete',
      occupation: 'Üniversite Öğrencisi',
      country: '🇹🇷 Türkiye',
      city: '🌉  İstanbul',
      paid_subscriptions: '🌉  İstanbul',
      hobbies: '⚽️ Futbol',
      favorite_products: '⌚️ Whoop',
      favorite_apps: '🏋 Nike Training Club'
    },
    {
      _id: 'emma',
      image: '/res/images/company/target_users/emma_small.png',
      name: 'Emma',
      occupation: 'Yeni Mezun',
      country: '🇺🇸 Amerika',
      city: '💙 Ann Arbor',
      paid_subscriptions: '💙 Ann Arbor',
      hobbies: '🎨 Çizim',
      favorite_products: '🚲 Peloton',
      favorite_apps: '🏋️‍ Spotify'
    },
    {
      _id: 'yunus',
      image: '/res/images/company/target_users/yunus_small.png',
      name: 'Yunus',
      occupation: 'Öğrenci',
      country: '🇹🇷 Türkiye',
      city: '🌉 İstanbul',
      paid_subscriptions: 'Peloton',
      hobbies: '📖 Kitap okuma',
      favorite_products: '📖 Kindle',
      favorite_apps: '💳 Venmo'
    },
    {
      _id: 'sarah',
      image: '/res/images/company/target_users/sarah_small.png',
      name: 'Sarah',
      occupation: 'Öğrenci',
      country: '🇬🇧 İngiltere',
      city: '🚇 Londra',
      paid_subscriptions: '🚇 Londra',
      hobbies: '🎹 Piyano',
      favorite_products: '⌚️ Apple Watch',
      favorite_apps: '🌱 Lifesum'
    }
  ];
  const target_user_details = {
    tom: {
      name: 'Mete',
      image: '/res/images/company/target_users/tom.png',
      text: 'Bilgisayar mühendisliği okuduğum Michigan üniversitesinde 3. sınıf öğrencisiyim. Tenis oynuyorum ve futbol seviyorum. Yeni şeyler yapmaktan keyif ...',
      person: 'Üniversite Öğrencisi',
      sport: 'Tenis, Futbol',
      watch: 'Netflix, Hulu',
      music: 'Spotify, Pop & Deep Müzik',
      shopping: 'Amazon, Mercari',
      clothing: 'Nike, Uniqlo, Adidas',
      head: 'Headspace, Wellnest',
      food: 'Uber Eats, Whole Foods',
    },
    emma: {
      name: 'Ece',
      image: '/res/images/company/target_users/emma.png',
      text: 'İşletme alanından yeni mezun oldum. Danışma ve Analitik alanlarında fırsatlar arıyorum. İlgili olduğum konular...',
      person: 'Yeni mezun',
      sport: 'Tenis, Zumba, HIIT',
      watch: 'Netflix, Hulu, Disney +',
      music: 'Spotify, Pop Müzik',
      shopping: 'Amazon, Facebook',
      clothing: 'Nike, Uniqlo, Lululemon',
      head: 'Calm',
      food: 'Doordash, Trader Joe’s',
    },
    yunus: {
      name: 'Yunus',
      image: '/res/images/company/target_users/yunus.png',
      text: 'Lise öğrencisiyim. Bilgisayar ve fizik alanlarına ilgiliyim. Satranç oynamayı ve Fransızca konuşmayı seviyorum. ',
      person: 'Lise Öğrencisi',
      sport: 'Satranç',
      watch: 'Netflix, BluTV',
      music: 'Spotify, Klasik Müzik',
      shopping: 'Amazon, Trendyol',
      clothing: 'H&M, Zara',
      head: 'None',
      food: 'Yemeksepeti, Getir',
    },
    sarah: {
      name: 'Sarah',
      image: '/res/images/company/target_users/sarah.png',
      text: 'Londrada öğrenciyim. Her gün yoga ve pilates yaparım. Ürün tasarımı üzerine bir kariyer hedefliyorum.',
      person: 'Üniversite Öğrencisi',
      sport: 'Yoga, pilates',
      watch: 'Netflix, Disney +',
      music: 'Spotify',
      shopping: 'Amazon',
      clothing: 'Nike, Uniqlo, Zara',
      head: 'Calm',
      food: 'Pret Subscription',
    }
  };
  const user_quotes = [
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic sadece düşüncelerimizi değerlendirmeyi değil, bize kullanıcılarımızın davranışlarının ',
        'nedenini',
        'anlamamızda bize yardımcı oldu.'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic sadece düşüncelerimizi değerlendirmeyi değil, bize kullanıcılarımızın davranışlarının ',
        'nedenini',
        'anlamamızda bize yardımcı oldu.'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic sadece düşüncelerimizi değerlendirmeyi değil, bize kullanıcılarımızın davranışlarının ',
        'nedenini',
        'anlamamızda bize yardımcı oldu.'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic sadece düşüncelerimizi değerlendirmeyi değil, bize kullanıcılarımızın davranışlarının ',
        'nedenini',
        'anlamamızda bize yardımcı oldu.'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic sadece düşüncelerimizi değerlendirmeyi değil, bize kullanıcılarımızın davranışlarının ',
        'nedenini',
        'anlamamızda bize yardımcı oldu.'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic sadece düşüncelerimizi değerlendirmeyi değil, bize kullanıcılarımızın davranışlarının ',
        'nedenini',
        'anlamamızda bize yardımcı oldu.'
      ]
    }
  ]

  return res.render('company/index', {
    page: 'company/index',
    title: 'Unleash Your Users\' Magic',
    meta: 'company',
    includes: {
      external: {
        css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage'],
        js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
      }
    },
    target_users,
    target_user_details,
    user_quotes
  });
}
