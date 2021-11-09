const GREET = 'GREET';

const greetingReducer = (state={}, action) => {
  switch(action.type) {
    case GREET:
      return { message: action.payload };
    default:
      return state;
      break;
  }
};

const greetAction =(payload) => ({
  type: GREET,
  payload
});

export const fetchGreeting = () => (dispatch) => {
  fetch('http://localhost:5000/v1/random-message')
    .then(json(response))
    .then(dispatch(json.message))
}

export default greetingReducer;