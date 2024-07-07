function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(paramOuter = "*") {
  return function (paramInner = "special") {
    return `You are ${paramOuter}${paramInner}${paramOuter}!`;
  };
}
