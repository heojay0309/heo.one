import Image from 'next/image';
import Card from './wrapper/Card';
const Vote = () => {
  return (
    <Card row={1} col={1} order={1} className="hidden laptop:flex">
      <div className="flex gap-[16px] p-[16px]">
        <button>
          <Image src={'/etc/smile.svg'} alt={'happy'} width={64} height={64} />
        </button>
        <button>
          <Image src={'/etc/sad.svg'} alt={'sad'} width={64} height={64} />
        </button>
      </div>
    </Card>
  );
};

export default Vote;
