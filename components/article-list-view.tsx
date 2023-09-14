import { cn, isJSON } from "@/lib/utils";
import Link from "next/link";
import Icon from "./icon";
import { OutputBlockData } from "@editorjs/editorjs";
import Image from "next/image";
import { ArticleType } from "@/types/article";
import Button from "./ui/button";

type Props = {
  post: ArticleType;
};

const ArticleListView = ({
  post: { author, content, id, title, topics },
}: Props) => {
  const parsed: OutputBlockData[] = JSON.parse(
    isJSON(content) ? content.toString() : "[]",
  );

  const withImage = parsed?.[0]?.type === "image";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-2 border-b border-dashed border-foreground/10 pb-4",
      )}
    >
      <Link
        href={""}
        className="relative flex aspect-[3/2] w-full flex-shrink-0 items-center justify-center overflow-hidden rounded transition-[border-radius] hover:rounded-none"
      >
        <div className="relative flex h-full w-full">
          {parsed?.[0]?.data?.file?.url ? (
            <Image
              className="object-cover"
              fill
              unoptimized
              src={parsed?.[0]?.data?.file?.url}
              alt={title}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-foreground/10">
              <Icon name="Image" className="text-6xl" />
            </div>
          )}
        </div>
      </Link>

      <div className="flex w-full flex-col gap-1 overflow-hidden">
        <Link href={""} className="flex w-fit items-center gap-2">
          <span className="flex aspect-square h-6 items-center justify-center rounded-full border border-border">
            <Icon name="User" className="text-[14px] text-border" />
          </span>

          <p className="text-sm font-medium text-foreground/75">
            {author.firstName + " " + author.lastName}
          </p>
        </Link>

        <Link
          href={`/p/${id}`}
          className="flex h-[48px] flex-col gap-1 overflow-hidden"
        >
          <div className="flex w-full shrink-0 flex-col gap-1 overflow-hidden">
            <h4 className="text-[16px] font-bold">{title || "Untitled"}</h4>
          </div>
        </Link>

        <div className="flex w-full items-center">
          {topics?.length ? (
            <button className="w-fit rounded-full bg-foreground/10 px-2 text-[13px] capitalize text-foreground">
              {topics[0].name}
            </button>
          ) : null}

          <Button
            variant="text"
            color="foreground"
            className="ml-auto p-2 text-[21px]"
          >
            <Icon name="MoreVertical" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleListView;
