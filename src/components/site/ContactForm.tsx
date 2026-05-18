import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { useContactForm, type ContactValues } from "./QuoteModal";

const inputCls =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[var(--ring)]";

interface Props {
  compact?: boolean;
  defaultType?: string;
  onSubmitted?: () => void;
}

export function ContactForm({ compact = false, defaultType, onSubmitted }: Props) {
  const { t } = useTranslation();
  const form = useContactForm(defaultType);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = (data: ContactValues) => {
    const lines = [
      `${t("contact.form.name")}: ${data.name}`,
      `${t("contact.form.email")}: ${data.email}`,
      data.phone && `${t("contact.form.phone")}: ${data.phone}`,
      data.company && `${t("contact.form.company")}: ${data.company}`,
      data.projectType &&
        `${t("contact.form.projectType")}: ${t(`contact.form.types.${data.projectType}`, { defaultValue: data.projectType })}`,
      "",
      data.message,
    ].filter(Boolean);
    const subject = encodeURIComponent(`${t("quote.title")} — ${data.name}${data.company ? ` (${data.company})` : ""}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    onSubmitted?.();
  };

  const types = ["tracker_park", "maapark", "katusepark", "workforce", "other"] as const;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
            {t("contact.form.name")}
          </label>
          <input
            {...register("name")}
            placeholder={t("contact.form.namePlaceholder")}
            className={inputCls}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
            {t("contact.form.email")}
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder={t("contact.form.emailPlaceholder")}
            className={inputCls}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
            {t("contact.form.phone")}
          </label>
          <input
            {...register("phone")}
            placeholder={t("contact.form.phonePlaceholder")}
            className={inputCls}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
            {t("contact.form.company")}
          </label>
          <input
            {...register("company")}
            placeholder={t("contact.form.companyPlaceholder")}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
          {t("contact.form.projectType")}
        </label>
        <select {...register("projectType")} className={inputCls}>
          <option value="">{t("contact.form.selectType")}</option>
          {types.map((tt) => (
            <option key={tt} value={tt}>
              {t(`contact.form.types.${tt}`)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
          {t("contact.form.message")}
        </label>
        <textarea
          {...register("message")}
          rows={compact ? 4 : 5}
          placeholder={t("contact.form.messagePlaceholder")}
          className={`${inputCls} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-[#0a0f0d] transition hover:bg-[var(--brand-hover)] disabled:opacity-60"
      >
        {isSubmitting ? t("common.sending") : t("contact.form.submit")}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
