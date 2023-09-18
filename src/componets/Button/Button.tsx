import { SearchButton } from "./ButtonStyled";

type Props = {
  Click: () => void;
  text: string;
};

const SubmitButton = (props: Props) => {
  return (
    <SearchButton variant="contained" onClick={props.Click}>
      {props.text}
    </SearchButton>
  );
};

export default SubmitButton;
