import { IGalleryItem } from "@/components/UI/Gallery/gallery.interface";
import { ISlide } from "@/components/UI/Slider/slider.interface";

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
