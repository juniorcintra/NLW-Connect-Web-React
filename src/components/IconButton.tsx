import { Copy } from "lucide-react";

export default function IconButton() {
  return (
    <button className="p-1.5 h-12 bg-gray-500 text-blue  rounded-md  cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900">
      <Copy />
    </button>
  );
}
