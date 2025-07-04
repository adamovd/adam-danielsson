import React from 'react';

import HeroComponent from '../ui/hero/hero';

type BlocksType = {
  /* eslint-disable */
  [key: string]: React.FC<any>;
  /* eslint-enable */
};

export type BlockType = {
  _type: string;
  _id: string;
};

export type BlockProps = {
  index: number;
  block: BlockType;
};

const Blocks: BlocksType = {
  hero: HeroComponent,
};

/**
 * Used by the <PageBuilder>, this component renders a the component that matches the block type.
 */
const BlockRenderer = ({ block, index }: BlockProps) => {
  // Block does exist
  if (typeof Blocks[block._type] !== 'undefined') {
    return React.createElement(Blocks[block._type], {
      key: block._id,
      ...block,
      index,
    });
  }
  // Block doesn't exist yet
  return React.createElement(
    () => (
      <div className="w-full rounded bg-gray-100 p-20 text-center text-gray-500">
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    { key: block._id }
  );
};

export default BlockRenderer;
