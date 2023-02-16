import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReduser from "./profilereduser";
import massegeeReduser from "./massegereduser";

const redusers = combineReducers({
    massegeeReduser:massegeeReduser,
    profileReduser:profileReduser,
});
const store = createStore(redusers);


export default store;