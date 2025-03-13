import MapCustom from "../MapCustom";

const tawiMap = {
    tenantName: "TCTO",
    baseUrl:
        "https://msutawitawiedu.sharepoint.com/_api/web/lists/GetByTitle('MSUTawiBuildings')/items",
    queryParams: {
        select: "Title,Latitude,Longitude,Description,Pictures,Status,Coordinates,ContactNumber,EmailAddress,is_deleted",
        filter: "is_deleted eq 0",
    },
};

const tawiImagePath = "/Shared Documents/MSUTawi Building Images/";

const MSU_COORDS = [5.038618853176858, 119.743778270813];

const BOUNDS = [
    [8.434, 124.283],
    [8.434, 124.298],
    [8.412, 124.31],
    [8.416, 124.269],
];

const COLORSCHEME = {
    color: "#fff",
    fillColor: "#000749",
};

const ZOOM = {
    defaultZoom: 18,
    minZoom: 16,
    maxZoom: 18,
};

const MsuTawiMap = () => {
    return (
        <MapCustom
            mapUri={tawiMap}
            center={MSU_COORDS}
            naawanImagePath={tawiImagePath}
            bounds={BOUNDS}
            colorScheme={COLORSCHEME}
            zoom={ZOOM}
        />
    );
};

export default MsuTawiMap;
