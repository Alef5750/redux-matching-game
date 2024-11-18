import { ImageList, ImageListItem } from "@mui/material";
import { FC, useState } from "react";
import { IImageItem } from "./types";

interface GameboardProps {
  itemData: IImageItem[];
}
interface ICardState {
  title: string;
  id: number | null;
}
const initialCardState: ICardState = {
  title: "",
  id: null,
};

export const Gameboard: FC<GameboardProps> = ({ itemData }) => {
  const [prevCard, setPrevCard] = useState<ICardState>(initialCardState);

  const handleClick = (title: string, id: number) => {
    if (!prevCard.id) {
      setPrevCard({ title, id });
    } else {
      compare(title, id);
    }
  };

  const compare = (title: string, id: number) => {
    if (title === prevCard.title && id !== prevCard.id) {
      alert("MATCH!");
    } else {
      alert("NO MATCH!");
    }
    setPrevCard({ title: "", id: null });
  };

  const imageItemStyles = (id: number) => {
    return {
      transition: "transform 0.3s ease",
      "&:hover": {
        opacity: "50%",
      },
      cursor: "pointer",
      opacity: id === prevCard.id ? "50%" : "100%",
    };
  };

  return (
    <ImageList sx={{ width: 500, height: 500 }} cols={4} rowHeight={100}>
      {itemData.map((item) => (
        <ImageListItem key={item.id} sx={() => imageItemStyles(item.id)}>
          <img
            onClick={() => handleClick(item.title, item.id)}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
