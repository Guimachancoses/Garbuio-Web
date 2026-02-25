"use client";

import Image from "next/image";
import { usePathname, useRouter } from "@/src/i18n/navigation";

const langs = [
  { code: "pt", src: "/brazil_flg.png", alt: "Português" },
  { code: "en", src: "/icons8-usa-96.png", alt: "English" },
  { code: "es", src: "/Spain_flag_icon.svg", alt: "Español" },
] as const;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <div className="language-switcher">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => changeLanguage(l.code)}
          aria-label={l.alt}
        >
          <Image
            src={l.src}
            alt={l.alt}
            width={28}
            height={28}
            priority
          />
        </button>
      ))}
    </div>
  );
}
