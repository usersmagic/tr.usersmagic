
const CaseStudy = require("../../../models/case_studies/casestudy");

module.exports = async (req, res) => {
    if (!req.query.id) return res.redirect('/company'); 
    const id = req.query.id;
    const caseStudy = await CaseStudy.findOne({_id: id});

    return res.render('case_studies/index', {
      page: 'case_studies/index',
      title: `${caseStudy.company_name} araştırması`,
      meta: 'case_studies',
      includes: {
        external: {
          css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage', "index"],
          js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage', 'filterPage', 'reportPage', 'headerListener']
        }
      },
      caseStudy
    });
}