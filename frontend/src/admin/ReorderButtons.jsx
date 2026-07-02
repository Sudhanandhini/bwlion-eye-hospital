import { ChevronUp, ChevronDown } from "lucide-react";

export default function ReorderButtons({ onUp, onDown, disabledUp, disabledDown }) {
  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={onUp}
        disabled={disabledUp}
        aria-label="Move up"
        className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-gray-100"
      >
        <ChevronUp size={14} />
      </button>
      <button
        type="button"
        onClick={onDown}
        disabled={disabledDown}
        aria-label="Move down"
        className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-gray-100"
      >
        <ChevronDown size={14} />
      </button>
    </div>
  );
}

export function reorderArray(list, index, direction) {
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (swapWith < 0 || swapWith >= list.length) return list;
  const copy = [...list];
  [copy[index], copy[swapWith]] = [copy[swapWith], copy[index]];
  return copy;
}
