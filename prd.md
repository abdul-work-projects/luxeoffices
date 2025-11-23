# **Project Requirements & Technical Specification Document**

## **Office Rental Web Platform**

---

# **1. Project Overview**

Develop a modern, responsive web platform for showcasing office and studio rental spaces. Users should be able to browse available spaces, view detailed information about each space, explore 3D virtual tours via Matterport integration, and submit inquiries. The site does **not** require payment processing or booking functionality.

The platform will be built with:

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS**
- **TypeScript**
- **Vercel deployment**

The site will display rental spaces using structured sample data and publicly available Matterport demo tours.

---

# **2. Objectives**

- Provide a clean, professional browsing experience for rental spaces.
- Showcase each space with images, descriptions, pricing, amenities, and embedded Matterport 3D tours.
- Allow users to submit inquiries via a simple contact form.
- Ensure the site is fast, accessible, SEO-friendly, and production ready.
- Use static sample data for inventory (no CMS, no DB).

---

# **3. Functional Requirements**

## **3.1 Pages & Routes**

The platform must include the following routes using Next.js App Router:

### **3.1.1 Home Page (`/`)**

- Hero section with headline, subheadline, and CTA.
- Featured spaces section (3–4 spaces).
- Sections:

  - Why Choose Us
  - Amenities Overview
  - Contact CTA

### **3.1.2 Spaces Listing Page (`/spaces`)**

- Grid layout showing all available spaces loaded from static data.
- Each space card must display:

  - Thumbnail image
  - Space name
  - Location
  - Starting price
  - Link to detailed page

### **3.1.3 Space Detail Page (`/spaces/[id]`)**

Each detail page must include:

#### **General Information**

- Space name
- Address/location
- Description (short + long)
- Starting pricing (per hour, per day)

#### **Media**

- Image gallery (carousel or grid)
- Embedded **Matterport 3D Tour** using iframe

  - Must support fullscreen
  - Must be responsive

#### **Content Sections**

- Amenities list
- Availability section (static calendar UI – no backend logic)
- Contact CTA button linking to the inquiry form

### **3.1.4 Contact Page (`/contact`)**

- Contact form with fields:

  - Name (required)
  - Email (required)
  - Phone (optional)
  - Message (required)

- On submit:

  - Show UI success state (e.g., toast or success block)
  - No backend integration required (client-side only)

### **3.1.5 About Page (`/about`)**

- Company mission/overview
- Brief description of services
- Quality and reliability statements

---

# **4. Data Structure Requirements**

## **4.1 Data Source**

Rental spaces will be stored in a local TypeScript file (e.g. `/data/spaces.ts`) and imported server-side.

## **4.2 Space Data Structure**

Each space should follow this exact TypeScript interface:

```ts
export interface Space {
  id: string; // unique slug
  name: string;
  shortDescription: string;
  longDescription: string;
  location: string;
  pricePerHour: number;
  pricePerDay: number;
  images: string[]; // URLs to stock or local images
  matterportId: string; // Matterport model ID for embedding
  amenities: string[]; // e.g. ["24/7 Access", "High-speed WiFi"]
}
```

## **4.3 Example Matterport Embed Format**

```html
<iframe
  src="https://my.matterport.com/show/?m=MATTERPORT_ID"
  allow="fullscreen; vr"
  class="w-full h-[500px]"
></iframe>
```

## **4.4 Sample Data**

Provide 4–6 example rental spaces with:

- Unique IDs
- Public domain or stock images
- Public/free Matterport demo IDs

(Claude will generate actual sample data.)

---

# **5. Component Architecture Requirements**

## **5.1 Global Components**

- `Navbar`
- `Footer`
- `PageContainer` (optional layout wrapper)
- `Button` components (primary, secondary)

## **5.2 Feature Components**

- `SpaceCard` – used on listing & homepage
- `ImageGallery` – responsive gallery or carousel
- `MatterportViewer` – wrapper for iframe embed
- `AmenitiesList`
- `ContactForm`
- `Calendar` – non-functioning availability calendar UI

---

# **6. UI/UX Requirements**

## **6.1 Styling**

- Must use **Tailwind CSS** exclusively.
- Consistent spacing and typography scale.
- Professional clean look: light background, modern sans-serif font.
- Ensure accessible color contrast.

## **6.2 Responsiveness**

- Fully responsive across:

  - Mobile (360px–480px)
  - Tablet (768px+)
  - Desktop (1024px+)

- Image gallery and Matterport viewer must resize automatically.

## **6.3 Navigation**

- Sticky or fixed top navigation (optional)
- Mobile menu using a sliding drawer or dropdown panel

## **6.4 Animations (Optional but Preferred)**

- Subtle hover effects
- Fade-in elements on scroll
- Smooth page transitions

---

# **7. SEO Requirements**

- Use Next.js metadata API for:

  - Title
  - Description
  - Open Graph tags

- Structured data for each space:

  - JSON-LD for real estate listing (optional)

- Image alt text required for all images.

---

# **8. Performance Requirements**

- Optimize image loading (Next.js `<Image />`)
- Lazy-load:

  - Matterport iframe
  - Image galleries

- Use server components where logical

---

# **9. Accessibility Requirements**

- Semantic HTML structure
- Keyboard-navigable menus
- Form fields with labels
- ARIA attributes for dynamic content

---

# **11. Non-Functional Requirements**

- Codebase must be clean, modular, and TypeScript-strict.
- Use a well-organized folder structure:

```
/app
  /spaces
    /[id]
  /about
  /contact
/components
/data
/lib
/types
/public
```

- Zero backend dependencies.
- No external APIs required except Matterport embeds.

---

# **13. Acceptance Criteria**

The project is considered complete when:

1. All pages build successfully in Next.js 14 environment.
2. Rental spaces load dynamically from static TypeScript data.
3. All detail pages include a working Matterport 3D embed.
4. The site is visually polished and responsive on all devices.
5. The contact form displays a success message on submission.
6. No TypeScript errors remain.

---
