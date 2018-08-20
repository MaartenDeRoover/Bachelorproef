exports.command = function drupalInputParagraphCkeditor({ text }) {
  if (typeof text !== 'undefined') {
    var ckeditor;
    this.execute(
      function (instance, content) {
        for (var i in CKEDITOR.instances)
          CKEDITOR.instances[i].setData(content);
      },
      [
        ckeditor,
        text
      ]
    );
  }

  return this;
};