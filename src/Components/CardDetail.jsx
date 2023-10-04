import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CardShopDetail({ id, Name, Category, Description }) {
  return (
    <Card sx={{ maxWidth: 465 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {Category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Link to={"/coursesShop/" + id}>Learn More</Link>
      </CardActions>
    </Card>
  );
}

export default CardShopDetail;