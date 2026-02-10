import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
const { key, expire } = req.query;
const file = path.join(process.cwd(), 'data/keys.json');
const data = JSON.parse(fs.readFileSync(file));

data[key] = { role: 'user', expire };
fs.writeFileSync(file, JSON.stringify(data, null, 2));

res.json({ success: true });
}