import { useQuery } from "@apollo/client";
import { container } from "./model/classNames";
import { GET_CONTENT } from "../../apollo/model/queries";
import Loading from "../../../pages/Loading/Loading";
import Error from "../../../pages/Error/Error";
import History from "../../../pages/History/History";
import About from "../../../pages/About/About";

/**
 * Main body for content
 * @returns 
 */
export default function Content() {
  const { data, loading, error } = useQuery(GET_CONTENT);
  return (
    <main className={container}>
      {data.content.current}
      {
        loading ?
          <Loading />
          : error ?
            <Error message={error.message} />
            : data.content.current === "History" ?
              <History />
              :
              <About />
      }
    </main>
  );
}
