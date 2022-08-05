import { all, put, select, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { get } from "../../../utilities/async_storage";

export function* watchLoadCustomers() {
  yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
  try {
    var customers = yield get("CUSTOMERS_KEY");
    console.log("loading customers - saga", customers);
    if (customers == null) {
      customers = [
        {
          id: 1,
          first_name: "M",
          last_name: "H",
          active: true,
          region: "South West",
        },
      ];
    }
    console.log("loading customers after adding default - saga", customers);
    yield put(actions.loadResult(customers));
  } catch (error) {
    yield put(actions.loadResult([]));
  }
}
