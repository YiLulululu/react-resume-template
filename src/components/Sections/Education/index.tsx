import {FC, memo} from 'react';

import {education, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import EducationItem from './EducationItem';
import EducationSection from './EducationSection';

const Education: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 border-b-2 border-neutral-300 pb-6 md:pb-8" sectionId={SectionId.Education}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <EducationSection title="Education">
          {education.map((item, index) => (
            <EducationItem item={item} key={`${item.title}-${index}`} />
          ))}
        </EducationSection>
      </div>
    </Section>
  );
});

Education.displayName = 'Education';
export default Education;
