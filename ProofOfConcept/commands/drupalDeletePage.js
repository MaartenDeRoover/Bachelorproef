exports.command = function drupalDeletePage() {
  this.waitForElementPresent('#block-dropsolid-starter-local-tasks', this.globals.timeoutTime)
    .execute(function () {
      document.querySelector('#block-dropsolid-starter-local-tasks .tabs__nav--local-tasks li:last-child a').click();
    })
    .drupalSubmit();

  return this;
};