import { useState } from "react";

export default function useFetching(callback) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      await callback();
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  return [fetchData, loading, error];
}
