// https://www.acmicpc.net/problem/16953

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [a, b] = input.split(" ").map(Number);

// 내 오답 ㅠㅠ 예제 문제상 틀린건 없음..
// let answer = 0;

// while (a <= b) {
//   if (b % 2 === 0) b = b / 2;
//   else if (b % 10 === 1) {
//     b = parseInt(b / 10);
//     if (a > b) {
//       answer = -1;
//       break;
//     }
//   } else {
//     answer = -1;
//     break;
//   }

//   answer++;
// }

// console.log(answer);

// 강의 답안
let flag = false;
let answer = 1;

while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  }

  if (b % 2 === 0) b = b / 2;
  else if (b % 10 === 1) b = parseInt(b / 10);
  else break;

  answer++;
}

if (flag) console.log(answer);
else console.log(-1);
