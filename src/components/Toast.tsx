"use client";

import { useEffect } from "react";

export default function Toast({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 9000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="animate-slideInToast fixed top-6 right-6 z-50 ml-6 rounded-xl bg-green-600 px-4 py-3 text-sm text-white shadow-lg">
      {message}
    </div>
  );
}
