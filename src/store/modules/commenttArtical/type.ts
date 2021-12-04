interface ImainArtical {
  userName: string;
  title: string;
  gender: number;
  content: string;
  imgPath: string;
  timer: number;
  timerStamp: number;
  sort: string;
  commentTotal: number;
  tagTotal: number;
  elseUserComment: any[];
}

interface IlikeComment {
  status: boolean;
  timeStamp: number;
  compute: string;
}

interface IcommentAtical {
  isShowStatus: boolean;
  // mainArtical: ImainArtical;
  isShowSelectWindow: boolean;
  issueCurrentName: string;
  itmerCurrentName: string;
  articalTimeStamp: number;
  elseUserComment: any[];
  likeComment: IlikeComment;
}

export { IcommentAtical };
