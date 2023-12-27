import React from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
// import ButtonCircle from "../../components/Part 1/button/ButtonCircle";
import { Stack, Button } from "@chakra-ui/react";
import CardDestination from "../../components/Part 1/card/CardDestination";
function Destination() {
  return (
    <>
      <div className="container flex justify-between">
        <div>
          <div className="font-bold text-pink-500 text-2xl">
            Top Destination
          </div>
          <div className="font-bold text-gray-900 text-4xl">
            Explore top destination
          </div>
        </div>

        <div className="my-auto">
          <Stack direction="row" spacing={4} align="center">
            <Button
              colorScheme="purple"
              variant="outline"
              borderRadius={"full"}
              size="lg"
            >
              <ArrowBackIcon />
            </Button>
            <Button
              colorScheme="purple"
              variant="solid"
              borderRadius={"full"}
              size="lg"
            >
              <ArrowForwardIcon />
            </Button>
          </Stack>
        </div>
      </div>

      {/* card */}
      <div className="flex justify-between">
        <CardDestination
          src="https://picsum.photos/200"
          title="Paradise Beach, Bantayan Island"
          location="Rome, Italy"
          price="500"
          rating="4.8"
        />
        <CardDestination
          src="https://picsum.photos/200?grayscale"
          title="Ocean with full of Colors"
          location="Maldives"
          price="20.99"
          rating="4.5"
        />
        <CardDestination
          src="https://picsum.photos/seed/picsum/200"
          title="Mountain View, Above the cloud"
          location="United Arab Emeries "
          price="150.99"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default Destination;
