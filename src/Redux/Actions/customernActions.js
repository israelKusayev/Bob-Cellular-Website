export const FETCH_CUSTOMER_BEGIN = 'FETCH_CUSTOMER_BEGIN';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

export function fetchCustomer(id, router) {
  return function(dispatch) {
    dispatch(fetchCustomerBegin());
    return fetch(
      'http://localhost:54377/api/customerWebsite/getCustomerLines/' + id
    )
      .then((response) => response.json().then((body) => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch(fetchCustomerFailure('Customer not found'));
        } else {
          const customer = JSON.parse(body);
          debugger;
          dispatch(fetchCustomerSuccess(customer));
          router.push('/customer-info');
        }
      });
  };
}

export const fetchCustomerBegin = () => ({
  type: FETCH_CUSTOMER_BEGIN
});

export const fetchCustomerSuccess = (customer) => ({
  type: FETCH_CUSTOMER_SUCCESS,
  payload: { customer }
});

export const fetchCustomerFailure = (error) => ({
  type: FETCH_CUSTOMER_FAILURE,
  payload: { error }
});
