// Get /pricing page

module.exports = (req, res) => {
  return res.render('pricing/index', {
    page: 'pricing/index',
    title: 'Ücretlendirme',
    meta: 'pricing',
    includes: {
      external: {
        css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage'],
        js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage', 'filterPage', 'reportPage', 'headerListener']
      }
    },
    browser_lang: '["en"]'
  });
}
