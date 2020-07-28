import TitleSection from './Components/TitleSection.js'
import FormSection from "./Components/FormSection";

export default class App {
  constructor($target) {
    const titleSection = new TitleSection({ $target });
    const formSection = new FormSection({ $target });
  }
}