"use client";

import PartnerItem from "./partner-item";

interface PartnerListProps {
  title: string;
  partners: {
    image: string;
    name: string;
  }[];
}

const PartnerList = ({ title, partners }: PartnerListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>

      <div className="flex w-full gap-6 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {partners.map((partner) => (
          <PartnerItem key={partner.name} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
