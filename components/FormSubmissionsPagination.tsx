"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "./ui/pagination";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FormSubmissionsPaginationProps = {
  page: number;
  totalSubmissions: number;
  pageSize: number;
};

function FormSubmissionsPagination({
  page,
  totalSubmissions,
  pageSize,
}: FormSubmissionsPaginationProps) {
  const totalPages = Math.ceil(totalSubmissions / pageSize);
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

  const generatePagination = () => {
    if (totalPages <= 8) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (page >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      page - 2,
      page - 1,
      page,
      page + 1,
      page + 2,
      "...",
      totalPages,
    ];
  };

  const paginationLinks = generatePagination();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination className="pt-1.5">
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(Math.max(page - 1, 1))}
            disabled={page === 1}
            variant="ghost"
          >
            <ChevronLeft className="!h-4 !w-4" />
            <span>Previous</span>
          </Button>
        </PaginationItem>

        {paginationLinks.map((item, index) =>
          item === "..." ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <Button
                onClick={() => handlePageChange(Number(item))}
                variant={item === page ? "outline" : "ghost"}
              >
                {item}
              </Button>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <Button
            onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
            disabled={page === totalPages}
            variant="ghost"
          >
            <span>Next</span>
            <ChevronRight className="!h-4 !w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default FormSubmissionsPagination;
