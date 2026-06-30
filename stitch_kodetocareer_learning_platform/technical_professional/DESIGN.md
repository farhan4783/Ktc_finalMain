---
name: Technical Professional
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  button-text:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style
The design system is engineered for a high-performance ed-tech environment. The brand personality is authoritative yet accessible, positioning itself as a premium bridge between technical learning and career placement. 

The aesthetic follows a **Corporate / Modern** style with a focus on "Precision Technicality." It utilizes high-density information layouts balanced by ample whitespace to prevent cognitive overload. The UI should evoke a sense of momentum, stability, and intelligence, using subtle technical cues like mono-spaced accents and sharp execution to appeal to developers and engineers.

## Colors
The palette is built on a foundation of high-contrast professionalism. 
- **Primary (#0F172A):** Used for deep backgrounds, primary headings, and high-emphasis UI shells to provide a grounded, "IDE-inspired" feel.
- **Secondary (#3B82F6):** The functional engine of the UI. Used for all primary actions, progress indicators, and "Live" status badges.
- **Tertiary (#64748B):** Reserved for metadata, helper text, and borders to maintain a clean hierarchy without visual noise.
- **Neutral/Background:** The default surface is pure white (#FFFFFF), with the alternate light slate (#F8FAFC) used for section staggering and card containers.

## Typography
The system uses **Inter** for all primary communication due to its exceptional legibility and neutral, modern character. To emphasize the technical nature of the courses, **JetBrains Mono** is introduced as a secondary label font for badges, pricing, and code snippets.

**Scale and Weight:**
- Use heavy weights (700-800) for headlines to create a strong vertical rhythm.
- Use the `label-mono` style in all-caps for "LIVE" indicators and category tags.
- Tighten letter spacing on display sizes to ensure a compact, professional appearance.

## Layout & Spacing
The layout utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **The 8px Rule:** All margins and paddings must be multiples of 8px to ensure mathematical harmony.
- **Sectioning:** Large hero sections should have vertical padding of at least 120px on desktop to create a premium, un-cluttered "Tech-SaaS" feel.
- **Cards:** Course cards should utilize a consistent gap of 24px (3x base) to allow for clear separation of content blocks.

## Elevation & Depth
The design system employs **Tonal Layers** supplemented by **Low-contrast outlines**. 

- **Level 0 (Base):** White background (#FFFFFF).
- **Level 1 (Cards/Surface):** White surface with a 1px border (#E2E8F0) and a very soft ambient shadow (0px 4px 12px rgba(15, 23, 42, 0.03)).
- **Level 2 (Interactive/Hover):** When hovering over course cards, the shadow should deepen and the border color should shift to Electric Blue (#3B82F6) at 30% opacity to signal interactivity.
- **Overlays:** Use a 40% blur on background elements when modals are active to maintain focus.

## Shapes
The shape language is **Soft (0.25rem)**. This choice strikes a balance between the "sharpness" of technical code environments and the "friendliness" of an educational platform.

- **Buttons & Inputs:** 0.25rem (4px) corner radius for a disciplined, precise look.
- **Cards:** 0.5rem (8px) corner radius to differentiate larger containers from smaller UI elements.
- **Badges:** Use a 2px radius or full-pill for "Live" status indicators to make them visually distinct from buttons.

## Components
- **Buttons:** Primary buttons use a solid Electric Blue (#3B82F6) fill with white text. Secondary buttons use a transparent background with a Primary Navy (#0F172A) border.
- **Course Cards:** Must include a top-aligned "Live" badge using a red-pulse dot icon. The pricing should be high-contrast, using the mono-spaced font for numerical clarity.
- **Input Fields:** Use a 1px border (#CBD5E1). On focus, the border transitions to Electric Blue with a subtle 2px outer glow.
- **Testimonials:** Clean, center-aligned typography with small circular avatars. Avoid heavy quotes; use subtle "Slate Gray" italicized body text.
- **Live Badges:** A combination of a small red circle (#EF4444) and `label-mono` text. This is a critical component for driving urgency in the "Live Course" model.
- **Progress Bars:** Use a thin 4px height bar in Electric Blue against a light gray track for course modules.