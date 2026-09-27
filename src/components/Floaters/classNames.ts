export const bubble = "relative ring-sky-400/70 bg-sky-400/5 ring-offset-4 ring-offset-slate-950 z-0 cursor-pointer ";
// The ring is a box-shadow, which takes no clicks, so a pseudo-element stretches the hit area past it.
export const hitArea = "pointer-events-auto before:absolute before:-inset-3 before:rounded-full before:content-[''] ";
export const container = 'fixed inset-0 z-0 overflow-hidden pointer-events-none '
