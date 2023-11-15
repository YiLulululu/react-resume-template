import {FC, memo} from 'react';

import {ResearchItem} from '../../../data/dataDef';

const ResearchItem: FC<{item: ResearchItem}> = memo(({item}) => {
  const {title, authors, date, journal, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none">{authors}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none italic">{journal},</span>
          <span className="flex-1 text-sm font-medium sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

ResearchItem.displayName = 'ResearchItem';
export default ResearchItem;
