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

interface IcommentAtical {
  isShowStatus: boolean;
  // mainArtical: ImainArtical;
  isShowSelectWindow: boolean;
  issueCurrentName: string;
  itmerCurrentName: string;
  articalTimeStamp: number;
}

export { IcommentAtical };
