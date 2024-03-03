import Head from "next/head";

interface HeadTitleProps {
  title: string;
}

const HeadTitle: React.FC<HeadTitleProps> = ({ title }) => {
  return (
    <Head>
      <title>{title} - Ticket Stand</title>
    </Head>
  );
};

export default HeadTitle;
