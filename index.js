// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair="*") {
     return function(emphatic= "special") {
        return `You are ${flair}${emphatic}${flair}!`;
    };
}

wrapAdjective()("a hard worker");
wrapAdjective("||")("a dedicated programmer");

