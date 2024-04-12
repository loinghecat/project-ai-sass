export interface ToolItemProps {
  icon: string;
  title: string;
  url: string;
  color?: string;
  slug: "code" | "audio" | "video" | "photo" | "conversation";
}

const ToolItem: React.FC<ToolItemProps> = ({
  icon,
  title,
  url,
  color,
  slug,
}) => {
  return <div>ToolItem</div>;
};

export default ToolItem;
