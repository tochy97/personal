import { container } from "./classNames";
import Controller from "../../controller/controller";
import { InternalPage } from "../../model/type";

type Props = {
  list: Array<InternalPage>,
}

/**
 * Main body for content
 * @returns 
 */
export default function Content({ list }: Props) {
  let notFound = list.find(ele => (ele.name === "NotFound"))?.content ?? <>Not Found</>
  const { current } = Controller();
  return (
      <main className={container}>
        {
          list.find(ele => (ele.name === current))?.content 
          ??
        notFound
        }
      </main>
  );
}
