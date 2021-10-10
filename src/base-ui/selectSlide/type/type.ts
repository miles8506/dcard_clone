interface IcontentKey {
  name: string;
  svgPath?: string;
  viewBox?: string;
}

interface selectSlideType {
  selectContent: IcontentKey[];
  showSvg: boolean;
  pointColor?: boolean;
}

export { selectSlideType, IcontentKey };
