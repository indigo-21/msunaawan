import MapCustom from "../MapCustom";

const gensanMap = {
    tenantName: "SULU",
    baseUrl:
        "https://msusulu1974.sharepoint.com/_api/web/lists/GetByTitle('MSUSuluBuildings')/items",
    queryParams: {
        select: "Title,Latitude,Longitude,Description,Pictures,Status,Coordinates,ContactNumber,EmailAddress,is_deleted",
        filter: "is_deleted eq 0",
    },
};

const gensanImagePath = "/Shared Documents/MSUSulu Building Images/";

const MSU_COORDS = [6.047120060229939, 121.01551857257319];

const BOUNDS = [
    [8.434, 124.283],
    [8.434, 124.298],
    [8.412, 124.31],
    [8.416, 124.269],
];

const COLORSCHEME = {
    color: "#fff",
    fillColor: "#aa090b",
};

const ZOOM = {
    defaultZoom: 18,
    minZoom: 16,
    maxZoom: 18,
};

const MsuSuluMap = () => {
    return (
        <MapCustom
            mapUri={gensanMap}
            center={MSU_COORDS}
            naawanImagePath={gensanImagePath}
            bounds={BOUNDS}
            colorScheme={COLORSCHEME}
            zoom={ZOOM}
        />
    );
};

export default MsuSuluMap;
