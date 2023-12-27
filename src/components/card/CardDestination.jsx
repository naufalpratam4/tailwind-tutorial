import React from "react";
import {
  Card,
  Heading,
  ButtonGroup,
  Image,
  Text,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
function CardDestination(props) {
  return (
    <div className="mt-4">
      <Card maxW="xs">
        <Image
          src={props.src}
          alt="Green double couch with wooden legs"
          borderRadius={"10px 10px 0 0"}
        />
        <CardBody>
          <Stack mt="1" spacing="3">
            <div className="flex justify-between">
              <Heading size="md">{props.title}</Heading>{" "}
              <Heading size="md" className="text-pink-500">
                ${props.price}
              </Heading>
            </div>

            <Text className="text-gray-500">{props.location}</Text>
          </Stack>
        </CardBody>

        <CardFooter style={{ marginTop: "-25px" }}>
          <div>
            <p className="pe-1 font-bold text-orange-500">{props.rating}</p>
          </div>
          <div className="text-orange-500 pb-1">
            <StarIcon />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardDestination;
