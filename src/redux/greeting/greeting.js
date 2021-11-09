const GREET = 'GREET';

const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case GREET:
      return { message: action.payload };
    default:
      return state;
  }
};

const greet = (payload) => ({
  type: GREET,
  payload,
});

export const fetchGreeting = () => (dispatch) => {
  fetch('http://localhost:8000/v1/random-message')
    .then((response) => response.json())
    .then((json) => dispatch(greet(json.message)));
};

export default greetingReducer;
