import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

type Props = {
  initialValue?: boolean;
  onToggle?: () => void;
};

export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}: Props): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [on, setOn] = useState(initialValue);

  function toggle() {
    setOn((prevOn) => !prevOn);
    console.log("toggle()");
  }

  useEffect(() => {
    console.log("Update on in useToggle()", on);
  }, [on]);

  useEffectOnUpdate(onToggle, [on]);

  return [on, toggle, setOn];
}
