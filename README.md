# KLLSWTCH

**KLLSWTCH** is a modular browser-based privacy tool that gradually resets ad personalization, blocks tracking scripts, obfuscates fingerprinting data, and clears persistent storage to reduce targeted advertising and profiling.

> A soft kill switch for surveillance capitalism.

---

## 🔐 Features

- 🛑 Block ad and tracker scripts from known networks
- ♻️ Periodically clear cookies, local/session storage, and cache
- 🕵️ Obfuscate fingerprinting vectors (resolution, time zone, etc.)
- 🎯 Disrupt ad personalization algorithms gradually, not destructively
- ⚙️ Lightweight and modular for future extension

---

## 🧩 Install Options

### 🔧 As a Browser Extension (Recommended)

1. Clone or download this repo.
2. Go to `chrome://extensions` (or Firefox's `about:debugging`)
3. Enable **Developer Mode**.
4. Click **Load Unpacked** and select the `KLLSWTCH` folder.

### 🧪 As a User Script (Tampermonkey)

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Copy code from `kllswtch.user.js` (coming soon)
3. Paste it as a new userscript.

---

## 🚧 Roadmap

- [ ] Integrate an "Adaptive Mode" that tweaks fingerprint traits over time
- [ ] Host a web dashboard for custom rule editing
- [ ] Include user-friendly toggles for specific privacy layers
- [ ] Support mobile browsers (via bookmarklets or progressive web app)

---

## 🧠 Philosophy

KLLSWTCH doesn't "block everything" like a nuke. It gradually makes user data unreliable over time — a soft sabotage against ad targeting models. Think of it as "ethical fuzzing" for the surveillance economy.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). You’re free to use, modify, and redistribute with attribution.

---

## 🤝 Contributing

Pull requests, suggestions, and wild ideas welcome. Open an issue or fork the project.

---

## 🧩 Related

- [uBlock Origin](https://github.com/gorhill/uBlock)
- [Privacy Badger](https://privacybadger.org/)
- [Decentraleyes](https://decentraleyes.org/)
