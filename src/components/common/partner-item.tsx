import Image from "next/image";

interface PartnerItemProps {
  partner: {
    image: string;
    name: string;
  };
}

const PartnerItem = ({ partner }: PartnerItemProps) => {
  return (
    <div className="flex max-w-[200px] flex-col items-center gap-1">
      <div className="h-[80px] w-[80px] rounded-3xl border-2 border-[#f1f1f1] p-6">
        <Image
          src={partner.image}
          alt={partner.name}
          width={32}
          height={32}
          className="max-h-[32px] max-w-[32px]"
        />
      </div>
      <p className="mt-2 truncate text-sm font-medium">{partner.name}</p>
    </div>
  );
};

export default PartnerItem;
