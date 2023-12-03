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
        <ResumeSection title="Awards">
          <p className="pb-8">
          Vijay Bhagavan Award for Outstanding Economics 101 Teaching Assistant, 2020
          <br></br>
          Netspar MS Thesis Award, Network for Studies on Pensions, Aging & Retirement, 2019
          <br></br>
          Undergraduate Open Scholarship, Simon Fraser University, 4 times, 2013-2015
          <br></br>
          Statistics and Actuarial Science Endowment Award, Simon Fraser University, 2014
          <br></br>
          President’s/Dean's Honor Roll, Simon Fraser University, 4 times, 2013-2014
          <br></br>
          <br></br>
          Postgraduate Scholarships (PGS-D3) from NSERC, 2019–2022
          <br></br>
          Doctoral Merit Assistantship from University of North Carolina at Chapel Hill, 2018
          <br></br>
          GSS Professional Development Grant from Simon Fraser University, 2018
          <br></br>
          Graduate Fellowship from Simon Fraser University, 2017-2018
          <br></br>
          Chair’s Travel Grant from Simon Fraser University, 2017–2018
          <br></br>
          Entrance scholarship from Simon Fraser University, 2012
          </p>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'CV';
export default Resume;
