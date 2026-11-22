// Called by conceptual.html.primary.js of the default template, before and after it transforms the model of a page.

exports.preTransform = function (model) {
  return model;
}

/**
 * The sections of the upgrade guide are written as "### Stride-4.5.0-P2 Title". Their anchor is the ID in lowercase, the
 * address Stride links to (docfx would drop its dots), and the ID gets the step-id class, which draws it under the title.
 */
exports.postTransform = function (model) {
  if (/(^|\/)upgrade\/[^\/]+\.(md|html)$/.test(model._path || "") && model.conceptual) {
    // The headings also have attributes that docfx removes later (sourcefile, sourcestartlinenumber...)
    model.conceptual = model.conceptual.replace(
      /<h3\b([^>]*)>([A-Za-z][\w.]*-\d+\.\d+\.\d+-[A-Z]\d+) /g,
      function (match, attributes, id) {
        return '<h3 id="' + id.toLowerCase() + '"' + attributes.replace(/\s+id="[^"]*"/, '') + '><span class="step-id">' + id + '</span> ';
      });
  }
  return model;
}
