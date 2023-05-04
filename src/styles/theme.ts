import { inter } from "@/pages/_app";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "rgb(250 245 255)",
      100: "rgb(243 232 255)",
      200: "rgb(233 213 255)",
      300: "rgb(216 180 254)",
      400: "rgb(192 132 252)",
      500: "rgb(168 85 247)",
      600: "rgb(147 51 234)",
      700: "rgb(126 34 206)",
      800: "rgb(107 33 168)",
      900: "rgb(88 28 135)",
    },
    beige: {
      50: "#D7D5D4",
      100: "#CDCACA",
      200: "#B9B6B5",
      300: "#A5A1A0",
      400: "#918D8B",
      500: "#7D7876",
      600: "#605C5B",
      700: "#434140",
      800: "#262524",
      900: "#0A0909",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#faf6f5",
      },
    },
  },
  fonts: {
    heading: `'${inter.style.fontFamily}', sans-serif`,
    body: `'${inter.style.fontFamily}', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "lg",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
    Link: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "lg",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
  },
});

export default theme;
