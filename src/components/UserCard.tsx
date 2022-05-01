import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import { Box, CardActionArea, Modal, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { blue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import React from "react";
import UserMap from "./UserMap";

export default function UserCard(props: any) {
  const user = props.user;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "60vh",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card sx={{ minWidth: "12%", margin: 2, backgroundColor: "mintCream" }}>
      <CardActionArea onClick={handleOpen}>
        <CardHeader
          avatar={
            <Avatar sx={{ maxHeight: 30, maxWidth: 30, bgcolor: blue[400] }}>
              {user.username.split("", 1)}
            </Avatar>
          }
          title={user.username}
        />
        <CardContent>
          <div style={{ display: "flex", fontSize: 14 }}>
            <LocationOnIcon />
            {user.address.geo.lat.concat(", " + user.address.geo.lng)}
          </div>
          <hr />
          <div style={{ display: "flex", fontSize: 12 }}>
            {user.address.street.concat(", " + user.address.city)}
            <br />
            {user.address.zipcode}
          </div>
        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UserMap user={user} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <ul style={{ listStyle: "none" }}>
              <li>username: {user.username}</li>
              <li>email: {user.email}</li>
              <li>phone: {user.phone}</li>
              <li>website: {user.website}</li>
            </ul>
          </Typography>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
      </Modal>
    </Card>
  );
}
