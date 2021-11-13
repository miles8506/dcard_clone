interface ImainArtical {
  gender: number;
  userName: string;
  title: string;
  sort: string;
  articalDate: string;
  tagTotal: number;
  commentTotal: number;
  content: string;
}

interface IcommentAtical {
  isShowStatus: boolean;
  mainArtical: ImainArtical;
  isShowSelectWindow: boolean;
  issueCurrentName: string;
  itmerCurrentName: string;
}

export { IcommentAtical };
