import {
  ArrowUturnLeftIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
export const Icon = ({ name }) => {
  if (name === "Restart") {
    return <ArrowUturnLeftIcon className="h-4 w-4" />;
  }
  if (name === "Clear Chat") {
    return <TrashIcon className="h-4 w-4" />;
  }
  if (name === "Close") {
    return <XMarkIcon className="h-4 w-4" />;
  }
};
