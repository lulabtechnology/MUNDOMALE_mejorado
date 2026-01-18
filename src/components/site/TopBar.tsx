import { site } from "@/content/site";

export default function TopBar() {
  if (!site.topbar.enabled) return null;

  return (
    <div className={`border-b border-slate-200 ${site.topbar.bgClass}`}>
      <div className={`container-pad py-2 text-center text-xs font-semibold ${site.topbar.textClass}`}>
        {site.topbar.text}
      </div>
    </div>
  );
}
