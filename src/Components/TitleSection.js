const TITLE = "입력 정보"
const SUB_TITLE = "본인 명의의 핸드폰 번호를 입력하세요."

export default class TitleSection {
  constructor({ $target }) {
    this.header = document.createElement('header');
    this.header.className = "header";

    $target.appendChild(this.header);
    this.render();
  }

  render() {
    const titleElem = document.createElement("h2");
    titleElem.className = "main-title";
    titleElem.innerHTML = TITLE;

    const spanElem = document.createElement("span");
    spanElem.className = "sub-title";
    spanElem.innerHTML = SUB_TITLE;

    this.header.append(titleElem, spanElem);
  }
}