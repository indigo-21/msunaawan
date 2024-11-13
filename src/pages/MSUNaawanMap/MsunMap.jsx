import MapCustom from "../Map/MapCustom";

const naawanMap = {
    baseUrl:
        "https://msuatnaawan.sharepoint.com/_api/web/lists/GetByTitle('MSUNaawanBuildings')/items",
    queryParams: {
        select: "Title,Latitude,Longitude,Description,Pictures,Status,Coordinates,ContactNumber,EmailAddress,is_deleted",
        filter: "is_deleted eq 0",
    },
};

const naawanImagePath = "/Shared Documents/MSUNaawan Building Images/";

const MSU_COORDS = [8.428618869777717, 124.28762800990076];

const BOUNDS = [
    [8.434, 124.283],
    [8.434, 124.298],
    [8.412, 124.310],
    [8.416, 124.269],
];

const COLORSCHEME = {
    color: '#fddd00',
    fillColor: '#19196e',
};

const MsunMap = () => {
    return (
        <MapCustom
            mapUri={naawanMap}
            center={MSU_COORDS}
            naawanImagePath={naawanImagePath}
            bounds={BOUNDS}
            colorScheme={COLORSCHEME}
        />
    );
};

export default MsunMap;
