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

const MsunMap = () => {
    return (
        <MapCustom
            mapUri={naawanMap}
            center={MSU_COORDS}
            naawanImagePath={naawanImagePath}
        />
    );
};

export default MsunMap;
