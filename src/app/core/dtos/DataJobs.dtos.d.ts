declare interface DataJobs {

  company: string;
  startDate: string;
  endDate: string | null;
  role: string;
  text: string[];
  technologies: string;
  jobProjects?: JobProjects[] | null;
}