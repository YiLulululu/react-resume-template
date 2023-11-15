import {FC, memo} from 'react';

import {EducationItem} from '../../../data/dataDef';

const EducationItem: FC<{item: EducationItem}> = memo(({item}) => {
  const {title, date, university, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none">{university}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        {/* <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none">{date}</span>
        </div> */}
      </div>
      {content}
    </div>
  );
});

EducationItem.displayName = 'EducationItem';
export default EducationItem;
