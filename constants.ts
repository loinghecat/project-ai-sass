import { ToolItemProps } from "./components/dashboard/tools-item";

export const MAX_FREE_COUNTS = 5;
export const THEME_MODES = [
  {
    value: "light",
    label: "Light",
  },
  {
    value: "dark",
    label: "Dark",
  },
];
export const TOOLS: ToolItemProps[] = [
  {
    title: "Conversation",
    icon: "/icons/conversation.svg",
    url: "/conversation",
    slug: "conversation",
    color: "bg-blue-500",
  },
  {
    title: "Photo generation",
    icon: "/icons/photo.svg",
    url: "/photo",
    slug: "photo",
    color: "bg-violet-500",
  },
  {
    title: "Video generation",
    icon: "/icons/video.svg",
    url: "/video",
    slug: "video",
    color: "bg-amber-500",
  },
  {
    title: "Audio generation",
    icon: "/icons/audio.svg",
    url: "/audio",
    slug: "audio",
    color: "bg-orange-500",
  },
  {
    title: "Code generation",
    icon: "/icons/code.svg",
    url: "/code",
    slug: "code",
    color: "bg-green-500",
  },
];
export const NAVIGATIONS = [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: "/dashboard",
    slug: "dashboard",
  },
  ...TOOLS,
];
