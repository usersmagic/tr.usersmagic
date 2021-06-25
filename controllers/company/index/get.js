// Get /company landing page

const Question = require('../../../models/question/Question');

module.exports = (req, res) => {
  const target_users = [
    {
      _id: 'tom',
      image: '/res/images/company/target_users/cole.png',
      name: 'Cole',
      occupation: 'Öğrenci',
      country: '🇺🇸 Amerika',
      city: '🌁 San Francisco',
      paid_subscriptions: '🌁 San Francisco',
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
      city: '🌉 Istanbul',
      paid_subscriptions: 'Peloton',
      hobbies: '📖 Okuma',
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
      image: '/res/images/company/target_users/cole.png',
      text: 'Boğaziçi üniversitesinde 2.sınıf öğrencisiyim, işletme okuyorum. Eski bir tenis oyuncusuyum ve Fenerbahçe taraftarıyım. Pazarlamaya çok...',
      person: 'Üniversite Öğrencisi',
      sport: 'Tenis, Futbol',
      watch: 'Netflix, Hulu',
      music: 'Spotify, Pop & Deep Music',
      shopping: 'Amazon, Mercari',
      clothing: 'Nike, Uniqlo, Adidas',
      head: 'Headspace, Wellnest',
      food: 'Uber Eats, Whole Foods',
    },
    emma: {
      name: 'Emma',
      image: '/res/images/company/target_users/emma.png',
      text: 'İşletme bölümünden yeni mezun oldum. Danışma ve analitikte yeni fırsatlar arıyorum. İlgili olduğ...',
      person: 'Yeni mezun',
      sport: 'Tenis, Zumba, HIIT',
      watch: 'Netflix, Hulu, Disney +',
      music: 'Spotify, Pop Music',
      shopping: 'Amazon, Facebook',
      clothing: 'Nike, Uniqlo, Lululemon',
      head: 'Calm',
      food: 'Doordash, Trader Joe’s',
    },
    yunus: {
      name: 'Yunus',
      image: '/res/images/company/target_users/yunus.png',
      text: 'Bilgisayar bilimi ve fizikle ilgilenen bir lise öğrencisiyim. Satranç oynamayı ve Fransızca konuşmayı seviyorum.',
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
      text: 'Londra\'da öğrenciyim. Günlük yoga ve pilates yapıyorum. Ürün tasarımı alanında bir kariyer yapmak istiyorum.',
      person: 'Üniversite öğrencisi',
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
        'Usersmagic ile yalnızca fikirlerimizi doğrulamakla kalmadık,  kullanıcılarımızın neden bu şekilde davrandıklarını anladık',
      ]
    },
    {
      name: 'Alptekin Can',
      position: 'CEO, Clay',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Düzenli bir şekilde Usersmagic’i kullanarak uygulamalarımızı hızla geliştirdik ve daha iyi bir kullanıcı deneyim sağlayarak büyüme yakaladık',
      ]
    },
    {
      name: 'Burak Demir',
      position: 'COO, Zerosum',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Usersmagic üzerinden aldığımız detaylı geri bildirim ve cevaplar sayesinde hızlı bir şekilde oyunlarımızı geliştirebiliyoruz'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic ile yalnızca fikirlerimizi doğrulamakla kalmadık,  kullanıcılarımızın neden bu şekilde davrandıklarını anladık',
      ]
    },
    {
      name: 'Alptekin Can',
      position: 'CEO, Clay',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Düzenli bir şekilde Usersmagic’i kullanarak uygulamalarımızı hızla geliştirdik ve daha iyi bir kullanıcı deneyim sağlayarak büyüme yakaladık',
      ]
    },
    {
      name: 'Burak Demir',
      position: 'COO, Zerosum',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Usersmagic üzerinden aldığımız detaylı geri bildirim ve cevaplar sayesinde hızlı bir şekilde oyunlarımızı geliştirebiliyoruz'
      ]
    },
  ];
  const target = {
    _id: '00000000000',
    filters: {},
    status: 'approved',
    project_id: '00000000000',
    name: 'College Students',
    description: 'The US students that are at the college',
    country: 'us',
    submition_limit: 0
  };
  const questions = [
    {
      "_id":"q45doctzyeb",
      "type":"multiple_choice",
      "text":"Do you use Android or IOS",
      "details":"",
      "answers": {"Android":14,"Iphone":11},
      "data": {"max":"Android","total":25}
    },
    {
      "_id":"oiv79sp0ka",
      "type":"opinion_scale",
      "text":"How easy was it to find Usersmagic App on App Store or Play Store?",
      "details":"",
      "answers":{"1":14,"2":2,"3":2,"4":0,"5":3,"6":0,"7":2,"8":0,"9":0,"10":2},
      "answer_percentages":{"1":56.00000000000001,"2":8,"3":8,"4":0,"5":12,"6":0,"7":8,"8":0,"9":0,"10":8},
      "data":{"mean":2.9,"median":1,"total_number":25},
      "range":{"min":1,"max":10},
      "labels":{"left":"Easier","middle":"Medium","right":"Harder"}
    },
    {
      "_id":"4yzjo6xjzvd",
      "type":"open_answer",
      "text":"Why?",
      "details":"",
      "answers":[
        "It was on the 6th row when I searched",
        "It directly appeared when I searched",
        "I couldn't find at all",
        "It suddenly appeared when I searched",
        "First different apps came out but then I manage to find it",
        "Easy to find it. It was the first search result",
        "Too easy, it was the superior result",
        "Too easy, with a single search",
        "I struggled finding it, first I made a typo",
        "I couldn't notice at first",
        "It didn't appear as a primary result",
        "It suddenly appeared when I searched",
        "Due to similar apps, I struggled finding it",
        "I found it easily",
        "It suddenly appeared when I searched",
        "It was pretty quick",
        "It appeared at the 6th row. That's why I gave a 2",
        "It was easy to find",
        "It appeared at the 6th row",
        "It suddenly appeared when I searched",
        "I couldn't find",
        "It suddenly came out, piece of cake",
        "Other apps came out when I first wrote Usersmagic",
        "It was pretty easy to find. It appeared as a primary result",
      ]
    }
  ];

  Question.getFiltersByCountry(target.country, (err, filters) => {
    if (err) return res.redirect('/tester');

    return res.render('company/index', {
      page: 'company/index',
      title: 'Unleash Your Users\' Magic',
      meta: 'company',
      includes: {
        external: {
          css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage', 'filterPage', 'reportPage'],
          js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage', 'filterPage', 'reportPage', 'headerListener']
        }
      },
      target_users,
      target_user_details,
      user_quotes,
      target,
      filters,
      questions
    });
  });
}
