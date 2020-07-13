"use strict";
/**
 * THis is yet another testing tool, except this one uses console
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mockdate = require("mockdate");
const router = require("./router");
require("./arrayRandom");
const util_1 = require("util");
function generateRandomFood(count = 4) {
    const foods = [
        "ไข่ระเบิด", "ชานมไข่มุกพ่นไฟ", 'ตมสมปลาทบทม', 'ตมยำโปะแตก', 'แกงจดเตาหไขสาหราย', 'กระดกออนตนไชเทายาจน', 'แกงจดหมมวนสาหราย', 'ซโครงหมตนเยอไผ', 'ผกรวม', 'เกยมฉายซโครงหม', 'แกงสมชะอมทอดกง', 'แกงจดลกรอก', 'แกงจดแตงกวาสอดไส', 'มะระตนยาจนกระดกหม', 'ตมขาไก', 'เปดตนฟก', 'ตมโคลงปลาดกยาง', 'ตมเลอดหม', 'รวมมตร', 'แกงจดผกกาดขาวลกชนปลา', 'เหดหอม', 'แกงจดมะระยดไสหมสบ', 'ไกตนฟกมะนาวดอง', 'ตมจบฉาย', 'ปลาสลด', 'ขาหม', 'แกงเลยงกงสด', 'ตมยำกง', 'แกงจดไขนำ', 'ปลากรอบ', 'แกงจดวนเสนหมสบ', 'เกาเหลาลกชนหม', 'ตมแซบกระดกหมออน'
    ];
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(foods.pickRandom());
    }
    return result;
}
function generateRandomMeal(count = 4) {
    return { "Breakfast": generateRandomFood(), "Lunch": generateRandomFood(), "Dinner": generateRandomFood() };
}
const mockDatabase = {
    "7/1/2020": generateRandomMeal(),
    "7/2/2020": generateRandomMeal(),
    "7/3/2020": generateRandomMeal(),
    "7/4/2020": generateRandomMeal(),
    "7/5/2020": generateRandomMeal(),
    "7/6/2020": generateRandomMeal(),
    "7/7/2020": generateRandomMeal(),
    "7/8/2020": generateRandomMeal(),
};
mockdate.set(new Date(2020, 6, 1));
const messageRouter = new router.MessageRouter({
    "week": new router.LegacyWeekOverview(mockDatabase),
}, {
    "week": ["week", "wk", "summary", "sum", "overview"]
}, new router.LegacyPassthru(mockDatabase));
let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
rl.on('line', function (line) {
    const reply = messageRouter.reply(line);
    console.log(util_1.inspect(reply, { showHidden: false, depth: null }));
    console.log(JSON.stringify(reply).length);
});
//# sourceMappingURL=manualRouterTest.js.map