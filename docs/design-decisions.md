# Design Decisions

- Use vanilla HTML, CSS, and JavaScript without frameworks or external dependencies.
- Follow a mobile-first responsive approach.
- Implement the portfolio progressively, one section at a time.
- Prioritize performance and keep the website lightweight.
- Consider accessibility throughout development.
- Keep professional experience limited to public information and do not expose confidential internal project details.
- Treat personal projects as independent from professional experience.

## Visual language

- Follow the approved Creative & Minimal direction: warm cream, sage, and deep forest tones create a calm editorial identity in both themes.
- Pair one restrained editorial serif for names and expressive details with a clean sans-serif for navigation, body copy, and controls.
- Use a small number of organic shapes, thin lines, and botanical SVG details; decoration should frame content rather than compete with it.
- Present the original rectangular portrait unchanged inside an organic CSS crop, with subtle layered shapes instead of attempting browser-based background removal.

## Interaction and preferences

- Define theme colors through semantic CSS custom properties. Restore a saved theme first, otherwise follow `prefers-color-scheme`, and apply it before styles load to limit theme flash.
- Keep English and Spanish strings centralized in JavaScript. Restore a saved language first, otherwise choose Spanish when the browser language starts with `es` and English for all other cases.
- Persist language and theme independently in `localStorage`; language changes update visible copy, relevant accessible labels, image alt text, and the document language without reloading.
- Keep transitions soft and brief, use only a restrained entrance animation, and disable meaningful motion when `prefers-reduced-motion` is enabled.

## Responsive and accessible behavior

- Build mobile-first: text and actions lead, followed by the portrait and social links; tablet and desktop move the portrait beside the introduction.
- Replace the desktop navigation with a simple keyboard-accessible mobile menu while keeping language and theme controls visible.
- Keep navigation visible with a lightweight sticky Header that retains its full top-of-page treatment and becomes subtly more compact after the Hero.
- Use semantic landmarks, a skip link, visible focus states, sufficient theme contrast, meaningful portrait text, decorative hidden SVGs, pressed states for language controls, and dynamic labels for menu and theme controls.

## About composition and motion

- Treat About as a compact editorial sequence: a restrained typographic manifesto leads into an integrated working-philosophy illustration, a rooted principles plant, and a signature-like closing statement.
- Present professional values as semantic branches growing from “Good software” rather than cards, badges, or arbitrary point-to-point connections.
- Progressively enhance About with one-time `IntersectionObserver` reveals and short stroke-and-leaf growth motifs; essential content remains visible when JavaScript is unavailable.
- Recompose the horizontal desktop plant into a simpler alternating vertical stem on mobile instead of scaling down its labels and spatial relationships.
- Under reduced-motion preferences, show all content immediately, complete botanical strokes without animation, and stop ambient movement while preserving clear interaction states.

## Experience composition

- Give Experience a compact layered and systemic visual language that is distinct from About's botanical metaphor.
- Represent AI as a restrained cross-cutting workflow through software layers, not as an isolated technology or substitute for engineering judgment.
- Limit the section to three visual moments: public role context, the software-layer system, and a Build → Validate → Improve cycle.
- Simplify the interconnected horizontal system into a readable vertical layer sequence on small screens rather than shrinking the desktop composition.

## Skills composition

- Use one compact Technical Explorer instead of a skill grid: category controls recompose a single typographic visual field rather than stacking every technology group.
- Keep practical professional technologies and explored knowledge in the same composition through a concise mode switch, with the explored state intentionally simpler.
- Give Skills its own visual identity through typographic hierarchy, negative space, and restrained technical geometry rather than reusing the botanical or architectural metaphors.
- Do not assign arbitrary proficiency percentages, ratings, or labels; communicate experience through context and preserve a compact overall section height.

## Projects composition

- Present personal projects as a visual-first, three-card gallery with equal-weight cards in one desktop row.
- Keep project descriptions over the illustrations on desktop hover and keyboard focus, while showing them as normal content on mobile and touch layouts.
- State each project's stage explicitly; omit actions when a verified destination is unavailable and never add fake links for future projects.

## Articles and talks composition

- Present Articles & Talks as an intentionally compact Technical Journal index without cards, using typography, thin rules, and aligned metadata as its primary visual language.
- Mark upcoming talks with explicit textual status; never imply that scheduled internal material has already been presented.
- Keep entries without verified destinations as non-interactive editorial content rather than fake links or controls.

## Education composition

- Keep Education intentionally compact as a calm transition between Articles & Talks and Contact.
- Present the single formal education entry as one academic editorial composition rather than a one-item grid or timeline.
- Use typographic hierarchy as the primary visual tool, with only restrained document and registration marks for structure.

## Contact and closing composition

- Treat Contact as the portfolio's visual closing signature, ending with Blanca Rosa Gómez Fernández's identity rather than another content collection.
- Use Blanca's verified email, LinkedIn, and GitHub destinations; enhance the email's primary `mailto:` action with a progressive copy interaction and do not add a contact form.
- Connect the closing identity with one subtle, non-botanical signature stroke.
- Keep the compact Footer visually attached to Contact, with a Back to top link that closes the page journey.
