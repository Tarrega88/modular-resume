import { IoIosLink } from "react-icons/io";

type Props = {
  min: number;
  max: number;
  count: number;
};

function LinkCountButton({ min, max, count }: Props) {
  return Array.from({ length: max }, () => (
    <button className="text-xl">
      <IoIosLink className="text-blue-600 hover:text-blue-700 cursor-pointer" />
    </button>
  ));
}

export default LinkCountButton;
