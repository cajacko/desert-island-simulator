const defaultState = {
  user1: {
    engineering: 10,
    hunting: 10,
    herbology: 10,
    mindfulness: 10,
    rationality: 10,
    medicine: 10
  }
};

const users = (state = defaultState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default users;
