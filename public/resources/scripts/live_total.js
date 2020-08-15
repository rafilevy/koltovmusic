import { CountUp } from "./countUp.min.js"

window.onload = function() {
    var countUp = new CountUp('live_total', 80_000, {"duration": 10});
    countUp.start();
}