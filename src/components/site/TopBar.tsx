import { site } from "@/content/site";

export default function TopBar() {
  if (!site.topbar.enabled) return null;

  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="container-pad py-2 text-center text-xs font-medium text-slate-600">
        {site.topbar.text}
      </div>
    </div>
  );
}
