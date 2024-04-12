"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from ".";
import { useSidebarStore } from "@/stores/sidebar-store";
interface MobileSidebarProps {
  isProPlan?: boolean;
  userLimitCount: number;
}
const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isProPlan,
  userLimitCount,
}) => {
  const { isOpen } = useSidebarStore();
  return (
    <div>
      <Sheet open={isOpen}>
        <SheetContent
          side={"left"}
          className="w-screen border-none bg-black p-0 pt-8"
        >
          <Sidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
