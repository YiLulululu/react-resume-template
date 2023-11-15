import {FC, memo} from 'react';

import {SectionId,ta} from '../../../data/data';
import Section from '../../Layout/Section';
import TimelineItem from '../Resume/TimelineItem';
import TeachSection from './TeachSection';

const Teach: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 pt-0 md:pt-0" sectionId={SectionId.Teach}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <TeachSection title="Teaching Experience">
          {ta.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </TeachSection>
      </div>
    </Section>
  );
});

Teach.displayName = 'Teach';
export default Teach;
