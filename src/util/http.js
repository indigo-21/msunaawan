export const fetchMapLists = async () => {

    const response = await fetch(import.meta.env.VITE_URL_FETCH + '/api/getMapLists');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const mapLists = await response.json();

    return mapLists;

};

// export const fetchMapImage = async (mapId) => {

//     const response = await fetch(import.meta.env.VITE_URL_FETCH + '/api/getImageFromDrive', {
//         body: JSON.stringify({
//             id: mapId,
//         }),
//     });

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const mapImage = await response.json();

//     return mapImage;

// };

export const fetchMapImage = async (mapId) => {
    const response = await fetch(import.meta.env.VITE_URL_FETCH + '/api/getImageFromDrive', {
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json',  
        },
        body: JSON.stringify({
            id: mapId,  
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const mapImage = await response.blob(); 

    return URL.createObjectURL(mapImage); 
};