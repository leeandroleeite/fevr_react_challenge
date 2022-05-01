import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box, CardActionArea, Modal, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { blue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { TwitterIcon, TwitterShareButton } from "react-share";
import UserMap from "./UserMap";

const URL = "http://localhost:3000";

export default function UserCard(props: any) {
  const user = props.user;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lat = user.address.geo.lat;
  const lng = user.address.geo.lng;

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
      <div onClick={handleOpen}>
        <CardHeader
          avatar={
            <Avatar sx={{ maxHeight: 30, maxWidth: 30, bgcolor: blue[400] }}>
              {user.username.split("", 1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <AddBoxIcon />
            </IconButton>
          }
          title={user.username}
          subheader={lat.concat(", " + lng)}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UserMap user={user} />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <ul style={{ listStyle: "none" }}>
                  <li>username: {user.username}</li>
                  <li>name: {user.name}</li>
                  <li>email: {user.email}</li>
                  <li>phone: {user.phone}</li>
                  <li>website: {user.website}</li>
                </ul>
              </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <TwitterShareButton
                children={<TwitterIcon round={true} />}
                url={lat.concat(", " + lng)}
                title={"Share my Location:"}
                via={"locationapp"}
                hashtags={["location", "sharing"]}
                related={["LeafletJS", "realfevr"]}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </Card>
  );
}
