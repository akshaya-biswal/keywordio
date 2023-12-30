// import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function TextMediaForm() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ad-submitted");
  };

  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={6}>
          <FormControl>
            <FormLabel>Heading 01</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Heading 02</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Business Name</FormLabel>
            <Input />
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl>
            <FormLabel>Description 01</FormLabel>
            <Textarea minRows={3} />
          </FormControl>
          <FormControl>
            <FormLabel>Button Label</FormLabel>
            <Input />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl>
            <FormLabel>Description 01</FormLabel>
            <Input />
          </FormControl>
        </Grid>
      </Grid>
      <Button variant="soft" size="lg">
        Back
      </Button>
      <Button size="lg" onClick={handleClick}>
        Next
      </Button>
    </>
  );
}
