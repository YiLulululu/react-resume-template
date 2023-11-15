import {FC, memo} from 'react';

import {ReferenceItem} from '../../../data/dataDef';

const ReferenceItem: FC<{item: ReferenceItem}> = memo(({item}) => {
  const {person, title, department, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{person}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none">{title}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none">{department}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium sm:flex-none">{location}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

ReferenceItem.displayName = 'ReferenceItem';
export default ReferenceItem;
