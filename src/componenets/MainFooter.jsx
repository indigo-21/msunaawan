import { Typography } from "@material-tailwind/react";

export default function MainFooter () {
    return(
        <>
            <footer className="bg-primary text-white mt-16 ">
                <div className="md:container md:mx-auto py-16">
                    <div className="grid lg:grid-cols-4 md:grid-cols-1">
                        <div>
                            <div className="my-7">
                                <img src="images/footer/msu-footer.png" className="mx-auto"/>
                                <p className="text-white text-center text-sm">MSU at Naawan Seal</p>
                            </div>
                            <div className="my-7">
                                <img src="images/footer/transparency-seal-footer.png" className="mx-auto"/>
                                <p className="text-white text-center text-sm">Transparency Seal</p>
                            </div>
                            <div className="my-7">
                                <img src="images/footer/bagong-pilipinas-footer.png" className="mx-auto"/>
                                <p className="text-white text-center text-sm">Bagong Pilipinas</p>
                            </div>
                        </div>
                        <div className="pr-[20px]">
                            <div className="border-b-2 border-secondary pb-4 mb-5">
                                <Typography variant="paragraph" className="text-xl">Mindanao State University at Naawan</Typography>
                            </div>
                            <Typography variant="paragraph" className="footer-p mb-2">Pedro Pagalan St., Poblacion, Naawan, <br/>Misamis Oriental, Philippines 9023</Typography>
                            <Typography variant="paragraph" className="footer-p mb-2">+63 908 885 3500</Typography>
                            <Typography variant="paragraph" className="footer-p mb-2">info@msunaawan.edu.ph</Typography>
                        </div>
                        <div className="">
                            <p className="mb-5">Admission</p>
                            <div className="ml-5 lg:ml-2 mb-5">
                                <Typography variant="paragraph" className="footer-p mb-2 ">+63 908 885 3530</Typography>
                                <Typography variant="paragraph" className="footer-p mb-2">admission@msunaawan.edu.ph</Typography>
                            </div>
                            <p className="mb-5">Registrar</p>
                            <div className="ml-5 lg:ml-2">
                                <Typography variant="paragraph" className="footer-p mb-2">+63 908 885 3530</Typography>
                                <Typography variant="paragraph" className="footer-p mb-2">registrar@msunaawan.edu.ph</Typography>
                            </div>
                        </div>
                        <div className="">
                            <p className="mb-5">Research and Extension</p>
                            <div className="ml-5 lg:ml-2 mb-5">
                                <Typography variant="paragraph" className="footer-p mb-2">+63 915 276 0438</Typography>
                                <Typography variant="paragraph" className="footer-p mb-2">ovcre@msunaawan.edu.ph</Typography>
                            </div>
                            <p className="mb-5">Web Development Team</p>
                            <div className="ml-5 lg:ml-2">
                                <Typography variant="paragraph" className="footer-p mb-2">+63 908 885 3511</Typography>
                                <Typography variant="paragraph" className="footer-p mb-2">ictc@msunaawan.edu.ph</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <footer className="bg-primary text-white mt-16 ">
                <div className="md:container md:mx-auto py-16">
                    <div className="md:flex md:flex-row">
                        <div className="basis-1/4 !md:basis-1/2">
                            <div className="my-7">
                                <img src="images/footer/msu-footer.png" className="mx-auto"/>
                                <p className="text-white text-center text-sm">MSU at Naawan Seal</p>
                            </div>
                            <div className="my-7">
                                <img src="images/footer/transparency-seal-footer.png" className="mx-auto"/>
                                <p className="text-white text-center text-sm">Transparency Seal</p>
                            </div>
                            <div className="my-7">
                                <img src="images/footer/bagong-pilipinas-footer.png" className="mx-auto"/>
                                <p className="text-white text-center text-sm">Bagong Pilipinas</p>
                            </div>
                        </div>
                        <div className="pr-[20px] basis-1/4 !md:basis-1/2">
                            <div className="border-b-2 border-secondary pb-4 mb-5">
                                <Typography variant="paragraph" className="text-xl">Mindanao State University at Naawan</Typography>
                            </div>
                            <Typography variant="paragraph" className="mb-2">Pedro Pagalan St., Poblacion, Naawan, <br/>Misamis Oriental, Philippines 9023</Typography>
                            <Typography variant="paragraph" className="mb-2">+63 908 885 3500</Typography>
                            <Typography variant="paragraph" className="mb-2">info@msunaawan.edu.ph</Typography>
                        </div>
                        <div className="basis-1/4 !md:basis-1/2">
                            <p className="mb-5">Admission</p>
                            <div className="ml-5 lg:ml-2 mb-5">
                                <Typography variant="paragraph" className="mb-2 ">+63 908 885 3530</Typography>
                                <Typography variant="paragraph" className="mb-2 lg:text-xs">admission@msunaawan.edu.ph</Typography>
                            </div>
                            <p className="mb-5">Registrar</p>
                            <div className="ml-5 lg:ml-2">
                                <Typography variant="paragraph" className="mb-2">+63 908 885 3530</Typography>
                                <Typography variant="paragraph" className="mb-2">registrar@msunaawan.edu.ph</Typography>
                            </div>
                        </div>
                        <div className="basis-1/4 !md:basis-1/2">
                            <p className="mb-5">Research and Extension</p>
                            <div className="ml-5 lg:ml-2 mb-5">
                                <Typography variant="paragraph" className="mb-2">+63 915 276 0438</Typography>
                                <Typography variant="paragraph" className="mb-2">ovcre@msunaawan.edu.ph</Typography>
                            </div>
                            <p className="mb-5">Web Development Team</p>
                            <div className="ml-5 lg:ml-2">
                                <Typography variant="paragraph" className="mb-2">+63 908 885 3511</Typography>
                                <Typography variant="paragraph" className="mb-2">ictc@msunaawan.edu.ph</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
            <div className="bg-black text-white text-center py-3">
                <Typography variant="paragraph" className="text-xs">Copyright © 2023-2024 Mindanao State University at Naawan</Typography>
            </div>
        </>
    )
}