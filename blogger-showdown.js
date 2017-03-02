
// namespace
var MarkdownInBlogger = {};

// From http://erlend.oftedal.no/blog/?blogid=14
MarkdownInBlogger.unescapeHTML = function (html) {
  var htmlNode = document.createElement("DIV");
  htmlNode.innerHTML = html;
  if(htmlNode.innerText !== undefined)
    return htmlNode.innerText; // IE
  return htmlNode.textContent; // FF
};

MarkdownInBlogger.convertMD = function () {
  try {

    console.info('Converting markdown using Showdown');

    // showdown renderer
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    var el = document.querySelector('pre.markdown');

    var rawtext = el.innerText;
    var md_html = converter.makeHtml(rawtext);
    var md = $(md_html); //.css('border','3px solid blue');
    md.insertBefore(el);
    el.hidden = true;
    // Array.prototype.forEach.call(els, function(el, i){
    // });
    
    // $('pre.markdown').each(function (i, block) {
    //   //var rawtext = MarkdownInBlogger.unescapeHTML(block.innerText);
    //   var rawtext = block.innerText;
    //   var md_html = converter.makeHtml(rawtext);
    //   var md = $(md_html); //.css('border','3px solid blue');
    //   md.insertBefore(block);
    //   block.hidden = true;
    // });
    $('pre code').each(function (i, block) {
      // to highlight the <code></code>
      //hljs.highlightBlock(block);
    });
  } catch (exc) {
    console.error(exc);
  }
};

$(document).ready(MarkdownInBlogger.convertMD);