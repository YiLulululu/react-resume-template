import {FC, memo} from 'react';

import {jmp, publications, SectionId, working_papers} from '../../../data/data';
import Section from '../../Layout/Section';
import ResearchItem from './ResearchItem';
import ResearchSection from './ResearchSection';

const Research: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 border-b-2 border-neutral-300 pb-6 md:pb-8" sectionId={SectionId.Research}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
      <ResearchSection title="Jor Market Paper">
          {jmp.map((item, index) => (
            <ResearchItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResearchSection>
        <ResearchSection title="Publications">
          {publications.map((item, index) => (
            <ResearchItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResearchSection>
        <ResearchSection title="Working Papers">
          {working_papers.map((item, index) => (
            <ResearchItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResearchSection>
      </div>
    </Section>
  );
});

Research.displayName = 'Research';
export default Research;
