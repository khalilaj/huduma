import { combineReducers } from "redux";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import property from "./property";
import agreement from "./agreement";
import transaction from "./transaction";
import tenant from "./tenant";
import unit from "./unit";

export default combineReducers({
  auth,
  messages,
  errors,
  agreement,
  tenant,
  transaction,
  property,
  unit
});
