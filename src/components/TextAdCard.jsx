import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Checkbox, FormControl, Skeleton } from "@mui/joy";

// eslint-disable-next-line react/prop-types
export default function TextAdCard({ setNavigateUrl }) {
  return (
    <FormControl size="sm" sx={{ width: 400 }}>
      <Checkbox
        onChange={() => setNavigateUrl("/text-ad")}
        label={
          <React.Fragment>
            <Card sx={{ width: 320 }}>
              <div>
                <Typography level="title-lg">Text Ad</Typography>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis quos, molestias deserunt voluptatum qui, distinctio
                  pariatur porro enim cum vel voluptas facilis? Rem sapiente
                  incidunt vel corporis? Accusantium, ullam fuga.
                </p>
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
