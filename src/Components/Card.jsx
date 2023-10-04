import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CourseImage from "./assets/logo3.jpeg";

function CardShop({ id, Name, Category }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="logo" height="140" image={CourseImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {Category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Link to={"/coursesShop/" + id}>Learn More</Link>
      </CardActions>
    </Card>
  );
}

export default CardShop;