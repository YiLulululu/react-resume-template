import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/attribution.png';
import porfolioImage3 from '../images/portfolio/covid_dashboard.png';
import porfolioImage5 from '../images/portfolio/netspar.png';
import porfolioImage1 from '../images/portfolio/nvca.png';
import porfolioImage4 from '../images/portfolio/vis_target_benefits_plan.png';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Lu Yi',
  description: "Lu Yi's personal website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Projects',
  Resume: 'CV',
  Skills: 'skills',
  Stats: 'stats',  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Lu Yi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      My research focuses on the impact of private capital as a financial intermediary in the economy. Using innovative micro-level data and technology tools, I explore its role in a firm's lifecycle, its sources of superior returns, and how it can complement institutional investors' portfolios, like pension funds. My job market paper investigates the evolving equity ownership choices of UK firms from 2003 to 2018. My findings highlight an aging demographic in the UK's firm population, contributing to the decline in IPOs. Moreover, the rise of private capital leads to both substitution and filtering effects in the public market, further influencing the decreasing trend in public companies.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">PhD Candidate </strong>
        at the  <strong className="text-stone-100">University of North Carolina at Chapel Hill</strong> in the Economics department. My reasearch interests are in <strong className="text-stone-100">Private Capital</strong> and <strong className="text-stone-100">Corporate Finance</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am on the job market this year and will be <strong className="text-stone-100">available</strong> for interviews.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/CV_LY.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: '/Lu_JMP_final_v2.pdf',
      text: 'Job Market Paper',
      primary: false,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am nearing the completion of my Ph.D. in Economics at the University of North Carolina at Chapel Hill. My research interests are in private capital and corporate finance. I am on the job market this year and will be available for interviews.`,
  aboutItems: [
    {label: 'Location', text: 'Chapel Hill, NC', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Research', text: 'Private Capital, Corporate Finance', Icon: FlagIcon},
    {label: 'Interests', text: 'Fountain Pens, Plants', Icon: SparklesIcon},
    {label: 'Study', text: 'University of North Carolina at Chapel Hill', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Matlab',
        level: 10,
      },
      {
        name: 'R',
        level: 7,
      },
      {
        name: 'C++',
        level: 7,
      },
    ],
  },
  // {
  //   name: '',
  //   skills: [
  //     {
  //       name: 'React',
  //       level: 9,
  //     },
  //     {
  //       name: 'Typescript',
  //       level: 7,
  //     },
  //     {
  //       name: 'GraphQL',
  //       level: 6,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Employment Dynamics at VC-Backed Companies in the United States',
    description: 'Analyzed employment data and performed imputation analysis for a project conducted in collaboration with the National Venture Capital Association to estimate the total employment generated by VC-backed companies in the US from 1990 to 2020.',
    url: 'https://nvca.org/employment-dynamics/#vc-backed',
    image: porfolioImage1,
  },
  {
    title: 'Deal-level Attribution Analysis for Private Equity',
    description: 'Developed a methodology to estimate the contributions to financial performance by private equity-owned companies. The findings were featured in a white paper by the Institute for Private Capital, which addressed performance analysis and attribution within alternative investments.',
    url: 'https://uncipc.org/index.php/publication/performance-analysis-and-attribution-with-alternative-investments/',
    image: porfolioImage2,
  },
  {
    title: 'COVID-19 Decision Dashboard',
    description: "A 'real-time' research project commissioned by the Governor to advise on North Carolina's response to the pandemic, focusing on economic activity and business operations.",
    url: 'https://kenaninstitute.unc.edu/dashboard/reopening-amid-covid-19/',
    image: porfolioImage3,
  },
  {
    title: 'Visualization of Target Benefit Plan Designs',
    description: 'Investigated intergenerational equity in the Canadian implementation of risk-sharing pension plans using a Value-Based Asset Liability Management framework.',
    url: 'https://retirement.shinyapps.io/targetbenefitplan/',
    image: porfolioImage4,
  },
  {
    title: 'Quantifying Inter-generational Equity under Different Target Benefit Plan Designs',
    description: 'This thesis won the 2019 Netspar M.Sc. Thesis Award. Netspar (Network for Studies on Pensions, Aging and Retirement) is a European think tank and research network dedicated to promoting a wider understanding of the economic and social implications of pensions, aging, and retirement. ',
    url: 'https://www.netspar.nl/en/news/netspar-thesis-awards-granted-excellent-contributions-to-netspar-research-program/',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
const link_color = {color: '#7BAFD4', textDecoration: 'underline'};
export const education: TimelineItem[] = [
  {
    date: 'Expected May 2024',
    location: 'University of North Carolina at Chapel Hill',
    title: 'PhD, Economics',
    content: <p>
      Chairs of the Comittee: <a href='https://econ.unc.edu/directory/achari/' style={link_color}>Anusha Chari</a> and <a href='https://kenaninstitute.unc.edu/people/greg-brown/' style={link_color}>Gregory Brown</a>
      <br></br>
      Dissertation: The Evolution of Equity Ownership: Declining IPOs, the Rise of Private Markets, and Economic Dynamism.
      </p>,
  },
  {
    date: '2018',
    location: 'Simon Fraser University',
    title: 'MSc, Statistics and Actuarial Science',
    content: <p>
      Supervisors: <a href='https://www.sfu.ca/~bsanders/' style={link_color}>Barbara Sanders</a> and <a href='https://www.sfu.ca/~jbegin/' style={link_color}>Jean-François Bégin</a>
      <br></br>
      Thesis: <a href='https://www.netspar.nl//assets/uploads/P20180620_MSc19_Lu-yi.pdf'>Quantifying Inter-generational Equity under Different Target Benefit Plan Designs</a>.
      </p>,
  },
  {
    date: '2015',
    location: 'Simon Fraser University',
    title: 'BSc, Statistics and Actuarial Science',
    content: <p>Bachelor's degree in science, major in actuarial science.</p>,
  },
];

export const jmp: TimelineItem[] = [
  {
    date: 'Job Market Paper (2023)',
    location: 'Lu Yi',
    title: 'The Evolution of Equity Ownership: Declining IPOs, the Rise of Private Markets, and Economic Dynamism',
    content: (
      <p>
        <strong>Abstract</strong>: Since the early 2000s, many advanced economies have seen a decline in initial public offerings (IPOs) of stock and, consequently, the count of publicly-traded companies. The drop in IPOs has raised pressing questions: Is there a decline in transformative new firms and has our financial system become less supportive of them? A primary barrier to understanding these patterns is the scarcity of data on private firms. To bridge this gap, I compile a comprehensive dataset tracking the financial characteristics and ownership structure for both public and private firms in the United Kingdom (UK) throughout their lifespan. I find that a decreasing population of young firms, a trend underscored in economic dynamism literature, accounts for around 25% of the IPO reduction in the UK since its 2007 peak. Yet, this is just one facet of a broader trend. I confirm anecdotal evidence that an increasing proportion of high-growth young firms are turning to private external funding sources, such as venture capital and other private equity (PE) funds. This implies that the outlook for transformational startups is not as pessimistic as the declining trend in IPOs suggests. Furthermore, I highlight the pronounced role of mergers and acquisitions (M&A), particularly an uptick in cross-border M&A as an ownership transition for private firms. Finally, I show that this more complex view of how equity ownership evolves is integral to understanding trends in economic dynamism.
        <br></br><br></br>
        <strong><a href='/Lu_JMP_final_v2.pdf' style={link_color}>Paper Download</a></strong>
      </p>
    ),
  },
]

export const publications: TimelineItem[] = [
  {
    date: 'Journal of Pension Economics and Finance (2022)',
    location: 'with Barbara Sanders, Jean-François Bégin',
    title: 'Redistribution in Modern Occupational Pension Plans: Hidden Versus Explicit Risk Transactions',
    content: (
      <p>
        <strong><a href='https://www.cambridge.org/core/journals/journal-of-pension-economics-and-finance/article/abs/redistribution-in-collective-pension-arrangements-without-a-sponsor-guarantee-hidden-versus-explicit-risk-transactions/34C472A63DBDCC177EE153EA983CF992' style={link_color}>Paper Link</a></strong>
      </p>
    ),
  },
]

export const working_papers: TimelineItem[] = [
  {
    date: 'UNC Institute for Private Capital working paper (2023)',
    location: 'with Gregory Brown',
    title: 'How Do Private Equity Firms Create Value?',
    content: (
      <p>
        <strong><a href='/How_do_private_equity_firms_create_value_.pdf' style={link_color}>Paper Download</a></strong>
      </p>
    ),
  },
  {
    date: 'UNC Kenan Institute of Private Enterprise working paper (2022)',
    location: 'with Matteo Binfare, Gregory Brown, Andra Ghent, Wendy Hu, Christian Lundblad, Richard Maxwell, and Shawn Munday',
    title: 'Performance Analysis and Attribution with Alternative Investments',
    content: (
      <p>
        <strong><a href='https://uncipc.com/wp-content/uploads/2022/02/IPC-Performance-Attribution-Analysis-v2022-02-12.pdf' style={link_color}>Paper Link</a></strong>
      </p>
    ),
  },
  {
    date: 'UNC Kenan Institute of Private Enterprise working paper (2022)',
    location: 'with Gregory Brown, Michael Chow, and David Fisher',
    title: 'Employment Dynamics at Venture-Backed Companies Between 1990 and 2020',
    content: (
      <p>
        <strong><a href='https://nvca.org/wp-content/uploads/2022/02/Employment-Dynamics-at-Venture-Backed-Companies_FINAL.pdf' style={link_color}>Paper Link</a></strong>
      </p>
    ),
  },
  {
    date: 'UNC Kenan Institute of Private Enterprise working paper (2020)',
    location: 'with Gregory Brown and Eric Ghysels',
    title: 'Estimating Undetected COVID-19 Infections',
    content: (
      <p>
        <strong><a href='https://kenaninstitute.unc.edu/wp-content/uploads/2020/08/Unobserved_COVID_Infection.pdf' style={link_color}>Paper Link</a></strong>
      </p>
    ),
  },
  {
    date: 'Work in progress (2023)',
    location: 'with Anusha Chari, Christian Lundblad, and Karlye Stedman',
    title: 'U.S. Monetary Policy and the Deviations from Covered Interest Parity',
    content: (
      <p>
      
      </p>
    ),
  },
]

export const experience: TimelineItem[] = [
  {
    date: 'Since May 2021',
    location: 'Institute for Private Capital, Chapel Hill, United States',
    title: 'Research Assistant',
    content: (
      <p>
        <a href="https://nvca.org/employment-dynamics/" style={link_color}>Employment Dynamics at VC-Backed Companies in the United States</a>: Analyzed employment data and performed imputation analysis for a project conducted in collaboration with the National Venture Capital Association to estimate the total employment generated by VC-backed companies in the US from 1990 to 2020. 

        <br></br><br></br>
        <a href="https://uncipc.org/index.php/publication/performance-analysis-and-attribution-with-alternative-investments/" style={link_color}>Deal-level Attribution Analysis for Private Equity</a>: Developed a methodology to estimate the contributions to financial performance by private equity-owned companies. The findings were featured in a white paper by the Institute for Private Capital, which addressed performance analysis and attribution within alternative investments. 

        <br></br><br></br>
        Senior Housing vs. Aging-In-Place: Analyzed the residential choice behavior of the senior population across various US regions. Overlaying maps of senior care supply data identified areas with inadequate senior care facilities, aiding investment decisions and policymaking.
      </p>
    ),
  },
  {
    date: 'June 2020 - May 2021',
    location: 'Kenan Institute of Private Enterprise, Chapel Hill, United States',
    title: 'Research Assistant',
    content: (
      <p>
        <a href="https://kenaninstitute.unc.edu/dashboard/reopening-amid-covid-19/" style={link_color}>COVID-19 Decision Dashboard</a>: Collected and analyzed data for the COVID-19 Decision Dashboard, a 'real-time' research project commissioned by the Governor to advise on North Carolina's response to the pandemic, focusing on economic activity and business operations. 
        <br></br><br></br>
        <a href='https://kenaninstitute.unc.edu/wp-content/uploads/2020/08/Unobserved_COVID_Infection.pdf' style={link_color}>Estimating Undetected COVID-19 Infections</a>: Constructed and estimated a time-varying Markov model to forecast COVID-19 cases in North Carolina.
      </p>
    ),
  },
  {
    date: '2015 - 2018',
    location: 'Simon Fraser University, Burnaby, Canada',
    title: 'Research Assistant',
    content: (
      <p>
        <a href="https://retirement.shinyapps.io/targetbenefitplan/" style={link_color}>Visualization Tool for Hidden Risk Transactions under Different Pension Plan Designs</a>: Investigated intergenerational equity in the Canadian implementation of risk-sharing pension plans using a Value-Based Asset Liability Management framework.
      </p>
    ),
  },
  {
    date: '2016 - 2017',
    location: "Moody's Analytics, Toronto, Canada",
    title: 'Co-op Actuarial Programmer, Annuities Group',
    content: (
      <p>
        Developed and Implemented an approximation method for projecting a joint life variable annuity with a spousal continuation option.
        Programmed new features in the annuity module using C++ to meet client requirements.
      </p>
    ),
  },

];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     // {
//     //   name: 'John Doe',
//     //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//     //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     // },
//     // {
//     //   name: 'Jane Doe',
//     //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//     //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'yiluy@live.unc.edu',
      href: 'mailto:yiluy@live.unc.edu',
    },
    {
      type: ContactType.Location,
      text: 'Chapel Hill NC, United States',
      href: 'https://www.google.com/maps/place/University+of+North+Carolina+at+Chapel+Hill/@35.9049122,-79.0494883,17z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'Lu Yi',
      href: 'https://github.com/YiLulululu',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/YiLulululu'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lu-yi-636bb290/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
