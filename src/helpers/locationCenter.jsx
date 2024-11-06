export const Coordinates = (coordinates) => {
    let totalLat = 0;
    let totalLng = 0;

    coordinates.forEach(coord => {
    totalLat += parseFloat(coord[0]);
    totalLng += parseFloat(coord[1]);
    });

    const centerLat = totalLat / coordinates.length;
    const centerLng = totalLng / coordinates.length;

    return [centerLat, centerLng];
};