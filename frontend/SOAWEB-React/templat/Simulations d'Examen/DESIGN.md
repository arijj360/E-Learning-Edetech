---
name: Oralis Design Language
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#464555'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4f44e2'
  primary: '#4d41df'
  on-primary: '#ffffff'
  primary-container: '#675df9'
  on-primary-container: '#fffbff'
  inverse-primary: '#c4c0ff'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#555c6e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e7487'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c4c0ff'
  on-primary-fixed: '#100069'
  on-primary-fixed-variant: '#3622ca'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dce2f7'
  tertiary-fixed-dim: '#c0c6db'
  on-tertiary-fixed: '#141b2b'
  on-tertiary-fixed-variant: '#404758'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance, authoritative, and encouraging learning environment tailored to advanced language proficiency (CEFR levels B1 through C2). The aesthetic marries institutional rigor with the sleek fluency of high-end consumer technology. The interface balances high-stakes certification focus (DELF, DALF, TCF, Cambridge, IELTS, TOEFL) with an engaging, low-friction recording and evaluation space.

The visual direction employs a Modern Institutional style: crisp whites, deep structure-defining slates, radiant electric violet focal accents, and balanced, calm typography. Depth is conveyed cleanly through soft ambient shadows and delicate container borders rather than skeuomorphic excess, ensuring that audio feedback waveforms, phonetic transcriptions, and scoring rubrics command primary attention.

## Colors

The color architecture is built to support focused assessment sessions and rapid data synthesis. 

- **Primary Violet (`#6C63FF`)**: Serves as the interactive anchor—used for active recording states, progress indicators, primary CTA buttons, waveform highlights, and system feedback.
- **Secondary Navy (`#1E293B`)**: Applied across structural elements, sidebars, multi-role navigation switchers, and elevated containers.
- **Deep Navy (`#111827`)**: Dedicated to supreme structural contrast, headers, active navigation tabs, and solid icon treatments.
- **Light Violet (`#F3F0FF`)**: Acts as a secondary tonal container layer, highlighting current speech segments, CEFR tier tags, and interactive hover states.
- **Background (`#F8FAFC`) & Surface White (`#FFFFFF`)**: Ground the application canvas and interactive modules with clean contrast.
- **Functional Semantics**:
  - `Success (#10B981)`: Passing scores, target phoneme accuracy, confirmed milestones.
  - `Warning (#F59E0B)`: Pronunciation warnings, pacing alerts, time-remaining thresholds.
  - `Danger (#EF4444)`: Phonetic mismatches, recording errors, exam timeouts.
  - `Text (`#1F2937`)`: High-legibility base for running copy and evaluation transcripts.

## Typography

The type system pairs **Plus Jakarta Sans** for structural headers, scores, role switchers, and CEFR indicators with **Inter** for conversational transcripts, evaluation reports, and complex exam instructions.

- Headlines utilize tight negative tracking to maintain crisp visual density.
- Body sizes are optimized for high-density reading of long-form audio transcripts and rubric criteria.
- Micro-labels (`label-sm`) use uppercase treatments with slight expansion in tracking for CEFR badge markers (e.g., `C1 ADVANCED`, `B2 VANTAGE`).

## Layout & Spacing

The layout is structured around an adaptive 12-column grid for desktop views, shifting to an 8-column layout on tablets and a single-column stacked format on mobile devices.

- **Desktop (1280px+)**: 12 columns, `margin`: `2.5rem`, `gutter`: `1.5rem`. Enables side-by-side exam prompts, recording waveform interfaces, and continuous scoring modules.
- **Tablet (768px - 1279px)**: 8 columns, `margin`: `1.5rem`, `gutter`: `1rem`. Secondary analytical panels collapse into slide-over drawers or segmented tabs.
- **Mobile (< 768px)**: 4 columns or single stacked flow, `margin-sm`: `1rem`, `gutter-sm`: `1rem`. The audio recorder and live transcript remain sticky to ensure touch affordance during speech tasks.
- Spacing rhythm enforces strict multiples of 4px/8px to ensure tight visual hierarchy between evaluation criteria and phonetic annotations.

## Elevation & Depth

Visual hierarchy uses a refined ambient elevation system combined with hairline borders (`1px solid #E2E8F0`) to maintain a clean aesthetic:

- **Level 0 (Flat)**: Background `#F8FAFC`, non-elevated transcript backdrops.
- **Level 1 (Subtle Cards & Metrics)**: Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow `0 1px 3px 0 rgba(17, 24, 39, 0.04), 0 1px 2px -1px rgba(17, 24, 39, 0.04)`.
- **Level 2 (Active Studio / Waveform Console)**: Surface `#FFFFFF`, border `1px solid rgba(108, 99, 255, 0.15)`, shadow `0 4px 6px -1px rgba(17, 24, 39, 0.06), 0 2px 4px -2px rgba(17, 24, 39, 0.04)`.
- **Level 3 (Role Switcher Popovers & Modals)**: Surface `#FFFFFF`, shadow `0 10px 15px -3px rgba(17, 24, 39, 0.08), 0 4px 6px -4px rgba(17, 24, 39, 0.03)`.

## Shapes

The design uses a defined rounded geometry (Base: 8px / `0.5rem`) tailored to modern dashboards:

- Standard inputs, buttons, and dropdowns follow `0.5rem` (`rounded-md`).
- Primary content containers, evaluation modules, and waveform panels utilize `rounded-xl` (`1rem` to `1.5rem`) for a contained feel.
- Interactive role-switchers, filter pills, and audio scrub heads use fully rounded pill profiles (`9999px`) to distinguish actionable controls from static cards.

## Components

### Buttons
- **Primary**: Solid `#6C63FF`, text `#FFFFFF`, hover `#5A52E0`, active transform scale 0.98. Radius: `0.5rem`.
- **Secondary**: Surface `#FFFFFF`, border `1px solid #E2E8F0`, text `#1E293B`, hover `#F3F0FF` with border `#6C63FF`.
- **Danger (Stop/Reset)**: Solid `#EF4444`, text `#FFFFFF`, hover `#DC2626`.

### CEFR Badges
- Pill-shaped (`rounded-full`) tags displaying `B1`, `B2`, `C1`, or `C2`.
- Background: Light semantic tint (`#F3F0FF` for primary modules; `#ECFDF5` for mastered criteria).
- Text: Medium-bold label (`label-sm`), high-contrast dark or brand violet.

### Audio Waveform Console
- Canvas background `#FFFFFF`, boundary border `1px solid #E2E8F0`, radius `rounded-xl`.
- Dynamic vertical bars: Default `#E2E8F0`, past playback `#6C63FF`, live user speech pulse `#10B981`.
- Center record trigger: 64px floating circular action button with radial expansion pulses.

### Multi-Role Switcher (Learner, Trainer, Institution)
- Segmented container styled in `#F1F5F9`, interior padding `4px`.
- Role items: Flat text `#64748B`, active state displays surface `#FFFFFF` with elevation level 1, text `#111827`, and a miniature indicator dot colored `#6C63FF`.

### Form Fields & Inputs
- Base `#FFFFFF`, border `1px solid #CBD5E1`, text `#1F2937`, focus ring `2px solid rgba(108, 99, 255, 0.35)` with border color `#6C63FF`.