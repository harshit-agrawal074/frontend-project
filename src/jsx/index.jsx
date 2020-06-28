import store from "./store/app-store";
import { addElement, addAllElements, readAllCategory, readAllElements, readAllGenre, readByUuid} from "./actions/actions";

window.store = store;
window.addElement = addElement;
window.addAllElements = addAllElements;
window.readAllElements = readAllElements;
window.readAllCategory = readAllCategory;
window.readAllGenre = readAllGenre;
window.readByUuid = readByUuid;
