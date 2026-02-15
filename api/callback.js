export default async function handler(req, res) {
  const code = req.query.code;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: code,
    }),
  });

  const data = await response.json();

  res.redirect(
    `https://test-omega-hazel-vecejcshye.vercel.app/admin.html?token=${data.access_token}`
  );
}
