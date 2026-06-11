// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for the webinar date & time.
// Change it HERE and it updates the countdown timer AND the date/time shown
// in the Hero and form-CTA info rows.
//
// `startISO` must be ISO-8601 with a timezone offset. Bulgaria is UTC+3 (EEST)
// from late March to late October, and UTC+2 (EET) in winter — set the offset
// to match the webinar date (August → +03:00).
// `date` / `time` are the display strings (DD.MM.YYYY / HH:MM).
// ─────────────────────────────────────────────────────────────────────────
export const webinar = {
  startISO: "2026-08-16T19:00:00+03:00",
  date: "16.08.2026",
  time: "19:00",
} as const;
