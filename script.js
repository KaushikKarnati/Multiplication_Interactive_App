const n1 = Math.ceil(Math.random() * 10);
// console.log(n1);
const n2 = Math.ceil(Math.random() * 10);

const f = document.getElementById('form');
const i = document.getElementById('input');
const s = document.getElementById('score');

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = 0;
}
s.innerText = `score : ${score}`;

const question = document.getElementById('q');
question.innerText = `What is ${n1} multiply by ${n2} ?`;

const Ans = n1 * n2;
f.addEventListener('submit', () => {
  const input_ans = +i.value;
  if (input_ans === Ans) {
    score++;
    storage();
  } else {
    score--;
    storage();
  }
});

function storage() {
  localStorage.setItem('score', JSON.stringify(score));
}
