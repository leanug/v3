export type WorkItem = {
  data: {
    title: string;
    img: string;
    slug: string;
    description: string;
    outbound?: string; // optional external link
  };
};