import React from "react";

interface InfoTileProps {
  emoji: string;
  header: string;
  subheading: string | React.ReactNode;
  title?: string;
}

const InfoTile = ({ emoji, header, subheading, title }: InfoTileProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-2 drop-shadow-md">
      <div className="">{emoji}</div>
      <div className="">
        <h4 className="text-xs text-gray-400">{header}</h4>
        <h5 className="mt-0.5 text-sm font-medium" title={title}>
          {subheading}
        </h5>
      </div>
    </div>
  );
};

export default InfoTile;
