"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SubscriptionButton from "../subscription-button";
import { useProStore } from "@/stores/pro-store";
interface UpgradeProModalProps {
  isProPlan?: boolean;
}
const UpgradeProModal: React.FC<UpgradeProModalProps> = ({ isProPlan }) => {
  const { isOpen, handleCloseProModal } = useProStore();
  return (
    <Dialog open={isOpen}>
      <DialogContent
        showOverlay
        onClose={() => {
          handleCloseProModal;
        }}
      >
        <SubscriptionButton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeProModal;
