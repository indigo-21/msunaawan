const CustomTheme = {
    navbar: {
        styles: {
            base: {
                navbar: {
                    initial: {
                        px: "px-0",
                        maxWidth: "max-w-screen-2xl",
                    },
                    blurred: {
                        backdropFilter: "bg-white",
                        bgOpacity: "bg-opacity-1",
                    },
                },
            },
        },
    },
    menu: {
        styles: {
            base: {
                menu: {
                    border: "border-0",
                    borderRadius: "rounded-none",
                    width: "w-[250px]",
                    px: "px-0",
                    py: "py-0",
                },
                item: {
                    initial: {
                        outline:
                            "outline-none focus:outline-none hover:outline-none",
                        bg: "hover:bg-primary focus:bg-primary active:bg-primary",
                        borderRadius: "rounded-none",
                        px: "px-5",
                        py: "py-4",
                        color: "hover:text-secondary focus:text-secondary active:text-secondary",
                    },
                },
            },
        },
    },
    carousel: {
        defaultProps: {
            autoplay: true,
            autoplayDelay: 5000,
            loop: true,
        },
        styles: {
            base: {
                carousel: {
                    height: "h-[450px]",
                },
                slide: {
                    height: "h-[450px]",
                },
            },
        },
    },
};

export default CustomTheme;
