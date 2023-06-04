import Button from "./Button";

interface CreatePostProps {
  showModal: () => void;
}

export default function CreatePost({ showModal }: CreatePostProps) {
  return (
    <div
      className="w-full px-5 py-6 border-2 border-border-primary rounded-lg bg-modal-bg-color mb-4 cursor-pointer"
      onClick={showModal}
    >
      <h3 className="text-lg leading-[21.78px] text-primary-color font-medium mb-4">
        Create post
      </h3>
      <div className="p-4 bg-comment-bg-color rounded-lg">
        <div className="content flex items-center gap-4">
          <div className="icon bg-modal-bg-color rounded-full w-[48px] h-[48px] flex justify-center items-center">
            💬
          </div>
          <div className="text text-secondary-color leading-4 ">
            How are you feeling today?
          </div>
        </div>
      </div>
      <div className="actions flex items-center justify-between mt-4">
        <div></div>
        <div className="self-end w-[111px]">
          <Button text="Post" />
        </div>
      </div>
    </div>
  );
}
