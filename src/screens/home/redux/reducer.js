const initialState = {
  recommendeds: [{}],
  detailBook: [{}],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDED':
      return {
        ...state,
        recommendeds: action.payload,
      };

    case 'DETAIL_BOOK':
      return {
        ...state,
        detailBook: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
