// import { Table, Tr, Td } from "@chakra-ui/react";
import React from "react";
import "../components/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIncrementWishList } from "../redux/wishlist/selector";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { remover } from "../redux/wishlist/Action";

const Watch = () => {
  const dispatch = useDispatch();
  const incrementWishList = useSelector(selectIncrementWishList);
  const handleRemove = (id) => {
    dispatch(remover(id));
  };

  return (
    <Box className="watch-list" paddingX="100px">
      <h1 className="heading_style">Your WatchList !!</h1>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="space-between"
      >
        {incrementWishList.map((value) => {
          return (
            <Box width={{ base: "100%", md: "50%", lg: "50%" }}>
              <Box className="container mt-5">
                <HStack justifyContent="center">
                  <Box>
                    <Box>
                      <img src={value.imgsrc} alt="MovieImage" />
                    </Box>
                    <Button
                      marginLeft="40px"
                      marginTop="10px"
                      onClick={() => handleRemove(value.id)}
                    >
                      Remove From WatchList
                    </Button>
                  </Box>

                  <Box paddingLeft="20px">
                    <Text fontSize="2xl">
                      <Text as="b">Movie Name:</Text> {value.sname}
                    </Text>

                    <a href={value.link} target="_blank" rel="noreferrer">
                      <Button marginTop="10px">Watch Trailer</Button>
                    </a>

                    <Box paddingTop="10px">
                      <Link
                        to="/Moviedetails"
                        state={{ movieDetail: value }}
                        className="card_category"
                        style={{ cursor: "pointer" }}
                      >
                        <Button>
                          <Text as="b">Book a seat</Text>
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Watch;
