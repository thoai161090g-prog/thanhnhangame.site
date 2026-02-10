async function login() {
const key = document.getElementById('key').value;
const r = await fetch(`/api/check-key?key=${key}`);
const d = await r.json();
if (d.ok) {
localStorage.setItem('key', key);
location.href = d.role === 'admin' ? 'admin.html' : 'dashboard.html';
} else alert('Key sai hoặc hết hạn');
}

async function analyze() {
const md5 = document.getElementById('md5').value;
const r = await fetch(`/api/analyze?md5=${md5}`);
document.getElementById('rs').innerText = JSON.stringify(await r.json(), null, 2);
}

async function createKey() {
const k = newkey.value;
const e = exp.value;
await fetch(`/api/admin/create-key?key=${k}&expire=${e}`);
alert('Đã tạo key');
}