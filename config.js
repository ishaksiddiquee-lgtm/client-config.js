// Point these at your deployed backend (Render/Railway/Fly.io/etc).
// Netlify only serves static files, so the Node/Socket.IO server in /server
// must be hosted separately — see README.md for the full deployment steps.
window.APP_CONFIG = {
  API_BASE_URL: 'http://localhost:4000/api',
  SOCKET_URL: 'http://localhost:4000'
};
