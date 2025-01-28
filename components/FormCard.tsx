import { Form } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { formatDistance } from "date-fns";
import { Button } from "./ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

type FormProps = {
  form: Form;
};

function FormCard({ form }: FormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published ? (
            <Badge>Published</Badge>
          ) : (
            <Badge variant="destructive">Draft</Badge>
          )}
        </CardTitle>
        <CardDescription className="text-xs">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-5 truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button
            asChild
            variant="secondary"
            className="w-full mt-2 text-sm gap-4 font-bold"
          >
            <Link href={`/forms/${form.id}`}>
              View submissions{" "}
              <BiRightArrowAlt className="!h-[14px] !w-[14px]" />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button
            asChild
            variant="secondary"
            className="w-full mt-2 text-sm gap-4 font-bold"
          >
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit className="!h-[14px] !w-[14px]" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default FormCard;
