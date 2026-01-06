"use client";

import dynamic from "next/dynamic";

const CleanIntegratedScreenplayEditor = dynamic(
  () => import("./components/CleanIntegratedScreenplayEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-black flex items-center justify-center" dir="rtl">
        <div className="text-white text-xl">جاري تحميل المحرر...</div>
      </div>
    ),
  }
);

export default function EditorPage() {
  return <CleanIntegratedScreenplayEditor />;
}
