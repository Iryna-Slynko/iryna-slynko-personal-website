import { format } from 'date-fns';
import WorkExperience from '../data/WorkExperience';
import { generateAccordion, generateAccordionItem } from './generateAccordion';

export default function Work() {
  const experience = WorkExperience().map(function (work, index) {
    let date = format(work.startDate, "MMM yyyy");
    switch (work.endDate) {
      case 'Present':
        date += "Present";
        break;
      default:
        date += format(work.endDate, "MMM yyyy");
    }
    const title = work.companyName;
    const subtitle = work.position;
    const extraText = work.responsibilities;
    return generateAccordionItem(index, title, subtitle, date, extraText);
  })
  return (
    generateAccordion('work', 'Work', experience)
  )
}


