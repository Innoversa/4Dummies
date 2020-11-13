import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Food.css";


function Food(props) {

    const [img, setImg] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://api.imgur.com/3/gallery/search/top?q=' + props.text + ' ext: png OR jpg', 
            {
                method: 'get',
                headers: {
                    //"Access-Control-Allow-Headers": "Authorization",
                    "Authorization": "Client-ID e4f15a9a27fb199" //This header may be wrong
                }
            });
        //const response = await fetch('https://api.randomuser.me/')
        if (response.status !== 200) {
            console.log('Error performing imgur api call. Status Code ' + response.status);
        }
        const json = await response.json();
        //const item = null;
        console.log(json);
        for (var i = 0; i < json.data.length; i++) {
            if (json.data[i].nsfw || json.data[i].is_album) {
                continue;
            }
            const item = json.data[i];
            console.log(item);
            setImg(item);
            break;
        }
        //const item = json.results[0];
        //setImg(item);
    }, [])

    return (
            
            <Card className="foodCard">
            <CardActionArea>
                {img && <CardMedia
                    component="img"
                    alt={img.link}//{img.picture.large}
                    height="140"
                    image={img.link}//{img.picture.large}//"https://i.imgur.com/RAnkW0f.jpg"//"/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.text}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Delete item
            </Button>
            
            </CardActions>
            </Card>
         
      
    );
}
export default Food;