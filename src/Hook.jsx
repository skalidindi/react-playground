import { useLevel } from "./useLevel";

export function Hook() {
  const aba = useLevel();

  console.log(aba);

  return <div>Hook! {aba}</div>
}
