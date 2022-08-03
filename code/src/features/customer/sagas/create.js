import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import * as actions from "../reducers";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
  console.log("Starting fetch request to API");
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const customer = {
      id: customers.length + 1,
      ...fields,
    };
    console.log("customer in saga take create customer", customer);

    // pretend call to API
    yield delay(5);

    const result = [customer, ...customers];

    yield set("CUSTOMERS_KEY", result);

    yield put(actions.createCustomerResult(result));
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
  }
}
