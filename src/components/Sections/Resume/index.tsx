import {FC, memo} from 'react';

import {experience, SectionId} from '../../../data/data'; //education,  skills,
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
// import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 pt-6 md:pt-8 pb-6 md:pb-8" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300 border-b-2 border-neutral-300">
        <ResumeSection title="Work Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Programming: Python, Stata, C++, Matlab, R, Numpy, Pandas, PyTorch, VBA
          <br></br>
          Databases: BvD Orbis, Zephyr, S&P Compustat, SDC Platinum, CapIQ, CRSP, Stepstone, Burgiss, Preqin
          <br></br>
          Applications: Bloomberg, WRDS, Github, LaTeX, Visual Studio, Dynare
          </p>
          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div> */}
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'CV';
export default Resume;
