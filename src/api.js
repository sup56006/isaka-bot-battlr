const BASE = 'http://localhost:8001';

export const getBots = async () => {
  const res = await fetch(`${BASE}/bots`);
  if (!res.ok) throw new Error('Failed to fetch bots');
  return res.json();
};

export const deleteBot = async (id) => {
  const res = await fetch(`${BASE}/bots/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete bot');
  return res.json();
};

export default { getBots, deleteBot };