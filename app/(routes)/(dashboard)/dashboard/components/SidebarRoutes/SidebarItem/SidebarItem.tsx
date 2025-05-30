import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";
import { usePathname } from "next/navigation";

export function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { href, icon: Icon, label } = item;

  const pathname = usePathname();

  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`, active && "bg-slate-400/20"
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1} />
      {label}
    </Link>
  );
}
