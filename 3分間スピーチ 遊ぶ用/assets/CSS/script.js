const yearSelect = document.getElementById('year');
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');

const today = new Date();
const currentYear = today.getFullYear();

// 年の生成 (1960年〜現在)
for (let y = 1960; y <= currentYear; y++) {
  const option = document.createElement('option');
  option.value = y;
  option.textContent = y;
  yearSelect.appendChild(option);
}

// 月の生成
for (let m = 1; m <= 12; m++) {
  const option = document.createElement('option');
  option.value = m;
  option.textContent = m;
  monthSelect.appendChild(option);
}

// 日数の更新関数
function updateDays() {
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  const lastDay = new Date(selectedYear, selectedMonth, 0).getDate();

  daySelect.innerHTML = '';
  for (let d = 1; d <= lastDay; d++) {
    const option = document.createElement('option');
    option.value = d;
    option.textContent = d;
    daySelect.appendChild(option);
  }
}

yearSelect.addEventListener('change', updateDays);
monthSelect.addEventListener('change', updateDays);
updateDays();

// --- 計算ボタンの処理 ---
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');
const btnInput = document.getElementById('btn');
const resultSpan = document.getElementById('result');

btnInput.addEventListener('click', function(e) {
    e.preventDefault();
    const value1 = parseFloat(yearInput.value);
    const value2 = parseFloat(monthInput.value);
    const value3 = parseFloat(dayInput.value);

    // if文のカッコを修正し、変数名を統一
    if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3)) {
    const sum = value1 + value2 + value3;
    resultSpan.textContent = sum; // タイポ修正
    console.log(`実行:${sum}`);
    } else {
    resultSpan.textContent = '有効な数字を入力してください'; // タイポ修正
    }
});