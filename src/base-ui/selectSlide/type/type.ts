interface IcontentKey {
  name: string;
  svgPath?: string;
  viewBox?: string;
}

interface selectSlideType {
  selectContent: IcontentKey[];
  showSvg: boolean;
  pointColor?: boolean;
  emitStatus?: boolean;
}

export { selectSlideType, IcontentKey };
