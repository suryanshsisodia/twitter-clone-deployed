import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/home`)}
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/4E4E4E/home.png" alt="home"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              /*paddingBottom="5px"*/
              fontWeight="300"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              Home
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
        <img width="30" height="30" src="https://img.icons8.com/ios/50/4E4E4E/search--v1.png" alt="search--v1"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              /*paddingBottom="5px"*/
              fontWeight="300"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              Explore
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/4E4E4E/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="300"
              /*paddingBottom="5px"*/
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              Notification
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
        <img width="30" height="30" src="https://img.icons8.com/ios/50/4E4E4E/secured-letter--v1.png" alt="secured-letter--v1"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="300"
              /*paddingBottom="5px"*/
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              Message
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
        <img width="30" height="30" src="https://img.icons8.com/ios/50/4E4E4E/list--v1.png" alt="list--v1"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              /*paddingBottom="5px"*/
              fontWeight="300"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              List
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
        <img width="30" height="30" src="https://img.icons8.com/material/24/4E4E4E/guest-male--v1.png" alt="guest-male--v1"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              /*paddingBottom="5px"*/
              fontWeight="300"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
            Communities
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
        <img width="30" height="30" src="https://img.icons8.com/ios/50/4E4E4E/twitterx--v2.png" alt="twitterx--v2"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              /*paddingBottom="5px"*/
              fontWeight="300"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              Verified
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
        <img width="30" height="30" src="https://img.icons8.com/ios/50/4E4E4E/gender-neutral-user--v1.png" alt="gender-neutral-user--v1"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="300"
              /*paddingBottom="5px"*/
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              Profile
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        paddingBottom="20px"
      >
        <FlexBetween gap="1rem">
        {/* <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ellipsis.png" alt="ellipsis"/> */}
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/4E4E4E/ellipsis.png" alt="ellipsis"/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              /*paddingBottom="5px"*/
              fontWeight="300"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              More
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>

      {/* <Divider /> */}

      {/* SECOND ROW */}
      {/* <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider /> */}

      {/* THIRD ROW */}
      {/* <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider /> */}

      {/* FOURTH ROW */}
      {/* <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box> */}
    </WidgetWrapper>
  );
};

export default UserWidget;
