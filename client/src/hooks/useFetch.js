import { useCallback, useEffect, useState } from 'react';

export const useFetch = (endpoint) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    success: false,
    message: 'Pending',
  });

  const getData = useCallback(() => {
    setLoading(true);
    fetch(`http://localhost:4000/api/v1${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setFeedback({
          success: true,
          message: `Successfully fetched from ${endpoint}`,
        });
      })
      .catch((error) => {
        setLoading(false);
        setFeedback({
          success: false,
          message: error.message,
        });
      });
  }, [endpoint]);

  useEffect(() => {
    if (endpoint && feedback.message === 'Pending') {
      getData();
    }
  }, [endpoint, feedback, getData]);

  return { data, isLoading, feedback };
};
