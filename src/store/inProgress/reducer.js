const inProgress = (state = false, { type }) => {
  switch (type) {
    case "START":
      return true;

    case "STOP":
      return false;

    default:
      return state;
  }
};

export default inProgress;
