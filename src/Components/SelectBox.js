const LABEL = "통신사";
const CARRIERS = [
  {
    code: "SKT",
    description: "SKT"
  },
  {
    code: "KT",
    description: "KT"
  },
  {
    code: "LGT",
    description: "LG U+"
  },
  {
    code: "SKTMVNO",
    description: "SKT 알뜰폰"
  },
  {
    code: "KTMVNO",
    description: "KT 알뜰폰"
  },
  {
    code: "LGTMVNO",
    description: "LG U+ 알뜰폰"
  }
];

export default class SelectBox {
  constructor({ $form }) {
    this.elem = document.createElement('div');
    this.elem.className = "input-section select-box";

    $form.appendChild(this.elem);
    this.render();
  }

  render() {
    const title = document.createElement("label");
    title.innerText = LABEL;
    title.className = "input-label";

    const selectBox = document.createElement("select");
    selectBox.className = "input select";

    CARRIERS.map((carrier) => {
      const { code, description } = carrier;
      const option = document.createElement("option");
      option.value = code;
      option.innerText = code;
      selectBox.appendChild(option);
    });

    this.elem.append(title, selectBox);
  }
}