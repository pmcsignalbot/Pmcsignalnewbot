














const https = require('https');

const token = '8086317413:AAHJLTZbfiScVaJfv4RUgL0yOowb1C-FoCo';
const chatId = '-1002798244134';

const signals = [
  { time: '10:10:00', odds: '2.70x 💥' },
  { time: '10:20:00', odds: '3.10x 💥' },
  { time: '10:30:00', odds: '2.90x 💥' },
  { time: '10:40:00', odds: '3.20x 💥' },
  { time: '10:50:00', odds: '2.80x 💥' }
];

function sendSignal(odds) {
  const message = `📶 PMC සිග්නල්: ${odds} – නවතම ගැස්මක්!`;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  https.get(url, (resp) => {
    console.log(`Signal sent: ${message}`);
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

function checkAndSend() {
  const now = new Date();
  const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM

  signals.forEach(signal => {
    if (signal.time === currentTime) {
      sendSignal(signal.odds);
    }
  });
}

setInterval(checkAndSend, 10000); // Check every 10 seconds
console.log('PMC Fixed Signal Bot Running...');


























