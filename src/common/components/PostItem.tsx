import Image from "next/image";
import Button from "./Button";

interface PostItemProps {
  profileImage: string;
  name: string;
  time: string;
  emoji: string;
  content: string;
  comments: string;
}

export default function PostItem({
  profileImage,
  name,
  time,
  emoji,
  content,
  comments,
}: PostItemProps) {
  return (
    <div className="w-full px-5 py-6 border-2 border-border-primary rounded-lg bg-modal-bg-color mb-4 cursor-pointer">
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-4 items-center">
          <div className="shrink-0 rounded-full ">
            <Image src={profileImage} width={44} height={44} alt={name} />
          </div>
          <div className="info flex gap-1 flex-col">
            <p className="text-primary-color font-medium leading-[19.36px]">
              {name}
            </p>
            <p className="text-secondary-color text-[14px] leading-[16.94px]">
              {time}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1 h-1 bg-primary-color rounded-full mr-0.5"></div>
          <div className="w-1 h-1 bg-primary-color rounded-full mr-0.5"></div>
          <div className="w-1 h-1 bg-primary-color rounded-full mr-0.5"></div>
        </div>
      </div>
      <div className="p-4 bg-comment-bg-color rounded-lg">
        <div className="content flex items-center gap-4">
          <div className="icon bg-modal-bg-color rounded-full w-[48px] h-[48px] flex justify-center items-center shrink-0">
            {emoji}
          </div>
          <div className="text text-secondary-color leading-6 ">{content}</div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Image src="/icons/comment.svg" height={20} width={20} alt="comment" />
        <p className="text-secondary-color text-sm leading-[16.94px]">
          {comments}
        </p>
      </div>
    </div>
  );
}
