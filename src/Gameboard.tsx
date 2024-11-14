import { ImageList, ImageListItem } from "@mui/material";
import { FC } from "react";
import { IImageItem } from "./types";

interface GameboardProps {
  itemData: IImageItem[];
}
export const Gameboard: FC<GameboardProps> = ({ itemData }) => {
  return (
    <ImageList sx={{ width: 500, height: 500 }} cols={4} rowHeight={100}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
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
