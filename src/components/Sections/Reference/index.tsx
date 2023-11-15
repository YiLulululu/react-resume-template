import {FC, memo} from 'react';

import {reference, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ReferenceItem from './ReferenceItem';
import ReferenceSection from './ReferenceSection';

const Reference: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 pb-6 md:pb-8 pt-6 md:pt-8" sectionId={SectionId.Reference}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ReferenceSection title="References">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 gap-x-24">
          {reference.map((item, index) => (
            <ReferenceItem item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
        </ReferenceSection>
      </div>
    </Section>
  );
});

Reference.displayName = 'Reference';
export default Reference;
