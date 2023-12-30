import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Checkbox, FormControl, Skeleton } from "@mui/joy";

// eslint-disable-next-line react/prop-types
export default function MediaAdCard({ setNavigateUrl }) {
  return (
    <FormControl size="sm" sx={{ width: 400 }}>
      <Checkbox
        onChange={() => setNavigateUrl("/media-ad")}
        label={
          <React.Fragment>
            <Card sx={{ width: 320 }}>
              <div>
                <Typography level="title-lg">Media Ad</Typography>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <Typography>
                  <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries.
                  </Skeleton>
                </Typography>
              </CardContent>
            </Card>
          </React.Fragment>
        }
      />
    </FormControl>
  );
}
