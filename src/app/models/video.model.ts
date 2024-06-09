import {Niveau, OptionEnum, Tag, Visible} from "./video-enums";


export interface Video {
  videoId: number;
  videoTitle: string;
  videoDescription: string;
  videoUrl: string;
  videoViews: number;
  videoLikes: number;
  videoDislikes: number;
  createdAt: Date;
  updatedAt: Date;
  visibility: Visible;
  niveau: Niveau;
  option: OptionEnum;
  videoThumbnail?: string;
  tags: Set<Tag>;
}
