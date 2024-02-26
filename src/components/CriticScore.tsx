import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} border="1px solid" px={2} fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;
