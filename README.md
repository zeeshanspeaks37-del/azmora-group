# AZMORA GROUP – Premium Dark Luxury Corporate Website

A bespoke, agency-grade international corporate website redesign for **AZMORA GROUP**, developed with a Dark Luxury aesthetic, smooth cinematic animations, and complete multi-page architecture.

---

## 1. Verified Corporate Identity & Operations

- **Company Name:** AZMORA GROUP
- **Registered Headquarters:** RJ Pavilion, 1st Floor, Permude, Mangalore – 574509, Karnataka, India
- **Direct Phone & Desk:** `+91 6366240126`
- **Corporate Email:** `info@azmoragroup.com`
- **Official Portal:** [www.azmoragroup.com](https://www.azmoragroup.com/)

---

## 2. Dedicated Multi-Page Architecture

1. **Home (`index.html`):** Full-screen cinematic hero, company mission, interactive business division cards, why choose Azmora, institutional reach, and direct enquiry CTA.
2. **About Us (`about.html`):** Corporate heritage, executive governance, core values (statutory compliance, operational precision, material quality, enduring trust), and registered office.
3. **Import & Export (`services/import-export.html`):** Cross-border trade networks, customs compliance advisory, organic commodities, and containerized freight flows.
4. **Coal Trading (`services/coal-trading.html`):** Bulk thermal solid fuel, calorific testing benchmarks, direct concession procurement, and Supramax/Panamax vessel logistics.
5. **Shipping & Logistics (`services/shipping-logistics.html`):** Harbor operations, port clearance, multimodal freight forwarding (sea, air, road), and LCL/FCL consolidation.
6. **Furniture & Custom Manufacturing (`services/furniture.html`):** Architectural wood and metal contract furniture for corporate executive suites, luxury hospitality, and retail interiors.
7. **Azmora Estate (`services/azmora-estate.html`):** Commercial real estate stewardship, logistics parks, and architectural property infrastructure assets.
8. **Azmora Healthcare (`services/azmora-healthcare.html`):** Institutional healthcare supply chain coordination, clinical logistics, and compliant medical equipment infrastructure.
9. **Contact Us (`contact.html`):** Interactive corporate inquiry form with real-time field validation, transmission reference generation, and direct escalation channels.

---

## 3. Technology & Animation Stack

- **Styling & Design System:** Tailwind CSS with custom Dark Luxury configuration (`#07080B` onyx base, metallic champagne gold accents `#C5A059`, and glassmorphic card elevations).
- **Animation Engine:** **GSAP 3** + **ScrollTrigger** for silky smooth viewport reveals, staggered entrances, counter tweens, and 3D card tilt interactions.
- **Inertial Scrolling:** **Lenis** smooth scrolling for effortless luxury motion with automatic `prefers-reduced-motion` accessibility support.
- **Iconography:** **Lucide Icons** corporate SVG collection.
- **Production Routing:** `vercel.json` pre-configured with clean URLs and security headers.

---

## 4. Local Preview

You can open `index.html` directly in any web browser, or launch a lightweight local server:

```bash
# Using Python
python -m http.server 3000

# Open in browser:
# http://localhost:3000
```

---

## 5. Public Deployment on Vercel

This project is 100% production-ready for **Vercel** with zero build configuration required:

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete azmora group premium dark luxury website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/azmora-group-redesign.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import the `azmora-group-redesign` repository.
4. Keep the Framework Preset as **"Other"** (static site) and click **"Deploy"**.
5. Vercel will instantly generate a live public URL (e.g. `https://azmora-group-redesign.vercel.app`).
