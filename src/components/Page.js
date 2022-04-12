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
    <div className="container mx-auto py-10">
      <h1 className="text-6xl font-fira_light uppercase text-black mb-10">
        {title}
      </h1>

      {loading ? <Loading /> : <List data={data} deleteItem={deleteItem} />}
    </div>
  );
}
