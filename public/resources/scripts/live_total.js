import { CountUp } from "./countUp.min.js"

window.onload = function() {
    var countUp = new CountUp('live_total', 82_148.51, {"duration": 10});
    countUp.start();
}