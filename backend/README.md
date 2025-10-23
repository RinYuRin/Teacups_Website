# Teacups Reviews Backend

Simple Express + MongoDB (Mongoose) API for storing and retrieving reviews/comments.

Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI` and `PORT`.
2. Install dependencies:

   npm install

3. Run locally:

   npm run dev

API

# Teacups Reviews Backend

Simple Express + MongoDB (Mongoose) API for storing and retrieving reviews/comments.

Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI` and `PORT`.
2. Install dependencies:

   npm install

3. Run locally:

   npm run dev

API

- POST /api/reviews
  - body: { productId?, name, email?, rating?, comment }
  - returns created review

- GET /api/reviews?productId=...&page=1&limit=20
  - returns list of reviews

- GET /api/reviews/:id
  - returns a single review

Notes

- Add validation, rate-limiting, and sanitize inputs before production.

Client example (browser / React)

```js
// POST a review
await fetch('http://localhost:4000/api/reviews', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ productId: 'tea-1', name: 'Alice', rating: 5, comment: 'Loved it!' })
});

// GET reviews for a product
const res = await fetch('http://localhost:4000/api/reviews?productId=tea-1');
const reviews = await res.json();
```

---

MongoDB Atlas connection

If you use MongoDB Atlas, create a cluster and a database user. In the Atlas UI, use "Connect" -> "Connect your application" to get a connection string. Typical SRV-style URI looks like:

```
mongodb+srv://<username>:<password>@cluster0.abcd1.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Notes when creating the URI:
- Replace `<username>`, `<password>`, and `<dbname>` with your values.
- If your password contains special characters (e.g. `@`, `:`), URL-encode them (e.g. `%40` for `@`).
- If your app and Atlas are in different networks, ensure your IP is whitelisted (or allow access from 0.0.0.0/0 for quick testing).

Example `.env` (do NOT commit this file to git):

```
MONGODB_URI=mongodb+srv://alice:My%40TastyPwd@cluster0.abcd1.mongodb.net/teacups_reviews?retryWrites=true&w=majority
PORT=4000
```

Quick local test

I added a `test-connect.js` script that reads `MONGODB_URI` from `.env` and attempts a connection. To test:

PowerShell:

```powershell
Set-Location 'C:\Users\honey\OneDrive\Pictures\Desktop\teacups-pos-website-main\backend'
npm install
node test-connect.js
```

Expected output on success:

```
Connected to MongoDB Atlas successfully
```

Troubleshooting

- "Authentication failed" — verify username/password and URL-encoding.
- "IP not whitelisted" — add your IP in Atlas Network Access or allow access from anywhere for testing.
- If you use a private VPC or peering, follow Atlas docs for private networking.

After the connection is confirmed, start the API server:

```powershell
npm run dev
```

The server listens on `http://localhost:4000` by default and uses the `MONGODB_URI` from your `.env`.

If you'd like, paste the (redacted) connection string here (replace password with `***`) and I can confirm the exact `.env` value you need and help troubleshoot any connection errors.
