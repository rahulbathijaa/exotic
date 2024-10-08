import React, { useState } from "react";
import "./HomepageColors.css";

const HomepageColors = () => {

  function createColorDiv(color) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    function getContrastRatio(color1, color2) {
      // Convert colors to RGB format
      const rgb1 = hexToRgb(color1);
      const rgb2 = hexToRgb(color2);

      // Calculate relative luminance for each color
      const l1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
      const l2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);

      // Calculate contrast ratio between the two colors
      const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

      return ratio;
    }

    // Function to convert hex color to RGB format
    function hexToRgb(hex) {
      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5, 7), 16);
      return { r, g, b };
    }

    // Function to calculate relative luminance for an RGB color
    function getRelativeLuminance(r, g, b) {
      const rsrgb = r / 255;
      const gsrgb = g / 255;
      const bsrgb = b / 255;

      const rlinear = rsrgb <= 0.03928 ? rsrgb / 12.92 : Math.pow((rsrgb + 0.055) / 1.055, 2.4);
      const glinear = gsrgb <= 0.03928 ? gsrgb / 12.92 : Math.pow((gsrgb + 0.055) / 1.055, 2.4);
      const blinear = bsrgb <= 0.03928 ? bsrgb / 12.92 : Math.pow((bsrgb + 0.055) / 1.055, 2.4);

      const luminance = 0.2126 * rlinear + 0.7152 * glinear + 0.0722 * blinear;
      return luminance;
    }

    

    // Determine appropriate contrasting color for the name
    const contrastColor = getContrastRatio(color.color, "#000000") >= getContrastRatio(color.color, "#FFFFFF") ? "#000000" : "#FFFFFF";

    return (

    <a href={color.link}
    key={color.color}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      background: color.color,
      height: 200,
      width: 200,
      margin: 2,
      borderRadius: 5,
      flexDirection: "column",
 
    }}
  >
    <a href={color.link} style={{ color: contrastColor, textDecoration: "none", flex: 1,  textAlign: "center" }}>
      {isHovering && color.name}
    </a>
  </a>
);


  }

  const colors = [
    {
      link: "/colour-groups/lamborghini-green/",
      name: "Lamborghini Green",
      color: "#AEFF7E",
    },
    {
      link:  "/car-color/giallo-orion/",
      name: "Giallo Orion",
      color: "#FED136",
    },
    {
      link: "/car-color/mclaren-orange/",
      name: "McLaren Orange",
      color: "#FFC43D",
    },
    {
      link: "/car-color/pastel-blue/",
      name: "Pastel Blue",
      color: "#A0D8FB",
    },
    {
      link: "/car-color/azure-blue/",
      name: "Azure Blue",
      color: "#3C566F",
    },
    {
      link: "/car-color/blu-abu-dhabi/",
      name: "Blu Abu Dhabi",
      color: "#2885B5",
    },
    {
      link: "/colour-groups/ferrari-blue/",
      name: "Ferrari Blue",
      color: "#163166",
    },
    {
      link: "/colour-groups/lamborghini-blue/",
      name: "Lamborghini Blue",
      color: "#00024C",
    },
    {
      link: "/car-color/rosso-fuoco/",
      name: "Rosso Fuoco",
      color: "#D13442",
    },
    {
      link: "/car-color/rosso-corsa/",
      name: "Rosso Corsa",
      color: "#D40000",
    },
    {
      link: "/colour-groups/ferrari-red/",
      name: "Ferrari Red",
      color: "#7A212A",
    },
    {
      link: "/colour-groups/lamborghini-grey/",
      name: "Lamborghini Grey",
      color: "#C7D7E7",
    },
    {
      link: "/car-color/grigio-telesto/",
      name: "Grigio Telesto",
      color: "#7692A5",
    },
   
    {
      link: "/car-color/nardo-grey/",
      name: "Nardo Grey",
      color: "#C0C6C8",
    },
    {
      link: "/car-color/chalk/",
      name: "Chalk",
      color: "#A5A4AC",
    },
    
    {
      link: "/colour-groups/lamborghini-black/",
      name: "Lamborghini Black",
      color: "#080D10",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "auto",
        /* Duplicate flexWrap property */
        // flexWrap: "wrap",
        /* Use gridTemplateColumns instead of justifyContent and justifyItems */
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingBottom: "5%",
      }}
    >
      <div className="container mx-auto pt-10 pb-50">
        <h2 className="text-5xl flex justify-left pl-5">Colors</h2>
        <h3 className="text-lg text-gray-600 flex justify-left mb-12 pl-5">
          Search through specific colors
        </h3>
      </div>
      {/* Missing closing tag for the outer div */}
      {/* Add a key prop to each child element when mapping */}
      {colors.map((color) => createColorDiv(color))}
    </div>
  );
          }  

export default HomepageColors
