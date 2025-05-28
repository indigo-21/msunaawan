import MapCustom from "../MapCustom";

const dateNow = new Date().toISOString();
const tenantName = "GENSAN";
const imagePath ="/sites/msugensan/Shared Documents/MSUGensan Building Images/";
const baseUrl = "https://msugensan2.sharepoint.com/sites/msugensan/";
const folderName = "MSUGensan Building Images";
const gensanMap = {
    tenantName: tenantName,
    baseUrl:
        "https://msugensan2.sharepoint.com/sites/msugensan/_api/web/lists/GetByTitle('MSUGensanBuildings')/items",
    queryParams: {
        select: "",
        filter: `(is_deleted eq 0) and (expires_at ge datetime'${dateNow}' or expires_at eq null)`,
    },
};

const MSU_COORDS = [6.066016293947272, 125.12658209653665];

const BOUNDS = [
    [6.074668591220576, 125.11785955295574],
    [6.074604579667213, 125.13592691259964],
    [6.057897304258333, 125.13822288348076],
    [6.057427871421319, 125.11807412967357],
];

const COLORSCHEME = {
    color: "#fddd00",
    fillColor: "#54090A",
};

const ZOOM = {
    defaultZoom: 18,
    minZoom: 16,
    maxZoom: 18,
};

const MsuGensanMap = () => {
    return (
        <MapCustom
            mapUri={gensanMap}
            center={MSU_COORDS}
            imagePath={imagePath}
            bounds={BOUNDS}
            colorScheme={COLORSCHEME}
            zoom={ZOOM}
            tenantName={tenantName}
            folderName={folderName}
            baseUrl={baseUrl}
        />
    );
};

export default MsuGensanMap;
