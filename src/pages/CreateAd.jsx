import { Button } from "@mui/joy";
import MediaAdCard from "../components/MediaAdCard";
import TextAdCard from "../components/TextAdCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAd() {
  const [navigateUrl, setNavigateUrl] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <MediaAdCard setNavigateUrl={setNavigateUrl} />
      <TextAdCard setNavigateUrl={setNavigateUrl} />
      <Button onClick={() => navigate(navigateUrl)}>Next</Button>
    </>
  );
}
