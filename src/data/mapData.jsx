// export const fetchData = async (url, setLoading, setData, setError) => {
//     setLoading(true);
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Fetching data failed`);
//         }
//         const data = await response.json();
//         setData(data);
//     } catch (error) {
//         setError(error);
//     } finally {
//         setLoading(false);
//     }
// };

import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAccessTokenWithRefreshToken } from '../service/tokenService';

const SharePointDataFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getAccessTokenWithRefreshToken(); // Get a fresh access token

      if (!accessToken) {
        setError('Failed to retrieve access token');
        return;
      }

      const url = `https://msuatnaawan.sharepoint.com/_api/web/lists/GetByTitle('MSUNaawanMap')/items?&$select=Title,Description`;

      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json;odata=verbose',
            'Content-Type': 'application/json',
          },
        });

        setData(response.data.d.results); // Update the state with fetched data
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>SharePoint Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.Id}>{item.Title}</li> // Replace 'Title' and 'Id' with your actual data fields
        ))}
      </ul>
    </div>
  );
};

export default SharePointDataFetch;
