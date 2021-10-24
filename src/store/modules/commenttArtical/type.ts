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
}

export { IcommentAtical };
