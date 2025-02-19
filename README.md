# 🚀 Next.js SEO Implementation Guide

## 📌 Introductio
This guide aims to assist in enhancing the SEO of your Next.js projec. Prior experience with React or Next.js is not required; familiarity with HTML and Tailwind CSS is sufficien

## 📁 Project Structure Overview
- **`app/`*: Contains the application's source co.
- **`app/layout.tsx`*: Defines the root layout for all pag.
- **`app/page.tsx`*: Represents the main entry page
  - This is the Home page as it's (TIP: Pay attention to file path, it matches the url strucutre of the site ;))
- **`app/(sections)`*: Contains the Page and Section components.
  - Sections like: Contact, Portfolio, and PricingCard are stored here 
- **`app/[page]/page.tsx`*: Dynamic route pag.
  - Not active for this website, but this is where /contact & /about would live.
- **`components/`*: Houses reusable UI componen.  
  - ShadCN components and custom components used project wide live here. ShadCN components are in `components/ui/`
  - This is where the you place React Components [Starting React Nextjs guide](https://medium.com/@elanaolson/a-beginners-guide-to-building-a-react-nextjs-app-7463120389f0) follow the links in the article
  - Also very good Resource on [React's Components](https://javascript.plainenglish.io/working-with-components-and-layouts-in-next-js-3a13ce51d03b)
  - ALWAYS REMEBER: If you are using any [Hook Function](https://react.dev/reference/react/hooks) - you'll know by the best practice of the functins being called, "use<keyword>", example: "useState", or "useContext". In Nextjs you must have the "use client" at the top of the file, as it's now a client compoent (being rendered on the client side). HIGHLY RECOMMEND you checkout the docs and videos on this: https://nextjs.org/docs/app/building-your-application/rendering/client-components 
- **`public/`*: Stores static assets like images and favico.

## 🎯 Implementing SEO Metadata

### 1. Using the Metadata PI
Next.js offers a built-in Metadata API to manage SEO-related metada.

**Setting Metadata in `layout.tsx`**

Please Follow the Nextjs Docs regarding Metadata (https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
Follow this guide too: https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7

**WATCH OUT!**
For Code quality I've defined the `/config/site.ts` file.
Full Path: `NDX-Xyla-Hair/main/src/config/site.ts`.

## 🛠️ Additional Resources

- **HTML Meta Tags for SE**: [https://www.semrush.com/blog/html-tags-for-seo/](https://www.semrush.com/blog/html-tags-for-o/)
- **ShadCN UI Documentatio**: [https://shadcn.dev/docs](https://shadcn.dev/cs)
- **SEO Best Practice**: [https://developers.google.com/search/docs/fundamentals/seo-starter-guide](https://developers
