import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { blue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";

export default function UserCard(props: any) {
  const user = props.user;

  return (
    <Card sx={{ minWidth: "12%", margin: 2 }}>
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
