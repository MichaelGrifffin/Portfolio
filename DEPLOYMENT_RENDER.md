# 🚀 Fixing Render Build Error ("vite: not found")

The error `sh: 1: vite: not found` happened because Render ran `npm run build` without installing packages first.

---

## 🛠️ How to Fix on Render Dashboard:

1. Go to your service on **Render Dashboard** → **Settings**.
2. Change **Build Command** to:
   ```bash
   npm install && npm run build
   ```
3. Change **Environment / Runtime** to:
   Select **Node** (instead of Elixir/Erlang).
4. Click **Save Changes** → Click **Manual Deploy** → **Deploy latest commit**.

---

## 📋 Recommended Settings Summary:

- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command** (for Web Service): `npm start`
- **Publish Directory** (for Static Site): `dist`
