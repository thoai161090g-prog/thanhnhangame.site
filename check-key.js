import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
const { key } = req.query;
const file = path.join(process.cwd(), 'data/keys.json');
const data = JSON.parse(fs.readFileSync(file));

if (!data[key]) return res.json({ ok: false });
if (new Date(data[key].expire) < new Date())
return res.json({ ok: false, expired: true });

res.json({ ok: true, role: data[key].role });
}