//! jest에서는 es6문법을 지원하지 않는다.
//! 이를 지원하려면 별도의 설정이 필요한데 일단은 그냥 작성한다.

const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

var container = null;

describe('index.html', () => {
  beforeEach(async () => {
    jsdom2 = await JSDOM.fromFile(path.resolve(__dirname, '../public/index.html'), {
      resources: "usable",
      runScripts: "dangerously"
    });
    await new Promise((resolve) => {
      jsdom2.window.addEventListener("load", resolve);
      container = jsdom2.window.document;
    });
  });

  it('header element check', () => {
    expect(container.querySelector('header')).not.toBeNull()
  })
})