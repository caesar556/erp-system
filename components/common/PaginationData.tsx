"use client";

import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  page: number;
  totalPages: number;
}

export default function PaginationData({ page, totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toArabicNum = (num: number) =>
    num.toString().replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages: (number | string)[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        disabled={page === 1}
        onClick={() => (window.location.href = createPageURL(page - 1))}
        className={`px-3 py-1 rounded-md border ${
          page === 1
            ? "text-gray-400 border-gray-200"
            : "text-purple-700 border-purple-300"
        }`}
      >
        « السابق
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-gray-400">
            …
          </span>
        ) : (
          <button
            key={i}
            onClick={() => (window.location.href = createPageURL(Number(p)))}
            className={`px-3 py-1 rounded-md border ${
              page === p
                ? "bg-purple-700 text-white border-blue-700"
                : "text-purple-700 border-purple-300"
            }`}
          >
            {toArabicNum(Number(p))}
          </button>
        ),
      )}

      <button
        disabled={page === totalPages}
        onClick={() => (window.location.href = createPageURL(page + 1))}
        className={`px-3 py-1 rounded-md border ${
          page === totalPages
            ? "text-gray-400 border-gray-200"
            : "text-purple-700 border-purple-300"
        }`}
      >
        التالي »
      </button>
    </div>
  );
}
