export default async function handler(req, res) {

  const code = req.query.code;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code
    })
  });

  const data = await response.json();

  res.redirect(`https://55885-arch.github.io/test/admin.html?token=${data.access_token}`);
}
