export type JobItem = {
  title: string;
  id: number;
  badgeLetters: string;
  company: string;
  date: string;
  relevanceScore: number;
  daysAgo: number;
};

export type JobItemExtend = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  relevanceScore: number;
  coverImgURL: string;
  companyURL: string;
}