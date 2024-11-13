import MapCustom from "../MapCustom";

const naawanMap = {
    baseUrl:
        "https://msuatnaawan.sharepoint.com/_api/web/lists/GetByTitle('MSUGensanBuildings')/items",
    queryParams: {
        select: "Title,Latitude,Longitude,Description,Pictures,Status,Coordinates,ContactNumber,EmailAddress,is_deleted",
        filter: "is_deleted eq 0",
    },
};

const naawanImagePath = "/Shared Documents/MSUNaawan Building Images/";

const MSU_COORDS = [6.066016293947272, 125.12658209653665];

const BOUNDS = [
    [6.074668591220576, 125.11785955295574],
    [6.074604579667213, 125.13592691259964],
    [6.057897304258333, 125.13822288348076],
    [6.057427871421319, 125.11807412967357],
];

const COLORSCHEME = {
    color: '#fddd00',
    fillColor: '#54090A',
};

const MsuGensanMap = () => {
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

export default MsuGensanMap;
