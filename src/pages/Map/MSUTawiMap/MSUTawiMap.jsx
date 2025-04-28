import MapCustom from "../MapCustom";

const dateNow = new Date().toISOString();
const tenantName = "TCTO";
const imagePath = "/sites/Tawitawi/Shared Documents/MSUTawi Building Images/";
const baseUrl = "https://msutawitawiedu.sharepoint.com/sites/Tawitawi/";
const folderName = "MSUTawi Building Images";
const tawiMap = {
    tenantName: tenantName,
    baseUrl:
        "https://msutawitawiedu.sharepoint.com/sites/Tawitawi/_api/web/lists/GetByTitle('MSUTawiTawiBuildings')/items",
    queryParams: {
        select: "",
        filter: `(is_deleted eq 0) and (expires_at ge datetime'${dateNow}' or expires_at eq null)`,
    },
};

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

export default MsuTawiMap;
