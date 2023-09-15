import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper sx={{borderRadius: '5%', backgroundColor: '#e1e8ed', }}>
      <FlexBetween>
        <Typography color="#000000" variant="h3" fontWeight="500">
          Trends For You
        </Typography>
      </FlexBetween>
        <Typography color="#000000" variant="h6" fontWeight="500" paddingTop="10px">
          Trending
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="1000">
          #PokemonUnite
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="200">
          16.3K Tweets
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="500" paddingTop="10px">
          Gaming • Trending
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="1000">
          #Riot
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="200">
          43.3K Tweets
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="500" paddingTop="10px">
          Trending
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="1000">
          #Funimation
        </Typography>
        <Typography color="#000000" variant="h6" fontWeight="200">
          14.6K Tweets
        </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
