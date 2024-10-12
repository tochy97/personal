import React from 'react'
import { IoSyncCircleOutline } from "react-icons/io5";

type Props = {
  size: number
};

export default function Loading({ size  }: Props) {
  return (
    <div className="w-full h-full flex place-content-center">
      <IoSyncCircleOutline className="animate-spin" size={size} />
    </div>
  );
}