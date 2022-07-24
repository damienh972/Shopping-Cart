import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  rating: React.SetStateAction<number | undefined>;
  onClick?: (i:number) => void;
  style?: { cursor: string };
};

const Rating: React.FC<Props> = ({ rating, onClick, style }: Props) => {
  return (
    <>
      {[...Array(5)].map((_:undefined, i:number) => (
        <span key={i} onClick={() => onClick?.(i)} style={style}>
          {rating! > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating;