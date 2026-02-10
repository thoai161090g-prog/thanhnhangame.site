export default function handler(req, res) {
const { md5 } = req.query;
const x = BigInt('0x' + md5);

const tai = Number(x % 100n);
const xiu = 100 - tai;
const du_doan = tai > xiu ? 'TÀI' : 'XỈU';
const tin_cay = Math.min(Math.abs(tai - xiu), 99);

res.json({ du_doan, tai, xiu, tin_cay: tin_cay + '%' });
}