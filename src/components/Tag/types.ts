export type Props = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
};

export type StyledContainerProps = {
  $backgroundColor: Props['backgroundColor'];
};

export type StyledTextProps = {
  $textColor: Props['textColor'];
};
