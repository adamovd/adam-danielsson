interface CardHeaderProps {
  title: string;
}

const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <header className="p-4 text-lg font-bold text-dark-100">{title}</header>
  );
};

export default CardHeader;
