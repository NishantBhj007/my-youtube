import React from "react";
import { userLogo } from "../utils/constants";

const commentsData = [
  {
    name: "Nishant Bhardwaj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Nishant Bhardwaj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Nishant Bhardwaj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Nishant Bhardwaj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Nishant Bhardwaj",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Nishant Bhardwaj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Nishant Bhardwaj",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Nishant Bhardwaj",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Nishant Bhardwaj",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nishant Bhardwaj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Nishant Bhardwaj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Nishant Bhardwaj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Nishant Bhardwaj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-400 p-2 rounded-sm my-2">
      <img className="w-12 h-12" src={userLogo} alt=" user-image" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black-ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

function CommentContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
}

export default CommentContainer;
