import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  message: z.string().trim().min(10, "A short note helps — at least 10 characters").max(2000),
});

type Status = { type: "idle" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      // Simulated submit — hook up to your backend/email service when ready.
      await new Promise((r) => setTimeout(r, 700));
      setStatus({
        type: "success",
        message: "Thanks — your message is on its way. I'll reply within a day.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please email me directly instead.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls =
    "w-full border-0 border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-0 transition";

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input id="name" name="name" placeholder="Your name" className={inputCls} maxLength={100} />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" className={inputCls} maxLength={200} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell me about the wedding, date, and what you'd need from a second shooter."
          className={`${inputCls} resize-none`}
          maxLength={2000}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center gap-3 border border-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] text-foreground transition hover:bg-foreground hover:text-background disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>

      {status.type === "success" && (
        <p className="text-sm text-accent-foreground" role="status">
          {status.message}
        </p>
      )}
      {status.type === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {status.message}
        </p>
      )}
    </form>
  );
}
