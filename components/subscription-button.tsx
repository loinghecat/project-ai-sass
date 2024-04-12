"use client";
import { Sparkle } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";
import axios from "axios";

interface SubscriptionButtonProps {
  className?: string;
  isPro: boolean;
}
const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  className,
  isPro,
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/stripe");
      //do sth after getting data from stripe
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={className}>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={handleSubscribe}
        className={cn(
          "text-white w-full font-semibold border-none gradient-btn",
          "hover:text-white"
        )}
      >
        <span>{isPro ? "Manage Subscription" : "Upgrade to Pro"}</span>
        <Sparkle />
      </Button>
    </div>
  );
};

export default SubscriptionButton;
