/// <reference types="react" />
import { CarouselInternalState, CarouselProps, SkipCallbackOptions } from "./types";
interface CarouselItemsProps {
    props: CarouselProps;
    state: CarouselInternalState;
    clones: any[];
    goToSlide: (index: number, skipCallbacks?: SkipCallbackOptions) => void;
}
declare const CarouselItems: ({ props, state, goToSlide, clones }: CarouselItemsProps) => JSX.Element | null;
export default CarouselItems;
