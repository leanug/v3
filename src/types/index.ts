export type Work = {
  data: {
    title: string;
    img: string;
    galleryImg1?: string;
    galleryImg2?: string;
    gallerySideImg1?: string;
    gallerySideImg2?: string;
    date: string
    slug: string;
    description: string;
    outbound?: string;
    featured?: boolean;
    tags?: string[];
    published?: boolean;
    more?: boolean;
    video?: string;
  };
};
