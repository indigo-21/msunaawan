export const fetchMapLists = async (map) => {


    const response = await fetch(import.meta.env.VITE_URL_FETCH + '/api/getData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            tenantName: map.tenantName,
            baseUrl: map.baseUrl,
            queryParams: map.queryParams,
        }),
    });

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

export const fetchMapImage = async (tenaneName, folderName, mapId, imagePath, baseUrl) => {

    const filename = `/images/mapImages/${mapId}`;

    const url = `${import.meta.env.VITE_MAIN_URL}${filename}`; // Construct the full URL

    try {
        const response = await fetch(url);
        const contentType = response.headers.get("Content-Type");
        // Here we check the status code to determine if the file exists
        if (response.ok && contentType && contentType.startsWith("image/")) {
            return filename;
        } else {
            const response = await fetch(import.meta.env.VITE_URL_FETCH + '/api/getImageFromSharepoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tenantName: tenaneName,
                    folderName: folderName,
                    id: mapId,
                    imagePath: imagePath,
                    baseUrl: baseUrl,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const mapImage = await response.blob();

            return URL.createObjectURL(mapImage);
        }
    } catch (error) {
        console.error('Error checking image:', error);
    }
};