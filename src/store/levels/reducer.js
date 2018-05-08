const defaultState = {
  level1: {
    resources: {
      boar: 10,
      sheep: 10,
      coconuts: 10,
      trees: 10,
      freshWater: 10, // percentage of island that has fresh water
      caves: 1,
      volcanoes: 0
    },
    eventsByTurn: {
      10: {
        action: "PASSING_BOAT",
        successCriteria: {
          noticeability: {
            fromTheSide: 10,
            fromAbove: null,
            soundRadius: 10,
            radioDistance: 10
          }
        },
        messages: {
          init: "A ship is passing by, I wonder if it spots you!",
          success: "Great, the ship has seen you, you have been rescued!",
          failure:
            "Turns out the captain was drunk and didn't notice your valient efforts to get noticed. You are still stranded."
        },
        successAction: {
          type: "BEAT_LEVEL"
        }
      }
    }
  }
};

const levels = (state = defaultState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default levels;
