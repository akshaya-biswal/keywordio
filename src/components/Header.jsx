import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Sheet
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        p: 2,
        minWidth: "min-content",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", gap: 1, px: 2 }}>App Logo</Box>
      <Link to={"/create-ad"}>
        <Box sx={{ display: "flex", flexShrink: 0, gap: 2 }}>
          <Button sx={{ display: { xs: "none", md: "inline-flex" } }}>
            Create Ads
          </Button>
        </Box>
      </Link>
    </Sheet>
  );
}
