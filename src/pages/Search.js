import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : movies} = useFetch(apiPath, queryTerm);

  useTitle(movies.length ===0 ? `No results for ${queryTerm}` :`Results for ${queryTerm}`);

  return (
    <main>
      <section className="py-7 ">
        <p className="ms-32 text-start text-3xl text-gray-900 dark:text-white">
          {movies.length ===0 ? `No results found for '${queryTerm}'`: `Results for '${queryTerm}'`}
          </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
