import { IoSyncCircleOutline } from "react-icons/io5";

export default function Loading() {
  return (
    <div className="w-full h-full flex place-content-center">
      <IoSyncCircleOutline className="animate-spin" size={70} />
    </div>
  );
}