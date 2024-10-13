import { useQuery } from "@apollo/client";
import { container } from "./model/classNames";
import { GET_CONTENT } from "../../apollo/model/queries";
import Loading from "../../../pages/Loading/Loading";
import Error from "../../../pages/Error/Error";
import History from "../../../pages/History/History";
import About from "../../../pages/About/About";
import ContentController from "../../apollo/controller/controller";

/**
 * Main body for content
 * @returns 
 */
export default function Content() {
  const { current } = ContentController();
  return (
    <main className={container}>
      {
        current === "History" ?
          <History />
          :
          <About />
      }
    </main>
  );
}
