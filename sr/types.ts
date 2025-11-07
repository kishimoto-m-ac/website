export interface Publication {
  authors: string[];
  year: number;
  title: string;
  title_jp?: string;
  journal: string;
  journal_jp?: string;
  doi?: string;
  pdfLink?: string;
}

export interface TeachingExperience {
  courseCode: string;
  courseTitle: string;
  courseTitle_jp?: string;
  university: string;
  semester: string;
  syllabusLink_en?: string;
  syllabusLink_jp?: string;
}

export interface SectionLink {
  id: string;
  title: string;
  title_jp?: string;
}