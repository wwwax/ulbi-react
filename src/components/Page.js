import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import List from "../components/List";
import useFetching from "../hooks/useFetching";

export default function Page({ title, url }) {
  const [data, setData] = useState([]);
  const [isApiSubscribed, setIsApiSubscribed] = useState(true);
  const [fetchData, loading, error] = useFetching(callback);

  async function callback() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${url}`
    );

    if (isApiSubscribed) {
      setData(response.data);
    }
  }

  function deleteItem(id) {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  useEffect(() => {
    fetchData();

    return () => {
      setIsApiSubscribed(false);
    };
  }, []);

  if (error) return <Error message={error.message} />;

  return (
    <div className="page">
      <div className="container">
        <div className="page__inner">
          <h1 className="page__title">{title}</h1>

          {loading ? <Loading /> : <List data={data} deleteItem={deleteItem} />}
        </div>
      </div>
    </div>
  );
}
