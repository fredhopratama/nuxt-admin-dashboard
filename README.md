# Nuxt Admin Dashboard

Admin dashboard berbasis **Nuxt 4 + Tailwind CSS** yang dikembangkan sebagai **frontend-only dashboard** dengan pendekatan desain terinspirasi dari **AdminLTE**.

Proyek ini difokuskan pada:
- Struktur UI yang rapi dan konsisten
- Komponen reusable
- UX yang jelas untuk admin panel
- Kesiapan untuk dikembangkan lebih lanjut (data real, API, auth, dsb)

---

## Fitur Saat Ini

- ✅ Halaman Login
- ✅ Dashboard dengan info cards dan chart
- ✅ Tabel Users dengan:
  - Pagination UI
  - Action button (edit / delete)
  - Styling ala admin dashboard
- ✅ Sidebar interaktif (hover state, active state, user info)
- ✅ Layout terpisah (auth & default layout)
- ✅ State management menggunakan Pinia

> Catatan: Proyek ini **belum terhubung ke backend** dan menggunakan data statis/dummy untuk keperluan UI dan demonstrasi.

---

## Referensi Desain

UI dan UX **terinspirasi dari AdminLTE**  
https://adminlte.io/

Namun implementasi dilakukan ulang menggunakan:
- Tailwind CSS
- Komponen Nuxt
- Struktur modern Vue/Nuxt

Tidak menggunakan AdminLTE secara langsung.

---

## Tech Stack

- **Nuxt 4**
- **Vue 3 (Composition API)**
- **Tailwind CSS**
- **Pinia**
- **TypeScript**

---

## Setup & Development

Install dependencies:

```bash
npm install
```