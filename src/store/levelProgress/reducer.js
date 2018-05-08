const defaultState = {};

const levelProgress = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "START":
      return payload;

    default:
      return state;
  }
};

export default levelProgress;
