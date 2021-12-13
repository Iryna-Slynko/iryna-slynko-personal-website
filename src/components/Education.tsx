import { format } from 'date-fns';

import EducationExperience from '../data/EducationExperience';
import { generateAccordion, generateAccordionItem } from './generateAccordion';

export default function Education() {
  const experience = EducationExperience().map(function (education, index) {
    const date = (education.graduationDate > new Date() ? "expected in " : "") + format(education.graduationDate, "MMM yyyy");
    const title = education.universityName;
    const subtitle = education.diploma;
    const extraText = "";
    return generateAccordionItem('education', index, title, subtitle, date, extraText);
  })
  return (
    generateAccordion('education', 'Education', experience)
  )
}


