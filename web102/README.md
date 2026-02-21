# Hackademag Web Store

![Hackademag Logo](web102/hackademag-logo-zip-file/png/logo-no-background.png)

## Descriere generală

Hackademag este un magazin web modern pentru jocuri video, construit cu React, TypeScript și Vite. Proiectul oferă o interfață intuitivă pentru explorarea, filtrarea, adăugarea în favorite și gestionarea coșului de cumpărături pentru jocuri populare pe diverse platforme.

## Structura proiectului

- **Frontend:** React + TypeScript + Vite
- **Routing:** React Router
- **State Management:** Context API (Cart, Favorites, Filter)
- **UI:** CSS custom, FontAwesome, Lucide React
- **Assets:** Imagini, logo-uri, fonturi, categorii

## Funcționalități principale

- **Home:** Slider cu imagini reprezentative, categorii de jocuri
- **Products:** Listă de jocuri cu filtrare după tip, preț, platformă și căutare
- **Favorites:** Adăugare/ștergere jocuri favorite
- **Cart:** Adăugare/ștergere jocuri în coș, modificare cantitate, calcul total
- **Navigation:** Navbar cu logo, search, link-uri către pagini
- **Footer:** Copyright

## Structura folderelor

- `web102/`
  - `src/` — cod sursă React, CSS, JSON cu jocuri
  - `public/` — imagini publice
  - `hackademag-logo-zip-file/` — logo-uri în format PNG/SVG
  - `hackademag-brand-zip-file/` — fonturi

## Cum rulezi proiectul

1. Instalează dependențele:
   ```bash
   npm install
   ```
2. Pornește serverul de dezvoltare:
   ```bash
   npm run dev
   ```
3. Pentru build de producție:
   ```bash
   npm run build
   ```
4. Pentru preview build:
   ```bash
   npm run preview
   ```

## Componente cheie

- `App.tsx` — configurare rutare și context
- `homee.tsx` — pagină principală cu slider și categorii
- `products.tsx` — listă și filtrare jocuri
- `GameList.tsx` — afișare jocuri din `games.json`
- `Favorites.tsx` — gestionare favorite
- `CartPage.tsx` — gestionare coș
- `components/navbar.tsx` — navigație
- `components/footer.tsx` — footer

## Filtrare și căutare

- Filtrare după tip, preț, platformă
- Căutare după titlu
- Adăugare rapidă în favorite sau coș


## Logo-uri și branding

- Logo-uri disponibile în `hackademag-logo-zip-file/png/` și `svg/`
- Poți folosi logo-ul fără fundal pentru branding

## Autor

Caldararu Denisa — 2024

---

### Pentru orice întrebare sau contribuție, folosește Issues sau Pull Requests pe GitHub.

---

**English summary:**

Hackademag is a modern web game store built with React, TypeScript, and Vite. It features filtering, favorites, cart management, and a clean UI. See above for setup and usage instructions.