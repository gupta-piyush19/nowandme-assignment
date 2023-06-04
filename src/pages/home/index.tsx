import CreatePost from "@/common/components/CreatePost";
import LoginForm from "@/common/components/LoginForm";
import Modal from "@/common/components/Modal";
import PostItem from "@/common/components/PostItem";
import Head from "next/head";
import React from "react";

const data = [
  {
    profileImage: "/images/theresa.png",
    name: "Theresa Webb",
    time: "5mins ago",
    emoji: "👋",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: "24 comments",
  },
  {
    profileImage: "/images/marvin.png",
    name: "Marvin McKinney",
    time: "8mins ago • Edited",
    emoji: "😞",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: "24 comments",
  },
];

const Home = () => {
  const [show, setShow] = React.useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <Head>
        <title>Home | Jane</title>
      </Head>
      <div className="w-full h-full flex items-center justify-center">
        <div className="container m-auto max-w-3xl">
          <h1 className="text-primary-color text-[28px] leading-[33.89px] font-medium mb-3">
            Hello Jane
          </h1>
          <p className="text-secondary-color text-base leading-6 mb-10">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
          <CreatePost showModal={showModal} />
          {data.map((item, index) => (
            <PostItem
              key={index}
              profileImage={item.profileImage}
              name={item.name}
              time={item.time}
              emoji={item.emoji}
              content={item.content}
              comments={item.comments}
              showModal={showModal}
            />
          ))}
        </div>
      </div>
      <Modal hideModal={hideModal} show={show} />
    </>
  );
};

export default Home;
