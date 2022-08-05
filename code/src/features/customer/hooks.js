import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING, INPROGRESS } from "../../utilities/helpers";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);
  console.log("in hook", customerID, status, fields);

  console.log(
    "customer ID ::: ",
    customerID,
    status,
    customerID && status !== INPROGRESS
  );

  useEffect(() => {
    if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID));
    } else {
      dispatch(actions.resetForm());
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useListCustomers = (regionID) => {
  //first get all customers using dis
  //filter by region and return
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);
  const customers = useSelector((state) => state.customer.list.customers);
  console.log("customers currently in hook line 77", customers);

  const regions = useSelector((state) => state.customer.regions.list);
  const region = regions.find((r) => r.id === regionID);
  const filtered = customers.filter((c) => c.region === region.name);
  return filtered;
};
export const useListRegions = () => {
  const regions = useSelector((state) => state.customer.regions.list);
  return regions;
};
